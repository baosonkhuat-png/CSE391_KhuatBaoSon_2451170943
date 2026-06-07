(function() {
  const secret = Math.floor(Math.random() * 100) + 1;
  const guesses = new Set();
  let attempts = 0;
  const maxAttempts = 7;

  alert('Chào bạn! Hãy đoán số từ 1 đến 100. Bạn có 7 lần đoán.');

  while (attempts < maxAttempts) {
    const input = prompt(`Lần ${attempts + 1}/${maxAttempts}: Nhập số từ 1 đến 100`);
    if (input === null) {
      alert('Bạn đã hủy trò chơi.');
      return;
    }

    const guess = Number(input.trim());
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      alert('Vui lòng nhập số nguyên từ 1 đến 100.');
      continue;
    }

    if (guesses.has(guess)) {
      alert('Bạn đã đoán số này rồi!');
      continue;
    }

    guesses.add(guess);
    attempts += 1;

    if (guess === secret) {
      alert(`Chúc mừng! Bạn đoán đúng sau ${attempts} lần!`);
      return;
    }

    if (guess < secret) {
      alert('Cao hơn');
    } else {
      alert('Thấp hơn');
    }
  }

  alert(`Hết lượt! Số đúng là ${secret}.`);
})();
