"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

export default function ThunderVoltCaseStudy() {
  useEffect(() => {
    trackEvent('view', 'case_study', 'thundervolt');
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
      <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ThunderVolt Practice Story
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
              Revolutionizing EV charging with AI-powered smart grid integration and predictive analytics
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">AI/ML Development</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Smart Grid Integration</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Predictive Analytics</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">IoT Architecture</span>
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
              ThunderVolt represents the next generation of EV charging infrastructure, combining artificial intelligence, IoT sensors, and predictive analytics to create a self-optimizing charging network. This case study explores the technical innovation, user experience design, and business impact of building an AI-powered charging platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">30%</div>
                <div className="text-sm text-gray-600">Energy Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">99.9%</div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Smart Stations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation Context</h2>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Market Need</h3>
            <ul className="space-y-3 text-purple-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Traditional charging networks lacked intelligence and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Grid stability challenges with increasing EV adoption</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Need for predictive maintenance and fault detection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Demand for personalized charging experiences</span>
              </li>
            </ul>
          </div>
        </section>

        {/* AI/ML Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI/ML Architecture</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Core AI Components</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Predictive Analytics</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Demand forecasting using LSTM networks</li>
                  <li>• User behavior pattern recognition</li>
                  <li>• Weather impact prediction</li>
                  <li>• Grid load optimization algorithms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Machine Learning Models</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Anomaly detection for fault prediction</li>
                  <li>• Reinforcement learning for pricing optimization</li>
                  <li>• Computer vision for license plate recognition</li>
                  <li>• Natural language processing for user support</li>
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
              <h3 className="text-xl font-semibold mb-4">IoT Sensor Network</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Environmental Sensors</h4>
                  <p className="text-sm text-blue-600">Temperature, humidity, air quality monitoring for optimal charging conditions</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Electrical Sensors</h4>
                  <p className="text-sm text-green-600">Voltage, current, power factor monitoring for grid stability</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Usage Sensors</h4>
                  <p className="text-sm text-purple-600">Occupancy, charging duration, user preferences tracking</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Pipeline Architecture</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Real-time Data Processing</h4>
                  <p className="text-gray-600">Apache Kafka for high-throughput data streaming and real-time analytics</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Machine Learning Pipeline</h4>
                  <p className="text-gray-600">MLflow for model versioning, training, and deployment automation</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Edge Computing</h4>
                  <p className="text-gray-600">Local processing units for low-latency decision making and offline operation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Grid Integration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Grid Integration</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Grid Optimization Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dynamic load balancing based on grid capacity</li>
                  <li>• Demand response integration with utility companies</li>
                  <li>• Renewable energy source prioritization</li>
                  <li>• Peak shaving and valley filling algorithms</li>
                  <li>• Frequency regulation support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">V2G (Vehicle-to-Grid) Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bidirectional Charging</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Energy storage during off-peak hours</li>
                      <li>• Grid support during peak demand</li>
                      <li>• Emergency backup power provision</li>
                      <li>• Revenue generation for vehicle owners</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grid Services</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Frequency regulation</li>
                      <li>• Voltage support</li>
                      <li>• Spinning reserve</li>
                      <li>• Black start capability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Experience Innovation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Experience Innovation</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Personalization</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Smart Recommendations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Optimal charging times based on user patterns</li>
                    <li>• Cost-saving suggestions</li>
                    <li>• Route optimization with charging stops</li>
                    <li>• Personalized pricing plans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Predictive Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Battery health monitoring</li>
                    <li>• Maintenance scheduling</li>
                    <li>• Weather-based charging optimization</li>
                    <li>• Traffic-aware arrival predictions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Advanced User Interface</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Voice-Activated Controls</h4>
                  <p className="text-gray-600">Natural language processing for hands-free charging initiation and status queries</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Augmented Reality</h4>
                  <p className="text-gray-600">AR overlays showing charging status, pricing, and nearby amenities</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Predictive Notifications</h4>
                  <p className="text-gray-600">Smart alerts for charging completion, maintenance, and cost optimization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Operational Excellence</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 30% improvement in energy efficiency</li>
                  <li>• 99.9% prediction accuracy for demand</li>
                  <li>• 50% reduction in maintenance costs</li>
                  <li>• 200+ smart stations deployed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">User Satisfaction</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 4.9/5 average user rating</li>
                  <li>• 40% increase in user engagement</li>
                  <li>• 60% reduction in support tickets</li>
                  <li>• 25% increase in charging frequency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Innovation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Innovation Roadmap</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Next-Generation Features</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Phase 2 (2024)</h4>
                    <p className="text-sm text-purple-600">Autonomous charging robots, blockchain payments, quantum computing integration</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Phase 3 (2025)</h4>
                    <p className="text-sm text-orange-600">Brain-computer interface, holographic displays, advanced V2G capabilities</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Phase 4 (2026)</h4>
                    <p className="text-sm text-blue-600">Flying charging stations, space-based infrastructure, universal compatibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Build the Future?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring AI-powered innovation to your projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackEvent('click', 'cta', 'contact_from_case_study')}
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
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