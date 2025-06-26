export default function ToolsSection() {
  const toolCategories = [
    {
      title: "Product Tools",
      color: "bg-blue-600",
      tools: ["Jira", "Pendo", "Notion", "Figma", "Miro"]
    },
    {
      title: "Tech Stack",
      color: "bg-green-600",
      tools: ["React", "Next.js", "Node.js", "GraphQL", "TypeScript"]
    },
    {
      title: "Data & Cloud",
      color: "bg-purple-600",
      tools: ["Azure", "GA4", "SQL", "PostgreSQL", "Supabase"]
    },
    {
      title: "Methods",
      color: "bg-orange-600",
      tools: ["Agile", "Scrum", "A/B Testing", "KPIs", "User Research"]
    }
  ];

  return (
    <section id="tools" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Tools & Methods
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The technologies and methodologies I use to bring ideas to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{category.title}</h3>
              <div className="space-y-3">
                {category.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${category.color} rounded-full`}></div>
                    <span className="text-gray-600 dark:text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 