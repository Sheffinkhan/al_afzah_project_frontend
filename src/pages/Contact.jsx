import React from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero / Heading */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center">
          Contact Us
        </h1>
        <div className="h-1 w-24 bg-red-600 rounded-full mx-auto mt-4"></div>
        <p className="text-gray-400 text-center mt-6 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out to us for project inquiries,
          partnerships, or general questions — our team will get back to you as
          soon as possible.
        </p>
      </section>

      {/* Main grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 md:grid-cols-2">
        {/* Brand Card */}
        <div className="relative bg-zinc-900 rounded-2xl p-8 shadow-xl overflow-hidden group">
          {/* animated border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-red-600/10"></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-black/70 border border-zinc-800 rounded-xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <img
                src="/media/al afzah logo.png"
                alt="AL AFZAH GROUP"
                className="w-40 h-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold text-red-500 tracking-wide mt-4">
              AL AFZAH GROUP TRADING, CONTRACTING & CLEANING W.L.L
            </h3>

            <div className="grid gap-4 mt-4 w-full">
              <div className="flex gap-3 items-start text-gray-300">
                <MapPin className="text-red-500" />
                <p>
                  Building No.94, Othman Bin Affan Street 180, <br /> Doha, Qatar
                </p>
              </div>

              <div className="flex gap-3 items-start text-gray-300">
                <Phone className="text-red-500" />
                <p>
                  +974 66908916 <br /> +974 30806490
                </p>
              </div>

              <div className="flex gap-3 items-start text-gray-300">
                <Mail className="text-red-500" />
                <p>Info@al-afzahgroup.com</p>
              </div>

              <div className="flex gap-3 items-start text-gray-300">
                <Globe className="text-red-500" />
                <p>www.al-afzahgroup.com</p>
              </div>

              <div className="mt-4 text-sm text-gray-500 uppercase tracking-wider">
                PO BOX NO: 36258
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

          <form className="grid gap-5">
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                className="mt-1 w-full bg-black/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="mt-1 w-full bg-black/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Phone</label>
              <input
                type="text"
                className="mt-1 w-full bg-black/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={5}
                className="mt-1 w-full bg-black/60 border border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition rounded-xl py-3 font-medium shadow-lg shadow-red-900/20"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}