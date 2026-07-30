"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  id?: string;
  badge: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ id, badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 text-left">
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center gap-2 mb-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple shadow-glow-purple animate-pulse" />
        <span className="font-mono text-xs tracking-[0.25em] text-accent-purple uppercase font-semibold">
          {badge}
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl font-sans font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
