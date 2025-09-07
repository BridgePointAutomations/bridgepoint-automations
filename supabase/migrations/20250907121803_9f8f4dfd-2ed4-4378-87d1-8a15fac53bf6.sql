
-- Ensure anon/authenticated can use the public schema
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Leads: allow public inserts (RLS still applies)
GRANT INSERT ON public.leads TO anon, authenticated;

-- Appointments: allow public inserts and reads (reads constrained by RLS policy below)
GRANT INSERT, SELECT ON public.appointments TO anon, authenticated;

-- Available slots: allow public reads (already protected by RLS)
GRANT SELECT ON public.available_slots TO anon, authenticated;

-- Appointments: allow the public to view only scheduled appointments
-- This is needed so the time picker can hide already-booked times.
-- It exposes only the rows your queries request; RLS restricts WHICH rows are visible.
CREATE POLICY "Anyone can view scheduled appointments"
ON public.appointments
FOR SELECT
USING (status = 'scheduled');
