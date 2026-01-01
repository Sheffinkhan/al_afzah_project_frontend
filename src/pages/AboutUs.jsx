import React from "react";
import { Building, CheckCircle, Clock, Wrench, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="pt-16 bg-black text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black via-red-800 to-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block border-2 border-red-500 bg-black/70 px-10 py-4 rounded-full shadow-xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-white">
              About Al Afzah Group
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        {/* Who We Are */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto">
            Al Afzah Group is a professionally managed Engineering, Contracting,
            Maintenance, Trading, and Cleaning company established in the State
            of Qatar.
            <br /><br />
            Our strength lies in the decades of experience brought by our
            professionals — individuals who have served major organizations and
            are now focused on building a future-driven company.
            <br /><br />
            We deliver services that meet the highest quality standards while
            strictly complying with industry codes and practices. We work
            closely with consultants, contractors, facility teams, and clients
            to ensure planned installation, systematic inspection, testing,
            commissioning, and maintenance of Civil & MEP services.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <Shield className="text-red-500" size={38} />,
              title: "Quality–Driven",
              text: "We never compromise on standards, safety, or performance."
            },
            {
              icon: <Clock className="text-red-500" size={38} />,
              title: "24/7 Support",
              text: "Round-the-clock service to ensure reliability and trust."
            },
            {
              icon: <Wrench className="text-red-500" size={38} />,
              title: "Expert Workforce",
              text: "Engineers and technicians trained across multiple systems."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-7 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-red-700/20 transition"
            >
              {card.icon}
              <h3 className="text-xl md:text-2xl font-semibold mt-4 text-white">
                {card.title}
              </h3>
              <p className="text-gray-400 mt-2 text-base md:text-lg">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-14 max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
          <p>
            Our systems and operations are designed to deliver advanced,
            resource-optimized solutions tailored to every client’s needs —
            ensuring performance, reliability, and long-term value.
          </p>
        </div>

        {/* Business Domains */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-red-500">
            Our Business Domains
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Building Materials Supply",
              "Contracting and Construction Work",
              "Cleaning and Soft Services",
              "Annual Maintenance Contracts"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 p-5 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-red-500 transition"
              >
                <CheckCircle className="text-red-500 flex-shrink-0" size={26} />
                <span className="text-gray-200 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 bg-zinc-900 p-10 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Building className="text-red-500" size={36} />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              A Partner You Can Trust
            </h3>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            At Al Afzah Group, we don’t just deliver projects — we build long-term
            partnerships founded on integrity, professionalism, and excellence.
            Our mission is to innovate, serve, and consistently exceed
            expectations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
