import getRandomInt from '../get-random.js';

export const description = 'What is the result of the expression?';

export const getQuestionAndAnswer = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const sign = (b % 2 === 0) ? 1 : -1;
  const correctAnswer = a + (b * sign);
  const signForQuestion = (sign === 1) ? '+' : '-';
  const question = (`${a} ${signForQuestion} ${b}`);
  return [question, correctAnswer];
};
