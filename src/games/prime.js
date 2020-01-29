import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const isEven = (num) => (num % 2 === 0);

const isPrime = (num) => {
  if (num === 2) return true;
  if (num <= 1 || isEven(num)) return false;
  let divisor = 2;
  while (divisor ** 2 <= num) {
    if (num % divisor === 0) return false;
    divisor += 1;
  }
  return true;
};

const createData = () => {
  const question = getRandom(1, 322);
  return cons(question, isPrime(question) ? 'yes' : 'no');
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameEngine(rule, createData);
