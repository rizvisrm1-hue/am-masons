import { Metadata } from "next";
import { insights, insightsIntro } from "@/data/insights";
import PageHero from "@/components/ui/PageHero";
import PostCard from "@/components/cards/PostCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Insights | AM Masons Advisory",
  description: "Perspectives on workplace, real estate, and physical security decisions.",
};

export default function Insights() {
  return (
    <>
      <PageHero 
        title="Insights" 
        subtitle="Perspectives on workplace, real estate, and physical security decisions." 
      />

      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl text-center slide-up space-y-5">
          {insightsIntro.map((para) => (
            <p key={para} className="!text-[18px] md:!text-[20px] !leading-relaxed text-gray-600">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slide-up">
            {insights.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
