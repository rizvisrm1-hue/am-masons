export type Situation = {
  id: string;
  title: string;
  gist: string;
  metaDescription?: string;
  slug: string;
};

export const situations: Situation[] = [
  {
    id: "before-lease",
    title: "Before a Lease or Portfolio Change",
    gist: "A lease event, consolidation, expansion, or M&A footprint change is coming and assumptions are untested",
    metaDescription: "A lease renewal, relocation, consolidation or M&A footprint change is 18 to 36 months out. Test the assumptions independently before terms are negotiated.",
    slug: "before-you-sign-a-lease"
  },
  {
    id: "space-usage",
    title: "When Space Usage Doesn't Add Up",
    gist: "Nobody has measured whether the office is used the way the lease or budget assumes",
    metaDescription: "Your office was sized for a headcount and work model that has changed. Measure how space is really used before a renewal, budget or downsizing decision.",
    slug: "when-space-usage-doesnt-add-up"
  },
  {
    id: "retail-performance",
    title: "When Retail Performance Is in Question",
    gist: "The customer-facing floor or the systems behind it underperform and no vendor can say why",
    metaDescription: "Stores underperform and no fixture or systems vendor can say why. Get an independent read on layout, flow and store systems before a refit or rollout.",
    slug: "when-retail-performance-is-in-question"
  },
  {
    id: "standards-costs",
    title: "When FM Services, Standards & Costs Need Control",
    gist: "Services, standards, vendor performance, or costs drift across sites with no control model",
    metaDescription: "FM services, vendor performance and costs vary site to site and nobody owns the whole. Independent governance advice to bring standards and spend under control.",
    slug: "when-standards-and-costs-need-governance"
  },
  {
    id: "fractional-head",
    title: "When Nobody Owns Real Estate & Workplace",
    gist: "Portfolio too complex for Finance/HR/Ops side-duty, not enough for a full-time exec",
    slug: "fractional-head-of-real-estate-workplace"
  },
  {
    id: "physical-security",
    title: "When Physical Security Needs an Independent Check",
    gist: "Nobody outside the incumbent vendor has tested whether the security program is sound",
    metaDescription: "Nobody outside your incumbent guard or systems vendor has tested your security program. Get an independent check of controls, response and governance.",
    slug: "when-physical-security-needs-an-independent-check"
  },
  {
    id: "enterprise-buyer",
    title: "For Vendors: Before Selling Into an Enterprise Buyer",
    gist: "Vendors selling to enterprise workplace/CRE/FM/security buyers need to learn how large buyers evaluate suppliers",
    metaDescription: "Selling workplace, real estate, FM or security products to Fortune 500 buyers? Learn how they evaluate and govern suppliers before your next deal stalls.",
    slug: "before-selling-into-an-enterprise-buyer"
  }
];
