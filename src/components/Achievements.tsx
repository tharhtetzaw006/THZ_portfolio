"use client";

import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { ACHIEVEMENTS } from "../data";
import { Trophy, Calendar, Sparkles } from "lucide-react";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        badge="06 / Merits"
        title="Achievements & Honors"
        subtitle="Achievements, leadership experiences, and milestones that reflect my growth as a student and aspiring software engineer."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {ACHIEVEMENTS.map((ach, index) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-glass flex flex-col justify-between hover:border-white/10 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Trophy className="w-5 h-5" />
                </div>

                <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {ach.date}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-white transition-colors">
                  {ach.title}
                </h3>
                <span className="font-mono text-[10px] text-zinc-500 block">
                  Event: {ach.event}
                </span>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed">
                {ach.description}
              </p>
            </div>

            {ach.prize && (
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="font-mono text-[11px] font-semibold text-white">
                  {ach.prize}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
