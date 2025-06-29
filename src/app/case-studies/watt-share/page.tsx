"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function WattShareCaseStudy() {
  useEffect(() => {
    trackEvent('view', 'case_study', 'watt_share');
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
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              WattShare Practice Story
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
              Brief Summary of Sprint Jan, 2025 Web Application V 1.2.0, at the time of writing this summary Watt Share has released Web Application V 1.4.2 
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Product Management</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Full-Stack Development</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">User Research</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Startup Strategy</span>
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
              WattShare emerged from a simple observation: EV owners had unused home chargers while neighbors and tenants lacked convenient charging options. This case study explores the journey from problem identification to MVP launch, covering user research, technical implementation, and strategic decision-making.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Beta Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">MVP Launch</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Market Gap Identified</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>EV owners with home chargers had unused capacity 80% of the time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Tenants and neighbors in MURBs lacked access to convenient charging</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>No peer-to-peer solution existed to monetize underutilized infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Public charging was expensive and often inconvenient</span>
              </li>
            </ul>
          </div>
        </section>

        {/* User Research */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Research & Validation</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Research Methodology</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Qualitative Research</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 25+ user interviews with EV owners</li>
                  <li>• 15+ interviews with potential renters</li>
                  <li>• 10+ property manager discussions</li>
                  <li>• 5+ utility company consultations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Insights</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 70% of EV owners open to sharing their charger</li>
                  <li>• Average willingness to pay: $2-4/hour</li>
                  <li>• Safety and trust were primary concerns</li>
                  <li>• Scheduling flexibility was crucial</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Architecture Decisions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                  <p className="text-gray-600">Next.js for SEO and performance, TypeScript for type safety, Tailwind CSS for rapid development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                  <p className="text-gray-600">Supabase for database and authentication, WebSockets for real-time booking, Stripe for payments</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key Technical Challenges</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Real-time Booking System</h4>
                  <p className="text-gray-600">Implemented WebSocket-based booking to prevent double-booking and ensure real-time availability updates</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Payment Integration</h4>
                  <p className="text-gray-600">Built secure payment flow with Stripe, handling escrow and automatic payouts to charger owners</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Trust & Safety</h4>
                  <p className="text-gray-600">Implemented user verification, insurance integration, and dispute resolution system</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Strategy & Roadmap</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">MVP Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• User registration and verification</li>
                  <li>• Charger listing and discovery</li>
                  <li>• Real-time booking system</li>
                  <li>• Payment processing</li>
                  <li>• Basic messaging between users</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Future Roadmap</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Phase 2</h4>
                    <p className="text-sm text-blue-600">Advanced scheduling, bulk bookings, API integrations</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Phase 3</h4>
                    <p className="text-sm text-green-600">Mobile app, smart charger integration, analytics</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Phase 4</h4>
                    <p className="text-sm text-purple-600">Enterprise features, white-label solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Development Metrics</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 40% reduction in development costs</li>
                  <li>• MVP launched in 6 months</li>
                  <li>• 50+ beta users onboarded</li>
                  <li>• Zero critical bugs in production</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Business Metrics</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• Early-stage funding secured</li>
                  <li>• 70% user satisfaction score</li>
                  <li>• 85% booking completion rate</li>
                  <li>• 3.5 average user rating</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What Worked Well</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• User research-driven feature prioritization</li>
                    <li>• Technical stack choice for rapid development</li>
                    <li>• Iterative development approach</li>
                    <li>• Strong focus on trust and safety</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Challenges Overcome</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complex payment flow implementation</li>
                    <li>• Real-time system reliability</li>
                    <li>• User verification and trust building</li>
                    <li>• Regulatory compliance considerations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Use Case Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Case Story: Enhancing the EV Charging Experience</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">A Product Manager's Sprint Narrative</h3>
            <p className="text-blue-700">
              This detailed case study explores a comprehensive sprint focused on optimizing the electric vehicle charging journey, 
              demonstrating the practical application of agile principles in driving product excellence.
            </p>
          </div>

          {/* The Challenge */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge: Optimizing the Electric Vehicle Charging Journey</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our product, "ChargeNow," aims to be the leading platform for electric vehicle (EV) owners to find, reserve, and pay for charging spots. 
                  In a rapidly evolving market, user experience is paramount.
                </p>
                <p className="text-gray-600 mb-4">
                  We identified several key areas for improvement in our existing platform, particularly around:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reservation and payment flow optimization</li>
                  <li>• Visibility of charging spot details</li>
                  <li>• Overall user confidence and trust</li>
                  <li>• Real-time availability and booking accuracy</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">📊 User Journey Flow Diagram</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">[Image: Current vs. Optimized User Flow]</p>
              </div>
            </div>
          </div>

          {/* Sprint Goal */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Sprint Goal: Streamlining Reservations & Boosting User Confidence</h3>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-blue-600 text-lg">🎯 Sprint Objectives Dashboard</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">[Image: Sprint Goals and KPIs]</p>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our primary goal for this sprint was to streamline the reservation and payment process, making it more intuitive and transparent for users.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-green-500">✓</span>
                    <span className="text-gray-700">Improve information display at crucial touchpoints</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-green-500">✓</span>
                    <span className="text-gray-700">Enhance visual cues (images, stars, ratings)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-green-500">✓</span>
                    <span className="text-gray-700">Add "Do it later" options for flexibility</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-green-500">✓</span>
                    <span className="text-gray-700">Implement real-time availability checks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sprint in Action */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Sprint in Action: Tackling Key User Stories</h3>
            <p className="text-lg text-gray-700 mb-6">
              As a product manager, my role involved translating user needs into actionable stories for the development team, 
              prioritizing tasks, and ensuring alignment with our sprint goal.
            </p>

            {/* Effort 1 */}
            <div className="border-l-4 border-blue-400 pl-6 mb-8">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Effort 1: Seamless Reservation Flow</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">User Problem:</h5>
                  <p className="text-gray-600 mb-4">
                    Users were completing reservations without fully confirming their desired time slots, leading to potential conflicts and frustration. 
                    They also lacked visibility into the start and end times of their chosen reservation.
                  </p>
                  <h5 className="font-semibold text-gray-800 mb-2">Solution:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mandatory time and date selection before proceeding</li>
                    <li>• Clear display of reservation times on gateway and confirmation pages</li>
                    <li>• Real-time availability checks with error notifications</li>
                    <li>• Edit functionality directly from gateway page</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 rounded-lg p-6 h-48 flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📱 Reservation Flow Screenshots</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">[Image: Before/After Reservation UI]</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Impact:</h5>
                <p className="text-green-700">Dramatically reduced reservation errors, increased user confidence, and improved overall booking experience.</p>
              </div>
            </div>

            {/* Effort 2 */}
            <div className="border-l-4 border-green-400 pl-6 mb-8">
              <h4 className="text-xl font-bold text-green-800 mb-4">Effort 2: Enhancing Charger Spot Discovery & Trust</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">User Problem:</h5>
                  <p className="text-gray-600 mb-4">
                    The "Find Chargers" page lacked visual appeal with missing images, making it harder for users to quickly assess charging options. 
                    Users wanted more information about charger spots.
                  </p>
                  <h5 className="font-semibold text-gray-800 mb-2">Solution:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Added images to charger cards on discovery page</li>
                    <li>• Improved image upload quality (4MB+ compressor)</li>
                    <li>• Fixed multiple image display issues</li>
                    <li>• Introduced information buttons across key pages</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 rounded-lg p-6 h-48 flex items-center justify-center">
                    <span className="text-green-600 text-lg">🖼️ Charger Discovery UI</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">[Image: Enhanced Charger Cards]</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Impact:</h5>
                <p className="text-green-700">Visually richer listings and readily available information empowered users to make more informed decisions.</p>
              </div>
            </div>

            {/* Effort 3 */}
            <div className="border-l-4 border-purple-400 pl-6 mb-8">
              <h4 className="text-xl font-bold text-purple-800 mb-4">Effort 3: Payment Flexibility & Registration Streamlining</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">User Problem:</h5>
                  <p className="text-gray-600 mb-4">
                    The payment gateway required immediate car information, creating a barrier for users who preferred to complete payment first. 
                    Registration process had routing issues.
                  </p>
                  <h5 className="font-semibold text-gray-800 mb-2">Solution:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Implemented "Do it later" option for car information</li>
                    <li>• Allowed direct payment completion</li>
                    <li>• Fixed registration routing issues</li>
                    <li>• Streamlined new user onboarding</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-purple-50 rounded-lg p-6 h-48 flex items-center justify-center">
                    <span className="text-purple-600 text-lg">💳 Payment Flow Optimization</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">[Image: Flexible Payment Options]</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Impact:</h5>
                <p className="text-green-700">Increased conversion rates by offering more flexibility and improved new user onboarding experience.</p>
              </div>
            </div>

            {/* Effort 4 */}
            <div className="border-l-4 border-orange-400 pl-6">
              <h4 className="text-xl font-bold text-orange-800 mb-4">Effort 4: Backend & Operational Improvements</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Technical Challenges:</h5>
                  <p className="text-gray-600 mb-4">
                    Identified several backend and operational tasks crucial for system stability and future scalability.
                  </p>
                  <h5 className="font-semibold text-gray-800 mb-2">Solutions Implemented:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Database modifications and GraphQL optimization</li>
                    <li>• API efficiency improvements</li>
                    <li>• Automated deployment pipeline on Vercel</li>
                    <li>• Enhanced data protection and security</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-orange-50 rounded-lg p-6 h-48 flex items-center justify-center">
                    <span className="text-orange-600 text-lg">⚙️ Technical Architecture</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">[Image: System Architecture Diagram]</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Impact:</h5>
                <p className="text-green-700">Foundational improvements ensured system reliability and enabled faster future development.</p>
              </div>
            </div>
          </div>

          {/* Agile Workflow */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Agile Workflow: Collaboration, Iteration, and Delivery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Sprint Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Sprint Planning</h5>
                      <p className="text-gray-600 text-sm">Team reviewed prioritized backlog, estimated tasks, and committed to sprint goal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Daily Scrums</h5>
                      <p className="text-gray-600 text-sm">Continuous alignment, progress tracking, and blocker resolution</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Development & QA</h5>
                      <p className="text-gray-600 text-sm">Continuous integration with incremental testing and feedback</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Stakeholder Reviews</h5>
                      <p className="text-gray-600 text-sm">Mid-sprint check-ins and end-of-sprint demonstrations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">📈 Sprint Velocity Chart</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">[Image: Sprint Burndown Chart]</p>
              </div>
            </div>
          </div>

          {/* Impact and Metrics */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact and Metrics: Measuring Success</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Performance Indicators</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800">Reduced Reservation Errors</h5>
                    <p className="text-blue-600 text-sm">Lower abandonment rates at gateway and fewer support tickets</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800">Increased Conversion Rate</h5>
                    <p className="text-green-600 text-sm">Higher percentage of users completing reservation flow</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800">Improved User Satisfaction</h5>
                    <p className="text-purple-600 text-sm">Positive feedback through surveys and direct comments</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800">Faster Deployment Cycle</h5>
                    <p className="text-orange-600 text-sm">Reduced time from code commit to production deployment</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">📊 Performance Dashboard</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">[Image: KPI Dashboard Screenshot]</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Conclusion: The Product Manager as an Orchestrator of Value</h3>
            <p className="text-lg mb-4 opacity-90">
              This sprint exemplifies the multifaceted role of a product manager in an agile environment. It's not just about writing tickets; 
              it's about deeply understanding user problems, translating those into clear requirements, prioritizing relentlessly, 
              fostering seamless collaboration across diverse teams, and constantly seeking ways to deliver incremental, measurable value.
            </p>
            <p className="opacity-90">
              By focusing on both user-facing enhancements and critical technical foundations, we ensured that ChargeNow not only delighted 
              its users in the short term but also built a robust platform for sustainable growth. This commitment to continuous improvement, 
              guided by agile principles, is what truly defines effective product management.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Something Similar?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring your product vision to life
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