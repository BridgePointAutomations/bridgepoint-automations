import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { TrustBadges } from "@/components/TrustBadges";
import ProcessSection from "@/components/ProcessSection";
import { AutomationReadinessAssessment } from "@/components/AutomationReadinessAssessment";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import ScrollToTop from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";

const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Business Automation Experts | Zapier, Make & Airtable Consultants"
        description="Transform your small business with enterprise-level automation. We specialize in Zapier, Airtable & Make integrations to save you 20+ hours weekly. Guaranteed ROI > 300%."
        keywords="business automation, small business automation, Zapier consultant, Airtable expert, Make integrations, business process automation, automation services, Pittsburgh automation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BridgePoint Automations",
          "description": "Business process automation services for small businesses using Zapier, Airtable, and Make platforms",
          "url": "https://bridgepoint-automations.com",
          "telephone": "(412) 555-2743",
          "email": "support@bridgepointautomations.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "PA",
            "addressLocality": "Pittsburgh",
            "addressCountry": "US"
          },
          "areaServed": "Pittsburgh Metropolitan Area",
          "serviceType": "Business Process Automation",
          "priceRange": "$2000-$9000"
        }}
      />
      <Navigation onOpenBooking={handleOpenBooking} />
      <ScrollToTop />
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Trust Badges Section */}
        <section className="container mx-auto px-4 py-8">
          <TrustBadges />
        </section>

        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Workflow Examples Section */}
        <ProcessSection />

        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <AutomationReadinessAssessment
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      <Footer onOpenBooking={handleOpenBooking} />
    </div>
  );
};

export default Index;