-- Security Enhancement: Rate limiting and input validation

-- 1. Create submission tracking table for rate limiting
CREATE TABLE IF NOT EXISTS public.submission_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET,
  user_agent TEXT,
  form_type TEXT NOT NULL, -- 'lead' or 'appointment'
  table_name TEXT NOT NULL, -- 'leads' or 'appointments'
  record_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_suspicious BOOLEAN DEFAULT false,
  honeypot_triggered BOOLEAN DEFAULT false
);

-- Enable RLS on submission logs (service role only)
ALTER TABLE public.submission_logs ENABLE ROW LEVEL SECURITY;

-- Policy: Only service role can manage submission logs
CREATE POLICY "Service role manages submission logs" ON public.submission_logs
FOR ALL USING (auth.role() = 'service_role'::text);

-- 2. Create rate limiting function
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address INET,
  p_form_type TEXT,
  p_time_window INTERVAL DEFAULT '1 hour'::interval,
  p_max_submissions INTEGER DEFAULT 5
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  submission_count INTEGER;
BEGIN
  -- Count submissions from this IP in the time window
  SELECT COUNT(*) INTO submission_count
  FROM public.submission_logs
  WHERE ip_address = p_ip_address 
    AND form_type = p_form_type
    AND created_at > (now() - p_time_window);
  
  -- Return true if under the limit
  RETURN submission_count < p_max_submissions;
END;
$$;

-- 3. Create input validation functions
CREATE OR REPLACE FUNCTION public.validate_email(email TEXT) 
RETURNS BOOLEAN
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$;

CREATE OR REPLACE FUNCTION public.validate_phone(phone TEXT)
RETURNS BOOLEAN  
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  -- Allow various phone formats but require some digits
  RETURN phone IS NULL OR phone ~ '[0-9]';
END;
$$;

-- 4. Create honeypot detection function
CREATE OR REPLACE FUNCTION public.detect_honeypot(honeypot_field TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
IMMUTABLE  
AS $$
BEGIN
  -- Return true if honeypot field is filled (indicates bot)
  RETURN honeypot_field IS NOT NULL AND trim(honeypot_field) != '';
END;
$$;

-- 5. Create logging function for submissions
CREATE OR REPLACE FUNCTION public.log_submission(
  p_ip_address INET,
  p_user_agent TEXT,
  p_form_type TEXT,
  p_table_name TEXT,
  p_record_id UUID,
  p_honeypot_triggered BOOLEAN DEFAULT false
) RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  is_suspicious BOOLEAN DEFAULT false;
BEGIN
  -- Check for suspicious patterns
  IF p_honeypot_triggered OR 
     p_user_agent IS NULL OR 
     p_user_agent = '' OR
     p_user_agent ~* 'bot|crawler|spider|scraper' THEN
    is_suspicious := true;
  END IF;

  INSERT INTO public.submission_logs (
    ip_address, 
    user_agent, 
    form_type, 
    table_name, 
    record_id, 
    is_suspicious,
    honeypot_triggered
  ) VALUES (
    p_ip_address,
    p_user_agent,
    p_form_type,
    p_table_name, 
    p_record_id,
    is_suspicious,
    p_honeypot_triggered
  );
END;
$$;

-- 6. Add validation triggers for leads table
CREATE OR REPLACE FUNCTION public.validate_lead_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  -- Validate email format
  IF NOT public.validate_email(NEW.email) THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  -- Validate phone if provided
  IF NOT public.validate_phone(NEW.phone) THEN
    RAISE EXCEPTION 'Invalid phone format';
  END IF;
  
  -- Sanitize text fields (basic)
  NEW.first_name := trim(NEW.first_name);
  NEW.last_name := trim(NEW.last_name);
  NEW.company_name := trim(NEW.company_name);
  
  -- Check for minimum required length
  IF length(NEW.first_name) < 1 OR length(NEW.last_name) < 1 THEN
    RAISE EXCEPTION 'First name and last name are required';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for leads validation
DROP TRIGGER IF EXISTS validate_lead_trigger ON public.leads;
CREATE TRIGGER validate_lead_trigger
  BEFORE INSERT OR UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.validate_lead_submission();

-- 7. Add validation triggers for appointments table  
CREATE OR REPLACE FUNCTION public.validate_appointment_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  -- Validate appointment is not in the past
  IF NEW.appointment_date < CURRENT_DATE THEN
    RAISE EXCEPTION 'Cannot schedule appointments in the past';
  END IF;
  
  -- Validate appointment is not more than 6 months in the future
  IF NEW.appointment_date > CURRENT_DATE + INTERVAL '6 months' THEN
    RAISE EXCEPTION 'Cannot schedule appointments more than 6 months in advance';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for appointments validation
DROP TRIGGER IF EXISTS validate_appointment_trigger ON public.appointments;
CREATE TRIGGER validate_appointment_trigger
  BEFORE INSERT OR UPDATE ON public.appointments
  FOR EACH ROW EXECUTE FUNCTION public.validate_appointment_submission();

-- 8. Update RLS policies to include basic rate limiting check
-- Note: This is a basic example. In production, you'd want more sophisticated rate limiting

-- 9. Add indexes for performance on submission logs
CREATE INDEX IF NOT EXISTS idx_submission_logs_ip_time ON public.submission_logs(ip_address, created_at);
CREATE INDEX IF NOT EXISTS idx_submission_logs_suspicious ON public.submission_logs(is_suspicious, created_at);

-- 10. Add cleanup function for old logs (run this periodically)
CREATE OR REPLACE FUNCTION public.cleanup_old_submission_logs()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  -- Delete logs older than 30 days
  DELETE FROM public.submission_logs 
  WHERE created_at < now() - INTERVAL '30 days';
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RETURN deleted_count;
END;
$$;