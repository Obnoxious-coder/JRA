import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JRA Law Firm - Expert Legal Services",
    template: "%s | JRA Law Firm",
  },
  description: "Professional legal services with expertise in various practice areas. Trusted law firm committed to delivering exceptional results for our clients.",
  keywords: ["law firm", "legal services", "attorney", "lawyer", "legal advice"],
  authors: [{ name: "JRA Law Firm" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jralawfirm.com",
    siteName: "JRA Law Firm",
    title: "JRA Law Firm - Expert Legal Services",
    description: "Professional legal services with expertise in various practice areas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JRA Law Firm - Expert Legal Services",
    description: "Professional legal services with expertise in various practice areas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jralawfirm.com",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "JRA Law Firm",
              description: "Professional legal services with expertise in various practice areas.",
              url: "https://jralawfirm.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Legal Street",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              telephone: "+1-555-123-4567",
              email: "info@jralawfirm.com",
              areaServed: "US",
              serviceType: [
                "Corporate Law",
                "Real Estate Law",
                "Family Law",
                "Criminal Defense",
                "Employment Law",
                "Estate Planning",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
