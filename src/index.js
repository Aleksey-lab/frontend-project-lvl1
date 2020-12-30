import { car, cdr } from '@hexlet/pairs';
import greeting from './greeting.js';

// eslint-disable-next-line consistent-return
export default (condition, game) => {
  const name = greeting();
  condition();
  for (let i = 0; i < 3; i += 1) {
    const tmp = game();
    if (tmp === true) {
      console.log('Correct!');
    } else {
      return console.log(`'${car(tmp)}' is wrong answer ;(. Correct answer was '${cdr(tmp)}'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
