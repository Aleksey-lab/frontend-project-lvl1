import getRandomInt from '../get-random.js';

export const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (!y) return x;
  return getGCD(y, x % y);
};
export const getQuestionAndAnswer = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const question = `${a} ${b}`;
  const correctAnswer = getGCD(a, b);
  return [question, correctAnswer];
};
