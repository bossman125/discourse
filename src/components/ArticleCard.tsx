import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  author: string;
  summary: string;
  issue: string;
  date: string;
}

export function ArticleCard({
  id,
  title,
  author,
  summary,
  issue,
  date,
}: ArticleCardProps) {
  return (
    <Link to={`/articles/${id}`}>
      <article className="group h-full">
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 md:p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {issue}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {new Date(date).toLocaleDateString()}
            </span>
          </div>

          <h3 className="font-serif text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
            {summary}
          </p>

          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500">By {author}</span>
            <span className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
