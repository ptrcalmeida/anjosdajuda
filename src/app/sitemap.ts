import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://anjosdajuda.org";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adote`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/doe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/voluntarie`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
