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
  title: "AI & ML Engineer Portfolio | ZCOER",
  description:
    "Landing page for an Artificial Intelligence and Machine Learning engineer studying at ZCOER. Explore projects, skills, and ambitions.",
  metadataBase: new URL("https://agentic-8b6d33fd.vercel.app"),
  openGraph: {
    title: "AI & ML Engineer Portfolio | ZCOER",
    description:
      "Discover projects, learning roadmap, and collaborations from an aspiring AI innovator at ZCOER.",
    url: "https://agentic-8b6d33fd.vercel.app",
    siteName: "AI & ML Engineer Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & ML Engineer Portfolio | ZCOER",
    description:
      "Aesthetic resume landing page showcasing projects, skills, and collaborations in AI & ML.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
