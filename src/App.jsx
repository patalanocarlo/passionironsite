import HomePage from "./Components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from  "./Components/ShopPage"
import Contattaci from  "./Components/Contattaci"
import './App.css';
import { AuthProvider } from './Components/AuthContext';
import Coach from  "./Components/NostriCoach"
import Prenotazioni from  "./Components/Prenotazioni"
import Abbonamenti from  "./Components/Abbonamenti"
import Registrati from "./Components/Registrazione"
import Login from "./Components/Login"
import Carrello from "./Components/Carrello";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />  
        <Route path="/Contattaci" element={<Contattaci />} />  
        <Route path="/Abbonamenti" element={<Abbonamenti />} />  
        <Route path="/Prenotazioni" element={<Prenotazioni />} />  
        <Route path="/Coach" element={<Coach />} />  
        <Route path="/Registrati" element={<Registrati />} />  
        <Route path="/Login" element={<Login />} />  
        <Route path="/Carrello" element={<Carrello />} />  
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
