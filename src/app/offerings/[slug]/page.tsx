import { Metadata } from "next";
import { notFound } from "next/navigation";
import { offerings } from "@/data/offerings";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SituationDetail from "@/components/situations/SituationDetail";
import { offeringContent } from "@/data/offeringContent";
import { SITE_URL, ORG_ID, ORG_NAME } from "@/lib/schema";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return offerings.map((offering) => ({
    slug: offering.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const offering = offerings.find((o) => o.slug === params.slug);
  
  if (!offering) {
    return { title: "Offering Not Found" };
  }
  
  return {
    title: `${offeringContent[offering.slug]?.pageTitle ?? offering.title} | AM Masons Advisory`,
    description: offering.description,
    alternates: { canonical: `/offerings/${offering.slug}` },
  };
}

export default function OfferingDetail({ params }: Props) {
  const offering = offerings.find((o) => o.slug === params.slug);

  if (!offering) {
    notFound();
  }

  const content = offeringContent[offering.slug];
  const name = content?.pageTitle ?? offering.title;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/offerings/${offering.slug}#service`,
    name,
    serviceType: name,
    category: offering.group,
    description: offering.description,
    url: `${SITE_URL}/offerings/${offering.slug}`,
    provider: { "@type": "ProfessionalService", "@id": ORG_ID, name: ORG_NAME },
    areaServed: ["North America", "Middle East", "Africa", "Asia"].map((n) => ({
      "@type": "Place",
      name: n,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHero
        eyebrow={offering.group}
        title={content?.pageTitle ?? offering.title}
        subtitle={content?.intro ?? offering.description}
        backgroundImage={offering.image}
      />
      {content ? (
        <SituationDetail content={content} />
      ) : (
        <CTASection buttonText="Start a Conversation" buttonHref="/start-a-conversation" />
      )}
    </>
  );
}
