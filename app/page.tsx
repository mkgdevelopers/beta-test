"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
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

          {/* Left Content */}
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
              <Button className="rounded-2xl px-8 py-6 text-lg">
                Work With Us
              </Button>
              <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
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

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our Core Services
          </motion.h3>

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

      {/* ================= INDUSTRIES ================= */}
      <section id="industries" className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold mb-4">Industries We Serve</h3>

          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            We build software tailored to the toughest business environments.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Finance",
              "Logistics",
              "E-commerce",
              "Healthcare",
              "Startups",
              "Real Estate",
              "Hospitality",
              "Retail",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow text-center font-medium hover:shadow-lg transition"
              >
                {item}
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
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-3xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-4">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Build Something Big?
          </h3>

          <p className="text-lg max-w-2xl mx-auto mb-10 text-blue-100">
            Tell us about your project — and let’s start building your next breakthrough.
          </p>

          <Button className="rounded-2xl bg-white text-blue-700 px-10 py-6 text-lg font-semibold">
            Contact Us
          </Button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t bg-white text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BetaSync. All rights reserved.
      </footer>

    </div>
  );
}
