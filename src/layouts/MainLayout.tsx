import  { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';
import { Header } from '../components/Header';
import { GameSection } from '../components/GameSection';
import { VideoSection } from '../components/VideoSection';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { ReviewSection } from '../components/ReviewSection';
import { SocialShare } from '../components/SocialShare';
import { Footer } from '../components/Footer';

function MainLayout() {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead />
      <Header />
      <main>
        <GameSection />
        <VideoSection />
        <AboutSection />
        <FAQSection />
        <ReviewSection />
        <SocialShare />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;