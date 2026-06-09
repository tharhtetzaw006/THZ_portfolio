"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Cpu,
  Code2,
  Globe,
} from "lucide-react";

// Specified image structure
const certificates = [
  { image: "/certificates/cert1.png" },
  { image: "/certificates/cert2.png" },
  { image: "/certificates/cert3.png" },
  { image: "/certificates/cert4.png" },
  { image: "/certificates/cert5.png" },
  { image: "/certificates/cert6.png" },
  { image: "/certificates/cert7.png" },
  { image: "/certificates/cert8.png" },
  { image: "/certificates/cert9.png" },
  { image: "/certificates/cert10.png" },
  { image: "/certificates/cert11.jpg" },
  { image: "/certificates/cert12.png" },
];

// Rich metadata bound to each index positions for premium fallback presentation
const certMetadata = [
  {
    title: "Generative AI Essentials",
    issuer: "TCS iON",
    code: "8772-31131187-1016",
    date: "Jun 2026",
    icon: Cpu,
    glowColor: "from-sky-500/20 to-blue-600/5",
  },
  {
    title: "Business Model Training",
    issuer: "GUSTO Innovation Challenge",
    code: "GIC-BMT-2024",
    date: "2024",
    icon: Award,
    glowColor: "from-amber-500/20 to-yellow-500/5",
  },
  {
    title: "Drones & Robotics Workshop Core Team",
    issuer: "Sharda University",
    code: "DART-CORE-2026",
    date: "Mar 2026",
    icon: Cpu,
    glowColor: "from-indigo-500/20 to-blue-500/5",
  },
  {
    title: "AWS Student Community Day Delhi NCR",
    issuer: "Amazon Web Services",
    code: "AWS-SCD-2026",
    date: "Mar 2026",
    icon: ShieldCheck,
    glowColor: "from-orange-500/20 to-yellow-500/5",
  },
  {
    title: "Upper Secondary Plus 2",
    issuer: "British Council",
    code: "BC-UP2-2024",
    date: "2024",
    icon: Globe,
    glowColor: "from-pink-500/20 to-purple-500/5",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM / Coursera",
    code: "VKR7W3RVRAPE",
    date: "May 2024",
    icon: Cpu,
    glowColor: "from-blue-500/20 to-cyan-500/5",
  },
  {
    title: "Cloud Computing Core",
    issuer: "IBM Skills Network",
    code: "IBM-CCORE-2024",
    date: "May 2024",
    icon: ShieldCheck,
    glowColor: "from-sky-500/20 to-blue-500/5",
  },
  {
    title: "English for Career Development",
    issuer: "University of Pennsylvania / Coursera",
    code: "2MHVRRPMPYLK",
    date: "May 2024",
    icon: Award,
    glowColor: "from-indigo-500/20 to-slate-500/5",
  },
  {
    title: "Introduction to Web Development",
    issuer: "IBM / Coursera",
    code: "IBM-WEBDEV-2025",
    date: "Jul 2025",
    icon: Code2,
    glowColor: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Applied Database Systems Using Oracle AI Database",
    issuer: "Oracle Academy",
    code: "ORACLE-DB-2026",
    date: "Apr 2026",
    icon: Cpu,
    glowColor: "from-red-500/20 to-orange-500/5",
  },
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    code: "ORACLE-JAVA-2026",
    date: "Apr 2026",
    icon: Code2,
    glowColor: "from-red-500/20 to-pink-500/5",
  },
  {
    title: "AI & Cybersecurity Awareness",
    issuer: "TCS iON",
    code: "8770-31131187-1016",
    date: "May 2026",
    icon: ShieldCheck,
    glowColor: "from-cyan-500/20 to-blue-500/5",
  },
];

export default function Certifications() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [pausedRow1, setPausedRow1] = useState(false);
  const [pausedRow2, setPausedRow2] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
      navbar.style.display = selectedImage ? "none" : "block";
    }

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, [selectedImage]);

  // Row 1 & Row 2 items data lists doubled for fluid loop
  const row1Certificates = [...certificates, ...certificates];
  const row2Certificates = [
    ...[...certificates].reverse(),
    ...[...certificates].reverse(),
  ];

  return (
    <section
      id="certifications"
      className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8"
    >
      {/* Background radial ambient stars glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] aspect-square rounded-full bg-sky-500/[0.02] blur-[150px] pointer-events-none -z-10" />

      <SectionHeader
        badge="05 / Verification"
        title="Certificates"
        subtitle="Featured projects demonstrating my experience in software development, problem-solving, and modern technology solutions."
      />

      {/* Styled keyframes injection to achieve pure hardware-accelerated loops with optional paused state */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-container-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 30s linear infinite;
        }
        .marquee-container-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 30s linear infinite;
        }
      `}</style>

      {/* Marquee Wrapper Space */}
      <div className="mt-12 space-y-8 relative z-10">
        {/* Row 1: Right to Left */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle horizontal mask gradient overlays for visual blending */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div
            className="marquee-container-left gap-6 px-3"
            style={{ animationPlayState: pausedRow1 ? "paused" : "running" }}
          >
            {row1Certificates.map((cert, idx) => {
              const metaIndex = idx % certificates.length;
              const meta = certMetadata[metaIndex % certMetadata.length];
              const Icon = meta.icon;
              const hasError = imageErrors[`r1-${idx}`] || false;

              return (
                <div
                  key={`row1-${idx}`}
                  onClick={() => setSelectedImage(cert.image)}
                  onMouseEnter={() => setPausedRow1(true)}
                  onMouseLeave={() => setPausedRow1(false)}
                  className="group block relative w-[260px] sm:w-[320px] md:w-[420px] aspect-[1.414/1] rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.02)] hover:shadow-[0_0_35px_rgba(56,189,248,0.18)] hover:scale-[1.03] hover:border-white/20 transition-all duration-300 transform-gpu shrink-0 cursor-pointer"
                >
                  {/* Subtle inner radial gradient orb */}
                  <div
                    className={`absolute top-0 right-0 w-[160px] h-[160px] rounded-full bg-gradient-to-br ${meta.glowColor} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 pointer-events-none`}
                  />

                  {/* Dynamic Certificate Image layout rendering fallback on missing files */}
                  {!hasError ? (
                    <div className="absolute inset-0 z-10 w-full h-full">
                      <Image
                        src={cert.image}
                        alt={meta.title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        referrerPolicy="no-referrer"
                        sizes="(max-w-768px) 320px, 420px"
                        onError={() => {
                          setImageErrors((prev) => ({
                            ...prev,
                            [`r1-${idx}`]: true,
                          }));
                        }}
                      />
                      {/* Dark gradient gloss overlay shown on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="flex justify-between items-end">
                          <div className="space-y-1">
                            <h4 className="font-display font-semibold text-white text-sm sm:text-base">
                              {meta.title}
                            </h4>
                            <p className="text-zinc-400 text-xs font-mono">
                              {meta.issuer}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-sky-400 shrink-0 mb-1" />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Premium Apple/Stripe inspired vector fallback layer */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-0">
                    {/* Modern top line headers */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
                            Registry Certified
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {meta.date}
                      </span>
                    </div>

                    {/* Middle title stack */}
                    <div>
                      <h4 className="font-display font-extrabold text-white text-base sm:text-lg md:text-xl leading-tight group-hover:text-sky-300 transition-colors">
                        {meta.title}
                      </h4>
                      <p className="text-zinc-400 font-sans text-xs sm:text-sm font-light mt-1.5">
                        {meta.issuer}
                      </p>
                    </div>

                    {/* Lower key specs bar */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-wider text-zinc-600 font-semibold font-mono">
                          ID SECURE HASH
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-0.5">
                          {meta.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-sky-400 transition-colors">
                        <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle horizontal mask gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div
            className="marquee-container-right gap-6 px-3"
            style={{ animationPlayState: pausedRow2 ? "paused" : "running" }}
          >
            {row2Certificates.map((cert, idx) => {
              const metaIndex =
                (certificates.length -
                  1 -
                  (idx % certificates.length) +
                  certificates.length) %
                certificates.length;
              const meta = certMetadata[metaIndex % certMetadata.length];
              const Icon = meta.icon;
              const hasError = imageErrors[`r2-${idx}`] || false;

              return (
                <div
                  key={`row2-${idx}`}
                  onClick={() => setSelectedImage(cert.image)}
                  onMouseEnter={() => setPausedRow2(true)}
                  onMouseLeave={() => setPausedRow2(false)}
                  className="group block relative w-[260px] sm:w-[320px] md:w-[420px] aspect-[1.414/1] rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.02)] hover:shadow-[0_0_35px_rgba(56,189,248,0.18)] hover:scale-[1.03] hover:border-white/20 transition-all duration-300 transform-gpu shrink-0 cursor-pointer"
                >
                  {/* Subtle inner radial gradient orb */}
                  <div
                    className={`absolute top-0 right-0 w-[160px] h-[160px] rounded-full bg-gradient-to-br ${meta.glowColor} opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500 pointer-events-none`}
                  />

                  {/* Dynamic Certificate Image layout rendering fallback on missing files */}
                  {!hasError ? (
                    <div className="absolute inset-0 z-10 w-full h-full">
                      <Image
                        src={cert.image}
                        alt={meta.title}
                        fill
                        className="object-cover transition-opacity duration-300"
                        referrerPolicy="no-referrer"
                        sizes="(max-w-768px) 320px, 420px"
                        onError={() => {
                          setImageErrors((prev) => ({
                            ...prev,
                            [`r2-${idx}`]: true,
                          }));
                        }}
                      />
                      {/* Dark gradient gloss overlay shown on hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="flex justify-between items-end">
                          <div className="space-y-1">
                            <h4 className="font-display font-semibold text-white text-sm sm:text-base">
                              {meta.title}
                            </h4>
                            <p className="text-zinc-400 text-xs font-mono">
                              {meta.issuer}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-sky-400 shrink-0 mb-1" />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* Premium Apple/Stripe inspired vector fallback layer */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-0">
                    {/* Modern top line headers */}
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
                            Registry Certified
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        {meta.date}
                      </span>
                    </div>

                    {/* Middle title stack */}
                    <div>
                      <h4 className="font-display font-extrabold text-white text-base sm:text-lg md:text-xl leading-tight group-hover:text-sky-300 transition-colors">
                        {meta.title}
                      </h4>
                      <p className="text-zinc-400 font-sans text-xs sm:text-sm font-light mt-1.5">
                        {meta.issuer}
                      </p>
                    </div>

                    {/* Lower key specs bar */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-wider text-zinc-600 font-semibold font-mono">
                          ID SECURE HASH
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-0.5">
                          {meta.code}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-sky-400 transition-colors">
                        <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                          View
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
