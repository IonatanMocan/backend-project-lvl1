import readlineSync from 'readline-sync';
// Wait for user's response.

const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default getName;
