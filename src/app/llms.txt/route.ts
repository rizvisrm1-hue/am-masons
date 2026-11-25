import { offerings } from "@/data/offerings";
import { situations } from "@/data/situations";
import { insights } from "@/data/insights";
import { faqs } from "@/data/faqs";
import { businessFacts } from "@/data/business";
import { SITE_URL, ORG_NAME, FOUNDER_NAME } from "@/lib/schema";

// /llms.txt: a plain-language map of the site for AI assistants (llmstxt.org format).
// Built from the same data as the pages, so it stays current when content changes.
export const dynamic = "force-static";

export function GET() {
  const offeringSlugs = new Set(offerings.map((o) => o.slug));
  const lines: string[] = [
    `# ${ORG_NAME}`,
    "",
    `> ${ORG_NAME} is an independent, vendor-agnostic advisory firm for corporate real estate, workplace strategy, facilities operating standards and physical security decisions. It provides advice only: no brokerage, design, construction, product or software sales, and no vendor commissions or referral fees. Based in Canada, it advises organizations across ${businessFacts.company.markets.join(", ")}.`,
    "",
    `Founded by ${FOUNDER_NAME} (${businessFacts.founder.credentials}), who spent 18 years leading workplace services and physical security at a Fortune 50 company, most recently as Global Director, working across more than 20 countries. Clients are typically organizations of 300 to 3,000 employees facing a lease event, a hybrid or work-model change, space utilization questions, multi-site governance problems or a physical security review, plus vendors selling into enterprise real estate, FM and security buyers.`,
    "",
    "## Offerings",
    "",
    ...offerings.map((o) => `- [${o.title}](${SITE_URL}/offerings/${o.slug}): ${o.metaDescription}`),
    "",
    "## When to engage an independent advisor",
    "",
    ...situations
      .filter((s) => !offeringSlugs.has(s.slug))
      .map((s) => `- [${s.title}](${SITE_URL}/${s.slug}): ${s.metaDescription ?? s.gist}`),
    "",
    "## Insights",
    "",
    ...insights.map((p) => `- [${p.title}](${SITE_URL}/insights/${p.slug}): ${p.metaDescription ?? p.excerpt}`),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.map((f) => `- ${f.question} ${f.answer}`),
    "",
    "## Optional",
    "",
    `- [About ${ORG_NAME}](${SITE_URL}/about): The founder, his experience and the firm's conflict-free operating model.`,
    `- [Independence Statement](${SITE_URL}/independence-statement): Why advice is kept separate from delivery, and how the firm stays vendor-neutral.`,
    `- [Start a Conversation](${SITE_URL}/start-a-conversation): Book a 30-minute introductory call or send a message. Email: ${businessFacts.company.email}.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
