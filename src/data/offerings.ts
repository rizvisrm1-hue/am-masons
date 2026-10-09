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
    description: "Find out whether your office is working as hard as the lease you signed for it. This engagement measures how your space is actually used and whether its design fits how your teams work, before a lease or budget decision locks the answer in.",
    triggers: [
      "Floors sit half empty on most days",
      "No room to focus or collaborate on anchor days",
      "A lease event 18 to 36 months out",
      "Attendance policy changed, floor plan did not",
    ],
    outcome: "A true utilization picture, a functional fit assessment, and a ranked set of next moves."
  },
  {
    id: "workplace-direction-alignment",
    group: "Workplace & Real Estate",
    title: "Workplace Direction & Alignment",
    slug: "workplace-direction-alignment",
    image: "/images/offerings/work-floor.jpg",
    description: "Establish leadership clarity before committing to workplace, real estate, or policy decisions. This engagement aligns leadership intent, defines key trade-offs, and produces clear directional guidance that prevents costly rework later in the process.",
    triggers: [
      "Lease renewal or relocation decisions",
      "Hybrid or working model changes",
      "Organizational restructuring",
      "Early-stage workplace redesign discussions",
    ],
    outcome: "Clear direction and documented leadership decisions that guide workplace strategy."
  },
  {
    id: "workplace-blueprint",
    group: "Workplace & Real Estate",
    title: "Workplace Blueprint",
    slug: "workplace-blueprint",
    image: "/images/offerings/full-kitchen.jpg",
    description: "Translate leadership direction into an executable workplace plan. This engagement helps organizations make practical decisions around space priorities, employee experience, and design intent.\n\nThe result is a clear workplace brief that designers and project teams can execute efficiently and consistently.",
    triggers: [
      "Workplace redesign or expansion",
      "Office relocation planning",
      "Design teams requiring clearer direction",
      "Conflicting stakeholder expectations",
    ],
    outcome: "An aligned workplace brief and structured decision framework for implementation."
  },
  {
    id: "operating-standards-governance-frameworks",
    group: "Operations & Governance",
    title: "Operating Standards & Governance",
    slug: "operating-standards-governance-frameworks",
    image: "/images/offerings/conf-room.jpg",
    description: "Define how workplace services operate on a day-to-day basis. This engagement establishes service standards, governance cadence, and accountability structures that sustain performance across locations and teams.",
    triggers: [
      "Inconsistent workplace experience across sites",
      "Lack of ownership or accountability",
      "Vendor performance variability",
      "Organizational growth across multiple locations",
    ],
    outcome: "Clear service standards, governance frameworks, and operational consistency."
  },
  {
    id: "fractional-head",
    group: "Operations & Governance",
    title: "Fractional Head of Real Estate & Workplace Services",
    slug: "fractional-head-of-real-estate-workplace-services-2",
    image: "/images/offerings/full-kitchen.jpg",
    description: "Provide senior workplace leadership and governance without the need for a full-time executive role. This engagement supports organizations requiring ongoing oversight, structured decision-making, and operational stability.",
    triggers: [
      "Growing organizations without senior workplace leadership",
      "Major workplace transitions or consolidations",
      "Need for independent oversight and guidance",
    ],
    outcome: "Stable governance structures and informed workplace decision-making."
  },
  {
    id: "physical-security",
    group: "Risk & Assurance",
    title: "Physical Security Strategy & Assurance",
    slug: "physical-security-strategy-assurance",
    image: "/images/offerings/gallery-1.jpg",
    description: "Physical security requirements frequently evolve alongside workplace change. AM Masons Advisory provides independent advisory on security governance, standards, and design intent, ensuring security measures align with organizational risk posture while still supporting workplace experience.\n\nThis capability may be delivered as a standalone engagement or integrated into Workplace & Real Estate: Workplace Blueprint and Operating Standards workstreams.",
    triggers: [
      "Access control, cameras, or incident response haven’t been reviewed independently in years",
      "A governance gap surfaced, a lapse, a near-miss, an audit finding",
      "Standards vary site to site with no consistent ownership",
      "Security decisions have been made entirely by the incumbent vendor",
    ],
    outcome: "Clear security governance, defined standards, and vendor-neutral strategic direction."
  },
  {
    id: "enterprise-readiness",
    group: "Specialist Advisory",
    title: "Enterprise Readiness Advisory",
    slug: "enterprise-readiness-advisory",
    image: "/images/offerings/hero-bg-01.jpg",
    description: "Prepare to sell into Fortune 500 organisations with strategic intelligence from someone who spent eighteen years on the inside making the decisions you are trying to influence. This engagement helps vendors and startups understand how enterprise organisations actually evaluate, select, and govern external providers, before they are in the room.",
    triggers: [
      "Preparing for a first approach to a Fortune 500 or large enterprise prospect",
      "Losing deals without understanding why",
      "RFP responses that stall or fail at procurement",
      "Entering the corporate real estate, workplace, FM, or physical security market for the first time",
    ],
    outcome: "A written Enterprise Readiness Brief with specific recommendations, delivered at the close of three structured advisory sessions. Flat fee. No success fees. No outcome dependency."
  },
  {
    id: "retail-space",
    group: "Retail Workplace & Real Estate",
    title: "Retail Space Effectiveness Audit",
    slug: "retail-space-effectiveness-audit",
    image: "/images/offerings/retail-space-effectiveness-store-interior.jpg",
    description: "Find out whether your stores work for the customer on the floor and the systems behind the walls. This engagement reviews customer flow, back-of-house operations, and the technical infrastructure every store depends on, independent of any fixture, fit-out, or systems vendor.",
    triggers: [
      "A new format or refit about to roll out",
      "Similar stores delivering very different results",
      "Customers queuing, backtracking, or leaving",
      "Building systems that vary from store to store",
    ],
    outcome: "A customer experience read, a technical effectiveness review, and clear next moves for the network."
  }
];
