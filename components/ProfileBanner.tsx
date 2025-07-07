"use client";

import { motion } from "framer-motion";
import DeveloperIllustration from "./DeveloperIllustration";
import Image from "next/image";

interface ProfileBannerProps {
  onStartClick: () => void;
}

export default function ProfileBanner({ onStartClick }: ProfileBannerProps) {
  return (
    <div className="relative pt-16">
      {/* Cover Image Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800"
      >
        {/* Developer Workspace Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        >
          {/* Overlay gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        {/* Developer Illustration Overlay */}
        <DeveloperIllustration />

        {/* Matrix-style falling code effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 500, opacity: [0, 1, 0] }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "linear",
              }}
              className={`absolute font-mono text-green-400 text-xs`}
              style={{ left: `${10 + i * 15}%` }}
            >
              {`{code: ${i}}`}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profile Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="relative z-10 w-40 h-40 mx-auto rounded-full border-4 border-red-600 overflow-hidden shadow-2xl"
          >
            <Image
              src="/Profile.png"
              alt="Profile picture of Jenovic NZENGU MBINGAZO"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />

            {/* Animated border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-400 border-r-blue-400"
            />
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-6"
          >
            {/* Enhanced Title */}
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-2 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                className="text-red-600 dark:text-red-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Jenovic
              </motion.span>{" "}
              <motion.span
                className="text-[#101828] dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                NZENGU
              </motion.span>
              <br />
              <motion.span
                className="text-red-600 dark:text-red-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MBINGAZO
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="relative"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
                Développeur Web Fullstack
              </p>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-32 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Passionné par l&apos;innovation et les technologies modernes, je
              conçois des expériences utilisateur intuitives et élégantes tout
              en recherchant sans cesse de nouvelles solutions pour optimiser le
              développement.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartClick}
              className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                Commençons !
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Quick Info Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { title: "Expérience", value: "+2 ans", icon: "" },
              { title: "Projets Réalisés", value: "+15 projets", icon: "" },
              { title: "Technologies", value: "Full Stack", icon: "" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm  p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-red-600 dark:text-red-400 font-bold">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
