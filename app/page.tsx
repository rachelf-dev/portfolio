import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TopBar } from "@/components/TopBar";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <div id="top" tabIndex={-1} className="h-px w-full focus:outline-none">
        <span className="sr-only">Top of page</span>
      </div>
      <TopBar name={profile.name} resumePath={profile.resumePath} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero
          name={profile.name}
          role={profile.role}
          tagline={profile.tagline}
          email={profile.email}
          githubUrl={profile.githubUrl}
          resumePath={profile.resumePath}
        />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
