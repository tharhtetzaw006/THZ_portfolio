"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import Image from "next/image";

const navItems = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "achievements", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for nav opacity and active target highlights
  useEffect(() => {
    const handleScroll = () => {
      // 1. Change transparent navbar to floating shadow navbar when scrolled
      setIsScrolled(window.scrollY > 40);

      // 2. Active Section Spy
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // execute immediately
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Handle custom smooth offsets for headers
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-3 bg-[#050505]/75 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/10"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Personal Branding with Sky-Blue accents */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 font-display font-bold text-lg text-white group cursor-pointer"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#38bdf8]/40 shadow-[0_0_15px_rgba(56,189,248,0.35)] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/me.jpg"
                alt="Thar Htet Zaw"
                fill
                className="object-cover"
              />
            </div>
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:via-zinc-100 transition-colors">
              Thar Htet Zaw
              <span className="text-xs font-mono font-normal opacity-60 ml-1 tracking-wider hidden sm:inline">
                dev
              </span>
            </span>
          </button>

          {/* Desktop Navigation Links (Pill Glass UI with dark luxury indicators) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-black/40 border border-white/[0.05] backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/10 border border-white/10 shadow-inner rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Call to action Contact CTA button using Premium Sky-Blue theme */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r bg-white text-black font-semibold text-sm hover:bg-zinc-200 border border-white shadow-[0_4px_12px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hamburger toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Layer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full justify-between px-6 py-24 select-none">
              <nav className="space-y-6 flex flex-col items-center">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.id)}
                      className="text-left py-2 text-2xl font-display font-medium tracking-wide flex items-center justify-between w-full border-b border-white/5"
                    >
                      <span
                        className={isActive ? "text-[#38bdf8]" : "text-white"}
                      >
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">
                        {`0${index + 1}`}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-4 text-center">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#7dd3fc] hover:to-[#38bdf8] text-black font-medium shadow-[0_4px_20px_rgba(56,189,248,0.25)] cursor-pointer"
                >
                  Contact Me
                </button>
                <p className="text-zinc-500 text-xs font-mono">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
