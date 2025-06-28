"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import WorkSection from "@/components/WorkSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { trackScrollDepth, trackPortfolioInteraction } from "@/utils/analytics";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize scroll tracking
    const cleanup = trackScrollDepth();
    
    // Track initial page view
    trackPortfolioInteraction.workSectionView();
    
    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero background image */}
      <div className="relative w-full min-h-[400px] sm:min-h-[500px]">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/pexels-daniel-andraski-197681005-11554666.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          {/* Overlay removed for debugging */}
        </div>
        <div className="relative z-10 ">
          <HeroSection />
        </div>
      </div>
      <Header />
      
      <AboutSection />
      <EducationSection />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Product thinker!!!. Builder.{" "}
              <span className="text-blue-600 dark:text-blue-400">EV innovator.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Driving user-centric products from idea to launch—on web, mobile, and the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Only render the first project (Watt Share) from WorkSection here, refactor WorkSection if needed */}
        </div>
      </section>

      {/* Ivy Charging full-width background */}
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/pexels-hyundaimotorgroup-30658213.jpg"
            alt="Ivy Charging Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 w-full h-full bg-white/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Only render the second project (Ivy Charging) from WorkSection here, refactor WorkSection if needed */}
        </div>
      </div>

      {/* Render the rest of WorkSection (other projects) here if needed */}
      <WorkSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
      <AnalyticsDashboard />
    </main>
  );
}
