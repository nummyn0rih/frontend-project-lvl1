import requestPlayerAnswer from './request-player-answer';
import genQuestion from './gen-question';

export default (playerName, func) => {
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
