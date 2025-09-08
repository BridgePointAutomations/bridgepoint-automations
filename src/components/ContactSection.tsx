import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  TrendingUp,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [showHubSpotConfig, setShowHubSpotConfig] = useState(false);
  const [hubspotConfig, setHubspotConfig] = useState({
    portalId: localStorage.getItem('hubspot_portal_id') || '',
    formId: localStorage.getItem('hubspot_form_id') || ''
  });

  // Load HubSpot form script dynamically
  useEffect(() => {
    if (hubspotConfig.portalId && hubspotConfig.formId) {
      loadHubSpotForm();
    }
  }, [hubspotConfig]);

  const loadHubSpotForm = () => {
    const script = document.createElement('script');
    script.src = `//js.hsforms.net/forms/v2.js`;
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: hubspotConfig.portalId,
          formId: hubspotConfig.formId,
          target: '#hubspot-form-container',
          onFormSubmit: () => {
            // Redirect to booking page after form submission
            setTimeout(() => {
              window.location.href = '/booking';
            }, 1000);
          }
        });
      }
    };
    document.head.appendChild(script);
  };

  const saveHubSpotConfig = () => {
    localStorage.setItem('hubspot_portal_id', hubspotConfig.portalId);
    localStorage.setItem('hubspot_form_id', hubspotConfig.formId);
    setShowHubSpotConfig(false);
    loadHubSpotForm();
    toast({
      title: "HubSpot Configuration Saved",
      description: "HubSpot form will now be displayed in the contact section.",
    });
  };

  const handleConfigChange = (field: string, value: string) => {
    setHubspotConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20">
            <Calendar className="w-3 h-3 mr-1" />
            Get Started Today
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to <span className="text-gradient">Transform Your Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your free automation audit and discover how BridgePoint Automations can save your Pittsburgh business 15-50 hours weekly with guaranteed ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Free Automation Audit</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHubSpotConfig(!showHubSpotConfig)}
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </CardTitle>
              <CardDescription>
                Get a comprehensive analysis of your automation opportunities with ROI projections - no cost, no obligation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* HubSpot Configuration */}
              {showHubSpotConfig && (
                <div className="mb-6 p-4 bg-muted rounded-lg space-y-4">
                  <h4 className="font-medium">HubSpot Integration Setup</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-1 block">HubSpot Portal ID</label>
                      <Input
                        value={hubspotConfig.portalId}
                        onChange={(e) => handleConfigChange('portalId', e.target.value)}
                        placeholder="Your HubSpot Portal ID (e.g., 12345678)"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">HubSpot Form ID</label>
                      <Input
                        value={hubspotConfig.formId}
                        onChange={(e) => handleConfigChange('formId', e.target.value)}
                        placeholder="Your HubSpot Form ID"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={saveHubSpotConfig} size="sm">
                        Save Configuration
                      </Button>
                      <Button variant="outline" onClick={() => setShowHubSpotConfig(false)} size="sm">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* HubSpot Form Container */}
              {hubspotConfig.portalId && hubspotConfig.formId ? (
                <div id="hubspot-form-container" className="min-h-[400px]">
                  {/* HubSpot form will be injected here */}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Configure HubSpot integration to display the contact form.
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    onClick={() => window.location.href = '/booking'}
                  >
                    Schedule Free Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Click the settings icon above to configure HubSpot integration.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Ready to discuss your automation needs? Contact our Pittsburgh team directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">(412) 555-BRIDGE</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM EST</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">hello@bridgepoint-automations.com</div>
                    <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Pittsburgh Metropolitan Area</div>
                    <div className="text-sm text-muted-foreground">Serving all surrounding counties</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">24-Hour Response Guarantee</div>
                    <div className="text-sm text-muted-foreground">For all audit requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Audit Benefits */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>What You'll Get in Your Free Audit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Complete process assessment and opportunity identification",
                  "ROI projections for potential automation projects",
                  "Detailed automation roadmap with timeline",
                  "Platform recommendations tailored to your business",
                  "No-obligation consultation with senior consultant"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold text-primary">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free Audit</div>
              </div>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ContactSection;