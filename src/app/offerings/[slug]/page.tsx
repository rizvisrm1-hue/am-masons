import { Metadata } from "next";
import { notFound } from "next/navigation";
import { offerings } from "@/data/offerings";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

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
    title: `${offering.title} | AM Masons Advisory`,
    description: offering.description,
  };
}

export default function OfferingDetail({ params }: Props) {
  const offering = offerings.find((o) => o.slug === params.slug);

  if (!offering) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={offering.title} 
        subtitle={offering.group}
        backgroundImage={offering.image}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 slide-up">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {offering.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-3 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Typical Triggers
              </h2>
              <ul className="space-y-4 text-gray-600">
                {offering.triggers.map((trigger, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-navy-500 mr-3 mt-1 font-bold">•</span>
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-50 p-8 rounded-lg border border-navy-100 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-3 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Deliverables & Outcome
              </h2>
              <p className="text-lg font-medium text-navy-800">
                {offering.outcome}
              </p>
            </div>
          </div>

          <div className="mt-16 slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">What the Engagement Covers</h2>
            <div className="prose max-w-none text-gray-600">
              <p>
                [Placeholder: detailed description of the engagement process. Owner to supply final text.]
              </p>
              <p>
                Our independent approach ensures that every recommendation is based on your operational reality rather than downstream revenue incentives. We work closely with your leadership team to analyze the current state, establish the right criteria, and present vendor-agnostic strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to align your direction?"
        buttonText="Start a Conversation"
        buttonHref="/start-a-conversation"
      />
    </>
  );
}
