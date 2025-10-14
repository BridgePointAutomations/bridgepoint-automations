import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Booking = () => {
  const [calendlyUrl, setCalendlyUrl] = useState(
    localStorage.getItem('calendly_url') || 'https://calendly.com/your-link'
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-to-b from-accent/30 to-background">
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
            <div className="max-w-6xl mx-auto">
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
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">ROI Projection</h4>
                        <p className="text-sm text-muted-foreground">
                          Custom calculations showing potential time and cost savings
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0" />
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
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Package Recommendations</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored service package suggestions based on your goals and budget
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground">Why book with us?</p>
                        <p>✓ Zero pressure consultation</p>
                        <p>✓ Actionable insights even if you don't hire us</p>
                        <p>✓ Senior consultant on every call</p>
                        <p>✓ Follow-up documentation included</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Calendly Embed */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Select Your Appointment Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-[600px] overflow-hidden rounded-lg border">
                      <iframe
                        src={calendlyUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Schedule Appointment"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Can't find a time that works? Call us at (412) 555-BRIDGE
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
