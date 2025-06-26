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
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className=" mt-20 flex flex-col items-center pt-8">
        <Image
          src="/ChatGPT Image Jun 26, 2025, 02_07_43 PM.png"
          alt="Profile picture"
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-lg mb-6"
          priority
        />
      </div>
      <Header />

      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
