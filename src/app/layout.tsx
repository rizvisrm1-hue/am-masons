import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://am-masons.com"),
  title: "AM Masons Advisory | Independent Real Estate & Workplace Strategy",
  description: "Independent, vendor-neutral advisory on corporate real estate, workplace, operating standards and physical security decisions, before commitments are made.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://am-masons.com",
    title: "AM Masons Advisory | Independent Real Estate & Workplace Strategy",
    description: "Independent, vendor-neutral advisory on corporate real estate, workplace, operating standards and physical security decisions, before commitments are made.",
    siteName: "AM Masons Advisory",
    images: [{ url: "/images/hero/image-hero-amm.webp", width: 1200, height: 630, alt: "AM Masons Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Masons Advisory",
    description: "Vendor-neutral advisory for real estate, workplace, standards, and physical security.",
    images: ["/images/hero/image-hero-amm.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
