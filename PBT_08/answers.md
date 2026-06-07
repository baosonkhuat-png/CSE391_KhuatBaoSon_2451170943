Câu A1:
1. Function Declaration:
```javascript
function tinhThueBaoHiem(luong) {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong,
    thuc_nhan: luong - thuong
  };
}
```

2. Function Expression:
```javascript
const tinhThueBaoHiem = function(luong) {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong, thuc_nhan: luong - thuong };
};
```

3. Arrow Function:
```javascript
const tinhThueBaoHiem = (luong) => {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong, thuc_nhan: luong - thuong };
};
```

Hoisting:
- Function Declaration được hoisted, nghĩa là có thể gọi trước khi định nghĩa.
- Function Expression và Arrow Function là biến `const`/`let`, không thể gọi trước khi khai báo.

Ví dụ:
```javascript
console.log(tinhThueBaoHiem(12000000)); // hoạt động nếu là function declaration

function tinhThueBaoHiem(luong) { ... }
```

```javascript
console.log(tinhThueBaoHiem(12000000)); // ReferenceError nếu là function expression
const tinhThueBaoHiem = function(luong) { ... };
```

Câu A2:
- Đoạn 1:
```javascript
const c = counter();
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
```

- Đoạn 2:
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```
Output sau 200ms:
- `var: 3`
- `var: 3`
- `var: 3`
- `let: 0`
- `let: 1`
- `let: 2`

Giải thích: `var` có function scope nên biến `i` dùng chung cho toàn bộ vòng lặp. Khi callback chạy, `i` đã tăng đến 3.
`let` có block scope, mỗi lần lặp tạo một biến `j` riêng, nên callback in đúng giá trị tại thời điểm tạo.

Câu A3:
Với mảng `const nums = [1,2,3,4,5,6,7,8,9,10];`

1. `const evens = nums.filter(n => n % 2 === 0);`
2. `const timesThree = nums.map(n => n * 3);`
3. `const sum = nums.reduce((acc, n) => acc + n, 0);`
4. `const firstGreater7 = nums.find(n => n > 7);`
5. `const hasOver10 = nums.some(n => n > 10);`
6. `const allPositive = nums.every(n => n > 0);`
7. `const labels = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);`
8. `const reversed = [...nums].reverse();`

Câu A4:
Output dự đoán:
- Destructuring:
```javascript
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color);
// iPhone 16 25990000 8 Titan

console.log(specs);
// ReferenceError: specs is not defined
```

- Spread:
```javascript
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price); // 23990000
console.log(updated.sale);  // true
console.log(product.price); // 25990000
```

- Spread gotcha:
```javascript
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram); // 16
```
→ `product.specs` cũng bị thay đổi vì `specs` vẫn là cùng một object tham chiếu.

Câu C1:
Refactor bằng `filter`, `map`, `sort`, arrow function:
```javascript
const processOrders = (orders) =>
  orders
    .filter(({ status, total }) => status === 'completed' && total > 100000)
    .map(({ id, customer, total }) => ({ id, customer, total, discount: total * 0.1, finalTotal: total * 0.9 }))
    .sort((a, b) => b.finalTotal - a.finalTotal);
```

Câu C2:
```javascript
const miniArray = {
  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr));
    }
    return result;
  },
  filter(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  },
  reduce(arr, fn, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = fn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
};
```
