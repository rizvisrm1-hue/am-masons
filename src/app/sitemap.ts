import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { offerings } from "@/data/offerings";
import { situations } from "@/data/situations";
import { toIsoDate } from "@/lib/insightContent";

const SITE = "https://am-masons.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "/about", "/offerings", "/insights", "/faq", "/contact",
    "/start-a-conversation", "/independence-statement",
  ].map((p) => ({ url: `${SITE}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 }));

  const offeringPages = offerings.map((o) => ({ url: `${SITE}/offerings/${o.slug}`, priority: 0.8 }));
  const situationPages = situations.map((s) => ({ url: `${SITE}/${s.slug}`, priority: 0.7 }));
  const insightPages = insights.map((i) => ({
    url: `${SITE}/insights/${i.slug}`,
    lastModified: toIsoDate(i.date),
    priority: 0.7,
  }));

  return [...staticPages, ...offeringPages, ...situationPages, ...insightPages];
}
