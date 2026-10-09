export type SituationTier = {
  level: string;
  name: string;
  bestFor: string;
  includes: string[];
  notIncluded?: string;
  recommended?: boolean;
};

export type SituationContent = {
  intro: string;
  whenToEngage: {
    heading: string;
    text: string;
    signals: string[];
  };
  outcomes: {
    heading: string;
    items: string[];
  };
  steps: {
    heading: string;
    items: { title: string; text: string }[];
  };
  tiers: {
    heading: string;
    items: SituationTier[];
  };
  independence: string;
  related: { title: string; text: string; href: string }[];
  cta: { title: string; text: string };
};

export const situationContent: Record<string, SituationContent> = {
  "before-you-sign-a-lease": {
    intro:
      "By the time terms are being negotiated, or a portfolio move gets signed off, the location decision has usually already been made for you, by default, not by design.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "A lease decision looks like a real estate event. It is actually a decision about where the business will operate for years, made under a deadline nobody planned to think about seriously.",
      signals: [
        "A lease event, portfolio consolidation, expansion, or M&A-driven footprint change is 18 to 36 months out",
        "The current location was chosen for a business that has since changed",
        "Leadership has not agreed on headcount, hybrid policy, or growth plans the space needs to support",
        "A broker or internal real estate team is already active on the decision, and nobody outside it is testing the assumptions",
        "The shortlist, or the consolidation plan, was built around availability or convenience, not fit",
        "Nobody has tested whether this location and footprint match how the organization actually operates",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "A clear, leadership-agreed position on what the space actually needs to do",
        "Independent testing of the assumptions behind the shortlist, before terms get negotiated",
        "A defensible answer for the board or the parent company on why this location, this footprint, this term",
        "A starting point that protects, rather than competes with, your broker relationship",
        "A documented position leadership can stand behind when the lease event arrives",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand the lease timeline, the current location, and what leadership actually knows about the decision ahead.",
        },
        {
          title: "Assumption Testing",
          text: "We test the shortlist, the broker's framing, and the assumptions behind them against how the organization actually operates.",
        },
        {
          title: "Direction Framing",
          text: "Trade-offs, risks, and a defensible position are mapped before terms get negotiated.",
        },
        {
          title: "Direction Confirmation",
          text: "Recommendations are presented and confirmed with leadership before anyone sits down with the landlord.",
        },
      ],
    },
    tiers: {
      heading: "Choose The Right Scope",
      items: [
        {
          level: "Lite",
          name: "Executive Read",
          bestFor:
            "Best for leadership wanting a fast, senior read on whether the current shortlist actually fits.",
          includes: [
            "Structured intake",
            "Review of the current shortlist",
            "Concise direction memo",
            "Executive readout",
          ],
          notIncluded: "workshops, broad stakeholder engagement, or options modelling.",
        },
        {
          level: "Standard",
          name: "Pre-Lease Direction",
          bestFor:
            "Best for organizations with a lease event 18 to 36 months out and no agreed position yet.",
          includes: [
            "Executive and cross-functional interviews",
            "Leadership alignment session",
            "Location and footprint principles",
            "Options with implications",
            "Decision log documentation",
          ],
          recommended: true,
        },
        {
          level: "Intensive",
          name: "Multi-Site Lease Strategy",
          bestFor:
            "Best for portfolios negotiating several lease events at once, or politically complex environments.",
          includes: [
            "Expanded stakeholder engagement",
            "Scenario-based options",
            "Multiple working sessions",
            "Enhanced decision documentation",
            "Linkage to operating and security considerations",
          ],
        },
      ],
    },
    independence:
      "AM Masons Advisory does not provide brokerage, design, or product delivery. Advice is vendor-agnostic and focused solely on helping leadership make the right decision before terms get negotiated.",
    related: [
      {
        title: "Workplace Direction & Alignment",
        text: "Establish leadership clarity across the full range of workplace and real estate decisions, not just the lease.",
        href: "/offerings/workplace-direction-alignment",
      },
      {
        title: "Space Effectiveness Audit",
        text: "Find out whether your current space is working as hard as the lease you signed for it.",
        href: "/offerings/space-effectiveness-audit",
      },
      {
        title: "Workplace Blueprint",
        text: "Once direction is set, translate it into an executable workplace plan.",
        href: "/offerings/workplace-blueprint",
      },
    ],
    cta: {
      title: "Ready To Test Your Assumptions?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },
};
