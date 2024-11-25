import React from 'react';
import { Music, Music2 } from 'lucide-react';
import { useSound } from '../hooks/useSound';

function SoundControl() {
  const { toggleMusic, isMusicPlaying } = useSound();

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 bg-black/30 backdrop-blur-sm p-3 rounded-full hover:bg-black/50 transition-colors z-50"
      aria-label={isMusicPlaying() ? "Mute Background Music" : "Play Background Music"}
    >
      {isMusicPlaying() ? (
        <Music2 className="w-6 h-6 text-purple-400" />
      ) : (
        <Music className="w-6 h-6 text-gray-400" />
      )}
    </button>
  );
}

export default SoundControl;