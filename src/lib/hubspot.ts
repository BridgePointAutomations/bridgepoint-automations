// HubSpot API integration utilities
import { toast } from "@/hooks/use-toast";

interface HubSpotContact {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  jobtitle?: string;
  website?: string;
  industry?: string;
  numemployees?: string;
  lifecycle_stage?: string;
  lead_source?: string;
  hs_content_membership_status?: string;
}

interface HubSpotFormSubmission {
  portalId: string;
  formId: string;
  fields: Array<{
    name: string;
    value: string;
  }>;
  context?: {
    pageUri: string;
    pageName: string;
    hutk?: string;
  };
}

export class HubSpotService {
  private static instance: HubSpotService;
  private portalId: string = '';
  private apiKey: string = '';

  private constructor() {
    // Configuration is handled via the HubSpotSetup component
    // Using localStorage for runtime configuration
  }

  public static getInstance(): HubSpotService {
    if (!HubSpotService.instance) {
      HubSpotService.instance = new HubSpotService();
    }
    return HubSpotService.instance;
  }

  // Configure HubSpot credentials (for runtime configuration)
  public configure(portalId: string, apiKey: string) {
    this.portalId = portalId;
    this.apiKey = apiKey;
  }

  // Submit form data via HubSpot Forms API
  public async submitForm(formId: string, formData: Record<string, any>): Promise<boolean> {
    if (!this.portalId) {
      console.warn('HubSpot Portal ID not configured');
      return false;
    }

    try {
      const fields = Object.entries(formData).map(([name, value]) => ({
        name,
        value: String(value || '')
      }));

      const submission: HubSpotFormSubmission = {
        portalId: this.portalId,
        formId,
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        }
      };

      // Get HubSpot tracking cookie if available
      if (typeof window !== 'undefined' && (window as any).hubspotutk) {
        submission.context!.hutk = (window as any).hubspotutk;
      }

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${this.portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission),
        }
      );

      if (response.ok) {
        console.log('HubSpot form submitted successfully');
        return true;
      } else {
        const errorData = await response.text();
        console.error('HubSpot form submission failed:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Error submitting HubSpot form:', error);
      return false;
    }
  }

  // Create or update contact via Contacts API
  public async createOrUpdateContact(contactData: HubSpotContact): Promise<boolean> {
    if (!this.apiKey) {
      console.warn('HubSpot API Key not configured');
      return false;
    }

    try {
      // Convert contact data to HubSpot format
      const properties = Object.entries(contactData).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, any>);

      const response = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            properties
          }),
        }
      );

      if (response.ok) {
        console.log('HubSpot contact created/updated successfully');
        return true;
      } else if (response.status === 409) {
        // Contact already exists, try to update
        return await this.updateExistingContact(contactData.email, properties);
      } else {
        const errorData = await response.text();
        console.error('HubSpot contact creation failed:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Error creating HubSpot contact:', error);
      return false;
    }
  }

  private async updateExistingContact(email: string, properties: Record<string, any>): Promise<boolean> {
    try {
      const response = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            properties
          }),
        }
      );

      if (response.ok) {
        console.log('HubSpot contact updated successfully');
        return true;
      } else {
        const errorData = await response.text();
        console.error('HubSpot contact update failed:', errorData);
        return false;
      }
    } catch (error) {
      console.error('Error updating HubSpot contact:', error);
      return false;
    }
  }

  // Helper function to map form data to HubSpot contact properties
  public mapFormDataToContact(formData: Record<string, any>): HubSpotContact {
    return {
      email: formData.email,
      firstname: formData.first_name || formData.name?.split(' ')[0],
      lastname: formData.last_name || formData.name?.split(' ').slice(1).join(' '),
      phone: formData.phone,
      company: formData.company || formData.company_name,
      jobtitle: formData.job_title,
      website: formData.website,
      industry: formData.industry,
      numemployees: formData.company_size || formData.employees,
      lifecycle_stage: 'lead',
      lead_source: formData.source || 'website_form',
    };
  }
}

// Export singleton instance
export const hubspotService = HubSpotService.getInstance();

// Utility function for easy form submission with dual integration
export async function submitToHubSpotAndZapier(
  formData: Record<string, any>,
  zapierWebhookUrl: string,
  hubspotFormId?: string
) {
  const results = {
    hubspot: false,
    zapier: false,
  };

  // Submit to HubSpot if form ID is provided
  if (hubspotFormId) {
    results.hubspot = await hubspotService.submitForm(hubspotFormId, formData);
    
    // Also create/update contact
    const contactData = hubspotService.mapFormDataToContact(formData);
    await hubspotService.createOrUpdateContact(contactData);
  }

  // Submit to Zapier
  try {
    await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify({
        ...formData,
        hubspot_submitted: results.hubspot,
        timestamp: new Date().toISOString(),
      }),
    });
    results.zapier = true;
  } catch (error) {
    console.error('Zapier submission failed:', error);
  }

  return results;
}