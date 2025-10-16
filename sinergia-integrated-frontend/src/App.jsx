import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Importar componentes de layout e seções
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import InteractiveTools from './components/InteractiveTools';
import NichesSection from './components/NichesSection';
import AcademySection from './components/AcademySection';
import DashboardSection from './components/DashboardSection';
import CommunitySection from './components/CommunitySection';
import AmbassadorProgram from './components/AmbassadorProgram';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SystemsSection />
              <InteractiveTools />
              <NichesSection />
              <AcademySection />
            </>
          } />
          <Route path="/dashboard" element={<DashboardSection />} />
          <Route path="/community" element={<CommunitySection />} />
          <Route path="/ambassador" element={<AmbassadorProgram />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

