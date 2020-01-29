import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export default (rule, func) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rule);
  const playerName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${playerName}!\n`);

  const numberOfRounds = 3;
  for (let count = 0; count < numberOfRounds; count += 1) {
    const data = func();
    console.log(`Question: ${car(data)}`);

    const correctAnswer = cdr(data);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!\n`);
};
