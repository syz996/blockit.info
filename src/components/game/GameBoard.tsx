import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Bomb, Rainbow, Diamond, Gem } from 'lucide-react';
import { GemType } from '../../types/game';

interface GameBoardProps {
  board: (GemType | null)[][];
  onGemPlace: (row: number, col: number) => void;
  onGemRemove: (row: number, col: number) => void;
  isPlaying: boolean;
}

function GameBoard({ board, onGemPlace, onGemRemove, isPlaying }: GameBoardProps) {
  const getSpecialIcon = (special?: string) => {
    switch (special) {
      case 'star':
        return <Star className="w-6 h-6 text-white absolute" />;
      case 'bomb':
        return <Bomb className="w-6 h-6 text-white absolute" />;
      case 'rainbow':
        return <Rainbow className="w-6 h-6 text-white absolute" />;
      default:
        return null;
    }
  };

  const getGemIcon = (gemType: string) => {
    switch (gemType) {
      case 'diamond':
        return <Diamond className="w-8 h-8" />;
      default:
        return <Gem className="w-8 h-8" />;
    }
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className="aspect-square bg-black/20 backdrop-blur-sm rounded-lg p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="grid grid-cols-8 gap-1 h-full">
        <AnimatePresence>
          {board.map((row, rowIndex) =>
            row.map((gem, colIndex) => (
              <motion.button
                key={`${rowIndex}-${colIndex}`}
                initial={{ scale: 0.8, opacity: 0, rotateY: 0 }}
                animate={{ 
                  scale: gem ? 1 : 0.8,
                  opacity: 1,
                  rotateY: gem ? 360 : 0
                }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -360 }}
                whileHover={{ scale: 0.95, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => gem ? onGemRemove(rowIndex, colIndex) : onGemPlace(rowIndex, colIndex)}
                disabled={!isPlaying}
                className="aspect-square rounded-lg transition-all relative group overflow-hidden"
                style={{
                  background: gem ? `linear-gradient(135deg, ${gem.color}, ${adjustColor(gem.color, -20)})` : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: gem ? `0 4px 12px ${adjustColor(gem.color, -40)}` : 'none'
                }}
              >
                {gem && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: adjustColor(gem.color, -60) }}
                  >
                    {getGemIcon(gem.gemType)}
                  </motion.div>
                )}
                
                {gem?.special && (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {getSpecialIcon(gem.special)}
                  </motion.div>
                )}

                <motion.div
                  initial={false}
                  animate={{ opacity: gem ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                />
              </motion.button>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Helper function to adjust color brightness
function adjustColor(color: string, amount: number): string {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export default GameBoard;