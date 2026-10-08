import Link from "next/link";
import { Situation } from "@/data/situations";

export default function SituationCard({ situation, index }: { situation: Situation; index: number }) {
  return (
    <Link 
      href={`/${situation.slug}`}
      className="block p-6 md:p-8 bg-white border border-gray-200/80 rounded-2xl shadow-card-resting hover:shadow-card-hover hover:-translate-y-[3px] hover:border-primary-light transition-all duration-200 ease-out group h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-light text-primary font-bold mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
          {index + 1}
        </div>
        <div className="flex-grow flex flex-col">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 leading-[1.35] mb-3 group-hover:text-primary transition-colors">
            {situation.title}
          </h3>
          <p className="text-gray-600 body-copy flex-grow">
            {situation.gist}
          </p>
        </div>
      </div>
    </Link>
  );
}
