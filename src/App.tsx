import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';
import { Submit } from './pages/Submit';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search.startsWith('?/')) {
      const path = location.search.slice(2);
      const newPath = path.replace(/~and~/g, '&');
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
