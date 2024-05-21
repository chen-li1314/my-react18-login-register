import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import MainPage from './components/Main';
import Gpt4Loginpt4  from './components/Gpt4Login';
import Gpt4Registr from './components/Gpt4Registr';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/gptlogin" element={<Gpt4Loginpt4 />} />
      <Route path="/gptregister" element={<Gpt4Registr />} />
    </Routes>
  </Router>
  );
}

export default App;
