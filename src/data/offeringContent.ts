// Full content for each /offerings/<slug> page, ported word for word from
// old.am-masons.com. Engagement tiers are intentionally left out (owner's call).
// Uses the same layout and data shape as the situation pages.

import { situationContent, type SituationContent } from "./situationContent";

export type OfferingContent = SituationContent & { pageTitle: string };

export const offeringContent: Record<string, OfferingContent> = {
  "space-effectiveness-audit": {
    pageTitle: "Space Effectiveness Audit",
    intro: "Find out whether your office is working as hard as the lease you signed for it.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when the office no longer matches how the business works, and a lease or budget decision is coming that will lock the mismatch in.",
      signals: [
        "Floors sit half empty on most days, and nobody has put a number on what that costs",
        "People come in on anchor days and still cannot find a room to focus or a table to work at together",
        "A lease event is 18 to 36 months out, and you need facts before anyone tours a building",
        "Attendance policy has changed, but the floor plan still reflects how the company used to work",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "A true utilization picture: how much of your space gets used, when, and by whom",
        "A functional fit assessment of where the design supports real work and where it works against it",
        "A ranked findings register, each gap tied to its cost, capacity, or productivity impact",
        "A clear set of next moves: fix in place, hold for the lease event, or take to leadership",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Scope", text: "We agree which sites, which questions, and how deep to go. Your situation sets the depth, not a package." },
        { title: "Gather", text: "Occupancy and badge data, floor plans, lease abstracts, and structured conversations with leaders and the people who use the space." },
        { title: "Observe", text: "Walk-throughs across different days and times, to see how the space is used rather than how it was designed to be used." },
        { title: "Report", text: "A findings session with your leadership team, followed by a written report you own outright." },
      ],
    },
    included: {
      eyebrow: "What is included",
      heading: "One Engagement, Scoped To You",
      label: "Single scope",
      name: "Space Effectiveness Audit",
      intro: "There are no packages. Every audit covers the same core ground, and we set the depth together in the first conversation.",
      items: [
        "Utilization against contracted square footage, by site and by floor",
        "Space mix: desks, meeting rooms, focus space, and collaboration space",
        "Functional fit between the layout and how teams actually work",
        "Attendance patterns measured against policy",
        "The cost of underused space, per seat and per site",
        "Operational gaps, named as findings",
      ],
      note: "Where we find gaps in hard services, soft services, or operating procedures, we name them plainly. Fixing them belongs to our Operating Standards & Governance Frameworks engagement, which keeps this audit focused on the space itself.",
    },
    independence:
      "We earn nothing from what you decide next. No commissions, no vendor referrals, no refit waiting at the end of the report. That is why the answer is worth trusting.",
    related: [
      { title: "Workplace Direction & Alignment", text: "Turn the findings into a workplace direction your leadership team agrees on.", href: "/offerings/workplace-direction-alignment" },
      { title: "Workplace Blueprint", text: "Translate that direction into a design brief and space program.", href: "/offerings/workplace-blueprint" },
      { title: "Operating Standards & Governance Frameworks", text: "Close the service and procedure gaps the audit brings to the surface.", href: "/offerings/operating-standards-governance-frameworks" },
    ],
    cta: {
      title: "Your Lease Tells You What The Space Costs. We Will Tell You What It Is Worth.",
      text: "Most engagements begin with a thirty-minute conversation. No pitch deck.",
    },
  },

  "workplace-direction-alignment": {
    pageTitle: "Workplace Direction & Alignment",
    intro: "Establish leadership clarity before major workplace decisions are made.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when workplace decisions have become strategic but direction remains unclear or contested.",
      signals: [
        "Lease renewal or relocation decision approaching",
        "Hybrid or working model under review",
        "Organizational restructuring underway",
        "Office redesign or expansion being considered",
        "Conflicting expectations across leadership",
        "Independent perspective needed before execution begins",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "Clear leadership direction and intent",
        "Explicit trade-offs and decision criteria",
        "Alignment across business, HR, operations, and workplace",
        "Documented outcomes that prevent rework and decision drift",
        "A defined starting point for your execution partners",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Intake & Context Setting", text: "We understand your business objectives, constraints, and current workplace challenges." },
        { title: "Interviews & Observation", text: "Structured discussions with key stakeholders to surface alignment and tensions." },
        { title: "Synthesis & Decision Framing", text: "Trade-offs, risks, and viable options are identified and mapped." },
        { title: "Direction Confirmation", text: "Recommendations are presented and confirmed with leadership before execution begins." },
      ],
    },
    independence:
      "AM Masons Advisory does not provide design, brokerage, or product delivery. Advice is vendor-agnostic and focused solely on helping leadership make the right decisions.",
    related: [
      { title: "Workplace Blueprint", text: "Translate direction into a plan your design team can execute.", href: "/offerings/workplace-blueprint" },
      { title: "Operating Standards & Governance", text: "Establish how workplace services operate consistently day-to-day.", href: "/offerings/operating-standards-governance-frameworks" },
      { title: "Fractional Head of RE & Workplace", text: "Senior workplace leadership without a full-time executive role.", href: "/offerings/fractional-head-of-real-estate-workplace-services-2" },
    ],
    cta: {
      title: "Ready To Establish Direction?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "workplace-blueprint": {
    pageTitle: "Workplace Blueprint",
    intro: "Translate leadership direction into an executable plan your design team can deliver.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when a workplace project is underway but direction, priorities, and trade-offs have not yet been clearly defined.",
      signals: [
        "Workplace redesign or relocation in planning",
        "Design team needs clearer direction before progressing",
        "Conflicting stakeholder or design preferences",
        "Space and experience priorities not yet defined",
        "Early-stage project before design has advanced too far",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "A workplace brief aligned with organizational objectives",
        "Defined space and experience priorities",
        "Reduced design iteration and project risk",
        "Documented decisions and trade-offs",
        "Alignment between leadership intent and design outcomes",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Direction Review", text: "Confirm leadership intent and decision criteria before any design work progresses." },
        { title: "Workplace Requirements Definition", text: "Define space types, adjacencies, and experience priorities in detail." },
        { title: "Options & Trade-Off Evaluation", text: "Evaluate practical choices and their implications for budget, experience, and operations." },
        { title: "Blueprint Confirmation", text: "Finalize the workplace brief and decision framework ready for your execution team." },
      ],
    },
    independence:
      "AM Masons Advisory does not provide design or furniture services. The role is to ensure decisions remain aligned with organizational intent, not to influence vendor or product selection.",
    related: [
      { title: "Workplace Direction & Alignment", text: "Establish leadership clarity before major workplace decisions are made.", href: "/offerings/workplace-direction-alignment" },
      { title: "Operating Standards & Governance", text: "Establish how workplace services operate consistently day-to-day.", href: "/offerings/operating-standards-governance-frameworks" },
      { title: "Physical Security Strategy & Assurance", text: "Security governance aligned with workplace experience and risk.", href: "/offerings/physical-security-strategy-assurance" },
    ],
    cta: {
      title: "Ready To Define Your Blueprint?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "operating-standards-governance-frameworks": {
    pageTitle: "Operating Standards & Governance Frameworks",
    intro: "Consistent, predictable workplace operations, built to last.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when workplace operations have become inconsistent, reactive, or difficult to scale across locations.",
      signals: [
        "Inconsistent workplace experience across locations",
        "Unclear ownership or decision rights",
        "Vendor performance varies without explanation",
        "Rapid growth across multiple sites",
        "Workplace operations have become reactive rather than structured",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "Clear service ownership and accountability",
        "Defined operating standards",
        "Governance structures that sustain performance",
        "Measurable service expectations",
        "Alignment between workplace experience and day-to-day operations",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Service Scope Assessment", text: "Review current services, ownership, and expectations." },
        { title: "Standards Definition", text: "Define service standards and operating expectations by location type." },
        { title: "Governance Design", text: "Establish decision rights, escalation paths, and review cadence." },
        { title: "Implementation Alignment", text: "Confirm the governance model and operational ownership structure." },
      ],
    },
    independence:
      "AM Masons Advisory focuses on governance structure, not operational outsourcing, staffing, or vendor delivery.",
    related: [
      { title: "Workplace Blueprint", text: "Translate leadership direction into an executable plan your design team can deliver.", href: "/offerings/workplace-blueprint" },
      { title: "Fractional Head of Real Estate & Workplace Services", text: "Strategic leadership and oversight without full-time overhead.", href: "/offerings/fractional-head-of-real-estate-workplace-services-2" },
      { title: "Physical Security Strategy & Assurance", text: "Security governance aligned with workplace experience and risk.", href: "/offerings/physical-security-strategy-assurance" },
    ],
    cta: {
      title: "Ready To Build Lasting Workplace Standards?",
      text: "Most engagements begin with a short conversation to understand your current challenges and objectives.",
    },
  },

  // Same page as the "When Nobody Owns Real Estate & Workplace" situation on the old site.
  "fractional-head-of-real-estate-workplace-services-2": {
    pageTitle: "Fractional Head of Real Estate & Workplace Services",
    ...situationContent["fractional-head-of-real-estate-workplace-services-2"],
  },

  "physical-security-strategy-assurance": {
    pageTitle: "Physical Security Strategy & Assurance",
    intro: "Security governance aligned with workplace experience and operational risk.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when security standards are inconsistent, new risks are emerging, or better alignment is needed between security and workplace teams.",
      signals: [
        "Security standards evolving inconsistently across sites",
        "Growth or relocation introducing new risk considerations",
        "Vendor-neutral security direction required",
        "Governance gaps between security and workplace teams",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "Clear security governance and defined ownership",
        "Consistent standards across all locations",
        "Vendor-agnostic solution direction",
        "Alignment between security, operations, and workplace experience",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Current State Review", text: "Assessment of existing policies, standards, and governance structure." },
        { title: "Risk & Standards Definition", text: "Standards defined and aligned to site types and risk posture." },
        { title: "Governance & Assurance Design", text: "Audit structures, escalation paths, and accountability established." },
        { title: "Direction Confirmation", text: "Security direction and implementation framework delivered to leadership." },
      ],
    },
    independence:
      "AM Masons Advisory does not provide security integration or installation services. Advice is independent of technology vendors and product selection.",
    related: [
      { title: "Workplace Direction & Alignment", text: "Establish leadership clarity before major workplace decisions.", href: "/offerings/workplace-direction-alignment" },
      { title: "Operating Standards & Governance Frameworks", text: "Build consistent and predictable workplace operations.", href: "/offerings/operating-standards-governance-frameworks" },
      { title: "Fractional Head of Real Estate & Workplace Services", text: "Senior leadership without full-time commitment.", href: "/offerings/fractional-head-of-real-estate-workplace-services-2" },
    ],
    cta: {
      title: "Ready To Strengthen Your Security Governance?",
      text: "Most engagements begin with a short conversation to understand your current risk landscape.",
    },
  },

  "enterprise-readiness-advisory": {
    pageTitle: "Enterprise Readiness Advisory",
    intro:
      "Prepare to sell into Fortune 500 organisations with intelligence from someone who spent eighteen years on the inside making the decisions you are trying to influence.",
    whenToEngage: {
      eyebrow: "Is this the right moment?",
      heading: "Who Should Engage",
      text: "Vendors and startups engage when they are preparing to approach enterprise clients and need to understand how decisions are actually made, not how they appear from the outside.",
      signals: [
        "First approach to a Fortune 500 or large enterprise prospect being planned",
        "RFP responses stalling or failing without a clear reason",
        "Deals lost before reaching formal evaluation",
        "Entering the corporate real estate, workplace, FM, or physical security market for the first time",
        "Internal team lacks experience selling into large, complex organisations",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "A clear understanding of how enterprise buying decisions are structured internally",
        "Identification of what disqualifies vendors before formal evaluation begins",
        "Positioning and language aligned to how corporate buyers think and decide",
        "A direct review of live materials through the lens of an enterprise decision-maker",
        "A written Enterprise Readiness Brief with specific, actionable recommendations",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Intake & Context Setting", text: "We establish a clear picture of your product, your target market, and your current approach to enterprise clients." },
        { title: "The Inside View", text: "We work through how enterprise organisations actually make decisions: governance, authority, procurement, and what most vendors miss." },
        { title: "Materials Review", text: "We examine your live pitch deck, proposal, or RFP response directly through the buyer’s lens." },
        { title: "Brief & Recommendations", text: "A written Enterprise Readiness Brief is delivered with specific, actionable recommendations." },
      ],
    },
    included: {
      eyebrow: "The engagement",
      heading: "Enterprise Readiness Advisory",
      intro:
        "For vendors and startups preparing to approach Fortune 500 and large enterprise organisations in the corporate real estate, workplace, facilities management, or physical security space.",
      items: [
        "Three structured advisory sessions",
        "Written Enterprise Readiness Brief delivered at close",
        "Flat fee",
        "Complimentary 20-minute discovery call prior to booking",
      ],
      note: "This is not sales training. It is strategic intelligence from someone who made the decisions you are trying to influence.",
    },
    cta: {
      title: "Ready To Improve Your Enterprise Win Rate?",
      text: "Book a complimentary 20-minute discovery call to see if this is the right fit.",
    },
  },

  "retail-space-effectiveness-audit": {
    pageTitle: "Retail Space Effectiveness Audit",
    intro: "Find out whether your stores work for the customer on the floor and the systems behind the walls.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Retailers engage when stores cost more to run than they should, perform unevenly across the network, or are about to be refit, replicated, or closed.",
      signals: [
        "A new format or refit is about to roll out across the network, and nobody has tested the current one",
        "Similar stores deliver very different results, and nobody has measured whether layout is the cause",
        "Customers queue, backtrack, or leave, and staff spend more time in the back than on the floor",
        "Lighting, climate control, network, or security systems vary from store to store, and nobody owns the standard",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "A customer experience read: how people enter, move, find, try, pay, and leave",
        "A technical effectiveness review of lighting, climate control, network, power, and security infrastructure",
        "A ranked findings register, each gap tied to its cost, conversion, or risk impact",
        "A clear set of next moves: fix in store, standardize across the network, or build into the next format",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        { title: "Scope", text: "We agree which stores, which formats, and which questions. Your network sets the depth, not a package." },
        { title: "Gather", text: "Store plans, sales and traffic data, maintenance and energy records, incident logs, and conversations with store leaders and teams." },
        { title: "Observe", text: "Store visits across trading hours and days, following both the customer path and the staff path, front of house and back." },
        { title: "Report", text: "A findings session with your leadership team, followed by a written report you own outright." },
      ],
    },
    included: {
      eyebrow: "What is included",
      heading: "One Engagement, Scoped To Your Network",
      label: "Single scope",
      name: "Retail Space Effectiveness Audit",
      intro: "There are no packages. Every audit covers the same core ground, and we set the depth together in the first conversation.",
      items: [
        "Customer flow, wayfinding, and dwell zones",
        "Fitting rooms, queues, and checkout capacity",
        "Back-of-house layout, receiving, and stockroom flow",
        "Lighting, climate control, and power measured against how the store trades",
        "How reliable the network, POS, and in-store technology are",
        "Security and loss prevention infrastructure, reviewed independently of any vendor",
      ],
      note: "Where we find gaps in security governance, or in the hard services, soft services, and procedures that keep stores running, we name them plainly. Fixing them belongs to our Physical Security Strategy & Assurance and Operating Standards & Governance Frameworks engagements.",
    },
    independence:
      "We sell no fixtures, no fit-outs, no systems, and no store design. Our only product is the answer, which is why you can use it to hold every vendor to account.",
    related: [
      { title: "Physical Security Strategy & Assurance", text: "Turn security findings into standards and governance that hold in every store.", href: "/offerings/physical-security-strategy-assurance" },
      { title: "Space Effectiveness Audit", text: "Apply the same lens to your head office.", href: "/offerings/space-effectiveness-audit" },
      { title: "Operating Standards & Governance Frameworks", text: "Set the service standards every store runs on.", href: "/offerings/operating-standards-governance-frameworks" },
    ],
    cta: {
      title: "Every Store Makes A Promise At The Door. We Check Whether The Building Keeps It.",
      text: "Most engagements begin with a thirty-minute conversation. No pitch deck.",
    },
  },
};
