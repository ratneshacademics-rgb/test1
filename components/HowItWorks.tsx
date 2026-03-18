const steps = [
  { title: "Book", text: "Choose your bike service and preferred time slot." },
  { title: "We Visit", text: "Mechanic arrives at your address in Deoghar." },
  { title: "We Fix", text: "Transparent service at home with Cash or UPI payment." }
];

export function HowItWorks() {
  return (
    <section className="section pt-0">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {steps.map((step, idx) => (
          <article key={step.title} className="card">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Step {idx + 1}</p>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
