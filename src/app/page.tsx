import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From engineering roots to leading product at early-stage startups
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a product manager and technical builder based in Toronto, passionate about mobility, sustainable tech, and bringing ideas to life fast. My journey started in engineering, but I quickly realized that the most impactful work happens at the intersection of strategy and execution.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I thrive in uncertainty and wear multiple hats—conducting user research, designing products, writing code, and building partnerships. Whether it's EV charging networks, sustainable mobility solutions, or web applications, I focus on solving real problems with measurable impact.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My approach combines deep user empathy with technical execution, ensuring that every product I work on delivers both business value and exceptional user experiences.
              </p>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Product Strategy & Roadmapping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  User Research & Validation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Technical Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Cross-functional Leadership
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Partnership Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stories of problems solved, products shipped, and impact made
            </p>
          </div>
          <div className="space-y-12">
            {/* Watt Share */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Watt Share</h3>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                      Founder & PM
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>The Challenge:</strong> EV owners needed a way to share their home chargers and earn income, while other drivers needed reliable charging options.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>What I Did:</strong> Led the entire journey from research to launch. Conducted user interviews, validated with early adopters, designed the product experience, wrote the code (Next.js, PostgreSQL, Supabase), built partnerships with charging networks, and launched the platform.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Impact:</strong> Secured funding, reduced development costs by 40%, and created a new revenue stream for EV owners while expanding charging infrastructure.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "PostgreSQL", "Supabase", "TypeScript"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Timeline</h4>
                    <p className="text-gray-600 dark:text-gray-300">2024–Present</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ivy Charging Network */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ivy Charging Network</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      Associate PM
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>The Challenge:</strong> Users were frustrated with the charging experience, leading to low satisfaction scores and reduced network usage.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>What I Did:</strong> Reshaped the entire customer journey, launched a subscription-based model, and worked on cross-functional product initiatives. Helped test and deploy new features across web and mobile platforms.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Impact:</strong> Improved user satisfaction by 60% and increased network utilization through better user experience design.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {["UX Design", "Customer Journey", "Mobile App", "Web Platform"].map((area) => (
                        <span key={area} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Metric</h4>
                    <p className="text-2xl font-bold text-green-600">+60%</p>
                    <p className="text-gray-600 dark:text-gray-300">User Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ThunderVolt */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ThunderVolt</h3>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                      Product Manager
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>The Challenge:</strong> EV owners needed better home charging solutions that were both powerful and user-friendly.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <strong>What I Did:</strong> Led end-to-end product development for EV hardware and its software companion. Conducted over 300 user interviews, built the product roadmap, validated with customers, secured funding ($50K), and got accepted into top accelerators like The Forge at McMaster.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Impact:</strong> Successfully launched hardware and software products, secured funding, and gained accelerator acceptance through strong product-market fit validation.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-600 dark:text-gray-300">$50K Funding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-600 dark:text-gray-300">300+ User Interviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-600 dark:text-gray-300">Accelerator Acceptance</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Product Type</h4>
                    <p className="text-gray-600 dark:text-gray-300">Hardware + Software</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Methods Section */}
      <section id="tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Methods
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The technologies and methodologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Tools */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Product Tools</h3>
              <div className="space-y-3">
                {["Jira", "Pendo", "Notion", "Figma", "Miro"].map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="space-y-3">
                {["React", "Next.js", "Node.js", "GraphQL", "TypeScript"].map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Cloud */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data & Cloud</h3>
              <div className="space-y-3">
                {["Azure", "GA4", "SQL", "PostgreSQL", "Supabase"].map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Methods</h3>
              <div className="space-y-3">
                {["Agile", "Scrum", "A/B Testing", "KPIs", "User Research"].map((method) => (
                  <div key={method} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Want to build something bold?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let's talk about your next project, partnership opportunity, or just share ideas about the future of mobility and sustainable tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@rezaboostani.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/rezaboostani"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rezaboostani"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Reza Boostani. Building the future of mobility, one product at a time.
          </p>
        </div>
      </footer>
    </main>
  );
}
