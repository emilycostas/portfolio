import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PortfolioPage from './components/PortfolioPage';

function NotFound() {
  return (
    <main className="page">
      <div className="container">
        <h1>Fant ikke siden</h1>
        <p>Siden du prøvde å åpne finnes ikke.</p>
        <p>
          Du kan gå tilbake til <a href="/">forsiden</a>.
        </p>
      </div>
    </main>
  );
}

export default function App() {

  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}






