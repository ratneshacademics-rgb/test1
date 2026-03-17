const steps = [
  { title: "Book", text: "Choose service, date/time, and share your Deoghar address." },
  { title: "We Visit", text: "Our verified mechanic reaches your location on time." },
  { title: "We Fix", text: "Get transparent doorstep repair and easy payment via Cash/UPI." }
];

export function HowItWorks() {
  return (
    <section className="section pt-4">
      <h2 className="text-2xl font-bold sm:text-3xl">How it works</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {steps.map((step, idx) => (
          <article key={step.title} className="card">
            <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Step {idx + 1}</p>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
