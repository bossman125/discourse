import type { Writer } from '../utils/writers';

interface WriterCardProps {
  writer: Writer;
}

export function WriterCard({ writer }: WriterCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 h-40 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-blue-200 mx-auto flex items-center justify-center">
            <span className="text-2xl font-serif font-bold text-blue-700">
              {writer.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{writer.name}</h3>

        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
            {writer.articleCount} {writer.articleCount === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {writer.location && (
          <p className="text-gray-600 text-sm mb-3">{writer.location}</p>
        )}

        {writer.subjects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {writer.subjects.map((subject) => (
              <span
                key={subject}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
              >
                {subject}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
