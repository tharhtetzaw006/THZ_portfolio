"use client";

import { useState } from "react";
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
  {
    image: "/certificates/cert1.png",
    title: "AWS Student Community Day Delhi NCR 2026",
    issuer: "AWS & Sharda University",
  },
  {
    image: "/certificates/cert2.png",
    title: "Upper Secondary Plus 2",
    issuer: "British Council",
  },
  {
    image: "/certificates/cert3.png",
    title: "Introduction to Cloud Computing",
    issuer: "IBM Skills Network",
  },
  {
    image: "/certificates/cert4.png",
    title: "Cloud Computing Core",
    issuer: "IBM Skills Network",
  },
  {
    image: "/certificates/cert5.png",
    title: "English for Career Development",
    issuer: "University of Pennsylvania",
  },
  {
    image: "/certificates/cert6.png",
    title: "Introduction to Web Development with HTML, CSS & JavaScript",
    issuer: "IBM Skills Network",
  },
  {
    image: "/certificates/cert7.png",
    title: "Applied Database Systems Using Oracle AI Database",
    issuer: "Oracle Academy",
  },
  {
    image: "/certificates/cert8.png",
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
  },
  {
    image: "/certificates/cert9.png",
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON",
  },
  {
    image: "/certificates/cert10.png",
    title: "Generative AI Essentials",
    issuer: "TCS iON",
  },
  {
    image: "/certificates/cert11.jpg",
    title: "Business Model Training",
    issuer: "GUSTO Innovation Challenge",
  },
  {
    image: "/certificates/cert12.png",
    title: "Drones & Robotics Workshop Core Team",
    issuer: "Sharda University",
  },
];

// Rich metadata bound to each index positions for premium fallback presentation

export default function Certifications() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [pausedRow1, setPausedRow1] = useState(false);
  const [pausedRow2, setPausedRow2] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Row 1 & Row 2 items data lists doubled for fluid loop
  const row1Certificates = [...certificates, ...certificates];
  const row2Certificates = [
    ...[...certificates].reverse(),
    ...[...certificates].reverse(),
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="05 / Verification"
          title="Certificates"
          subtitle="Featured projects demonstrating my experience in software development, problem-solving, and modern technology solutions."
        />
      </div>

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
      <div className="mt-12 space-y-8 relative z-10 px-20 sm:px-28 lg:px-40">
        {/* Row 1: Right to Left */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle horizontal mask gradient overlays for visual blending */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div
            className="marquee-container-left gap-6 px-56"
            style={{ animationPlayState: pausedRow1 ? "paused" : "running" }}
          >
            {row1Certificates.map((cert, idx) => {
              const hasError = imageErrors[`r1-${idx}`] || false;

              return (
                <div
                  key={`row1-${idx}`}
                  onClick={() => setSelectedImage(cert.image)}
                  onMouseEnter={() => setPausedRow1(true)}
                  onMouseLeave={() => setPausedRow1(false)}
                  className="group block relative w-[240px] sm:w-[320px] md:w-[420px] aspect-[1.6/1] rounded-3xl overflow-hidden shrink-0 cursor-pointer"
                >
                  <div
                    className="
    absolute top-0 right-0
    w-[160px] h-[160px]
    rounded-full
    bg-gradient-to-br
    from-sky-500/20
    to-blue-600/5
    opacity-20
    blur-2xl
    group-hover:opacity-40
    transition-all
    duration-500
    pointer-events-none
  "
                  />

                  {/* Dynamic Certificate Image layout rendering fallback on missing files */}
                  {!hasError ? (
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-3xl">
                      <Image
                        fill
                        src={cert.image}
                        alt={cert.title}
                        className="object-contain transition-opacity duration-300"
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
                              {cert.title}
                            </h4>
                            <p className="text-zinc-400 text-xs font-mono">
                              {cert.issuer}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-sky-400 shrink-0 mb-1" />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Subtle horizontal mask gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div
            className="marquee-container-right gap-6 px-56"
            style={{ animationPlayState: pausedRow2 ? "paused" : "running" }}
          >
            {row2Certificates.map((cert, idx) => {
              const hasError = imageErrors[`r2-${idx}`] || false;

              return (
                <div
                  key={`row2-${idx}`}
                  onClick={() => setSelectedImage(cert.image)}
                  onMouseEnter={() => setPausedRow2(true)}
                  onMouseLeave={() => setPausedRow2(false)}
                  className="group block relative w-[240px] sm:w-[320px] md:w-[420px] aspect-[1.6/1] rounded-3xl overflow-hidden shrink-0 cursor-pointer"
                >
                  <div
                    className="
    absolute top-0 right-0
    w-[160px] h-[160px]
    rounded-full
    bg-gradient-to-br
    from-sky-500/20
    to-blue-600/5
    opacity-20
    blur-2xl
    group-hover:opacity-40
    transition-all
    duration-500
    pointer-events-none
  "
                  />

                  {/* Dynamic Certificate Image layout rendering fallback on missing files */}
                  {!hasError ? (
                    <div className="absolute inset-0 z-10 w-full h-full overflow-hidden rounded-3xl">
                      <Image
                        fill
                        src={cert.image}
                        alt={cert.title}
                        className="object-contain transition-opacity duration-300"
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
                              {cert.title}
                            </h4>
                            <p className="text-zinc-400 text-xs font-mono">
                              {cert.issuer}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-sky-400 shrink-0 mb-1" />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate"
              width={1400}
              height={1000}
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
