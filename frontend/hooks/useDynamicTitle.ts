"use client";

import { useEffect } from "react";

interface SectionTitles {
  [key: string]: {
    title: string;
    description: string;
  };
}

const sectionTitles: SectionTitles = {
  "": {
    title: "JN.dev - Jenovic NZENGU MBINGAZO | Développeur Web Fullstack",
    description:
      "Portfolio de Jenovic NZENGU MBINGAZO, développeur web fullstack spécialisé en React, Next.js, Node.js. Découvrez mes projets et compétences.",
  },
  "a-propos": {
    title: "À Propos - JN.dev | Développeur Web Passionné",
    description:
      "Découvrez mon parcours de développeur web fullstack avec plus de 3 ans d'expérience en React, Next.js et technologies modernes.",
  },
  technologies: {
    title: "Technologies - JN.dev | React, Next.js, Node.js",
    description:
      "Explorez les technologies que je maîtrise : React, Next.js, React Native, WordPress, TypeScript, Node.js et bien plus encore.",
  },
  outils: {
    title: "Outils - JN.dev | Stack Technique Complète",
    description:
      "Découvrez les outils que j'utilise au quotidien : Figma, GitHub, Vercel, Cloudinary, Photoshop et autres outils professionnels.",
  },
  projets: {
    title: "Projets - JN.dev | Portfolio de Réalisations",
    description:
      "Consultez mes projets réalisés : applications web, sites vitrines, e-commerce, plateformes immobilières et solutions sur mesure.",
  },
  contact: {
    title: "Contact - JN.dev | Collaborons Ensemble",
    description:
      "Contactez-moi pour discuter de votre projet web. Développeur fullstack disponible pour missions et collaborations.",
  },
};

export function useDynamicTitle(activeSection: string) {
  useEffect(() => {
    const sectionData = sectionTitles[activeSection] || sectionTitles[""];

    // Update title
    document.title = sectionData.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", sectionData.description);

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", sectionData.title);

    // Update Open Graph description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", sectionData.description);
  }, [activeSection]);
}
