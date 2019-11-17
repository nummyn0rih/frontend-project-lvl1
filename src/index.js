import readlineSync from 'readline-sync';

const greeting = (rules) => {
  console.log('\nWelcome to the Brain Games!');
  if (rules !== undefined) console.log(rules);
  const name = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default greeting;
