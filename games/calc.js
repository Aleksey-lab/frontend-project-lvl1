import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

const getRandomInt = () => Math.floor(Math.random() * Math.floor(50));

export const condi = () => console.log('What is the result of the expression?');

export const calc = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const sign = a % 2 === 0 ? 1 : -1;
  const res = a + (b * sign);
  const sig = (sign === 1) ? '+' : '-';
  console.log(`Question: ${a} ${sig} ${b}`);
  const ans = readlineSync.question('Your answer: ');
  const pair = cons(ans, res);
  const tmp = Number(ans) === res ? true : pair;
  return tmp;
};
