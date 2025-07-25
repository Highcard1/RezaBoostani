import React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
  description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development.",
  keywords: [
    "Reza Boostani",
    "reza boostani",
    "Reza Boostani Toronto",
    "Reza Boostani Product Manager",
    "Reza Boostani EV charging",
    "Reza Boostani portfolio",
    "Reza Boostani McMaster",
    "Reza Boostani WattShare",
    "Reza Boostani Ivy Charging",
    "Reza Boostani ThunderVolt",
    "product manager",
    "product owner",
    "technical builder",
    "EV charging",
    "sustainable tech",
    "Toronto",
    "startup",
    "product development",
    "Watt Share",
    "Ivy Charging",
    "ThunderVolt",
    "McMaster University",
    "MTEI",
    "portfolio",
    "SaaS",
    "user research",
    "product strategy",
    "full-stack development",
    "Next.js",
    "React",
    "TypeScript",
    "electric vehicle",
    "climate tech",
    "sustainable mobility"
  ],
  authors: [{ name: "Reza Boostani", url: "https://www.rezaboostani.com" }],
  creator: "Reza Boostani",
  publisher: "Reza Boostani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rezaboostani.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rezaboostani.com",
    title: "Reza Boostani - Product Manager &  Entrepreneur | Toronto, Ontario, Canada",
    description: "Reza Boostani is a product manager and  Entrepreneur based in Toronto, specializing in sustainable technology. Expert in SaaS, startups, and user-first product development.",
    siteName: "Reza Boostani Portfolio",
    images: [
      {
        url: "/reza-profile-2025-v2.jpg",
        width: 800,
        height: 960,
        alt: "Reza Boostani - Product Manager and Technical Builder based in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Boostani - Product Manager,  Entrepreneur  & Technical Builder | EV Innovation | Toronto",
    description: "Reza Boostani is a product manager, technical builder and  Entrepreneur based in Toronto, specializing in sustainable technology.",
          images: ["/reza-profile-2025-v2.jpg"],
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
    <html lang="en" suppressHydrationWarning className={`bg-transparent text-gray-900 ${dmSans.variable} font-sans`}>
      <head>
        <title>Reza Boostani | Product Manager &amp; Technical Builder | Toronto</title>
        <meta name="description" content="Reza Boostani - Product Manager and  Entrepreneur based in Toronto. Specializing in  sustainable technology, SaaS, and startups. View portfolio, experience, and projects." />
        <meta name="keywords" content="Reza Boostani, reza boostani, Reza Boostani Toronto, Reza Boostani Product Manager, Reza Boostani EV charging, Reza Boostani portfolio, Reza Boostani McMaster, Reza Boostani WattShare, product manager, technical builder, EV charging, sustainable tech, Toronto, startup, SaaS" />
        <meta name="author" content="Reza Boostani" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta property="og:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rezaboostani.com/" />
        <meta property="og:image" content="https://www.rezaboostani.com/reza-profile-2025-v2.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Reza Boostani - Product Manager and Technical Builder based in Toronto" />
        <meta property="og:site_name" content="Reza Boostani Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta name="twitter:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta name="twitter:image" content="https://www.rezaboostani.com/reza-profile-2025-v2.jpg" />
        <meta name="twitter:image:alt" content="Reza Boostani - Product Manager and Technical Builder based in Toronto" />
        <meta name="twitter:creator" content="@rezaboostani" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
        <meta name="DC.title" content="Reza Boostani - Product Manager & Technical Builder" />
        <meta name="DC.creator" content="Reza Boostani" />
        <meta name="DC.subject" content="Product Management, EV Charging, Sustainable Technology" />
        <meta name="DC.description" content="Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology." />
        <meta name="DC.publisher" content="Reza Boostani" />
        <meta name="DC.contributor" content="Reza Boostani" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://www.rezaboostani.com/" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Toronto, Canada" />
        <meta name="DC.rights" content="Copyright 2024 Reza Boostani" />
        
        <link rel="canonical" href="https://www.rezaboostani.com/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Reza Boostani" />
      </head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4EJCV66F7N"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4EJCV66F7N', {
              page_title: 'Reza Boostani Portfolio',
              page_location: 'https://www.rezaboostani.com/'
            });
          `,
        }}
      />
      
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
