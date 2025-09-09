// Client-side security utilities
import { toast } from "@/hooks/use-toast";

interface RateLimitData {
  count: number;
  firstAttempt: number;
}

class ClientSecurity {
  private static instance: ClientSecurity;
  private rateLimitStore: Map<string, RateLimitData> = new Map();

  private constructor() {}

  public static getInstance(): ClientSecurity {
    if (!ClientSecurity.instance) {
      ClientSecurity.instance = new ClientSecurity();
    }
    return ClientSecurity.instance;
  }

  /**
   * Check if the client is rate limited for a specific action
   * @param action - The action being rate limited (e.g., 'contact_form', 'booking_form')
   * @param maxAttempts - Maximum attempts allowed (default: 5)
   * @param windowMs - Time window in milliseconds (default: 1 hour)
   * @returns true if allowed, false if rate limited
   */
  public checkRateLimit(
    action: string, 
    maxAttempts: number = 5, 
    windowMs: number = 3600000 // 1 hour
  ): boolean {
    const now = Date.now();
    const key = `${action}_${this.getClientIdentifier()}`;
    const existing = this.rateLimitStore.get(key);

    if (!existing) {
      // First attempt
      this.rateLimitStore.set(key, { count: 1, firstAttempt: now });
      return true;
    }

    // Check if window has expired
    if (now - existing.firstAttempt > windowMs) {
      // Reset the window
      this.rateLimitStore.set(key, { count: 1, firstAttempt: now });
      return true;
    }

    // Check if within limit
    if (existing.count < maxAttempts) {
      existing.count++;
      return true;
    }

    // Rate limited
    const timeLeft = Math.ceil((windowMs - (now - existing.firstAttempt)) / 60000); // minutes
    toast({
      title: "Rate Limit Exceeded",
      description: `Please wait ${timeLeft} minutes before submitting again.`,
      variant: "destructive",
    });

    return false;
  }

  /**
   * Get a client identifier for rate limiting
   * Uses a combination of factors to create a pseudo-unique identifier
   */
  private getClientIdentifier(): string {
    const factors = [
      navigator.userAgent,
      screen.width,
      screen.height,
      new Date().getTimezoneOffset(),
      navigator.language
    ];
    
    // Simple hash function
    let hash = 0;
    const str = factors.join('|');
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash).toString(36);
  }

  /**
   * Validate honeypot field
   * @param honeypotValue - Value of the honeypot field
   * @returns true if valid (empty), false if bot detected
   */
  public validateHoneypot(honeypotValue: string): boolean {
    if (honeypotValue && honeypotValue.trim() !== '') {
      console.warn('Bot detected: Honeypot field was filled');
      toast({
        title: "Submission Error", 
        description: "There was an issue with your submission. Please try again.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  }

  /**
   * Basic input sanitization
   * @param input - The input string to sanitize
   * @returns Sanitized string
   */
  public sanitizeInput(input: string): string {
    return input
      .trim()
      .replace(/[<>'"]/g, '') // Remove potentially dangerous characters
      .substring(0, 1000); // Limit length
  }

  /**
   * Validate email format (client-side only, server validation is required)
   * @param email - Email to validate
   * @returns true if valid format
   */
  public validateEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone format (basic validation)
   * @param phone - Phone number to validate
   * @returns true if valid or empty
   */
  public validatePhone(phone: string): boolean {
    if (!phone || phone.trim() === '') return true; // Optional field
    // Allow various phone formats but require some digits
    return /[0-9]/.test(phone);
  }

  /**
   * Clean up old rate limit data (call periodically)
   */
  public cleanup(): void {
    const now = Date.now();
    const windowMs = 3600000; // 1 hour
    
    for (const [key, data] of this.rateLimitStore.entries()) {
      if (now - data.firstAttempt > windowMs) {
        this.rateLimitStore.delete(key);
      }
    }
  }
}

export const clientSecurity = ClientSecurity.getInstance();

// Cleanup old rate limit data every 10 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    clientSecurity.cleanup();
  }, 600000); // 10 minutes
}