function calculate(num1, operator, num2) {
  const a = Number(num1);
  const b = Number(num2);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return 'Lỗi: Input không phải số';
  }

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Lỗi: Không thể chia cho 0';
      }
      return a / b;
    case '%':
      if (b === 0) {
        return 'Lỗi: Không thể chia cho 0';
      }
      return a % b;
    case '**':
      return a ** b;
    default:
      return `Lỗi: Operator '${operator}' không hợp lệ`;
  }
}

console.log(calculate(10, '+', 5));
console.log(calculate(10, '/', 0));
console.log(calculate(10, '^', 5));
console.log(calculate('abc', '+', 5));
console.log(calculate(2, '**', 10));
