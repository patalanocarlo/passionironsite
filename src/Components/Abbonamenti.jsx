import React from 'react';
import '../Style/Abbonamento.css'; 
import personaImage from '../Images/christian-buehner-QLcxFso3gLk-unsplash-removebg.png';
const piani = [
  {
    titolo: "BRONZO",
    prezzo: "€150",
    frequenza: "/mese",
    vantaggi: [
      "Accesso illimitato allo studio",
      "1 Sessione Personal con un coach al mese",
      "Consigli nutrizionali",
      "Scheda personalizzata",
   
    ],
    svantaggi: ["Nutrizionista Personale", "Controllo peso e dieta",  "Gare Bodybuilding e PowerLifting", "Maglie e gadget Brendizzate",],
    bottone: "Abbonati",
    colorePrezzo: "#00C853",
    coloreBottone: "#00C853",
  },
  {
    titolo: "ARGENTO",
    prezzo: "€200",
    frequenza: "/mese",
    vantaggi: [
      "Accesso illimitato allo studio",
      "3 Sessioni Personal con un coach al mese",
      "Scheda personalizzata",
      "Consigli nutrizionali",
      "Maglie e gadget Brendizzate",
    ],
    svantaggi: ["Nutrizionista Personale", "Controllo peso e dieta", "Gare Bodybuilding e PowerLifting"],
    bottone: "Abbonati",
    colorePrezzo: "#8E24AA",
    coloreBottone: "#8E24AA",
  },
  {
    titolo: "PREMIUM",
    prezzo: "€250",
    frequenza: "/mese",
    vantaggi: [
      "Accesso illimitato allo studio",
      "4 Sessioni Personal con un coach al mese",
      "Scheda personalizzata",
      "Consigli nutrizionali",
      "Maglie e gadget Brendizzate",
     "Nutrizionista Personale", "Controllo peso e dieta",
    ],
    svantaggi: ["Gare Bodybuilding e PowerLifting"],
    bottone: "Abbonati",
    colorePrezzo: "#FF5252",
    coloreBottone: "#FF5252",
  },
  {
    titolo: "PLATINO",
    prezzo: "€350",
    frequenza: "/mese",
    vantaggi: [
      "Accesso illimitato allo studio",
      "2 Sessioni Personal con un coach a settimana",
      "Scheda personalizzata",
      "Consigli nutrizionali",
      "Maglie e gadget Brendizzate",
      "Nutrizionista Personale", "Controllo peso e dieta",
      "Gare Bodybuilding e PowerLifting"
    ],
    svantaggi: [],
    bottone: "Abbonati",
    colorePrezzo: "#FF9800",
    coloreBottone: "#FF9800",
  },
];
const recensioni = [
  {
    nome: "Giulio De Rosa",
    commento: "Ottima palestra! Gli allenatori sono sempre disponibili e la scheda è perfetta per i miei obiettivi.",
    stelle: 5,
  },
  {
    nome: "Gaetano Ammirati",
    commento: "Il programma personalizzato mi ha aiutato tantissimo a migliorare la mia forma fisica!",
    stelle: 4,
  },
  {
    nome: "Giulia Badulli",
    commento: "Tutto il team è molto professionale, lo consiglio vivamente!",
    stelle: 5,
  },
  {
    nome: "Carla Patalano",
    commento: "L'ambiente è fantastico e il nutrizionista mi ha dato ottimi consigli.",
    stelle: 5,
  },
  {
    nome: "Alfredo Vuoso",
    commento: "Molto soddisfatto del programma Premium, anche se mi aspettavo più gare.",
    stelle: 3,
  },
  {
    nome: "Raffaele Capuano",
    commento: "Scheda e consigli ottimi, ambiente pulito e professionale.",
    stelle: 4,
  },
  {
    nome: "Francesco Cuomo",
    commento: "Le sessioni personal mi hanno davvero aiutato a migliorare la tecnica.",
    stelle: 5,
  },
  {
    nome: "Francesca Viola",
    commento: "Servizio clienti e supporto eccellente!",
    stelle: 4,
  },

];
const Abbonamenti = () => {
  return (
    <div>
      <div className="banner3">
        <div className="banner-text">
          Benvenuto nella nostra Famiglia <strong className="color">Passion Iron</strong>
        </div>
      </div>

      <div className="piani-mensili-section">
        <h2 className="piani-mensili-title">Ecco tutti i nostri piani Mensili</h2>
        <div className="underline"></div>
        <div className="arrow">▼</div>
        <p className="piani-mensili-quote">
          Qui potrai vedere tutti i nostri piani mensili, le offerte e tutti i vantaggi disponibili!
        </p>
      </div>

      <div className="abbonamenti-section">
        <div className="piani-grid">
          {piani.map((piano, index) => (
            <div key={index} className="piano-card">
              <h3 className="piano-title">{piano.titolo}</h3>
              <div
                className="piano-prezzo"
                style={{ backgroundColor: piano.colorePrezzo }}
              >
                <span className="prezzo">{piano.prezzo}</span>
                <span className="frequenza">{piano.frequenza}</span>
              </div>
              <ul className="piano-vantaggi">
                {piano.vantaggi.map((vantaggio, vIndex) => (
                  <li key={vIndex} className="vantaggio">
                    ✅ {vantaggio}
                  </li>
                ))}
                {piano.svantaggi.map((svantaggio, sIndex) => (
                  <li key={sIndex} className="svantaggio">
                    ❌ {svantaggio}
                  </li>
                ))}
              </ul>
              <button
                className="piano-button"
                style={{ backgroundColor: piano.coloreBottone }}
              >
                {piano.bottone}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="recensioni-section">
        <h2 className="recensioni-title">Non ti fidi ancora?</h2>
        <div className="underline"></div>
        <div className="arrow">▼</div>
        <p className="recensioni-quote">
          Leggi le recensioni della nostra community e dei nostri atleti!
        </p>

        <div className="recensioni-grid">
          {recensioni.map((recensione, index) => (
            <div key={index} className="recensione-card">
              <h4 className="recensione-nome">{recensione.nome}</h4>
              <p className="recensione-commento">{recensione.commento}</p>
              <div className="recensione-stelle">
                {"★".repeat(recensione.stelle)}{"☆".repeat(5 - recensione.stelle)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="final-section">
        <div className="final-content">
          {/* Immagine a sinistra */}
          <div className="final-image-container">
            <img src={personaImage} alt="Persona" className="final-image" />
          </div>
          {/* Testo a destra */}
          <div className="final-text">
            <h2>Entra nella nostra community</h2>
            <p>
              Diventa parte della nostra famiglia e allenati con i migliori professionisti del settore.
              Passa al livello successivo con il supporto di coach esperti, una scheda di allenamento
              personalizzata e consigli nutrizionali su misura per te. Non esitare, inizia il tuo viaggio
              verso una forma fisica ottimale oggi stesso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abbonamenti;
