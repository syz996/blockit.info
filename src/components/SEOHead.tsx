import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  image = 'https://example.com/default-image.jpg', // Replace with your default image
  type = 'website'
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentUrl = `https://gartype.game${location.pathname}`; // Replace with your domain

  const defaultTitle = t('seo.title', 'Gar-Type - Free Pixel Art Shooter Game');
  const defaultDescription = t('seo.description', 'Gar-Type is a free pixel art shooter game with intense action and humor. Defend Earth from the living planet Gar\'s invasion in this sci-fi adventure.');
  const defaultKeywords = t('seo.keywords', 'pixel art game, shooter game, sci-fi game, free online game, arcade game');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={i18n.language} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Alternate Language Links */}
      {['en', 'fr', 'ru', 'pt', 'ja', 'ko', 'ar', 'it'].map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`https://gartype.game/${lang}${location.pathname.substring(3)}`}
        />
      ))}
    </Helmet>
  );
}