"use client";

import { motion } from "framer-motion";
import {
  Box,
  Paintbrush,
  Layout,
  Code,
  FileCode,
  FileJson,
  Globe,
  CodepenIcon as Css3,
  Server,
  FileType2,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "React.js", icon: <Box className="w-8 h-8 text-red-600" /> },
  { name: "Next.js", icon: <Code className="w-8 h-8 text-red-600" /> },
  { name: "React Native", icon: <Box className="w-8 h-8 text-red-600" /> },
  {
    name: "Tailwind CSS",
    icon: <Paintbrush className="w-8 h-8 text-red-600" />,
  },
  { name: "Bootstrap", icon: <Layout className="w-8 h-8 text-red-600" /> },
  { name: "WordPress", icon: <Globe className="w-8 h-8 text-red-600" /> },
  { name: "AdonisJS", icon: <Code className="w-8 h-8 text-red-600" /> },
  { name: "PHP", icon: <FileCode className="w-8 h-8 text-red-600" /> },
  { name: "JavaScript", icon: <FileJson className="w-8 h-8 text-red-600" /> },
  { name: "HTML5", icon: <Globe className="w-8 h-8 text-red-600" /> },
  { name: "CSS3", icon: <Css3 className="w-8 h-8 text-red-600" /> },
  { name: "Express.js", icon: <Server className="w-8 h-8 text-red-600" /> },
  { name: "TypeScript", icon: <FileType2 className="w-8 h-8 text-red-600" /> },
  { name: "Node.js", icon: <Terminal className="w-8 h-8 text-red-600" /> },
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

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-red-600/20 transition-shadow border border-gray-200 dark:border-gray-800"
            >
              {tech.icon}
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
