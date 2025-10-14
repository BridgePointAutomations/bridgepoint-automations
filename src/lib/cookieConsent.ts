interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 365;

export const getCookieConsent = (): CookieConsent | null => {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) return null;
  
  try {
    const parsed = JSON.parse(consent);
    // Check if consent is expired (365 days)
    const consentDate = new Date(parsed.timestamp);
    const expiryDate = new Date(consentDate);
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
    
    if (new Date() > expiryDate) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    
    return parsed;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: Omit<CookieConsent, 'timestamp'>) => {
  const consentWithTimestamp: CookieConsent = {
    ...consent,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp));
};

export const hasCookieConsent = (): boolean => {
  return getCookieConsent() !== null;
};

export const clearCookieConsent = () => {
  localStorage.removeItem(CONSENT_KEY);
};
