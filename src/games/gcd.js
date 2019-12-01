import { cons } from '@hexlet/pairs';
import gameEngine from '../game-engine';
import getRandom from '../get-random';
import greeting from '..';

const getNod = (num1, num2) => (num1 % num2 === 0 ? num2 : getNod(num2, num1 % num2));

const func = () => {
  const num1 = getRandom(99);
  const num2 = getRandom(99);
  const result = num1 > num2 ? getNod(num1, num2) : getNod(num2, num1);
  return cons(`${num1} ${num2}`, result);
};

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const name = greeting(rule);

  gameEngine(name, func);
};
