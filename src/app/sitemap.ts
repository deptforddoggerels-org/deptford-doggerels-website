import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://deptforddoggerels.com",
      lastModified: new Date("2026-01-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://deptforddoggerels.com/about",
      lastModified: new Date("2026-01-19"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://deptforddoggerels.com/poems",
      lastModified: new Date("2026-01-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://deptforddoggerels.com/gallery",
      lastModified: new Date("2026-01-19"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://deptforddoggerels.com/contact",
      lastModified: new Date("2026-01-19"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
