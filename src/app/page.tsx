import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center pt-8">
        <img
          src="/@ChatGPT Image Jun 26, 2025, 02_07_43 PM.png"
          alt="Profile picture"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg mb-6"
        />
      </div>
      <Header />
      
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
