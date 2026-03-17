export function Hero() {
  return (
    <section className="section pt-10 sm:pt-14">
      <div className="card relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
        <p className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
          Launch area: Deoghar, Jharkhand only
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
          Bike Service at Your Home in Deoghar
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-100 sm:text-lg">
          No garage visit needed. We come to you for quick, transparent, and reliable motorcycle service.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#booking" className="rounded-xl bg-white px-5 py-3 font-semibold text-brand-900 shadow-soft">
            Book Service
          </a>
          <a href="#services" className="rounded-xl border border-white/60 px-5 py-3 font-semibold text-white">
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
