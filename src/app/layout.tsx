import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteGraph } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.am-masons.com"),
  title: "Independent Workplace & CRE Advisory | AM Masons Advisory",
  description: "Independent, vendor-neutral advisory on corporate real estate, workplace, operating standards and physical security decisions, before commitments are made.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Independent Workplace & CRE Advisory | AM Masons Advisory",
    description: "Independent, vendor-neutral advisory on corporate real estate, workplace, operating standards and physical security decisions, before commitments are made.",
    siteName: "AM Masons Advisory",
    images: [{ url: "/images/hero/og-default.jpg", alt: "AM Masons Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Independent Workplace & CRE Advisory | AM Masons Advisory",
    description: "Vendor-neutral advisory for real estate, workplace, standards, and physical security.",
    images: ["/images/hero/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </head>
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
