export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            The Story
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A product manager who codes. A founder who validates. A strategist who ships.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              My journey started in engineering, but I quickly realized that the most impactful work happens at the intersection of strategy and execution. I&apos;m not just a product manager—I&apos;m a builder who understands the full stack, a strategist who validates with real users, and a leader who ships products that matter.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From technical roots to building EV startups, I&apos;ve secured funding, brought multiple MVPs to market, and learned that the best products come from deep user empathy combined with hands-on technical execution. I thrive in uncertainty and wear multiple hats—conducting user research, writing code, building partnerships, and leading cross-functional teams.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My mission is simple: accelerate the transition to sustainable tech and user-first products. Whether it&apos;s EV charging networks, climate tech solutions, or SaaS platforms, I focus on solving real problems with measurable impact.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What I Bring
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Strategic Product Leadership</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">From roadmap to launch, with deep market understanding</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Full-Stack Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Write code, understand architecture, ship faster</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">User Research & Validation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">300+ interviews, rapid prototyping, PMF validation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Startup & Fundraising</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Secured funding, built partnerships, scaled teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 