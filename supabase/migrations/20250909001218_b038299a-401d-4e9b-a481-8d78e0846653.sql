-- Fix security warnings: Update functions to set search_path

-- Fix validate_email function
CREATE OR REPLACE FUNCTION public.validate_email(email TEXT) 
RETURNS BOOLEAN
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$;

-- Fix validate_phone function
CREATE OR REPLACE FUNCTION public.validate_phone(phone TEXT)
RETURNS BOOLEAN  
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $$
BEGIN
  -- Allow various phone formats but require some digits
  RETURN phone IS NULL OR phone ~ '[0-9]';
END;
$$;

-- Fix detect_honeypot function
CREATE OR REPLACE FUNCTION public.detect_honeypot(honeypot_field TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $$
BEGIN
  -- Return true if honeypot field is filled (indicates bot)
  RETURN honeypot_field IS NOT NULL AND trim(honeypot_field) != '';
END;
$$;

-- Fix validate_lead_submission function
CREATE OR REPLACE FUNCTION public.validate_lead_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
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

-- Fix validate_appointment_submission function
CREATE OR REPLACE FUNCTION public.validate_appointment_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
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