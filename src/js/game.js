// game.js
import Character from './domain';

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
  constructor() {
    this.data = "Saving data...";
  }
}

export function readGameSaving() {
  console.log('Reading game saving...');
}

export function writeGameSaving() {
  console.log('Writing game saving...');
}
