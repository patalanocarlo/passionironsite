import React from "react";
import "../Style/Homepage.css";
import ImageHome from "../Images/HomepageImage.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">Passion Iron</div>
        <ul className="nav-links">
          <li><a href="#about">Prenotazioni</a></li>
          <li><a href="#vehicles">I nostri Coach</a></li>
          <li><a href="#contacts">Contatti</a></li>
        </ul>
        <div className="social-links">
          <a href="#instagram" className="social-icon">📷</a>
          <a href="#facebook" className="social-icon">📘</a>
          <a href="#tiktok" className="social-icon">🎵</a>
        </div>
      </nav>

      <div className="hero-image">
        <img src={ImageHome} alt="Car" />
        <div className="hero-overlay"></div>
        <div className="hero-text">Build Yourself!</div>
      </div>

      <div className="content">
        {/* Aggiungi qui il contenuto della tua pagina */}
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
