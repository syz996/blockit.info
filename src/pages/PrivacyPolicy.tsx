import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { pageview } from '../utils/analytics';
import { SEOHead } from '../components/SEOHead';


export function PrivacyPolicy() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    pageview(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title={t('privacy.seoTitle', 'Privacy Policy - Gar-Type')}
        description={t('privacy.seoDescription', 'Learn about how Gar-Type collects and protects your personal information. Read our privacy policy for detailed information about data usage and protection.')}
      />
      {/* Rest of the component remains the same */}
    </div>
  );
}