"use client";

import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { EDUCATION_DATA } from "../data";
import { GraduationCap, BookOpen, Medal, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        badge="02 / Academic Journey"
        title="Education & Academic"
        subtitle="Academic background, key coursework, and educational experiences that have built my foundation in computer science and software development."
      />

      <div className="mt-8 max-w-4xl">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-glass border border-glass-border backdrop-blur-glass relative overflow-hidden"
          >
            {/* Ambient decorative grid gradient background */}
            <div className="absolute inset-0 bg-chart-gradient opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Institution and Degree */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-xl sm:text-2xl tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="font-sans font-medium text-zinc-300 text-sm mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  {edu.description}
                </p>

                {/* Selected Coursework tags list */}
                <div className="pt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-500" /> Relevant
                    Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-24 overflow-hidden">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 hover:border-sky-500/40 hover:bg-white/10 text-zinc-400 hover:text-white transition-all text-xs font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info: GPA & Duration */}
              <div className="flex flex-col gap-3 min-w-[200px] md:text-right border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                <div className="flex items-center gap-2 md:justify-end text-zinc-400 font-mono text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.duration}</span>
                </div>
                <div className="text-xs text-zinc-500 font-mono mt-1">
                  📍 {edu.location}
                </div>
              </div>
            </div>

            {/* Honors or academic achievements nested inside education card */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Medal className="w-3.5 h-3.5 text-zinc-500" /> Academic Honors
              </h4>
              <ul className="space-y-2">
                {edu.achievements.map((ach, ai) => (
                  <li
                    key={ai}
                    className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
