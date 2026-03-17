const steps = [
  { title: "Book", text: "Select service, date, and time slot in under 1 minute." },
  { title: "We Visit", text: "Mechanic reaches your Deoghar address with tools." },
  { title: "We Fix", text: "Get doorstep repair + payment by Cash or UPI." }
];

export function HowItWorks() {
  return (
    <section className="grid gap-3 sm:grid-cols-3">
      {steps.map((step, idx) => (
        <article key={step.title} className="card">
          <p className="label">Step {idx + 1}</p>
          <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{step.text}</p>
        </article>
      ))}
    </section>
  );
}
