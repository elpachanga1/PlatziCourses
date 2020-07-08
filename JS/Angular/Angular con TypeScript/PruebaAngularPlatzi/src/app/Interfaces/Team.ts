import { Countries, Player } from './Player';

export interface Team {
  $key?: string;
  name: string;
  country: Countries;
  players: Player[];
}