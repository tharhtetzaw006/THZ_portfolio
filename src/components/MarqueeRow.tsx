"use client";

import { CertificationItem } from "../types";
import CertificateCard from "./CertificateCard";

interface MarqueeRowProps {
  certificates: CertificationItem[];
  direction: "left" | "right";
  imageErrors: Record<string, boolean>;
  setImageError: (key: string) => void;
  onImageClick: (cert: CertificationItem) => void;
}

export default function MarqueeRow({
  certificates,
  direction,
  imageErrors,
  setImageError,
  onImageClick,
}: MarqueeRowProps) {
  const animationClass =
    direction === "left" ? "marquee-container-left" : "marquee-container-right";

  return (
    <div className="marquee-wrapper relative w-full overflow-hidden py-2">
      <div className="absolute left-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none sm:w-48" />

      <div className="absolute right-0 top-0 bottom-0 z-20 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none sm:w-48" />

      <div className={`${animationClass} gap-6 px-56`}>
        {[...certificates, ...certificates].map((cert, index) => (
          <CertificateCard
            key={`${direction}-${cert.id}-${index}`}
            cert={cert}
            imageError={imageErrors[`${direction}-${index}`] || false}
            onImageError={() => setImageError(`${direction}-${index}`)}
            onClick={() => onImageClick(cert)}
          />
        ))}
      </div>
    </div>
  );
}
