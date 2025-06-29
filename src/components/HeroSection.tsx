import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className=" relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-0 sm:px-0 lg:px-0 bg-white  overflow-hidden w-full">
      {/* Full-width background image */}
      <div className=" absolute inset-0 w-full h-full z-0">
        <Image
          src="/pexels-daniel-andraski-197681005-11554666.jpg"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center opacity-5"
        />
        <div className="absolute inset-0 w-full h-full bg-white/70 " />
      </div>
      {/* Centered content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 bg-white/95">
        <div className="flex flex-col lg:flex-row items-center justify-between shadow-lg p-4 sm:p-6 lg:p-8 gap-6 sm:gap-8">
          {/* Optional: Add a subtle background only behind the text for readability */}
          {/* <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-60 rounded-xl pointer-events-none" /> */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900  mb-4 sm:mb-6 leading-tight">
              I turn ideas into products{" "}
              <span className="text-blue-600 ">people actually use.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600  mb-6 sm:mb-8 max-w-3xl lg:mx-0 mx-auto font-medium">
              Product Manager & Builder | EV & Climate Tech | SaaS & Startups
            </p>
            <p className="text-base sm:text-lg text-gray-500  mb-8 sm:mb-12 max-w-2xl lg:mx-0 mx-auto">
              Based in Toronto, building the future of sustainable mobility and user-first products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                See What I&apos;ve Built
              </a>
              <a
                href="#about"
                className="border-2 border-gray-300  text-gray-700  hover:bg-gray-50  px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
              >
                Explore the Portfolio
              </a>
            </div>
          </div>
          <div className="flex-1 flex rounded justify-center lg:justify-end">
            <Image
              src={"/20250627_150331-Copy.jpg"}
              alt="Reza Boostani - Product Manager and Technical Builder based in Toronto, specializing in EV charging and sustainable technology"
              width={400}
              height={480}
              className="w-80 h-96 sm:w-100 sm:h-120 rounded border-white border-4 object-cover border-0 border-gray-200 shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 