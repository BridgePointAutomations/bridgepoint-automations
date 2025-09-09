import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, CheckCircle, ArrowLeft, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TimeSlotPicker } from "@/components/TimeSlotPicker";
import { format } from "date-fns";
import { submitToHubSpotAndZapier } from "@/lib/hubspot";
import HubSpotSetup from "@/components/HubSpotSetup";

// Form validation schema
const bookingFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company_name: z.string().min(1, "Company name is required"),
  job_title: z.string().optional(),
  company_size: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"], {
    required_error: "Please select company size"
  }),
  industry: z.string().min(1, "Industry is required"),
  website: z.string().optional(),
  current_processes: z.string().min(10, "Please describe your current processes (minimum 10 characters)"),
  pain_points: z.string().min(10, "Please describe your pain points (minimum 10 characters)"),
  automation_goals: z.string().min(10, "Please describe your automation goals (minimum 10 characters)"),
  timeline: z.string().min(1, "Timeline is required"),
  budget_range: z.string().min(1, "Budget range is required"),
  appointment_date: z.date({
    required_error: "Please select an appointment date"
  }),
  appointment_time: z.string().min(1, "Please select an appointment time")
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(localStorage.getItem('zapier_webhook_url') || '');
  const [hubspotFormId, setHubspotFormId] = useState(localStorage.getItem('hubspot_booking_form_id') || '');
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      company_name: "",
      job_title: "",
      company_size: "1-10",
      industry: "",
      website: "",
      current_processes: "",
      pain_points: "",
      automation_goals: "",
      timeline: "",
      budget_range: "",
      appointment_date: undefined,
      appointment_time: ""
    }
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Validate Zapier webhook URL first
      const zapierWebhookUrl = localStorage.getItem('zapier_webhook_url');
      if (!zapierWebhookUrl) {
        throw new Error('Zapier webhook URL not configured. Please set up your Zapier integration first.');
      }

      // Generate unique booking ID for tracking
      const bookingId = crypto.randomUUID();
      
      // Prepare form data for submission
      const formData = {
        // Booking metadata
        booking_id: bookingId,
        created_at: new Date().toISOString(),
        source: 'booking_form',
        
        // Lead information
        first_name: data.first_name,
        last_name: data.last_name,
        full_name: `${data.first_name} ${data.last_name}`,
        email: data.email,
        phone: data.phone || '',
        
        // Company information
        company_name: data.company_name,
        job_title: data.job_title || '',
        industry: data.industry,
        website: data.website || '',
        company_size: data.company_size,
        
        // Business process information
        current_processes: data.current_processes,
        pain_points: data.pain_points,
        automation_goals: data.automation_goals,
        timeline: data.timeline,
        budget_range: data.budget_range,
        
        // Appointment information
        appointment_date: format(data.appointment_date, 'yyyy-MM-dd'),
        appointment_date_formatted: format(data.appointment_date, 'EEEE, MMMM do, yyyy'),
        appointment_time: data.appointment_time,
        appointment_time_formatted: formatTime(data.appointment_time),
        appointment_datetime: `${format(data.appointment_date, 'EEEE, MMMM d')} at ${formatTime(data.appointment_time)}`,
        timezone: 'America/New_York',
        status: 'scheduled'
      };
      
      // Submit to both HubSpot and Zapier
      const results = await submitToHubSpotAndZapier(
        formData,
        zapierWebhookUrl,
        hubspotFormId
      );

      // Show success message with integration status
      const integrationStatus = results.hubspot && results.zapier ? 
        "Submitted to both HubSpot and Airtable." :
        results.zapier ? "Submitted to Airtable (HubSpot not configured)." :
        "Submission may have issues. Please contact us directly if needed.";

      toast({
        title: "Appointment Scheduled!",
        description: `Your automation audit is scheduled for ${format(data.appointment_date, 'EEEE, MMMM d')} at ${formatTime(data.appointment_time)}. ${integrationStatus}`,
      });
      
      form.reset();
      setSelectedDate(undefined);
      setSelectedTime("");
    } catch (error) {
      console.error('Error submitting form:', error);
      
      let errorMessage = "There was an error scheduling your appointment. Please try again or contact us directly.";
      
      if (error instanceof Error) {
        if (error.message.includes('Zapier webhook URL not configured')) {
          errorMessage = "Zapier integration not configured. Please contact us directly to schedule your appointment.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = "Connection error. Please check your internet connection and try again.";
        }
      }
      
      toast({
        title: "Scheduling Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return format(date, 'h:mm a');
  };

  const saveWebhookUrl = () => {
    localStorage.setItem('zapier_webhook_url', webhookUrl);
    if (hubspotFormId) {
      localStorage.setItem('hubspot_booking_form_id', hubspotFormId);
    }
    setShowWebhookConfig(false);
    toast({
      title: "Integration Configured",
      description: "Zapier and HubSpot integrations saved successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
            <div className="text-center">
              <Badge variant="outline" className="text-primary border-primary/20 mb-4">
                <Calendar className="w-3 h-3 mr-1" />
                Free Automation Audit
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Schedule Your <span className="text-gradient">Free Automation Audit</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how much time and money you could save with automation. 
                Our 45-minute audit includes a custom ROI projection and automation roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* What's Included */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      What's Included in Your Free Audit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Process Assessment</h4>
                        <p className="text-sm text-muted-foreground">
                          We'll analyze your current workflows and identify automation opportunities
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">ROI Projection</h4>
                        <p className="text-sm text-muted-foreground">
                          Custom calculations showing potential time and cost savings
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Automation Roadmap</h4>
                        <p className="text-sm text-muted-foreground">
                          Step-by-step plan for implementing automation in your business
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Platform Recommendations</h4>
                        <p className="text-sm text-muted-foreground">
                          Best no-code tools for your specific business needs
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Package Recommendations</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored service package suggestions based on your goals and budget
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Form */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Request Your Free Audit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first_name">First Name *</Label>
                            <Input 
                              id="first_name"
                              {...form.register("first_name")}
                              placeholder="John"
                            />
                            {form.formState.errors.first_name && (
                              <p className="text-sm text-destructive">{form.formState.errors.first_name.message}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="last_name">Last Name *</Label>
                            <Input 
                              id="last_name"
                              {...form.register("last_name")}
                              placeholder="Smith"
                            />
                            {form.formState.errors.last_name && (
                              <p className="text-sm text-destructive">{form.formState.errors.last_name.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email"
                            type="email"
                            {...form.register("email")}
                            placeholder="john.smith@company.com"
                          />
                          {form.formState.errors.email && (
                            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            {...form.register("phone")}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Business Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Business Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company_name">Company Name *</Label>
                          <Input 
                            id="company_name"
                            {...form.register("company_name")}
                            placeholder="Your Company Inc."
                          />
                          {form.formState.errors.company_name && (
                            <p className="text-sm text-destructive">{form.formState.errors.company_name.message}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="job_title">Job Title</Label>
                            <Input 
                              id="job_title"
                              {...form.register("job_title")}
                              placeholder="CEO, Operations Manager, etc."
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="company_size">Company Size *</Label>
                            <Select onValueChange={(value) => form.setValue("company_size", value as any)} defaultValue={form.watch("company_size")}>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border z-50">
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                                <SelectItem value="1000+">1000+ employees</SelectItem>
                              </SelectContent>
                            </Select>
                            {form.formState.errors.company_size && (
                              <p className="text-sm text-destructive">{form.formState.errors.company_size.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry *</Label>
                            <Select onValueChange={(value) => form.setValue("industry", value)}>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border z-50">
                                <SelectItem value="Healthcare">Healthcare</SelectItem>
                                <SelectItem value="Finance">Finance</SelectItem>
                                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="Real Estate">Real Estate</SelectItem>
                                <SelectItem value="E-commerce">E-commerce</SelectItem>
                                <SelectItem value="Professional Services">Professional Services</SelectItem>
                                <SelectItem value="Technology">Technology</SelectItem>
                                <SelectItem value="Education">Education</SelectItem>
                                <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                                <SelectItem value="Construction">Construction</SelectItem>
                                <SelectItem value="Hospitality">Hospitality</SelectItem>
                                <SelectItem value="Marketing & Advertising">Marketing & Advertising</SelectItem>
                                <SelectItem value="Legal">Legal</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            {form.formState.errors.industry && (
                              <p className="text-sm text-destructive">{form.formState.errors.industry.message}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="website">Website</Label>
                            <Input 
                              id="website"
                              type="text"
                              {...form.register("website")}
                              placeholder="https://yourcompany.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Process Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Process Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="current_processes">Current Processes *</Label>
                          <Textarea 
                            id="current_processes"
                            {...form.register("current_processes")}
                            placeholder="Describe your current business processes that you'd like to automate..."
                            rows={3}
                          />
                          {form.formState.errors.current_processes && (
                            <p className="text-sm text-destructive">{form.formState.errors.current_processes.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="pain_points">Pain Points *</Label>
                          <Textarea 
                            id="pain_points"
                            {...form.register("pain_points")}
                            placeholder="What challenges are you facing with your current processes?"
                            rows={3}
                          />
                          {form.formState.errors.pain_points && (
                            <p className="text-sm text-destructive">{form.formState.errors.pain_points.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="automation_goals">Automation Goals *</Label>
                          <Textarea 
                            id="automation_goals"
                            {...form.register("automation_goals")}
                            placeholder="What do you hope to achieve with automation? (e.g., save time, reduce errors, improve efficiency)"
                            rows={3}
                          />
                          {form.formState.errors.automation_goals && (
                            <p className="text-sm text-destructive">{form.formState.errors.automation_goals.message}</p>
                          )}
                        </div>

                         <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="timeline">Timeline *</Label>
                            <Select onValueChange={(value) => form.setValue("timeline", value)}>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border z-50">
                                <SelectItem value="ASAP">ASAP</SelectItem>
                                <SelectItem value="1-3 months">1-3 months</SelectItem>
                                <SelectItem value="3-6 months">3-6 months</SelectItem>
                                <SelectItem value="6-12 months">6-12 months</SelectItem>
                                <SelectItem value="12+ months">12+ months</SelectItem>
                              </SelectContent>
                            </Select>
                            {form.formState.errors.timeline && (
                              <p className="text-sm text-destructive">{form.formState.errors.timeline.message}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="budget_range">Budget Range *</Label>
                            <Select onValueChange={(value) => form.setValue("budget_range", value)}>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent className="bg-background border z-50">
                                <SelectItem value="Under $5,000">Under $5,000</SelectItem>
                                <SelectItem value="$5,000 - $15,000">$5,000 - $15,000</SelectItem>
                                <SelectItem value="$15,000 - $50,000">$15,000 - $50,000</SelectItem>
                                <SelectItem value="$50,000 - $100,000">$50,000 - $100,000</SelectItem>
                                <SelectItem value="$100,000+">$100,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            {form.formState.errors.budget_range && (
                              <p className="text-sm text-destructive">{form.formState.errors.budget_range.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Appointment Scheduling */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Schedule Your Audit</h3>
                        <TimeSlotPicker
                          selectedDate={selectedDate}
                          selectedTime={selectedTime}
                          onDateSelect={(date) => {
                            setSelectedDate(date);
                            form.setValue("appointment_date", date as Date);
                          }}
                          onTimeSelect={(time) => {
                            setSelectedTime(time);
                            form.setValue("appointment_time", time);
                          }}
                        />
                        {form.formState.errors.appointment_date && (
                          <p className="text-sm text-destructive">{form.formState.errors.appointment_date.message}</p>
                        )}
                        {form.formState.errors.appointment_time && (
                          <p className="text-sm text-destructive">{form.formState.errors.appointment_time.message}</p>
                        )}
                      </div>

                      {/* Webhook Configuration Warning */}
                      {!webhookUrl && (
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                                Zapier Integration Required
                              </h4>
                              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                                Please configure your Zapier webhook URL below to enable appointment scheduling with Airtable.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting || !selectedDate || !selectedTime || !webhookUrl}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>Scheduling...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Schedule Free Audit
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* HubSpot Setup */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <HubSpotSetup />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">
              &copy; 2025 BridgePoint Automations. All Rights Reserved.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowWebhookConfig(!showWebhookConfig)}
            >
              {showWebhookConfig ? 'Hide' : 'Configure'} Zapier Integration
            </Button>
          </div>
          
          {showWebhookConfig && (
            <div className="mt-6 p-4 bg-background border rounded-lg space-y-4">
              <h3 className="font-semibold mb-3">Integration Configuration</h3>
              
              {/* Zapier Configuration */}
              <div>
                <h4 className="font-medium mb-2">Zapier Integration</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  To sync appointments with Airtable via Zapier:
                </p>
                <ol className="text-sm text-muted-foreground mb-3 space-y-1 ml-4">
                  <li>1. Create a Zap with "Webhooks by Zapier" trigger</li>
                  <li>2. Copy the webhook URL from Zapier</li>
                  <li>3. Connect it to Airtable "Create Record" action</li>
                  <li>4. Paste the webhook URL below</li>
                </ol>
                <Input
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="mb-2"
                />
              </div>

              {/* HubSpot Configuration */}
              <div>
                <h4 className="font-medium mb-2">HubSpot Integration (Optional)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Enter your HubSpot Form ID to also submit leads to HubSpot:
                </p>
                <Input
                  placeholder="HubSpot Form ID (e.g., 12345678-1234-1234-1234-123456789012)"
                  value={hubspotFormId}
                  onChange={(e) => setHubspotFormId(e.target.value)}
                  className="mb-2"
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={saveWebhookUrl} size="sm">
                  Save Configuration
                </Button>
                <Button variant="outline" onClick={() => setShowWebhookConfig(false)} size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </footer>

    </div>
  );
};

export default Booking;