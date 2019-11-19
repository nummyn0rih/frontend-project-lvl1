// eslint-disable-next-line import/no-unresolved
import { cons } from '@hexlet/pairs';

const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const calculation = (sign, num1, num2) => {
  switch (sign) {
    case 0:
      return cons(`${num1} + ${num2}`, num1 + num2);
    case 1:
      return cons(`${num1} - ${num2}`, num1 - num2);
    case 2:
      return cons(`${num1} * ${num2}`, num1 * num2);
    default:
      return null;
  }
};

const boolToStr = (bool) => (bool ? 'yes' : 'no');

const isEven = (num) => boolToStr(num % 2 === 0);

const isPrime = (num) => {
  if (num === 2) return boolToStr(true);
  if (num === 1 || isEven(num)) return boolToStr(false);
  let divisor = 2;
  while (divisor ** 2 < num) {
    if (num % divisor === 0) return boolToStr(false);
    divisor += 1;
  }
  return boolToStr(true);
};

const nod = (num1, num2) => (num1 % num2 === 0 ? num2 : nod(num2, num1 % num2));

export {
  random, calculation, isEven, nod, isPrime,
};
