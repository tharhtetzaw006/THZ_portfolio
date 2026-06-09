"use client";

import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import {
  GraduationCap,
  MapPin,
  Code2,
  Sparkles,
  Smartphone,
  Calendar,
  BookOpen,
  Heart,
  Award,
} from "lucide-react";

export default function About() {
  const quickFacts = [
    {
      icon: GraduationCap,
      label: "University",
      value: "Sharda University",
    },
    {
      icon: BookOpen,
      label: "Degree",
      value: "B.Tech CSE",
    },
    {
      icon: Calendar,
      label: "Current Year",
      value: "3rd Year",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, India",
    },
    {
      icon: Heart,
      label: "Interests",
      value: "Web, AI, Mobile Development",
    },
  ];

  const skillsFocus = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building modern and responsive web applications using React, Next.js, and Node.js with a focus on performance, usability, and clean code.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Next.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      icon: Sparkles,
      title: "Artificial Intelligence",
      description:
        "Developing AI-powered applications, intelligent assistants, and automation solutions using modern APIs and machine learning technologies.",
      technologies: ["Python", "Gemini API", "OpenAI API"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications with modern frameworks while delivering smooth user experiences across Android and iOS devices.",
      technologies: ["React Native", "Flutter"],
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Started Level 3 & Level 4 Diploma",
      desc: "Began studying software development, programming, databases, and modern computing concepts at GUSTO College.",
    },

    {
      year: "2024",
      title: "Joined Sharda University",
      desc: "Started B.Tech in Computer Science & Engineering and expanded knowledge in software engineering and full-stack development.",
    },

    {
      year: "2025",
      title: "Web Development Coordinator",
      desc: "Selected as Coordinator of the Web Development Division at Open Source NCR Community.",
    },

    {
      year: "2026",
      title: "Technical Lead - Dart 2.0 Workshop",
      desc: "Led workshop management system development and coordinated technical operations for the event.",
    },

    {
      year: "Future",
      title: "Software Engineer & AI Developer",
      desc: "Focused on building innovative software products, AI-powered solutions, and scalable web applications.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 right-[10%] w-[350px] aspect-square rounded-full bg-sky-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] aspect-square rounded-full bg-blue-600/5 blur-[130px] pointer-events-none -z-10" />

      <SectionHeader
        badge="01 / About Me"
        title="My Story & Academic Background"
        subtitle="Passionate about full-stack development, artificial intelligence, and building technology that makes a real impact."
      />

      {/* Main Grid: About & Quick Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        {/* Left Side: Personal Introduction Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-950/40 border border-white/[0.06] backdrop-blur-xl flex flex-col justify-between hover:border-sky-500/10 transition-colors duration-500"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-medium text-white text-lg">
                  Thar Htet Zaw
                </h3>
                <p className="text-zinc-500 text-xs font-mono">
                  B.Tech CSE Student
                </p>
              </div>
            </div>

            <div className="space-y-4 font-sans text-stone-300 text-[14px] sm:text-[15px] leading-relaxed font-light">
              <p>
                Hello! I'm{" "}
                <span className="text-white font-medium">Thar Htet Zaw</span>, a
                Computer Science and Engineering student at
                <span className="text-white font-medium">
                  {" "}
                  Sharda University
                </span>
                .
              </p>

              <p>
                I am passionate about software development, artificial
                intelligence, and modern web technologies. Through academic
                projects, personal projects, and community involvement, I have
                developed practical experience in Java, Python, JavaScript,
                Next.js, Node.js, and Tailwind CSS.
              </p>

              <p>
                Currently, I serve as the
                <span className="text-white font-medium">
                  {" "}
                  Coordinator of the Web Development Division
                </span>{" "}
                at Open Source NCR Community (ONC) and previously worked as the
                <span className="text-white font-medium">
                  {" "}
                  Technical Lead for the Dart 2.0 Workshop
                </span>{" "}
                at Sharda University. These experiences have strengthened my
                leadership, teamwork, communication, and project management
                skills.
              </p>

              <p>
                My goal is to become a
                <span className="text-white font-medium">
                  {" "}
                  Software Engineer and AI Developer
                </span>
                , building innovative software solutions that solve real-world
                problems and create meaningful impact through technology.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Quick Information Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-950/45 border border-white/[0.06] backdrop-blur-xl flex flex-col justify-center hover:border-sky-500/10 transition-colors duration-500"
        >
          <h3 className="font-display font-medium text-white text-[15px] tracking-wide uppercase font-mono text-zinc-400 mb-6">
            Quick Information
          </h3>

          <div className="space-y-5">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-400 group-hover/item:text-white group-hover/item:bg-sky-500/5 group-hover/item:border-sky-500/10 transition-all duration-300 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-none block">
                      {fact.label}
                    </span>
                    <span className="text-stone-200 text-sm sm:text-[15px] font-medium leading-relaxed block mt-1">
                      {fact.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Skills Focus: exactly 3 cards */}
      <div className="mt-16">
        <h3 className="font-display font-medium text-white text-[15px] tracking-wide uppercase font-mono text-zinc-400 text-center mb-8">
          Skills Focus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsFocus.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-950/40 border border-white/[0.05] backdrop-blur-lg hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-sky-500/5 group-hover:border-sky-500/10 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-display font-medium text-white text-base mt-4">
                    {skill.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-[13px] font-sans font-light mt-2.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-stone-900/60 border border-white/[0.04] text-[10px] font-mono text-zinc-400 hover:text-sky-300 hover:border-sky-500/15 duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Personal Journey Timeline */}
      <div className="mt-20">
        <h3 className="font-display font-medium text-white text-[15px] tracking-wide uppercase font-mono text-zinc-400 text-center mb-10">
          Personal Journey Timeline
        </h3>

        <div className="relative">
          {/* Timeline Center line (Desktop) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-white/[0.06] hidden md:block"
          />

          <div className="space-y-10 md:space-y-0">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center w-full"
                >
                  {/* Left / Right Column */}
                  <div
                    className={`w-full md:w-1/2 flex ${
                      isEven
                        ? "md:justify-end md:pr-12"
                        : "md:justify-start md:pl-12 md:order-2"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.2 }}
                      className="p-6 rounded-2xl bg-zinc-950/40 border border-white/[0.05] backdrop-blur-sm hover:border-sky-500/20 transition-all duration-300 max-w-sm w-full relative"
                    >
                      {/* Timeline Dot */}
                      <motion.span
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`hidden md:block absolute top-[26px] w-2.5 h-2.5 rounded-full bg-sky-400 ${
                          isEven ? "-right-[53px]" : "-left-[53px]"
                        } shadow-[0_0_20px_rgba(56,189,248,0.8)]`}
                      />

                      <span className="font-mono text-xs text-white font-bold block mb-1">
                        {item.year}
                      </span>

                      <h4 className="font-display text-sm sm:text-base font-semibold text-white leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-zinc-400 text-[12px] sm:text-xs font-sans font-light leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
