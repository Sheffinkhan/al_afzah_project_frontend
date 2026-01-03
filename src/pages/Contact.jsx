import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Globe, Send, Clock, ArrowRight } from "lucide-react";

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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Building No.94, Othman Bin Affan Street 180", "Doha, Qatar"],
    extra: "PO BOX NO: 36258"
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+974 66908916", "+974 30806490"]
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["Info@al-afzahgroup.com"]
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["www.al-afzahgroup.com"]
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.1),transparent_50%)]" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 inline mr-2" />
              Get In Touch
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Contact{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for project inquiries,
              partnerships, or general questions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <AnimatedSection>
              <div className="relative h-full p-10 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-[-100%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#dc2626_360deg)]" />
                  <div className="absolute inset-[1px] bg-gray-900 rounded-3xl" />
                </div>

                <div className="relative z-10">
                  {/* Logo/Brand */}
                  <div className="mb-10">
                    <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center mb-6">
                      <div className="w-8 h-8 bg-red-600 rounded-lg" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      AL AFZAH GROUP
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Trading, Contracting & Cleaning W.L.L
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group">
                        <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                          <item.icon className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                          {item.lines.map((line, idx) => (
                            <p key={idx} className="text-gray-400 text-sm">{line}</p>
                          ))}
                          {item.extra && (
                            <p className="text-gray-500 text-xs mt-1">{item.extra}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-red-500" />
                      <h3 className="font-semibold text-white">Business Hours</h3>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Saturday - Thursday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Friday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="p-10 bg-gray-900 border border-gray-800 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      placeholder="+974 XXXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-600/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative h-[400px] bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                <p className="text-gray-400">Building No.94, Othman Bin Affan Street 180</p>
                <p className="text-gray-400">Doha, Qatar</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors"
                >
                  Open in Maps
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
