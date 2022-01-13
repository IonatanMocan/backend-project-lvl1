const brainGCDGame = {
  gameRule: 'Find the greatest common divisor of given numbers.',
  generatedQuestion() {
    const first = Math.round(Math.random() * 100);
    const second = Math.round(Math.random() * 100);
    return `${first} ${second}`;
  },
  getRightAnswer(question) {
    const [first, second] = question.split(' ');
    const gcd = (a, b) => {
      if (a === b) {
        return a.toString();
      }
      if (a > b) {
        return gcd(a - b, b);
      }
      if (b > a) {
        return gcd(a, b - a);
      }
      return a.toString();
    };
    return gcd(first, second);
  },
};

export default brainGCDGame;
