import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Script from 'next/script';

const tomorrow = Tomorrow({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
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
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development.",
    siteName: "Reza Boostani Portfolio",
    images: [
      {
        url: "/profile-new.jpg",
        width: 800,
        height: 960,
        alt: "Reza Boostani - Product Manager and Technical Builder based in Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza Boostani - Product Manager & Technical Builder | EV Innovation | Toronto",
    description: "Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology.",
          images: ["/profile-new.jpg"],
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
    <html lang="en" suppressHydrationWarning className={`bg-transparent text-gray-900 ${tomorrow.variable} font-sans`}>
      <Head>
        <title>Reza Boostani | Product Manager &amp; Technical Builder | Toronto</title>
        <meta name="description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups. View portfolio, experience, and projects." />
        <meta name="keywords" content="Reza Boostani, reza boostani, Reza Boostani Toronto, Reza Boostani Product Manager, Reza Boostani EV charging, Reza Boostani portfolio, Reza Boostani McMaster, Reza Boostani WattShare, product manager, technical builder, EV charging, sustainable tech, Toronto, startup, SaaS" />
        <meta name="author" content="Reza Boostani" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta property="og:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rezaboostani.com/" />
        <meta property="og:image" content="https://www.rezaboostani.com/profile-new.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="960" />
        <meta property="og:image:alt" content="Reza Boostani - Product Manager and Technical Builder based in Toronto" />
        <meta property="og:site_name" content="Reza Boostani Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reza Boostani | Product Manager &amp; Technical Builder | Toronto" />
        <meta name="twitter:description" content="Reza Boostani - Product Manager and Technical Builder based in Toronto. Specializing in EV charging, sustainable technology, SaaS, and startups." />
        <meta name="twitter:image" content="https://www.rezaboostani.com/profile-new.jpg" />
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
        
        {/* Enhanced Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.rezaboostani.com/#person',
          name: 'Reza Boostani',
          alternateName: 'reza boostani',
          url: 'https://www.rezaboostani.com/',
          sameAs: [
            'https://linkedin.com/in/rezaboostani',
            'https://github.com/Marshico'
          ],
          jobTitle: 'Product Manager & Technical Builder',
          worksFor: [
            {
              '@type': 'Organization',
              name: 'WattShare',
              url: 'https://www.rezaboostani.com/case-studies/watt-share'
            },
            {
              '@type': 'Organization',
              name: 'Ivy Charging',
              url: 'https://www.rezaboostani.com/case-studies/ivy-charging'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toronto',
            addressRegion: 'Ontario',
            addressCountry: 'Canada'
          },
          image: {
            '@type': 'ImageObject',
            url: 'https://www.rezaboostani.com/profile-new.jpg',
            width: 800,
            height: 960,
            caption: 'Reza Boostani - Product Manager and Technical Builder'
          },
          description: 'Product Manager & Technical Builder specializing in EV charging and sustainable technology. Based in Toronto, Canada.',
          alumniOf: {
            '@type': 'Organization',
            name: 'McMaster University',
            url: 'https://www.mcmaster.ca/'
          },
          knowsAbout: [
            'Product Management',
            'EV Charging',
            'Sustainable Technology',
            'Startup Development',
            'Full-Stack Development',
            'User Research',
            'Product Strategy',
            'SaaS',
            'Electric Vehicles',
            'Climate Technology'
          ],
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Product Manager',
            description: 'Product Manager specializing in EV charging and sustainable technology'
          },
          nationality: 'Canadian',
          birthPlace: {
            '@type': 'Place',
            name: 'Toronto, Ontario, Canada'
          }
        }) }} />
        
        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://www.rezaboostani.com/#organization',
          name: 'Reza Boostani Portfolio',
          url: 'https://www.rezaboostani.com/',
          logo: 'https://www.rezaboostani.com/NEWLOGO.png',
          description: 'Personal portfolio website of Reza Boostani, Product Manager and Technical Builder',
          founder: {
            '@type': 'Person',
            name: 'Reza Boostani'
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toronto',
            addressRegion: 'Ontario',
            addressCountry: 'Canada'
          }
        }) }} />
        
        {/* Website Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://www.rezaboostani.com/#website',
          url: 'https://www.rezaboostani.com/',
          name: 'Reza Boostani Portfolio',
          description: 'Personal portfolio website of Reza Boostani, Product Manager and Technical Builder',
          author: {
            '@type': 'Person',
            name: 'Reza Boostani'
          },
          publisher: {
            '@type': 'Person',
            name: 'Reza Boostani'
          },
          inLanguage: 'en-US',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.rezaboostani.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }) }} />
        
        <link href="https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
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
