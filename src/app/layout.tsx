import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
    "rezaboostani",
    "product manager",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
