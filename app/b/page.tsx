"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VariantB() {
  return (
    <div className="min-h-screen bg-[#0d0f13] text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight">BetaSync</div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-white/70">
            <Link href="#services">Services</Link>
            <Link href="#industries">Industries</Link>
            <Link href="#whyus">Why Us</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/15 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Build Scalable AI & SaaS That Deliver Real-World ROI
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-lg">
              BetaSync helps founders and enterprises accelerate development with
              intelligent AI agents, production-ready SaaS platforms, and
              high-performance enterprise systems engineered for global scale.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-md font-medium"
              >
                Start Your Project
              </Link>
              <Link
                href="#services"
                className="px-6 py-3 border border-white/20 hover:border-white/40 transition rounded-md font-medium"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
          >
            <p className="text-xl font-semibold mb-4">High-Performance Outcomes</p>
            <ul className="space-y-3 text-white/70">
              <li>• AI agents that automate high-cost manual workflows</li>
              <li>• SaaS platforms with bulletproof, scalable architecture</li>
              <li>• ERP/CRM systems tailored to enterprise operations</li>
              <li>• Faster delivery cycles with predictable execution</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-28 border-t border-white/10 bg-[#0f1116]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Our Core Services</h2>
          <p className="text-white/60 mt-3 max-w-xl">
            Solutions engineered for reliability, scale, and enterprise needs.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            {[
              {
                title: "AI Agents & Automation",
                desc: "Deploy intelligent AI agents that process workflows, research, operations, support, and data pipelines autonomously.",
              },
              {
                title: "Custom SaaS Development",
                desc: "Production-ready SaaS applications designed with modern UI, complete auth, billing, and auto-scale infrastructure.",
              },
              {
                title: "Enterprise ERP / CRM",
                desc: "Fully customized business systems optimized for operations, sales, HR, field teams, logistics, and analytics.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-28 bg-[#0d0f13]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Industries We Serve</h2>
          <p className="text-white/60 mt-3 max-w-xl">
            Empowering startups, SMEs, and global enterprise organizations.
          </p>

        <div className="grid md:grid-cols-4 gap-10 mt-14 text-white/70">
          {[
            "Tech & SaaS",
            "E-Commerce",
            "Logistics",
            "Real Estate",
            "Healthcare",
            "Finance",
            "Retail",
            "Manufacturing",
          ].map((ind, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 bg-white/5 
              rounded-xl hover:bg-white/10 transition text-center"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section id="whyus" className="py-28 border-t border-white/10 bg-[#0f1116]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Why Companies Choose BetaSync</h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14 text-white/70">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            Elite engineering with predictable delivery timelines.
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            Expertise in scalable architecture and enterprise-grade systems.
          </div>
          <div className="p-8 rounded-xl bg-white/5 border border-white/10">
            Proven success across GCC, USA, UK, EU & AUS markets.
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT CTA */}
    <section id="contact" className="py-32 bg-[#0d0f13] border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to Build Something Exceptional?
        </h2>
        <p className="text-white/60 mt-4 text-lg">
          Let’s create intelligent systems that move your business forward.
        </p>

        <Link
          href="mailto:contact@betasync.io"
          className="inline-block mt-8 px-8 py-4 rounded-md 
          bg-blue-600 hover:bg-blue-500 transition font-medium"
        >
          Contact Us
        </Link>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="py-10 border-t border-white/10 text-center text-white/40 text-sm">
      © {new Date().getFullYear()} BetaSync. All rights reserved.
    </footer>
  </div>
  );
}
