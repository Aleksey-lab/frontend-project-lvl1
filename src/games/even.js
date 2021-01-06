import getRandomInt from '../get-random.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no" ';

export const getQuestionAndAnswer = () => {
  const question = getRandomInt();
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
};
