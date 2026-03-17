import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="card text-center">
        <p className="text-sm font-semibold text-brand-700">404</p>
        <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          This service page could not be found. Go back to home and book your bike service in Deoghar.
        </p>
        <Link href="/" className="mt-5 inline-block rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white">
          Go to Home
        </Link>
      </div>
    </section>
  );
}
