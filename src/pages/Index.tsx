import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PackageFinderQuiz from "@/components/PackageFinderQuiz";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TrustBadges } from "@/components/TrustBadges";
import { WorkflowVisualization } from "@/components/WorkflowVisualization";
import { AutomationReadinessAssessment } from "@/components/AutomationReadinessAssessment";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, ArrowRight } from "lucide-react";

const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ExitIntentPopup />
      <main>
        <HeroSection />
        
        {/* Trust Badges Section */}
        <section className="container mx-auto px-4 py-8">
          <TrustBadges />
        </section>

        <ServicesSection />
        
        <IntegrationShowcase />
        
        {/* Package Finder Quiz Section */}
        <section id="package-finder" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Package Finder
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Package Fits Your Needs?
              </h2>
              <p className="text-lg text-muted-foreground">
                Take our quick quiz to get a personalized recommendation based on your business size
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <PackageFinderQuiz />
            </div>
          </div>
        </section>
        
        {/* Assessment CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-cyan/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-primary/20 shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to See If Automation Is Right for You?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    You've seen the potential savings. Now discover your business's specific 
                    readiness level with our free 5-minute assessment.
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => setAssessmentOpen(true)}
                    className="group"
                  >
                    Take Readiness Assessment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Get instant results with personalized recommendations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Workflow Examples Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See How These Workflows Deliver Your Savings
              </h2>
              <p className="text-lg text-muted-foreground">
                Real examples of workflows we implement for businesses like yours
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <WorkflowVisualization
                title="Lead to Customer"
                timeSaved="15 hrs/week"
                steps={[
                  { title: "Form Submission", description: "Customer fills out contact form", automated: true },
                  { title: "Auto Validation", description: "System validates and enriches data", automated: true },
                  { title: "CRM Entry", description: "Lead added to CRM automatically", automated: true },
                  { title: "Welcome Email", description: "Personalized email sent instantly", automated: true },
                  { title: "Team Notification", description: "Sales team alerted with lead details", automated: true },
                ]}
              />
              <WorkflowVisualization
                title="Invoice & Payment"
                timeSaved="8 hrs/week"
                steps={[
                  { title: "Work Completed", description: "Project marked as complete", automated: false },
                  { title: "Invoice Generated", description: "Professional invoice created automatically", automated: true },
                  { title: "Email Sent", description: "Invoice delivered to client", automated: true },
                  { title: "Payment Reminder", description: "Automated follow-up if unpaid", automated: true },
                  { title: "Payment Recorded", description: "Accounting system updated", automated: true },
                ]}
              />
            </div>
          </div>
        </section>

        <AboutSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <AutomationReadinessAssessment 
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />
      
      <Footer />
    </div>
  );
};

export default Index;