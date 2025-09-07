-- Create enum for lead status
CREATE TYPE public.lead_status AS ENUM (
  'new',
  'contacted', 
  'qualified',
  'proposal_sent',
  'closed_won',
  'closed_lost'
);

-- Create enum for company size
CREATE TYPE public.company_size AS ENUM (
  '1-10',
  '11-50', 
  '51-200',
  '201-1000',
  '1000+'
);

-- Create leads table
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT NOT NULL,
  job_title TEXT,
  
  -- Business Information  
  company_size company_size,
  industry TEXT,
  website TEXT,
  
  -- Process Information
  current_processes TEXT,
  pain_points TEXT,
  automation_goals TEXT,
  timeline TEXT,
  budget_range TEXT,
  
  -- Lead Management
  status lead_status NOT NULL DEFAULT 'new',
  source TEXT DEFAULT 'booking_form',
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing leads (for future admin access)
CREATE POLICY "Service role can view all leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'service_role');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for common queries
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_email ON public.leads(email);