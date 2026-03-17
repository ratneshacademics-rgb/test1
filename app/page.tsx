import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesSection } from "@/components/ServicesSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesSection />
      <BookingSection />
      <TrustSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <StickyMobileCTA />
    </>
  );
}
