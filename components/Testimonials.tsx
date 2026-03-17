const testimonials = [
  { name: "Ravi Kumar", text: "Very convenient doorstep service in Deoghar. Mechanic arrived on time." },
  { name: "Priya S", text: "Pricing was transparent and service quality was better than local garage visits." },
  { name: "Aman Jha", text: "Booked puncture repair from phone and it was fixed at home quickly." }
];

export function Testimonials() {
  return (
    <section className="section pt-0">
      <h2 className="text-2xl font-bold sm:text-3xl">Customer stories</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card">
            <p className="text-sm text-slate-700">“{item.text}”</p>
            <p className="mt-3 text-sm font-semibold text-brand-700">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
