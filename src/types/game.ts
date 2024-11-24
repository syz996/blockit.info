export type GemType = {
  id: number;
  color: string;
  gemType: 'diamond' | 'ruby' | 'emerald' | 'sapphire' | 'amethyst';
  special?: 'rainbow' | 'bomb' | 'star';
};

export type Position = {
  row: number;
  col: number;
};

export type LeaderboardEntry = {
  id: string;
  name: string;
  score: number;
  timestamp: string;
};

export const GEMS = {
  DIAMOND: {
    color: '#E1F5FE',
    type: 'diamond'
  },
  RUBY: {
    color: '#FFEBEE',
    type: 'ruby'
  },
  EMERALD: {
    color: '#E8F5E9',
    type: 'emerald'
  },
  SAPPHIRE: {
    color: '#E3F2FD',
    type: 'sapphire'
  },
  AMETHYST: {
    color: '#F3E5F5',
    type: 'amethyst'
  }
} as const;

export const SPECIAL_GEMS = {
  rainbow: {
    chance: 0.05,
    effect: 'Matches with any gem'
  },
  bomb: {
    chance: 0.03,
    effect: 'Clears surrounding gems'
  },
  star: {
    chance: 0.02,
    effect: 'Clears entire row and column'
  }
} as const;