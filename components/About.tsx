import Image from "next/image";

import { TechTag } from "@/components/TechTag";
import { profile } from "@/data/profile";

const groupBorderClass = [
  "border-accent/30 hover:border-accent/60",
  "border-violet/40 hover:border-violet/70",
  "border-accent/25 hover:border-accent/55",
  "border-violet/30 hover:border-violet/60",
] as const;

export function About() {
  return (
    <section aria-labelledby="about-heading" className="border-b border-border bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex min-w-0 flex-col">
            <p className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-label-code-sm text-accent">
              <span className="text-xs">02 //</span>
              <span className="font-semibold tracking-wide">ENGINEERING BACKGROUND</span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            </p>
            <h2
              id="about-heading"
              className="text-headline-lg-mobile tracking-tight text-text lg:text-headline-lg"
            >
              {profile.aboutHeading}
            </h2>

            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={96}
                height={96}
                className="mt-6 size-24 rounded-xl border border-border object-cover"
              />
            ) : null}

            <p className="mt-6 text-pretty text-body-md leading-relaxed text-muted lg:text-body-lg">
              {profile.about}
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-accent/20 bg-card p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -bottom-6 size-28 rounded-full bg-accent/10 blur-2xl"
              />
              <div className="relative flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent">
                  <CheckIcon />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-text">{profile.experienceHeading}</h3>
                  <p className="mt-1 text-pretty text-body-md leading-relaxed text-muted">
                    {profile.projectsNote}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-body-md text-text">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-card text-faint">
                <SchoolIcon />
              </span>
              <span className="min-w-0 pt-0.5 leading-relaxed">
                <span className="text-muted">Education: </span>
                {profile.education}
              </span>
            </p>
          </div>

          <div className="min-w-0 rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h3 className="text-headline-sm text-text">{profile.skillsHeading}</h3>
            <p className="mt-1 font-mono text-label-code-sm text-muted">Categorized stack</p>
            <ul className="mt-6 flex flex-col gap-4">
              {profile.skills.map((group, index) => (
                <li
                  key={group.title}
                  className={`w-full min-w-0 rounded-xl border bg-surface p-4 motion-safe:transition motion-safe:duration-200 ${groupBorderClass[index % groupBorderClass.length]}`}
                >
                  <h4 className="font-mono text-label-code-sm font-semibold tracking-wider break-words text-accent uppercase">
                    {group.title}
                  </h4>
                  <ul className="mt-3 flex min-w-0 flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <TechTag label={item} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <path
        d="M5 12.5l4.2 4.2L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M3 10l9-5 9 5-9 5-9-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.2V16c0 .8 2.2 2.2 5 2.2s5-1.4 5-2.2v-3.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
