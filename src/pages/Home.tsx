import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Trophy, BookOpen, Sparkles, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
console.log(Link)
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-4">
          Welcome to Block IT
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Challenge yourself in this addictive puzzle game where strategy meets speed.
          Match blocks, trigger special effects, and climb the global leaderboard!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Gamepad2 className="w-12 h-12" />}
          title="Play Now"
          description="Jump into action with special blocks and power-ups"
          link="/game"
          linkText="Start Game"
          delay={0.1}
        />
        <FeatureCard
          icon={<Trophy className="w-12 h-12" />}
          title="Leaderboard"
          description="Compete globally and showcase your skills"
          link="/leaderboard"
          linkText="View Rankings"
          delay={0.2}
        />
        <FeatureCard
          icon={<BookOpen className="w-12 h-12" />}
          title="Learn to Play"
          description="Master special blocks and advanced strategies"
          link="/tutorial"
          linkText="View Tutorial"
          delay={0.3}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <SpecialBlockCard
          icon={<Sparkles className="w-8 h-8" />}
          title="Rainbow Block"
          description="Matches with any color! Create epic chain reactions"
          color="from-purple-500 to-pink-500"
        />
        <SpecialBlockCard
          icon={<Target className="w-8 h-8" />}
          title="Bomb Block"
          description="Clears surrounding blocks for massive points"
          color="from-red-500 to-orange-500"
        />
        <SpecialBlockCard
          icon={<Zap className="w-8 h-8" />}
          title="Star Block"
          description="Clears entire rows and columns at once"
          color="from-yellow-500 to-amber-500"
        />
        <SpecialBlockCard
          icon={<Trophy className="w-8 h-8" />}
          title="Combo System"
          description="Chain matches for multiplier bonuses"
          color="from-green-500 to-emerald-500"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative rounded-2xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
          alt="Gaming Setup"
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
      </motion.div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  link,
  linkText,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
    >
      <div className="text-purple-400 group-hover:scale-110 transform transition-transform duration-200 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block text-purple-400 hover:text-purple-300 font-semibold transition-colors group-hover:translate-x-2 transform duration-200"
      >
        {linkText} →
      </Link>
    </motion.div>
  );
}

function SpecialBlockCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-r ${color} p-0.5 rounded-xl`}
    >
      <div className="bg-black/90 rounded-xl p-6 h-full">
        <div className="text-white mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export default Home;