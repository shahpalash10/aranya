import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARANYA — Affordable Luxury Botanical Skincare | Inspired by India's Palash Flower",
  description:
    "ARANYA transforms the ancient Palash flower into premium botanical skincare. Affordable luxury cooling sprays crafted for Indian skin, sustainably sourced from rural communities.",
  keywords: [
    "ARANYA",
    "botanical skincare",
    "Palash flower",
    "cooling spray",
    "Indian skincare",
    "Ayurvedic",
    "natural skincare",
    "affordable luxury",
    "sustainable beauty",
  ],
  openGraph: {
    title: "ARANYA — Affordable Luxury Botanical Skincare",
    description:
      "Inspired by India's Flame of the Forest. Premium botanical cooling sprays crafted for Indian skin.",
    type: "website",
    locale: "en_IN",
    siteName: "ARANYA",
    images: [
      {
        url: "/images/aranya-bottle.jpg",
        width: 800,
        height: 600,
        alt: "ARANYA Botanical Cooling Spray",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARANYA — Affordable Luxury Botanical Skincare",
    description:
      "Inspired by India's Flame of the Forest. Premium botanical cooling sprays crafted for Indian skin.",
    images: ["/images/aranya-bottle.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
