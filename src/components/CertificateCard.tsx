"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CertificationItem } from "../types";

interface CertificateCardProps {
  cert: CertificationItem;
  imageError: boolean;
  onImageError: () => void;
  onClick: () => void;
}

export default function CertificateCard({
  cert,
  imageError,
  onImageError,
  onClick,
}: CertificateCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-[240px] sm:w-[320px] md:w-[420px] aspect-[1.6/1] shrink-0 overflow-hidden rounded-3xl cursor-pointer will-change-transform"
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
          blur-xl
          transition-all
          duration-500
          group-hover:opacity-40
          pointer-events-none
        "
      />

      {!imageError && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            fill
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            decoding="async"
            quality={50}
            className="object-contain transition-opacity duration-300"
            sizes="(max-width:768px) 320px, 420px"
            referrerPolicy="no-referrer"
            onError={onImageError}
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-black/0 via-black/40 to-black/85 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="font-display text-sm font-semibold text-white sm:text-base">
                  {cert.title}
                </h4>

                <p className="text-xs font-mono text-zinc-400">{cert.issuer}</p>
              </div>

              <ExternalLink className="mb-1 h-4 w-4 shrink-0 text-sky-400" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
