const faqs = [
  { q: "Do I need to bring my bike anywhere?", a: "No, we come to your home." },
  { q: "Is this service available outside Deoghar?", a: "Not yet. We currently serve Deoghar only." },
  { q: "Are spare parts included in the listed prices?", a: "No, spare parts are charged separately if needed." },
  { q: "How do I pay?", a: "Cash or UPI." }
];

export function FAQSection() {
  return (
    <section className="card">
      <p className="label">FAQ</p>
      <h2 className="mt-1 text-xl font-semibold">Frequently asked questions</h2>
      <div className="mt-4 space-y-2">
        {faqs.map((faq) => (
          <details key={faq.q} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <summary className="cursor-pointer list-none text-sm font-semibold">{faq.q}</summary>
            <p className="mt-2 text-sm text-slate-300">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
