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
      heading: "When Should You Get Independent Advice Before a Lease Decision?",
      text: "Get it 18 to 36 months before the lease event, before a shortlist is built. At that point you can still test headcount, hybrid policy and footprint assumptions, and go into negotiations with a position leadership has agreed. Wait until terms are on the table and the location decision has already been made for you, by default.",
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
      heading: "What Should Be Settled Before You Sign or Change a Lease?",
      items: [
        "A clear, leadership-agreed position on what the space actually needs to do",
        "Independent testing of the assumptions behind the shortlist, before terms get negotiated",
        "A defensible answer for the board or the parent company on why this location, this footprint, this term",
        "A starting point that protects, rather than competes with, your broker relationship",
        "A documented position leadership can stand behind when the lease event arrives",
      ],
    },
    steps: {
      heading: "How Does Independent Lease Decision Support Work?",
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
      heading: "Is Your Office Used the Way Your Lease Assumes?",
      text: "In most organizations, nobody knows. Utilization gets debated in meetings and rarely measured. The office was sized for a headcount and work model that hybrid policy has since changed. Until someone measures real usage by floor, day and type of space, renewal, budget and headcount decisions rest on assumptions.",
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
      heading: "What Does Measuring Real Space Usage Reveal?",
      items: [
        "An accurate picture of how the space is actually used, not how it was designed to be used",
        "Independent, vendor-agnostic data leadership can act on",
        "A clear basis for a renewal, downsizing, or reconfiguration decision",
        "Early warning before a lease or budget decision locks in the wrong assumption",
        "A documented position finance and leadership can both stand behind",
      ],
    },
    steps: {
      heading: "How Is Real Office Space Usage Measured?",
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
      heading: "Is the Store Itself Holding Back Performance?",
      text: "Often, yes, and few retailers test it. Weak results get blamed on the market, the format or the team, while the cause sits in layout, customer flow, back-of-house operations or the systems behind the walls. An independent review separates the two before you commit capital to a refit or a new format.",
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
      heading: "What Does an Independent Store Review Reveal?",
      items: [
        "An independent assessment of customer flow, back-of-house operations, and store systems",
        "Findings free of any fixture, design, or systems vendor's incentive",
        "A defensible basis for a refit, format, or standardization decision",
        "Clarity on whether the problem is the floor, the format, or the systems behind it",
        "A documented position leadership can stand behind across the network",
      ],
    },
    steps: {
      heading: "How Does an Independent Retail Review Work?",
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
      heading: "Are FM Services and Costs Drifting Across Your Sites?",
      text: "If every site sets its own standards and manages its own vendors, yes. Each decision made sense locally. Together they produce uneven service, rising costs nobody can fully explain, and vendors grading their own performance. The drift stops when someone owns the whole portfolio and holds every site and supplier to one standard.",
      signals: [
        "Standards vary site to site, with nobody accountable for consistency",
        "Vendor relationships have grown without a governance framework behind them",
        "Facilities and real estate costs are rising and nobody can fully explain why",
        "Decisions get made site by site, with no consistent framework behind them",
        "Nobody has tested whether current standards and spend match what leadership actually intends",
      ],
    },
    outcomes: {
      heading: "What Does an FM Governance Review Reveal?",
      items: [
        "A governance framework that defines who owns what, and how performance is measured",
        "Independent oversight, fractional or advisory, without a full-time hire",
        "A path to consistent standards and cost discipline across every site",
        "Clarity on where vendor relationships need tighter governance",
        "A documented framework leadership and finance can both stand behind",
      ],
    },
    steps: {
      heading: "How Do You Bring FM Standards and Costs Under Control?",
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
        href: "/offerings/fractional-head-of-real-estate-workplace",
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

  "fractional-head-of-real-estate-workplace": {
    intro: "Senior workplace leadership, without the full-time executive commitment.",
    whenToEngage: {
      heading: "When Does a Fractional Head of Real Estate Make Sense?",
      text: "When real estate and workplace decisions are too significant to run as a side duty for Finance, HR or Operations, but do not justify a permanent executive. The role is fixed term, never longer than 18 months, with an agreed outcome. It owns decisions, sets governance and oversees vendors. It is not a secondment.",
      signals: [
        "Growing organization without senior workplace leadership in place",
        "Organizational change or consolidation requiring oversight",
        "Independent governance needed across real estate or FM decisions",
        "Ongoing workplace coordination without a permanent owner",
      ],
    },
    outcomes: {
      heading: "What Does a Fractional Head of Real Estate Deliver?",
      items: [
        "Structured decision-making and clear accountability",
        "Consistent governance and leadership oversight",
        "Improved vendor performance and clarity",
        "Stabilized workplace operations during growth or transition",
      ],
    },
    steps: {
      heading: "How Does a Fractional Real Estate Engagement Work?",
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
      heading: "Has Anyone Independently Tested Your Security Program?",
      text: "In most organizations, no. Security programs are usually judged by the integrator or guard company that built and runs them. An independent check tests access control, camera coverage, incident response and governance against your actual risk, with no hardware or guarding contract at stake, before a lapse or audit finding forces the question.",
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
      heading: "What Does an Independent Security Review Reveal?",
      items: [
        "An independent, vendor-neutral assessment of physical security governance and standards",
        "Clear findings on where the program is sound and where it isn't",
        "A defensible position for leadership, the board, or a parent company",
        "Clarity on whether current spend matches the actual risk",
        "A documented position leadership can stand behind under real scrutiny",
      ],
    },
    steps: {
      heading: "How Does an Independent Security Check Work?",
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
        href: "/offerings/fractional-head-of-real-estate-workplace",
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
      heading: "Why Do Enterprise Deals Stall in Procurement?",
      text: "Because enterprise buyers test what vendors rarely prepare for. Real estate, facilities and security teams assess governance, risk, operational fit and supplier accountability, not just the product. Vendors who pitch features to the wrong person stall in procurement or security review, usually mid-deal, and the buyer rarely tells them why.",
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
      heading: "What Do Enterprise Buyers Actually Test Vendors For?",
      items: [
        "An insider's view of how enterprise workplace and real estate functions actually evaluate vendors",
        "What governance, procurement, and risk review will actually test for",
        "A sharper go-to-market position before you're in the room",
        "Clarity on who actually owns the decision, and what they need to see",
        "A documented position your team can sell against with confidence",
      ],
    },
    steps: {
      heading: "How Can Vendors Prepare for Enterprise Buyers?",
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
