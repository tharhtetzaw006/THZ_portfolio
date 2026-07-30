"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "./SectionHeader";
import { SKILL_GROUPS } from "../data";
import {
  Code,
  Server,
  Smartphone,
  Wrench,
  Cpu,
  Database,
  Sparkles,
} from "lucide-react";

// Map string icon names to Lucide icons
const iconMap = {
  Code: Code,
  Server: Server,
  Smartphone: Smartphone,
  Wrench: Wrench,
  Cpu: Cpu,
  Database: Database,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === "All"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        badge="03 / Toolbox"
        title="Technical Skills & Competencies"
        subtitle="A collection of programming languages, frameworks, and technologies that I use to build modern web applications and software solutions."
      />

      {/* Filter Category Tabs Button Group */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide cursor-pointer transition-colors ${
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Skill Categories */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredGroups.map((group) => {
            const IconComponent = iconMap[group.iconName] || Code;
            return (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-3xl bg-glass border border-glass-border backdrop-blur-glass flex flex-col h-full hover:border-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-all group-hover:bg-sky-500/5">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-zinc-300 hover:text-white text-xs font-sans font-light flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
