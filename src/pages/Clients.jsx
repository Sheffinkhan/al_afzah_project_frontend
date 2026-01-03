import React, { useEffect, useRef, useState } from "react";
import { Users, Quote, Star, ArrowRight } from "lucide-react";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Animated Section Component
const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const clients = [
  { name: "Client 1", logo: "/media/client1.png" },
  { name: "Client 2", logo: "/media/client2.png" },
  { name: "Client 3", logo: "/media/client3.png" },
  { name: "Client 4", logo: "/media/client4.png" },
  { name: "Client 5", logo: "/media/client5.png" },
  { name: "Client 6", logo: "/media/client6.png" },
  { name: "Client 7", logo: "/media/client7.png" },
  { name: "Client 8", logo: "/media/client8.png" },
  { name: "Client 9", logo: "/media/client9.png" },
  { name: "Client 10", logo: "/media/client10.png" },
  { name: "Client 11", logo: "/media/client11.png" },
  { name: "Client 12", logo: "/media/client12.png" },
];

const testimonials = [
  {
    text: "Al-Afzah Group has consistently delivered exceptional quality in all our projects. Their professionalism and attention to detail make them a trusted partner.",
    author: "Project Director",
    company: "Major Construction Firm",
    rating: 5
  },
  {
    text: "Outstanding MEP solutions and timely delivery. The team's expertise in HVAC and electrical systems is unmatched in the region.",
    author: "Facilities Manager",
    company: "Commercial Property Group",
    rating: 5
  },
  {
    text: "Their maintenance services have significantly improved our building operations. Highly recommended for any construction project.",
    author: "Operations Head",
    company: "Industrial Complex",
    rating: 5
  }
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 inline mr-2" />
              Our Partners
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Clients
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              We are proud to have partnered with organizations across industries —
              delivering reliable MEP, Civil, and Fit-out solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
                Trusted By
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Industry <span className="text-red-500">Leaders</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="group relative bg-white/100 border border-gray-800 rounded-2xl p-8 flex items-center justify-center h-40 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-32 h-20 object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                What Our Clients <span className="text-red-500">Say</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group relative h-full p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-red-500" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-gray-800 pt-6">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.company}</div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Happy Clients' },
                { number: '500+', label: 'Projects Delivered' },
                { number: '15+', label: 'Years of Trust' },
                { number: '100%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl overflow-hidden text-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Our Growing Client List
                </h3>
                <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
                  Partner with Al-Afzah Group for reliable construction, MEP, and maintenance solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Clients;
