import { Link } from 'react-router-dom';
import { ArticleCard } from '../components/ArticleCard';
import { getArticles } from '../utils/articles';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Home() {
  const latestArticles = getArticles().slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-8">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
                  <BookOpen size={18} className="animate-float" />
                  Academic Discourse Reimagined
                </div>
              </div>

              <div className="animate-fade-in animate-fade-in-delay-100">
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-0 leading-tight tracking-tight">
                  Discourse
                </h1>
              </div>

              <div className="animate-fade-in animate-fade-in-delay-200 space-y-4 max-w-2xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  Rigorous academic analysis. Contemporary discourse. Global perspectives.
                </p>
                <p className="text-gray-600 text-lg">
                  A student-led research journal bridging scholarship and real-world impact
                </p>
              </div>

              <div className="animate-fade-in animate-fade-in-delay-300 flex gap-4 justify-center flex-wrap">
                <Link
                  to="/articles"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                >
                  Read Latest Articles
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/join"
                  className="group inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                >
                  Contribute Your Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill="white" opacity="0.1"></path>
        </svg>
      </div>

      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-2 inline-block relative">
                  Our Mission
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                Discourse is a student-led academic journal dedicated to publishing rigorous research, critical analysis, and innovative thinking on pressing global issues.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We bring together diverse voices from universities worldwide to advance meaningful discourse on economics, environment, policy, technology, and society.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-lg group transition-colors duration-200"
              >
                Learn our full story
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="animate-fade-in animate-fade-in-delay-100 relative h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-50 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <BookOpen size={80} className="text-blue-400 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {latestArticles.length > 0 && (
        <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in mb-16 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 inline-block relative">
                Latest Articles
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg mt-6">
                Explore our most recent publications on research, policy, and contemporary issues
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {latestArticles.map((article, index) => {
                const delayClass =
                  index === 0 ? 'animate-fade-in' :
                  index === 1 ? 'animate-fade-in animate-fade-in-delay-100' :
                  'animate-fade-in animate-fade-in-delay-200';

                return (
                  <div key={article.id} className={delayClass}>
                    <ArticleCard {...article} />
                  </div>
                );
              })}
            </div>

            <div className="text-center animate-fade-in animate-fade-in-delay-300">
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
              >
                View all articles
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center animate-fade-in animate-fade-in-delay-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-100 mb-3">0</div>
                <p className="text-blue-50 font-medium text-sm md:text-base">Contributors</p>
              </div>
              <div className="text-center animate-fade-in animate-fade-in-delay-200">
                <div className="text-4xl md:text-5xl font-bold text-blue-100 mb-3">0</div>
                <p className="text-blue-50 font-medium text-sm md:text-base">Countries</p>
              </div>
              <div className="text-center animate-fade-in animate-fade-in-delay-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-100 mb-3">0</div>
                <p className="text-blue-50 font-medium text-sm md:text-base">Articles Published</p>
              </div>
              <div className="text-center animate-fade-in animate-fade-in-delay-400">
                <div className="text-4xl md:text-5xl font-bold text-blue-100 mb-3">0</div>
                <p className="text-blue-50 font-medium text-sm md:text-base">Editorial Team</p>
              </div>
            </div>
            <div className="border-t border-blue-500/30 pt-8">
              <p className="text-center text-blue-50 text-lg font-light">
                Uniting voices across continents in rigorous academic discourse
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <circle cx="200" cy="150" r="100" fill="white" opacity="0.1"></circle>
            <circle cx="1000" cy="400" r="150" fill="white" opacity="0.1"></circle>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold">
                Join the Next Generation of Thinkers
              </h2>
            </div>

            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
              Submit your research, share your ideas, and shape the future of academic conversation. We welcome contributions from researchers, students, and scholars worldwide.
            </p>

            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Link
                to="/join"
                className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0"
              >
                Start Contributing
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-blue-400 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0"
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
