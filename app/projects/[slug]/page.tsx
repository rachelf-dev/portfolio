import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { HighlightBanner } from "@/components/HighlightBadge";
import { TechTag } from "@/components/TechTag";
import { TopBar } from "@/components/TopBar";
import { profile } from "@/data/profile";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectPageImage,
  projects,
  type Project,
} from "@/data/projects";
import { ProjectActions } from "./project-actions";
import { ProjectNav } from "./project-nav";
import { ProjectText } from "./project-text";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const projectTypeLabel: Record<Project["type"], string> = {
  study: "Study",
  personal: "Personal",
  hackathon: "Hackathon",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const title = `${project.title} | ${profile.name}`;
  const image = getProjectPageImage(project);

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.tagline,
      type: "article",
      url: `/projects/${project.slug}`,
      images: [
        {
          url: image,
          alt: `Screenshot of ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const hasCta = Boolean(project.liveUrl || project.githubUrl || next);

  return (
    <>
      <div id="top" tabIndex={-1} className="h-px w-full focus:outline-none">
        <span className="sr-only">Top of page</span>
      </div>
      <TopBar name={profile.name} resumePath={profile.resumePath} backHref="/" />
      <main id="main" tabIndex={-1} className="relative overflow-hidden outline-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,var(--color-glow-cyan),transparent_70%)]"
        />
        <article className="relative mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:gap-12 lg:px-8">
          <ProjectNav previous={previous} next={next} />

          <header className="flex flex-col gap-4">
            <h1 className="text-pretty text-headline-lg-mobile text-text lg:text-headline-lg">
              {project.title}
            </h1>
            <p className="max-w-3xl text-pretty text-body-md text-muted lg:text-body-lg">
              {project.tagline}
            </p>
          </header>

          {project.highlight ? (
            <HighlightBanner label={project.highlight.label} detail={project.highlight.detail} />
          ) : null}

          <div className="flex flex-col gap-4">
            <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <MetaItem label="Role" value={project.role} className="sm:col-span-2" />
              <MetaItem label="Duration" value={project.duration} />
              <MetaItem label="Type" value={projectTypeLabel[project.type]} />
            </dl>
            <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, index) => (
                <li key={`${tag}-${index}`}>
                  <TechTag label={tag} emphasized={index === 0} />
                </li>
              ))}
            </ul>
          </div>

          <ProjectActions liveUrl={project.liveUrl} githubUrl={project.githubUrl} />

          <ProjectMedia project={project} />

          <section
            aria-labelledby="problem-heading"
            className="rounded-2xl border border-border bg-card p-6 sm:p-7"
          >
            <h2 id="problem-heading" className="text-headline-sm text-text">
              The Problem
            </h2>
            <div className="mt-4">
              <ProjectText text={project.problem} />
            </div>
          </section>

          <section
            aria-labelledby="solution-heading"
            className="rounded-2xl border border-accent/30 bg-card p-6 shadow-[0_0_32px_color-mix(in_srgb,var(--color-accent)_8%,transparent)] sm:p-7"
          >
            <h2 id="solution-heading" className="text-headline-sm text-text">
              The Solution
            </h2>
            <div className="mt-4">
              <ProjectText text={project.solution} />
            </div>
          </section>

          <section aria-labelledby="tech-stack-heading" className="flex flex-col gap-4">
            <h2 id="tech-stack-heading" className="text-headline-sm text-text">
              Tech Stack
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.techStack.map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl border border-border bg-card p-5 motion-safe:transition motion-safe:duration-200 hover:border-accent/40"
                >
                  <h3 className="font-mono text-body-md font-medium break-words text-accent">{item.name}</h3>
                  <p className="mt-2 text-pretty text-body-md leading-relaxed text-muted">{item.reason}</p>
                </li>
              ))}
            </ul>
          </section>

          {hasCta ? (
            <section
              aria-labelledby="project-cta-heading"
              className="relative overflow-hidden rounded-2xl border border-accent/25 bg-card p-6 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/15 blur-3xl"
              />
              <div className="relative flex flex-col gap-6">
                <h2 id="project-cta-heading" className="text-headline-sm text-text">
                  See the work
                </h2>
                <ProjectActions liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
                {next ? (
                  <Link
                    href={`/projects/${next.slug}`}
                    className="inline-flex h-11 max-w-full items-center gap-2 self-start font-mono text-label-code text-muted motion-safe:transition-colors motion-safe:duration-200 hover:text-accent"
                  >
                    <span className="shrink-0 text-accent">Next project</span>
                    <span className="truncate text-text">{next.title}</span>
                    <ChevronRightIcon />
                  </Link>
                ) : null}
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
}

function MetaItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-4 ${className ?? ""}`}>
      <dt className="font-mono text-label-code-sm tracking-wide text-accent uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-body-md text-pretty text-text">{value}</dd>
    </div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  const imageSrc = getProjectPageImage(project);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_40px_rgb(0_0_0/0.35)]">
      <div
        aria-hidden="true"
        className="flex items-center gap-1.5 border-b border-border bg-card px-4 py-2.5"
      >
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ms-2 truncate font-mono text-label-code-sm text-muted">
          {project.title}
        </span>
      </div>
      {project.demoVideo ? (
        <video
          controls
          playsInline
          preload="metadata"
          poster={imageSrc}
          src={project.demoVideo}
          aria-label={`Demo of ${project.title}`}
          className="aspect-video w-full bg-surface"
        />
      ) : (
        <div className="relative aspect-video w-full bg-surface">
          <Image
            src={imageSrc}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), 960px"
            className="object-cover object-center"
          />
        </div>
      )}
    </figure>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
