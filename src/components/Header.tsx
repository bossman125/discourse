import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PenSquare } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Articles', path: '/articles' },
    { label: 'Join Us', path: '/join' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-slate-900">
            Discourse
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/submit"
            className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <PenSquare size={16} />
            Submit Your Work
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm font-medium text-slate-700 hover:text-slate-900 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <Link
                to="/submit"
                className="block text-sm font-medium text-blue-600 hover:text-blue-700 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <PenSquare size={16} />
                Submit Your Work
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
