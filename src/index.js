import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const greeting = (rules) => {
  console.log('\nWelcome to the Brain Games!');
  if (rules !== undefined) console.log(rules);
  const name = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const genQuestion = (func) => {
  const result = func();
  console.log(`Question: ${car(result)}`);
  return cdr(result);
};

const requestPlayerAnswer = (text) => readlineSync.question(text);

export default (rule, func) => {
  const playerName = greeting(rule);
  if (func === undefined) return;

  let count = 0;
  while (count < 3) {
    const correctAnswer = genQuestion(func);
    const answerToStr = typeof correctAnswer === 'number' ? correctAnswer.toString() : correctAnswer;
    const playerAnswer = requestPlayerAnswer('Your answer: ');
    if (answerToStr === playerAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${playerName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!\n`);
};
