import React from "react";

const clients = [
  { name: "", logo: "/media/client1.png" },
  { name: "", logo: "/media/client2.png" },
  { name: "", logo: "/media/client3.png" },
  { name: "", logo: "/media/client4.png" },
  { name: "", logo: "/media/client5.png" },
  { name: "", logo: "/media/client6.png" },
  { name: "", logo: "/media/client7.png" },
  { name: "", logo: "/media/client8.png" },
  { name: "", logo: "/media/client9.png" },
  { name: "", logo: "/media/client10.png" },
  { name: "", logo: "/media/client11.png" },
  { name: "", logo: "/media/client12.png" },
  { name: "", logo: "/media/client13.png" },
  { name: "", logo: "/media/client14.png" },
  { name: "", logo: "/media/client15.png" },
];

const Clients = () => {
  return (
    <section className="bg-black text-gray-100 pt-20 pb-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          Our Clients
        </h2>
        <div className="mt-3 h-1 w-24 mx-auto bg-red-600 rounded-full" />
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          We are proud to have partnered with organizations across industries —
          delivering reliable MEP, Civil, and Fit-out solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clients.map((c, i) => (
          <div
  key={i}
  className="group relative bg-zinc-900 border border-zinc-800/80 
             rounded-2xl p-6 flex items-center justify-center 
             shadow-lg shadow-black/40 hover:-translate-y-1
             transition-all duration-300 ease-out border-travel"
>

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                            blur-xl bg-red-600/10 transition duration-300" />

            {/* Logo */}
            <img
  src={c.logo}
  alt={c.name}
  className="w-32 h-20 object-contain transition-all duration-300"
/>


            {/* Label on hover */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 
                            text-xs text-gray-300 opacity-0 group-hover:opacity-100 
                            transition duration-300">
              {c.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
