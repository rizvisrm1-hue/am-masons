import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AM Masons Advisory | Independent Real Estate & Workplace Strategy",
  description: "Vendor-neutral advisory for organizations of 300 to 3,000 employees on real estate, workplace, standards, and physical security decisions.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://am-masons.com",
    title: "AM Masons Advisory | Independent Real Estate & Workplace Strategy",
    description: "Vendor-neutral advisory for organizations of 300 to 3,000 employees on real estate, workplace, standards, and physical security decisions.",
    siteName: "AM Masons Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "AM Masons Advisory",
    description: "Vendor-neutral advisory for real estate, workplace, standards, and physical security.",
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
