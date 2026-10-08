export type Insight = {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  thumbnail: string;
  excerpt: string;
};

export const insights: Insight[] = [
  {
    id: "a-relocation-is-not-a-leasing-decision",
    title: "A Relocation Is Not a Leasing Decision",
    slug: "a-relocation-is-not-a-leasing-decision",
    date: "16 Sep 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/relocation.webp", // Placeholder name
    excerpt: "When companies approach a relocation purely as a real estate transaction, they often miss the operational realities..."
  },
  {
    id: "the-case-for-a-fractional-real-estate",
    title: "The Case for a Fractional Real Estate and Workplace Director",
    slug: "the-case-for-a-fractional-real-estate-and-workplace-director",
    date: "25 Aug 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/fractional.webp",
    excerpt: "Growing organizations frequently find themselves with a complex portfolio but without the dedicated senior leadership required to manage it..."
  },
  {
    id: "is-this-office-right-for-us",
    title: "Is this office right for us?",
    slug: "is-this-office-right-for-us",
    date: "5 Aug 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/office-right.webp",
    excerpt: "Determining whether an office space aligns with your operational needs goes far beyond square footage and location..."
  },
  {
    id: "standardize-the-platform-localize-the-experience",
    title: "Standardize the Platform, Localize the Experience",
    slug: "standardize-the-platform-localize-the-experience",
    date: "15 Jul 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/standardize.webp",
    excerpt: "Balancing enterprise-wide consistency with local cultural nuances is the central challenge for any global workplace strategy..."
  },
  {
    id: "the-camera-was-offline-for-three-weeks",
    title: "The Camera Was Offline for Three Weeks and Nobody Noticed",
    slug: "the-camera-was-offline-for-three-weeks-and-nobody-noticed",
    date: "11 May 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/camera-offline.webp",
    excerpt: "Physical security systems often suffer from 'install and forget' syndrome, where critical failures go completely undetected until..."
  },
  {
    id: "workplace-standards-dont-matter-until-cost-cutting",
    title: "Workplace Standards Don't Matter Until Cost Cutting Turns Into Operational Risk",
    slug: "workplace-standards-dont-matter-until-cost-cutting-turns-into-operational-risk",
    date: "29 Apr 2026",
    author: "Rashid Rizvi",
    thumbnail: "/images/insights/workplace-standards.webp",
    excerpt: "Without clearly defined operating standards, inevitable cost-reduction efforts can quickly erode the core functionality and safety of..."
  }
];
