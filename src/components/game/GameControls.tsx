import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Star, Bomb, Rainbow, Gem } from 'lucide-react';
import { SPECIAL_GEMS, GEMS } from '../../types/game';

function GameControls() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-black/20 backdrop-blur-sm rounded-lg p-6"
    >
      <h2 className="text-xl font-bold text-white mb-4">How to Play</h2>
      
      <div className="space-y-6">
        <Tip
          icon={<Diamond className="w-5 h-5" />}
          text="Click empty cells to place gems. Match 3 or more of the same type!"
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Available Gems</h3>
          {Object.entries(GEMS).map(([name, { color }]) => (
            <div
              key={name}
              className="flex items-center gap-2 p-2 rounded-lg"
              style={{ backgroundColor: `${color}20` }}
            >
              <Gem className="w-5 h-5" style={{ color }} />
              <span className="text-white">{name.charAt(0) + name.slice(1).toLowerCase()}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Special Gems</h3>
          <SpecialGemInfo
            icon={<Rainbow className="w-5 h-5" />}
            name="Rainbow Gem"
            description={SPECIAL_GEMS.rainbow.effect}
            color="from-purple-500 to-pink-500"
          />
          <SpecialGemInfo
            icon={<Bomb className="w-5 h-5" />}
            name="Bomb Gem"
            description={SPECIAL_GEMS.bomb.effect}
            color="from-red-500 to-orange-500"
          />
          <SpecialGemInfo
            icon={<Star className="w-5 h-5" />}
            name="Star Gem"
            description={SPECIAL_GEMS.star.effect}
            color="from-yellow-500 to-amber-500"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Scoring</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• 3 gems: 100 points</li>
            <li>• 4 gems: 300 points</li>
            <li>• 5 gems: 600 points</li>
            <li>• 6+ gems: 1000 points</li>
          </ul>
          <p className="text-sm text-purple-400 mt-2">Chain matches to build combos for bonus points!</p>
        </div>
      </div>
    </motion.div>
  );
}

function Tip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-3"
    >
      <div className="text-purple-400 mt-1">{icon}</div>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}

function SpecialGemInfo({ icon, name, description, color }: { icon: React.ReactNode; name: string; description: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-r ${color} p-0.5 rounded-lg`}
    >
      <div className="bg-black/90 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <span className="text-white font-semibold">{name}</span>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default GameControls;