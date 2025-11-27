"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence ,Variants } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
  Code2,
  Star,
  Briefcase,
  Users,
  CheckCircle,
  ChevronUp,
  Calendar,
  Layers,
  Sparkles,
  MessageSquare
} from "lucide-react";

export default function Page() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  const heroStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 120 } // now correctly typed
  },
};

  const services = [
    {
      title: "Custom Website Development",
      desc: "SEO-ready, high-performance websites with conversion-first UX.",
      icon: <Briefcase />,
    },
    {
      title: "Admin Panels & Dashboards",
      desc: "Realtime dashboards, role-based access, and analytics integration.",
      icon: <Layers />,
    },
    {
      title: "React & Frontend Apps",
      desc: "Scalable component architecture, Typescript-ready, performance tuned.",
      icon: <Code2 />,
    },
    {
      title: "Automation & Integrations",
      desc: "Connect CRMs, payment gateways and build business automation flows.",
      icon: <Zap />,
    },
    {
      title: "Product Landing & Growth Funnels",
      desc: "Landing pages optimized for signups, trials, and paid conversions.",
      icon: <Sparkles />,
    },
    {
      title: "Mobile-First Design",
      desc: "Pixel-perfect responsive designs with accessibility in mind.",
      icon: <Smartphone />,
    },
  ];

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Small projects: 2-4 weeks. Mid-size apps: 6-12 weeks. We provide a clear timeline during discovery.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes — we offer maintenance, monitoring, and iterative product improvements.",
    },
    {
      q: "Can you integrate with third-party APIs?",
      a: "Absolutely — payments, CRMs, analytics, identity providers and more.",
    },
  ];

  return (
    <main ref={topRef} className="bg-gradient-to-b from-[#05060a] via-[#071028] to-[#071224] text-white min-h-screen antialiased">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-400 px-3 py-2 font-bold">BetaSync</div>
            <div className="hidden md:flex gap-6 text-gray-300">
              <a href="#services" className="hover:text-white transition">Services</a>
              <a href="#process" className="hover:text-white transition">Process</a>
              <a href="#work" className="hover:text-white transition">Work</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:muaaznaeemoff@gmail.com" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition">
              <Mail size={16} /> Contact Now
            </a>
            <button
              onClick={() => setShowNewsletter(true)}
              className="hidden sm:inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg hover:border-white/20 transition"
            >
              <Star size={16} /> Newsletter
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

          <motion.div variants={heroStagger} initial="hidden" animate="show" className="flex-1">
            <motion.h1 variants={itemVariant} className="text-4xl md:text-6xl font-extrabold leading-tight">
              We Build Scalable <span className="text-indigo-400">Digital Products</span>
              <br />for Modern Startups & Growing Teams
            </motion.h1>

            <motion.p variants={itemVariant} className="mt-6 text-gray-300 max-w-2xl">
              High-performance web apps, admin dashboards, and automation that let you ship faster —
              validated by data and designed for growth. Collaborate with a small, senior-led team
              that values code quality and product outcomes.
            </motion.p>

            <motion.div variants={itemVariant} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="mailto:muaaznaeemoff@gmail.com" className="inline-flex items-center gap-3 bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-2xl font-semibold">
                Contact Now <ArrowRight size={16} />
              </a>

              <a href="#services" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-2xl hover:border-white/20 transition">
                View Services
              </a>
            </motion.div>

            <motion.div variants={itemVariant} className="mt-10 flex flex-wrap gap-4 items-center text-sm text-gray-400">
              <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">Trusted by <strong className="text-white ml-1">8+</strong> startups</div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">Avg. delivery <strong className="text-white ml-1">6–8 weeks</strong></div>
              <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">Remote-first team</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="w-full lg:w-[520px] p-6 rounded-3xl bg-gradient-to-br from-white/4 to-white/2 border border-white/6">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-500 rounded-xl p-6 text-white shadow-xl">
              <div className="text-sm uppercase text-indigo-100 tracking-wider">Featured</div>
              <div className="mt-3 text-lg font-semibold">BetaSync AI Stack</div>
              <p className="mt-2 text-sm text-indigo-100">A curated stack for building AI-enabled experiences and scalable product frontends.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-3 rounded-lg">Next.js</div>
                <div className="bg-white/10 p-3 rounded-lg">React</div>
                <div className="bg-white/10 p-3 rounded-lg">TypeScript</div>
                <div className="bg-white/10 p-3 rounded-lg">Tailwind</div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-indigo-100">Case study: SaaS dashboard</div>
                <a href="#work" className="text-sm underline">View</a>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-12">Why Modern Startups Choose Us</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{icon: <Zap />, title: 'Fast Delivery', text: 'Iterative releases with measurable progress.'}, {icon: <Shield />, title: 'Security First', text: 'Secure-by-design and compliance-ready.'}, {icon: <Smartphone />, title: 'Mobile First', text: 'Optimized experiences on any device.'}, {icon: <Users />, title: 'Small Senior Team', text: 'Focused, experienced engineers and product leads.'}].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white/4 border border-white/6 p-6 rounded-2xl">
              <div className="text-indigo-400 mb-3">{c.icon}</div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="bg-white/4 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-10">Services</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-gradient-to-br from-white/3 to-white/6 p-6 rounded-2xl border border-white/6 hover:scale-[1.02] transition">
                <div className="text-indigo-400 mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{s.desc}</p>
                <div className="mt-4">
                  <a href="mailto:muaaznaeemoff@gmail.com" className="inline-flex items-center gap-2 text-sm text-indigo-300">Discuss <ArrowRight size={14} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDIES (SIMULATED) */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-12">Selected Work & Case Studies</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((n) => (
            <motion.div key={n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: n * 0.08 }} className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-700/40 to-violet-600/30 p-6">
              <div className="absolute right-4 top-4 bg-white/8 px-3 py-1 rounded-lg text-xs">Case Study</div>
              <div className="text-lg font-semibold">Project {n + 1}: SaaS Dashboard</div>
              <p className="text-gray-300 mt-2 text-sm">A modern analytics & billing dashboard built for real-time metrics and user management.</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="text-sm bg-white/5 px-3 py-1 rounded-full">React</div>
                <div className="text-sm bg-white/5 px-3 py-1 rounded-full">Next.js</div>
                <div className="text-sm bg-white/5 px-3 py-1 rounded-full">Stripe</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-white/4 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Consultation','Planning','Design & Dev','Testing','Launch & Support'].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-black/20 border border-white/6 p-6 rounded-2xl text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mb-3">{i+1}</div>
                <div className="font-semibold">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            text: 'Delivered beyond expectations — fast and thoughtful.',
            who: 'Founder, Fintech Startup'
          },{
            text: 'Reliable team with great communication and strong code quality.',
            who: 'Product Lead, Marketplace'
          },{
            text: 'Helped us launch MVP in record time and iterate quickly.',
            who: 'CEO, Healthtech'
          }].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white/4 border border-white/6 p-6 rounded-2xl">
              <p className="text-gray-300">“{t.text}”</p>
              <div className="mt-4 text-sm text-indigo-200">— {t.who}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white/4 border-t border-white/6">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</motion.h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="bg-black/20 border border-white/6 p-4 rounded-lg">
                <button onClick={() => setActiveFAQ(activeFAQ === i ? null : i)} className="w-full text-left flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{f.q}</div>
                    <div className="text-gray-300 text-sm mt-1">{activeFAQ === i ? f.a : (f.a.slice(0, 80) + (f.a.length > 80 ? '...' : ''))}</div>
                  </div>
                  <div className="ml-4 text-gray-300">{activeFAQ === i ? <ChevronUp /> : <ChevronUp className="rotate-180" />}</div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold">Ready to ship your product?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-gray-300 mt-4">We partner with founders to build meaningful product experiences — fast.</motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:muaaznaeemoff@gmail.com" className="inline-flex items-center gap-3 bg-indigo-500 px-6 py-3 rounded-2xl font-semibold hover:bg-indigo-600 transition">
            Contact Now <Mail size={16} />
          </a>
          <a href="#services" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-2xl hover:border-white/20 transition">View Services</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <div>
            <div className="font-semibold">BetaSync · Startup Tech Studio</div>
            <div className="text-xs text-gray-400 mt-1">Helping startups ship product, faster. Built for demos & collaboration.</div>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:muaaznaeemoff@gmail.com" className="hover:text-white transition">muaaznaeemoff@gmail.com</a>
            <div className="text-xs">© {new Date().getFullYear()} BetaSync. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* NEWSLETTER MODAL */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-[#061228] rounded-2xl p-6 w-full max-w-md border border-white/6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm text-indigo-300 font-semibold">Join Newsletter</div>
                  <div className="text-white font-bold text-lg mt-1">Monthly insights on product & growth</div>
                </div>
                <button onClick={() => setShowNewsletter(false)} className="text-gray-300">✕</button>
              </div>

              <div className="mt-4">
                <input placeholder="Your email" className="w-full p-3 rounded-xl bg-white/5 border border-white/6" />
                <div className="mt-4 flex justify-end gap-3">
                  <button onClick={() => setShowNewsletter(false)} className="px-4 py-2 rounded-lg border border-white/10">Cancel</button>
                  <button onClick={() => setShowNewsletter(false)} className="px-4 py-2 rounded-lg bg-indigo-500">Subscribe</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCROLL TO TOP (floating) */}
      <div className="fixed right-6 bottom-6">
        <a href="#top" className="bg-white/6 p-3 rounded-full hover:bg-white/10 transition inline-flex items-center justify-center">
          <ChevronUp />
        </a>
      </div>

    </main>
  );
}