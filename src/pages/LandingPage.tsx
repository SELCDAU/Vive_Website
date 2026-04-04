import { Leaf, Smartphone, Wind, Gauge, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/Vive_Logo.png" 
                alt="ECOVERSE Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition">Features</a>
              <a href="#download" className="text-gray-600 hover:text-green-600 transition">Download</a>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-green-600 transition">Privacy</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Everyday Actions into
                <span className="text-green-600"> Climate Impact</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Track your carbon footprint, discover gadget energy consumption, and make sustainable choices with real-time environmental insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-2xl font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Download Now
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-2xl font-semibold hover:bg-gray-50 transition border-2 border-green-600"
                >
                  Learn More
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <span>Affordable & Clean Energy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <span>Climate Action</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/Cover.png"
                  alt="ECOVERSE App Features"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for a Greener Future
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand and reduce your environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gadget Scanner</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognize gadgets instantly and discover their energy consumption and carbon impact. Make informed decisions about your device usage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Carbon Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Track daily walking and travel using GPS & accelerometer. Calculate carbon footprint saved or produced with air quality insights.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Renewable Energy</h3>
              <p className="text-gray-600 leading-relaxed">
                Calculate rooftop sunlight hours and get solar/wind installation suggestions based on your location's potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-3xl shadow-lg hover:shadow-xl transition text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Monitoring</h3>
              <p className="text-green-50 leading-relaxed">
                Get live updates on your energy consumption, carbon savings, and environmental impact with detailed analytics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-8 rounded-3xl shadow-lg hover:shadow-xl transition text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Recommendations</h3>
              <p className="text-green-50 leading-relaxed">
                Receive personalized tips to reduce energy consumption and build sustainable habits for a better tomorrow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UN SDG Aligned</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting global sustainability goals including affordable clean energy, responsible consumption, and climate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto">
            Download ECOVERSE today and start your journey towards a sustainable future
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.selcdau.might_ampora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-gray-900 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </a>

            <a
              href="https://apps.apple.com/in/app/vive-empower-sustainability/id6759646583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-gray-900 transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </a>
          </div>

        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Vive_Logo_White.png" 
                  alt="ECOVERSE Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming everyday actions into measurable climate impact for a sustainable future.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-green-500 transition">Features</a></li>
                <li><a href="#download" className="hover:text-green-500 transition">Download</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="hover:text-green-500 transition">Privacy Policy</Link></li>
                <li><Link to="/data-deletion" className="hover:text-green-500 transition">Data Deletion</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 ECOVERSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
