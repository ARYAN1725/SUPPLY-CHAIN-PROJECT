import { useState } from 'react'
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AboutUs from './Pages/AboutUs'; 
import OrdersPage from './Pages/OrdersPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/orders" element={<OrdersPage />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App
