import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('program')}>Program</li>
        <li onClick={() => scrollToSection('about')}>About us</li>
        <li onClick={() => scrollToSection('campus')}>Campus</li>
        <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
        <li><button className='btn' onClick={() => scrollToSection('contact')}>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar