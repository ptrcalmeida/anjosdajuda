import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anjosdajuda.org";
  return [
    { url: base, lastModified: new Date("2026-10-09"), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adote`, lastModified: new Date("2026-10-09"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/doe`, lastModified: new Date("2026-06-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date("2026-06-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/voluntarie`, lastModified: new Date("2026-04-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: new Date("2026-04-01"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/parceria`, lastModified: new Date("2026-10-09"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
