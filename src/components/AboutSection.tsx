export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Story
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            A product manager who codes. A founder who validates. A strategist who ships.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="leading-relaxed text-lg">
              My journey started in engineering, but I quickly realized that the most impactful work happens at the intersection of strategy and execution. I&apos;m not just a product manager—I&apos;m a builder who understands the full stack, a strategist who validates with real users, and a leader who ships products that matter.
            </p>
            <p className="leading-relaxed">
              From technical roots to building startups, I&apos;ve secured funding, brought multiple MVPs to market, and learned that the best products come from deep user empathy combined with hands-on technical execution. I thrive in uncertainty and wear multiple hats—conducting user research, writing code, building partnerships, and leading cross-functional teams.
            </p>
            <p className="leading-relaxed">
              My mission is simple: accelerate the transition to sustainable tech and user-first products.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">
              What I Bring
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Strategic Product Leadership</h4>
                  <p className="text-sm">From roadmap to launch, with deep market understanding</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Full-Stack Development</h4>
                  <p className="text-sm">Write code, understand architecture, ship faster</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">User Research & Validation</h4>
                  <p className="text-sm">300+ interviews, rapid prototyping, PMF validation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Startup & Fundraising</h4>
                  <p className="text-sm">Secured funding, built partnerships, scaled teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 