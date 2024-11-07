import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/uk", "/en", "/uk/expert", "/en/expert"],
      disallow: [],
    },
    sitemap: [
      "https://kraftjar.net/uk/sitemap.xml",
      "https://kraftjar.net/en/sitemap.xml",
    ],
  };
}
