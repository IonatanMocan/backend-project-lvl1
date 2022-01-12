import readlineSync from 'readline-sync';
// Wait for user's response.

const greet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greet;
