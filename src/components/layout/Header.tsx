"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { offerings } from "@/data/offerings";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-900/85 backdrop-blur-md border-gray-800 text-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo/logo-white.png" 
            alt="AM Masons Advisory"
            width={282}
            height={44}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`text-[15px] font-medium hover:text-gray-300 transition-colors ${isActive("/") ? "text-gray-300" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`text-[15px] font-medium hover:text-gray-300 transition-colors ${isActive("/about") ? "text-gray-300" : ""}`}>
            About
          </Link>
          
          {/* Offerings Dropdown */}
          <div className="relative group">
            <Link href="/offerings" className={`flex items-center text-[15px] font-medium hover:text-gray-300 transition-colors ${pathname.startsWith("/offerings") ? "text-gray-300" : ""}`}>
              Offerings ▾
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200">
              <div className="py-2 flex flex-col">
                {offerings.map((offering) => (
                  <Link key={offering.id} href={`/offerings/${offering.slug}`} className="px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                    {offering.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/insights" className={`text-[15px] font-medium hover:text-gray-300 transition-colors ${isActive("/insights") ? "text-gray-300" : ""}`}>
            Insights
          </Link>
          <Link href="/contact" className={`text-[15px] font-medium hover:text-gray-300 transition-colors ${isActive("/contact") ? "text-gray-300" : ""}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">About</Link>
            <div className="px-3 py-2">
              <Link href="/offerings" className="block text-base font-medium text-white mb-2">Offerings</Link>
              <div className="pl-4 border-l border-navy-600 flex flex-col space-y-1">
                {offerings.map((offering) => (
                  <Link key={offering.id} href={`/offerings/${offering.slug}`} className="block text-sm text-gray-300 hover:text-white">
                    {offering.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/insights" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">Insights</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-navy-700">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
