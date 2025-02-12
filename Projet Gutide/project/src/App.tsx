import React, { useState } from 'react';
import { Calendar, Clock, Factory, MapPin, CheckCircle, AlertCircle, Building2, ArrowRight } from 'lucide-react';

function App() {
  const [selectedMonth] = useState("March 2024");
  
  const availableDates = [
    { date: "March 5-6", region: "Northeast" },
    { date: "March 12-13", region: "Midwest" },
    { date: "March 19-20", region: "Southeast" },
    { date: "March 26-27", region: "West Coast" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <nav className="relative z-10 px-6 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Factory className="h-8 w-8 text-blue-500" />
              <span className="text-white text-xl font-bold">Industrial Visits</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#schedule" className="hover:text-blue-400">Schedule</a>
              <a href="#benefits" className="hover:text-blue-400">Benefits</a>
              <a href="#process" className="hover:text-blue-400">Process</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(70vh-88px)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industrial Site Visits Available in {selectedMonth}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Schedule a comprehensive site visit with our industrial experts. 
              We're touring facilities across the country this month.
            </p>
            <a href="#schedule" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block">
              View Available Dates
            </a>
          </div>
        </div>
      </header>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Available Visit Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {availableDates.map((slot, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center space-x-2 text-blue-600 mb-4">
                  <Calendar className="h-6 w-6" />
                  <span className="font-semibold">{slot.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 mb-6">
                  <MapPin className="h-5 w-5" />
                  <span>{slot.region}</span>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Request Visit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Schedule a Visit?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
                title: "Expert Assessment",
                description: "Get a comprehensive evaluation of your facility's efficiency and potential improvements."
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-600" />,
                title: "Customized Solutions",
                description: "Receive tailored recommendations based on your specific industrial setup and needs."
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Time-Efficient",
                description: "One-day focused visit with detailed follow-up report and action items."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Schedule Your Visit",
                  description: "Choose an available date in your region and submit a visit request."
                },
                {
                  step: "2",
                  title: "Pre-Visit Assessment",
                  description: "Complete a brief questionnaire about your facility and objectives."
                },
                {
                  step: "3",
                  title: "On-Site Evaluation",
                  description: "Our experts conduct a thorough on-site assessment of your facility."
                },
                {
                  step: "4",
                  title: "Recommendations & Report",
                  description: "Receive a detailed report with actionable recommendations within 5 business days."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-4">Important Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Visits are scheduled on a first-come, first-served basis</li>
                  <li>• Each visit includes up to 8 hours on-site</li>
                  <li>• Maximum of 2 facilities can be visited per day</li>
                  <li>• Detailed facility information must be provided 48 hours before the visit</li>
                  <li>• Rescheduling is available with 72 hours notice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About Site Visits?</h2>
            <p className="text-gray-600 mb-8">
              Contact our team to learn more about the site visit process
              or to discuss special requirements for your facility.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                Download Info Pack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-6 w-6 text-blue-500" />
                <span className="text-white font-bold">Industrial Visits</span>
              </div>
              <p className="text-sm">
                Professional industrial site assessments and optimization consulting.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Schedule Visit</li>
                <li>Benefits</li>
                <li>Process</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Regions</h3>
              <ul className="space-y-2 text-sm">
                <li>Northeast</li>
                <li>Midwest</li>
                <li>Southeast</li>
                <li>West Coast</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>1-800-INDUSTRY</li>
                <li>visits@industrial.com</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 Industrial Visits. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;