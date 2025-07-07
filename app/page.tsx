"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";
import TechnologiesSection from "@/components/TechnologiesSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProfileBanner from "@/components/ProfileBanner";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import LoadingScreen from "@/components/LoadingScreen";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const activeSection = useScrollSpy();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to the first section after loading
      scrollToSection("a-propos");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80; // Adjust for navbar height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Add focus ring animation to the section
      element.classList.add("ring-animation");
      setTimeout(() => {
        element.classList.remove("ring-animation");
      }, 1000);

      setIsMenuOpen(false);
    }
  };

  const handleStartClick = () => {
    scrollToSection("technologies");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigationItems = [
    "A propos",
    "Technologies",
    "Outils",
    "Projets",
    "Contact",
  ];

  return (
    <ThemeProvider defaultTheme="dark">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      <ScrollIndicator />

      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold text-red-600 cursor-pointer"
                onClick={scrollToTop}
              >
                JN. <span className="text-gray-900 dark:text-white">dev</span>
              </motion.div>

              <div className="flex items-center gap-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navigationItems.map((item) => {
                    const sectionId = item.toLowerCase().replace(" ", "-");
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.a
                        key={item}
                        onClick={() => scrollToSection(sectionId)}
                        whileHover={{ scale: 1.1 }}
                        className={`cursor-pointer transition-colors relative ${
                          isActive ? "text-red-600" : "hover:text-red-600"
                        }`}
                      >
                        {item}
                        {isActive && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                <ThemeToggle />

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
              >
                <div className="px-4 py-2 space-y-1">
                  {navigationItems.map((item) => {
                    const sectionId = item.toLowerCase().replace(" ", "-");
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.a
                        key={item}
                        onClick={() => scrollToSection(sectionId)}
                        className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors ${
                          isActive
                            ? "text-red-600 bg-red-50 dark:bg-red-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <ProfileBanner onStartClick={handleStartClick} />

        <section id="a-propos" className="mt-20 py-20 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              À Propos
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Bienvenue sur mon portfolio ! Je suis un développeur web fullstack
              passionné par la création d&apos;expériences web innovantes et
              performantes. Avec plus de 2 ans d&apos;expérience, j&apos;ai
              travaillé sur divers projets allant des applications web complexes
              aux sites vitrines élégants.
            </p>
          </div>
        </section>

        <TechnologiesSection />
        <ToolsSection />
        <ProjectsSection />

        {/* Contact Section */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-black py-8 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Jenovic-MBINGAZO"
              className="hover:text-red-600 transition-colors"
              target="_blank"
            >
              <Github />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/jenovic-mbingazo-%F0%9F%8E%AF-0454952b0/"
              className="hover:text-red-600 transition-colors"
              target="_blank"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="mailto:jenovicnzengu.jn@gmal.com"
              className="hover:text-red-600 transition-colors"
            >
              <Mail />
            </motion.a>
          </div>
          <p>© Jenovic NZENGU-MBINGAZO. Tous droits réservés.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
