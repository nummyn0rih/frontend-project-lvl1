import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const signs = ['+', '-', '*'];

const createData = () => {
  const sign = signs[getRandom(0, 3)];
  const num1 = getRandom(0, 25);
  const num2 = getRandom(0, 25);

  switch (sign) {
    case '+':
      return cons(`${num1} + ${num2}`, num1 + num2);
    case '-':
      return cons(`${num1} - ${num2}`, num1 - num2);
    case '*':
      return cons(`${num1} * ${num2}`, num1 * num2);
    default:
      return null;
  }
};

const rule = 'What is the result of the expression?';

export default () => gameEngine(rule, createData);
