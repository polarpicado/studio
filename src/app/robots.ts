import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jbasanta.vercel.app/sitemap.xml",
    host: "https://jbasanta.vercel.app",
  };
}
