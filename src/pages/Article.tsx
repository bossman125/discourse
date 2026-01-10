import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getArticleById } from '../utils/articles';

export function Article() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link to="/articles" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-slate-900 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <article>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded">
                {article.issue}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {article.summary && (
              <p className="text-xl text-gray-600 mb-8 italic leading-relaxed">
                {article.summary}
              </p>
            )}

            <div className="flex items-center gap-6 py-6 border-t border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Author</p>
                <p className="font-semibold text-slate-900">{article.author}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="font-semibold text-slate-900">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6 mt-8">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {children}
                  </p>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          <div className="border-t border-gray-200 pt-12 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <ArrowLeft size={18} />
              Back to All Articles
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
