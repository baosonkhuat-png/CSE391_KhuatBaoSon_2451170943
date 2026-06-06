Câu A1:
1. Thẻ `<meta viewport>` chuẩn:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

- `width=device-width`: hiển thị trang theo chiều rộng thực tế của thiết bị.
- `initial-scale=1.0`: đặt tỉ lệ zoom ban đầu là 100%.

2. Nếu thiếu thẻ này, iPhone và các thiết bị di động sẽ hiển thị trang ở độ rộng mặc định khoảng 980px, khiến trang bị thu nhỏ, chữ và layout bị co lại, không responsive.

3. Mobile-First và Desktop-First khác nhau:

- Mobile-First: viết CSS mặc định cho mobile, sau đó dùng `@media (min-width: 768px)` để mở rộng cho tablet và desktop.
- Desktop-First: viết CSS mặc định cho desktop, sau đó dùng `@media (max-width: 767px)` để thay đổi cho mobile.

Mobile-First được khuyên dùng vì nó ưu tiên hiệu năng trên thiết bị nhỏ, dễ mở rộng dần cho màn hình lớn hơn và phù hợp với thiết kế responsive hiện đại.

Câu A2:
Các breakpoint chuẩn tham khảo Bootstrap:
- `576px` - `sm`: điện thoại lớn / mobile.
- `768px` - `md`: tablet.
- `992px` - `lg`: laptop nhỏ / desktop.
- `1200px` - `xl`: desktop lớn.
- `1400px` - `xxl`: màn hình rất lớn.

Ví dụ lưới sản phẩm:
- Mobile nhỏ: 1 cột.
- Mobile lớn / tablet: 2 cột.
- Desktop: 3-4 cột.
- Desktop lớn: 4-5 cột.

Câu A3:
- Chiều rộng: 375px (iPhone SE) → container width: 100%
- Chiều rộng 600px → container width: 540px
- Chiều rộng 800px → container width: 720px
- Chiều rộng 1000px → container width: 960px
- Chiều rộng 1400px → container width: 1140px

Câu A4:
1. Variables: định nghĩa một lần và tái sử dụng nhiều lần
 - Ví dụ: `$primary-color: #2c3e50;`
2. Nesting: viết CSS lồng nhau giúp cấu trúc rõ ràng.
 - Ví dụ:
     ```scss
     .card {
       .card-title { font-size: 1.2rem; }
     }
     ```
3. Mixins: tái sử dụng nhóm thuộc tính
   - Ví dụ:
     ```scss
     @mixin flex-center {
       display: flex;
       align-items: center;
       justify-content: center;
     }
     @include flex-center;
     ```
4. `@extend` / Inheritance: chia sẻ kiểu giữa các selector
   - Ví dụ:
     ```scss
     .button-primary { padding: 12px; }
     .button-secondary { @extend .button-primary; background: #ccc; }
     ```

Trình duyệt không đọc được file `.scss` vì SCSS là tiền xử lý. Cần biên dịch SCSS thành CSS bằng công cụ như `sass` hoặc `node-sass`