function classicFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    for (const rule of rules) {
      if (i % rule.divisor === 0) {
        output += rule.word;
      }
    }
    console.log(output || i);
  }
}

console.log('Classic FizzBuzz:');
classicFizzBuzz();

console.log('\nCustom FizzBuzz (n=30):');
customFizzBuzz(30, [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' },
  { divisor: 7, word: 'Jazz' }
]);
