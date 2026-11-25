import { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
import { offerings } from "@/data/offerings";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import { situationContent } from "@/data/situationContent";
import SituationDetail from "@/components/situations/SituationDetail";
import { getMarkdownHtml } from "@/lib/markdown";

type Props = {
  params: { slug: string };
};

// Legal pages: content ported from old.am-masons.com, in src/content/legal/<slug>.md
const legalTitles: Record<string, string> = {
  "terms-and-conditions": "Terms and Conditions",
  "legal-notice": "Legal Notice",
  "disclaimer": "Disclaimer",
  "ai-use-policy": "AI Use Policy",
  "privacy-policy": "Privacy Policy",
};
const legalDescriptions: Record<string, string> = {"terms-and-conditions": "Terms and conditions governing use of the AM Masons Advisory website and its content, including intellectual property, liability and governing law.", "legal-notice": "Legal notice for AM Masons Advisory, an independent workplace, corporate real estate and physical security advisory firm based in Canada.", "disclaimer": "Disclaimer for the AM Masons Advisory website. All content is general information only and is not professional advice for your specific situation.", "ai-use-policy": "How AM Masons Advisory uses AI tools in research, writing and client work, and the human review and confidentiality standards that apply to that use.", "privacy-policy": "How AM Masons Advisory collects, uses and protects personal information on this website, including contact forms, meeting scheduling, cookies and analytics."};
const legalPages = Object.keys(legalTitles);

export function generateStaticParams() {
  const offeringSlugs = new Set(offerings.map((o) => o.slug));
  const situationParams = situations
    .filter((s) => !offeringSlugs.has(s.slug))
    .map((s) => ({ slug: s.slug }));
  const legalParams = legalPages.map((slug) => ({ slug }));
  return [...situationParams, ...legalParams];
}

export function generateMetadata({ params }: Props): Metadata {
  const situation = situations.find((s) => s.slug === params.slug);
  
  if (situation) {
    return {
      title: { absolute: situation.metaTitle ?? `${situation.title} | AM Masons Advisory` },
      description: situation.metaDescription ?? situation.gist,
      alternates: {
        canonical: offerings.some((o) => o.slug === situation.slug)
          ? `/offerings/${situation.slug}`
          : `/${situation.slug}`,
      },
    };
  }

  if (legalPages.includes(params.slug)) {
    return {
      title: `${legalTitles[params.slug]} | AM Masons Advisory`,
      description: legalDescriptions[params.slug],
      alternates: { canonical: `/${params.slug}` },
    };
  }
  
  return { title: "Not Found" };
}

export default function RootDynamicPage({ params }: Props) {
  const situation = situations.find((s) => s.slug === params.slug);

  const content = situation ? situationContent[situation.slug] : undefined;

  if (situation && content) {
    return (
      <>
        <PageHero
          eyebrow="We get involved..."
          title={situation.title}
          subtitle={content.intro}
        />
        <SituationDetail slug={situation.slug} content={content} />
      </>
    );
  }

  if (situation) {
    return (
      <>
        <PageHero eyebrow="We get involved..." title={situation.title} subtitle={situation.gist} />
        <CTASection />
      </>
    );
  }

  if (legalPages.includes(params.slug)) {
    const html = getMarkdownHtml("legal", params.slug);
    return (
      <>
        <PageHero title={legalTitles[params.slug]} />
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            {html ? (
              <div
                className="prose prose-lg max-w-none prose-a:text-primary prose-strong:text-navy-900"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : null}
          </div>
        </section>
      </>
    );
  }

  notFound();
}
