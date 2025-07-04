"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function IvyChargingCaseStudy() {
  useEffect(() => {
    trackEvent('view', 'case_study', 'ivy_charging');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#work" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            onClick={() => trackEvent('click', 'navigation', 'back_to_portfolio')}
          >
            <span className="mr-2">←</span>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ivy Charging Practice Story
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
              Scaling Ontario&apos;s largest public EV charging network through strategic partnerships and user-centric design
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Product Strategy</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Partnership Management</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">User Experience Design</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Infrastructure Planning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ivy Charging represents a landmark public-private partnership between Hydro One and Ontario Power Generation, creating Ontario&apos;s largest public EV charging network. This case study explores the strategic planning, user experience design, and operational challenges of building a province-wide charging infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Charging Stations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Uptime Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.8/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Context</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Market Opportunity</h3>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Ontario&apos;s EV adoption rate growing 40% annually</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Existing charging infrastructure insufficient for demand</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Government incentives for public charging infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Strategic opportunity for utility companies to diversify revenue</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Partnership Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Strategy</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Stakeholder Alignment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Hydro One</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Distribution network expertise</li>
                  <li>• Customer relationship management</li>
                  <li>• Regulatory compliance knowledge</li>
                  <li>• Infrastructure planning capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Ontario Power Generation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Generation capacity and grid stability</li>
                  <li>• Renewable energy integration</li>
                  <li>• Large-scale project management</li>
                  <li>• Innovation and R&D capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Experience Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Experience Design</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Accessibility</h4>
                  <p className="text-sm text-green-600">Universal design for all users, including those with disabilities</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Reliability</h4>
                  <p className="text-sm text-blue-600">99%+ uptime with real-time status updates</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Simplicity</h4>
                  <p className="text-sm text-purple-600">One-tap charging with minimal user friction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key UX Features</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Mobile App Integration</h4>
                  <p className="text-gray-600">Seamless app-to-charger connection with QR code scanning and NFC support</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Real-time Availability</h4>
                  <p className="text-gray-600">Live status updates showing charger availability, wait times, and pricing</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Payment Flexibility</h4>
                  <p className="text-gray-600">Multiple payment options including app, credit card, and subscription plans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UX Research Case Study */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">UX Research Case Study: Optimizing User Onboarding & Sales Conversion</h2>
          
          {/* Executive Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Case Study Overview</h3>
            <p className="text-blue-700">
              This detailed case study explores how comprehensive UX research led to the identification and elimination of unnecessary workflow steps within the Ontario Charging Network&apos;s new user onboarding and initial sales conversion funnel, resulting in significant improvements in user adoption and conversion rates.
            </p>
          </div>

          {/* Problem Definition */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Part 1: Problem Definition & Hypothesis Formulation</h3>
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">Observed Symptom</h4>
                <p className="text-red-700">High abandonment rates (35%) on initial screens for new users, specifically after downloading the app or landing on the website for the first time.</p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Initial Hypothesis</h4>
                <p className="text-yellow-700">Users were being asked for too much information too early, particularly the mandatory &quot;Vehicle Registration and Detailed Profile Setup&quot; before they could browse available chargers or view real-time pricing.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Metrics</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 35% drop-off rate at onboarding</li>
                    <li>• 38% abandonment on vehicle info screen</li>
                    <li>• Low engagement with tooltips</li>
                    <li>• High back-button usage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">User Behavior Patterns</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Attempting to bypass mandatory fields</li>
                    <li>• Closing app/browser early</li>
                    <li>• Seeking immediate value proposition</li>
                    <li>• Comparing to competitor experiences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Research Design */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Part 2: User-Centric Research Design</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Quantitative Analysis</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-800">Tools Used</h5>
                      <p className="text-blue-600 text-sm">Google Analytics, Mixpanel, Hotjar</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-800">Focus Areas</h5>
                      <p className="text-green-600 text-sm">Funnel analytics, heatmaps, session recordings</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-purple-800">Key Metrics</h5>
                      <p className="text-purple-600 text-sm">Conversion rates, drop-off points, field completion</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Qualitative Research</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-800">Participants</h5>
                      <ul className="text-orange-600 text-sm space-y-1">
                        <li>• New EV Owners (n=15)</li>
                        <li>• Drop-Off Users (n=10)</li>
                        <li>• Experienced EV Drivers (n=5)</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <h5 className="font-semibold text-indigo-800">Methods</h5>
                      <ul className="text-indigo-600 text-sm space-y-1">
                        <li>• Semi-structured interviews</li>
                        <li>• Usability testing</li>
                        <li>• Card sorting exercises</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analysis */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Part 3: Rigorous Data Collection & Analysis</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Quantitative Findings</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-800">Critical Drop-off Point</h5>
                      <p className="text-red-600 text-sm">38% abandonment on &quot;Vehicle Information&quot; screen</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <h5 className="font-semibold text-yellow-800">Low Engagement</h5>
                      <p className="text-yellow-600 text-sm">Minimal interaction with explanatory tooltips</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold text-blue-800">User Behavior</h5>
                      <p className="text-blue-600 text-sm">High back-button usage and app closure rates</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Qualitative Insights</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-800">User Sentiment</h5>
                      <p className="text-green-600 text-sm">&quot;Just Let Me See It First!&quot; - overwhelming desire for immediate access</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h5 className="font-semibold text-purple-800">Value Perception</h5>
                      <p className="text-purple-600 text-sm">Vehicle details seen as &quot;tedious chore&quot; without immediate benefit</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <h5 className="font-semibold text-orange-800">Competitive Analysis</h5>
                      <p className="text-orange-600 text-sm">Competitors allowed browsing without upfront registration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Desired User Workflow</h4>
                <ol className="text-blue-700 space-y-1">
                  <li>1. Open app/website</li>
                  <li>2. Immediately see charger map</li>
                  <li>3. Tap charger for basic info (address, plug types, pricing)</li>
                  <li>4. Create account only when initiating a charge</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Part 4: Insight Synthesis & Recommendation Generation</h3>
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-2">Core Insight</h4>
                <p className="text-green-700">Users prioritize immediate access to core functionality over upfront personalization. Mandatory data entry without perceived immediate benefit leads to significant abandonment.</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Key Recommendation</h4>
                <p className="text-purple-700">Remove mandatory &quot;Vehicle Information and Detailed Profile Setup&quot; from initial onboarding. Allow guest browsing with account creation deferred to charge initiation.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Proposed Workflow Adjustment</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">New Flow</h5>
                    <ol className="text-gray-600 space-y-1 text-sm">
                      <li>1. Welcome Screen (Optional Login/Signup)</li>
                      <li>2. Immediate Map View</li>
                      <li>3. Guest Charger Details</li>
                      <li>4. Vehicle Info at Charge Initiation</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Benefits</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Reduced upfront friction</li>
                      <li>• Immediate value demonstration</li>
                      <li>• Contextual personalization</li>
                      <li>• Higher conversion rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation & Results */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Part 5: Implementation, Testing & Iteration</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Design Phase</h4>
                  <p className="text-blue-600 text-sm">Created wireframes for new guest flow with seamless transition to account creation</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Engineering Phase</h4>
                  <p className="text-green-600 text-sm">Refactored onboarding logic to support guest browsing with temporary session IDs</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">A/B Testing</h4>
                  <p className="text-purple-600 text-sm">Controlled experiment comparing original vs. new onboarding flows</p>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-3">Results (Within 2 Weeks)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Key Improvements</h5>
                    <ul className="text-green-600 space-y-1 text-sm">
                      <li>• 28% increase in &quot;First Charger Search&quot; completion</li>
                      <li>• 12% increase in &quot;First Charge Completed&quot; conversion</li>
                      <li>• Drastically reduced time to first meaningful interaction</li>
                      <li>• Improved account creation completion rate</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">User Experience</h5>
                    <ul className="text-green-600 space-y-1 text-sm">
                      <li>• Users could quickly access core value</li>
                      <li>• Reduced friction led to higher conversions</li>
                      <li>• Account creation motivated by immediate need</li>
                      <li>• Positive feedback on new flow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Conclusion: UX Research as a Catalyst for Growth</h3>
            <p className="text-lg mb-4 opacity-90">
              This case study demonstrates the profound impact of strategic UX research on product success. By meticulously applying a research framework – from problem definition and hypothesis formulation to design, implementation, and rigorous testing – we were able to identify and eliminate a critical, unnecessary workflow step in the Ontario Charging Network&apos;s onboarding process.
            </p>
            <p className="opacity-90">
              The results speak for themselves: a 28% increase in user engagement and 12% improvement in conversion rates, proving that user-centered design backed by rigorous research can drive significant business outcomes while enhancing user satisfaction.
            </p>
          </div>
        </section>

        {/* Infrastructure Planning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure Planning</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Site Selection Criteria</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-traffic locations (shopping centers, highways, urban centers)</li>
                  <li>• Electrical infrastructure capacity and proximity</li>
                  <li>• Parking availability and accessibility</li>
                  <li>• Local EV adoption rates and demographics</li>
                  <li>• Municipal support and permitting requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Charging Equipment</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Level 2 chargers (7-22 kW)</li>
                      <li>• DC fast chargers (50-350 kW)</li>
                      <li>• Smart load management</li>
                      <li>• Weather-resistant enclosures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grid Integration</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Demand response capabilities</li>
                      <li>• Renewable energy integration</li>
                      <li>• Grid stability support</li>
                      <li>• Peak load management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operational Challenges & Solutions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: Grid Capacity</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Problem</h4>
                  <p className="text-red-600">Existing electrical infrastructure couldn&apos;t support high-power DC fast chargers in many locations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Solution</h4>
                  <p className="text-green-600">Implemented smart load management and staged infrastructure upgrades based on usage patterns</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: User Adoption</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Problem</h4>
                  <p className="text-red-600">Initial user adoption was slow due to unfamiliarity with public charging</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Solution</h4>
                  <p className="text-green-600">Launched educational campaigns and offered free charging sessions to build user confidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Network Performance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Operational Metrics</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 1000+ charging stations deployed</li>
                  <li>• 95% average uptime rate</li>
                  <li>• 4.8/5 average user rating</li>
                  <li>• 50,000+ charging sessions monthly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Environmental Impact</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 2.5M+ kWh of clean energy delivered</li>
                  <li>• 1,800+ tons of CO2 emissions avoided</li>
                  <li>• 15,000+ EVs supported</li>
                  <li>• 40% increase in local EV adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Expansion Plans</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Phase 2 (2024)</h4>
                    <p className="text-sm text-blue-600">500 additional stations, mobile app enhancements, subscription plans</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Phase 3 (2025)</h4>
                    <p className="text-sm text-green-600">V2G capabilities, renewable integration, smart grid features</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Phase 4 (2026)</h4>
                    <p className="text-sm text-purple-600">Autonomous charging, AI optimization, cross-province expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Interested in Infrastructure Projects?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let&apos;s discuss how we can scale your infrastructure initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackEvent('click', 'cta', 'contact_from_case_study')}
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                onClick={() => trackEvent('click', 'cta', 'view_other_projects')}
              >
                View Other Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 