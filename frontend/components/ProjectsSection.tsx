"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Plateforme de gestion immobilière",
    description:
      "Une application permettant aux propriétaires et chercheurs immobiliers de se connecter facilement.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Clone de Twitter",
    description:
      "Un clone de Twitter permettant aux utilisateurs de partager des posts, interagir et gérer leur profil.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Site vitrine Église Locale Rhema",
    description:
      "Une plateforme permettant de présenter l'Église, de partager sa vision, et offrant aux membres la possibilité de participer virtuellement aux activités de l'Église.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["WordPress", "PHP", "MySQL"],
  },
  {
    title: "Mon Portfolio",
    description:
      "Un portfolio présentant mes réalisations, compétences et projets en développement web.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    title: "Application E-commerce",
    description:
      "Une application e-commerce complète avec panier, paiement et gestion des commandes.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Express.js", "Stripe"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Un tableau de bord interactif pour visualiser et analyser les données en temps réel.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "D3.js", "Node.js"],
  },
  {
    title: "Application de Chat en Temps Réel",
    description:
      "Une application de messagerie instantanée avec notifications push et partage de fichiers.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Socket.io", "React", "Node.js"],
  },
  {
    title: "Système de Gestion de Tâches",
    description:
      "Un outil de productivité pour organiser et suivre les projets d'équipe avec des tableaux Kanban.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    title: "API de Géolocalisation",
    description:
      "Une API RESTful pour la géolocalisation et la cartographie avec intégration de services tiers.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "Google Maps API"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

  const handleShowMore = () => {
    setShowAllProjects(true);
  };

  return (
    <section id="projets" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Mes Projets
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-[#1E1E1E] rounded-lg overflow-hidden group relative shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    className="inline-flex items-center text-red-600 hover:text-red-500 transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Voir le projet
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {!showAllProjects && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowMore}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Voir plus de projets ({projects.length - 6} restants)
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAllProjects && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              Voir moins de projets
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                ↑
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
