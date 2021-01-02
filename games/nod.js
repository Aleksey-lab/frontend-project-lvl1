import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(50));

export const condition = () => console.log('Find the greatest common divisor of given numbers.');

const getGCD = (x, y) => {
  if (!y) return x;
  return getGCD(y, x % y);
};

export const nod = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  const res = getGCD(a, b);
  const pair = cons(answer, res);
  const tmp = (Number(answer) === res) ? true : pair;
  return tmp;
};
