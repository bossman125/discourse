import { SectionTitle } from '../components/SectionTitle';
import { ExternalLink, FileText, CheckCircle, Users } from 'lucide-react';

export function Submit() {
  const GOOGLE_FORM_URL = 'https://forms.gle/YjzduQv4a6fTT2THA';

  const guidelines = [
    {
      icon: FileText,
      title: 'Original Research',
      description: 'We accept original scholarly work across all academic disciplines.'
    },
    {
      icon: CheckCircle,
      title: 'Peer Review',
      description: 'All submissions undergo rigorous peer review by our editorial board.'
    },
    {
      icon: Users,
      title: 'Open to All',
      description: 'Students, faculty, and independent scholars are welcome to submit.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Submit Your Work"
          subtitle="Share your research with the academic community"
        />

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Submission Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {guidelines.map((guideline, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                  <guideline.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{guideline.title}</h3>
                <p className="text-sm text-gray-600">{guideline.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-4">What to Include:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Title and abstract of your work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Author information and institutional affiliation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Full manuscript in PDF or Word format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Keywords and subject area classification</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Your Article
              <ExternalLink size={20} />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              You'll be redirected to our Google Form submission portal
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Questions?</h3>
          <p className="text-gray-700 mb-4">
            If you have questions about the submission process or would like to discuss your work
            before submitting, please don't hesitate to reach out to our editorial team.
          </p>
          <a
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </div>
  );
}
