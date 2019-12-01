import { cons } from '@hexlet/pairs';
import gameEngine from '../game-engine';
import getRandom from '../get-random';
import greeting from '..';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const func = () => {
  const number = getRandom(99);
  return cons(number, isEven(number));
};

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeting(rule);

  gameEngine(name, func);
};
