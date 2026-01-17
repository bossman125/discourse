import { TeamCard } from '../components/TeamCard';
import { SectionTitle } from '../components/SectionTitle';
import team from '../data/team.json';

export function Team() {
  const managementTeam = team.filter(member => member.team === 'management');
  const nationalLeadersTeam = team.filter(member => member.team === 'national-leaders');

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Our Team"
          subtitle="Meet the editors, writers, and thinkers behind Discourse"
        />

        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8 text-center">
            Management Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementTeam.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8 text-center">
            National Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nationalLeadersTeam.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-12 border border-gray-200">
          <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6 text-center">
            Join Our Community
          </h3>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            We're always looking for passionate researchers, writers, and editors. Whether you want to submit an article, join our editorial team, or volunteer your expertise, we'd love to hear from you.
          </p>
          <div className="text-center">
            <a
              href="/join"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
