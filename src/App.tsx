import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
