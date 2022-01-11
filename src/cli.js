import readlineSync from 'readline-sync';
// Wait for user's response.

export default function () {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
}
