import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainLayout from './layouts/MainLayout';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { initGA } from './utils/analytics';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
          <Route path="/:lang" element={<MainLayout />} />
          <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
          <Route path="/:lang/terms" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;