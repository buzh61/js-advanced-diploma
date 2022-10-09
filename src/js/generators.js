/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  const character = new allowedTypes[Math.floor(Math.random() * allowedTypes.length)]();
  character.level = maxLevel;
  character.health = 100;
  yield character;
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount, aliveCharacters) {
  const team = [];
  for (let i = 0; i < characterCount - aliveCharacters.length; i += 1) {
    team.push(characterGenerator(allowedTypes, maxLevel).next().value);
  }
  return team.concat(aliveCharacters);
}
