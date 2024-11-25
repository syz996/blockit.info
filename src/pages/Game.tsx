import React, { useEffect } from 'react';
import { RefreshCcw, Pause, Play } from 'lucide-react';
import GameBoard from '../components/game/GameBoard';
import GameControls from '../components/game/GameControls';
import GameStats from '../components/game/GameStats';
import { useGameLogic } from '../hooks/useGameLogic';
import { useSound } from '../hooks/useSound';

function Game() {
  const {
    board,
    score,
    level,
    combo,
    isPlaying,
    gameOver,
    togglePause,
    resetGame,
    placeGem,
    removeGem,
  } = useGameLogic();

  const { playSound } = useSound();

  useEffect(() => {
    // Start background music when game component mounts
    playSound('bgMusic');
  }, [playSound]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-4 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Block IT</h1>
            <div className="flex gap-2 sm:gap-4">
              <button
                onClick={togglePause}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Resume'}
              </button>
              <button
                onClick={resetGame}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base"
              >
                <RefreshCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <GameBoard
            board={board}
            onGemPlace={placeGem}
            onGemRemove={removeGem}
            isPlaying={isPlaying}
          />

          {gameOver && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
              <div className="text-center bg-black/50 backdrop-blur-sm p-6 rounded-xl max-w-sm w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Game Over!</h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-6">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4 sm:space-y-6 lg:sticky lg:top-4">
          <GameStats score={score} level={level} combo={combo} />
          <GameControls />
        </div>
      </div>
    </div>
  );
}

export default Game;