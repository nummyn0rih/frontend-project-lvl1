import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default greeting;
