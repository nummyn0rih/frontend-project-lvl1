#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import bodyGame from '../body-game';
import { random } from '../calc';
import greeting from '../..';

const func = () => {
  const step = random(8, 1);
  const firstValue = random(25);
  const secretValue = random(0, 9);
  const nextValue = (num) => firstValue + step * num;
  const arr = [...Array(10)].map((el, ind) => nextValue(ind));
  const result = arr[secretValue];
  arr[secretValue] = '..';
  return cons(arr.join(' '), result);
};

const startGame = () => {
  const rules = 'What number is missing in the progression?';
  const name = greeting(rules);

  bodyGame(name, func);
};

startGame();
