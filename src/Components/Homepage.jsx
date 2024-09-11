import React, { useState, useEffect, useRef } from "react";
import "../Style/Homepage.css";
import { Link } from "react-router-dom";
import ImageHome from "../Images/HomepageImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ImageHome2 from "../Images/Grosso enorme uomo.jpg";
import Daniele from "../Images/Daniele.png";
import Mich from "../Images/Mich.png";
import Gio from "../Images/Gio.png";
import Christian from "../Images/Christaian.png";
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
          <li><Link to="/Prenotazioni">Prenotazioni</Link></li>
          <li><Link to="/Coach">I nostri Coach</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/Contattaci">Contattaci</Link></li>
          <li><Link to="/Abbonamenti">Abbonamenti</Link></li>
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
          <Link to="/Abbonamenti">    
           <button className="cta-button">Inizia con noi</button></Link>
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
                <Link to="/Coach"> <button className="btn discover-button">SCOPRI</button></Link>
              </div>
            </div>
            <div className="image-section">
              <img src={ImageHome2} alt="Grosso enorme uomo" className="car-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
  <div className="banner-overlay">
    <h4 className="banner-title">Tutti i Nostri Servizi</h4>
    <div className="banner-content">
      <div className="banner-item">
        <h5 className="banner-subtitle">La Nostra Visione</h5>
        
        <p>Per ispirare le persone a realizzare i loro obiettivi personali nel fitness mettiamo a disposizione un insieme di programmazione personalizzata!</p>
      </div>
      <div className="banner-item">
        <h5 className="banner-subtitle">I Nostri Servizi</h5>
        <p>Offriamo un insieme di abbonamenti e uno shop ricco di offerte,oltre a un Team di coach che avrai a disposizione!</p>
      </div>
      <div className="banner-item">
        <h5 className="banner-subtitle">Il Nostro Team</h5>
        <p>Siamo prima una Famiglia e poi un Team di esperti del mondo del Fitness già con anni di esperienza alle spalle </p>
      </div>
      <div className="banner-item">
        <h5 className="banner-subtitle">Inizia con Noi</h5>
        <p>Contattaci per maggiori informazioni per iniziare la tua avventura con il Team di Passion Iron.</p>
      </div>
    </div>
    <div >
      <Link to="/Abbonamenti"> <button className=" btn banner-button">Abbonati</button></Link>

      </div>
  </div>
</div>
<div className="card-section">
  <h2 className="card-section-title">Conosci Il Nostro Team di Esperti</h2>
  <div className="card-container">
    <div className="card">
      <img src={Daniele} alt="Daniele Barbato" className="card-image" />
      <div className="card-info">
        <h3 className="card-name">Daniele Barbato</h3>
        <p className="card-bio">Atleta, Coach e motivatore, con anni di esperienza in allenamenti e gare di bodyBuilding</p>
      </div>
    </div>
    <div className="card">
      <img src={Gio} alt="Giovanni Cinque" className="card-image" />
      <div className="card-info">
        <h3 className="card-name">Giovanni Cinque</h3>
        <p className="card-bio">Specializzato in fitness e Powerlifting, motivatore, coach e atleta in gara!</p>
      </div>
    </div>
    <div className="card">
      <img src={Mich} alt="Michele Capuano" className="card-image" />
      <div className="card-info">
        <h3 className="card-name">Michele Capuano</h3>
        <p className="card-bio">Capo Fondatore dello Studio Passion Iron e del nostro metodo personalizzato</p>
      </div>
    </div>
    <div className="card">
      <img src={Christian} alt="Christian Iacono" className="card-image" />
      <div className="card-info">
        <h3 className="card-name">Christian Iacono</h3>
        <p className="card-bio">Trainer Certificato con anni di esperienza con Laurea Mag. Prevenzione e Benessere e Laurea in Scienze Motorie</p>
      </div>
    </div>
  </div>
</div>
<div className="be-passionate-section">
  <h2 className="be-passionate-title">Allora ti abbiamo convinto?</h2>
  <div className="underline"></div>
  <div className="arrow">▼</div>
  <p className="be-passionate-quote">
  Ti aspetta uno spazio tutto dedicato a te,troverai tante persone con storie diverse che mettono le proprie passioni a disposizione di tutti. Un fitness team tutto italiano.
  </p>
</div>
<div class="booking-banner">
<div class="booking-content">
  <span class="booking-text">Prenota la tua prima lezione <span class="highlight">ADESSO</span></span>
  <Link to="/Prenotazioni">  <button class="booking-button">Prenota Ora</button></Link>

</div>
</div>
<div class="footer">
  <p>© 2019 Passion Iron,Questo sito ha solo uno scopo dimostrativo e non rappresenta un'offerta reale.</p>
</div>
    </div>
  );
};

export default HomePage;
