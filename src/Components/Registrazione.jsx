import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Registrazione.css';

const Registrazione = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    password: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati inviati:', formData);
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registrazione</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Inserisci il tuo nome"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cognome">Cognome</label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              placeholder="Inserisci il tuo cognome"
              value={formData.cognome}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Inserisci la tua email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Inserisci la tua password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Numero di Telefono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="Inserisci il tuo numero di telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">Registrati</button>
        </form>
        <p>
          Già registrato? <Link to="/login">Accedi qui</Link>
        </p>
      </div>
    </div>
  );
};

export default Registrazione;