import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import CTASection from "@/components/ui/CTASection";
import { getInsightHtml } from "@/lib/insightContent";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = insights.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }
  
  return {
    title: `${post.title} | AM Masons Advisory`,
    description: post.excerpt,
  };
}

export default function PostDetail({ params }: Props) {
  const post = insights.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const html = getInsightHtml(post.slug);

  return (
    <>
      <article className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl fade-in">
          <div className="mb-8 text-center">
            <div className="text-sm text-gray-500 mb-4 flex items-center justify-center font-medium">
              <span>{post.date}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {post.title}
            </h1>
          </div>
          
          {post.thumbnail && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 bg-gray-200">
              <Image 
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {html ? (
            <div
              className="prose prose-lg max-w-none prose-a:text-primary prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <p className="text-xl text-gray-600">{post.excerpt}</p>
          )}
        </div>
      </article>

      <CTASection />
    </>
  );
}
