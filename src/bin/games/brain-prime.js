#!/usr/bin/env node

import { cons } from '@hexlet/pairs';
import gameEngine from '../game-engine';
import { getRandom, isPrime } from '../calculation';
import greeting from '../..';

const func = () => {
  const number = getRandom(322, 1);
  return cons(number, isPrime(number));
};

const startGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = greeting(rule);

  gameEngine(name, func);
};

startGame();
