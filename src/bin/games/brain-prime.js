#!/usr/bin/env node

// eslint-disable-next-line import/no-unresolved
import { cons } from '@hexlet/pairs';
import bodyGame from '../body-game';
import { random, isPrime } from '../calc';
import greeting from '../..';

const func = () => {
  const number = random(322, 1);
  return cons(number, isPrime(number));
};

const startGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = greeting(rules);

  bodyGame(name, func);
};

startGame();
