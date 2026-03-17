export function ContactSection() {
  return (
    <section className="section pt-0">
      <div className="card bg-slate-900 text-white">
        <h2 className="text-2xl font-bold">Contact & Support</h2>
        <p className="mt-2 text-sm text-slate-200">City: Deoghar, Jharkhand | Business hours: 8:00 AM - 8:00 PM</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:+919876543210" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">Phone Call</a>
          <a href="https://wa.me/919876543210" className="rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
