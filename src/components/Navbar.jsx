import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import portfolio from '../assets/portfolio.png';

const navLinkClass = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();

  }, [location.pathname]);

  useEffect(() => {
    function onMouseDown(e) {
      if (!isOpen) return;
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeMenu();
    }

    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (!isOpen) return;
      if (e.key === 'Escape') closeMenu();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="navbar" role="navigation" aria-label="Hovedmeny">
      <Link to="/" className="brand" aria-label="Gå til forsiden">
        <img src={portfolio} alt="Logo" className="logo" />
      </Link>

      <button
        type="button"
        className="hamburger"
        aria-controls="primary-nav"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
        onClick={toggleMenu}
      >
        <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
      </button>

      <ul id="primary-nav" className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={navLinkClass}>
            Hjem
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass}>
            Om meg
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={navLinkClass}>
            Portefølje
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}




