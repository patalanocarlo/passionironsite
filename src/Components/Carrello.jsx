import React from 'react';
import '../Style/Carrello.css';

const Carrello = ({ articoli, totale }) => {
  return (
    <div className="carrello-page">
      <div className="carrello-left">
        <h2>Riepilogo Carrello</h2>
        <ul className="carrello-items">
          {articoli.length > 0 ? (
            articoli.map((articolo, index) => (
              <li key={index} className="carrello-item">
                <span className="item-name">{articolo.nome}</span>
                <span className="item-prezzo">{articolo.prezzo} €</span>
              </li>
            ))
          ) : (
            <p>Il carrello è vuoto.</p>
          )}
        </ul>
        <div className="carrello-totale">
          <strong>Totale: {totale} €</strong>
        </div>
      </div>
      <div className="carrello-right">
        <button className="acquista-button">Acquista</button>
      </div>
    </div>
  );
};

export default Carrello;
