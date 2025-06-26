import { FaUniversity } from "react-icons/fa";
import { SiMicrosoftazure, SiGoogle, SiScrumalliance } from "react-icons/si";
import { FaChartBar, FaAward } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            A journey of continuous learning, product excellence, and upskilling.
          </p>
        </div>
        <div className="space-y-12">
          {/* Formal Education */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaUniversity className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Formal Education</h3>
            </div>
            <div className="ml-10 space-y-6 border-l-4 border-blue-200 dark:border-gray-700 pl-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-200">McMaster University – MTEI</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm italic mb-1">Master of Technology, Entrepreneurship and Innovation</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">The degree that laid the foundation for Reza's product thinking and business acumen. This program sparked his journey into the startup world and equipped him with tools to turn innovative ideas into market-ready solutions.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-200">Azad University – BSc.</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm italic mb-1">Where it all began—Reza's technical roots.</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Here, he learned to build software before he learned to build strategy.</p>
              </div>
            </div>
          </div>

          {/* Skill Boosters / Product Toolkit */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaAward className="text-2xl text-pink-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Skill Boosters / Product Toolkit</h3>
            </div>
            <div className="ml-10 space-y-8 border-l-4 border-pink-200 dark:border-gray-700 pl-6">
              {/* Pendo.io – Product Analytics Certification */}
              <div className="flex items-start gap-4">
                <FaChartBar className="text-3xl text-pink-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Product Analytics Certification</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Pendo.io · Issued May 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Understanding user behavior at scale to make data-driven product decisions.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Skills: Customer Success · Data Analysis · Product Management · Product-led Growth</p>
                </div>
              </div>
              {/* Pendo.io – Product-led Certification */}
              <div className="flex items-start gap-4">
                <FaChartBar className="text-3xl text-pink-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Product-led Certification</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Pendo.io · Issued Jan 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Driving product-led growth and customer success.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Skills: Data Analysis · Product Management · Product-led Growth · Customer Success</p>
                </div>
              </div>
              {/* Pendo.io – AI for Product Management */}
              <div className="flex items-start gap-4">
                <FaChartBar className="text-3xl text-pink-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">AI for Product Management</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Pendo.io · Issued Dec 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Applying AI and analytics to product management.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Skills: Artificial Intelligence (AI) · Analytics</p>
                </div>
              </div>
              {/* Scrum.org – PSPO I */}
              <div className="flex items-start gap-4">
                <SiScrumalliance className="text-3xl text-green-600 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Professional Scrum Product Owner™ I (PSPO I)</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Scrum.org · Issued Feb 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Mastering agile frameworks and stakeholder alignment.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Skills: Scrum · Product owner · Agile · PSPO</p>
                </div>
              </div>
              {/* The Forge McMaster – Startup Survival Program */}
              <div className="flex items-start gap-4">
                <FaUniversity className="text-3xl text-blue-600 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">The Forge Startup Survival Program</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">The Forge McMaster · Issued Sep 2022</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Skills: Pitch presentation · Idea development</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI, Cloud & Marketing Tech */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaAward className="text-2xl text-blue-700" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">AI, Cloud & Marketing Tech</h3>
            </div>
            <div className="ml-10 space-y-8 border-l-4 border-blue-200 dark:border-gray-700 pl-6">
              {/* Microsoft Azure – AI Product Builder */}
              <div className="flex items-start gap-4">
                <SiMicrosoftazure className="text-3xl text-blue-700 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Artificial Intelligence on Microsoft Azure</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Microsoft · Issued Jan 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Bridging cloud infrastructure knowledge with AI-powered product design.</p>
                </div>
              </div>
              {/* Microsoft Certified: Azure Fundamentals AZ-900 */}
              <div className="flex items-start gap-4">
                <SiMicrosoftazure className="text-3xl text-blue-700 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Microsoft Certified: Azure Fundamentals AZ-900</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Microsoft · Issued May 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Skills: Cloud data · Cloud networking · Cloud Security</p>
                </div>
              </div>
              {/* University of Michigan – The Future of Payment Technologies */}
              <div className="flex items-start gap-4">
                <FaUniversity className="text-3xl text-blue-600 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">The Future of Payment Technologies</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">University of Michigan · Issued Jan 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Skills: Payment Systems · FinTech</p>
                </div>
              </div>
              {/* Google – AI-Powered Performance Ads Certification */}
              <div className="flex items-start gap-4">
                <SiGoogle className="text-3xl text-yellow-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">AI-Powered Performance Ads Certification</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Google · Issued Jun 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">Skills: AI ads · AI automation · AI strategy</p>
                </div>
              </div>
              {/* Google – Google Analytics Certification (GA4) */}
              <div className="flex items-start gap-4">
                <SiGoogle className="text-3xl text-yellow-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Google Analytics Certification (GA4)</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Google · Issued Jan 2023</span>
                  </div>
                </div>
              </div>
              {/* Google – Google Ads Creative Certification */}
              <div className="flex items-start gap-4">
                <SiGoogle className="text-3xl text-yellow-500 mt-1" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-bold text-gray-900 dark:text-gray-200">Google Ads Creative Certification</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Google · Issued Jan 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 