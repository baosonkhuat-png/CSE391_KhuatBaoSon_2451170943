Câu A1:

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 1 | 2 | 4 |
| Box layout | Tất cả 4 box xếp dọc, mỗi box chiếm full width | 2 box mỗi hàng, mỗi box chiếm nửa width | 4 box cùng hàng, mỗi box chiếm 1/4 width |

- `col-md-6` nghĩa là ở breakpoint `md` trở lên (>= 768px) phần tử chiếm 6/12 cột = 50% chiều ngang. Ở các kích thước nhỏ hơn `md`, phần tử sẽ tự động chiếm full width nếu không có lớp chia cột cụ thể như `col-sm-...`, nên không cần viết `col-sm-12`.

Câu A2:
1. `d-none d-md-block`: phần tử bị ẩn (`display: none`) ở kích thước nhỏ hơn `md`; hiện (`display: block`) ở `md` và lớn hơn.
2. Spacing utilities:
- `mt-3` → `margin-top: 1rem`
- `mb-auto` → `margin-bottom: auto`
- `px-4` → `padding-left` và `padding-right` = `1.5rem`
- `py-2` → `padding-top` và `padding-bottom` = `0.5rem`
- `ms-5` → `margin-left` = `3rem`
3. Khác nhau giữa container:
- `.container`: chiều rộng cố định và responsive, thay đổi ở từng breakpoint.
- `.container-fluid`: luôn chiếm 100% chiều ngang màn hình.
- `.container-md`: cố định từ breakpoint `md` trở lên, nhưng fluid ở kích thước nhỏ hơn.

Câu C1:
1. Đổi màu `$primary` sang `#E63946`: dùng Bootstrap Sass source, hoặc cấu hình công cụ build như `npm` + `sass`. Sửa file `_variables.scss` hoặc file Sass tùy chỉnh của dự án, gán `$primary: #E63946;` trước khi import `bootstrap.scss`, rồi biên dịch lại thành CSS.
2. Không nên override trực tiếp `.btn-primary { background: red; }` vì cách đó làm mất lợi thế hệ thống biến của Bootstrap, giảm tính nhất quán và khó bảo trì. Dùng Sass variables giúp thay đổi chủ đề toàn cục và giữ được các lớp Bootstrap khác hoạt động đúng.

Câu C2:
- CSS thuần để tạo navbar responsive và product card: cần viết nhiều dòng CSS hơn, tự định nghĩa breakpoint, padding, layout và trạng thái hover.
- Bootstrap version: ít dòng code hơn, nhanh phát triển hơn, chỉ cần dùng class có sẵn.
- Khả năng tùy biến: CSS thuần linh hoạt nhất nhưng dễ gây trùng lặp; Bootstrap nhanh và nhất quán nhưng đôi khi giới hạn khi muốn thiết kế hoàn toàn độc đáo.
- Khi nên dùng Bootstrap: khi cần triển khai nhanh UI chuẩn, dashboard, landing page doanh nghiệp, prototype.
- Khi không nên dùng Bootstrap: khi cần thiết kế độc nhất, hiệu năng tối ưu cho ứng dụng nhỏ, hoặc khi muốn nhàm lại cấu trúc HTML quá nặng với class.