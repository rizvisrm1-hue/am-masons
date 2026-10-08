import Link from "next/link";
import Image from "next/image";
import { Offering } from "@/data/offerings";

export default function OfferingCard({ offering }: { offering: Offering }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card-resting hover:shadow-card-hover transition-all duration-200 ease-out hover:-translate-y-[3px] border border-gray-200/80 flex flex-col h-full group">
      <div className="relative h-48 w-full bg-surface">
        <div className="absolute inset-0 bg-primary/5 z-10" />
        {offering.image && (
          <Image 
            src={offering.image} 
            alt={offering.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <span className="text-[12px] font-semibold text-primary uppercase tracking-wider mb-3">
          {offering.group}
        </span>
        <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 leading-[1.35] mb-4 group-hover:text-primary transition-colors">
          {offering.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow body-copy">
          {offering.description}
        </p>
        
        <div className="mb-8 bg-surface/50 p-4 rounded-xl border border-primary-light/50">
          <h4 className="text-[14px] font-semibold text-gray-900 mb-3">Typical Triggers:</h4>
          <ul className="text-[14px] text-gray-600 list-none space-y-2">
            {offering.triggers.slice(0, 2).map((trigger, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2 mt-[2px]">•</span>
                <span className="leading-snug">{trigger}</span>
              </li>
            ))}
            {offering.triggers.length > 2 && (
              <li className="text-gray-400 italic text-[13px] pt-1">...and more</li>
            )}
          </ul>
        </div>
        
        <Link 
          href={`/offerings/${offering.slug}`}
          className="inline-flex items-center text-primary font-semibold text-[14px] hover:text-primary-hover group/link mt-auto"
        >
          Read more
          <svg className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
