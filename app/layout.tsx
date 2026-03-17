import type { Metadata } from "next";
import "./globals.css";
import { copy, locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Home Bike Service in Deoghar | Doorstep Motorcycle Repair",
  description:
    "Book doorstep bike service in Deoghar, Jharkhand. View prices in INR and schedule a home visit for repair, service, oil change, puncture repair, and more."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div>
              <p className="font-bold text-brand-900">{copy[locale].brand}</p>
              <p className="text-xs text-slate-500">{copy[locale].city}</p>
            </div>
            <a href="#booking" className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white">Book Now</a>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
