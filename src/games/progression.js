import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const createData = () => {
  const step = getRandom(1, 8);
  const firstValue = getRandom(0, 25);
  const progressionLength = getRandom(8, 15);
  const getNextValue = (num) => firstValue + step * num;
  const progression = [...Array(progressionLength)].map((elem, index) => getNextValue(index));
  const secretValuePosition = getRandom(0, progressionLength - 1);
  const result = progression[secretValuePosition];
  progression[secretValuePosition] = '..';
  return cons(progression.join(' '), result.toString());
};

const rule = 'What number is missing in the progression?';

export default () => gameEngine(rule, createData);
