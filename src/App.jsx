import HomePage from "./Components/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopPage from  "./Components/ShopPage"
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />  {/* Aggiungi questa rotta */}
      </Routes>
    </Router>
  );
}

export default App;
