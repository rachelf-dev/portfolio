import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TopBar } from "@/components/TopBar";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      <TopBar name={profile.name} resumePath={profile.resumePath} />
      <main>
        <Hero
          name={profile.name}
          role={profile.role}
          tagline={profile.tagline}
          email={profile.email}
          githubUrl={profile.githubUrl}
          resumePath={profile.resumePath}
        />
        <Projects />
      </main>
    </>
  );
}
