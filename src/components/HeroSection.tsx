export default function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            I turn ideas into products{" "}
            <span className="text-blue-600">people actually use.</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            Product Manager & Builder | SaaS & Startups
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Based in Toronto, building the future of user-first products.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              See What I&apos;ve Built
            </a>
            <a
              href="#The Story"
              className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Explore the Portfolio
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
} 