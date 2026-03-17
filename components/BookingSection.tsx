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

      setSuccess("Booking confirmed! We will call shortly to verify your Deoghar slot.");
      setForm(initialState);
    } catch {
      setError("Something went wrong while saving your booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "mt-1 w-full rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-slate-100 focus:border-cyan-300/70 focus:outline-none";

  return (
    <section id="booking" className="card">
      <p className="label">Booking</p>
      <h2 className="mt-1 text-xl font-semibold">Book a Home Visit</h2>
      <p className="mt-1 text-xs text-slate-400">Launch area: Deoghar, Jharkhand only.</p>

      <form onSubmit={handleSubmit} className="mt-4 grid gap-4 sm:grid-cols-2">
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

        {error && <p className="text-sm font-medium text-rose-300 sm:col-span-2">{error}</p>}
        {success && <p className="text-sm font-medium text-emerald-300 sm:col-span-2">{success}</p>}

        <button
          disabled={loading}
          className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 disabled:opacity-60 sm:col-span-2"
        >
          {loading ? "Submitting booking..." : "Confirm Booking"}
        </button>
      </form>
    </section>
  );
}
