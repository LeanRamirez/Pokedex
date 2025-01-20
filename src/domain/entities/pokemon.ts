export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  avatar: string;
  sprites: string[];

  color: string;

  games: string[];
  stats: Stats[];
  abilities: string[];
  moves: Move[];
}

export interface Stats {
  name: string;
  value: number;
}

export interface Move {
  name: string;
  level: number;
}
