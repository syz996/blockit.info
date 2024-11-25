import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, BookOpen, Sparkles, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4">
          Block IT - Innovative Puzzle Game with Special Powers
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Experience an innovative puzzle game where strategy meets excitement. Match gems, trigger special powers, and compete globally!
        </p>
      </motion.div>

      <section aria-label="Game Features" className="grid md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Sparkles className="w-12 h-12" />}
          title="Special Gems"
          description="Unlock powerful special gems like Rainbow, Bomb, and Star to create spectacular chain reactions!"
        />
        <FeatureCard
          icon={<Trophy className="w-12 h-12" />}
          title="Global Competition"
          description="Compete with players worldwide and climb the leaderboard with your strategic gameplay!"
        />
        <FeatureCard
          icon={<Target className="w-12 h-12" />}
          title="Chain Reactions"
          description="Create amazing chain reactions to multiply your score and unlock achievements!"
        />
      </section>

      <section aria-label="Game Modes" className="grid md:grid-cols-2 gap-8 mb-16">
        <GameModeCard
          title="Classic Mode"
          description="Match gems strategically to achieve the highest score possible. No time limit!"
          icon={<Gamepad2 className="w-8 h-8" />}
          link="/game"
          buttonText="Play Now"
        />
        <GameModeCard
          title="Challenge Mode"
          description="Complete special missions and daily challenges to earn bonus rewards!"
          icon={<Zap className="w-8 h-8" />}
          link="/game?mode=challenge"
          buttonText="Start Challenge"
        />
      </section>

      <section aria-label="Game Preview" className="relative rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
          alt="Immersive Gaming Experience"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Challenge Yourself?</h2>
            <p className="text-gray-300 mb-4">Join thousands of players worldwide in Block IT</p>
            <Link
              to="/game"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Play Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
    >
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.article>
  );
}

function GameModeCard({ 
  title, 
  description, 
  icon, 
  link, 
  buttonText 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link: string; 
  buttonText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-purple-400">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
      >
        {buttonText}
      </Link>
    </motion.div>
  );
}

export default Home;