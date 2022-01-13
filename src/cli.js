import readlineSync from 'readline-sync';
// Wait for user's response.

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default cli;
