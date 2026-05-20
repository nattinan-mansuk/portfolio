import React, { useState, useEffect } from 'react';
import './Navbar.css';
import profileImg from '../assets/profile.jpg';

const links = ['Home','About','Skills','Works'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__avatar" onClick={() => scrollTo('Home')}>
        <img src={profileImg} alt="Kie" />
      </div>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button
              className={active === l ? 'nav-active' : ''}
              onClick={() => scrollTo(l)}
            >
              {l}
              {active === l && <span className="nav-dot" />}
            </button>
          </li>
        ))}
      </ul>

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
