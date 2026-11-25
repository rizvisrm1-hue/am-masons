import { Metadata } from "next";
import { businessFacts } from "@/data/business";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import { ORG_ID, ORG_NAME, SITE_URL } from "@/lib/schema";

// The site's single conversion page. /contact redirects here (next.config.mjs).
export const metadata: Metadata = {
  alternates: { canonical: "/start-a-conversation" },
  title: "Contact an Independent CRE Advisor | AM Masons Advisory",
  description:
    "Book a 30-minute introductory call or send a message to talk through a lease, workplace, FM or physical security decision. No proposal, no pitch deck.",
};

export default function StartConversation() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Start a Conversation with ${ORG_NAME}`,
    url: `${SITE_URL}/start-a-conversation`,
    about: { "@type": "ProfessionalService", "@id": ORG_ID, name: ORG_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        title="Start a Conversation"
        subtitle="Clarify your direction before making commitments."
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* What to expect + booking */}
            <div className="slide-up">
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">What to expect on the first call</h2>

              <div className="space-y-5 text-lg text-gray-600 mb-10">
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

              <Button href={businessFacts.company.bookingLink} className="w-full sm:w-auto text-lg px-8 py-4">
                Schedule a meeting
              </Button>

              <div className="mt-10 pt-8 border-t border-gray-200 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Us</h3>
                  <a
                    href={`mailto:${businessFacts.company.email}`}
                    className="text-lg text-navy-700 hover:text-navy-900 font-medium transition-colors"
                  >
                    {businessFacts.company.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Markets We Serve</h3>
                  <p className="text-lg text-gray-800 font-medium">{businessFacts.company.markets.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Connect</h3>
                  <a
                    href={businessFacts.company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-navy-700 hover:text-navy-900 font-medium transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Message form */}
            <div className="slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-white p-8 rounded-2xl shadow-card-resting border border-gray-200/80">
                <h2 className="text-[20px] font-bold text-navy-900 mb-6">Prefer to write? Send a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
