const items = ["Doorstep service", "Saves time", "Transparent pricing", "Local service for Deoghar residents"];

export function TrustSection() {
  return (
    <section className="section pt-0">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="text-2xl font-bold">Why choose us</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2"><span className="text-brand-700">✓</span>{item}</li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg bg-brand-50 p-3 text-sm font-medium text-brand-900">Currently available in Deoghar, Jharkhand only.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Service Area Map (Placeholder)</h3>
          <div className="mt-3 grid h-48 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-100 text-sm text-slate-600">
            Map placeholder for Deoghar coverage
          </div>
        </div>
      </div>
    </section>
  );
}
