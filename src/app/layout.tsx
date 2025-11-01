// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script"; // ✅ Import Script
import "./globals.css";
import Navbar from "@/components/Navbar";
import Enquirestrip from "@/components/Enquirestrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Astana Residence | Luxury Living in Ngara, Nairobi",
  description:
    "Discover luxury living at Astana Residence in Ngara, Nairobi. Premium studios and one-bedroom apartments designed for students and young professionals.",
  keywords:
    "Astana Residence, luxury apartments, Nairobi residence, student housing, young professionals, Comex Homes, studio apartments, one bedroom Nairobi",
  openGraph: {
    title: "Astana Residence | Luxury Living in Ngara, Nairobi",
    description:
      "Premium studio and one-bedroom apartments offering luxury, convenience, and high rental yield in Ngara, Nairobi.",
    url: "https://www.astanarezidence.com", // ⚠️ Removed extra spaces
    siteName: "Astana Residence",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Astana Residence Banner Image",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astana Residence | Luxury Living in Ngara, Nairobi",
    description:
      "Premium studio and one-bedroom apartments offering luxury, convenience, and high rental yield in Ngara, Nairobi.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Enquirestrip />
          <Footer />
        </footer>
        <WhatsAppButton />

        {/* ✅ Zoho SalesIQ Initialization Script */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho || {};
          $zoho.salesiq=$zoho.salesiq||{ready:function(){}};`}
        </Script>

        {/* ✅ Zoho SalesIQ Widget Script */}
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqc3cf373178f3dac5e2e10db2009795931cec75f0cd67bafb92dd9dae12fb3f11"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
