import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areaPages, OFFICE_AREA_PATH, EOT_AREA_PATH } from "@/lib/area-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    {
      path: "/office-cleaning",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/letting-agents",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/end-of-tenancy-price-calculator",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/school-cleaning",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/end-of-tenancy-cleaning-london",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/end-of-tenancy-cleaning-prices-london",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/what-does-end-of-tenancy-cleaning-include",
      priority: 0.75,
      changeFrequency: "monthly",
    },
    {
      path: "/end-of-tenancy-cleaning-checklist-uk",
      priority: 0.75,
      changeFrequency: "monthly",
    },
    {
      path: "/how-long-does-end-of-tenancy-cleaning-take",
      priority: 0.7,
      changeFrequency: "monthly",
    },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  ];

  // Area landing pages for the two main services.
  for (const area of areaPages) {
    const priority = area.tier === "primary" ? 0.85 : 0.75;
    routes.push({ path: OFFICE_AREA_PATH(area.slug), priority, changeFrequency: "monthly" });
    routes.push({ path: EOT_AREA_PATH(area.slug), priority, changeFrequency: "monthly" });
  }

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
