export function ContactSection() {
  return (
    <section className="section pt-0">
      <div className="card">
        <h2 className="text-xl font-semibold">Contact support</h2>
        <p className="mt-2 text-sm text-slate-600">City: Deoghar, Jharkhand · Hours: 8:00 AM - 8:00 PM</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="tel:+919876543210" className="btn-secondary">Phone Call</a>
          <a href="https://wa.me/919876543210" className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
