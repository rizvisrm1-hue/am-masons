import { Metadata } from "next";
import { notFound } from "next/navigation";
import { situations } from "@/data/situations";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

type Props = {
  params: { slug: string };
};

const legalPages = [
  "terms-and-conditions",
  "legal-notice",
  "disclaimer",
  "ai-use-policy",
  "privacy-policy"
];

export function generateStaticParams() {
  const situationParams = situations.map((s) => ({ slug: s.slug }));
  const legalParams = legalPages.map((slug) => ({ slug }));
  return [...situationParams, ...legalParams];
}

export function generateMetadata({ params }: Props): Metadata {
  const situation = situations.find((s) => s.slug === params.slug);
  
  if (situation) {
    return {
      title: `${situation.title} | AM Masons Advisory`,
      description: situation.gist,
    };
  }

  if (legalPages.includes(params.slug)) {
    const title = params.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return { title: `${title} | AM Masons Advisory` };
  }
  
  return { title: "Not Found" };
}

export default function RootDynamicPage({ params }: Props) {
  const situation = situations.find((s) => s.slug === params.slug);

  if (situation) {
    return (
      <>
        <PageHero 
          title={situation.title} 
          subtitle="When Do We Get Involved"
        />

        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12 slide-up">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">The Situation</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {situation.gist}
              </p>
            </div>

            <div className="mt-12 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="prose max-w-none text-gray-600">
                <p>
                  [Placeholder content for this specific situation. Owner to supply full text.]
                </p>
                <p>
                  When facing this scenario, organizations often struggle with conflicting internal priorities or a lack of objective data. An independent advisory perspective helps you clarify the underlying issues, define the right strategy, and move forward with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </>
    );
  }

  if (legalPages.includes(params.slug)) {
    const title = params.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return (
      <>
        <PageHero title={title} />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gray-50 p-8 border border-dashed border-gray-300 rounded-lg text-center slide-up">
              <h2 className="text-xl font-bold text-gray-700 mb-4">Legal Document Placeholder</h2>
              <p className="text-gray-600">
                This is a placeholder for the {title}. 
                <br /><br />
                <strong>Note to owner:</strong> The final legal text must be supplied by you or your legal counsel.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  notFound();
}
