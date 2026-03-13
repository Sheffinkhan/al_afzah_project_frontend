import { useEffect, useCallback } from "react";

const TEAM = [
  "Syed Mahroof",
  "Minhaj V Shams",
  "Akshai N V",
  "Sonu Mirza A",
  "Alshid Mohammed",
  "Sahal K S",
  "Arfin Nassar",
];

function MaCoModal({ isOpen, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Animated gradient bg */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(358 82% 15%) 50%, hsl(0 0% 8%) 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl shadow-2xl"
        style={{ animation: "modalIn 0.4s cubic-bezier(.4,0,.2,1) both" }}
      >
        {/* Glow top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, hsl(358 82% 50%), hsl(12 80% 55%), transparent)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold tracking-tight mb-2"
              style={{
                background: "linear-gradient(135deg, hsl(358 82% 50%), hsl(12 80% 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              MaCo
            </h2>
            <p className="text-sm text-gray-400 tracking-widest uppercase">
              Modern Application & Code Operations
            </p>
            <div className="mt-3 mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-[#e8171d] to-transparent" />
          </div>

          {/* Under development badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8171d]/30 text-xs font-medium text-[#e8171d]"
              style={{
                background: "linear-gradient(to right, rgba(232, 23, 29, 0.1), rgba(246, 57, 13, 0.1))",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 4v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Website under development — launching soon
            </span>
          </div>

          {/* Description */}
          <div className="space-y-3 mb-8 text-sm text-gray-400 leading-relaxed">
            <p>
              MaCo is a growing tech collective founded by a tight-knit group of friends who share a vision of building meaningful digital products together.
            </p>
            <p>
              Each member currently works full-time in different roles including frontend development, full-stack engineering, networking support, IT support, and marketing. Alongside their professional careers, they collaborate to build and grow MaCo as a long-term technology company.
            </p>
            <p>
              What started as small web projects and experimentation is now evolving into a structured vision — building a trusted IT company that will expand into multiple digital platforms, products, and services.
            </p>
          </div>

          {/* Founding Team */}
          <div className="mb-8">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Founding Team
            </h3>
            <div className="flex flex-wrap gap-2">
              {TEAM.map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium hover:border-[#e8171d]/50 hover:text-white transition-all duration-300"
                  style={{ transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(to right, rgba(232, 23, 29, 0.1), rgba(246, 57, 13, 0.1))" }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Launching Soon */}
          <div className="text-center mb-8 py-6 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8171d]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
              MaCo Platform
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#e8171d]"
                    style={{ animation: `bounce 1.4s infinite ease-in-out both`, animationDelay: `${i * 0.16}s` }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#e8171d] animate-pulse">
                Launching Soon
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 text-center">
              Contact Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { country: "INDIA", number: "+91 70251 95638", raw: "7025195638" },
                { country: "QATAR", number: "+974 31266690", raw: "31266690" },
                { country: "DUBAI", number: "+91 9526173222", raw: "9526173222" },
              ].map((contact) => (
                <div key={contact.country} className="flex flex-col items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#e8171d]/50 hover:bg-white/10 transition-all cursor-pointer">
                  <span className="text-[#e8171d] font-bold text-xs mb-1">
                    {contact.country}
                  </span>
                  <a href={`tel:${contact.raw}`} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-600 pt-4 border-t border-white/5">
            Built with passion by the{" "}
            <span className="text-[#e8171d] font-semibold hover:text-white transition-colors duration-300">MaCo team</span>.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.92) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default MaCoModal;
