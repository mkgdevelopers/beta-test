"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
  MessageSquare,
  Palette
} from "lucide-react";

// Color themes configuration - Simplified to your exact palette
const colorThemes = {
  teal: {
    primary: "#0f766e", // Teal
    primaryHover: "#0d9488",
    textPrimary: "#0f172a", // Near black
    textSecondary: "#334155", // Dark gray
    bgLight: "#ffffff", // White
    borderLight: "#e2e8f0",
    black: "#000000",
    white: "#ffffff"
  }
};

type ColorTheme = keyof typeof colorThemes;

export default function Page() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>("teal");
  const topRef = useRef<HTMLDivElement | null>(null);

  const theme = colorThemes[currentTheme];

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
      transition: { type: "spring", stiffness: 120 }
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
    <main 
      ref={topRef} 
      className="min-h-screen antialiased transition-colors duration-300"
      style={{
        backgroundColor: theme.white,
        color: theme.textSecondary
      }}
    >

      {/* Theme Picker - Removed since we only have one theme now */}

      {/* NAV - Black on Teal */}
      <nav 
        className="sticky top-0 z-50 backdrop-blur-sm border-b transition-colors duration-300"
        style={{
          backgroundColor: theme.primary,
          borderColor: theme.primaryHover
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div 
              className="rounded-lg px-3 py-2 font-bold transition-colors duration-300"
              style={{ 
                backgroundColor: theme.black,
                color: theme.white
              }}
            >
              BetaSync
            </div>
            <div className="hidden md:flex gap-6 transition-colors duration-300" style={{ color: theme.white }}>
              <a href="#services" className="hover:opacity-80 transition">Services</a>
              <a href="#process" className="hover:opacity-80 transition">Process</a>
              <a href="#work" className="hover:opacity-80 transition">Work</a>
              <a href="#faq" className="hover:opacity-80 transition">FAQ</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:muaaznaeemoff@gmail.com" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: theme.black,
                color: theme.white
              }}
            >
              <Mail size={16} /> Contact Now
            </a>
            <button
              onClick={() => setShowNewsletter(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 border"
              style={{
                borderColor: theme.white,
                color: theme.white,
                backgroundColor: 'transparent'
              }}
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
            <motion.h1 
              variants={itemVariant} 
              className="text-4xl md:text-6xl font-extrabold leading-tight transition-colors duration-300"
              style={{ color: theme.textPrimary }}
            >
              We Build Scalable <span style={{ color: theme.primary }}>Digital Products</span>
              <br />for Modern Startups & Growing Teams
            </motion.h1>

            <motion.p 
              variants={itemVariant} 
              className="mt-6 max-w-2xl text-lg transition-colors duration-300"
              style={{ color: theme.textSecondary }}
            >
              High-performance web apps, admin dashboards, and automation that let you ship faster —
              validated by data and designed for growth. Collaborate with a small, senior-led team
              that values code quality and product outcomes.
            </motion.p>

            <motion.div variants={itemVariant} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:muaaznaeemoff@gmail.com" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: theme.primary,
                  color: theme.white
                }}
              >
                Contact Now <ArrowRight size={16} />
              </a>

              <a 
                href="#services" 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 border"
                style={{
                  borderColor: theme.primary,
                  color: theme.primary,
                  backgroundColor: theme.white
                }}
              >
                View Services
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariant} 
              className="mt-10 flex flex-wrap gap-4 items-center text-sm transition-colors duration-300"
              style={{ color: theme.textSecondary }}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: `${theme.primary}15` }}
              >
                Trusted by <strong className="ml-1 transition-colors duration-300" style={{ color: theme.textPrimary }}>8+</strong> startups
              </div>
              <div 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: `${theme.primary}15` }}
              >
                Avg. delivery <strong className="ml-1 transition-colors duration-300" style={{ color: theme.textPrimary }}>6–8 weeks</strong>
              </div>
              <div 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: `${theme.primary}15` }}
              >
                Remote-first team
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }} 
            className="w-full lg:w-[520px] p-6 rounded-3xl border shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: theme.white,
              borderColor: theme.borderLight
            }}
          >
            <div 
              className="rounded-xl p-6 text-white shadow-xl transition-colors duration-300"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="text-sm uppercase text-white/90 tracking-wider">Featured</div>
              <div className="mt-3 text-lg font-semibold">BetaSync AI Stack</div>
              <p className="mt-2 text-sm text-white/80">A curated stack for building AI-enabled experiences and scalable product frontends.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <div 
                    key={tech}
                    className="p-3 rounded-lg text-center font-medium transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-white/70">Case study: SaaS dashboard</div>
                <a href="#work" className="text-sm underline text-white">View</a>
              </div>
            </div>
          </motion.div>

        </div>
      </header>

      {/* WHY CHOOSE US - Teal on White */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
          style={{ color: theme.textPrimary }}
        >
          Why Modern Startups Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {icon: <Zap />, title: 'Fast Delivery', text: 'Iterative releases with measurable progress.'}, 
            {icon: <Shield />, title: 'Security First', text: 'Secure-by-design and compliance-ready.'}, 
            {icon: <Smartphone />, title: 'Mobile First', text: 'Optimized experiences on any device.'}, 
            {icon: <Users />, title: 'Small Senior Team', text: 'Focused, experienced engineers and product leads.'}
          ].map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.08 }} 
              className="p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: theme.white,
                borderColor: theme.borderLight
              }}
            >
              <div 
                className="mb-3 transition-colors duration-300"
                style={{ color: theme.primary }}
              >
                {c.icon}
              </div>
              <h3 
                className="font-semibold text-lg mb-2 transition-colors duration-300"
                style={{ color: theme.textPrimary }}
              >
                {c.title}
              </h3>
              <p 
                className="text-sm transition-colors duration-300"
                style={{ color: theme.textSecondary }}
              >
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID - White background with Teal elements */}
      <section 
        id="services" 
        className="border-t py-20 transition-colors duration-300"
        style={{
          backgroundColor: `${theme.primary}08`,
          borderColor: theme.borderLight
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-4xl font-bold text-center mb-10 transition-colors duration-300"
            style={{ color: theme.textPrimary }}
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.06 }} 
                className="p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.white,
                  borderColor: theme.borderLight
                }}
              >
                <div 
                  className="mb-3 transition-colors duration-300"
                  style={{ color: theme.primary }}
                >
                  {s.icon}
                </div>
                <h3 
                  className="font-semibold text-lg mb-2 transition-colors duration-300"
                  style={{ color: theme.textPrimary }}
                >
                  {s.title}
                </h3>
                <p 
                  className="text-sm mb-4 transition-colors duration-300"
                  style={{ color: theme.textSecondary }}
                >
                  {s.desc}
                </p>
                <div className="mt-4">
                  <a 
                    href="mailto:muaaznaeemoff@gmail.com" 
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:gap-3"
                    style={{ color: theme.primary }}
                  >
                    Discuss <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDIES - White background */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
          style={{ color: theme.textPrimary }}
        >
          Selected Work & Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((n) => (
            <motion.div 
              key={n} 
              initial={{ opacity: 0, y: 12 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: n * 0.08 }} 
              className="relative rounded-2xl overflow-hidden p-6 border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: theme.white,
                borderColor: theme.borderLight
              }}
            >
              <div 
                className="absolute right-4 top-4 px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-300"
                style={{
                  backgroundColor: `${theme.primary}15`,
                  color: theme.primary
                }}
              >
                Case Study
              </div>
              <div 
                className="text-lg font-semibold mb-2 transition-colors duration-300"
                style={{ color: theme.textPrimary }}
              >
                Project {n + 1}: SaaS Dashboard
              </div>
              <p 
                className="text-sm mb-4 transition-colors duration-300"
                style={{ color: theme.textSecondary }}
              >
                A modern analytics & billing dashboard built for real-time metrics and user management.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {['React', 'Next.js', 'Stripe'].map((tech) => (
                  <div 
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300"
                    style={{
                      backgroundColor: `${theme.primary}10`,
                      color: theme.primary
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS - Teal on White */}
      <section 
        id="process" 
        className="border-t py-20 transition-colors duration-300"
        style={{
          backgroundColor: `${theme.primary}08`,
          borderColor: theme.borderLight
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
            style={{ color: theme.textPrimary }}
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Consultation','Planning','Design & Dev','Testing','Launch & Support'].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.06 }} 
                className="p-6 rounded-2xl border text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme.white,
                  borderColor: theme.borderLight
                }}
              >
                <div 
                  className="mx-auto w-12 h-12 rounded-full flex items-center justify-center font-bold mb-3 text-white transition-colors duration-300"
                  style={{ backgroundColor: theme.primary }}
                >
                  {i+1}
                </div>
                <div 
                  className="font-semibold transition-colors duration-300"
                  style={{ color: theme.textPrimary }}
                >
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - White on White */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-300"
          style={{ color: theme.textPrimary }}
        >
          What Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: 'Delivered beyond expectations — fast and thoughtful.',
              who: 'Founder, Fintech Startup'
            },
            {
              text: 'Reliable team with great communication and strong code quality.',
              who: 'Product Lead, Marketplace'
            },
            {
              text: 'Helped us launch MVP in record time and iterate quickly.',
              who: 'CEO, Healthtech'
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.06 }} 
              className="p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: theme.white,
                borderColor: theme.borderLight
              }}
            >
              <p 
                className="transition-colors duration-300"
                style={{ color: theme.textSecondary }}
              >
                "{t.text}"
              </p>
              <div 
                className="mt-4 text-sm font-medium transition-colors duration-300"
                style={{ color: theme.primary }}
              >
                — {t.who}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ - White background */}
      <section 
        id="faq" 
        className="border-t py-20 transition-colors duration-300"
        style={{
          backgroundColor: `${theme.primary}08`,
          borderColor: theme.borderLight
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-4xl font-bold text-center mb-8 transition-colors duration-300"
            style={{ color: theme.textPrimary }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ delay: i * 0.05 }} 
                className="rounded-lg border shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: theme.white,
                  borderColor: theme.borderLight
                }}
              >
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full text-left flex items-center justify-between p-6 transition-colors duration-300"
                >
                  <div className="flex-1">
                    <div 
                      className="font-semibold text-lg mb-2 transition-colors duration-300"
                      style={{ color: theme.textPrimary }}
                    >
                      {f.q}
                    </div>
                    <AnimatePresence>
                      {activeFAQ === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p 
                            className="transition-colors duration-300"
                            style={{ color: theme.textSecondary }}
                          >
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div 
                    className="ml-4 transition-colors duration-300"
                    style={{ color: theme.primary }}
                  >
                    <motion.div
                      animate={{ rotate: activeFAQ === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronUp />
                    </motion.div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Teal background with White text */}
      <section 
        className="py-24 transition-colors duration-300"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300"
            style={{ color: theme.white }}
          >
            Ready to ship your product?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-lg mb-8 transition-colors duration-300"
            style={{ color: theme.white }}
          >
            We partner with founders to build meaningful product experiences — fast.
          </motion.p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a 
              href="mailto:muaaznaeemoff@gmail.com" 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: theme.black,
                color: theme.white
              }}
            >
              Contact Now <Mail size={16} />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: theme.white,
                color: theme.white,
                backgroundColor: 'transparent'
              }}
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - Black background with White text */}
      <footer 
        className="border-t transition-colors duration-300"
        style={{
          borderColor: theme.primary,
          backgroundColor: theme.black
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <div 
              className="font-semibold transition-colors duration-300"
              style={{ color: theme.white }}
            >
              BetaSync · Startup Tech Studio
            </div>
            <div 
              className="text-xs mt-1 transition-colors duration-300"
              style={{ color: theme.white }}
            >
              Helping startups ship product, faster. Built for demos & collaboration.
            </div>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <a 
              href="mailto:muaaznaeemoff@gmail.com" 
              className="transition-colors duration-300 hover:opacity-80"
              style={{ color: theme.white }}
            >
              muaaznaeemoff@gmail.com
            </a>
            <div 
              className="text-xs transition-colors duration-300"
              style={{ color: theme.white }}
            >
              © {new Date().getFullYear()} BetaSync. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* NEWSLETTER MODAL - White background */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/60"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              className="rounded-2xl p-6 w-full max-w-md border shadow-2xl transition-colors duration-300"
              style={{
                backgroundColor: theme.white,
                borderColor: theme.borderLight
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div 
                    className="text-sm font-semibold transition-colors duration-300"
                    style={{ color: theme.primary }}
                  >
                    Join Newsletter
                  </div>
                  <div 
                    className="font-bold text-lg mt-1 transition-colors duration-300"
                    style={{ color: theme.textPrimary }}
                  >
                    Monthly insights on product & growth
                  </div>
                </div>
                <button 
                  onClick={() => setShowNewsletter(false)}
                  className="transition-colors duration-300 hover:opacity-70"
                  style={{ color: theme.textSecondary }}
                >
                  ✕
                </button>
              </div>

              <div className="mt-4">
                <input 
                  placeholder="Your email" 
                  className="w-full p-3 rounded-xl border transition-colors duration-300"
                  style={{
                    backgroundColor: theme.white,
                    borderColor: theme.borderLight,
                    color: theme.textPrimary
                  }}
                />
                <div className="mt-4 flex justify-end gap-3">
                  <button 
                    onClick={() => setShowNewsletter(false)}
                    className="px-4 py-2 rounded-lg border transition-colors duration-300"
                    style={{
                      borderColor: theme.borderLight,
                      color: theme.textPrimary,
                      backgroundColor: theme.white
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowNewsletter(false)}
                    className="px-4 py-2 rounded-lg text-white transition-colors duration-300"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCROLL TO TOP - Teal on White */}
      <div className="fixed right-6 bottom-6">
        <a 
          href="#top" 
          className="p-3 rounded-full shadow-lg border transition-all duration-300 hover:scale-110 inline-flex items-center justify-center"
          style={{
            backgroundColor: theme.white,
            borderColor: theme.borderLight,
            color: theme.primary
          }}
        >
          <ChevronUp />
        </a>
      </div>

    </main>
  );
}