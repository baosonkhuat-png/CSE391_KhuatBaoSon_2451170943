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
- Kết quả: 3 item nằm trên 1 hàng, cách đều nhau và vertical center

4. Trường hợp 4
- `.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }`
- Kết quả: 3 item trên 1 hàng, lần lượt vào 3 cột

5. Trường hợp 5
- `.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }`
- Kết quả: 7 item, 3 cột
- Hàng 1: items 1,2,3; hàng 2: items 4,5,6; hàng 3: item 7 ở cột đầu, 2 cột còn lại trống