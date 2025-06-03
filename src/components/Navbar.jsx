import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
  <div className="navbar-logo">Emily</div>

  <button
    className="hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Meny"
  >
    ☰
  </button>

  <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Hjem</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>Om</a>
    <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portefølje</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a>
  </div>
</nav>

  );
}

export default Navbar;
