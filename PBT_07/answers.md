Câu A1:
1. Kết quả: `undefined`
- Giải thích: `var` được hoisted, nhưng giá trị chỉ gán sau khi khai báo. Vì thế `x` tồn tại trước `console.log`, nhưng chưa có giá trị.

2. Kết quả: `ReferenceError: Cannot access 'y' before initialization`
- Giải thích: `let` không hoisted theo cách cho phép truy cập trước khi khai báo. Nó nằm trong Temporal Dead Zone.

3. Kết quả: `TypeError: Assignment to constant variable.`
- Giải thích: `const` khai báo biến không thể gán lại giá trị.

4. Kết quả: `[1, 2, 3, 4]`
- Giải thích: `const` chỉ ngăn việc gán lại biến tham chiếu. Nội dung bên trong mảng vẫn có thể thay đổi.

5. Kết quả:
   `Trong block: 2`
   `Ngoài block: 1`
- Giải thích: `let` có phạm vi block. Biến `a` bên trong block là biến khác với `a` bên ngoài.

Câu A2:
```javascript
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof NaN); // "number"
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "3"); // 15
console.log(true + true); // 2
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 hoặc "[object Object]" tùy ngữ cảnh
```

Giải thích khác nhau giữa `"5" + 3` và `"5" - 3`:
- Với toán tử `+`, nếu một bên là chuỗi thì JS sẽ thực hiện nối chuỗi (string concatenation).
- Với toán tử `-`, JS chuyển cả hai toán hạng sang số trước khi tính toán, vì `-` không dành cho nối chuỗi. Do đó `"5" - 3` trở thành `5 - 3 = 2`.

Câu A3:
```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
```
→ Nên dùng `===` vì nó so sánh cả kiểu dữ liệu và giá trị, tránh kết quả bất ngờ do type coercion của `==`.

Câu A4:
Các giá trị falsy trong JavaScript:
- `false`
- `0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Dự đoán kết quả:
- `if ("0") console.log("A");` → In `A` ("0" là truthy)
- `if ("") console.log("B");` → Không in
- `if ([]) console.log("C");` → In `C` (mảng là truthy)
- `if ({}) console.log("D");` → In `D` (object là truthy)
- `if (null) console.log("E");` → Không in
- `if (0) console.log("F");` → Không in
- `if (-1) console.log("G");` → In `G` (không phải 0 nên truthy)
- `if (" ") console.log("H");` → In `H` (chuỗi chứa space là truthy)

Câu A5:
```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```