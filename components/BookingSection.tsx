"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";

type FormState = {
  name: string;
  mobile: string;
  bikeBrand: string;
  bikeModel: string;
  service: string;
  date: string;
  timeSlot: string;
  address: string;
  landmark: string;
  issue: string;
  payment: "Cash" | "UPI";
};

const initialState: FormState = {
  name: "",
  mobile: "",
  bikeBrand: "",
  bikeModel: "",
  service: "",
  date: "",
  timeSlot: "",
  address: "",
  landmark: "",
  issue: "",
  payment: "Cash"
};

export function BookingSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.mobile || !form.service || !form.date || !form.timeSlot || !form.address) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
      localStorage.setItem("bookings", JSON.stringify([{ ...form, createdAt: new Date().toISOString() }, ...existing]));

      setSuccess("Booking confirmed! Our team will contact you shortly to verify your slot in Deoghar.");
      setForm(initialState);
    } catch {
      setError("Something went wrong while saving your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-600 focus:outline-none";

  return (
    <section id="booking" className="section">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form onSubmit={handleSubmit} className="card">
          <h2 className="text-2xl font-bold">Book a Home Visit</h2>
          <p className="mt-2 text-sm text-slate-600">Currently serving Deoghar, Jharkhand only.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">Customer name*
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm">Mobile number*
              <input required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm">Bike brand
              <input value={form.bikeBrand} onChange={(e) => setForm({ ...form, bikeBrand: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm">Bike model
              <input value={form.bikeModel} onChange={(e) => setForm({ ...form, bikeModel: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm sm:col-span-2">Service needed*
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClasses}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option value={service.name} key={service.id}>{service.name}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">Preferred date*
              <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm">Preferred time slot*
              <select required value={form.timeSlot} onChange={(e) => setForm({ ...form, timeSlot: e.target.value })} className={inputClasses}>
                <option value="">Select slot</option>
                <option>8:00 AM - 10:00 AM</option>
                <option>10:00 AM - 12:00 PM</option>
                <option>12:00 PM - 2:00 PM</option>
                <option>2:00 PM - 4:00 PM</option>
                <option>4:00 PM - 6:00 PM</option>
              </select>
            </label>
            <label className="text-sm sm:col-span-2">Full address*
              <textarea required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClasses} rows={2} />
            </label>
            <label className="text-sm">Landmark
              <input value={form.landmark} onChange={(e) => setForm({ ...form, landmark: e.target.value })} className={inputClasses} />
            </label>
            <label className="text-sm">Payment preference
              <select value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value as "Cash" | "UPI" })} className={inputClasses}>
                <option>Cash</option>
                <option>UPI</option>
              </select>
            </label>
            <label className="text-sm sm:col-span-2">Issue description (optional)
              <textarea value={form.issue} onChange={(e) => setForm({ ...form, issue: e.target.value })} className={inputClasses} rows={3} />
            </label>
          </div>

          {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}
          {success && <p className="mt-3 text-sm font-medium text-green-700">{success}</p>}

          <button disabled={loading} className="mt-5 w-full rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">
            {loading ? "Submitting booking..." : "Confirm Booking"}
          </button>
        </form>

        <aside className="space-y-4">
          <div className="card">
            <h3 className="text-lg font-semibold">Need urgent support?</h3>
            <p className="mt-2 text-sm text-slate-600">For breakdowns, call or WhatsApp for priority dispatch.</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="tel:+919876543210" className="rounded-xl bg-slate-900 px-4 py-2 text-center font-semibold text-white">Call Support</a>
              <a href="https://wa.me/919876543210" className="rounded-xl bg-green-600 px-4 py-2 text-center font-semibold text-white">WhatsApp</a>
            </div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Estimated visit time</h3>
            <p className="mt-2 text-sm text-slate-600">Standard slots are same-day based on availability. Emergency visits target arrival in ~45 mins within Deoghar city limits.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
