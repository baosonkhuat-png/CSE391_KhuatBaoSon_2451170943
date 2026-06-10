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
```

Câu C1:
1. Lỗi `addEventListener("onclick", ...)` sai tên sự kiện. Phải dùng `"click"`.
2. `countDisplay = count;` gán số cho biến DOM, phải dùng `countDisplay.textContent = count;`.
3. `historyList.innerHTML = null;` không xóa đúng, cần `historyList.innerHTML = "";`.
4. `item.remove;` không gọi hàm. Phải viết `item.remove();`.
5. `localStorage.getItem("count")` trả về chuỗi hoặc null, cần chuyển về số với `parseInt(...) || 0`.
6. Khi load localStorage, cần kiểm tra null và khôi phục `count` hợp lệ.
7. Nếu muốn lưu lịch sử, phải parse `localStorage.getItem("history")` và gán lại cho `historyList.innerHTML` khi load.

Sửa code hợp lệ:
```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

function deleteHistory(element) {
    element.parentNode.removeChild(element);
}

function clearHistory() {
    historyList.innerHTML = "";
}

function addHistory(message) {
    const li = document.createElement("li");
    li.textContent = message;
    li.addEventListener("click", function () {
        deleteHistory(this);
    });
    historyList.append(li);
}

document.querySelector("#incrementBtn").addEventListener("click", function () {
    count++;
    updateCount();
    addHistory("Count changed to " + count);
});

document.querySelector("#decrementBtn").addEventListener("click", function () {
    count--;
    updateCount();
    addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    updateCount();
    clearHistory();
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    clearHistory();
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count.toString());
    localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
    count = parseInt(localStorage.getItem("count"), 10) || 0;
    updateCount();
    const savedHistory = localStorage.getItem("history");
    if (savedHistory) {
        historyList.innerHTML = savedHistory;
    }
});
```

Câu C2:
1. Bind event lên 1000 phần tử riêng lẻ là xấu vì mỗi phần tử tạo một listener riêng, tốn bộ nhớ và làm chậm khi thêm/xóa phần tử. Event Delegation chỉ cần một listener trên cha, dùng bubbling để xử lý sự kiện cho tất cả con.

2. Refactor dùng `DocumentFragment`:
```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
```
Giải thích: `DocumentFragment` thêm phần tử ngoài DOM nên không gây reflow tính toán layout mỗi lần append. Chỉ khi fragment được gắn vào DOM mới xảy ra reflow một lần, do đó nhanh hơn nhiều so với append trực tiếp 1000 lần.


