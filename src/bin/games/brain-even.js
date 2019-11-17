#!/usr/bin/env node

import bodyGame from '../body-game';
import { random, isEven } from '../calc';
import greeting from '../..';

const func = () => {
  const rand = random(99);
  return [rand, isEven(rand)];
};

const startGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = greeting(rules);

  bodyGame(name, func);
};

startGame();
