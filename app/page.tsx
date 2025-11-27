// app/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Smooth fade-up animations for all sections
    sectionsRef.current.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          },
        }
      );
    });

    // Navbar slide down
    gsap.from(".nav-animate", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Hero image floating animation
    gsap.to(".hero-floating", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

      {/* NAVBAR */}
      <header className="nav-animate w-full py-6 border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-tight">BetaSync</h1>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#whyus">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button className="rounded-2xl px-6 text-base">Get Started</Button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-grow flex items-center bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-28">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Build Smarter. Launch Faster.
            </h2>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              We create custom AI agents, scalable SaaS platforms, and enterprise-grade
              systems that help founders and businesses grow across global markets.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From AI automation to full SaaS development — BetaSync delivers solutions
              built to scale across the Gulf, USA, AUS, UK, and EU.
            </p>

            <div className="flex gap-4">
              <Button className="rounded-2xl px-8 py-6 text-lg w-fit">Work With Us</Button>
              <Button variant="outline" className="rounded-2xl px-8 py-6 text-lg w-fit">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Floating Box */}
          <div
            className="hero-floating flex justify-center items-center"
            ref={(el) => (sectionsRef.current[0] = el!)}
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl flex items-center justify-center text-white text-3xl font-semibold">
              BetaSync AI Stack
            </div>
          </div>
        </div>
      </main>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-28 bg-white border-t"
        ref={(el) => (sectionsRef.current[1] = el!)}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-4">Our Core Services</h3>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Everything you need to turn your idea into scalable production-ready software.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Custom AI Agents",
                desc:
                  "Automate workflows, reduce workload, and integrate AI into your business pipelines.",
              },
              {
                title: "SaaS Platform Development",
                desc:
                  "Full SaaS systems engineered for global deployment and future-proof architecture.",
              },
              {
                title: "Custom ERP & CRM",
                desc:
                  "Internal tools designed to streamline operations and increase efficiency.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-3xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold mb-4">{card.title}</h4>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="py-28 bg-gray-100"
        ref={(el) => (sectionsRef.current[2] = el!)}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-4">Industries We Serve</h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
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
            ].map((item) => (
              <div
                key={item}
                className="p-6 bg-white rounded-2xl shadow text-center font-medium hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        id="whyus"
        className="py-28 bg-white"
        ref={(el) => (sectionsRef.current[3] = el!)}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-4">Why Choose BetaSync?</h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            We don’t just build software — we build long-term scalable systems.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
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
            ].map((card) => (
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

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
        ref={(el) => (sectionsRef.current[4] = el!)}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Build Something Big?</h3>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-blue-100">
            Tell us about your project — and let’s start building your next breakthrough.
          </p>
          <Button className="rounded-2xl bg-white text-blue-700 px-10 py-6 text-lg font-semibold">
            Contact Us
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t bg-white text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} BetaSync. All rights reserved.
      </footer>
    </div>
  );
}
