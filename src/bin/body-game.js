import request from './request';
import question from './question';

export default (playerName, func) => {
  let count = 0;
  while (count < 3) {
    const answer = question(func);
    const correctAnswer = typeof answer === 'number' ? answer.toString() : answer;
    const playerAnswer = request('Your answer: ');
    if (correctAnswer === playerAnswer) {
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
