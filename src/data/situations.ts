export type Situation = {
  id: string;
  title: string;
  gist: string;
  slug: string;
};

export const situations: Situation[] = [
  {
    id: "before-lease",
    title: "Before a Lease or Portfolio Change",
    gist: "A lease event, consolidation, expansion, or M&A footprint change is coming and assumptions are untested",
    slug: "before-you-sign-a-lease"
  },
  {
    id: "space-usage",
    title: "When Space Usage Doesn't Add Up",
    gist: "Nobody has measured whether the office is used the way the lease or budget assumes",
    slug: "when-space-usage-doesnt-add-up"
  },
  {
    id: "retail-performance",
    title: "When Retail Performance Is in Question",
    gist: "The customer-facing floor or the systems behind it underperform and no vendor can say why",
    slug: "when-retail-performance-is-in-question"
  },
  {
    id: "standards-costs",
    title: "When FM Services, Standards & Costs Need Control",
    gist: "Services, standards, vendor performance, or costs drift across sites with no control model",
    slug: "when-standards-and-costs-need-governance"
  },
  {
    id: "fractional-head",
    title: "When Nobody Owns Real Estate & Workplace",
    gist: "Portfolio too complex for Finance/HR/Ops side-duty, not enough for a full-time exec",
    slug: "fractional-head-of-real-estate-workplace-services-2"
  },
  {
    id: "physical-security",
    title: "When Physical Security Needs an Independent Check",
    gist: "Nobody outside the incumbent vendor has tested whether the security program is sound",
    slug: "when-physical-security-needs-an-independent-check"
  },
  {
    id: "enterprise-buyer",
    title: "For Vendors: Before Selling Into an Enterprise Buyer",
    gist: "Vendors selling to enterprise workplace/CRE/FM/security buyers need to learn how large buyers evaluate suppliers",
    slug: "before-selling-into-an-enterprise-buyer"
  }
];
