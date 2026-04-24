Câu A1 (Tài liệu tham chiếu: tuan_1_html5/01_introduction_html_universe.md)
1. 
B1. DNS Lookup: Trình duyệt hỏi hệ thống DNS để lấy địa chỉ IP của trang web
B2. Trình duyệt gửi HTTP Request: Yêu cầu được xem nội dung trang chủ trang web shopee.vn
B3. Server trả về HTTP Respone: Server nhận request và trả lại dữ liệu bao gồm HTML(cấu trúc), CSS(giao diện), JS(logic), hình ảnh, video...
B4. Trình duyệt nhận file: Đọc các file HTML, CSS để dựng khung, trang trí
B5. Trình duyệt hiển thị: Tổng hợp lại và chạy JS để render ra giao diện trang web cho người dùng

2. 
- Name(tên file)
- Type(loại file: document, stylesheet,...)
- Status code(cho biết file có được tải thành công hay không)
- Initiator(xem được cái gì đã ra lệnh tải file này về)
- Size(kích thước của file đó)
- Time(thời gian để tải xong file đó)
- 1 biểu đồ cho phép người dùng xem được thời điểm các file được tải và file nào tốn thời gian nhất để tải về
- Thanh trạng thái ở dưới cùng chứa:
 + Số lượng requests được gửi đi
 + Tổng dung lượng được nén và chuyển đến máy tính của người dùng
 + Tổng dung lượng thực tế sau khi giải nén các file
 + Tổng thời gian kể từ lúc bắt đầu tải cho đến khi trang web hoàn tất
 + Thời gian để xây dựng xong bộ khung trang web
 ![alt text](<network devtools.png>)
 - Status Code của request đầu tiên: Khoanh tròn xanh
 - Tổng thời gian load trang: Khoanh tròn đen
 - Một request trả về file CSS: Mũi tên đỏ

Câu A2 (Tài liệu tham chiếu: tuan_1_html5/04_visible_part_html.md)
- Các lỗi semantic:
    1. <div class="header"> </div> -> <header> </header>: xác định phần đầu của trang web
    2. <div class="menu"> </div> -> <nav> </nav>: chứa các điều hướng liên kết chính
    3. <div><a href="/">Trang chủ</a></div>
   <div><a href="/products">Sản phẩm</a></div>
    -> <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
       </ul>: hiển thị theo danh sách
    4. <div class="main"> -> <main>: chứa nội dung quan trọng và duy nhất của trang
    5. <div class="footer"> -> <footer>: xác định phần cuối trang web

Câu A3 (Tài liệu tham chiếu: tuan_1_html5/04_visible_part_html.md)
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
<div> là thẻ ở mức block luôn chiếm hết 1 dòng và kéo dài hết chiều ngang của trang
<span> và <strong> đều là các thẻ inline nên chúng chỉ chiếm vừa đủ cho nội dung bên trong mình và cho phép các thẻ inline khác nằm cùng 1 dòng với mình

Câu A4 (Tài liệu tham chiếu: tuan_1_html5/05_tables_hyperlinks.md)
- Sự khác nhau giữa <thead>, <tbody>, <tfoot>:
 + <thead> chứa tiêu đề chính cho các cột
 + <tbody> chứa nội dung chính của bảng
 + <tfoot> chứa tổng kết hoặc ghi chú
- Lý do không nên dùng table để layout trang web
 + Sai mục đích ngữ nghĩa vì table chỉ dùng để hiển thị dữ liệu dạng bảng
 + Ảnh hưởng đến hiệu năng vì phải render toàn bộ nội dung trong bảng rồi mới hiển thị
 + Khó bảo trì vì có rất nhiều thẻ <tr>, <td> khiến việc đọc và sửa lỗi rất rối