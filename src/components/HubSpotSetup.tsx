import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExternalLink, CheckCircle, Settings } from "lucide-react";

const HubSpotSetup = () => {
  return (
    <Card className="max-w-4xl mx-auto shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          HubSpot Integration Setup Guide
        </CardTitle>
        <CardDescription>
          Follow these steps to integrate HubSpot forms and tracking with your website
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Step 1: HubSpot Account */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary">Step 1</Badge>
            <h3 className="text-lg font-semibold">Set Up HubSpot Account</h3>
          </div>
          <div className="pl-4 space-y-2">
            <p className="text-muted-foreground">
              Create a free HubSpot account and find your Portal ID in Settings → Account & Billing → Account Information
            </p>
            <a 
              href="https://app.hubspot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Open HubSpot Dashboard <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Step 2: Create Forms */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary">Step 2</Badge>
            <h3 className="text-lg font-semibold">Create HubSpot Forms</h3>
          </div>
          <div className="pl-4 space-y-2">
            <p className="text-muted-foreground">
              Create two forms in HubSpot: Marketing → Lead Capture → Forms
            </p>
            <div className="bg-muted p-3 rounded-lg">
              <h4 className="font-medium mb-2">Form 1: Contact Form (for homepage)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Name (Single-line text)</li>
                <li>• Email (Email)</li>
                <li>• Company (Single-line text)</li>
                <li>• Phone (Phone number)</li>
                <li>• Number of Employees (Dropdown)</li>
                <li>• Message (Multi-line text)</li>
              </ul>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <h4 className="font-medium mb-2">Form 2: Booking Form (for detailed bookings)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• All contact form fields plus:</li>
                <li>• Job Title, Industry, Website</li>
                <li>• Current Processes, Pain Points, Goals</li>
                <li>• Timeline, Budget Range</li>
                <li>• Appointment Date & Time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 3: Get Form IDs */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary">Step 3</Badge>
            <h3 className="text-lg font-semibold">Get Form IDs</h3>
          </div>
          <div className="pl-4 space-y-2">
            <p className="text-muted-foreground">
              Copy each form's ID from the form editor URL or embed code
            </p>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Form ID looks like: <code className="bg-muted px-1 rounded">12345678-1234-1234-1234-123456789012</code>
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Step 4: Configure Website */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary">Step 4</Badge>
            <h3 className="text-lg font-semibold">Configure Website Forms</h3>
          </div>
          <div className="pl-4 space-y-2">
            <p className="text-muted-foreground">
              Use the configuration buttons on each form to enter your Portal ID and Form IDs:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>1. Click the settings gear icon on the Contact section</li>
              <li>2. Enter your HubSpot Portal ID and Contact Form ID</li>
              <li>3. Click "Configure Zapier Integration" on the booking page</li>
              <li>4. Enter your Booking Form ID in the HubSpot section</li>
            </ul>
          </div>
        </div>

        {/* Step 5: Update Tracking */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-primary">Step 5</Badge>
            <h3 className="text-lg font-semibold">Update Tracking Code</h3>
          </div>
          <div className="pl-4 space-y-2">
            <p className="text-muted-foreground">
              Replace "YOUR_PORTAL_ID" in the HTML head section with your actual Portal ID
            </p>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                The tracking script is already installed - just update the Portal ID in index.html
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-subtle p-4 rounded-lg">
          <h3 className="font-semibold mb-2">What You'll Get:</h3>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Automatic lead capture in HubSpot CRM</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Visitor tracking and behavior analytics</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Automated follow-up email sequences</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Lead scoring and qualification</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Dual integration with existing Zapier/Airtable workflow</span>
            </li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};

export default HubSpotSetup;