import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://am-masons.com/sitemap.xml",
    host: "https://am-masons.com",
  };
}
