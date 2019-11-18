#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import bodyGame from '../body-game';
import { random, nod } from '../calc';
import greeting from '../..';

const func = () => {
  const num1 = random(99);
  const num2 = random(99);
  const result = num1 > num2 ? nod(num1, num2) : nod(num2, num1);
  return cons(`${num1} ${num2}`, result);
};

const startGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const name = greeting(rules);

  bodyGame(name, func);
};

startGame();
