import { Metadata } from "next";
import { businessFacts } from "@/data/business";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Start a Conversation | AM Masons Advisory",
  description: "Schedule a brief introductory call to discuss your corporate real estate or workplace strategy challenge.",
};

export default function StartConversation() {
  return (
    <>
      <PageHero 
        title="Start a Conversation" 
        subtitle="Clarify your direction before making commitments." 
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm mb-12 slide-up">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">What to expect on the first call</h2>
            
            <div className="space-y-6 text-lg text-gray-600 mb-10">
              <p>
                If a workplace decision, lease event, or transition is near, an independent view helps clarify direction before commitments.
              </p>
              <p>
                Our first conversation is simple. We&apos;ll ask questions about your portfolio size, actual attendance, and what&apos;s driving the discussion.
              </p>
              <p>
                <strong>There is no proposal or pitch deck.</strong> This is just an honest conversation to see if there&apos;s a fit between your challenges and our independent advisory approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
              <Button href={businessFacts.company.bookingLink} className="w-full sm:w-auto text-lg px-8 py-4">
                Schedule a meeting
              </Button>
              <span className="text-gray-400 font-medium">or</span>
              <a 
                href={`mailto:${businessFacts.founder.email}`}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
              >
                Email us directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
