import { cons } from '@hexlet/pairs';
import gameEngine from '..';
import getRandom from '../get-random';

const isEven = (num) => (num % 2 === 0);

const isPrime = (num) => {
  if (num === 2) return 'yes';
  if (num === 1 || isEven(num)) return 'no';
  let divisor = 2;
  while (divisor ** 2 < num) {
    if (num % divisor === 0) return 'no';
    divisor += 1;
  }
  return 'yes';
};

const createData = () => {
  const number = getRandom(1, 322);
  return cons(number, isPrime(number));
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameEngine(rule, createData);
