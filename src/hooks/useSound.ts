import { Howl } from 'howler';

const sounds = {
  place: new Howl({ src: ['/sounds/place.mp3'] }),
  match: new Howl({ src: ['/sounds/match.mp3'] }),
  combo: new Howl({ src: ['/sounds/combo.mp3'] }),
  levelUp: new Howl({ src: ['/sounds/level-up.mp3'] }),
  gameOver: new Howl({ src: ['/sounds/game-over.mp3'] }),
};

export function useSound() {
  const playSound = (soundName: keyof typeof sounds) => {
    sounds[soundName].play();
  };

  return { playSound };
}