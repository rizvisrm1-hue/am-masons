import { businessFacts } from "@/data/business";

// Single source of truth for the site's structured data identity.
// Every page links back to these @id nodes so search engines and AI
// answer engines resolve "AM Masons Advisory" and its founder as one
// consistent entity (and not as anything to do with Freemasonry).

export const SITE_URL = "https://www.am-masons.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORG_NAME = "AM Masons Advisory";
export const FOUNDER_NAME = businessFacts.founder.name;

const credential = (name: string) => ({
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "Professional certification",
  name,
});

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: ORG_NAME,
      alternateName: "AM Masons",
      description:
        "Independent, vendor-agnostic advisory firm for corporate real estate, workplace strategy, facilities operating standards and physical security decisions. Pure advice: no brokerage, design, construction, product or software sales, and no vendor commissions or referral fees.",
      slogan: "Advice, Not Delivery",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/logo-dark.png`,
      },
      image: `${SITE_URL}/images/hero/og-default.jpg`,
      email: businessFacts.company.email,
      address: { "@type": "PostalAddress", addressCountry: "CA" },
      areaServed: [
        { "@type": "Place", name: "North America" },
        { "@type": "Place", name: "Middle East" },
        { "@type": "Place", name: "Africa" },
        { "@type": "Place", name: "Asia" },
      ],
      knowsAbout: [
        "Corporate real estate advisory",
        "Workplace strategy",
        "Space utilization",
        "Lease renewal and relocation strategy",
        "Hybrid work and workplace operating models",
        "Facilities management governance",
        "Physical security strategy and assurance",
        "Retail space effectiveness",
        "Enterprise readiness for workplace and security vendors",
      ],
      founder: { "@id": FOUNDER_ID },
      sameAs: [businessFacts.company.linkedin],
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: FOUNDER_NAME,
      alternateName: ["Rashid Rizvi", "Rashid Masood Rizvi"],
      jobTitle: "Founder",
      description:
        "Founder of AM Masons Advisory. 18 years leading workplace services and physical security at a Fortune 50 company, most recently as Global Director, working across more than 20 countries.",
      url: `${SITE_URL}/about`,
      worksFor: { "@id": ORG_ID },
      hasCredential: [
        credential("Master of Corporate Real Estate (MCR)"),
        credential("Project Management Professional (PMP)"),
        credential("HSE Auditor"),
      ],
      knowsAbout: [
        "Corporate real estate",
        "Workplace services",
        "Physical security",
        "Facilities management",
        "Vendor governance",
      ],
      sameAs: [businessFacts.founder.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: ORG_NAME,
      url: SITE_URL,
      inLanguage: "en-CA",
      publisher: { "@id": ORG_ID },
    },
  ],
};
