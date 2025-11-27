// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="w-full py-6 border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-tight">BetaSync</h1>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#industries" className="hover:text-black">Industries</a>
            <a href="#whyus" className="hover:text-black">Why Us</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <Button className="rounded-xl px-6 text-base">Get Started</Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-gray-900">
              Build Smarter.
              <br /> Launch Faster.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed max-w-xl">
              BetaSync builds enterprise‑grade software for founders, startups, and global
              companies with a focus on reliability, scalability, and long‑term growth.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              From AI automation to end‑to‑end SaaS platforms — we engineer systems
              designed for real‑world operational demands.
            </p>
            <div className="flex gap-4">
              <Button className="rounded-xl px-8 py-5 text-lg w-fit">Work With Us</Button>
              <Button variant="outline" className="rounded-xl px-8 py-5 text-lg w-fit border-gray-300">
                Portfolio
              </Button>
            </div>
          </motion.div>

          <div className="flex justify-center items-center">
            <div className="w-full h-80 border rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 text-xl font-medium">
              Enterprise Software Architecture
            </div>
          </div>
        </div>
      </main>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-center mb-4 text-gray-900">Our Core Services</h3>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Practical, scalable, and engineered for modern business environments.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Custom AI Agents</h4>
              <p className="text-gray-600">
                Automate operations, reduce costs, and streamline decision workflows.
              </p>
            </div>

            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">SaaS Platform Development</h4>
              <p className="text-gray-600">
                Reliable SaaS applications built with security, uptime, and scale in mind.
              </p>
            </div>

            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">Custom ERP & CRM</h4>
              <p className="text-gray-600">
                Enterprise‑ready internal systems tailored to your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-center mb-4 text-gray-900">Industries We Serve</h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Built for high‑demand sectors where reliability matters.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {["Finance", "Logistics", "E‑commerce", "Healthcare", "Startups", "Real Estate", "Hospitality", "Retail"].map(
              (item) => (
                <div
                  key={item}
                  className="p-6 bg-white border rounded-xl text-center font-medium text-gray-700 hover:shadow-sm transition"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-24 bg-white border-t">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-center mb-4 text-gray-900">Why Choose BetaSync?</h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            A partner focused on engineering quality and long‑term outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Enterprise Reliability</h4>
              <p className="text-gray-600">Secure architecture designed for uptime and performance.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Efficient Delivery</h4>
              <p className="text-gray-600">Structured development cycles with predictable milestones.</p>
            </div>

            <div className="p-8 bg-white border rounded-2xl hover:shadow-sm transition">
              <h4 className="text-xl font-semibold mb-4 text-gray-900">Global Scalability</h4>
              <p className="text-gray-600">Systems engineered for Gulf, USA, AUS, UK, and EU growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-semibold mb-6 text-gray-900">Let’s Build Your Next System</h3>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-600">
            Reach out with your project requirements — we’ll respond with a clear roadmap.
          </p>
          <Button className="rounded-xl px-10 py-5 text-lg font-medium">Contact Us</Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t bg-white text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BetaSync. All rights reserved.
      </footer>
    </div>
  );
}
