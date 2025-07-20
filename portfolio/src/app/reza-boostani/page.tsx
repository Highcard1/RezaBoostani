import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reza Boostani - Product Manager & Technical Builder | Toronto, Canada',
  description: 'Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology. Expert in SaaS, startups, and user-first product development.',
  keywords: [
    'Reza Boostani',
    'reza boostani',
    'Reza Boostani Toronto',
    'Reza Boostani Product Manager',
    'Reza Boostani EV charging',
    'Reza Boostani portfolio',
    'Reza Boostani McMaster',
    'Reza Boostani WattShare',
    'Reza Boostani Ivy Charging',
    'Reza Boostani ThunderVolt',
    'Reza Boostani Canada',
    'Reza Boostani Ontario',
    'Product Manager Toronto',
    'EV charging expert',
    'sustainable technology',
    'startup product manager',
    'SaaS product manager',
    'technical builder',
    'McMaster University graduate',
    'WattShare product manager',
    'Ivy Charging product manager',
    'ThunderVolt product manager'
  ],
  openGraph: {
    title: 'Reza Boostani - Product Manager & Technical Builder | Toronto, Canada',
    description: 'Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology.',
    url: 'https://www.rezaboostani.com/reza-boostani',
    siteName: 'Reza Boostani Portfolio',
    images: [
      {
        url: '/reza-profile-2025-v2.jpg',
        width: 800,
        height: 960,
        alt: 'Reza Boostani - Product Manager and Technical Builder',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reza Boostani - Product Manager & Technical Builder | Toronto, Canada',
    description: 'Reza Boostani is a product manager and technical builder based in Toronto, specializing in EV charging and sustainable technology.',
          images: ['/reza-profile-2025-v2.jpg'],
  },
  alternates: {
    canonical: 'https://www.rezaboostani.com/reza-boostani',
  },
}

export default function RezaBoostaniPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Reza Boostani
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-4">
                Product Manager & Technical Builder
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Based in Toronto, Canada • Specializing in EV Charging & Sustainable Technology
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I turn ideas into products people actually use. With expertise in electric vehicle charging, 
                sustainable technology, and SaaS development, I help startups and companies build user-first 
                solutions that drive real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#work"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </Link>
                <Link 
                  href="/#contact"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/reza-profile-2025-v2.jpg"
                alt="Reza Boostani - Product Manager and Technical Builder based in Toronto, specializing in EV charging and sustainable technology"
                width={600}
                height={720}
                quality={95}
                className="rounded-lg shadow-2xl object-cover"
                priority
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Reza Boostani</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Background</h3>
              <p className="text-lg text-gray-700 mb-6">
                Reza Boostani is a product manager and technical builder with a passion for sustainable technology 
                and electric vehicle infrastructure. Based in Toronto, Ontario, Canada, Reza has built a career 
                around creating user-centric products that solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With experience at companies like WattShare and Ivy Charging, Reza has developed expertise in 
                EV charging solutions, SaaS platforms, and startup development. His work focuses on bridging 
                the gap between technical implementation and user experience.
              </p>
              <p className="text-lg text-gray-700">
                Reza holds a degree from McMaster University and continues to stay at the forefront of 
                sustainable technology and product management best practices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Product Management & Strategy
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  EV Charging Infrastructure
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sustainable Technology
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  SaaS Development
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Startup Development
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Full-Stack Development
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  User Research & UX Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Location & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <p className="text-lg text-gray-700">Toronto, Ontario</p>
              <p className="text-lg text-gray-700">Canada</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <p className="text-lg text-gray-700">McMaster University</p>
              <p className="text-lg text-gray-700">MTEI Program</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Focus</h3>
              <p className="text-lg text-gray-700">Product Management</p>
              <p className="text-lg text-gray-700">EV & Climate Tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://www.rezaboostani.com/reza-boostani#person',
            name: 'Reza Boostani',
            alternateName: 'reza boostani',
            url: 'https://www.rezaboostani.com/reza-boostani',
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
              url: 'https://www.rezaboostani.com/reza-profile-2025-v2.jpg',
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
          })
        }}
      />
    </div>
  )
} 