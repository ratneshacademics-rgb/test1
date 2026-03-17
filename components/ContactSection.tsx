export function ContactSection() {
  return (
    <section className="card">
      <p className="label">Contact</p>
      <h2 className="mt-1 text-xl font-semibold">Support & Service Desk</h2>
      <p className="mt-2 text-sm text-slate-300">City: Deoghar, Jharkhand · Hours: 8:00 AM - 8:00 PM</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a href="tel:+919876543210" className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
          Phone Call
        </a>
        <a href="https://wa.me/919876543210" className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950">
          WhatsApp
        </a>
      </div>
    </section>
  );
}
