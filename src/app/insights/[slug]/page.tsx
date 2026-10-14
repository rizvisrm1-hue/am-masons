import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import CTASection from "@/components/ui/CTASection";
import { getInsightHtml, getInsightFaqs, toIsoDate } from "@/lib/insightContent";

const SITE = "https://www.am-masons.com";

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
  
  const title = post.metaTitle ?? `${post.title} | AM Masons Advisory`;
  const description = post.metaDescription ?? post.excerpt;
  const url = `/insights/${post.slug}`;
  // JPG copy for social previews: LinkedIn does not reliably render WebP.
  const shareImage = post.thumbnail?.replace(/\.webp$/, ".jpg");
  const images = shareImage ? [{ url: shareImage, alt: post.title }] : undefined;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      siteName: "AM Masons Advisory",
      publishedTime: toIsoDate(post.date),
      authors: ["Rashid Masood Rizvi"],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: shareImage ? [shareImage] : undefined,
    },
  };
}

export default function PostDetail({ params }: Props) {
  const post = insights.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const html = getInsightHtml(post.slug);
  const faqs = getInsightFaqs(post.slug);
  const url = `${SITE}/insights/${post.slug}`;
  const iso = toIsoDate(post.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    ...(post.thumbnail ? { image: `${SITE}${post.thumbnail}` } : {}),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "Rashid Masood Rizvi",
      jobTitle: "Founder",
      url: `${SITE}/about`,
      worksFor: { "@type": "Organization", name: "AM Masons Advisory", url: SITE },
    },
    publisher: {
      "@type": "Organization",
      name: "AM Masons Advisory",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo/logo-dark.png` },
    },
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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
