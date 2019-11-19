const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getNod = (num1, num2) => (num1 % num2 === 0 ? num2 : getNod(num2, num1 % num2));

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

export {
  getRandom, getNod, isEven, isPrime,
};
