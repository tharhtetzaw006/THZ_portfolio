"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse lagging springs for gorgeous organic cursor follow glow
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#0a0a0a]">
      {/* Floating Organic Background Glow Orbs (Subtle deep sky/teal blur spots) */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[8%] left-[12%] w-[450px] h-[450px] rounded-full bg-sky-900/10 blur-[130px]"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal-950/8 blur-[150px]"
      />

      <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-800/5 blur-[120px] rounded-full" />

      {/* Recruiter-friendly grid overlay matching Linear / Vercel style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Smooth Cursor tracking spotlight glow (Glassmorphic reactive highlight) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-sky-500/5 via-teal-500/5 to-transparent blur-[110px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
