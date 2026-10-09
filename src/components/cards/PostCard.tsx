import Link from "next/link";
import Image from "next/image";
import { Insight } from "@/data/insights";

export default function PostCard({ post }: { post: Insight }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card-resting hover:shadow-card-hover hover:-translate-y-[3px] transition-all duration-200 ease-out border border-gray-200/80 flex flex-col h-full group">
      <Link href={`/insights/${post.slug}`} className="block relative h-48 w-full bg-surface">
        {post.thumbnail ? (
          <Image 
            src={post.thumbnail} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-[#1f2a6b]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">AM Masons Insights</span>
          </div>
        )}
      </Link>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="text-[12px] text-gray-500 mb-4 flex items-center font-medium tracking-wide">
          <span>{post.date}</span>
          <span className="mx-2 text-primary">•</span>
          <span>{post.author}</span>
        </div>
        
        <Link href={`/insights/${post.slug}`}>
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 leading-[1.35] mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-8 flex-grow body-copy line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/insights/${post.slug}`}
          className="inline-flex items-center text-primary font-semibold text-[14px] hover:text-primary-hover group/link mt-auto"
        >
          Read More
          <svg className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
