const items = ["Doorstep service", "Saves time", "Transparent pricing", "Local service for Deoghar residents"];

export function TrustSection() {
  return (
    <section className="section pt-0">
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold">Why choose us</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="text-slate-900">✓</span>{item}</li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-slate-100 p-3 text-sm text-slate-700">Currently available in Deoghar, Jharkhand only.</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold">Service area</h3>
          <div className="mt-3 grid h-44 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-sm text-slate-500">
            Map placeholder (Deoghar coverage)
          </div>
        </div>
      </div>
    </section>
  );
}
