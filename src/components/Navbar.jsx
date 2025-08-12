import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import portfolio from '../assets/portfolio.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Hovedmeny">
      <Link to="/" onClick={closeMenu} className="brand">
        <img src={portfolio} alt="Figur av Emily" className="logo" />
      </Link>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Åpne/lukk meny"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
      >
        ☰
      </button>

      <ul id="primary-nav" className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={closeMenu}>Hjem</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>Om</NavLink></li>
        <li><NavLink to="/portfolio" onClick={closeMenu}>Portefølje</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Kontakt</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;



