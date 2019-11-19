#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import gameEngine from '../game-engine';
import { getRandom, isEven } from '../calculation';
import greeting from '../..';

const func = () => {
  const number = getRandom(99);
  return cons(number, isEven(number));
};

const startGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeting(rule);

  gameEngine(name, func);
};

startGame();
