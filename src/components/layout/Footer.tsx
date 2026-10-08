import Link from "next/link";
import Image from "next/image";
import { businessFacts } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image 
                src="/images/logo/logo-white.png" 
                alt="AM Masons Advisory"
                width={282}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6">
              {businessFacts.company.descriptor}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 flex flex-col space-y-3">
            <h4 className="text-[18px] font-semibold mb-2">Quick Links</h4>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-[14px]">Home</Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-[14px]">About Us</Link>
            <Link href="/offerings" className="text-gray-400 hover:text-white transition-colors text-[14px]">Offerings</Link>
            <Link href="/insights" className="text-gray-400 hover:text-white transition-colors text-[14px]">Insights</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-[14px]">Contact</Link>
          </div>

          {/* Important Links */}
          <div className="col-span-1 flex flex-col space-y-3">
            <h4 className="text-[18px] font-semibold mb-2">Important Links</h4>
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors text-[14px]">Terms and Conditions</Link>
            <Link href="/legal-notice" className="text-gray-400 hover:text-white transition-colors text-[14px]">Legal Notice</Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-[14px]">Disclaimer</Link>
            <Link href="/ai-use-policy" className="text-gray-400 hover:text-white transition-colors text-[14px]">AI Use Policy</Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-[14px]">Privacy Policy</Link>
          </div>

          {/* Connect */}
          <div className="col-span-1 flex flex-col">
            <h4 className="text-[18px] font-semibold mb-4">Let&apos;s Connect!</h4>
            <p className="text-gray-400 text-[14px] mb-4">
              Let&apos;s connect to discuss your workplace challenges.
            </p>
            <a 
              href={businessFacts.company.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>{businessFacts.company.copyright}</p>
          <p className="mt-2 md:mt-0">Powered by AM MASONS ADVISORY</p>
        </div>
      </div>
    </footer>
  );
}
