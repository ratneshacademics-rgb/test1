const items = ["Doorstep service", "Saves time", "Transparent pricing", "Local service for Deoghar residents"];

export function TrustSection() {
  return (
    <section className="grid gap-3 lg:grid-cols-2">
      <div className="card">
        <p className="label">Why Choose Us</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2"><span className="text-cyan-300">●</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-xs text-cyan-100">
          Currently available in Deoghar, Jharkhand only.
        </p>
      </div>

      <div className="card">
        <p className="label">Service Coverage</p>
        <div className="mt-3 grid h-44 place-items-center rounded-xl border border-dashed border-white/20 bg-black/25 text-sm text-slate-400">
          Deoghar area map placeholder
        </div>
      </div>
    </section>
  );
}
