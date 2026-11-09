import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getSiteUrl().origin}/sitemap.xml`,
  };
}
