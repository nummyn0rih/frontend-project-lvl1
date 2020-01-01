import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const genQuestion = (func) => {
  const result = func();
  console.log(`Question: ${car(result)}`);
  return cdr(result);
};

export default (rule, func) => {
  console.log(`\nWelcome to the Brain Games!
${rule}`);
  const playerName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!\n`);

  for (let count = 0; count < 3; count += 1) {
    const correctAnswer = genQuestion(func);
    const answerToStr = typeof correctAnswer === 'number' ? correctAnswer.toString() : correctAnswer;
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answerToStr === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${playerName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!\n`);
};
