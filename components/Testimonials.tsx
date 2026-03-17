const testimonials = [
  { name: "Ravi Kumar", text: "Mechanic reached my home quickly and fixed brake issue professionally." },
  { name: "Priya S", text: "Clean process, clear ₹ pricing, and no need to visit a garage." },
  { name: "Aman Jha", text: "Emergency breakdown visit was very helpful in Deoghar." }
];

export function Testimonials() {
  return (
    <section className="card">
      <p className="label">Testimonials</p>
      <h2 className="mt-1 text-xl font-semibold">What customers say</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-slate-300">“{item.text}”</p>
            <p className="mt-3 text-sm font-semibold text-cyan-200">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
