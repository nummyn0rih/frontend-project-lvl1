const random = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const calculation = (sign, num1, num2) => {
  switch (sign) {
    case 0:
      return [`${num1} + ${num2}`, num1 + num2];
    case 1:
      return [`${num1} - ${num2}`, num1 - num2];
    case 2:
      return [`${num1} * ${num2}`, num1 * num2];
    default:
      return null;
  }
};

const toBool = (bool) => (bool ? 'yes' : 'no');

const isEven = (num) => toBool(num % 2 === 0);

const isPrime = (num) => {
  if (num === 2) return toBool(true);
  if (num === 1 || isEven(num)) return toBool(false);
  let divisor = 2;
  while (divisor ** 2 < num) {
    if (num % divisor === 0) return toBool(false);
    divisor += 1;
  }
  return toBool(true);
};

const nod = (num1, num2) => (num1 % num2 === 0 ? num2 : nod(num2, num1 % num2));

export {
  random, calculation, isEven, nod, isPrime,
};
