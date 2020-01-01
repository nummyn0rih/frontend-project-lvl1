import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const getNod = (num1, num2) => (num1 % num2 === 0 ? num2 : getNod(num2, num1 % num2));

const func = () => {
  const num1 = getRandom(0, 99);
  const num2 = getRandom(0, 99);
  const result = num1 > num2 ? getNod(num1, num2) : getNod(num2, num1);
  return cons(`${num1} ${num2}`, result);
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => gameEngine(rule, func);
