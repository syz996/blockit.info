import React from 'react';
import { Menu, Gamepad2 } from 'lucide-react';
import { Link } from './Link';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Gar Type
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#game">{t('nav.playGame')}</Link>
            <Link href="#videos">{t('nav.videos')}</Link>
            <Link href="#about">{t('nav.about')}</Link>
            <Link href="#faq">{t('nav.faq')}</Link>
            <Link href="#reviews">{t('nav.reviews')}</Link>
            <LanguageSelector />
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-gray-800">
            <Link href="#game" className="block py-2">{t('nav.playGame')}</Link>
            <Link href="#videos" className="block py-2">{t('nav.videos')}</Link>
            <Link href="#about" className="block py-2">{t('nav.about')}</Link>
            <Link href="#faq" className="block py-2">{t('nav.faq')}</Link>
            <Link href="#reviews" className="block py-2">{t('nav.reviews')}</Link>
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}