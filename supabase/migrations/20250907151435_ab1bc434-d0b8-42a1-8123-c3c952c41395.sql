-- Remove public read access to appointment data
DROP POLICY IF EXISTS "Anyone can view scheduled appointments" ON public.appointments;

-- Ensure only service role can view appointment data  
-- (The existing "Service role can view all appointments" policy already handles this)

-- Add additional security: ensure leads can only be inserted by public, not read
-- (The existing policies are already correct for leads table)