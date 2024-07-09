import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/ui-context";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saïd BIO WEDE",
  description: "Meet Saïd BIO WEDE, senior full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
        {children}
        </UIProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID || ''}/>
    </html>
  );
}
