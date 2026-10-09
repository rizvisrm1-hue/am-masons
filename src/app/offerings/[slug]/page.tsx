import { Metadata } from "next";
import { notFound } from "next/navigation";
import { offerings } from "@/data/offerings";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SituationDetail from "@/components/situations/SituationDetail";
import { offeringContent } from "@/data/offeringContent";

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
  };
}

export default function OfferingDetail({ params }: Props) {
  const offering = offerings.find((o) => o.slug === params.slug);

  if (!offering) {
    notFound();
  }

  const content = offeringContent[offering.slug];

  return (
    <>
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
