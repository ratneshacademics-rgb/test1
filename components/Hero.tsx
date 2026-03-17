export function Hero() {
  return (
    <section className="card relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-500/10 to-transparent" />
      <p className="label">Home Bike Service in Deoghar</p>
      <h1 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
        Bike Service at Your Home in Deoghar
      </h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-300 sm:text-base">
        No garage visit needed. Our mechanic comes to your location, diagnoses issues, and fixes your motorcycle at
        home with transparent pricing in ₹.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#booking" className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
          Book Service
        </a>
        <a href="#services" className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white">
          View Services
        </a>
      </div>
      <p className="mt-4 text-xs text-amber-300">Currently available in Deoghar, Jharkhand only.</p>
    </section>
  );
}
