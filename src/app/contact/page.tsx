import { Metadata } from "next";
import { businessFacts } from "@/data/business";
import { faqs } from "@/data/faqs";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | AM Masons Advisory",
  description: "Get in touch with AM Masons Advisory to talk through your corporate real estate or workplace strategy challenge.",
};

export default function Contact() {
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
        title="Contact Us" 
        subtitle="We'd love to hear from you! Get in touch." 
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Start a Conversation */}
            <div className="slide-up">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">
                Start a Conversation
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Markets We Serve
                  </h3>
                  <p className="text-lg text-gray-800 font-medium">
                    {businessFacts.company.markets.join(", ")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Email Us
                  </h3>
                  <a 
                    href={`mailto:${businessFacts.founder.email}`} 
                    className="text-lg text-navy-700 hover:text-navy-900 font-medium transition-colors"
                  >
                    {businessFacts.founder.email}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Connect
                  </h3>
                  <a 
                    href={businessFacts.company.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg text-navy-700 hover:text-navy-900 font-medium transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                    LinkedIn
                  </a>
                </div>

                <div className="pt-6">
                  <Button href={businessFacts.company.bookingLink} className="w-full sm:w-auto">
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </div>

            {/* Optional Contact Form */}
            <div className="slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-6">Send us a message</h3>
                <form className="space-y-4" action="/api/contact" method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy-500 focus:border-navy-500"></textarea>
                  </div>
                  <Button type="submit" className="w-full">Submit</Button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our independent advisory approach and how we work with clients.
            </p>
          </div>
          
          <div className="slide-up" style={{ animationDelay: '0.1s' }}>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
