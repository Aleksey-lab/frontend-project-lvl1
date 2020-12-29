import readlineSync from 'readline-sync';

export function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(50));
}

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no" ');
  let count = 0;
  while (count < 3) {
    const ans = getRandomInt();
    console.log(`Question: ${ans}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (ans % 2 === 0 && answer === 'yes')
      || (ans % 2 !== 0 && answer === 'no')
    ) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
