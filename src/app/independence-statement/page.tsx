import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Independence Statement | AM Masons Advisory",
  description: "Why independent, vendor-neutral advisory matters for corporate real estate and workplace decisions.",
};

export default function IndependenceStatement() {
  return (
    <>
      <PageHero 
        title="Independence Statement" 
        subtitle="Our commitment to vendor-neutral, objective advice." 
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl slide-up">
          <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-p:text-gray-600">
            <h2>The Value of Independence</h2>
            <p>
              In the corporate real estate and workplace industry, advice is frequently bundled with downstream services. Many firms offer strategy as a loss-leader or a precursor to securing lucrative design delivery, brokerage, furniture procurement, technology implementation, or construction management contracts.
            </p>
            <p>
              <strong>AM Masons Advisory does not.</strong>
            </p>
            <p>
              We are an independent advisory firm. Our business model is deliberately structured to decouple strategic advice from execution. We do not lease space, we do not design offices, we do not sell furniture, and we do not manage construction.
            </p>
            
            <h2>Why This Matters to You</h2>
            <p>
              Because we have no financial stake in the outcome of your decisions, our advice remains rigorously objective and vendor-agnostic. 
            </p>
            <ul>
              <li>We won&apos;t recommend a relocation if optimizing your current footprint is the better operational choice.</li>
              <li>We won&apos;t suggest a costly redesign if a change in operating standards solves the problem.</li>
              <li>We won&apos;t push proprietary technology when standard solutions suffice.</li>
            </ul>
            <p>
              Our recommendations rest entirely on your operational reality, your culture, and long-term sustainability. We sit on the same side of the table as our clients, helping leadership set direction, weigh trade-offs, and establish governance before making major commitments.
            </p>
            
            <h2>You Keep Control</h2>
            <p>
              By separating advisory from delivery, our clients maintain complete control over their delivery partners. When it is time to execute, you can select the brokers, designers, and vendors that best fit your specific needs, armed with a clear, objective brief and decision framework that we help you create.
            </p>
            <p>
              We advise. You choose. Delivery is never ours to keep.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
