import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  TrendingUp,
  Send
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { clientSecurity } from "@/lib/security";

interface QuickContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  honeypot?: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuickContactForm>();

  const onSubmit = async (data: QuickContactForm) => {
    // Security checks
    if (!clientSecurity.validateHoneypot(data.honeypot || "")) return;
    if (!clientSecurity.checkRateLimit("quick_contact", 3)) return;
    if (!clientSecurity.validateEmail(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize inputs
      const sanitizedData = {
        name: clientSecurity.sanitizeInput(data.name),
        email: clientSecurity.sanitizeInput(data.email),
        company: clientSecurity.sanitizeInput(data.company),
        message: clientSecurity.sanitizeInput(data.message),
        form_type: "quick_contact",
        timestamp: new Date().toISOString(),
        source: window.location.href
      };

      // Replace with your Zapier webhook URL
      const webhookUrl = "YOUR_ZAPIER_WEBHOOK_URL_HERE";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(sanitizedData),
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll be in touch within 24 hours.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting quick contact form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Schedule your free automation consultation and discover how BridgePoint Automations can save your business 15-50 hours weekly with guaranteed ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Quick Contact Form */}
          <Card className="shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5 text-primary" />
                <span>Quick Contact</span>
              </CardTitle>
              <CardDescription>
                Have a quick question? Send us a message and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your full name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                          message: "Please enter a valid email"
                        }
                      })}
                      placeholder="your.email@company.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell us about your automation needs or ask us a question..."
                    rows={4}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Honeypot field */}
                <div className="hidden">
                  <Input
                    {...register("honeypot")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            
            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Ready to discuss your automation needs? Contact our team directly.</CardDescription>
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
                    <div className="font-medium">support@bridgepointautomations.com</div>
                    <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Pittsburgh Metropolitan Area</div>
                    <div className="text-sm text-muted-foreground">Serving all surrounding counties and states</div>
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
                <CardTitle>What You'll Get in Your Free Consultation</CardTitle>
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
                <div className="text-sm text-muted-foreground">Free Consultation</div>
              </div>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ContactSection;