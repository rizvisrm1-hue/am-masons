import Image from "next/image";
import { businessFacts } from "@/data/business";
import { situations } from "@/data/situations";
import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";
import SituationCard from "@/components/cards/SituationCard";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": businessFacts.brandName,
    "image": "https://am-masons.com/images/hero/facilites.jpg",
    "description": "Vendor-neutral advisory for organizations of 300 to 3,000 employees on real estate, workplace, standards, and physical security decisions.",
    "url": "https://am-masons.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA"
    },
    "founder": {
      "@type": "Person",
      "name": businessFacts.founder.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-28 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/image-hero-amm.webp" 
            alt="Hero Background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gray-900/70 z-10 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 relative z-20 fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-tight mb-6 tracking-tight-header text-white drop-shadow-sm">
              Independent Workplace & Corporate Real Estate Advisory
            </h1>
            <p className="text-[18px] md:text-[20px] text-gray-300 leading-[1.6] max-w-3xl mx-auto mb-10 font-normal">
              Independent guidance for organizations making workplace, real estate, and physical security decisions, and for vendors trying to understand how those decisions get made. Based in Canada; advising across North America, Middle East, Africa, Asia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/start-a-conversation" variant="primary" className="shadow-btn-primary">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Line */}
      <section className="bg-gray-800 text-gray-300 py-6 border-b border-gray-700">
        <div className="container mx-auto px-4 text-center text-sm md:text-base font-medium">
          Canada-based • Advises internationally • Built on 18 years of workplace & security leadership at Fortune 50 scale across 20+ countries
        </div>
      </section>

      {/* Independent By Design */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2 slide-up">
              <h2 className="section-header mb-6">Independent By Design</h2>
              <div className="space-y-4 body-copy mb-10">
                <p>
                  Many firms bundle advice with design delivery, brokerage, furniture, or tech sales; AM Masons does not.
                </p>
                <p>
                  We offer vendor-agnostic guidance to define direction, make informed decisions, and build operating models that outlast projects. Our role is to help leadership choose well, not to sell solutions.
                </p>
              </div>
              <Button href="/independence-statement" variant="secondary">Learn More</Button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-card-resting bg-surface border border-gray-200/80">
                <Image 
                  src="/images/hero/facilites.jpg" 
                  alt="Advice, Not Delivery" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 z-10" />
                <div className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-md text-gray-900 p-6 md:p-8 z-20 max-w-md m-4 md:m-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40">
                  <h6 className="font-semibold text-[18px] mb-2">Advice, Not Delivery</h6>
                  <p className="body-copy text-gray-800">We advise. You choose. Delivery is never ours to keep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Do We Get Involved */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
            <h2 className="section-header mb-6">When Do We Get Involved</h2>
            <p className="subtitle">
              There are seven situations that signal it&apos;s time for an independent view. Not sure what you need? That&apos;s usually where we start.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {situations.map((situation, index) => (
              <SituationCard key={situation.id} situation={situation} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-5/12 w-full">
              <div className="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-card-resting bg-surface border border-gray-200/80">
                 <Image 
                   src="/images/hero/writing-notepad.jpg" 
                   alt="Who We Work With" 
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
            <div className="lg:w-7/12 slide-up">
              <h2 className="section-header mb-6">Who We Work With</h2>
              <p className="subtitle mb-8">
                Based in Canada, we work across four regions advising single-site and multi-site organizations.
              </p>
              
              <div className="bg-background p-6 md:p-8 rounded-2xl border border-gray-200/80 mb-8 shadow-sm">
                <h3 className="font-semibold text-[18px] text-gray-900 mb-5">Typical Client Traits:</h3>
                <ul className="space-y-4 body-copy">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 font-bold">•</span>
                    Limited internal workplace strategy capability
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 font-bold">•</span>
                    One or several offices with hybrid or evolving work models
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 font-bold">•</span>
                    An upcoming lease or major workplace decision
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 font-bold">•</span>
                    Growing operational complexity
                  </li>
                </ul>
              </div>
              
              <p className="body-copy">
                We also serve vendors, startups, and emerging firms preparing to sell into Fortune 500 and large enterprises, as well as retailers standardizing a format or refit program across stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
