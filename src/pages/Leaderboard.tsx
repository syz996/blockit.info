import React from 'react';
import { Trophy } from 'lucide-react';

function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: "Player One", score: 25000 },
    { rank: 2, name: "Player Two", score: 22000 },
    { rank: 3, name: "Player Three", score: 20000 },
    { rank: 4, name: "Player Four", score: 18000 },
    { rank: 5, name: "Player Five", score: 15000 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Leaderboard</h1>
        <p className="text-gray-300">Top players and their highest scores</p>
      </div>

      <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4 border-b border-white/10 bg-white/5">
          <div className="text-gray-400 font-semibold">Rank</div>
          <div className="text-gray-400 font-semibold">Player</div>
          <div className="text-gray-400 font-semibold text-right">Score</div>
        </div>
        
        {leaderboardData.map((entry) => (
          <div
            key={entry.rank}
            className="grid grid-cols-3 gap-4 p-4 border-b border-white/10 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center">
              <span className={`
                font-bold
                ${entry.rank === 1 ? 'text-yellow-400' : ''}
                ${entry.rank === 2 ? 'text-gray-300' : ''}
                ${entry.rank === 3 ? 'text-amber-600' : ''}
                ${entry.rank > 3 ? 'text-gray-400' : ''}
              `}>
                #{entry.rank}
              </span>
            </div>
            <div className="text-white">{entry.name}</div>
            <div className="text-purple-400 text-right font-mono">{entry.score.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;