import { useState, useMemo } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ArticleCard } from '../components/ArticleCard';
import { getArticles, type Article } from '../utils/articles';

export function Articles() {
  const [selectedIssue, setSelectedIssue] = useState<string>('all');

  const articles = getArticles();

  const issues = useMemo(() => {
    const uniqueIssues = [...new Set(articles.map((article: Article) => article.issue))];
    return uniqueIssues.sort().reverse();
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedIssue === 'all') {
      return articles;
    }
    return articles.filter((article: Article) => article.issue === selectedIssue);
  }, [articles, selectedIssue]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Articles"
          subtitle="Explore rigorous research and analysis across multiple disciplines"
        />

        {issues.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedIssue('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedIssue === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Issues
            </button>
            {issues.map((issue: string) => (
              <button
                key={issue}
                onClick={() => setSelectedIssue(issue)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedIssue === issue
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {issue}
              </button>
            ))}
          </div>
        )}

        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article: Article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
