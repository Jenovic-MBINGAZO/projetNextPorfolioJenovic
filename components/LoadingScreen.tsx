"use client";

import { motion } from "framer-motion";

const codeLines = [
  '<div className="Salut-le-monde">',
  '  console.log("Salut le monde!");',
  '  const developer = "Jenovic";',
  "  return <Portfolio />;",
  "</div>",
];

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated code lines */}
        <div className="relative z-10">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="font-mono text-sm sm:text-base text-white"
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Loading bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-0.5 bg-red-600 mt-4"
        />

        {/* Percentage text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 right-0 text-red-600 font-mono mt-2"
        >
          Chargement...
        </motion.div>

        {/* Animated circles */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 rounded-full border-2 border-red-600 border-t-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
