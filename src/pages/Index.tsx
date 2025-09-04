import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ROICalculator from "@/components/ROICalculator";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <IndustriesSection />
        <ROICalculator />
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
                Transforming Pittsburgh small businesses through intelligent automation and proven ROI.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Pittsburgh Metropolitan Area</p>
                <p>(412) 555-BRIDGE</p>
                <p>hello@bridgepoint-automations.com</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Efficiency Essentials ($2,500)</p>
                <p>Growth Builder ($5,000)</p>
                <p>Enterprise Lite ($9,000)</p>
                <p>Free Automation Audit</p>
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
                <p>Zapier (8,000+ integrations)</p>
                <p>Airtable</p>
                <p>Make (Integromat)</p>
                <p>Activepieces</p>
                <p>AI Integration Platforms</p>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BridgePoint Automations. All Rights Reserved. | Formerly Pittsburgh Business Automation Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;