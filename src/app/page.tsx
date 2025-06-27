import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import WorkSection from "@/components/WorkSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero background image */}
      <div className="relative w-full min-h-[500px]">
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
<<<<<<< HEAD
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Product thinker!!!. Builder.{" "}
              <span className="text-blue-600 dark:text-blue-400">EV innovator.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Driving user-centric products from idea to launch—on web, mobile, and the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Let's Connect
              </a>
            </div>
          </div>
=======
      <AboutSection />
      <EducationSection />

      {/* Watt Share full-width background */}
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/pexels-raimundo-campbell-2149207419-30479291.jpg"
            alt="Watt Share Background"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 w-full h-full bg-white/70" />
>>>>>>> main
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Only render the first project (Watt Share) from WorkSection here, refactor WorkSection if needed */}
        </div>
      </div>

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Only render the second project (Ivy Charging) from WorkSection here, refactor WorkSection if needed */}
        </div>
      </div>

      {/* Render the rest of WorkSection (other projects) here if needed */}
      <WorkSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
