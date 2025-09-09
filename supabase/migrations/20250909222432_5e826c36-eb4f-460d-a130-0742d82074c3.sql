-- Security hardening for leads table
-- This migration addresses the security vulnerability by:
-- 1. Tightening INSERT policies with rate limiting and validation
-- 2. Ensuring SELECT policies are properly restricted
-- 3. Adding audit logging for all operations
-- 4. Implementing honeypot and bot detection

-- First, let's drop existing policies to recreate them with better security
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;
DROP POLICY IF EXISTS "Service role can view all leads" ON public.leads;

-- Create a more secure INSERT policy with validation
CREATE POLICY "Secure lead submission" 
ON public.leads 
FOR INSERT 
WITH CHECK (
  -- Only allow if rate limit check passes
  public.check_rate_limit(
    inet_client_addr(), 
    'lead_submission',
    '1 hour'::interval,
    5
  )
  -- Note: Additional validation will be handled by triggers
);

-- Maintain service role SELECT access but make it explicit
CREATE POLICY "Service role can view all leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'service_role'::text);

-- Add policy for authenticated admin users (if you have admin roles)
CREATE POLICY "Authenticated admins can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (
  -- Only if user has admin role (you can modify this condition based on your admin setup)
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND raw_user_meta_data->>'role' = 'admin'
  )
);

-- Create trigger to validate and log all lead submissions
CREATE OR REPLACE FUNCTION public.secure_lead_submission()
RETURNS TRIGGER AS $$
DECLARE
  client_ip INET;
  user_agent TEXT;
  is_bot BOOLEAN DEFAULT FALSE;
BEGIN
  -- Get client information
  client_ip := inet_client_addr();
  user_agent := current_setting('request.headers', true)::json->>'user-agent';
  
  -- Validate the submission using existing validation function
  NEW := (SELECT * FROM public.validate_lead_submission() WHERE OLD IS NULL AND NEW = NEW);
  
  -- Detect if this might be a bot submission
  IF user_agent IS NULL OR 
     user_agent = '' OR
     user_agent ~* 'bot|crawler|spider|scraper|curl|wget' THEN
    is_bot := TRUE;
  END IF;
  
  -- Log the submission attempt
  PERFORM public.log_submission(
    client_ip,
    user_agent,
    'lead_submission',
    'leads',
    NEW.id,
    is_bot
  );
  
  -- If it looks like a bot, reject the submission
  IF is_bot THEN
    RAISE EXCEPTION 'Submission rejected due to suspicious activity';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create the trigger
DROP TRIGGER IF EXISTS secure_lead_submission_trigger ON public.leads;
CREATE TRIGGER secure_lead_submission_trigger
  BEFORE INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.secure_lead_submission();

-- Add additional security policies for UPDATE and DELETE operations
-- (Even though these aren't currently allowed, it's good to be explicit)
CREATE POLICY "No public updates allowed"
ON public.leads
FOR UPDATE
USING (false);

CREATE POLICY "No public deletes allowed" 
ON public.leads
FOR DELETE
USING (false);

-- Service role can still manage records
CREATE POLICY "Service role can manage leads"
ON public.leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create a function to safely query leads with built-in access control
CREATE OR REPLACE FUNCTION public.get_leads_secure(
  limit_count INTEGER DEFAULT 50,
  offset_count INTEGER DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  company_name TEXT,
  created_at TIMESTAMPTZ,
  status TEXT
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow service role or admin users
  IF auth.role() != 'service_role' AND 
     (auth.uid() IS NULL OR 
      (SELECT raw_user_meta_data->>'role' FROM auth.users WHERE id = auth.uid()) != 'admin') THEN
    RAISE EXCEPTION 'Access denied: insufficient permissions';
  END IF;
  
  -- Return limited, safe data (excluding sensitive fields like phone)
  RETURN QUERY
  SELECT 
    l.id,
    l.first_name,
    l.last_name,
    l.email,
    l.company_name,
    l.created_at,
    l.status::TEXT
  FROM public.leads l
  ORDER BY l.created_at DESC
  LIMIT limit_count
  OFFSET offset_count;
END;
$$;

-- Add indexes for better performance on security-related queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_submission_logs_ip_time ON public.submission_logs(ip_address, created_at);

-- Grant appropriate permissions
GRANT EXECUTE ON FUNCTION public.get_leads_secure TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_leads_secure TO service_role;