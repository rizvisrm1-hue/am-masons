import { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  backgroundImage?: string;
};

export default function PageHero({ title, subtitle, eyebrow, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative bg-gray-900 text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Image Overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image 
              src={backgroundImage} 
              alt="Hero Background" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/70 z-10 backdrop-blur-[2px]"></div>
        </>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 fade-in">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="text-[20px] md:text-[24px] text-gray-300 font-normal italic mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold leading-tight mb-6 tracking-tight-header text-white drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[18px] md:text-[20px] text-gray-300 leading-[1.6] max-w-2xl font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
