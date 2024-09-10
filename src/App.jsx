import HomePage from "./Components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from  "./Components/ShopPage"
import Contattaci from  "./Components/Contattaci"
import './App.css';
import Coach from  "./Components/NostriCoach"
import Prenotazioni from  "./Components/Prenotazioni"
import Abbonamenti from  "./Components/Abbonamenti"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />  
        <Route path="/Contattaci" element={<Contattaci />} />  
        <Route path="/Abbonamenti" element={<Abbonamenti />} />  
        <Route path="/Contattaci" element={<Contattaci />} />  
        <Route path="/Prenotazioni" element={<Prenotazioni />} />  
        <Route path="/Coach" element={<Coach />} />  
      </Routes>
    </Router>
  );
}

export default App;
