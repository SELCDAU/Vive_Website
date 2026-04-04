import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Vive_Logo.png" 
                alt="ECOVERSE Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium">
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At ECOVERSE, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-6 h-6 text-green-600 mr-2" />
              Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-600 ml-8">
                  <li className="list-disc">Email address and account credentials</li>
                  <li className="list-disc">Profile information (name, preferences)</li>
                  <li className="list-disc">Device identifiers and technical information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Location Data</h3>
                <ul className="space-y-2 text-gray-600 ml-8">
                  <li className="list-disc">GPS coordinates for carbon footprint tracking</li>
                  <li className="list-disc">Travel routes and movement patterns</li>
                  <li className="list-disc">Local air quality and environmental data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Activity Data</h3>
                <ul className="space-y-2 text-gray-600 ml-8">
                  <li className="list-disc">Walking and travel activity (via accelerometer and GPS)</li>
                  <li className="list-disc">Scanned gadget information and energy consumption</li>
                  <li className="list-disc">Carbon footprint calculations and statistics</li>
                  <li className="list-disc">App usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 text-green-600 mr-2" />
              How We Use Your Information
            </h2>
            <ul className="space-y-3 text-gray-600 ml-8">
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Carbon Footprint Tracking:</span> Calculate and display your environmental impact based on your daily activities
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Personalized Insights:</span> Provide tailored recommendations to reduce energy consumption
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Renewable Energy Estimation:</span> Analyze your location for solar and wind potential
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Service Improvement:</span> Enhance app functionality and user experience
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Communication:</span> Send important updates and notifications about your account
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 text-green-600 mr-2" />
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Secure Storage</h4>
                <p className="text-sm text-gray-600">Data is stored on secure, monitored servers with restricted access</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Access Controls</h4>
                <p className="text-sm text-gray-600">Strict authentication and authorization protocols for all systems</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 text-green-600 mr-2" />
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3 text-gray-600 ml-8">
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Access:</span> Request a copy of all personal data we hold about you
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Correction:</span> Update or correct inaccurate information
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Deletion:</span> Request deletion of your account and associated data
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Portability:</span> Export your data in a machine-readable format
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Opt-out:</span> Disable location tracking or data collection features
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Third Parties</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="space-y-3 text-gray-600 ml-8">
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Service Providers:</span> Third-party services that help us operate the app (hosting, analytics)
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Legal Requirements:</span> When required by law or to protect our rights
              </li>
              <li className="list-disc">
                <span className="font-semibold text-gray-800">Aggregated Data:</span> Anonymized, aggregated statistics for research purposes
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Services</h2>
            <p className="text-gray-600 mb-4">
              ECOVERSE uses location services to track your carbon footprint and provide environmental insights. You can control location permissions in your device settings. Disabling location services will limit certain features:
            </p>
            <ul className="space-y-2 text-gray-600 ml-8">
              <li className="list-disc">Carbon footprint calculations from travel</li>
              <li className="list-disc">Local air quality information</li>
              <li className="list-disc">Renewable energy potential estimation</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              ECOVERSE is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or in-app notification. Continued use of ECOVERSE after changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section className="bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or your data, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> selcdau@gmail.com
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Response Time:</span> Within 48 hours
              </p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link
            to="/data-deletion"
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            Data Deletion Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
