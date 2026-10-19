import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/dziekujemy", "/blad-formularza", "/en/dziekujemy", "/de/dziekujemy", "/en/blad-formularza", "/de/blad-formularza"] }, sitemap: "https://123pci.pl/sitemap.xml" };
}
