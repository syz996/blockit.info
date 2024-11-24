import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Flame, Star } from 'lucide-react';

interface GameStatsProps {
  score: number;
  level: number;
  combo: number;
}

function GameStats({ score, level, combo }: GameStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-black/20 backdrop-blur-sm rounded-lg p-6 space-y-6"
    >
      <h2 className="text-xl font-bold text-white mb-4">Stats</h2>
      
      <div className="space-y-4">
        <StatItem
          icon={<Trophy className="w-5 h-5" />}
          label="Score"
          value={score}
          color="text-yellow-400"
        />
        
        <StatItem
          icon={<Zap className="w-5 h-5" />}
          label="Level"
          value={level}
          color="text-blue-400"
        />

        <StatItem
          icon={<Flame className="w-5 h-5" />}
          label="Combo"
          value={`x${combo}`}
          color="text-red-400"
        />

        {combo >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 flex items-center gap-2"
          >
            <Star className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Super Combo!</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function StatItem({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number | string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-between group"
    >
      <div className={`flex items-center gap-2 ${color}`}>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {icon}
        </motion.div>
        <span className="text-gray-300">{label}</span>
      </div>
      <motion.span
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl font-bold text-white"
      >
        {value}
      </motion.span>
    </motion.div>
  );
}

export default GameStats;