import React, { useState, useEffect, useRef } from "react";
import "../Style/Homepage.css";
import ImageHome from "../Images/HomepageImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ImageHome2 from "../Images/Grosso enorme uomo.jpg";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); 
  const aboutSectionRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, [hasAnimated]);

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
          <a href="mailto:info@passioniron.com" className="social-icon" target="_blank" rel="noopener noreferrer">
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

      <div 
        className={`about-us-section ${hasAnimated ? "animate" : ""}`} 
        ref={aboutSectionRef}
      >
        <div className="about-container">
          <div className="about-row">
            <div className="text-section">
              <div className="section-header">
                <span className="subtitle">Chi siamo</span>
                <h1 className="main-title">Professionisti da oltre 10 anni</h1>
              </div>
              <div className="section-description">
                <h3 className="company-name">Passion Iron</h3>
                <p>
                  Passion Iron è una giovane e dinamica azienda nata agli inizi del 2020, ma lo staff e i titolari operano nel settore già da decenni.
                </p>
                <p>
                  L’obiettivo del Team di Passion Iron è quello di sviluppare e perfezionare il rapporto con il cliente, mettendo a sua disposizione un’organizzazione efficiente e personale altamente specializzato e con elevate professionalità.
                </p>
                <p>
                  Come servizio principale il Team di Passion Iron offre degli abbonamenti mensili ed annuali ai quali iscriversi per ottenere l'accesso allo studio Personal,in seguito è possibile effettuare gli allenamenti con un coach pensato a te su misura!
                </p>
                <p>
                  Per avere maggiori informazioni, non esitate a contattarci!
                </p>
                <button className="btn discover-button">SCOPRI</button>
              </div>
            </div>
            <div className="image-section">
              <img src={ImageHome2} alt="Grosso enorme uomo" className="car-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
