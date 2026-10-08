import { Metadata } from "next";
import { faqs } from "@/data/faqs";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AM Masons Advisory",
  description: "Answers to common questions about AM Masons Advisory, independent workplace and corporate real estate advice.",
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Common questions about our independent advisory approach and how we work with clients." 
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl slide-up">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection 
        title="Still have questions?"
        text="We're happy to discuss your specific situation. No pitch, just an honest conversation."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
