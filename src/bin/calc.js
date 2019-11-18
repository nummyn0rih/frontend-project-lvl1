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

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const nod = (num1, num2) => (num1 % num2 === 0 ? num2 : nod(num2, num1 % num2));

export {
  random, calculation, isEven, nod,
};
