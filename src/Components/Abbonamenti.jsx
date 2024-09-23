import React, { useEffect, useRef, useState } from 'react';
import '../Style/Abbonamento.css'; 
import { Link, useNavigate } from "react-router-dom";
import personaImage from '../Images/christian-buehner-QLcxFso3gLk-unsplash-removebg.png';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useAuthContext } from '../Components/AuthContext'; 
const stripePromise = loadStripe('pk_test_51PgiuoRoqJCjOJgQOgcXBwJSUQuqkluMbchOS3bM2PAA9JsbycUco5Y9kOoHjYravhi37L25wKhACAp1JDT0vn1700owDLitg8'); // Chiave pubblica di Stripe

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
    svantaggi: [
      "Nutrizionista Personale", 
      "Controllo peso e dieta",  
      "Gare Bodybuilding e PowerLifting", 
      "Maglie e gadget Brendizzate",
    ],
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
    svantaggi: [
      "Nutrizionista Personale", 
      "Controllo peso e dieta", 
      "Gare Bodybuilding e PowerLifting",
    ],
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
      "Nutrizionista Personale", 
      "Controllo peso e dieta",
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
      "Nutrizionista Personale", 
      "Controllo peso e dieta",
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
    nome: "LDI_03",
    commento: "Le sessioni personal mi hanno davvero aiutato a migliorare la mia tecnica.",
    stelle: 5,
  },
  {
    nome: "Francesca Viola",
    commento: "Servizio clienti e supporto eccellente!",
    stelle: 4,
  },
];

const Abbonamenti = () => {
  const pianiMensiliRef = useRef(null);
  const abbonamentiRef = useRef(null);
  const finalSectionRef = useRef(null);
  const recensioniRef=useRef(null)
  const [showModal, setShowModal] = useState(false);
  const [selectedPiano, setSelectedPiano] = useState(null);
  const { authState } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = [
      pianiMensiliRef.current,
      abbonamentiRef.current,
      recensioniRef.current,
      finalSectionRef.current
    ];

    elements.forEach((el) => {
      if (el) {
        el.classList.add('hidden');
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const openModal = (piano) => {
    setSelectedPiano(piano);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPiano(null);
  };

  const handleAbbonatiClick = (piano) => {
    if (!authState.token) {
      navigate("/login");
    } else {
      openModal(piano);
    }
  };

  return (
    <div>
      <div className="banner3">
        <div className="banner-text">
          Benvenuto nella nostra Famiglia <strong className="color">Passion Iron</strong>
        </div>
      </div>

      <div ref={pianiMensiliRef} className="piani-mensili-section hidden">
        <h2 className="piani-mensili-title">Ecco tutti i nostri piani Mensili</h2>
        <div className="underline"></div>
        <div className="arrow">▼</div>
        <p className="piani-mensili-quote">
          Qui potrai vedere tutti i nostri piani mensili, le offerte e tutti i vantaggi disponibili!
        </p>
      </div>

      <div ref={abbonamentiRef} className="abbonamenti-section hidden">
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
                onClick={() => handleAbbonatiClick(piano)}
              >
                {piano.bottone}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div ref={recensioniRef} className="recensioni-section hidden"> <h2 className="recensioni-title">Non sei ancora sicuro?</h2> <div className="underline"></div> <div className="arrow">▼</div> <p className="recensioni-quote"> Leggi le recensioni della nostra community e dei nostri atleti! </p> <div className="recensioni-grid"> {recensioni.map((recensione, index) => ( <div key={index} className="recensione-card"> <h4 className="recensione-nome">{recensione.nome}</h4> <p className="recensione-commento">{recensione.commento}</p> <div className="recensione-stelle"> {"★".repeat(recensione.stelle)}{"☆".repeat(5 - recensione.stelle)} </div> </div> ))} </div> </div>
      <div ref={finalSectionRef} className="final-section hidden">
        <div className="final-content">
          <div className="final-image-container">
            <img src={personaImage} alt="Persona" className="final-image" />
          </div>

          <div className="final-text">
            <h2>Entra nella nostra community</h2>
            <p>
              Diventa parte della nostra famiglia e allenati con i migliori professionisti del settore.
              Passa al livello successivo con il supporto di coach esperti, una scheda di allenamento
              personalizzata e consigli nutrizionali su misura per te. Non esitare, inizia il tuo viaggio
              verso una forma fisica ottimale oggi stesso!
            </p>

            <div className="piani-mensili-section2">
              <h2 className="piani-mensili-title2">Dubbi o domande?</h2>
              <div className="underline2"></div>
              <div className="arrow2">▼</div>
              <p className="piani-mensili-quote2">
                Hai qualche domanda da farci in più? Non esitare a contattarci!
              </p>
              <Link to="/contattaci">
                <button className="cta-button2">Contattaci</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modale per il pagamento */}
      {showModal && (
   <div className="modal-overlay">
   <div className="modal-content">
     <h3 className="modal-title">Pagamento per il piano: {selectedPiano.titolo}</h3>
     <Elements stripe={stripePromise}>
       <StripePaymentForm piano={selectedPiano} closeModal={closeModal} />
     </Elements>
     <div className="modal-buttons">
       <button className="modal-close-button" onClick={closeModal}>Chiudi</button>
  
     </div>
   </div>
 </div>
 
      )}
    </div>
  );
};

const StripePaymentForm = ({ piano, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { authState } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
        console.error("Errore nella creazione del token:", error);
        return;
    }

    try {
      const response = await fetch('/api/pagamenti/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authState.token}`, // Assicurati che il token sia valido
        },
        body: JSON.stringify({
            stripeToken: token.id,
            pianoId: piano.id,
            amount: parseInt(piano.prezzo.replace('€', '').replace(',', '').trim()) * 100,
        }),
    });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Errore nel pagamento:", errorText);
            alert("Errore nel pagamento: " + errorText);
            return;
        }

        const jsonData = await response.json();
        alert("Pagamento riuscito! ID del pagamento: " + jsonData);
        closeModal();
        navigate('/abbonamento-successo');
    } catch (error) {
        console.error("Errore nella richiesta al server:", error);
        alert("Errore nel pagamento. Riprova più tardi.");
    }
};
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="modal-pay-button"    type="submit" disabled={!stripe}>Paga ora</button>
    </form>
  );
};

export default Abbonamenti;
