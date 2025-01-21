import React, { useState } from 'react';
import { Maximize, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function GameSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const handlePlay = () => setIsPlaying(true);

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      iframe.requestFullscreen();
    }
  };

  return (
    <section id="game" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Gar-Type
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('about.description')}
        </p>
        <div className="relative aspect-video max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <button
                onClick={handlePlay}
                className="bg-white text-black px-8 py-4 rounded-full flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
              >
                <Play className="w-6 h-6" />
                <span className="font-medium">{t('game.playButton')}</span>
              </button>
            </div>
          ) : (
            <>
              <iframe
                src="https://html-classic.itch.zone/html/12341048/index.html"
                className="w-full h-full"
                allow="fullscreen"
              />
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
                title={t('game.fullscreen')}
              >
                <Maximize className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}