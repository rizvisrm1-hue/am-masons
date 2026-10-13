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
  metaTitle?: string;
  metaDescription?: string;
};

export const insightsIntro = [
  "Workplace and Corporate Real Estate decisions increasingly sit at the intersection of business strategy, employee experience, operational performance, cost, and risk.",
  "The purpose of these insights is not simply to comment on industry trends, but to share practical perspectives drawn from real operating environments, where leadership intent, operational realities, and long-term outcomes must align.",
  "Each article reflects how AM Masons Advisory approaches workplace decisions: deliberately, independently, and with a focus on clarity before execution.",
];

export const insights: Insight[] = [
  {
    id: "you-cant-hand-over-what-you-dont-know",
    title: "You Can't Hand Over What You Don't Know",
    slug: "you-cant-hand-over-what-you-dont-know",
    metaTitle: "You Can't Hand Over What You Don't Know | Facilities Vendor Transition Planning",
    metaDescription: "Why facilities vendor transitions fail on day one, and how to sequence offboarding, onboarding and validation so critical services never drop.",
    date: "13 Oct 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/cant-hand-over.webp",
    excerpt:
      "Day three of a new facilities contract. 2am. A pipe lets go above the sixth floor. Why vendor transitions fail on day one, and how to sequence them...",
  },
  {
    id: "the-service-you-get-is-the-service-you-define",
    title: "The Service You Get Is the Service You Define",
    slug: "the-service-you-get-is-the-service-you-define",
    metaTitle: "The Service You Get Is the Service You Define | Facilities SLAs and KPIs",
    metaDescription: "Why an IFM scorecard can be all green while the office is unusable, and how to define facilities SLAs, KPIs and escalation before you change vendors.",
    date: "8 Oct 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/service-you-define.webp",
    excerpt:
      "Why an IFM scorecard can be all green while the office was unusable, and why changing vendors often changes less...",
  },
  {
    id: "a-relocation-is-not-a-leasing-decision",
    title: "A Relocation Is Not a Leasing Decision",
    slug: "a-relocation-is-not-a-leasing-decision",
    metaTitle: "A Relocation Is Not a Leasing Decision | Office Relocation Strategy",
    metaDescription: "How a growing company should sequence an office relocation: space need, floorplate fit, cost strategy and design brief before a lease is signed.",
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
    metaTitle: "The Case for a Fractional Real Estate and Workplace Director",
    metaDescription: "When a growing company outgrows ad hoc office management, a fractional real estate and workplace director brings senior expertise without a full-time hire.",
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
    metaTitle: "Is This Office Right for Us? | Workplace Space Review",
    metaDescription: "What walking an office floor reveals that floor plans don't: empty collaboration areas, overbooked meeting rooms and space that no longer fits the work.",
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
    metaTitle: "Standardize the Platform, Localize the Experience | Global Workplace Model",
    metaDescription: "Why pure workplace standardization erodes employee experience, and a three-layer model: standardize the platform, localize identity, flex services locally.",
    date: "15 Jul 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/standardize.webp",
    excerpt:
      "I spent 18 years running global workplace services, responsible for 180 sites and working across more than 20 markets...",
  },
  {
    id: "the-camera-was-offline-for-three-weeks",
    title: "The Camera Was Offline for Three Weeks and Nobody Noticed",
    slug: "the-camera-was-offline-for-three-weeks-and-nobody-noticed",
    metaTitle: "The Camera Was Offline for Three Weeks and Nobody Noticed | Physical Security",
    metaDescription: "Physical security fails between disconnected vendors. Why CCTV, access control and monitoring need one owner accountable for the whole system.",
    date: "11 May 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/camera-offline.webp",
    excerpt:
      "Physical security in most organisations sits quietly in the operations budget, usually owned by a Facilities team stretched across a...",
  },
];
