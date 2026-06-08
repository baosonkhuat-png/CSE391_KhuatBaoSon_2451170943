Câu A1:
1. DOM tree:
- `div#app`
  - `header`
    - `h1`
    - `nav`
      - `a.active`
      - `a`
      - `a`
  - `main`
    - `form#todoForm`
      - `input#todoInput`
      - `button`
    - `ul#todoList`
      - `li.todo-item`
      - `li.todo-item.completed`

2. `querySelector` selectors:
- Chọn thẻ `<h1>`: `document.querySelector("h1")`
- Chọn input trong form: `document.querySelector("#todoForm input")`
- Chọn tất cả `.todo-item`: `document.querySelectorAll(".todo-item")`
- Chọn link đang active: `document.querySelector("nav a.active")`
- Chọn `<li>` đầu tiên trong `#todoList`: `document.querySelector("#todoList li:first-child")`
- Chọn tất cả `<a>` bên trong `<nav>`: `document.querySelectorAll("nav a")`

Câu A2:
- `textContent` chỉ đặt hoặc đọc nội dung văn bản của phần tử. Nó không phân tích HTML và an toàn hơn.
- `innerHTML` phân tích và chèn một chuỗi HTML vào phần tử, vì vậy có thể tạo cấu trúc DOM mới.

Khi:
- Dùng `textContent` khi hiển thị văn bản đơn thuần hoặc dữ liệu người dùng.
- Dùng `innerHTML` khi cần tạo nội dung HTML phức tạp từ chuỗi và biết chắc dữ liệu an toàn.

Vì sao `innerHTML` gây XSS?
- Nếu chèn trực tiếp dữ liệu người dùng vào `innerHTML`, kẻ tấn công có thể chèn mã JavaScript độc hại.

Ví dụ:
```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput; // NGUY HIỂM
```
Sửa:
```javascript
const userInput = document.querySelector("#search").value;
const result = document.querySelector("#result");
result.textContent = userInput; // an toàn
```

Câu A3:
HTML:
```html
<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>
```

JavaScript:
- Click vào button sẽ kích hoạt `#btn`, sau đó `#inner`, rồi `#outer`.

Kết quả khi comment `stopPropagation()`:
```
BUTTON
INNER
OUTER
```

Nếu uncomment `e.stopPropagation()` trong handler `#btn`:
```
BUTTON