import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation",
  description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable tech. Driving user-centric products from idea to launch.",
  keywords: [
    "Reza Boostani",
    "reza boostani",
    "product manager",
    "product owner",
    "technical builder",
    "EV charging",
    "sustainable tech",
    "Toronto",
    "startup",
    "product development",
    "Watt Share",
  

    "portfolio"
  ],
  authors: [{ name: "Reza Boostani" }],
  creator: "Reza Boostani",
  publisher: "Reza Boostani",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rezaboostani.com",
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable tech. Driving user-centric products from idea to launch.",
    siteName: "Reza Boostani Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reza Boostani - Product Manager & Technical Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable tech.",
    images: ["/og-image.jpg"],
    creator: "@rezaboostani",
  },
  alternates: {
    canonical: "https://rezaboostani.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white text-gray-900">
      <Head>
        <title>Reza Boostani | Product Manager &amp; Builder</title>
        <meta name="description" content="Reza Boostani - Product Manager, SaaS & Startups, EV Charging, Toronto. Building the future of user-first products. Portfolio, blog, and experience." />
        <meta property="og:title" content="Reza Boostani | Product Manager &amp; Builder" />
        <meta property="og:description" content="Reza Boostani - Product Manager, SaaS & Startups, EV Charging, Toronto. Building the future of user-first products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rezaboostani.com/" />
        <meta property="og:image" content="https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-zion-10029874.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reza Boostani | Product Manager &amp; Builder" />
        <meta name="twitter:description" content="Reza Boostani - Product Manager, SaaS & Startups, EV Charging, Toronto. Building the future of user-first products." />
        <meta name="twitter:image" content="https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-zion-10029874.jpg" />
        <link rel="canonical" href="https://www.rezaboostani.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Reza Boostani',
          url: 'https://www.rezaboostani.com/',
          sameAs: [
            'https://linkedin.com/in/rezaboostani',
            'https://github.com/Marshico'
          ],
          jobTitle: 'Product Manager',
          worksFor: {
            '@type': 'Organization',
            name: 'WattShare'
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toronto',
            addressCountry: 'Canada'
          },
          image: 'https://wattshare-images.s3.us-east-1.amazonaws.com/pexels-zion-10029874.jpg',
          description: 'Product Manager & Builder | SaaS & Startups | EV Charging | Toronto'
        }) }} />
      </Head>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
