import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full-Stack Developer",
  description: "Portfolio profesional de un desarrollador Full-Stack especializado en TypeScript, React, Next.js y tecnologías modernas.",
  keywords: ["portfolio", "developer", "fullstack", "typescript", "react", "nextjs"],
  authors: [{ name: "Cutberto" }],
  creator: "Cutberto",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio.cutberto.dev",
    title: "Portfolio - Full-Stack Developer",
    description: "Portfolio profesional de un desarrollador Full-Stack especializado en TypeScript, React, Next.js y tecnologías modernas.",
    siteName: "Portfolio Cutberto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full-Stack Developer",
    description: "Portfolio profesional de un desarrollador Full-Stack especializado en TypeScript, React, Next.js y tecnologías modernas.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
