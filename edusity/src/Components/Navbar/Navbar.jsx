import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });

      setMobileMenu(false);
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      <ul className={mobileMenu ? 'nav-links active' : 'nav-links'}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('program')}>Program</li>
        <li onClick={() => scrollToSection('about')}>About Us</li>
        <li onClick={() => scrollToSection('campus')}>Campus</li>
        <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>

        <li>
          <button
            className="btn"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;