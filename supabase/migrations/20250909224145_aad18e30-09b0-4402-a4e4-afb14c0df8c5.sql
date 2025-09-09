-- Fix security vulnerability: Implement proper role-based access control for leads table
-- This replaces the insecure metadata-based role checking with a proper user roles system

-- 1. Create enum for application roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. Create user_roles table for secure role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create security definer function to safely check user roles
-- This prevents recursive RLS issues and provides secure role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

-- 5. Create helper function to check if current user has role
CREATE OR REPLACE FUNCTION public.current_user_has_role(_role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE 
    WHEN auth.uid() IS NULL THEN FALSE
    ELSE public.has_role(auth.uid(), _role)
  END;
$$;

-- 6. RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.current_user_has_role('admin'));

CREATE POLICY "Only service role can manage user roles"
ON public.user_roles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 7. Update leads table RLS policies to use secure role checking
-- Drop the existing insecure admin policy
DROP POLICY IF EXISTS "Authenticated admins can view leads" ON public.leads;

-- Create new secure admin policy
CREATE POLICY "Secure admin access to leads"
ON public.leads
FOR SELECT
TO authenticated
USING (public.current_user_has_role('admin'));

-- 8. Add trigger to automatically update updated_at in user_roles
CREATE TRIGGER update_user_roles_updated_at
    BEFORE UPDATE ON public.user_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- 9. Create function to safely add admin users (for initial setup)
CREATE OR REPLACE FUNCTION public.add_admin_user(_user_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only service role can call this function
  IF auth.role() != 'service_role' THEN
    RAISE EXCEPTION 'Access denied: Only service role can add admin users';
  END IF;
  
  -- Add admin role if not already exists
  INSERT INTO public.user_roles (user_id, role)
  VALUES (_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
END;
$$;

-- 10. Create function to get secure leads data (enhanced security)
CREATE OR REPLACE FUNCTION public.get_leads_enhanced_security(
  limit_count INTEGER DEFAULT 50, 
  offset_count INTEGER DEFAULT 0
)
RETURNS TABLE(
  id UUID, 
  first_name TEXT, 
  last_name TEXT, 
  email TEXT, 
  company_name TEXT, 
  created_at TIMESTAMP WITH TIME ZONE, 
  status TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Enhanced security: Check both service role and admin role
  IF auth.role() != 'service_role' AND 
     NOT public.current_user_has_role('admin') THEN
    RAISE EXCEPTION 'Access denied: Insufficient permissions to view leads';
  END IF;
  
  -- Return limited, safe data (excluding sensitive fields like phone, full details)
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