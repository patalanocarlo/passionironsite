import React from 'react';
import '../Style/Contatti.css';  // Assicurati di avere il CSS nel percorso corretto
import '@fortawesome/fontawesome-free/css/all.min.css';
const Contattaci = () => {
  return (
    <div className="support-container">
      <h1>Come vorresti ricevere assistenza?</h1>
      <p>In base alle informazioni che ci hai riferito, queste sono le opzioni migliori.</p>

      {/* Sezione delle opzioni di supporto */}
      <div className="options-container">
        <div className="option-card">
          <i className="fas fa-phone-alt option-icon"></i>
          <h3>Parla con il supporto ora</h3>
          <p>Fornisci il tuo numero e ti richiameremo subito. Tempo d'attesa: 2 minuti al massimo.</p>
        </div>

        <div className="option-card">
          <i className="fas fa-comments option-icon"></i>
          <h3>Chat via Social</h3>
          <p>Puoi Contattarci direttamente sui Nostri Canali social di Facebook e Instagram</p>
        </div>

        <div className="option-card">
          <i className="fas fa-toolbox option-icon"></i>
          <h3>Vieni a trovarci in Studio</h3>
          <p>Hai Bisogno di Informazioni direttamente dal vivo?Vieni a trovarci nella nostra sede,Ti aspettiamo!</p>
        </div>
      </div>

      {/* Sezione "Altre opzioni" */}
      <div className="other-options">
        <h2 className='color3'>Altre opzioni</h2>
        <ul>
          <li><a href="#">Visita il Nostro shop di prodotti Fitness</a></li>
          <li><a href="#">Ottieni informazioni sui nostri coach</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contattaci;