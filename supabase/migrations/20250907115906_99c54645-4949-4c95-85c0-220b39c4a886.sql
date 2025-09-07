-- Create appointments table to manage scheduled slots
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'America/New_York',
  status TEXT NOT NULL DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create available_slots table for managing availability  
CREATE TABLE public.available_slots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  day_of_week INTEGER NOT NULL, -- 0=Sunday, 1=Monday, etc.
  start_time TIME NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 45,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.available_slots ENABLE ROW LEVEL SECURITY;

-- Appointments policies
CREATE POLICY "Anyone can create appointments" 
ON public.appointments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Service role can view all appointments" 
ON public.appointments 
FOR SELECT 
USING (auth.role() = 'service_role'::text);

CREATE POLICY "Service role can update appointments" 
ON public.appointments 
FOR UPDATE 
USING (auth.role() = 'service_role'::text);

-- Available slots policies  
CREATE POLICY "Anyone can view available slots" 
ON public.available_slots 
FOR SELECT 
USING (true);

CREATE POLICY "Service role can manage available slots" 
ON public.available_slots 
FOR ALL 
USING (auth.role() = 'service_role'::text);

-- Add trigger for appointments updated_at
CREATE TRIGGER update_appointments_updated_at
BEFORE UPDATE ON public.appointments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default available slots (Monday-Friday, 9 AM to 5 PM)
INSERT INTO public.available_slots (day_of_week, start_time, duration_minutes) VALUES
(1, '09:00:00', 45), (1, '10:00:00', 45), (1, '11:00:00', 45), (1, '13:00:00', 45), (1, '14:00:00', 45), (1, '15:00:00', 45), (1, '16:00:00', 45),
(2, '09:00:00', 45), (2, '10:00:00', 45), (2, '11:00:00', 45), (2, '13:00:00', 45), (2, '14:00:00', 45), (2, '15:00:00', 45), (2, '16:00:00', 45),
(3, '09:00:00', 45), (3, '10:00:00', 45), (3, '11:00:00', 45), (3, '13:00:00', 45), (3, '14:00:00', 45), (3, '15:00:00', 45), (3, '16:00:00', 45),
(4, '09:00:00', 45), (4, '10:00:00', 45), (4, '11:00:00', 45), (4, '13:00:00', 45), (4, '14:00:00', 45), (4, '15:00:00', 45), (4, '16:00:00', 45),
(5, '09:00:00', 45), (5, '10:00:00', 45), (5, '11:00:00', 45), (5, '13:00:00', 45), (5, '14:00:00', 45), (5, '15:00:00', 45), (5, '16:00:00', 45);