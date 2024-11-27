import React from 'react';
import HeroSection from './hero';
import Features from './features';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {HeroSection()}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Amazing Product
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your workflow with our innovative solution. 
            Built for teams who want to achieve more.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {Features()}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Use",
                description: "Intuitive interface that anyone can master in minutes",
                icon: <Star className="w-6 h-6 text-blue-600" />
              },
              {
                title: "Powerful Features",
                description: "Advanced capabilities to handle any workflow",
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />
              },
              {
                title: "24/7 Support",
                description: "Our team is here to help whenever you need us",
                icon: <Star className="w-6 h-6 text-blue-600" />
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who have transformed their workflow.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
