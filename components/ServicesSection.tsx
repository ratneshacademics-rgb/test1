"use client";

import { useMemo, useState } from "react";
import { services, type ServiceType } from "@/data/services";

const filters: Array<{ label: string; value: ServiceType | "all" }> = [
  { label: "All", value: "all" },
  { label: "Maintenance", value: "maintenance" },
  { label: "Repair", value: "repair" },
  { label: "Cleaning", value: "cleaning" },
  { label: "Emergency", value: "emergency" }
];

export function ServicesSection() {
  const [filter, setFilter] = useState<ServiceType | "all">("all");

  const visibleServices = useMemo(
    () => services.filter((service) => filter === "all" || service.type === filter),
    [filter]
  );

  return (
    <section id="services" className="section">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Services & Pricing (INR)</h2>
          <p className="mt-2 text-sm text-slate-600">Final price may vary if spare parts are needed.</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              filter === item.value ? "bg-brand-700 text-white" : "bg-white text-slate-700"
            } border border-slate-200`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <article key={service.id} className="card">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{service.name}</h3>
              {service.emergency && (
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">Emergency</span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{service.duration}</span>
              <span className="text-lg font-bold text-brand-700">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
