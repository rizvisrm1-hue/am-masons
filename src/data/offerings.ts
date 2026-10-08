export type Offering = {
  id: string;
  group: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  triggers: string[];
  outcome: string;
};

export const offerings: Offering[] = [
  {
    id: "space-effectiveness-audit",
    group: "Workplace & Real Estate",
    title: "Space Effectiveness Audit",
    slug: "space-effectiveness-audit",
    image: "/images/offerings/space-effectiveness-audit-empty-office.jpg",
    description: "Tests whether the office works as hard as its lease, by measuring actual use and design fit before a decision locks in.",
    triggers: [
      "Floors half-empty most days",
      "No focus/collab space on anchor days",
      "Lease event 18-36 months out",
      "Attendance policy changed but floor plan didn't"
    ],
    outcome: "True utilization picture, functional-fit assessment, ranked next moves"
  },
  {
    id: "workplace-direction-alignment",
    group: "Workplace & Real Estate",
    title: "Workplace Direction & Alignment",
    slug: "workplace-direction-alignment",
    image: "/images/offerings/work-floor.jpg",
    description: "Aligns leadership intent and trade-offs before committing to workplace/real estate/policy decisions, preventing rework.",
    triggers: [
      "Lease renewal/relocation",
      "Hybrid model change",
      "Restructuring",
      "Early redesign talks"
    ],
    outcome: "Clear direction and documented leadership decisions"
  },
  {
    id: "workplace-blueprint",
    group: "Workplace & Real Estate",
    title: "Workplace Blueprint",
    slug: "workplace-blueprint",
    image: "/images/offerings/full-kitchen.jpg",
    description: "Turns leadership direction into an executable brief for designers and project teams.",
    triggers: [
      "Redesign/expansion",
      "Relocation planning",
      "Designers needing clearer direction",
      "Conflicting stakeholders"
    ],
    outcome: "Aligned workplace brief + decision framework"
  },
  {
    id: "operating-standards-governance-frameworks",
    group: "Operations & Governance",
    title: "Operating Standards & Governance",
    slug: "operating-standards-governance-frameworks",
    image: "/images/offerings/conf-room.jpg",
    description: "Defines day-to-day service standards, governance cadence, and accountability across locations.",
    triggers: [
      "Inconsistent experience across sites",
      "No ownership",
      "Vendor variability",
      "Multi-site growth"
    ],
    outcome: "Service standards, governance frameworks, consistency"
  },
  {
    id: "fractional-head",
    group: "Operations & Governance",
    title: "Fractional Head of Real Estate & Workplace Services",
    slug: "fractional-head-of-real-estate-workplace-services-2",
    image: "/images/offerings/full-kitchen.jpg",
    description: "Provides senior workplace leadership and oversight part-time, without a full-time executive.",
    triggers: [
      "Growing org without senior workplace lead",
      "Major transition/consolidation",
      "Need independent oversight"
    ],
    outcome: "Stable governance and informed decisions"
  },
  {
    id: "physical-security",
    group: "Risk & Assurance",
    title: "Physical Security Strategy & Assurance",
    slug: "physical-security-strategy-assurance",
    image: "/images/offerings/gallery-1.jpg",
    description: "Independent advice on security governance, standards, and design intent, aligned to risk posture and workplace experience.",
    triggers: [
      "Access control/cameras/incident response not independently reviewed in years",
      "Governance gap (lapse, near-miss, audit finding)",
      "Standards vary by site",
      "Incumbent vendor made all decisions"
    ],
    outcome: "Clear security governance, defined standards, vendor-neutral direction"
  },
  {
    id: "enterprise-readiness",
    group: "Specialist Advisory",
    title: "Enterprise Readiness Advisory",
    slug: "enterprise-readiness-advisory",
    image: "/images/offerings/hero-bg-01.jpg",
    description: "Insider intelligence for vendors/startups on how enterprises evaluate, select, and govern suppliers.",
    triggers: [
      "First approach to a Fortune 500 prospect",
      "Losing deals without knowing why",
      "RFPs stalling at procurement",
      "Entering CRE/workplace/FM/security market"
    ],
    outcome: "Written Enterprise Readiness Brief after three advisory sessions"
  },
  {
    id: "retail-space",
    group: "Retail Workplace & Real Estate",
    title: "Space Effectiveness Audit (Retail)",
    slug: "retail-space-effectiveness-audit",
    image: "/images/offerings/retail-space-effectiveness-store-interior.jpg",
    description: "Reviews customer flow, back-of-house operations, and store technical infrastructure, independent of fixture, fit-out, or systems vendors.",
    triggers: [
      "New format/refit about to roll out",
      "Similar stores performing very differently",
      "Customers queuing/backtracking/leaving",
      "Building systems vary by store"
    ],
    outcome: "Customer-experience read, technical effectiveness review, network next moves"
  }
];
