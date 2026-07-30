"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PERSONAL_INFO } from "../data";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setSubmitting(true);
    setStatus("idle");

    // Simulate clean server routing submission delay
    setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
      // Clear values upon successful triggers
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeader
        badge="07 / Connection"
        title="Get In Touch"
        subtitle="Open to collaborations, internships, and exciting opportunities in software development, artificial intelligence, and technology."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
        {/* Left column: Physical attributes and quick links */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-xl">
              Let&apos;s build together.
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-sm">
              Based in Yangon, Myanmar. Passionate about software development,
              artificial intelligence, and creating solutions that make a
              meaningful impact.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3.5 text-zinc-400">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">
                  Email Address
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-medium hover:text-white transition-colors"
                >
                  tharhtetzaw37@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-zinc-400">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">
                  Base of Actions
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Yangon, Myanmar
                </span>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="pt-6 border-t border-white/5">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block mb-3">
              Online footprint
            </span>
            <div className="flex gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="GitHub Profiles"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn Profiles"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right column: Interactive messaging form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  className="font-mono text-[10px] uppercase tracking-wider text-zinc-400"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 focus:border-sky-500/50 focus:bg-black/40 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-all leading-relaxed"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="font-mono text-[10px] uppercase tracking-wider text-zinc-400"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 focus:border-sky-500/50 focus:bg-black/40 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-all leading-relaxed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="font-mono text-[10px] uppercase tracking-wider text-zinc-400"
                htmlFor="message"
              >
                Message Content
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Let's build standard models or custom pipelines..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 focus:border-sky-500/50 focus:bg-black/40 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Validation toast signals */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm flex items-center gap-2.5"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message compiled successfully! I will respond to your server
                    address soon.
                  </span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm flex items-center gap-2.5"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>
                    Please fill out all registration inputs before sending.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={submitting}
              className="group w-full py-4 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 border border-white active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? (
                <>Compiling submission...</>
              ) : (
                <>
                  Connect Pipeline{" "}
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
