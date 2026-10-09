// Insights list, matching am-masons.com/insights (newest first).
// Each article's full text lives in src/content/insights/<slug>.md.
// thumbnail is optional: posts without one show a branded placeholder.

export type Insight = {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  thumbnail?: string;
  excerpt: string;
};

export const insightsIntro = [
  "Workplace and Corporate Real Estate decisions increasingly sit at the intersection of business strategy, employee experience, operational performance, cost, and risk.",
  "The purpose of these insights is not simply to comment on industry trends, but to share practical perspectives drawn from real operating environments, where leadership intent, operational realities, and long-term outcomes must align.",
  "Each article reflects how AM Masons Advisory approaches workplace decisions: deliberately, independently, and with a focus on clarity before execution.",
];

export const insights: Insight[] = [
  {
    id: "the-service-you-get-is-the-service-you-define",
    title: "The Service You Get Is the Service You Define",
    slug: "the-service-you-get-is-the-service-you-define",
    date: "8 Oct 2026",
    author: "Rashid Rizvi",
    excerpt:
      "Why an IFM scorecard can be all green while the office was unusable, and why changing vendors often changes less...",
  },
  {
    id: "a-relocation-is-not-a-leasing-decision",
    title: "A Relocation Is Not a Leasing Decision",
    slug: "a-relocation-is-not-a-leasing-decision",
    date: "16 Sep 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/relocation.webp",
    excerpt:
      "By Rashid Masood Rizvi, Founder, AM Masons Advisory. 18 years leading global workplace and physical security portfolios at Procter &...",
  },
  {
    id: "the-case-for-a-fractional-real-estate",
    title: "The Case for a Fractional Real Estate and Workplace Director",
    slug: "the-case-for-a-fractional-real-estate-and-workplace-director",
    date: "25 Aug 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/fractional.webp",
    excerpt:
      "Every growing company reaches the same inflection point. The office that once worked perfectly well, functional, unpretentious, managed loosely by...",
  },
  {
    id: "is-this-office-right-for-us",
    title: "Is this office right for us?",
    slug: "is-this-office-right-for-us",
    date: "5 Aug 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/office-right.webp",
    excerpt:
      "I am often asked to walk through an office and give a view. I never turn it down. Floor plans...",
  },
  {
    id: "standardize-the-platform-localize-the-experience",
    title: "Standardize the Platform, Localize the Experience",
    slug: "standardize-the-platform-localize-the-experience",
    date: "15 Jul 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/standardize.webp",
    excerpt:
      "I spent 18 years running global workplace services across 180 sites in 20 markets, and for most of that time...",
  },
  {
    id: "the-camera-was-offline-for-three-weeks",
    title: "The Camera Was Offline for Three Weeks and Nobody Noticed",
    slug: "the-camera-was-offline-for-three-weeks-and-nobody-noticed",
    date: "11 May 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/camera-offline.webp",
    excerpt:
      "Physical security in most organisations sits quietly in the operations budget, usually owned by a Facilities team stretched across a...",
  },
];
