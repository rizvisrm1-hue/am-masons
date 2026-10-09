import { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
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
const legalPages = Object.keys(legalTitles);

export function generateStaticParams() {
  const situationParams = situations.map((s) => ({ slug: s.slug }));
  const legalParams = legalPages.map((slug) => ({ slug }));
  return [...situationParams, ...legalParams];
}

export function generateMetadata({ params }: Props): Metadata {
  const situation = situations.find((s) => s.slug === params.slug);
  
  if (situation) {
    return {
      title: `${situation.title} | AM Masons Advisory`,
      description: situation.gist,
    };
  }

  if (legalPages.includes(params.slug)) {
    return { title: `${legalTitles[params.slug]} | AM Masons Advisory` };
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
        <SituationDetail content={content} />
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
                className="prose prose-lg max-w-none prose-a:text-primary prose-strong:text-gray-900"
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
