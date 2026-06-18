import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://javejudiel.vercel.app"),
  title: "Jave Judiel | Full Stack Developer",
  description:
    "Portfolio of Jave Judiel, a full stack developer building efficient, scalable, and user-friendly web applications.",
  openGraph: {
    title: "Jave Judiel | Full Stack Developer",
    description:
      "Full stack developer portfolio featuring projects, experience, skills, and contact details.",
    url: "https://javejudiel.vercel.app",
    siteName: "Jave Judiel Portfolio",
    images: [
      {
        url: "/assets/img/portrait.png",
        width: 900,
        height: 900,
        alt: "Jave Judiel"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/assets/img/logo-white.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
