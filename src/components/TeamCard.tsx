import { Mail, Linkedin } from 'lucide-react';

interface TeamCardProps {
  name: string;
  position: string;
  bio: string;
  email: string;
}

export function TeamCard({ name, position, bio, email }: TeamCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gradient-to-br from-slate-100 to-slate-50 h-48 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-slate-600">
              {name.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-semibold text-sm mb-2">{position}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>

        <div className="flex gap-3 pt-4 border-t border-gray-100">
          <a
            href={`mailto:${email}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
            title="Send email"
          >
            <Mail size={16} className="text-gray-600" />
            <span className="text-xs text-gray-600">Email</span>
          </a>
          <button
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
            title="LinkedIn profile"
          >
            <Linkedin size={16} className="text-gray-600" />
            <span className="text-xs text-gray-600">LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  );
}
