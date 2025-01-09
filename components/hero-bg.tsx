"use client";

import React from "react";
import { motion } from "framer-motion";

const MatrixRain = () => {
  const chars = "01";
  const columns = 50;
  const drops = Array.from({ length: columns }, () => ({
    x: Math.random() * 100,
    y: Math.random() * -100,
    speed: Math.random() * 1 + 0.5,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 100 100"
    >
      {drops.map((drop, i) => (
        <motion.text
          key={i}
          x={drop.x}
          y={drop.y}
          fill="rgba(0, 255, 200, 0.3)"
          fontSize="1"
          fontFamily="monospace"
          initial={{ y: drop.y }}
          animate={{ y: [drop.y, 100] }}
          transition={{
            duration: 20 / drop.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {chars[Math.floor(Math.random() * chars.length)]}
        </motion.text>
      ))}
    </svg>
  );
};

const MechanicalOverlay = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="mechanical-grid"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="20"
          cy="20"
          r="1"
          fill="none"
          stroke="rgba(0, 255, 200, 0.3)"
          strokeWidth="0.5"
        />
        <path
          d="M 0 20 H 40 M 20 0 V 40"
          stroke="rgba(0, 255, 200, 0.2)"
          strokeWidth="0.5"
        />
        <rect
          x="0"
          y="0"
          width="40"
          height="40"
          fill="none"
          stroke="rgba(0, 255, 200, 0.1)"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mechanical-grid)" />
  </svg>
);

const CircuitLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
  >
    {Array.from({ length: 8 }).map((_, i) => (
      <g key={i}>
        <motion.path
          d={`M ${-50 + i * 100} ${50 + i * 30} L ${50 + i * 50} ${
            100 + i * 20
          } L ${150 + i * 30} ${70 + i * 40}`}
          stroke="rgba(0, 255, 200, 0.2)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <motion.circle
          cx={-50 + i * 100}
          cy={50 + i * 30}
          r="2"
          fill="rgba(0, 255, 200, 0.3)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </g>
    ))}
  </svg>
);

const TechPortfolioHero = () => {
  return (
    <div className="relative -z-40 min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Abstract Background Elements */}
      <MatrixRain />
      <MechanicalOverlay />
      <CircuitLines />
    </div>
  );
};

export default TechPortfolioHero;
