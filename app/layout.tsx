import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jn-dev.vercel.app"),
  title: "JN.dev - Jenovic NZENGU MBINGAZO | Développeur Web Fullstack",
  description:
    "Portfolio de Jenovic NZENGU MBINGAZO, développeur web fullstack spécialisé en React, Next.js, Node.js. Découvrez mes projets et compétences.",
  keywords: [
    "Jenovic NZENGU MBINGAZO",
    "JN.dev",
    "développeur web",
    "fullstack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "développeur frontend",
    "développeur backend",
  ],
  authors: [{ name: "Jenovic NZENGU MBINGAZO" }],
  creator: "Jenovic NZENGU MBINGAZO",
  publisher: "JN.dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jn-dev.vercel.app",
    siteName: "JN.dev",
    title: "JN.dev - Jenovic NZENGU MBINGAZO | Développeur Web Fullstack",
    description:
      "Portfolio de Jenovic NZENGU MBINGAZO, développeur web fullstack spécialisé en React, Next.js, Node.js.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JN.dev - Portfolio de Jenovic NZENGU MBINGAZO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JN.dev - Jenovic NZENGU MBINGAZO | Développeur Web Fullstack",
    description:
      "Portfolio de Jenovic NZENGU MBINGAZO, développeur web fullstack spécialisé en React, Next.js, Node.js.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#EF4444" />
        <meta name="msapplication-TileColor" content="#EF4444" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
