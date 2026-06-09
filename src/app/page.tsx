"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Smooth natural 4.6 seconds progress bar matching user parameters
  useEffect(() => {
    setHasMounted(true);
    let start = 0;
    const duration = 4600; // ~4.6 seconds duration
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Exquisite exit sequencing: scale up, glow, then vanish
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setLoading(false);
          }, 800); // Exquisite exit delay
        }, 300);
      } else {
        // Aesthetic decelerating ease calculation so progression slows down towards the end representationally
        const progressRatio = start / 100;
        const easeAdjusted = 100 * Math.sin(progressRatio * (Math.PI / 2));
        setProgress(Math.min(Math.round(easeAdjusted), 99));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Normalized coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Generate gorgeous premium positions for circular environment stars/particles
  const particleOffsets = [
    { left: "12%", top: "18%", delay: 0, size: 4, dur: 4.5 },
    { left: "82%", top: "25%", delay: 0.8, size: 5, dur: 5.2 },
    { left: "18%", top: "72%", delay: 1.4, size: 3, dur: 3.8 },
    { left: "78%", top: "82%", delay: 0.4, size: 6, dur: 6.0 },
    { left: "8%", top: "52%", delay: 2.1, size: 4, dur: 4.8 },
    { left: "92%", top: "45%", delay: 1.1, size: 5, dur: 5.5 },
    { left: "30%", top: "10%", delay: 2.5, size: 3, dur: 4.2 },
    { left: "68%", top: "90%", delay: 1.8, size: 4, dur: 5.0 },
  ];

  if (!hasMounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{
              opacity: exiting ? 0 : 1,
              scale: exiting ? 1.06 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden select-none"
          >
            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#000000_100%] pointer-events-none z-10" />

            {/* Apple & Linear Premium Ambient Orbs with Sky-Blue palette */}
            <motion.div
              animate={{
                scale: exiting ? 1.8 : isHovered ? 1.2 : 1,
                opacity: exiting ? 0.9 : 0.6,
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[500px] sm:w-[600px] aspect-square rounded-full bg-[#0ea5e9]/10 blur-[140px] pointer-events-none -translate-y-10 animate-pulse duration-[6s] z-0"
            />
            <div className="absolute w-[400px] sm:w-[500px] aspect-square rounded-full bg-[#38bdf8]/5 blur-[120px] pointer-events-none translate-x-[20%] translate-y-[15%] z-0" />

            {/* Micro grid alignment system with soft sky-blue indicator particles */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.012)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none opacity-80" />

            {/* Responsive Cinematic Container */}
            <div
              className="relative max-w-lg w-full px-6 flex flex-col items-center justify-center text-center z-20"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              style={{ perspective: 1200 }}
            >
              {/* Profile Portrait - Clean, premium circular avatar, naturally integrated */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: exiting ? 1.12 : isHovered ? 1.04 : 1,
                  y: exiting ? -30 : isHovered ? [0, -4, 0] : [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, ease: "easeOut" },
                  scale: { duration: 0.6, ease: "easeOut" },
                  y: exiting
                    ? { duration: 0.6, ease: "easeInOut" }
                    : {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                      },
                }}
                style={{
                  transform: `perspective(1200px) rotateY(${coords.x * 15}deg) rotateX(${coords.y * -15}deg) translateZ(40px)`,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center cursor-pointer mb-10 transition-transform duration-200"
              >
                {/* Subtle soft sky-blue glow behind the circle */}
                <motion.div
                  animate={{
                    scale: exiting ? 1.4 : isHovered ? 1.15 : 1,
                    opacity: exiting ? 0.9 : [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: exiting ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[4px] rounded-full bg-[#38bdf8]/15 blur-[35px] pointer-events-none -z-10 mix-blend-screen"
                  style={{
                    transform: "translateZ(-15px)",
                  }}
                />

                {/* Clean, premium circular frame around the profile image */}
                <div
                  className="absolute inset-0 rounded-full border border-white/[0.08] bg-zinc-950/20 shadow-lg shadow-black/40 pointer-events-none z-10"
                  style={{
                    transform: "translateZ(-5px)",
                  }}
                />

                {/* Main Profile Circle Container containing the image */}
                <div
                  style={{
                    transform: `translate3d(${coords.x * 8}px, ${coords.y * 8}px, 15px)`,
                  }}
                  className="relative w-[96%] h-[96%] rounded-full overflow-hidden border border-white/[0.04] bg-[#0c0c0e]"
                >
                  <Image
                    src="/me.jpg"
                    alt="Preloader Subject Portrait"
                    fill
                    priority
                    quality={100}
                    sizes="(max-w-768px) 180px, 240px"
                    className="object-cover scale-[1.12]"
                  />
                  {/* Subtle tint overhead to blend portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 via-transparent to-[#38bdf8]/[0.02] pointer-events-none" />
                </div>
              </motion.div>

              {/* Loader Description & Continuous Natural Progress Indicator Bar */}
              <div
                className="space-y-6 w-full max-w-sm mx-auto"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* 1. Static Premium Welcome Heading */}
                <div className="h-7 flex items-center justify-center">
                  <span className="font-sans text-white text-[14px] sm:text-[15px] font-semibold tracking-[0.2em] uppercase text-center select-none drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]">
                    Welcome to My Portfolio
                  </span>
                </div>

                {/* 2. Premium Wide Sky-Blue Linear Gradient Progress Bar */}
                <div className="relative w-full h-[4px] rounded-full bg-white/[0.04] overflow-hidden">
                  {/* Highly polished background progress stream */}
                  <motion.div
                    style={{ width: `${progress}%` }}
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#7dd3fc] transition-all duration-75"
                  />

                  {/* Glowing Laser Tracer Spot */}
                  <motion.div
                    style={{
                      width: `${progress}%`,
                      boxShadow:
                        "0 0 14px rgba(56,189,248,0.9), 0 0 25px rgba(14,165,233,0.5)",
                    }}
                    className="absolute top-0 bottom-0 left-0 bg-[#7dd3fc] transition-all duration-75"
                  />
                </div>

                {/* 3. Numerical Percentage Meter Counter block without leading zero */}
                <div className="h-6 flex items-center justify-center">
                  <motion.span
                    key={progress}
                    initial={{ scale: 0.94 }}
                    animate={{ scale: 1 }}
                    className="font-mono text-[13px] text-zinc-400 font-medium tracking-widest"
                  >
                    {Math.floor(progress)}%
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <Navbar />
            <motion.div
              key="application-root"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative min-h-screen selection:bg-[#38bdf8]/30 text-zinc-300 font-sans antialiased bg-[#050505]"
            >
              <AnimatedBackground />
              <main className="relative z-10">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Achievements />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
