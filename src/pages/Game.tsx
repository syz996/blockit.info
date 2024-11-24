import React from 'react';
import { RefreshCcw, Pause, Play } from 'lucide-react';
import GameBoard from '../components/game/GameBoard';
import GameControls from '../components/game/GameControls';
import GameStats from '../components/game/GameStats';
import { useGameLogic } from '../hooks/useGameLogic';

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
    placeBlock,
    removeBlock,
  } = useGameLogic();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Block IT</h1>
            <div className="flex gap-4">
              <button
                onClick={togglePause}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Resume'}
              </button>
              <button
                onClick={resetGame}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <GameBoard
            board={board}
            onBlockPlace={placeBlock}
            onBlockRemove={removeBlock}
            isPlaying={isPlaying}
          />

          {gameOver && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Game Over!</h2>
                <p className="text-xl text-gray-300 mb-6">Final Score: {score}</p>
                <button
                  onClick={resetGame}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <GameStats score={score} level={level} combo={combo} />
          <GameControls />
        </div>
      </div>
    </div>
  );
}

export default Game;