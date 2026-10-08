import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import CTASection from "@/components/ui/CTASection";

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
            <h1 className="text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-8">
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

          <div className="prose prose-lg max-w-none prose-headings:text-navy-900 prose-a:text-navy-700 hover:prose-a:text-navy-900 prose-img:rounded-xl">
            <p className="lead text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300 text-center text-gray-500 italic my-12">
              [Owner to supply final article text]
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
