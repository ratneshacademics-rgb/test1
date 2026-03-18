const testimonials = [
  { name: "Ravi Kumar", text: "Mechanic reached quickly and fixed my bike at home." },
  { name: "Priya S", text: "Very clean process and clear pricing in ₹." },
  { name: "Aman Jha", text: "Emergency visit was smooth and helpful." }
];

export function Testimonials() {
  return (
    <section className="section pt-0">
      <h2 className="text-2xl font-semibold">Customer feedback</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="card">
            <p className="text-sm text-slate-600">“{item.text}”</p>
            <p className="mt-3 text-sm font-semibold">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
