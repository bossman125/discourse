import { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';

export function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    interest: 'contributor',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'discourseacademicjournal@gmail.com';
    const subject = encodeURIComponent(
      `Join Application from ${formData.name || formData.email || 'Applicant'}`
    );

    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Institution: ${formData.institution}`,
      `Interest: ${formData.interest}`,
      '',
      `Message:\n${formData.message}`,
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setIsSubmitting(true);

    // Try to open the user's mail client with a pre-filled message
    window.location.href = mailto;

    setSubmitMessage(
      "Your email client should open to send your application. If it didn't, please email discourseacademicjournal@gmail.com."
    );

    setFormData({ name: '', email: '', institution: '', interest: 'contributor', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 7000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Join Us"
          subtitle="Be part of a global community of researchers and thinkers"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your university or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    How can you contribute?
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="contributor">Article Contributor</option>
                    <option value="editor">Editor/Reviewer</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="partner">Institutional Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="What are your research interests? What would you like to contribute to Discourse?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Application'}
              </button>

              {submitMessage && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Contributors</h3>
              <p className="text-sm text-gray-700 mb-4">
                Submit original research, opinion pieces, or analysis on topics relevant to our mission.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Peer-reviewed process</li>
                <li>• Global audience</li>
                <li>• Academic rigor</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-gray-200">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">Editors & Reviewers</h3>
              <p className="text-sm text-gray-700 mb-4">
                Help shape Discourse by reviewing submissions and guiding authors.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Flexible commitment</li>
                <li>• Editorial experience</li>
                <li>• Network building</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-3">Questions?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Contact our team at
              </p>
              <a href="mailto:discourseacademicjournal@gmail.com" className="text-blue-600 font-semibold hover:text-blue-700">
                discourseacademicjournal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
