import Image from "next/image";
import { Metadata } from "next";
import { businessFacts } from "@/data/business";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About | AM Masons Advisory",
  description: "Meet the founder and the independent, vendor-neutral approach behind AM Masons Advisory's corporate real estate and workplace advice.",
};

export default function About() {
  return (
    <>
      <PageHero 
        title="About" 
        subtitle="Independent advice for workplace decisions that matter." 
      />

      {/* AM Masons Advisory */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2 w-full">
              <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-card-resting bg-surface border border-gray-200/80">
                <Image 
                  src="/images/hero/about-1.jpg" 
                  alt="About AM Masons Advisory" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
            <div className="lg:w-1/2 slide-up">
              <h2 className="section-header mb-6">AM Masons Advisory</h2>
              <div className="space-y-4 body-copy">
                <p>
                  We are an independent advisory firm for organizations navigating complex workplace, real estate, and operational decisions.
                </p>
                <p>
                  Our work focuses on helping leaders set direction, clarify priorities, and establish governance so strategies stay effective long after they are implemented.
                </p>
                <p>
                  Our focus is solely on decisions before execution. We do not engage in design delivery or brokerage, allowing us to sit on the same side of the table as our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent by Design */}
      <section className="py-20 md:py-28 bg-background border-y border-gray-200/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="lg:w-1/2 slide-up">
              <h2 className="section-header mb-6">Independent by Design</h2>
              <div className="space-y-4 body-copy">
                <p>
                  We operate entirely independently of brokerage, design, furniture procurement, technology implementation, and construction.
                </p>
                <p>
                  This model ensures our advice stays rigorously vendor-agnostic. Our recommendations rest on your operational reality, culture, and long-term sustainability rather than downstream revenue incentives.
                </p>
                <p>
                  Clients keep full control of their delivery partners, and decisions are made deliberately, with clarity and confidence.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-card-resting bg-surface border border-gray-200/80">
                <Image 
                  src="/images/hero/furniture.jpg" 
                  alt="Independent By Design" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Led By: {businessFacts.founder.name}</h2>
          <p className="text-navy-500 font-semibold mb-8 uppercase tracking-wider">Founder</p>
          
          <div className="text-lg text-gray-600 space-y-6 text-left mb-10 bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <p>
              Rashid left the Fortune 50 after 18 years leading workplace services and physical security (last role Global Director, overseeing 20+ countries) to advise from the outside on the same decisions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy-900 font-medium">
              <li>Which locations to hold</li>
              <li>How to size them appropriately</li>
              <li>Which standards to run across the portfolio</li>
              <li>How to govern vendors without becoming dependent on them</li>
            </ul>
            <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
              Credentials: {businessFacts.founder.credentials}
            </p>
          </div>
          
          <Button href={businessFacts.founder.linkedin} variant="outline">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            Connect on LinkedIn
          </Button>
        </div>
      </section>

      {/* Get in Touch CTA */}
      <CTASection 
        title="Get in Touch"
        text="Clear leadership direction makes strategies more effective and operations sustainable."
      />
    </>
  );
}
