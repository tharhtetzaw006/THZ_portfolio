"use client";

import { ArrowUp, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#030303] py-12 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo and Credits */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-500/40">
            <Image
              src="/me.jpg"
              alt="Thar Htet Zaw"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-0.5">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
