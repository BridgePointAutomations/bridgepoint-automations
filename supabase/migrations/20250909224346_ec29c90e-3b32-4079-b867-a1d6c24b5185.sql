-- Fix security vulnerability: Secure submission_logs table with granular access controls
-- The current broad "ALL" policy needs to be replaced with specific, restrictive policies

-- 1. Drop the existing overly broad policy
DROP POLICY IF EXISTS "Service role manages submission logs" ON public.submission_logs;

-- 2. Create granular policies for submission_logs table

-- Service role needs full access for security functions (logging, rate limiting, cleanup)
CREATE POLICY "Service role can insert submission logs"
ON public.submission_logs
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can select submission logs"
ON public.submission_logs
FOR SELECT
TO service_role
USING (true);

CREATE POLICY "Service role can delete old submission logs"
ON public.submission_logs
FOR DELETE
TO service_role
USING (true);

-- Admins get read-only access for security monitoring (using secure role system)
CREATE POLICY "Admins can monitor submission logs"
ON public.submission_logs
FOR SELECT
TO authenticated
USING (public.current_user_has_role('admin'));

-- 3. Explicitly deny all public access (no policies for anonymous users)
-- This ensures no public access is possible to sensitive security data

-- 4. Create secure function for admins to query submission logs safely
CREATE OR REPLACE FUNCTION public.get_security_logs(
  limit_count INTEGER DEFAULT 50,
  offset_count INTEGER DEFAULT 0,
  include_suspicious_only BOOLEAN DEFAULT FALSE
)
RETURNS TABLE(
  id UUID,
  created_at TIMESTAMP WITH TIME ZONE,
  form_type TEXT,
  is_suspicious BOOLEAN,
  honeypot_triggered BOOLEAN,
  -- Exclude sensitive data like full IP addresses and user agents
  ip_masked TEXT,
  user_agent_summary TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only admins and service role can access security logs
  IF auth.role() != 'service_role' AND 
     NOT public.current_user_has_role('admin') THEN
    RAISE EXCEPTION 'Access denied: Insufficient permissions to view security logs';
  END IF;
  
  RETURN QUERY
  SELECT 
    sl.id,
    sl.created_at,
    sl.form_type,
    sl.is_suspicious,
    sl.honeypot_triggered,
    -- Mask IP addresses for privacy (show only first 2 octets)
    CASE 
      WHEN sl.ip_address IS NOT NULL THEN
        split_part(sl.ip_address::TEXT, '.', 1) || '.' || 
        split_part(sl.ip_address::TEXT, '.', 2) || '.xxx.xxx'
      ELSE 'unknown'
    END as ip_masked,
    -- Summarize user agent without revealing full details
    CASE 
      WHEN sl.user_agent IS NULL THEN 'unknown'
      WHEN sl.user_agent ~* 'bot|crawler|spider|scraper' THEN 'bot_detected'
      WHEN length(sl.user_agent) > 50 THEN 'browser_' || left(sl.user_agent, 20) || '...'
      ELSE 'browser_generic'
    END as user_agent_summary
  FROM public.submission_logs sl
  WHERE 
    CASE 
      WHEN include_suspicious_only THEN sl.is_suspicious = true OR sl.honeypot_triggered = true
      ELSE true
    END
  ORDER BY sl.created_at DESC
  LIMIT limit_count
  OFFSET offset_count;
END;
$$;

-- 5. Create function to get security statistics (safe aggregated data)
CREATE OR REPLACE FUNCTION public.get_security_stats(
  days_back INTEGER DEFAULT 7
)
RETURNS TABLE(
  total_submissions BIGINT,
  suspicious_submissions BIGINT,
  honeypot_triggers BIGINT,
  unique_ips BIGINT,
  submission_rate_per_hour NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only admins and service role can access security statistics
  IF auth.role() != 'service_role' AND 
     NOT public.current_user_has_role('admin') THEN
    RAISE EXCEPTION 'Access denied: Insufficient permissions to view security statistics';
  END IF;
  
  RETURN QUERY
  SELECT 
    COUNT(*) as total_submissions,
    COUNT(*) FILTER (WHERE is_suspicious = true) as suspicious_submissions,
    COUNT(*) FILTER (WHERE honeypot_triggered = true) as honeypot_triggers,
    COUNT(DISTINCT ip_address) as unique_ips,
    ROUND(COUNT(*)::NUMERIC / (days_back * 24), 2) as submission_rate_per_hour
  FROM public.submission_logs
  WHERE created_at >= now() - (days_back || ' days')::INTERVAL;
END;
$$;

-- 6. Update existing security functions to ensure they still work properly
-- (These should already work since they use SECURITY DEFINER)

-- Verify that cleanup function still works (it should with the new DELETE policy)
-- Verify that rate limiting function still works (it should with the new SELECT policy)
-- Verify that log submission function still works (it should with the new INSERT policy)

-- 7. Add comment to document the security model
COMMENT ON TABLE public.submission_logs IS 
'Security monitoring table containing sensitive operational data. Access restricted to service role for operations and admins for monitoring. No public access allowed.';

-- 8. Create indexes for performance (if not already present)
CREATE INDEX IF NOT EXISTS idx_submission_logs_created_at 
ON public.submission_logs (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_submission_logs_suspicious 
ON public.submission_logs (is_suspicious) 
WHERE is_suspicious = true;

CREATE INDEX IF NOT EXISTS idx_submission_logs_rate_limit 
ON public.submission_logs (ip_address, form_type, created_at);