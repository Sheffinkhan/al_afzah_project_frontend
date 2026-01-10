import React, { useEffect, useRef, useState } from "react";
import { Users, Quote, Star, ArrowRight } from "lucide-react";

/* =======================
   Scroll Animation Hook
======================= */
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

/* =======================
   Animated Wrapper
======================= */
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* =======================
   Testimonials (Static)
======================= */
const testimonials = [
  {
    text: "Al-Afzah Group has consistently delivered exceptional quality in all our projects. Their professionalism and attention to detail make them a trusted partner.",
    author: "Project Director",
    company: "Major Construction Firm",
    rating: 5,
  },
  {
    text: "Outstanding MEP solutions and timely delivery. The team's expertise in HVAC and electrical systems is unmatched in the region.",
    author: "Facilities Manager",
    company: "Commercial Property Group",
    rating: 5,
  },
  {
    text: "Their maintenance services have significantly improved our building operations. Highly recommended for any construction project.",
    author: "Operations Head",
    company: "Industrial Complex",
    rating: 5,
  },
];

/* =======================
   Main Component
======================= */
const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  /* Fetch Clients */
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("http://3.111.31.155:5000/api/clients");
        const data = await res.json();
        setClients(data);
      } catch (err) {
        console.error("Failed to load clients", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center px-6 py-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 inline mr-2" />
              Our Partners
            </span>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Clients</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by organizations across industries for MEP, Civil &
              Fit-out excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= CLIENTS GRID ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <div className="col-span-full text-center text-gray-400">
                Loading clients...
              </div>
            ) : clients.length === 0 ? (
              <div className="col-span-full text-center text-gray-400">
                No clients found
              </div>
            ) : (
              clients.map((client, i) => (
                <AnimatedSection key={client.id} delay={i * 50}>
                  <div className="group bg-white border border-gray-800 rounded-2xl p-8 flex items-center justify-center h-40 hover:border-red-600/50 transition-all hover:-translate-y-2">
                    {client.logoUrl ? (
                      <img
                        src={client.logoUrl}
                        alt={client.name}
                        className="w-32 h-20 object-contain grayscale group-hover:grayscale-0"
                      />
                    ) : (
                      <span className="text-gray-500 font-medium">
                        {client.name}
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>

     {/* ================= TESTIMONIALS ================= */}
<section className="py-20 px-6 bg-gray-900/50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

    {testimonials.map((t, i) => (
      <AnimatedSection key={i} delay={i * 150}>
        {/* Card */}
        <div
          className="
            group h-full flex flex-col
            p-8 bg-gray-900 border border-gray-800 rounded-2xl
            transition-all duration-500
            hover:-translate-y-2
            hover:border-red-500/50
            hover:shadow-2xl hover:shadow-red-900/30
          "
        >
          {/* Quote Icon */}
          <Quote className="text-red-500 mb-4" />

          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(t.rating)].map((_, idx) => (
              <Star
                key={idx}
                className="w-4 h-4 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>

          {/* Text (flex-grow keeps equal height) */}
          <p className="italic text-gray-300 mb-6 flex-grow">
            "{t.text}"
          </p>

          {/* Author */}
          <div className="border-t border-gray-800 pt-4">
            <div className="font-semibold text-white">
              {t.author}
            </div>
            <div className="text-gray-500 text-sm">
              {t.company}
            </div>
          </div>

          {/* Glow Overlay */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-gradient-to-b from-red-600/10 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
          />
        </div>
      </AnimatedSection>
    ))}

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-red-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Join Our Growing Client List
            </h3>
            <p className="text-red-100 mb-8">
              Partner with Al-Afzah Group for reliable construction solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Clients;
