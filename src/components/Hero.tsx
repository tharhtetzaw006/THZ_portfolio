"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  FileText,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const words = ["Thar Htet Zaw", "Computer Science & Engineering Student"];

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  // Typewriter animation state
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = words[wordIndex];

    if (isDeleting) {
      // Remove letter
      if (currentText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length - 1));
        }, 40); // Fast key deleting speed
      }
    } else {
      // Add letter
      if (currentText === activeWord) {
        // Pause for 2 seconds when word is fully typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setCurrentText(activeWord.substring(0, currentText.length + 1));
        }, 80); // Classic standard typewriter key speed
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const topOfSet = el.offsetTop - 80;
      window.scrollTo({ top: topOfSet, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      window.open("/Thar_Htet_Zaw_CV.pdf", "_blank");
    }, 1000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden"
    >
      {/* Premium minimal background lights - refined deep sky green glow theme */}
      <div className="absolute top-1/4 right-[5%] w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full bg-sky-600/10 blur-[130px] sm:blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[8%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-sky-700/5 blur-[130px] sm:blur-[170px] pointer-events-none -z-10" />

      {/* Grid overlay for depth */}
      <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Side: Content with clean reveal transitions */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 sm:space-y-8 select-none">
          {/* Title Headline and Main Header Block */}
          <div className="space-y-4">
            <div className="min-h-[110px] sm:min-h-[140px] flex flex-col justify-end">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display font-medium text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] max-w-2xl"
              >
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-sky-400 font-bold block sm:inline">
                  {currentText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-[3px] sm:w-[5px] h-[0.8em] bg-sky-400 ml-1.5 rounded align-middle"
                />
              </motion.h1>
            </div>
          </div>

          {/* Core Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-sm sm:text-base md:text-md font-sans font-light leading-relaxed max-w-xl"
          >
            Computer Science & Engineering student passionate about full-stack
            development, artificial intelligence, and building software
            solutions that create real-world impact.
          </motion.p>

          {/* Premium Call to Action Interactive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full max-w-lg"
          >
            <button
              onClick={handleScrollToProjects}
              className="group px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 border border-white active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-black" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-6 py-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/30 text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95 hover:bg-zinc-900"
            >
              {downloading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
                  Loading CV...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                  Download CV
                </>
              )}
            </button>

            {/* Redesigned Minimalistic Social Elements */}
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/tharhtetzaw006"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-sky-500/30 transition-all duration-300 shadow-md hover:bg-zinc-900"
                aria-label="GitHub link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/tharhtetzaw"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-sky-500/30 transition-all duration-300 shadow-md hover:bg-zinc-900"
                aria-label="LinkedIn link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Re-designed Large Elegant Portrait Cutout with Premium 3D Spatial Parallax */}
        <div
          className="lg:col-span-7 flex items-center justify-center relative py-12 lg:py-0 select-none z-20"
          style={{ perspective: 2000 }}
        >
          {/* Layered Cinematic Backlights & sky and Azure Radial Glow Effects */}
          <div className="absolute w-[80%] sm:w-[500px] lg:w-[600px] xl:w-[700px] aspect-square rounded-full bg-white/5 blur-[120px] pointer-events-none z-0 mix-blend-screen" />
          <div className="absolute w-[60%] sm:w-[400px] lg:w-[480px] xl:w-[550px] aspect-square rounded-full bg-blue-600/5 blur-[100px] pointer-events-none z-0 mix-blend-screen" />

          {/* Soft Glow Behind Portrait */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[50%] sm:w-[350px] lg:w-[420px] aspect-square rounded-full bg-white/5 blur-[90px] pointer-events-none z-0 mix-blend-overlay"
          />

          {/* Floating Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative w-full h-[650px] sm:h-[800px] lg:h-[95vh] xl:h-[100vh] flex items-center justify-center z-10"
          >
            {/* Shadow */}
            <div className="absolute bottom-6 w-[55%] h-6 bg-black/60 blur-[25px] rounded-full pointer-events-none z-0" />

            {/* Portrait */}
            <motion.div
              className="relative w-full h-full pointer-events-none z-10"
              style={{
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.8))",
              }}
            >
              <Image
                src="/profile.png"
                alt="Thar Htet Zaw"
                fill
                priority
                quality={100}
                referrerPolicy="no-referrer"
                sizes="(max-width:768px) 100vw, 800px"
                className="object-contain origin-bottom"
              />

              {/* Light Sweep */}
              <motion.div
                initial={{ x: "-180%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  repeatDelay: 3,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-[20deg] pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
