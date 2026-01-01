import React, { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

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

const serviceDetails = [
  {
    title: "Design & Engineering",
    description: "AL AFZAH TRADING, CONTRACTING & CLEANING W.L.L has a separate team for providing drafting, designing, preparing shop drawings, as-built drawings etc. We also provide Engineering calculations and submittals for products & services needed for building construction and maintenance.",
    items: [
      "Heat Load Calculation",
      "ESP Calculation",
      "Pump Head Calculation",
      "Pipe Size Calculation",
      "Duct Size Calculation",
      "Lux Calculation",
      "Electrical Load Calculation",
      "Equipment Selection",
    ],
  },
  {
    title: "Electrical System",
    description: "We perform specialized construction and industrial electrical work related to design, installation and maintenance of Electrical systems. Our work includes all labor, equipment, supplies and materials and performing all operations necessary to complete the installation of an Electrical system as indicated on the plans.",
    items: [
      "LV: Small Power - Switch/Socket/Isolator",
      "Electrical Panel - LV/CUTOUT/MSB/SMSB/BD/MCC/ATS Panel",
      "UPS & Transformers",
      "Cabling & Containments (Conduits, Cable Tray, Trunking)",
      "Internal & External Lighting",
      "ELV: CCTV & Security Systems, PAVA, Access Control",
      "Fire Alarm System & FO Cabling",
      "Building Management Systems (BMS)",
      "Kahramaa Approval",
    ],
  },
  {
    title: "Fire Alarm & Fire Fighting",
    description: "We perform Supply, Installation, Testing and Commissioning of Fire Sprinklers, fire hose reels, landing valves, pump sets, piping with valves & accessories, FM200, Deluge systems, etc. Supply, Installation, Testing and commissioning of Fire Alarm & Central Emergency and Exit Systems. It also includes preventive maintenance, sensitivity testing and emergency services as and when required.",
    items: [
      "Fire Sprinklers & Hose Reels",
      "Landing Valves & Pump Sets",
      "FM200 & Deluge Systems",
      "Fire Alarm Systems",
      "Central Emergency & Exit Systems",
      "Preventive Maintenance",
      "Sensitivity Testing",
    ],
  },
  {
    title: "Data, CCTV & Access Control",
    description: "We perform Supply, Installation, Testing and Commissioning of Data, Telephone (Analogue/IP), CCTV, Access Control systems. It also includes preventive maintenance, sensitivity testing and emergency services as and when required.",
    items: [
      "Data Network Systems",
      "Telephone Systems (Analogue/IP)",
      "CCTV Surveillance",
      "Access Control Systems",
      "Preventive Maintenance",
      "Emergency Services",
    ],
  },
  {
    title: "HVAC System",
    description: "Our services include Heat Load Calculation, selection of equipment, Design and Energy Conservation in terms of savings in power, building automation (BMS), etc. AC system consists of DX Type, Chilled Water system viz: Reciprocating Screw Chillers & Centrifugal Chillers in the range of 100-3500 TR central plants.",
    items: [
      "Chilled Water System",
      "Piping Network",
      "Equipment: AHU, Package Unit, FCU, Split Units",
      "Ventilation: Fresh Air, Extract & Exhaust Fans",
      "Staircase Pressurization",
      "Ducting & Accessories - GI/PI",
      "Smoke Management Systems",
      "Air & Water Balancing",
    ],
  },
  {
    title: "Plumbing & Drainage",
    description: "We provide labor, materials, tools, equipment and miscellaneous items required to complete the plumbing works as per the plan in full. Underground/Aboveground Drainage Systems including pipes, fittings, floor drains, cleanouts, rain water outlets, catchment basins and channel gratings.",
    items: [
      "Underground/Aboveground Drainage",
      "Sewage & Storm Water Lifting Station",
      "Domestic Cold & Hot Water Systems",
      "Water Transfer & Booster Pumps",
      "Water Heaters (Central & Domestic)",
      "Water Filtration & Treatment",
      "Sanitary Fixtures Installation",
    ],
  },
  {
    title: "Civil & Fit-out Works",
    description: "Since the booming has begun, Qatar has been rapidly changing and adding more roads, highways and townships every day. We undertake outdoor civil & structural maintenance services. Road maintenance services starting from road paving, landscaping, obstruction clearance, patch works.",
    items: [
      "Block Work & Plaster Work",
      "Concrete Work & Foundations",
      "Gypsum Board & Partitions",
      "Stainless Steel & Glass Works",
      "Wood & Parquet Flooring",
      "Marble & All Flooring Works",
      "Paint & Finishes",
    ],
  },
  {
    title: "Cleaning & Soft Services",
    description: "At AL AFZAH GROUP we understand the science behind the relationship between workplace hygiene and employee health, safety, and wellness. We bring to organisations science-based cleaning services aimed at keeping their employees safe and protected against infectious diseases.",
    items: [
      "Housekeeping & Cleaning Services",
      "Hygiene & Janitorial Services",
      "Post Construction Cleaning",
      "Deep Cleaning",
      "Premises Management",
      "Materials & Stores",
      "Disinfection Services",
    ],
  },
];

const ServiceCard = ({ service }: { service: typeof serviceDetails[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 border border-zinc-800 hover:border-red-600/50 rounded-xl transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between gap-4"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
        {isExpanded ? (
          <ChevronUp className="text-red-500 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-red-500 flex-shrink-0" size={24} />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 animate-fade-in">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            {service.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-16 bg-black text-gray-100">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-black via-red-900/40 to-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Being one of the leading companies in Qatar, we offer comprehensive
            MEP & Fit-out services. Our experienced technical teams deliver
            complete mechanical, electrical, and plumbing solutions — ensuring
            high-quality execution and timely completion of every project.
          </p>
        </div>
      </section>

      {/* Word-Sun Animation */}
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
                const radius = 175;
                const yShift = 10;
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

      {/* Detailed Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on any service below to learn more about our capabilities and offerings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceDetails.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;