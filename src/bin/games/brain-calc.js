#!/usr/bin/env node

import bodyGame from '../body-game';
import { random, calculation } from '../calc';
import greeting from '../..';

const startGame = () => {
  const rules = 'What is the result of the expression?';
  const name = greeting(rules);
  const func = () => calculation(random(3), random(25), random(25));

  bodyGame(name, func);
};

startGame();
