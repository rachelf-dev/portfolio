import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist.",
};

export default function NotFound() {
  return (
    <>
      <TopBar name={profile.name} resumePath={profile.resumePath} />
      <main id="main" tabIndex={-1} className="outline-none">
        <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
          <h1 className="text-headline-lg-mobile text-text lg:text-headline-lg">Page not found</h1>
          <p className="mt-4 max-w-xl text-pretty text-body-md leading-relaxed text-muted">
            That page does not exist. The projects are on the home page.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-lg bg-accent px-4 font-mono text-label-code font-semibold text-accent-foreground"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
