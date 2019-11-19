#!/usr/bin/env node

// eslint-disable-next-line import/no-unresolved
import { cons } from '@hexlet/pairs';
import bodyGame from '../body-game';
import { random, isEven } from '../calc';
import greeting from '../..';

const func = () => {
  const rand = random(99);
  return cons(rand, isEven(rand));
};

const startGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeting(rules);

  bodyGame(name, func);
};

startGame();
