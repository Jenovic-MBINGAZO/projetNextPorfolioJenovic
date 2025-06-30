"use client";

import { motion } from "framer-motion";
import { Code, Terminal, Laptop, Coffee, Lightbulb } from "lucide-react";

export default function DeveloperIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Code Elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-16 left-16 text-green-400/30"
      >
        <Code size={32} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-20 right-20 text-blue-400/30"
      >
        <Terminal size={28} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-24 left-12 text-purple-400/30"
      >
        <Laptop size={36} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-16 right-16 text-yellow-400/30"
      >
        <Coffee size={24} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-32 left-1/2 transform -translate-x-1/2 text-orange-400/30"
      >
        <Lightbulb size={30} />
      </motion.div>

      {/* Animated Code Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2 opacity-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-mono text-sm text-green-400"
          >
            {"const developer = {"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="font-mono text-sm text-blue-400 ml-4"
          >
            {'  name: "Jenovic",'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="font-mono text-sm text-purple-400 ml-4"
          >
            {'  skills: ["React", "Next.js", "Node.js"],'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 2, delay: 2 }}
            className="font-mono text-sm text-yellow-400 ml-4"
          >
            {'  passion: "Creating amazing apps"'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 2, delay: 2.5 }}
            className="font-mono text-sm text-green-400"
          >
            {"};"}
          </motion.div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400/20 rounded-full"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/20 rounded-full"
      />

      <motion.div
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/6 w-1 h-1 bg-green-400/30 rounded-full"
      />
    </div>
  );
}
