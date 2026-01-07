import { Mail, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

export function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Contact Us"
          subtitle="We'd love to hear from you"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">General Inquiries</h3>
                <p className="text-gray-700 mb-6">
                  Have questions about our journal, submissions, or partnerships? Reach out using the contact information below, and we'll get back to you within 48 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href="mailto:hello@discourse.edu" className="text-blue-600 hover:text-blue-700">
                        hello@discourse.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Based In</p>
                      <p className="text-gray-600">Multiple time zones across the globe</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-slate-900">Response Time</p>
                      <p className="text-gray-600">Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">For Submissions</h3>
                <p className="text-gray-700 mb-4">
                  Ready to submit an article or join our review board? Send your inquiry with:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Your full name and current institution</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Brief bio or CV highlighting relevant expertise</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Description of your proposed contribution</span>
                  </li>
                </ul>
                <a
                  href="/join"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Connect On Social</h3>
                <p className="text-gray-700 mb-6">
                  Follow us for article updates, announcements, and insights from our community.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Linkedin size={20} />
                    <span className="font-semibold">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Instagram size={20} />
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Learn about our mission
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Meet our team
                  </a>
                </li>
                <li>
                  <a href="/join" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Become a contributor
                  </a>
                </li>
                <li>
                  <a href="/articles" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">FAQ</h3>
              <p className="text-sm text-gray-700 mb-4">
                Find answers to common questions about submissions, partnerships, and more.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Visit our FAQ →
              </a>
            </div>

            <div className="bg-slate-900 text-white rounded-lg p-6">
              <h3 className="font-semibold mb-3">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get our latest articles delivered to your inbox.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded bg-slate-800 text-white placeholder-gray-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
