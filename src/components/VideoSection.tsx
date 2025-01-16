import React from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const videos = [
  {
    id: 'FQSPCvJDbls',
    title: 'Gameplay Overview',
  },
  {
    id: 'Ji045usI72U',
    title: 'Advanced Strategies',
  },
  {
    id: 'i-9hIsEsSSo',
    title: 'Tips & Tricks',
  },
];

export function VideoSection() {
  const { t } = useTranslation();

  return (
    <section id="videos" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {t('nav.videos')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="hover-scale">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-xl font-medium mt-4 text-center text-gray-300">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}