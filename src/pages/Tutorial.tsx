import React from 'react';
import { BookOpen, Target, Zap, Award } from 'lucide-react';

function Tutorial() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">How to Play</h1>
        <p className="text-gray-300">Master Block IT with these simple steps</p>
      </div>

      <div className="space-y-8">
        <TutorialSection
          icon={<Target className="w-8 h-8" />}
          title="Basic Gameplay"
          content="Click on any empty cell to place a block. The block's color is randomly selected. Your goal is to create matches of 3 or more blocks of the same color."
        />

        <TutorialSection
          icon={<Zap className="w-8 h-8" />}
          title="Scoring Points"
          content={`
            Match more blocks for higher scores:
            • 3 blocks: 100 points
            • 4 blocks: 300 points
            • 5 blocks: 600 points
            • 6+ blocks: 1000 points
            
            Chain multiple matches together to build up your combo multiplier!
          `}
        />

        <TutorialSection
          icon={<Award className="w-8 h-8" />}
          title="Advanced Tips"
          content={`
            • Plan your moves ahead - look for potential matches before placing blocks
            • Keep an eye on your combo multiplier
            • Try to clear blocks from the board regularly to avoid running out of space
            • The game ends when there are no empty cells left
          `}
        />
      </div>
    </div>
  );
}

function TutorialSection({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-purple-400">{icon}</div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-gray-300 whitespace-pre-line">{content}</p>
    </div>
  );
}

export default Tutorial;