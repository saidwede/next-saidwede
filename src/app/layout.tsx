import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/ui-context";
import { LanguageProvider } from "@/context/language-context";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://saidwede.online";
const SITE_TITLE = "Saïd Bio Wede — AI/ML Engineer & Software Architect";
const SITE_DESCRIPTION =
  "Saïd Bio Wede is an AI/ML Engineer, Senior Software Architect, and Digital Product Founder turning complex ideas into resilient, scalable systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Saïd Bio Wede",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Saïd Bio Wede",
    "Said Bio Wede",
    "AI/ML Engineer",
    "Software Architect",
    "Senior Full-Stack Developer",
    "Agentic AI",
    "RAG",
    "LangChain",
    "LangGraph",
    "Next.js",
    "NestJS",
    "FastAPI",
    "Python",
    "Flutter",
    "TensorFlow",
    "PyTorch",
    "Grafy.me",
    "GOGO Chap",
  ],
  authors: [{ name: "Saïd Bio Wede", url: SITE_URL }],
  creator: "Saïd Bio Wede",
  publisher: "Saïd Bio Wede",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Saïd Bio Wede",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    images: [
      {
        url: "/img/og.jpg",
        width: 1210,
        height: 1613,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@saidwede",
    creator: "@saidwede",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/img/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saïd Bio Wede",
  url: SITE_URL,
  image: `${SITE_URL}/img/og.jpg`,
  jobTitle: "AI/ML Engineer & Software Architect",
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://github.com/saidwede",
    "https://x.com/saidwede",
    "https://www.facebook.com/said.biowede.5",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "EPITECH" },
    { "@type": "CollegeOrUniversity", name: "HECM" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "RAG",
    "Software Architecture",
    "Full-Stack Development",
    "Python",
    "Next.js",
    "NestJS",
    "FastAPI",
    "Flutter",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <UIProvider>{children}</UIProvider>
        </LanguageProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ""} />
    </html>
  );
}
