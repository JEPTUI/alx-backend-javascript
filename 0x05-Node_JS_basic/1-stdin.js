const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

r1.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  r1.close();
});
