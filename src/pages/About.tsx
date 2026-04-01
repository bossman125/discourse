import { SectionTitle } from '../components/SectionTitle';
import { siteStats } from '../data/siteStats';

export function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="About Discourse" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Discourse is a student-led academic journal founded in 2025 by a collective of students committed to the goal of connecting the global perspectives of the next generation to work together and focus on cross-cultural relationships. We believe that the most innovative approaches for the next generation to solve global challenges emerge from open dialogue across disciplines and borders.
              </p>

              <p>
                Our journal publishes peer-reviewed research and opinion pieces that advance contemporary understanding in the social sciences, while remaining accessible to a broader intellectual community.
              </p>

              <p>
                What sets Discourse apart is our commitment to diverse perspectives. We aim to have contributors represent a region of countries across six continents, bringing varied cultural, economic, and political contexts to bear on universal questions.
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-8 my-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Intellectual Rigor:</strong> We demand evidence-based reasoning and transparent methodology
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Diverse Perspectives:</strong> We actively seek voices from underrepresented regions and disciplines
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Accessibility:</strong> Academic excellence doesn't require jargon—our work is for thoughtful readers everywhere
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong>Independence:</strong> We maintain editorial independence and welcome healthy debate
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-serif text-xl font-bold text-slate-900 mb-6">By The Numbers</h4>
              <div className="space-y-4">
                {siteStats.map((stat) => (
                  <div key={stat.id}>
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-lg p-12 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Our Mission:</h3>
          <p className="max-w-2xl mx-auto text-gray-100 leading-relaxed">
            Discourse is a student-led academic journal dedicated to publishing rigorous research, critical analysis, and innovative thinking on pressing global issues.
Our goal is to connect the global perspectives of the next generation to work together and focus on cross-cultural relationships, as we believe that this is the most effective approach for the next generation to solve global challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
