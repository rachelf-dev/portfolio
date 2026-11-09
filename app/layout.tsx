import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { getSiteUrl, profile } from "@/data/profile";
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

const siteUrl = getSiteUrl();
const title = `${profile.name} | ${profile.role}`;
const description = profile.tagline;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  url: siteUrl.origin,
  sameAs: [profile.githubUrl],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: profile.name, url: profile.githubUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title,
    description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name}, ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-body-md text-text antialiased">
        <a
          href="#main"
          className="skip-link inline-flex h-11 items-center rounded-lg bg-accent px-4 font-mono text-label-code font-semibold text-accent-foreground"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
