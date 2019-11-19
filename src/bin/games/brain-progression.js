#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import gameEngine from '../game-engine';
import { getRandom } from '../calculation';
import greeting from '../..';

const func = () => {
  const step = getRandom(8, 1);
  const firstValue = getRandom(25);
  const secretValue = getRandom(9);
  const getNextValue = (num) => firstValue + step * num;
  const numbers = [...Array(10)].map((elem, index) => getNextValue(index));
  const result = numbers[secretValue];
  numbers[secretValue] = '..';
  return cons(numbers.join(' '), result);
};

const startGame = () => {
  const rule = 'What number is missing in the progression?';
  const name = greeting(rule);

  gameEngine(name, func);
};

startGame();
