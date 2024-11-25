import { useState, useCallback, useEffect } from 'react';
import { GemType, Position, GEMS, SPECIAL_GEMS } from '../types/game';
import { useSound } from './useSound';

const BOARD_SIZE = 8;
const INITIAL_LEVEL = 1;
const MIN_MATCH = 3;
const SCORE_MULTIPLIER = {
  3: 100,
  4: 300,
  5: 600,
  6: 1000,
};

export function useGameLogic() {
  const [board, setBoard] = useState<(GemType | null)[][]>(() => 
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
  );
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(INITIAL_LEVEL);
  const [isPlaying, setIsPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [combo, setCombo] = useState(0);

  const { playSound } = useSound();

  const calculateComboBonus = useCallback((combo: number) => {
    return Math.floor(combo * 1.5) * 100;
  }, []);

  const getRandomGem = useCallback(() => {
    const gems = Object.values(GEMS);
    const randomGem = gems[Math.floor(Math.random() * gems.length)];
    return {
      id: Date.now(),
      color: randomGem.color,
      gemType: randomGem.type
    };
  }, []);

  const getSpecialGem = useCallback(() => {
    const random = Math.random();
    for (const [type, { chance }] of Object.entries(SPECIAL_GEMS)) {
      if (random < chance) {
        return type as keyof typeof SPECIAL_GEMS;
      }
    }
    return undefined;
  }, []);

  const clearSpecialGem = useCallback((board: (GemType | null)[][], position: Position) => {
    const { row, col } = position;
    const gem = board[row][col];
    if (!gem?.special) return [];

    const affectedPositions: Position[] = [];

    switch (gem.special) {
      case 'bomb':
        for (let r = row - 1; r <= row + 1; r++) {
          for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE) {
              affectedPositions.push({ row: r, col: c });
            }
          }
        }
        break;
      case 'star':
        for (let i = 0; i < BOARD_SIZE; i++) {
          affectedPositions.push({ row: i, col });
          affectedPositions.push({ row, col: i });
        }
        break;
    }

    return affectedPositions;
  }, []);

  const checkMatches = useCallback((board: (GemType | null)[][], position: Position) => {
    const { row, col } = position;
    const gem = board[row][col];
    if (!gem) return [];

    const matches: Position[] = [{ row, col }];
    const visited = new Set<string>();
    const queue: Position[] = [{ row, col }];

    while (queue.length > 0) {
      const current = queue.shift()!;
      const key = `${current.row},${current.col}`;
      if (visited.has(key)) continue;
      visited.add(key);

      const directions = [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
      ];

      for (const dir of directions) {
        const newRow = current.row + dir.row;
        const newCol = current.col + dir.col;

        if (
          newRow >= 0 && newRow < BOARD_SIZE &&
          newCol >= 0 && newCol < BOARD_SIZE
        ) {
          const targetGem = board[newRow][newCol];
          if (
            targetGem?.gemType === gem.gemType ||
            targetGem?.special === 'rainbow' ||
            gem.special === 'rainbow'
          ) {
            matches.push({ row: newRow, col: newCol });
            queue.push({ row: newRow, col: newCol });
          }
        }
      }
    }

    return matches;
  }, []);

  const placeGem = useCallback((row: number, col: number) => {
    if (!isPlaying || gameOver) return;

    playSound('place');

    setBoard(prev => {
      const newBoard = prev.map(row => [...row]);
      const newGem = {
        ...getRandomGem(),
        special: getSpecialGem(),
      };
      newBoard[row][col] = newGem;

      const matches = checkMatches(newBoard, { row, col });
      const specialMatches = clearSpecialGem(newBoard, { row, col });
      const allMatches = [...new Set([...matches, ...specialMatches])];

      if (allMatches.length >= MIN_MATCH) {
        allMatches.forEach(pos => {
          newBoard[pos.row][pos.col] = null;
        });
        
        const baseScore = SCORE_MULTIPLIER[Math.min(allMatches.length, 6) as keyof typeof SCORE_MULTIPLIER];
        const comboBonus = calculateComboBonus(combo);
        const newScore = baseScore + comboBonus;
        
        setScore(prev => prev + newScore);
        setCombo(prev => prev + 1);
        
        if (combo > 0) {
          playSound('combo');
        } else {
          playSound('match');
        }

        if (newGem.special) {
          playSound('special');
        }
      } else {
        setCombo(0);
      }

      const hasEmptyCell = newBoard.some(row => row.some(cell => cell === null));
      if (!hasEmptyCell) {
        setGameOver(true);
        playSound('gameOver');
      }

      return newBoard;
    });
  }, [isPlaying, gameOver, getRandomGem, checkMatches, combo, clearSpecialGem, getSpecialGem, playSound, calculateComboBonus]);

  const removeGem = useCallback((row: number, col: number) => {
    if (!isPlaying || gameOver) return;

    setBoard(prev => {
      const newBoard = [...prev.map(row => [...row])];
      newBoard[row][col] = null;
      return newBoard;
    });
    setCombo(0);
  }, [isPlaying, gameOver]);

  const resetGame = useCallback(() => {
    setBoard(Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null)));
    setScore(0);
    setLevel(INITIAL_LEVEL);
    setIsPlaying(true);
    setGameOver(false);
    setCombo(0);
  }, []);

  const togglePause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (score > 0 && score >= level * 5000) {
      setLevel(prev => prev + 1);
      playSound('levelUp');
    }
  }, [score, level, playSound]);

  return {
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
  };
}