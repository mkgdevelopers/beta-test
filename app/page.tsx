"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate API call (we’ll connect real backend later)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">BetaSync</h1>
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#whyus">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button className="rounded-2xl px-6">Get Started</Button>
        </div>
      </motion.header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-200 py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Build Smarter. Launch Faster.
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We create custom AI agents, scalable SaaS platforms, and enterprise-grade
              systems that help founders and businesses grow across global markets.
            </p>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              From AI automation to full SaaS development — BetaSync delivers solutions
              built to scale across the Gulf, USA, AUS, UK, and EU.
            </p>

            <div className="flex gap-4">
              <Button className="rounded-2xl px-8 py-6 text-lg">Work With Us</Button>
              <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-96 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl flex items-center justify-center text-white text-3xl font-semibold"
          >
            BetaSync AI Stack
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Our Core Services</h3>
          <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
            Everything you need to turn your idea into scalable production-ready software.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Custom AI Agents",
                desc: "Automate workflows, reduce workload, and integrate AI into your business pipelines.",
              },
              {
                title: "SaaS Platform Development",
                desc: "Full SaaS systems engineered for global deployment and future-proof architecture.",
              },
              {
                title: "Custom ERP & CRM",
                desc: "Internal tools designed to streamline operations and increase efficiency.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-3xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold mb-4">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="whyus" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Why Choose BetaSync?</h3>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            We don’t just build software — we build long-term scalable systems.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Enterprise Quality",
                desc: "Clean architecture, secure systems, scalable infrastructure.",
              },
              {
                title: "Fast Delivery",
                desc: "Iterative development with rapid launch timelines.",
              },
              {
                title: "Global Scalability",
                desc: "Systems built for Gulf, USA, AUS, UK, and EU markets.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="p-8 bg-gray-50 rounded-3xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-4">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6 text-center">
            Start Your Project With Us
          </h3>

          <p className="text-lg max-w-2xl mx-auto mb-12 text-blue-100 text-center">
            Fill out the form and our team will contact you within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 text-gray-900 grid gap-6 shadow-xl"
          >
            <input
              required
              placeholder="Your Name"
              className="p-4 rounded-xl border"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border"
            />
            <input
              placeholder="Company / Startup"
              className="p-4 rounded-xl border"
            />
            <textarea
              required
              placeholder="Tell us about your project"
              rows={4}
              className="p-4 rounded-xl border resize-none"
            />

            <Button
              disabled={loading}
              className="rounded-2xl bg-blue-600 text-white py-6 text-lg"
            >
              {loading ? "Sending..." : "Submit Request"}
            </Button>

            {success && (
              <p className="text-green-600 text-center font-medium">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ================= NEWSLETTER (EXTRA FEATURE) ================= */}
      <section className="py-20 bg-white text-center border-t">
        <h3 className="text-3xl font-bold mb-4">Join Our AI & SaaS Newsletter</h3>
        <p className="text-gray-600 mb-8">
          Monthly insights on startups, automation & product growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
          <input
            placeholder="Your email"
            className="p-4 rounded-xl border w-72"
          />
          <Button className="rounded-xl px-8">Subscribe</Button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t bg-white text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BetaSync. All rights reserved.
      </footer>

    </div>
  );
}
