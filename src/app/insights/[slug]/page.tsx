import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { insights } from "@/data/insights";
import CTASection from "@/components/ui/CTASection";
import Link from "next/link";
import { engagementsForInsight } from "@/data/linkMap";
import { getInsightHtml, getInsightFaqs, toIsoDate } from "@/lib/insightContent";
import { ORG_ID, ORG_NAME, FOUNDER_ID, FOUNDER_NAME } from "@/lib/schema";

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
      authors: [FOUNDER_NAME],
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
  const engagements = engagementsForInsight(post.slug);

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
      "@id": FOUNDER_ID,
      name: FOUNDER_NAME,
      url: `${SITE}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: ORG_NAME,
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

      {engagements.length > 0 && (
        <section className="py-16 md:py-20 bg-surface border-t border-gray-200/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">Where this applies</p>
            <h2 className="section-header mb-10">Related Engagements</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {engagements.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group p-7 rounded-2xl bg-white border border-gray-200/80 hover:border-primary hover:shadow-card-hover transition-all"
                >
                  <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {r.title} <span aria-hidden="true">→</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{r.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
