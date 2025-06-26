export default function WorkSection() {
  const projects = [
    {
      title: "Watt Share",
      role: "Lead Product Manager",
      roleColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      timeline: "2024–Present",
      problem: "EV owners had unused home chargers while other drivers struggled to find reliable charging options. The market needed a peer-to-peer solution that could monetize idle infrastructure.",
      whatIDid: "Built a charger-sharing platform from scratch. Conducted 50+ user interviews, validated product-market fit, wrote full-stack code (Next.js, PostgreSQL, Supabase), defined product roadmap, and secured early-stage funding.",
      challenges: [
        "Complex payment and scheduling system",
        "Trust and safety between users",
        "Regulatory compliance for energy sharing"
      ],
      solutions: [
        "Implemented WebSocket-based real-time booking",
        "Built verification and insurance integration",
        "Partnered with local utilities for compliance"
      ],
      impact: [
        "Launched MVP & Beta",
        "Reduced development costs by 40%",
        "Secured fund in early-stage",
        "Onboarded 50+ beta users"
      ],
      techStack: ["Next.js", "PostgreSQL", "Supabase", "WebSockets", "Stripe"],
      logo: "/NEWLOGO.png",
      url: "https://wattshare.ca"
    },
    {
      title: "Ontario Charging Network",
      role: "Product Management",
      roleColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      timeline: "2023",
      problem: "Users were frustrated with the charging experience, leading to low satisfaction scores and reduced network utilization. The company needed a subscription model to increase recurring revenue.",
      whatIDid: "Led customer research initiative, restructured user workflows, and launched a new subscription-based e-commerce flow. Managed cross-functional teams across web and mobile platforms.",
      challenges: [
        "Complex legacy billing system",
        "User resistance to subscription model",
        "Integration across multiple platforms"
      ],
      solutions: [
        "Redesigned customer journey with user feedback",
        "Implemented tiered pricing strategy",
        "Built seamless cross-platform experience"
      ],
      impact: [
        "+60% user satisfaction score",
        "+50% revenue through new channel",
        "Reduced support tickets by 30%",
        "Increased monthly active users by 25%"
      ],
      focusAreas: ["UX Design", "Customer Journey", "E-commerce", "Mobile App"]
    },
    {
      title: "ThunderVolt",
      role: "Product Manager",
      roleColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      timeline: "2021–2023",
      problem: "EV owners needed better home charging solutions that were both powerful and user-friendly. The market lacked integrated hardware-software solutions.",
      whatIDid: "Led end-to-end product development for EV hardware and its software companion. Conducted 300+ user interviews, defined product features, ran A/B testing, and secured incubation by McMaster's The Forge.",
      challenges: [
        "Hardware-software integration complexity",
        "Regulatory certification requirements",
        "Supply chain and manufacturing delays"
      ],
      solutions: [
        "Built modular architecture for easy updates",
        "Established partnerships with certification bodies",
        "Implemented agile manufacturing processes"
      ],
      impact: [
        "Secured $50K in funding",
        "Established standard UX process",
        "Strong stakeholder buy-in across teams",
        "Successfully incubated at The Forge"
      ],
      achievements: ["$50K Funding", "300+ User Interviews", "Incubator Acceptance", "Hardware + Software Launch"]
    }
  ];

  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Products & Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Real problems solved, products shipped, and impact measured
          </p>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Watt Share Logo and URL */}
                  {project.logo && project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-4">
                      <img
                        src={project.logo}
                        alt={project.title + ' Logo'}
                        className="w-16 h-16 object-contain"
                      />
                      <span className="text-lg font-semibold text-green-600 hover:underline">{project.url.replace('https://', '')}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{project.title}</h3>
                    <span className={`px-3 py-1 ${project.roleColor} text-sm rounded-full font-medium`}>
                      {project.role}
                    </span>
                    <span className="text-gray-500 dark:text-gray-200 text-sm">{project.timeline}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 text-lg">The Problem</h4>
                    <p className="text-gray-600 dark:text-gray-200">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 text-lg">What I Did</h4>
                    <p className="text-gray-600 dark:text-gray-200">{project.whatIDid}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-200 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">How I Solved Them</h4>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-200 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">Impact & Results</h4>
                    <div className="space-y-2">
                      {project.impact.map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-200 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {project.techStack && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.focusAreas && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.focusAreas.map((area) => (
                          <span key={area} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.achievements && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {project.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                            <span className="text-gray-600 dark:text-gray-200 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 