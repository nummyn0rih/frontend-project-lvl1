// eslint-disable-next-line import/no-unresolved
import { car, cdr } from '@hexlet/pairs';

export default (func) => {
  const result = func();
  console.log(`Question: ${car(result)}`);
  return cdr(result);
};
