export function Hero() {
  return (
    <section className="section">
      <div className="card bg-gradient-to-b from-white to-slate-50">
        <p className="pill">Currently available in Deoghar, Jharkhand only</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">Bike Service at Your Home in Deoghar</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          No garage visit needed. Book online, choose your preferred slot, and our mechanic comes to your doorstep.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#booking" className="btn-primary">Book Service</a>
          <a href="#services" className="btn-secondary">View Services</a>
        </div>
      </div>
    </section>
  );
}
