function logResult(description, callback) {
  try {
    console.log(description);
    callback();
  } catch (error) {
    console.log(error.message);
  }
  console.log('---');
}

logResult('Đoạn 1: var x', () => {
  console.log(x);
  var x = 5;
});

logResult('Đoạn 2: let y', () => {
  console.log(y);
  let y = 10;
});

logResult('Đoạn 3: const z', () => {
  const z = 15;
  z = 20;
  console.log(z);
});

logResult('Đoạn 4: const arr', () => {
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr);
});

logResult('Đoạn 5: let a block scope', () => {
  let a = 1;
  {
    let a = 2;
    console.log('Trong block:', a);
  }
  console.log('Ngoài block:', a);
});
