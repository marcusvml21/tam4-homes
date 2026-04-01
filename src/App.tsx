/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Building2, 
  Compass, 
  TrendingUp, 
  Key, 
  DollarSign, 
  Home, 
  ShieldCheck, 
  LogOut,
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { translations } from "./translations";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const WHATSAPP_NUMBER = "17869160997";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img 
      src="/logo.png" 
      alt="TAM4 HOMES Logo" 
      className="h-[126px] w-auto object-contain"
    />
  </div>
);

export default function App() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const t = translations[lang];

  const handleWhatsApp = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <div className="min-h-screen scroll-smooth">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-high">
        <div className="flex justify-between items-center w-full px-6 md:px-12 py-3 max-w-screen-2xl mx-auto">
          <Logo />
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#investimento" className="font-headline font-semibold tracking-tight uppercase text-xs text-secondary hover:text-primary transition-colors">
              {t.nav.investment}
            </a>
            <a href="#expertise" className="font-headline font-semibold tracking-tight uppercase text-xs text-secondary hover:text-primary transition-colors">
              {t.nav.expertise}
            </a>
            <a href="#porque" className="font-headline font-semibold tracking-tight uppercase text-xs text-secondary hover:text-primary transition-colors">
              {t.nav.why}
            </a>
            <a href="#portfolio" className="font-headline font-semibold tracking-tight uppercase text-xs text-secondary hover:text-primary transition-colors">
              {t.nav.portfolio}
            </a>
            <a href="#caminho" className="font-headline font-semibold tracking-tight uppercase text-xs text-secondary hover:text-primary transition-colors">
              {t.nav.path}
            </a>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-lg border border-surface-container-high">
              <button 
                onClick={() => setLang("pt")}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${lang === "pt" ? "bg-primary text-white" : "text-secondary hover:bg-surface-container-high"}`}
              >
                PT 🇧🇷
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-all flex items-center gap-1 ${lang === "en" ? "bg-primary text-white" : "text-secondary hover:bg-surface-container-high"}`}
              >
                EN 🇺🇸
              </button>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="bg-primary text-on-primary px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg font-headline text-[10px] md:text-xs font-bold tracking-wide hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center"
              aria-label={t.nav.schedule}
            >
              <span className="hidden sm:inline">{t.nav.schedule}</span>
              <span className="sm:hidden"><Phone className="w-4 h-4" /></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-60">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
            alt="Modern Florida home exterior"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary-fixed-dim font-headline font-bold tracking-[0.2em] uppercase text-xs mb-6">
              {t.hero.location}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-6 whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-base md:text-lg text-surface-container-low font-body font-light leading-relaxed mb-6 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-white text-primary px-8 py-4 rounded-lg font-headline font-extrabold uppercase text-xs tracking-widest hover:bg-surface-container-low transition-all"
              >
                {t.hero.cta_primary}
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-headline font-extrabold uppercase text-xs tracking-widest hover:bg-white/10 backdrop-blur-sm transition-all">
                {t.hero.cta_secondary}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Value Proposition */}
      <section id="investimento" className="min-h-[calc(100vh-160px)] flex flex-col justify-center bg-surface scroll-mt-[160px] py-6">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image column – takes 7/12 */}
            <motion.div className="relative lg:col-span-7" {...fadeIn}>
              <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[calc(100vh-220px)]">
                <img
                  className="w-full h-full object-cover object-center"
                  src="/investment.jpg"
                  alt="Orlando lakefront home aerial view"
                />
              </div>
              {/* Badge inside image, bottom-left */}
              <div className="absolute bottom-5 left-5 bg-primary/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl">
                <span className="text-primary-fixed-dim font-headline font-bold text-2xl block leading-none mb-1">12%+</span>
                <p className="text-white text-xs font-body leading-snug max-w-[180px]">{t.value.badge}</p>
              </div>
            </motion.div>
            {/* Text column – takes 5/12 */}
            <motion.div className="lg:col-span-5 space-y-5" {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-primary leading-tight">
                {t.value.title}
              </h2>
              <div className="h-1 w-16 bg-primary-fixed-dim"></div>
              <p className="text-base text-secondary leading-relaxed font-body">
                {t.value.desc}
              </p>
              <ul className="space-y-4">
                {t.value.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-primary font-headline text-sm">{item.title}</span>
                      <span className="text-secondary text-xs">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="expertise" className="pt-8 pb-20 bg-surface-container-low scroll-mt-[160px]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div className="max-w-2xl" {...fadeIn}>
              <span className="text-primary-container font-headline font-bold tracking-[0.2em] uppercase text-xs mb-4 block">{t.services.label}</span>
              <h2 className="text-4xl font-headline font-extrabold text-primary">{t.services.title}</h2>
            </motion.div>
            <motion.div className="text-secondary max-w-xs md:text-right" {...fadeIn}>
              {t.services.desc}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, i) => {
              const icons = [Building2, Compass, TrendingUp, Key];
              const Icon = icons[i];
              return (
                <motion.div 
                  key={i} 
                  className="bg-white p-10 rounded-xl hover:shadow-xl transition-all group cursor-default"
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <Icon className="text-primary group-hover:text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed font-body">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why TAM4 Homes */}
      <section id="porque" className="pt-8 pb-20 bg-primary text-white overflow-hidden relative scroll-mt-[160px]">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-container opacity-20 pointer-events-none skew-x-12 transform translate-x-20"></div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <motion.div {...fadeIn}>
                <h2 className="text-5xl font-headline font-extrabold tracking-tight mb-6">{t.why.title}</h2>
                <p className="text-primary-fixed-dim text-lg">{t.why.subtitle}</p>
              </motion.div>
              <div className="space-y-8">
                {t.why.items.map((item, i) => (
                  <motion.div key={i} className="flex gap-6" {...fadeIn} transition={{ delay: i * 0.1 }}>
                    <div className="text-primary-fixed-dim">
                      <span className="text-4xl font-headline font-black">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-headline mb-2">{item.title}</h4>
                      <p className="text-surface-container-low/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="lg:col-span-7 bg-white/15 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20"
              {...fadeIn}
            >
              <h3 className="text-3xl font-headline font-bold mb-10">{t.why.investor_title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {t.why.benefits.map((benefit, i) => {
                  const icons = [DollarSign, Home, ShieldCheck, LogOut];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="space-y-4">
                      <Icon className="text-primary-fixed-dim w-10 h-10" />
                      <h5 className="text-lg font-bold">{benefit.title}</h5>
                      <p className="text-sm text-surface-container-low/80">{benefit.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="h-[calc(100vh-160px)] overflow-hidden flex flex-col justify-center bg-surface scroll-mt-[160px] py-6">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col h-full py-6">
          <motion.div className="mb-4 shrink-0" {...fadeIn}>
            <h2 className="text-3xl font-headline font-extrabold text-primary mb-3">{t.portfolio.title}</h2>
            <div className="h-1 w-16 bg-primary"></div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
            <motion.div className="lg:col-span-7 relative group overflow-hidden rounded-xl" {...fadeIn}>
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/portfolio-windermere.jpg"
                alt="Windermere Project - The Lakeview Estate"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-primary-fixed-dim font-headline font-bold uppercase text-xs tracking-widest mb-2">{t.portfolio.items[0].label}</span>
                <h3 className="text-white text-2xl font-bold font-headline">{t.portfolio.items[0].title}</h3>
              </div>
            </motion.div>
            <div className="lg:col-span-5 grid grid-rows-2 gap-4 min-h-0">
              <motion.div className="relative group overflow-hidden rounded-xl min-h-0" {...fadeIn} transition={{ delay: 0.2 }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/portfolio-wintergarden.jpg"
                  alt="Winter Garden Interiors"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold font-headline">{t.portfolio.items[1].title}</h3>
                </div>
              </motion.div>
              <motion.div className="relative group overflow-hidden rounded-xl min-h-0" {...fadeIn} transition={{ delay: 0.3 }}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/portfolio-citrusspring.jpg"
                  alt="Citrus Spring Home"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold font-headline">{t.portfolio.items[2].title}</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="caminho" className="h-[calc(100vh-160px)] overflow-hidden flex flex-col justify-center bg-surface-container-low scroll-mt-[160px] py-6">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center mb-8">
          <motion.h2 className="text-3xl font-headline font-extrabold text-primary mb-4" {...fadeIn}>
            {t.process.title}
          </motion.h2>
          <motion.p className="text-secondary max-w-2xl mx-auto text-sm" {...fadeIn}>
            {t.process.desc}
          </motion.p>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, i) => (
              <motion.div key={i} className="text-center p-4" {...fadeIn} transition={{ delay: i * 0.1 }}>
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="text-lg font-headline font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-secondary text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary mb-8 tracking-tighter" {...fadeIn}>
            {t.cta.title}
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-secondary mb-12 font-light" {...fadeIn}>
            {t.cta.subtitle}
          </motion.p>
          <motion.button 
            onClick={handleWhatsApp}
            className="bg-primary text-on-primary px-10 md:px-12 py-5 rounded-lg font-headline font-extrabold uppercase text-xs tracking-[0.2em] hover:bg-primary-container transition-all shadow-xl shadow-primary/20"
            {...fadeIn}
          >
            {t.cta.button}
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-high pt-5 pb-3">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          {/* Main row: [Logo + Desc] ←→ [Contact + Support] */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-4 border-b border-outline/20">
            {/* Left: Logo + Description */}
            <div className="flex items-center md:w-1/2 gap-6">
              <Logo className="shrink-0" />
              <p className="text-secondary text-xs leading-relaxed text-center whitespace-pre-line">
                {t.footer.desc}
              </p>
            </div>
            {/* Right: Contact + Support */}
            <div className="flex gap-12 items-start">
              {/* Contact */}
              <div>
                <h4 className="font-semibold text-primary mb-2 uppercase text-[10px] tracking-widest">{t.footer.contact}</h4>
                <ul className="space-y-1.5 text-xs text-secondary">
                  <li>Orlando - FL</li>
                  <li>
                    <a href="https://wa.me/17869160997" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      +1 (786) 916-0997
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@tam4homes.com" className="hover:text-primary transition-colors">
                      contact@tam4homes.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* Support */}
              <div>
                <h4 className="font-semibold text-primary mb-2 uppercase text-[10px] tracking-widest">{t.footer.support}</h4>
                <ul className="space-y-1.5 text-xs text-secondary">
                  <li><a href="https://wa.me/17869160997" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Support</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Orlando Office</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="mt-3 flex flex-col md:flex-row justify-between items-center gap-1 text-[10px] text-secondary/40">
            <p>{t.footer.rights}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
