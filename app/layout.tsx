import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Bike Service in Deoghar | Doorstep Motorcycle Repair",
  description:
    "Book doorstep bike service in Deoghar, Jharkhand. View prices in INR and schedule a home visit for repair, service, oil change, puncture repair, and more."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
