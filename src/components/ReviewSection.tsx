import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    author: "SpaceAce",
    rating: 5,
    comment: "Amazing pixel art and addictive gameplay! The boss battles are incredibly challenging.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
  },
  {
    author: "RetroGamer",
    rating: 4,
    comment: "Love the retro feel combined with modern mechanics. The power-up system is well thought out.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
  },
  {
    author: "PixelPilot",
    rating: 5,
    comment: "The attention to detail in the animations is incredible. Each level feels unique.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    author: "CosmicCritic",
    rating: 4,
    comment: "Solid shooter with great progression system. The story adds nice depth to the gameplay.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export function ReviewSection() {
  const { t } = useTranslation();

  return (
    <section id="reviews" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {t('nav.reviews')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 hover-scale">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.author}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}