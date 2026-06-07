jâu A1:

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