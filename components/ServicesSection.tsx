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
    <section id="services" className="card">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="label">Service Catalog</p>
          <h2 className="mt-1 text-xl font-semibold sm:text-2xl">Services & Pricing (INR)</h2>
          <p className="mt-1 text-xs text-slate-400">Final price may vary if spare parts are needed.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
              filter === item.value
                ? "border-cyan-300/60 bg-cyan-400/20 text-cyan-100"
                : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visibleServices.map((service) => (
          <article key={service.id} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold">{service.name}</h3>
              {service.emergency && (
                <span className="rounded-full border border-rose-300/50 bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold text-rose-200">
                  Emergency
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-300">{service.description}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-400">{service.duration}</span>
              <span className="font-bold text-cyan-200">{service.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
