Câu A1
| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |

| `static` | Có | Flow bình thường | Có | Mặc định, nội dung bình thường |
| `relative` | Có | Vị trí ban đầu của chính nó | Có | Dịch chuyển nhẹ mà không làm thay đổi flow |
| `absolute` | Không | `nearest positioned ancestor` hoặc `body` nếu không có | Có (theo phần tử cha nếu cha scroll được) | Overlay, badge, popup |
| `fixed` | Không | Viewport | Không (luôn cố định trên màn hình) | Header, nút lên đầu trang |
| `sticky` | Có | Vị trí ban đầu trong flow, sau đó dính khi scroll | Có | Sidebar, header bảng |

Khi nào `absolute` tham chiếu `body`?
- Khi không có ancestor nào được đặt `position` khác `static`, `absolute` sẽ tham chiếu tới viewport hoặc `body`

Khi nào tham chiếu parent?
- Khi có ancestor gần nhất được đặt `position: relative | absolute | fixed | sticky`, đó là `nearest positioned ancestor`

Nearest positioned ancestor là gì?
- Là phần tử cha gần nhất có `position` khác `static`. `position: absolute` dùng box của phần tử đó để tính `top`, `left`, `right`, `bottom`

Câu A2
1. Trường hợp 1
- `.container { display: flex; }`
- `.item { flex: 1; }`
- Kết quả: 4 item trên một hàng, chia đều không gian ngang

2. Trường hợp 2
- `.container { display: flex; flex-wrap: wrap; }`
- `.item { width: 45%; margin: 2.5%; }`
- Kết quả: 6 item thành 3 hàng, mỗi hàng 2 cột

3. Trường hợp 3
- `.container { display: flex; justify-content: space-between; align-items: center; }`
- Kết quả: 3 item nằm trên 1 hàng, cách đều nhau

4. Trường hợp 4
- `.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }`
- Kết quả: 3 item trên 1 hàng, cột 1 + cột 3 = 200px, cột 2 = phần còn lại

5. Trường hợp 5
- `.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }`
- Kết quả: 7 item, 3 cột
- Hàng 1: items 1,2,3; hàng 2: items 4,5,6; hàng 3: item 7 ở cột đầu, 2 cột còn lại trống

Câu C1
1. Navigation bar ngang
- Dùng Flexbox
- Vì cần chia layout hàng ngang và căn giữa các item đơn giản

2. Lưới ảnh Instagram 3 cột đều nhau
- Dùng Grid
- Grid dễ tạo hàng cột đồng đều và ổn định khi số ảnh thay đổi

3. Layout blog: main content + sidebar
- Dùng Grid
- Grid cho phép định nghĩa cột rõ ràng, dễ kiểm soát tỉ lệ main và sidebar

4. Footer với 4 cột thông tin
- Dùng Grid
- Footer có nhiều cột rõ ràng, Grid giúp căn đều và sắp xếp dễ

5. Card sản phẩm (ảnh trên, text giữa, nút dưới)
- Dùng Flexbox
- Vì nội dung xếp theo chiều dọc và có thể dùng `margin-top: auto` để nút dính đáy

Câu C2
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
- Nguyên nhân: `.card` không dùng flex column nên nội dung không đẩy xuống đáy
- Sửa:
```css
.card {
  width: 30%;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
}
.card .btn {
  margin-top: auto;
}
```

Lỗi 2: Item vẫn dính góc trái trên
- Nguyên nhân: thiếu `justify-content` và `align-items` trên container flex
- Sửa:
```css
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Lỗi 3: Sidebar bị co lại khi content quá dài
- Nguyên nhân: sidebar bị flex shrink mặc định do container `display: flex`
- Sửa:
```css
.layout {
  display: flex;
}
.sidebar {
  width: 250px;
  flex-shrink: 0;
}
.content {
  flex: 1;
}
```
