import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Voto from './pages/Voto.jsx';
import VotoJaConfirmado from './pages/VotoJaConfirmado.jsx';
import Sobre from './pages/Sobre.jsx';
import PerfilCafeteria from './pages/PerfilCafeteria.jsx';
import Confirmacao from './pages/Confirmacao.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/voto" element={<Voto />} />
        <Route path="/voto-ja-confirmado" element={<VotoJaConfirmado />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil-cafeteria" element={<PerfilCafeteria />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </Router>
  );
}

export default App;
