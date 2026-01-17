"use client";

import { motion } from "motion/react";

const colors = {
  pearl: "#F5F5F0",
  champagne: "#C9A86C",
  burnishedGold: "#A68B4D",
};

interface SplitTextProps {
  text: string;
  type: "chars" | "words";
  delay?: number;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SplitText({
  text,
  type,
  delay = 0,
  staggerDelay = 0.03,
  className = "",
  style,
}: SplitTextProps) {
  const items = type === "chars" ? text.split("") : text.split(" ");

  return (
    <span className={className} style={style}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * staggerDelay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block" }}
        >
          {item}
          {type === "words" && index < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        background: `linear-gradient(
          90deg,
          ${colors.burnishedGold} 0%,
          ${colors.champagne} 25%,
          ${colors.pearl} 50%,
          ${colors.champagne} 75%,
          ${colors.burnishedGold} 100%
        )`,
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        display: "inline-block",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function BlurReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: BlurRevealProps) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      initial={{
        filter: "blur(10px)",
        opacity: 0,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.span>
  );
}
