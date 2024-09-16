import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthContext'; 
import '../Style/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState(''); // Usa username per il login
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            login(data.token, { username: data.user.username }); // Assicurati che questo sia solo l'username
            navigate('/');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Errore durante il login:', error);
    }
};

  return (
    <div className="login-background">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Inserisci il tuo username" 
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
