import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesSection } from "@/components/ServicesSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { TrustSection } from "@/components/TrustSection";

const menu = ["Dashboard", "Services", "Bookings", "Coverage", "Testimonials", "FAQ", "Support"];

export default function Home() {
  return (
    <div className="shell">
      <aside className="panel hidden h-[calc(100vh-1.5rem)] flex-col justify-between p-4 lg:flex">
        <div>
          <p className="text-lg font-semibold text-cyan-200">Deoghar BikeCare</p>
          <p className="mt-1 text-xs text-slate-400">Doorstep Motorcycle Service</p>
          <nav className="mt-6 space-y-1">
            {menu.map((item, i) => (
              <a
                href="#"
                key={item}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  i === 0 ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 p-3 text-xs text-cyan-100">
          Launch area: Deoghar, Jharkhand only.
        </div>
      </aside>

      <main className="space-y-4 pb-20 sm:pb-6">
        <header className="panel flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <div>
            <p className="text-sm font-semibold">Home Bike Service Dashboard</p>
            <p className="text-xs text-slate-400">Fast booking · Transparent ₹ pricing · Local trust</p>
          </div>
          <a href="#booking" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
            Book Now
          </a>
        </header>

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
    </div>
  );
}
