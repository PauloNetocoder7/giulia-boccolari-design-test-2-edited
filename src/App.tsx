import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { ChiSono } from './pages/ChiSono';
import { ComeLavoro } from './pages/ComeLavoro';
import { EtaEvolutiva } from './pages/EtaEvolutiva';
import { NeurodivergenzeAdulti } from './pages/NeurodivergenzeAdulti';
import { DiagnosiAdhdAdulto } from './pages/DiagnosiAdhdAdulto';
import { SupportoPsicologico } from './pages/SupportoPsicologico';
import { Risorse } from './pages/Risorse';
import { ArticlePage } from './pages/ArticlePage';
import { Contatti } from './pages/Contatti';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-crema text-antracite">
        {/* Top Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-sono" element={<ChiSono />} />
            <Route path="/come-lavoro" element={<ComeLavoro />} />
            <Route path="/eta-evolutiva" element={<EtaEvolutiva />} />
            <Route path="/neurodivergenze-adulti" element={<NeurodivergenzeAdulti />} />
            <Route path="/diagnosi-adhd-adulto" element={<DiagnosiAdhdAdulto />} />
            <Route path="/supporto-psicologico" element={<SupportoPsicologico />} />
            <Route path="/risorse" element={<Risorse />} />
            <Route path="/risorse/:slug" element={<ArticlePage />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            {/* Pagine dismesse: redirect alla Home invece di un 404 */}
            <Route path="/bariatrica" element={<Navigate to="/" replace />} />
            <Route path="/invecchiamento-attivo" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
