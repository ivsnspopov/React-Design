"use client";

import { useState } from "react";

const pressLogos = [
  { name: "CONDÉ NAST TRAVELLER", icon: null },
  { name: "FORBES", icon: null },
  { name: "ARCHITECTURAL DIGEST", icon: null },
  { name: "LUXURY TRAVEL", icon: null },
  { name: "TATLER", icon: null },
  { name: "MONOCLE", icon: null },
];

export function PressLogosSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless loop
  const allLogos = [...pressLogos, ...pressLogos];

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="text-xs tracking-[0.3em] font-light"
          style={{
            color: "#8A8A8A",
            fontFamily: "Jost, sans-serif",
            opacity: 0.5,
          }}
        >
          AS FEATURED IN
        </p>
      </div>

      {/* Marquee container with gradient masks */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scrolling track */}
        <div
          className="flex items-center gap-12"
          style={{
            animation: "marquee 35s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {allLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-12">
              <span
                className="whitespace-nowrap transition-opacity duration-300 cursor-default select-none"
                style={{
                  color: "#8A8A8A",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  letterSpacing: "0.15em",
                  opacity: 0.6,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
              >
                {logo.name}
              </span>
              {/* Subtle dot separator */}
              <span
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#8A8A8A", opacity: 0.3 }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
