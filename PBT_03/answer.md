Câu A1 — 3 Cách nhúng CSS:
1. Inline CSS (CSS trực tiếp trong thẻ)
- Ví dụ: <p style="color: red; font-size: 16px;">Văn bản</p>
- Ưu điểm: Tiện lợi khi cần test nhanh hoặc áp dụng một style duy nhất, có độ ưu tiên cực cao. Nhược điểm: Làm code HTML bị rối, khó bảo trì, không tái sử dụng được code CSS
- Khi nào nên dùng: Khi cần sửa nhanh một thuộc tính đặc biệt cho một phần tử duy nhất hoặc khi viết code cho Email HTML.

2. Internal CSS (CSS trong thẻ <style>)
- Ví dụ: Đặt trong thẻ <head>: <style> p { color: blue; } </style>
- Ưu điểm: Toàn bộ CSS của trang nằm tập trung tại một chỗ, dễ quản lý hơn Inline CSS trong phạm vi trang đó. Nhược điểm: Chỉ có tác dụng trên một trang HTML duy nhất, khiến file HTML dài dòng hơn
- Khi nào nên dùng: Khi xây dựng một trang web độc lập không dùng chung giao diện với trang khác

3. External CSS (CSS từ file riêng biệt .css)
- Ví dụ: Thẻ nhúng trong <head>: <link rel="stylesheet" href="style.css">
- Ưu điểm: Tách biệt hoàn toàn mã HTML và CSS, có thể tái sử dụng file CSS cho nhiều trang web khác nhau, giúp tối ưu tốc độ tải trang nhờ bộ nhớ đệm (cache) của trình duyệt. Nhược điểm: Tốn thêm một yêu cầu HTTP (HTTP Request) để tải file CSS về (tuy nhiên không đáng kể).
- Khi nào nên dùng: Đây là cách tiêu chuẩn, luôn được khuyến nghị dùng cho mọi dự án thực tế lớn nhỏ

4. Trả lời câu hỏi thêm:
Nếu một phần tử chịu tác động đồng thời của cả 3 cách nhúng, cách nhúng Inline CSS sẽ "thắng"
Giải thích: Theo quy tắc Cascade và Specificity của CSS, Inline CSS có độ ưu tiên cao nhất (chỉ xếp sau !important), do nó tác động trực tiếp vào thuộc tính style của phần tử và có khoảng cách gần phần tử nhất so với Internal hay External.

Câu A2:
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: cả 2 thẻ p: 25.990.000đ và 45.990.000đ
3. #app header                  → Chọn: toàn bộ khối <header> bên trong (bao gồm chữ: ShopTLU Home Products About)
4. nav a:first-child             → Chọn: Home
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: cả 4 thẻ p nằm trực tiếp trong 2 thẻ article: 25.990.000đ, Mô tả sản phẩm..., 45.990.000đ, Mô tả sản phẩm...
7. a[href="/"]                  → Chọn: Home
8. .top-bar.dark h1              → Chọn: ShopTLU