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
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-main flex items-center justify-between py-3">
          <div>
            <p className="font-semibold">Deoghar BikeCare</p>
            <p className="text-xs text-slate-500">Home Bike Service in Deoghar</p>
          </div>
          <a href="#booking" className="btn-primary py-2">Book Now</a>
        </div>
      </header>

      <main className="container-main space-y-4 pb-20 sm:pb-8">
        <Hero />
        <HowItWorks />
        <ServicesSection />
        <BookingSection />
        <TrustSection />
        <Testimonials />
        <FAQSection />
        <ContactSection />
      </main>

      <StickyMobileCTA />
    </>
  );
}
