import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/profile";
import { getSortedProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl().origin;

  return [
    {
      url: origin,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getSortedProjects().map((project) => ({
      url: `${origin}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
