import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://123pci.pl";
  return ["", "/en", "/de", "/polityka-prywatnosci", "/cookies"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "monthly", priority: path ? 0.5 : 1 }));
}
