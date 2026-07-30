"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data";
import { Project } from "../types";
import {
  Github,
  ExternalLink,
  X,
  ArrowUpRight,
  Cpu,
  Layers,
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const categories = [
    "All",
    "AI / ML",
    "Systems & Tooling",
    "Web App",
    "Open Source",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  // Directly store active project and flip modal flag
  const handleProjectClick = (project: Project) => {
    console.log("[Projects] Card clicked:", project);

    setModalOpen(false);

    setTimeout(() => {
      setActiveProject(project);
      setModalOpen(true);
    }, 10);
  };

  const handleCloseModal = () => {
    console.log("[Projects] Closing modal. Raising exit sequence flag.");
    setModalOpen(false);
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    try {
      if (modalOpen && activeProject) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    } catch (err) {
      console.error("[Projects] Error setting body scroll lock:", err);
    }
    return () => {
      try {
        document.body.style.overflow = "";
      } catch (err) {
        console.error(
          "[Projects] Error resetting body scroll lock in cleanup:",
          err,
        );
      }
    };
  }, [modalOpen, activeProject]);

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("[Projects] ESC pressed. Closing modal.");
        handleCloseModal();
      }
    };
    try {
      window.addEventListener("keydown", handleKeyDown);
    } catch (err) {
      console.error("[Projects] Error adding keydown event listener:", err);
    }
    return () => {
      try {
        window.removeEventListener("keydown", handleKeyDown);
      } catch (err) {
        console.error("[Projects] Error removing keydown event listener:", err);
      }
    };
  }, []);

  // Debugging activeProject changes
  useEffect(() => {
    console.log(
      "[Projects] State representation updated: activeProject =",
      activeProject,
      ", modalOpen =",
      modalOpen,
    );
  }, [activeProject, modalOpen]);

  return (
    <section
      id="projects"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        badge="04 / Creations"
        title="Featured Projects"
        subtitle="Featured projects demonstrating my experience in software development, problem-solving, and modern technology solutions."
      />

      {/* Categories filter tabs */}
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
                  layoutId="activeProjTab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleProjectClick(p)}
              className="group relative rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-[#38bdf8]/30 cursor-pointer overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-[320px] transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.05)]"
            >
              {/* Dynamic Gradient backdrop element visible on hover */}
              <div
                className={`absolute top-0 right-0 w-[240px] h-[240px] rounded-full bg-gradient-to-br ${p.gradient || "from-sky-500 to-indigo-500"} opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-500`}
              />

              <div className="relative z-10 space-y-4">
                {/* Header elements */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px] uppercase">
                    {p.category}
                  </span>

                  <div className="flex items-center gap-2 text-zinc-500 group-hover:text-[#38bdf8] transition-colors">
                    <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#38bdf8] transition-colors">
                  {p.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-md line-clamp-3">
                  {p.description}
                </p>
              </div>

              {/* Tag Pill lists */}
              <div className="relative z-10 flex flex-wrap gap-1.5 mt-6 border-t border-white/5 pt-4">
                {p.tags?.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-500 font-mono"
                  >
                    {tag}
                  </span>
                )) || null}
                {p.tags?.length > 4 && (
                  <span className="text-[10px] text-zinc-600 font-mono self-center">
                    +{p.tags.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Details Expansion Modal Dialog (Overlay UI) */}
      <AnimatePresence
        onExitComplete={() => {
          if (!modalOpen) {
            console.log(
              "[Projects] Exit transition finished. Clearing activeProject cache.",
            );
            setActiveProject(null);
          }
        }}
      >
        {modalOpen && activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto transform-gpu"
          >
            {/* Backdrop Layer with clean visual transition */}
            <div
              onClick={handleCloseModal}
              className="fixed inset-0 z-[9998] bg-[#020202]/90 backdrop-blur-md cursor-pointer transform-gpu"
              aria-hidden="true"
            />

            {/* Modal Body Capsule - Promoting rendering to active compositor layer using transform-gpu prevents iframe repaint drops */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-zinc-950 border border-white/10 shadow-[0_0_50px_rgba(56,189,248,0.15)] p-5 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 z-[9999] transform-gpu will-change-transform"
            >
              {/* Giant background ambient glow orb */}
              <div
                className={`absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br ${activeProject.gradient || "from-sky-500 to-indigo-500"} opacity-[0.08] blur-3xl pointer-events-none`}
              />

              {/* Close Button top element */}
              <div className="flex justify-between items-center relative z-10">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px] uppercase">
                  {activeProject.category || "Project"}
                </span>

                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors hover:bg-white/10 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Project Image or Professional Fallback Placeholder */}
              <div className="relative w-full h-[180px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/5 bg-[#08080a] select-none flex items-center justify-center z-10">
                {activeProject.image ? (
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title || "Project Specs"}
                    fill
                    sizes="(max-w-768px) 100vw, 600px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
                    {/* Abstract Grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 animate-pulse duration-[8s]" />

                    {/* Glowing circular backdrop */}
                    <div
                      className={`absolute w-[180px] h-[180px] rounded-full bg-gradient-to-br ${activeProject.gradient || "from-sky-500 to-indigo-500"} opacity-[0.12] blur-2xl`}
                    />

                    <Cpu className="w-12 h-12 text-[#38bdf8] mb-3 relative z-10 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] animate-pulse" />
                    <h4 className="font-mono text-zinc-500 text-[11px] uppercase tracking-widest relative z-10">
                      System Module Blueprint
                    </h4>
                    <span className="font-sans font-bold text-white/25 text-3xl sm:text-5xl absolute -bottom-4 tracking-tighter uppercase whitespace-nowrap animate-pulse duration-[4s]">
                      {activeProject.title || "Project Specifications"}
                    </span>
                  </div>
                )}
              </div>

              {/* Info text fields */}
              <div className="space-y-3 relative z-10">
                <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl leading-tight">
                  {activeProject.title || ""}
                </h3>

                <p className="text-zinc-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                  {activeProject.longDescription ||
                    activeProject.description ||
                    ""}
                </p>
              </div>

              {/* Technologies details tags inside modal */}
              {activeProject.tags && activeProject.tags.length > 0 && (
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-[#38bdf8]" /> Compiler
                    Stack / Libs
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Redirect Action Footer Links */}
              {(activeProject.github || activeProject.link) && (
                <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-white/5">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-white/20"
                    >
                      <Github className="w-4 h-4 text-zinc-400" /> Code
                      Repository
                    </a>
                  )}
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-950" /> Live
                      Execution
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
