import { ProjectCard } from "@/components/ProjectCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function Projects() {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section
      aria-labelledby="projects"
      className="border-b border-border bg-bg-deep py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-label-code-sm text-accent">
            <span className="text-xs">01 //</span>
            <span className="font-semibold tracking-wide">SELECTED WORK</span>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          </p>
          <h2
            id="projects"
            tabIndex={-1}
            className="scroll-mt-28 text-headline-lg-mobile tracking-tight text-text lg:text-headline-lg"
          >
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-body-md leading-relaxed text-muted">
            {profile.projectsIntro}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {sortedProjects.map((project) => (
            <li key={project.slug} className="flex min-h-0 min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
