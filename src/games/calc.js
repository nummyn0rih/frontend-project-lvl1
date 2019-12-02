import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const func = () => {
  const sign = getRandom(3);
  const num1 = getRandom(25);
  const num2 = getRandom(25);

  switch (sign) {
    case 0:
      return cons(`${num1} + ${num2}`, num1 + num2);
    case 1:
      return cons(`${num1} - ${num2}`, num1 - num2);
    case 2:
      return cons(`${num1} * ${num2}`, num1 * num2);
    default:
      return null;
  }
};

const rule = 'What is the result of the expression?';

export default () => gameEngine(rule, func);
