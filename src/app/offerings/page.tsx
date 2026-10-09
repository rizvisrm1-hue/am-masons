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
        subtitle={<>Organizations engage AM Masons Advisory at different stages of their workplace and Corporate Real Estate journey.<br /><br />The catalogue is organized around four groups: Workplace &amp; Real Estate, Operations &amp; Governance, Risk &amp; Assurance, and Specialist Advisory. Start with a known requirement, or use the When Do We Get Involved pages if the problem still needs diagnosis.</>}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Independent Advisory</h2>
            <p className="text-xl text-navy-500 font-medium mb-6 uppercase tracking-wider">That Supports Better Decisions</p>
            <div className="space-y-4">
              <p className="!text-[18px] !leading-relaxed text-gray-600">
                Workplace decisions increasingly influence culture, operational performance, employee experience, and organizational cost structures.
              </p>
              <p className="!text-[18px] !leading-relaxed text-gray-600">
                AM Masons Advisory provides independent guidance that helps leadership teams define direction, evaluate trade-offs, and establish governance frameworks before significant commitments are made.
              </p>
              <p className="!text-[18px] !leading-relaxed text-gray-600">
                Engagements may begin at any stage depending on the organization’s priorities and current challenges.
              </p>
            </div>
          </div>

          <div className="space-y-20">
            {Object.entries(groupedOfferings).map(([group, groupOfferings]) => (
              <div key={group} className="slide-up">
                <h3 className="text-2xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">
                  {group}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        text="Most organizations begin with a short introductory conversation to discuss their current situation and upcoming workplace decisions. This discussion helps identify whether independent advisory support would be valuable and which engagement may be most appropriate."
        buttonText="Start a Conversation"
        buttonHref="/start-a-conversation"
      />
    </>
  );
}
