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
    <section id="services" className="section pt-0">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">Services & Pricing (₹)</h2>
          <p className="mt-1 text-sm text-slate-600">Final price may vary if spare parts are needed.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium ${
              filter === item.value ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleServices.map((service) => (
          <article key={service.id} className="card">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold">{service.name}</h3>
              {service.emergency && (
                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold text-rose-700">Emergency</span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-500">{service.duration}</span>
              <span className="font-bold text-slate-900">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
