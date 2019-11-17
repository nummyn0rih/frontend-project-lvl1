export default (func) => {
  const result = func();
  console.log(`Question: ${result[0]}`);
  return result[1];
};
