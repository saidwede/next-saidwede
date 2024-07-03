import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@/context/ui-context";
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
      </body>
    </html>
  );
}
