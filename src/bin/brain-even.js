#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '..';

const answer = () => readlineSync.question('Your answer: ');

const question = () => {
  const num = Math.floor(Math.random() * 99);
  console.log(`Question: ${num}`);
  return num;
};

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const startGame = () => {
  console.log(`\nWelcome to the Brain Games!
Answer "yes" if the number is even, otherwise answer "no".`);
  const name = greeting();

  let count = 0;
  while (count < 3) {
    const num = question();
    const correctAnswer = isEven(num);
    const playerAnswer = answer();
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!\n`);
};

startGame();
