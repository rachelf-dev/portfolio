import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachel Feuchtwanger | Full-Stack Software Developer",
  description:
    "Full-Stack Software Developer passionate about building intelligent, scalable applications with modern technologies, clean architecture, and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-body-md text-text antialiased">
        {children}
      </body>
    </html>
  );
}
