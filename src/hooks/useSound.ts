import { Howl } from 'howler';

const sounds = {
  bgMusic: new Howl({ 
    src: ['https://assets.mixkit.co/music/preview/mixkit-game-puzzle-music-loop-123.mp3'],
    loop: true,
    volume: 0.3,
    html5: true
  }),
  place: new Howl({ 
    src: ['/sounds/place.mp3'],
    volume: 0.5
  }),
  match: new Howl({ 
    src: ['/sounds/match.mp3'],
    volume: 0.6
  }),
  combo: new Howl({ 
    src: ['/sounds/combo.mp3'],
    volume: 0.7
  }),
  special: new Howl({ 
    src: ['/sounds/special.mp3'],
    volume: 0.8
  }),
  levelUp: new Howl({ 
    src: ['/sounds/level-up.mp3'],
    volume: 0.7
  }),
  gameOver: new Howl({ 
    src: ['/sounds/game-over.mp3'],
    volume: 0.6
  })
};

export function useSound() {
  const playSound = (soundName: keyof typeof sounds) => {
    sounds[soundName].play();
  };

  const stopSound = (soundName: keyof typeof sounds) => {
    sounds[soundName].stop();
  };

  const stopAllSounds = () => {
    Object.values(sounds).forEach(sound => sound.stop());
  };

  const toggleMusic = () => {
    if (sounds.bgMusic.playing()) {
      sounds.bgMusic.pause();
    } else {
      sounds.bgMusic.play();
    }
  };

  const isMusicPlaying = () => sounds.bgMusic.playing();

  return { playSound, stopSound, stopAllSounds, toggleMusic, isMusicPlaying };
}