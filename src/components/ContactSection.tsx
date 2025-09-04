import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Calendar,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free automation audit.",
    });
    
    // Reset form
    setFormData({
      name: '', email: '', company: '', phone: '', employees: '', message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Free Automation Audit</span>
              </CardTitle>
              <CardDescription>
                Get a comprehensive analysis of your automation opportunities with ROI projections - no cost, no obligation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Business Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name *</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company LLC"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(412) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Number of Employees</label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-md bg-background"
                  >
                    <option value="">Select range...</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-15">6-15 employees</option>
                    <option value="16-50">16-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Describe Your Biggest Time-Consuming Process</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about manual tasks that take up significant time each week..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Schedule Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We'll contact you within 24 hours. No spam, no pressure.
                </p>
              </form>
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