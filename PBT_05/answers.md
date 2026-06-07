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

Trình duyệt không đọc được file `.scss` vì SCSS là tiền xử lý. Cần biên dịch SCSS thành CSS bằng công cụ như `sass` hoặc `node-sass`. Ví dụ về lệnh compile:
```bash
sass scss/style.scss scss/style.css
```

Câu B3: 
Lệnh biên dịch SCSS:
```bash
sass scss/style.scss scss/style.css
```
Câu C1:
Trang mẫu: Tiki
1. Mobile (375px)
- Navigation: chuyển sang hamburger / menu thu gọn, thanh tìm kiếm nằm nổi bật, icon giỏ hàng và thông báo.
- Grid content: thường 1 cột cho các section lớn, hoặc 2 cột nhỏ cho danh sách sản phẩm tùy trang.
- Elements ẩn: sidebar lọc, nhiều menu phụ, banner quảng cáo lớn, một số link footer mở rộng.
- Font size: body text nhỏ hơn, heading nhỏ hơn, tổng thể hiển thị gọn hơn.
2. Tablet (768px)
- Navigation: vẫn là thanh trên cùng, menu xuất hiện đầy đủ hơn nhưng vẫn gọn, có thể có dropdown/slide.
- Grid content: 2 cột hoặc 3 cột cho danh sách sản phẩm, phần hàng hóa có nhiều cột hơn mobile.
- Elements ẩn: một vài quảng cáo phụ và banner lớn vẫn có thể ẩn, sidebar có thể chuyển thành section trên cùng.
- Font size: hơi lớn hơn mobile, khoảng cách tăng nhẹ.
3. Desktop (1440px)
- Navigation: full header với menu ngang, nhiều mục danh mục, thanh tìm kiếm rộng, avatar/giỏ hàng, thông báo.
- Grid content: thường 4-5 cột sản phẩm, nhiều block cùng hiển thị cạnh nhau như tin khuyến mãi + danh mục + sản phẩm.
- Elements ẩn: rất ít, đa số menu và banner đều hiển thị.
- Font size: lớn hơn so với mobile/tablet, tiêu đề rõ ràng, khoảng cách rộng hơn.

4. Media queries thường dùng:
- `@media (max-width: 768px)` hoặc `@media (min-width: 768px)` để chuyển layout.
- `@media (max-width: 576px)` để tối ưu mobile.

Câu C2:
Yêu cầu layout thiết kế trang Đặt bàn nhà hàng.
1. Mobile
- Header: logo ở trái, số điện thoại đặt bàn ở phải hoặc dưới logo.
- Hero image: chiếm toàn màn hình ngang, hiển thị full-width.
- Form đặt bàn: nằm ngay dưới hero.
- Grid 6 ảnh món ăn: hiển thị 1 cột, mỗi ảnh full-width.
- Bản đồ Google Maps: nằm dưới form và gallery.
- Footer: ở cuối trang.
Ẩn trên mobile: menu phức tạp, sidebar lọc, nội dung quảng cáo phụ. Form đặt bàn phải nằm ngay dưới hero để dễ thao tác.
[ HEADER ]
[ HERO IMAGE ]
[ BOOKING FORM ]
[ GALLERY IMG 1 ]
[ GALLERY IMG 2 ]
[ GALLERY IMG 3 ]
[ GALLERY IMG 4 ]
[ GALLERY IMG 5 ]
[ GALLERY IMG 6 ]
[ GOOGLE MAP ]
[ FOOTER ]

2. Tablet
- Header: logo + số điện thoại vẫn trên một hàng, có thể mở rộng thêm menu đơn giản.
- Hero image: vẫn để rộng, cao nhưng không chiếm quá nhiều.
- Grid ảnh món ăn: 2 cột.
- Form đặt bàn: có thể nằm dưới hero hoặc bên cạnh hero trong một section 2 cột nhẹ.
- Bản đồ: nằm sau gallery hoặc nếu đủ rộng thì bên cạnh form với layout 2 cột.
- Footer: vẫn ở dưới.
- Trên tablet, gallery nên để 2 cột để tận dụng không gian mà vẫn giữ dễ đọc.
[ HEADER ]
[ HERO IMAGE ]
[ BOOKING FORM ]
[ GALLERY IMG 1 | IMG 2 ]
[ GALLERY IMG 3 | IMG 4 ]
[ GALLERY IMG 5 | IMG 6 ]
[ GOOGLE MAP ]
[ FOOTER ]

3. Desktop
- Header: nhiều khoảng trắng, logo trái, số điện thoại đặt bàn phải, có thể thêm menu ngang.
- Hero image: chiếm full-width, nội dung text có thể căn trái/phải.
- Grid ảnh món ăn: 3 cột.
- Bản đồ: có thể nằm bên dưới gallery, hoặc trên desktop bố cục 2 cột với form.
- Footer: full-width.
- Desktop nên có layout 2-3 cột, form có thể hiển thị như sidebar hoặc một phần bên phải nếu layout phù hợp.
[ HEADER ]
[ HERO IMAGE ]
[ BOOKING FORM | GALLERY 3-COLUMN ]
[ GOOGLE MAP ]
[ FOOTER ]


4. CSS skeleton mobile-first:
```css
body { margin: 0; font-family: Arial, sans-serif; }
.container { max-width: 1200px; margin: 0 auto; padding: 16px; }
.header, .hero, .gallery, .booking-form, .map, .footer { margin-bottom: 24px; }
.gallery { display: grid; grid-template-columns: 1fr; gap: 16px; }

@media (min-width: 768px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .layout-two-col { display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; }
  .gallery { grid-template-columns: repeat(3, 1fr); }
}
```
