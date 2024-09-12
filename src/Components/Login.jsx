import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css'; // Assicurati che il percorso sia corretto

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-background">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Inserisci la tua email" 
            required 
            className="login-input"
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Inserisci la tua password" 
            required 
            className="login-input"
          />
          <button type="submit" className="login-button">Accedi</button>
        </form>
        <p className="text-center color2">
          Non hai un account? <Link to="/Registrati">Registrati qui</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
