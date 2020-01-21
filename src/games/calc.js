import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const signs = ['+', '-', '*'];

const createQuestion = ({ sign, num1, num2 }) => `${num1} ${sign} ${num2}`;

const createAnswer = ({ sign, num1, num2 }) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const createData = () => {
  const exerciseData = {
    sign: signs[getRandom(0, signs.length)],
    num1: getRandom(0, 25),
    num2: getRandom(0, 25),
  };

  return cons(createQuestion(exerciseData), createAnswer(exerciseData));
};

const rule = 'What is the result of the expression?';

export default () => gameEngine(rule, createData);
