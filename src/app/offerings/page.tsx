import { Metadata } from "next";
import { offerings } from "@/data/offerings";
import PageHero from "@/components/ui/PageHero";
import OfferingCard from "@/components/cards/OfferingCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Offerings | AM Masons Advisory",
  description: "Independent, vendor-neutral advisory services across real estate, workplace, standards, and physical security.",
};

export default function Offerings() {
  // Group offerings for better organization
  const groupedOfferings = offerings.reduce((acc, offering) => {
    if (!acc[offering.group]) {
      acc[offering.group] = [];
    }
    acc[offering.group].push(offering);
    return acc;
  }, {} as Record<string, typeof offerings>);

  return (
    <>
      <PageHero 
        title="Our Advisory Offerings" 
        subtitle="Clients engage at different stages. Start with a known need or use our 'When Do We Get Involved' pages to diagnose." 
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Independent Advisory</h2>
            <p className="text-xl text-navy-500 font-medium mb-6 uppercase tracking-wider">That Supports Better Decisions</p>
            <p className="text-lg text-gray-600">
              Workplace decisions affect culture, performance, employee experience, and cost. We help leaders define direction, weigh trade-offs, and set governance before major commitments. Engagement can start at any stage.
            </p>
          </div>

          <div className="space-y-20">
            {Object.entries(groupedOfferings).map(([group, groupOfferings]) => (
              <div key={group} className="slide-up">
                <h3 className="text-2xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">
                  {group}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupOfferings.map((offering) => (
                    <OfferingCard key={offering.id} offering={offering} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Not Sure Where to Start?"
        text="Most clients begin with a short intro conversation to see whether advisory help fits and which engagement suits."
        buttonText="Start a Conversation"
        buttonHref="/start-a-conversation"
      />
    </>
  );
}
