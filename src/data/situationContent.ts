export type SituationContent = {
  intro: string;
  whenToEngage: {
    eyebrow?: string;
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
  // Optional single-scope section ("What is included"), used by some offerings.
  included?: {
    eyebrow: string;
    heading: string;
    label?: string;
    name?: string;
    intro: string;
    items: string[];
    note?: string;
  };
  independence?: string;
  related?: { title: string; text: string; href: string }[];
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

  "when-space-usage-doesnt-add-up": {
    intro:
      "Nobody has measured whether the office is actually being used the way the lease, the headcount plan, or the budget assumes it is.",
    whenToEngage: {
      heading: "Is This You?",
      text: "Utilization gets debated in meetings. It rarely gets measured. That gap is where budget assumptions, renewal decisions, and headcount plans quietly drift from reality.",
      signals: [
        "Utilization feels off, but nobody has actually measured it",
        "The office was sized for a headcount or work model that has since changed",
        "Hybrid policy exists on paper, but nobody knows what it looks like on the floor",
        "A renewal, expansion, or downsizing decision is coming and needs real data behind it",
        "Facilities or finance are asking questions nobody can answer with confidence",
        "Nobody has tested whether the space matches how people actually work day to day",
      ],
    },
    outcomes: {
      heading: "What This Reveals",
      items: [
        "An accurate picture of how the space is actually used, not how it was designed to be used",
        "Independent, vendor-agnostic data leadership can act on",
        "A clear basis for a renewal, downsizing, or reconfiguration decision",
        "Early warning before a lease or budget decision locks in the wrong assumption",
        "A documented position finance and leadership can both stand behind",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand the lease timeline, the headcount plan, and what leadership actually believes about how the space is used.",
        },
        {
          title: "Utilization Measurement",
          text: "We measure how the space is actually used against how it was designed and budgeted for.",
        },
        {
          title: "Findings & Direction",
          text: "Gaps between assumption and reality are mapped, with implications for the next decision.",
        },
        {
          title: "Direction Confirmation",
          text: "Findings are presented and confirmed with leadership before any renewal, budget, or reconfiguration decision is made.",
        },
      ],
    },
    independence:
      "AM Masons Advisory does not provide brokerage, design, product, or systems delivery. Advice is vendor-agnostic and focused solely on helping leadership make the right decision, whatever triggered it.",
    related: [
      {
        title: "Space Effectiveness Audit",
        text: "The engagement itself, full scope and what it delivers.",
        href: "/offerings/space-effectiveness-audit",
      },
      {
        title: "Workplace Direction & Alignment",
        text: "If the real question is bigger than one site.",
        href: "/offerings/workplace-direction-alignment",
      },
      {
        title: "Workplace Blueprint",
        text: "Once direction is set, translate it into an executable workplace plan.",
        href: "/offerings/workplace-blueprint",
      },
    ],
    cta: {
      title: "Ready To Find Out What The Data Actually Says?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "when-retail-performance-is-in-question": {
    intro:
      "The customer-facing floor, or the systems behind it, aren't performing, and no fixture or systems vendor is positioned to tell you why.",
    whenToEngage: {
      heading: "Is This You?",
      text: "Store performance gets attributed to the market, the format, or the team. Sometimes it is. Often it is the floor, the flow, or the systems behind the walls, and nobody independent has tested which.",
      signals: [
        "Store performance is inconsistent across a network that should behave more uniformly",
        "A format or refit program is being standardized across multiple locations",
        "Customer flow, layout, or back-of-house operations feel wrong, but nobody has tested why",
        "Store systems and fixtures were sold by vendors with a stake in the answer",
        "Leadership needs an independent read before committing to a refit or format change",
        "Nobody has tested whether the store network matches how customers actually move through it",
      ],
    },
    outcomes: {
      heading: "What This Reveals",
      items: [
        "An independent assessment of customer flow, back-of-house operations, and store systems",
        "Findings free of any fixture, design, or systems vendor's incentive",
        "A defensible basis for a refit, format, or standardization decision",
        "Clarity on whether the problem is the floor, the format, or the systems behind it",
        "A documented position leadership can stand behind across the network",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand the store network, the format history, and what leadership actually knows about where performance is falling short.",
        },
        {
          title: "Floor & Systems Assessment",
          text: "We assess customer flow, back-of-house operations, and store systems, independent of any vendor relationship.",
        },
        {
          title: "Findings & Direction",
          text: "Gaps between store design intent and actual performance are mapped, with implications for the next decision.",
        },
        {
          title: "Direction Confirmation",
          text: "Findings are presented and confirmed with leadership before any refit, format, or standardization decision is made.",
        },
      ],
    },
    independence:
      "AM Masons Advisory does not provide fixture, systems, or design delivery. Advice is vendor-agnostic and focused solely on helping leadership make the right decision, whatever triggered it.",
    related: [
      {
        title: "Retail Space Effectiveness Audit",
        text: "The engagement itself, full scope and what it delivers.",
        href: "/offerings/retail-space-effectiveness-audit",
      },
      {
        title: "Workplace Blueprint",
        text: "Once direction is set, translate it into an executable plan.",
        href: "/offerings/workplace-blueprint",
      },
      {
        title: "Workplace Direction & Alignment",
        text: "If the real question is bigger than one store or one region.",
        href: "/offerings/workplace-direction-alignment",
      },
    ],
    cta: {
      title: "Ready For An Independent Read On The Floor?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "when-standards-and-costs-need-governance": {
    intro:
      "The workplace is built. Nobody owns consistent standards, accountability, or cost discipline across sites.",
    whenToEngage: {
      heading: "Is This You?",
      text: "Every site made sense on its own at the time. Together, they add up to inconsistent FM services, standards, and costs nobody can fully explain, because nobody was ever accountable for the whole.",
      signals: [
        "Standards vary site to site, with nobody accountable for consistency",
        "Vendor relationships have grown without a governance framework behind them",
        "Facilities and real estate costs are rising and nobody can fully explain why",
        "Leadership wants senior workplace oversight without adding a full-time executive role",
        "Decisions get made site by site, with no consistent framework behind them",
        "Nobody has tested whether current standards and spend match what leadership actually intends",
      ],
    },
    outcomes: {
      heading: "What This Reveals",
      items: [
        "A governance framework that defines who owns what, and how performance is measured",
        "Independent oversight, fractional or advisory, without a full-time hire",
        "A path to consistent standards and cost discipline across every site",
        "Clarity on where vendor relationships need tighter governance",
        "A documented framework leadership and finance can both stand behind",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand the portfolio, the current standards, and what leadership actually knows about where governance is thin.",
        },
        {
          title: "Standards & Cost Review",
          text: "We review standards, vendor relationships, and cost drivers across sites, independent of any vendor relationship.",
        },
        {
          title: "Framework Design",
          text: "A governance framework is drafted, defining ownership, standards, and how performance will be measured.",
        },
        {
          title: "Direction Confirmation",
          text: "The framework is presented and confirmed with leadership before it is rolled out across sites.",
        },
      ],
    },
    independence:
      "AM Masons Advisory does not manage vendors or deliver facilities services directly. Advice is vendor-agnostic and focused solely on helping leadership make the right decision, whatever triggered it.",
    related: [
      {
        title: "Operating Standards & Governance Frameworks",
        text: "The engagement itself, full scope and what it delivers.",
        href: "/offerings/operating-standards-governance-frameworks",
      },
      {
        title: "Fractional Head of Real Estate & Workplace Services",
        text: "Senior leadership, without the full-time role.",
        href: "/offerings/fractional-head-of-real-estate-workplace-services-2",
      },
      {
        title: "Physical Security Strategy & Assurance",
        text: "For the security side of governance, specifically.",
        href: "/offerings/physical-security-strategy-assurance",
      },
    ],
    cta: {
      title: "Ready To Put A Framework Behind It?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "fractional-head-of-real-estate-workplace-services-2": {
    intro: "Senior workplace leadership, without the full-time executive commitment.",
    whenToEngage: {
      heading: "Is This The Right Moment?",
      text: "Organizations engage when they need senior leadership in workplace and real estate but are not ready for a full-time hire.",
      signals: [
        "Growing organization without senior workplace leadership in place",
        "Organizational change or consolidation requiring oversight",
        "Independent governance needed across real estate or FM decisions",
        "Ongoing workplace coordination without a permanent owner",
      ],
    },
    outcomes: {
      heading: "What This Engagement Achieves",
      items: [
        "Structured decision-making and clear accountability",
        "Consistent governance and leadership oversight",
        "Improved vendor performance and clarity",
        "Stabilized workplace operations during growth or transition",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Governance Integration",
          text: "Establish the role within existing leadership and decision structures.",
        },
        {
          title: "Operational Oversight",
          text: "Provide ongoing guidance on workplace decisions and performance.",
        },
        {
          title: "Leadership Reporting",
          text: "Regular decision memos and progress updates to the relevant leadership team.",
        },
        {
          title: "Stabilization & Continuity",
          text: "Ensure workplace operations remain aligned with organizational objectives throughout the engagement.",
        },
      ],
    },
    independence:
      "This role provides ownership and oversight, not staff augmentation or operational outsourcing.",
    related: [
      {
        title: "Operating Standards & Governance Frameworks",
        text: "Consistent, predictable workplace operations.",
        href: "/offerings/operating-standards-governance-frameworks",
      },
      {
        title: "Workplace Blueprint",
        text: "Translate leadership direction into executable plans.",
        href: "/offerings/workplace-blueprint",
      },
      {
        title: "Physical Security Strategy & Assurance",
        text: "Security governance aligned with workplace experience.",
        href: "/offerings/physical-security-strategy-assurance",
      },
    ],
    cta: {
      title: "Ready To Bring Senior Leadership To Your Workplace?",
      text: "Most engagements begin with a short conversation to understand your current challenges and objectives.",
    },
  },

  "when-physical-security-needs-an-independent-check": {
    intro:
      "Nobody outside the incumbent vendor has tested whether the physical security program is actually sound.",
    whenToEngage: {
      heading: "Is This You?",
      text: "Physical security programs are usually judged by the people who built them. That is not the same as an independent check, and the gap only shows up when something goes wrong.",
      signals: [
        "Physical security standards were set by the vendor delivering them",
        "Nobody has independently reviewed access control, camera coverage, or incident response in years",
        "A governance gap surfaced, a lapse, a near-miss, an audit finding, and leadership wants an independent look",
        "Sites are inconsistent in how security is designed, staffed, or governed",
        "Leadership needs assurance the program will hold up under real scrutiny",
        "Nobody has tested whether current security spend matches the actual risk",
      ],
    },
    outcomes: {
      heading: "What This Reveals",
      items: [
        "An independent, vendor-neutral assessment of physical security governance and standards",
        "Clear findings on where the program is sound and where it isn't",
        "A defensible position for leadership, the board, or a parent company",
        "Clarity on whether current spend matches the actual risk",
        "A documented position leadership can stand behind under real scrutiny",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand the sites, the incumbent vendor relationships, and what leadership actually knows about where the program stands.",
        },
        {
          title: "Security Program Review",
          text: "We assess access control, camera coverage, incident response, and governance, independent of any vendor relationship.",
        },
        {
          title: "Findings & Direction",
          text: "Gaps between the current program and what sound governance requires are mapped, with implications for the next decision.",
        },
        {
          title: "Direction Confirmation",
          text: "Findings are presented and confirmed with leadership before any change to the security program is made.",
        },
      ],
    },
    independence:
      "AM Masons Advisory does not deliver security systems, staffing, or monitoring services. Advice is vendor-agnostic and focused solely on helping leadership make the right decision, whatever triggered it.",
    related: [
      {
        title: "Physical Security Strategy & Assurance",
        text: "The engagement itself, full scope and what it delivers.",
        href: "/offerings/physical-security-strategy-assurance",
      },
      {
        title: "Operating Standards & Governance Frameworks",
        text: "For the broader governance picture.",
        href: "/offerings/operating-standards-governance-frameworks",
      },
      {
        title: "Fractional Head of Real Estate & Workplace Services",
        text: "Senior leadership, without the full-time role.",
        href: "/offerings/fractional-head-of-real-estate-workplace-services-2",
      },
    ],
    cta: {
      title: "Ready For An Independent Check?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },

  "before-selling-into-an-enterprise-buyer": {
    intro:
      "You're preparing to sell workplace, real estate, facilities, or physical security products into a Fortune 500, and you don't know how they'll actually evaluate you.",
    whenToEngage: {
      heading: "Is This You?",
      text: "Enterprise buyers evaluate outside providers very differently from how they get pitched to. Most vendors learn the real process the hard way, mid-deal, after it has already stalled.",
      signals: [
        "You're a vendor or startup targeting enterprise or Fortune 500 accounts for the first time",
        "You don't know who inside a large organization actually owns the buying decision",
        "Deals stall in procurement or governance review and nobody can explain why",
        "You've never seen the buying process from the inside of an enterprise real estate or facilities function",
        "You need intelligence on how enterprise buyers actually evaluate and govern outside providers",
        "Nobody on your team has sat on the buyer's side of this kind of decision",
      ],
    },
    outcomes: {
      heading: "What This Reveals",
      items: [
        "An insider's view of how enterprise workplace and real estate functions actually evaluate vendors",
        "What governance, procurement, and risk review will actually test for",
        "A sharper go-to-market position before you're in the room",
        "Clarity on who actually owns the decision, and what they need to see",
        "A documented position your team can sell against with confidence",
      ],
    },
    steps: {
      heading: "How It Works",
      items: [
        {
          title: "Intake & Context Setting",
          text: "We understand your offering, your target accounts, and what your team currently believes about how the buying process works.",
        },
        {
          title: "Buyer-Side Intelligence",
          text: "We map how enterprise workplace and real estate functions actually evaluate and govern outside providers.",
        },
        {
          title: "Positioning & Gaps",
          text: "Gaps between your current pitch and what enterprise buyers actually test for are mapped.",
        },
        {
          title: "Direction Confirmation",
          text: "Recommendations are presented and confirmed with your team before your next enterprise pitch.",
        },
      ],
    },
    independence:
      "AM Masons Advisory does not broker introductions or manage deals on your behalf. Advice is independent and focused solely on helping your team understand how enterprise buyers actually decide.",
    related: [
      {
        title: "Enterprise Readiness Advisory",
        text: "The engagement itself, full scope and what it delivers.",
        href: "/offerings/enterprise-readiness-advisory",
      },
      {
        title: "Workplace Direction & Alignment",
        text: "For occupier-side engagements, if relevant to your own offering.",
        href: "/offerings/workplace-direction-alignment",
      },
      {
        title: "Operating Standards & Governance Frameworks",
        text: "To understand the governance frameworks buyers hold vendors to.",
        href: "/offerings/operating-standards-governance-frameworks",
      },
    ],
    cta: {
      title: "Ready To See It From The Inside?",
      text: "Most engagements begin with a short conversation to find the right starting point.",
    },
  },
};
