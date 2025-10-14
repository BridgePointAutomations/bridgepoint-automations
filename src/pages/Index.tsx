import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ROICalculator from "@/components/ROICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PackageFinderQuiz from "@/components/PackageFinderQuiz";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TrustBadges } from "@/components/TrustBadges";
import { WorkflowVisualization } from "@/components/WorkflowVisualization";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Index = () => {
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

        <ROICalculator />
        
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
      
      {/* Footer */}
      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gradient">BridgePoint Automations</h3>
              <p className="text-sm text-muted-foreground">
                Transforming small businesses through intelligent automation and proven ROI.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Pittsburgh Metropolitan Area</p>
                <p>(412) 555-BRIDGE</p>
                <p>support@bridgepointautomations.com</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Efficiency Essentials ($2,500)</p>
                <p>Growth Builder ($5,000)</p>
                <p>Enterprise Lite ($9,000)</p>
                <p>Free Automation Consultation</p>
              </div>
            </div>

            {/* Industries */}
            <div className="space-y-4">
              <h4 className="font-semibold">Industries Served</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Real Estate</p>
                <p>Professional Services</p>
                <p>Healthcare</p>
                <p>Construction & Trades</p>
                <p>Manufacturing</p>
                <p>Auto Repair Shops</p>
              </div>
            </div>

            {/* Platforms */}
            <div className="space-y-4">
              <h4 className="font-semibold">Technology Partners</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Zapier • Airtable • Make • Activepieces</p>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BridgePoint Automations. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;