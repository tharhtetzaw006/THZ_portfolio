"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

import { CERTIFICATIONS } from "../data";
import MarqueeRow from "./MarqueeRow";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof CERTIFICATIONS)[0] | null
  >(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const setImageError = (key: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  // Row 1
  const row1Certificates = useMemo(() => CERTIFICATIONS, []);

  // Row 2 (reverse direction)
  const row2Certificates = useMemo(() => [...CERTIFICATIONS].reverse(), []);

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

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }

        @keyframes marqueeRight {
          0% { transform: translate3d(-50%,0,0); }
          100% { transform: translate3d(0,0,0); }
        }

        .marquee-container-left,
        .marquee-container-right {
          display:flex;
          width:max-content;
          will-change:transform;
          backface-visibility:hidden;
          transform:translateZ(0);
          animation-duration:40s;
          animation-timing-function:linear;
          animation-iteration-count:infinite;
        }

        .marquee-container-left{
          animation:marqueeLeft 40s linear infinite;
        }

        .marquee-container-right{
          animation:marqueeRight 40s linear infinite;
        }

        .marquee-wrapper:hover .marquee-container-left,
        .marquee-wrapper:hover .marquee-container-right{
          animation-play-state:paused;
        }
      `}</style>

      {/* Marquee Wrapper Space */}
      <div className="mt-12 space-y-8 relative z-10 px-20 sm:px-28 lg:px-40">
        <MarqueeRow
          certificates={row1Certificates}
          direction="left"
          imageErrors={imageErrors}
          setImageError={setImageError}
          onImageClick={setSelectedCertificate}
        />

        <MarqueeRow
          certificates={row2Certificates}
          direction="right"
          imageErrors={imageErrors}
          setImageError={setImageError}
          onImageClick={setSelectedCertificate}
        />
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center px-8 py-20 overflow-auto"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              width={1400}
              height={1000}
              className="
    w-[820px]
    h-[560px]
    max-w-[90vw]
    max-h-[85vh]
    rounded-2xl
    object-scale-down
    shadow-2xl
  "
            />
          </div>
        </div>
      )}
    </section>
  );
}
