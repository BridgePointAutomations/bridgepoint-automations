-- Fix leads table SELECT policies to explicitly prevent public access
-- Drop existing SELECT policies that are incorrectly configured as RESTRICTIVE
DROP POLICY IF EXISTS "Secure admin access to leads" ON public.leads;
DROP POLICY IF EXISTS "Service role can view all leads" ON public.leads;

-- Create PERMISSIVE SELECT policies (these will be OR'd together)
-- Only admins can view leads
CREATE POLICY "Admins can view all leads"
ON public.leads
FOR SELECT
TO authenticated
USING (public.current_user_has_role('admin'::app_role));

-- Service role can view leads (for backend operations)
CREATE POLICY "Service role can view leads"
ON public.leads
FOR SELECT
TO service_role
USING (true);

-- Explicitly deny anonymous/public SELECT access
-- This is the default behavior, but we make it explicit for security clarity
CREATE POLICY "Deny public SELECT on leads"
ON public.leads
FOR SELECT
TO anon, public
USING (false);