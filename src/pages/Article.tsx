import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import articlesData from '../data/articles.json';

interface Article {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  issue: string;
  published: boolean;
  date: string;
}

const parseMarkdown = (content: string) => {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={key++} className="text-4xl font-serif font-bold text-slate-900 mb-6 mt-8">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-3xl font-serif font-bold text-slate-900 mb-4 mt-8">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="text-2xl font-serif font-bold text-slate-900 mb-3 mt-6">
          {line.substring(4)}
        </h3>
      );
    } else if (line.trim() === '') {
      continue;
    } else {
      elements.push(
        <p key={key++} className="text-gray-700 text-lg leading-relaxed mb-6">
          {line}
        </p>
      );
    }
  }

  return elements;
};

export function Article() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = articlesData.find((a: Article) => a.id === id && a.published);

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
            {parseMarkdown(article.content)}
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
