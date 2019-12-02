import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const func = () => {
  const number = getRandom(99);
  return cons(number, isEven(number));
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(rule, func);
