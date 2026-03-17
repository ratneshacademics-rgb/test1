const faqs = [
  { q: "Do I need to bring my bike anywhere?", a: "No, we come to your home." },
  { q: "Is this service available outside Deoghar?", a: "Not yet. We currently serve Deoghar, Jharkhand only." },
  { q: "Are spare parts included in the listed prices?", a: "No, spare parts are charged separately if needed." },
  { q: "How do I pay?", a: "Cash or UPI." }
];

export function FAQSection() {
  return (
    <section className="section pt-0">
      <h2 className="text-2xl font-bold sm:text-3xl">FAQs</h2>
      <div className="mt-5 space-y-3">
        {faqs.map((faq) => (
          <details key={faq.q} className="card">
            <summary className="cursor-pointer list-none font-semibold">{faq.q}</summary>
            <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
