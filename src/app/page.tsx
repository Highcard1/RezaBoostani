import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import WorkSection from "@/components/WorkSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
