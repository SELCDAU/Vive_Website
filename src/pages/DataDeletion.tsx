import { Link } from 'react-router-dom';
import { Trash2, Shield, AlertCircle } from 'lucide-react';

function DataDeletion() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Vive_Logo.png" 
                alt="VIVE Logo" 
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
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Data Deletion</h1>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At VIVE, we respect your privacy and your right to control your personal data. This page explains how you can request deletion of your data from our services.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Data deletion is permanent and cannot be undone. Once your data is deleted, you will lose access to your account, carbon tracking history, and all associated information.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-green-600 mr-2" />
              What Data We Collect
            </h2>
            <ul className="space-y-3 text-gray-600 ml-8">
              <li className="list-disc">Account information (email address, profile details)</li>
              <li className="list-disc">Location data (GPS coordinates for carbon footprint calculations)</li>
              <li className="list-disc">Activity data (walking, travel, and movement tracking)</li>
              <li className="list-disc">Device information (scanned gadgets and energy consumption data)</li>
              <li className="list-disc">Usage analytics and app preferences</li>
              <li className="list-disc">Carbon footprint calculations and historical data</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request Data Deletion</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Option 1: In-App Deletion</h3>
                <ol className="space-y-2 text-gray-600 ml-6">
                  <li className="list-decimal">Open the VIVE app and go to your profile</li>
                  <li className="list-decimal">Navigate to Settings → Account Settings</li>
                  <li className="list-decimal">Scroll down and select "Delete My Account"</li>
                  <li className="list-decimal">Confirm your decision and authenticate</li>
                  <li className="list-decimal">Your data will be deleted immediately</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Option 2: Email Request</h3>
                <p className="text-gray-600 mb-3">
                  Send an email to our support team with your deletion request:
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-mono text-green-600 font-semibold">selcdau@gmail.com</p>
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Please include your registered email address and "Data Deletion Request" in the subject line. We will verify your identity and process your request within 30 days.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Deletion Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Immediate (0-24 hours)</h4>
                  <p className="text-gray-600 text-sm">Your account is deactivated and you can no longer access the app.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Within 7 Days</h4>
                  <p className="text-gray-600 text-sm">Personal identifiable information is removed from active databases.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-green-600">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Within 30 Days</h4>
                  <p className="text-gray-600 text-sm">All data is permanently deleted from our systems and backups.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention Exceptions</h2>
            <p className="text-gray-600 mb-4">
              We may retain certain anonymized data for the following purposes:
            </p>
            <ul className="space-y-2 text-gray-600 ml-8">
              <li className="list-disc">Compliance with legal obligations and regulations</li>
              <li className="list-disc">Resolving disputes and enforcing our agreements</li>
              <li className="list-disc">Fraud prevention and security purposes</li>
              <li className="list-disc">Aggregated, anonymized analytics that cannot identify you</li>
            </ul>
          </section>

          <section className="bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about the data deletion process or need assistance, please contact our support team:
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
            to="/privacy-policy"
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DataDeletion;
