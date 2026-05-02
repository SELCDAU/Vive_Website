import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Send,
  CheckCircle,
  Smartphone,
  Leaf,
  Wind,
  Gauge,
} from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    icon: <Smartphone className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Download the ECOVERSE app from the App Store or Google Play, tap "Sign Up", and follow the on-screen instructions. You can register with your email address or continue with Google.',
      },
      {
        q: 'Is ECOVERSE free to use?',
        a: 'Yes, the core features of ECOVERSE are completely free. You can track your carbon footprint, scan gadgets, and view your dashboard at no cost.',
      },
      {
        q: 'Which devices are supported?',
        a: 'ECOVERSE is available on iOS 15+ and Android 8.0+. For the best experience, we recommend keeping your operating system up to date.',
      },
    ],
  },
  {
    category: 'Carbon Tracking',
    icon: <Leaf className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: 'How does carbon footprint tracking work?',
        a: 'ECOVERSE uses your GPS and accelerometer to detect travel mode (walking, driving, etc.) and calculates your carbon emissions or savings accordingly. Location access is required for this feature.',
      },
      {
        q: 'Why is location permission required?',
        a: 'Location data powers carbon footprint tracking, local air quality insights, and renewable energy potential estimation. You can disable location access at any time in your device settings, though some features will be limited.',
      },
      {
        q: 'How accurate are the carbon estimates?',
        a: 'Our estimates are based on publicly available emission factors from recognised environmental research bodies. While they may not be exact to the gram, they provide a reliable relative measure of your impact.',
      },
    ],
  },
  {
    category: 'Gadget Scanner',
    icon: <Gauge className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: 'What gadgets can ECOVERSE recognise?',
        a: 'The AI scanner can identify a wide range of household and personal electronics, including TVs, laptops, refrigerators, phones, and more. Recognition improves over time as the model is updated.',
      },
      {
        q: 'The scanner didn\'t recognise my device. What should I do?',
        a: 'Try scanning in good lighting and ensure the device is clearly visible. If it still fails,contact us via email — your feedback helps us improve.',
      },
    ],
  },
  {
    category: 'Renewable Energy',
    icon: <Wind className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: 'How does the solar / wind estimation work?',
        a: 'ECOVERSE analyses your location\'s sunlight hours and wind patterns using publicly available meteorological data to estimate your rooftop\'s renewable energy potential.',
      },
      {
        q: 'Can I use the renewable energy feature without location access?',
        a: 'No — an accurate renewable energy estimate depends on your precise location. You can grant location permission just for this feature if you prefer not to have it on always.',
      },
    ],
  },
  {
    category: 'Account & Data',
    icon: <Mail className="w-5 h-5 text-green-600" />,
    questions: [
      {
        q: 'How do I delete my account?',
        a: 'Visit our Data Deletion page or go to Settings → Account → Delete Account inside the app. All your data will be permanently removed within 30 days.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-shadow hover:shadow-md">
      <button
        id={`faq-${question.replace(/\s+/g, '-').toLowerCase().slice(0, 40)}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-green-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

function Support() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'ad233ebc-427d-4f7c-939e-6ca4a9154d6c',
          name: formState.name,
          email: formState.email,
          subject: `[ECOVERSE Support] ${formState.subject || 'Support Request'}`,
          message: formState.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/Logo_Hori.png" alt="ECOVERSE Logo" className="h-12 w-auto" />
            </Link>
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium transition">
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-16 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-md">
            <HelpCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How can we <span className="text-green-600">help you?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Browse frequently asked questions or reach out directly — we typically respond within 48 hours.
          </p>

          {/* Quick contact pill */}
          <a
            id="support-email-hero"
            href="mailto:selcdau@gmail.com"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            selcdau@gmail.com
          </a>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading" className="mb-20">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">Quick answers to common questions about ECOVERSE</p>
          </div>

          <div className="space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{section.category}</h3>
                </div>
                <div className="space-y-3">
                  {section.questions.map((item) => (
                    <FAQItem key={item.q} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h2 id="contact-heading" className="text-2xl font-bold text-gray-900">
                Still need help?
              </h2>
              <p className="text-gray-500 text-sm">Send us a message and we'll get back to you.</p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 max-w-sm">
                We've received your message and will respond to <span className="font-medium text-gray-800">{formState.email}</span> within 48 hours.
              </p>
              <button
                id="send-another-btn"
                onClick={() => {
                  setSubmitted(false);
                  setError('');
                  setFormState({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-6 text-green-600 hover:text-green-700 font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="support-name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="support-email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="support-subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="support-subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800 bg-white"
                >
                  <option value="">Select a topic…</option>
                  <option value="Account Issue">Account Issue</option>
                  <option value="Carbon Tracking Problem">Carbon Tracking Problem</option>
                  <option value="Gadget Scanner Issue">Gadget Scanner Issue</option>
                  <option value="App Crash / Bug Report">App Crash / Bug Report</option>
                  <option value="Data or Privacy Request">Data or Privacy Request</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="support-message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="support-message"
                  name="message"
                  required
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your issue or question in as much detail as possible…"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition text-gray-800 resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-400">
                  We'll respond to <span className="font-medium text-gray-600">{formState.email || 'your email'}</span> within 48 hours.
                </p>
                <button
                  id="support-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </section>

        {/* ── Quick Links ── */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-center">
          <Link
            to="/privacy-policy"
            id="support-link-privacy"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition"
          >
            <span className="text-2xl mb-2">🔒</span>
            <span className="font-semibold text-gray-800">Privacy Policy</span>
            <span className="text-sm text-gray-500 mt-1">How we handle your data</span>
          </Link>
          <Link
            to="/data-deletion"
            id="support-link-deletion"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-300 hover:shadow-md transition"
          >
            <span className="text-2xl mb-2">🗑️</span>
            <span className="font-semibold text-gray-800">Data Deletion</span>
            <span className="text-sm text-gray-500 mt-1">Request account & data removal</span>
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm mt-8">
        <p>© 2026 ECOVERSE. All rights reserved.</p>
        <p className="mt-1">
          Questions?{' '}
          <a href="mailto:selcdau@gmail.com" className="text-green-400 hover:text-green-300 transition">
            selcdau@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Support;
