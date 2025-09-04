import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, ArrowLeft } from "lucide-react";

const Booking = () => {
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

                {/* Booking Form Placeholder */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Schedule Your Audit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent rounded-lg p-8 text-center space-y-4">
                      <Calendar className="w-12 h-12 text-primary mx-auto" />
                      <h3 className="text-lg font-semibold">Booking Form Coming Soon</h3>
                      <p className="text-muted-foreground">
                        Our embedded booking form will be available here. In the meantime, 
                        contact us directly to schedule your free automation audit.
                      </p>
                      <div className="pt-4 space-y-2">
                        <p className="text-sm font-medium">Contact Information:</p>
                        <p className="text-sm text-muted-foreground">(412) 555-BRIDGE</p>
                        <p className="text-sm text-muted-foreground">hello@bridgepoint-automations.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 BridgePoint Automations. All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Booking;