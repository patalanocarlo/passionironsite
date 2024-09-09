import React, { useState } from "react";
import "../Style/Homepage.css";
import ImageHome from "../Images/HomepageImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Passion Iron</div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#about">Prenotazioni</a></li>
          <li><a href="#vehicles">I nostri Coach</a></li>
          <li><a href="#contacts">Shop</a></li>
          <li><a href="#contacts">Contatti</a></li>
          <li><a href="#contacts">Abbonamenti</a></li>
        </ul>
        <div className="social-links">
        <a href="https://www.instagram.com/passion_iron/" className="social-icon" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faInstagram} />
</a>
<a href="https://www.facebook.com/teampassioniron/" className="social-icon" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFacebookF} />
</a>
<a href="
info@passioniron.com" className="social-icon" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faEnvelope} />
</a>

        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      <div className="hero-image">
        <img src={ImageHome} alt="Car" />
        <div className="hero-overlay"></div>
        <div className="hero-text">Build Yourself!</div>
        <div className="cta-container">
    <button className="cta-button">Inizia con noi</button>
  </div>

      </div>

      <div className="content">
        <section id="about">
          <h2>About</h2>
          <p>Content about Prenotazioni...</p>
        </section>
        <section id="vehicles">
          <h2>Our Coaches</h2>
          <p>Content about I nostri Coach...</p>
        </section>
        <section id="contacts">
          <h2>Contacts</h2>
          <p>Content about Contatti...</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
