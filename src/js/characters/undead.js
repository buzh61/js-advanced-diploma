import Character from '../Character';

export default class Undead extends Character {
  constructor(level, health) {
    super();
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.health = health;
    this.type = 'undead';
    this.moveDistance = 4;
    this.attackDistance = 1;
  }
}
