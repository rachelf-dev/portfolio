import Image from "next/image";
import Link from "next/link";

import { HighlightBadge } from "@/components/HighlightBadge";
import { TechTag } from "@/components/TechTag";
import { getProjectCardImage, type Project } from "@/data/projects";

export type ProjectCardData = {
  slug: string;
  title: string;
  tagline: string;
  coverImage?: string;
  coverFit?: "cover" | "contain";
  highlight?: Project["highlight"];
  tags: string[];
};

type ProjectCardProps = {
  project: ProjectCardData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  const coverFit = project.coverFit ?? "cover";
  const highlighted = Boolean(project.highlight);
  const titleId = `${project.slug}-title`;
  const taglineId = `${project.slug}-tagline`;

  return (
    <Link
      href={href}
      aria-labelledby={`${titleId} ${taglineId}`}
      className={
        highlighted
          ? "group flex h-full flex-col overflow-hidden rounded-2xl border border-violet bg-card motion-safe:transition motion-safe:duration-300 hover:shadow-[0_0_30px_var(--color-glow-violet)] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          : "group flex h-full flex-col overflow-hidden rounded-2xl border border-border-strong bg-card motion-safe:transition motion-safe:duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_var(--color-glow-cyan)] motion-safe:hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      }
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={getProjectCardImage(project)}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={
            coverFit === "contain"
              ? "object-contain object-center"
              : "object-cover object-top motion-safe:transition motion-safe:duration-300 motion-safe:group-hover:scale-105"
          }
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80"
        />
        {project.highlight ? (
          <span className="absolute top-2 left-2 z-10 max-w-[calc(100%-1rem)]">
            <HighlightBadge label={project.highlight.label} />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3
            id={titleId}
            className="text-headline-sm text-text motion-safe:transition-colors motion-safe:duration-200 group-hover:text-accent"
          >
            {project.title}
          </h3>
          <ArrowIcon />
        </div>
        <p id={taglineId} className="mt-2 line-clamp-2 text-body-md leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-auto border-t border-border pt-4">
          <div className="flex h-[3.375rem] max-h-[3.375rem] flex-wrap content-start gap-1.5 overflow-hidden">
            {project.tags.map((tag, index) => (
              <TechTag key={`${tag}-${index}`} label={tag} emphasized={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 shrink-0 text-faint motion-safe:transition motion-safe:duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
      fill="none"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
