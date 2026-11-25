import { insights } from "@/data/insights";
import { offerings } from "@/data/offerings";
import { situations } from "@/data/situations";

// One place that defines how situations, offerings and insights connect.
// Each insight lists the offerings it supports; everything else is derived.

const FRACTIONAL = "fractional-head-of-real-estate-workplace";
const STANDARDS = "operating-standards-governance-frameworks";

export const insightOfferings: Record<string, string[]> = {
  "real-estate-accounting-explained": [FRACTIONAL, "workplace-direction-alignment"],
  "you-bought-the-company-you-also-bought-its-leases": ["workplace-direction-alignment", FRACTIONAL],
  "you-cut-the-headcount-you-kept-the-floors": ["space-effectiveness-audit", "workplace-direction-alignment"],
  "your-lease-expires-in-24-months": ["workplace-direction-alignment", "space-effectiveness-audit"],
  "mandate-first-math-later": ["space-effectiveness-audit", "workplace-direction-alignment"],
  "you-cant-hand-over-what-you-dont-know": [STANDARDS, FRACTIONAL],
  "the-service-you-get-is-the-service-you-define": [STANDARDS, FRACTIONAL],
  "a-relocation-is-not-a-leasing-decision": ["workplace-direction-alignment", "workplace-blueprint"],
  "the-case-for-a-fractional-real-estate-and-workplace-director": [FRACTIONAL],
  "is-this-office-right-for-us": ["space-effectiveness-audit", "workplace-blueprint"],
  "standardize-the-platform-localize-the-experience": [STANDARDS, "workplace-blueprint"],
  "the-camera-was-offline-for-three-weeks-and-nobody-noticed": ["physical-security-strategy-assurance"],
};

// Offering page -> the "When do we get involved" situation page it answers.
export const offeringSituation: Record<string, string> = {
  "space-effectiveness-audit": "when-space-usage-doesnt-add-up",
  "workplace-direction-alignment": "before-you-sign-a-lease",
  "workplace-blueprint": "before-you-sign-a-lease",
  [STANDARDS]: "when-standards-and-costs-need-governance",
  "physical-security-strategy-assurance": "when-physical-security-needs-an-independent-check",
  "enterprise-readiness-advisory": "before-selling-into-an-enterprise-buyer",
  "retail-space-effectiveness-audit": "when-retail-performance-is-in-question",
};

export type LinkCard = { title: string; text: string; href: string };

const offeringsForPage = (slug: string): string[] => {
  if (offerings.some((o) => o.slug === slug)) return [slug];
  return Object.keys(offeringSituation).filter((o) => offeringSituation[o] === slug);
};

// Up to three articles for an offering or situation page, newest first.
export function insightsForPage(slug: string): LinkCard[] {
  const targets = offeringsForPage(slug);
  // Articles whose main topic is this page come first, then supporting ones; newest first within each.
  const primary = insights.filter((p) => targets.includes((insightOfferings[p.slug] ?? [])[0]));
  const secondary = insights.filter(
    (p) => !primary.includes(p) && (insightOfferings[p.slug] ?? []).some((o) => targets.includes(o)),
  );
  return [...primary, ...secondary]
    .slice(0, 3)
    .map((p) => ({ title: p.title, text: p.metaDescription ?? p.excerpt, href: `/insights/${p.slug}` }));
}

// On an offering page: the situation page that describes the problem it solves.
export function situationForOffering(slug: string): LinkCard | null {
  const s = situations.find((x) => x.slug === offeringSituation[slug]);
  return s ? { title: s.title, text: s.gist, href: `/${s.slug}` } : null;
}

// On an article: the engagements it relates to, plus the matching situation page.
export function engagementsForInsight(slug: string): LinkCard[] {
  const cards: LinkCard[] = [];
  for (const o of insightOfferings[slug] ?? []) {
    const offering = offerings.find((x) => x.slug === o);
    if (offering) cards.push({ title: offering.title, text: offering.outcome, href: `/offerings/${o}` });
  }
  const first = (insightOfferings[slug] ?? [])[0];
  const situation = first ? situationForOffering(first) : null;
  if (situation && cards.length < 3) cards.push(situation);
  return cards;
}
