import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  "Fire Alarm & Fire Fighting Works",
  "Annual Building Maintenance",
  "HVAC System Works",
  "Materials Supply",
  "Plumbing & Drainage Works",
  "MEP Design & Drafting",
  "ELV & Control System Works",
  "Electrical Works",
  "Cleaning & Soft Services",
  "Civil & Fitout Works",
];

const Services = () => {
  return (
    <div className="pt-16 bg-black text-gray-100">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-black via-red-900/40 to-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Services
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Being one of the leading companies in Qatar, we offer comprehensive
            MEP & Fit-out services. Our experienced technical teams deliver
            complete mechanical, electrical, and plumbing solutions — ensuring
            high-quality execution and timely completion of every project.
          </p>
        </div>
      </section>

     {/* Word-Sun Animation (FINAL) */}
<section className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
  <div className="relative flex items-center justify-center h-[560px] md:h-[640px]">

    {/* Center */}
    <div className="z-20 border-2 border-red-600 bg-zinc-900 px-10 py-6 rounded-full text-center shadow-red-800/40 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
        AL-AFZAH GROUP WLL
      </h2>
      <p className="text-gray-300 mt-2 text-sm md:text-base">
        MEP • Civil • Fit-out • Maintenance
      </p>
    </div>

    {/* Orbit container */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[520px] h-[520px] md:w-[650px] md:h-[650px] rounded-full border border-red-600/30">

        {services.map((item, index) => {
          const angle = (index / services.length) * 2 * Math.PI;

          // Safe window usage (no SSR crash)
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;

          // ↓ Slightly smaller + safer radius
          const radius = isMobile ? 170 : 175;

          // ↓ Push everything a bit downward to avoid heading overlap
          const yShift = isMobile ? 8 : 10;

          const x = 50 + (radius * Math.cos(angle)) / 3.5;
          const y = 50 + (radius * Math.sin(angle)) / 3.5 + yShift;

          return (
            <div key={index}>

              {/* Connecting line */}
              <div
                className="absolute left-1/2 top-1/2 origin-left transition-all duration-300"
                style={{
                  width: `${radius + 20}px`,
                  transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                  borderTop: "1px dashed rgba(255,0,0,0.35)",
                }}
              />

              {/* Label */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <div className="bg-zinc-900 border border-zinc-800 hover:border-red-600 px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-700/40 relative">
                  <span className="text-sm md:text-base font-medium whitespace-nowrap">
                    {item}
                  </span>

                  {/* glow */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition duration-300 bg-red-600/20" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  {/* Mobile fallback grid */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:hidden">
    {services.map((s, i) => (
      <div
        key={i}
        className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 hover:border-red-600 transition shadow hover:shadow-red-600/20 flex gap-3"
      >
        <CheckCircle className="text-red-500 mt-1" size={22} />
        <span className="text-gray-200">{s}</span>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Services;
