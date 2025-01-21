import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';


export function TermsOfService() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title={t('terms.seoTitle', 'Terms of Service - Gar-Type')}
        description={t('terms.seoDescription', 'Read Gar-Type\'s terms of service to understand the rules and guidelines for playing our game. Learn about user conduct and intellectual property rights.')}
      />
      {/* Rest of the component remains the same */}
    </div>
  );
}