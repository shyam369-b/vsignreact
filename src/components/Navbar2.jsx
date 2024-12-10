import React, { useState } from 'react';
import vsignwhite from '../assets/Logo 132.png';
import Logowhite from '../assets/Logo12.png';


const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-component2">
  {/* Left Section: Logos and Rating */}
  <div className="navbar-logos">
    <img src={vsignwhite} alt="Logo 1" />
    <img src={Logowhite} alt="Logo 2" />
    <div className="divider2"></div>
    {/* Rating Section */}
    <div className="navbar-rating">
      <div className="rating-value2">4.52</div>
      <div className="rating">
        <div className="stars">
          <span className="star full">★</span>
          <span className="star full">★</span>
          <span className="star full">★</span>
          <span className="star full">★</span>
          <span className="star half2">★</span>
        </div>
      </div>
      <div className="rating-text2">
        <span>Average rating from 761 reviews</span>
      </div>
    </div>
  </div>

  {/* Right Section: Top Label */}
  <div className='top-label'>Top Quality Sign Construction,Delivered On Time</div>

  {/* Hamburger Menu Icon (Mobile View) */}
  <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  {/* Center Section: Links and Button */}
  <div className={`navbar-links2 ${isMenuOpen ? 'open' : ''}`}>
    <a href="/">Home</a>
    <a href="/pages/Aboutuspage">About Us</a>
    <a href="/pages/Servicespage">Our Services</a>
    <a href="/Products">Behind the Scenes</a>
    <a href="/Portfolio">Portfolio</a>
    <a href="/pages/Contactpage">Contact Us</a>
  </div>
</div>

  );
};

export default Navbar2;
