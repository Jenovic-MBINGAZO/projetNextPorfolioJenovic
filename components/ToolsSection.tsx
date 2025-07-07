"use client";

import { motion } from "framer-motion";
import {
  Palette,
  MessageSquare,
  ImageIcon,
  FigmaIcon,
  Github,
  Cloud,
  CloudCog,
} from "lucide-react";

const tools = [
  { name: "Canva", icon: <Palette className="w-8 h-8 text-red-600" /> },
  { name: "Slack", icon: <MessageSquare className="w-8 h-8 text-red-600" /> },
  { name: "Photoshop", icon: <ImageIcon className="w-8 h-8 text-red-600" /> },
  { name: "Figma", icon: <FigmaIcon className="w-8 h-8 text-red-600" /> },
  { name: "Git & GitHub", icon: <Github className="w-8 h-8 text-red-600" /> },
  { name: "Render", icon: <Cloud className="w-8 h-8 text-red-600" /> },
  { name: "Cloudinary", icon: <CloudCog className="w-8 h-8 text-red-600" /> },
  { name: "Vercel", icon: <Cloud className="w-8 h-8 text-red-600" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ToolsSection() {
  return (
    <section id="outils" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Outils
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 dark:bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-red-600/20 transition-shadow border border-gray-200 dark:border-gray-800"
            >
              {tool.icon}
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
