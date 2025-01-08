import React from "react";
import { motion } from "framer-motion";

const TechStackSlider = () => {
  const row1 = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Node.js",
  ];

  const row2 = [
    "Python",
    "Go",
    "Rust",
    "Docker",
    "Kubernetes",
    "AWS",
    "Python",
    "Go",
    "Rust",
    "Docker",
    "Kubernetes",
    "AWS",
  ];

  return (
    <div className="relative flex flex-col gap-4 overflow-hidden py-4 bg-gray-900">
      {/* First Row */}
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {row1.map((tech, index) => (
          <div
            key={index}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-white"
          >
            <span className="text-lg font-semibold">{tech}</span>
          </div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        animate={{
          x: [-1920, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {row2.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-white"
          >
            <span className="text-lg font-semibold">{tech}</span>
          </div>
        ))}
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none" />
    </div>
  );
};

export default TechStackSlider;
