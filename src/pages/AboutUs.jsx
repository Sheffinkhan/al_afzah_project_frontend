import React, { useEffect, useRef, useState } from "react";
import { Building, CheckCircle, Clock, Wrench, Shield, Eye, Target, Users, Award, ArrowRight } from "lucide-react";

// Import images
import aboutQuality from '../assets/about-quality.jpg';
import aboutTeam from '../assets/about-team.jpg';
import aboutPlanning from '../assets/about-planning.jpg';

// Custom hook for scroll animations
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
          observer.unobserve(entry.target); // optional: animate once
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
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

const AboutUs = () => {
  const stats = [
    { number: '4+', label: 'Years Experience', icon: Award },
    { number: '20+', label: 'Projects Completed', icon: Building },
    { number: '20+', label: 'Team Members', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: CheckCircle },
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Quality-Driven",
      text: "We never compromise on standards, safety, or performance."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      text: "Round-the-clock service to ensure reliability and trust."
    },
    {
      icon: Wrench,
      title: "Expert Workforce",
      text: "Engineers and technicians trained across multiple systems."
    }
  ];

  const domains = [
    "Building Materials Supply",
    "Contracting and Construction Work",
    "Cleaning and Soft Services",
    "Annual Maintenance Contracts"
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={aboutQuality} 
            alt="About Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              Established 2022
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Al Afzah Group
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Building Qatar's future through excellence in construction, MEP, and maintenance services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={aboutTeam} 
                    alt="Our Team" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl">
                  <div className="text-4xl font-bold text-red-500">4+</div>
                  <div className="text-gray-400 text-sm">Years of Excellence</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium">
                  Who We Are
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  A Legacy of{' '}
                  <span className="text-red-500">Excellence</span>
                </h2>
                
                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Al Afzah Group is a professionally managed Engineering, Contracting,
                    Maintenance, Trading, and Cleaning company established in the State
                    of Qatar.
                  </p>
                  <p>
                    Our strength lies in the decades of experience brought by our
                    professionals — individuals who have served major organizations and
                    are now focused on building a future-driven company.
                  </p>
                  <p>
                    We deliver services that meet the highest quality standards while
                    strictly complying with industry codes and practices.
                  </p>
                </div>

                {/* Vision & Mission */}
                <div className="flex gap-4 pt-4">
                  {[
                    { icon: Eye, label: 'Vision' },
                    { icon: Target, label: 'Mission' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg">
                      <item.icon className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="relative group p-8 bg-gray-900 border border-gray-800 rounded-2xl text-center hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Our Core <span className="text-red-500">Strengths</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((card, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group relative h-full p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/20">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                    <card.icon className="w-7 h-7 text-red-500" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.text}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Domains Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <AnimatedSection>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium">
                  Our Expertise
                </span>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Business <span className="text-red-500">Domains</span>
                </h2>
                
                <p className="text-gray-400 text-lg">
                  Our systems and operations are designed to deliver advanced,
                  resource-optimized solutions tailored to every client's needs.
                </p>

                <div className="space-y-4 pt-4">
                  {domains.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-red-600/50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <span className="text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={aboutPlanning} 
                    alt="Our Planning" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative p-10 md:p-16 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-3xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center">
                    <Building className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    A Partner You Can Trust
                  </h3>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  At Al Afzah Group, we don't just deliver projects — we build long-term
                  partnerships founded on integrity, professionalism, and excellence.
                  Our mission is to innovate, serve, and consistently exceed
                  expectations.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/25"
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

export default AboutUs;
