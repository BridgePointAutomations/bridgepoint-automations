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

const Index = () => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-background">
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