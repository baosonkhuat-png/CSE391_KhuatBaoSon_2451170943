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

Câu B3
Lỗi 1: Dòng 1 - Trong khai báo <!DOCTYPE> thiếu html - Đổi thành <DOCTYPE html>
Lỗi 2: Dòng 2 - Thiếu thuộc tính 'lang' trong thẻ <html> - Thêm lang="vi"
Lỗi 3: Dòng 4 - Thẻ <title> chưa đóng - Thêm </title> sau nội dung
Lỗi 4: Dòng 5 - Giá trị 'utf8' trong thuộc tính 'charset' viết sai và thiếu thẻ meta viewport - Đổi thành <meta charset="UTF-8"> và thêm <meta name="viewport"...>
Lỗi 5: Dòng 8 - Thẻ <h1> đóng bằng thẻ <h1> là sai - Sửa thẻ đóng thành </h1>
Lỗi 6: Dòng 12 - Thẻ <a> đóng bằng thẻ <a> là sai - Sửa thẻ đóng thành </a>
Lỗi 7: Dòng 20 - Thẻ <img> thiếu dấu " " cho thuộc tính src - Sửa thành <img src="iphone.jpg"> và có thể thêm thuộc tính alt=" "
Lỗi 8: Dòng 22 - Thẻ <p> và <b> sai thứ tự đóng thẻ - Thẻ ở trong đóng trước <p><b> </b><p>
Lỗi 9: Dòng 27-30 - Bảng <table> thiếu cấu trúc <thead>, <tbody> - Thêm <thead> và <tbody>, đổi <td> thành <th>
Lỗi 10: Dòng 40 - Một trang chỉ có 1 <main> - Đổi thẻ <main> thứ 2 thành <aside>
Lỗi 11: Dòng 45 - Thẻ <footer> chưa đóng thẻ <p> bên trong - Thêm </p> trước khi đóng thẻ ngoài

Câu B4
1. ![alt text](PBT_01/screenshot/devtool-elements.png)
- 3 thẻ semantic HTML5 mà trang sử dụng gồm thẻ <header>, <h1>, <footer>
- 2 thẻ mà trang không dùng đúng semantic gồm: <nav> thay cho nhiều lớp thẻ <div> và <main> thay cho thẻ <div class="body-home">

2. ![alt text](PBT_01/screenshot/devtool-elements-table.png)
- Nội dung hiển thị: Bảng so sánh thông số kỹ thuật iPhone
- Có sử dụng <tbody> nhưng không có <thead>

3. ![alt text](PBT_01/screenshot/devtool-form.png)
- Action: khi nhấn vào tìm kiếm thì trỏ về đường dẫn thegioididong.com/tim-kiem
- Method: mặc định là GET
- Input types được sử dụng là:
 + type="text": nơi gõ tên sản phẩm cần tìm
 + type="submit": nằm trong thẻ <button>, thẻ này sẽ gửi dữ liệu trong form khi người dùng click vào

Câu C1
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết sản phẩm</title>
</head>
<body>
    <header> <!-- thẻ header để phân biệt với thông tin quan trọng trong main -->
        <nav> <!-- nav để chứa các liên kết điều hướng -->
            <ul> <!-- sử dụng ul vì không cần sắp xếp theo thứ tự -->
                <li><a href="/">Trang chủ</a></li> <!-- li để liệt kê -->
                <li><a href="/category">Sản phẩm</a></li> <!-- li để liệt kê -->
            </ul>
        </nav>
    </header>
    <main> <!-- thẻ main để xác định phần nội dung chính -->
        <nav aria-label="breadcrumb"> <!-- nav vì đây là điều hướng -->
            <ol> <!-- ol vì breadcumb có thứ tự-->
                <li><a href="/">Trang chủ</a></li> <!-- li để liệt kê theo thứ tự -->
                <li><a href="/dien-thoai">Điện thoại</a></li> <!-- li để liệt kê theo thứ tự -->
                <li aria-current="page">iPhone 16</li> <!-- li để liệt kê theo thứ tự -->
            </ol>
        </nav>
        <section id="product-overview"> <!-- section để nhóm phần nội dung theo chủ đề -->
            <div class="product-container"> <!-- div để tạo bố cục -->
                <aside class="product-gallery"> <!-- aside là phần nội dung phụ không liên quan đến nội dung chính -->
                    <figure> <!-- figure để chứa phần nội dung minh hoạ -->
                        <img src="img1.jpg" alt="Mặt trước iPhone 16"> <!-- hiển thị hình ảnh -->
                        <img src="img2.jpg" alt="Mặt sau iPhone 16"> <!-- hiển thị hình ảnh -->
                        <img src="img3.jpg" alt="Cạnh bên iPhone 16"> <!-- hiển thị hình ảnh -->
                        <img src="img5.jpg" alt="Camera iPhone 16"> <!-- hiển thị hình ảnh -->
                        <img src="img4.jpg" alt="Thông số kỹ thuật"> <!-- hiển thị hình ảnh -->
                        <figcaption>Hình ảnh chi tiết iPhone 16 Pro Max</figcaption> <!-- dùng để chú thích cho figure -->
                    </figure>
                </aside>
                <article class="product-info"> <!-- nội dung độc lập trên trang -->
                    <h1>Tên sản phẩm: iPhone 16 Pro</h1> <!-- tạo thẻ tiêu đề chính của trang -->
                    <p class="price"><strong>25.990.000đ</strong></p> <!-- p để chứa nội dung văn bản, strong để nhấn mạnh văn bản -->
                    <div class="rating"> <!-- chia bố cục -->
                        <span>4.5/5 sao</span> <!-- span để nội dung văn bản inline không bị tách dòng -->
                    </div>
                    <p class="description">Mô tả ngắn gọn về sản phẩm...</p> <!-- nội dung văn bản -->
                    <button type="button">Thêm vào giỏ hàng</button> <!-- tạo nút bấm trên trang -->
                </article>
            </div>
        </section>
        <section id="specifications"> <!-- nhóm nội dung theo chủ đề -->
            <h2>Thông số kỹ thuật</h2> <!-- tiêu đề nhỏ hơn h1 -->
            <table border="1"> <!-- tạo bảng có viền -->
                <thead> <!-- phần đầu của bảng -->
                    <tr> <!-- chọn 1 hàng -->
                        <th>Đặc tính</th> <!-- ô tiêu đề -->
                        <th>Thông số</th> <!-- ô tiêu đề -->
                    </tr>
                </thead>
                <tbody> <!-- phần giữa/nội dung của bảng -->
                    <tr> <!-- chọn 1 hàng -->
                        <td>Màn hình</td> <!-- ô nội dung/thông tin -->
                        <td>6.1 inch</td> <!-- ô nội dung/thông tin -->
                    </tr>
                    <tr> <!-- chọn hàng tiếp -->
                        <td>Chip</td> <!-- ô nội dung/thông tin -->
                        <td>A18 Bionic</td> <!-- ô nội dung/thông tin -->
                    </tr>
                </tbody>
            </table>
        </section>
        <section id="reviews"> <!-- nhóm nội dung theo chủ đề -->
            <h2>Đánh giá từ khách hàng</h2> <!-- tiêu đề nhỏ hơn h1 -->
            <article class="comment"> <!-- phần nội dung độc lập -->
                <header> <!-- phần đầu không chứa nội dung chính -->
                    <strong>Nguyễn Văn A</strong> <!-- nhấn mạnh văn bản -->
                    <time datetime="2024-04-24">24/04/2024</time> <!-- hiển thị thời gian -->
                </header>
                <p>Sản phẩm tuyệt vời, giao hàng nhanh!</p> <!-- nội dung văn bản -->
            </article>
        </section>
        <aside id="related-products"> <!-- phần nội dung phụ -->
            <h2>Sản phẩm tương tự</h2> <!-- tiêu đề nhỏ hơn h1 -->
            <ul> <!-- liệt kê không theo thứ tự -->
                <li> <!-- liệt kê -->
                    <a href="/samsung-s24">Samsung Galaxy S24</a> <!-- tạo liên kết điều hướng -->
                </li>
            </ul>
        </aside>
    </main>
    <footer> <!-- phần cuối của trang chứa thông tin bổ sung -->
        <p>&copy;Shopdientu</p> <!-- nội dung văn bản -->
        <nav> <!-- chứa liên kết điều hướng -->
            <a href="/policy">Chính sách bảo mật</a> <!-- tạo liên kết điều hướng -->
            <a href="/contact">Liên hệ</a> <!-- tạo liên kết điều hướng -->
        </nav>
    </footer>
</body>
</html>

Câu C2
Đầu tiên là khả năng tiếp cận (Accessibility). Các trang web dựa vào các thẻ như <nav>, <main> hay <button> để định hướng cho người dùng. Nếu sử dụng toàn bộ các thẻ là <div>, thì toàn bộ trang web sẽ chỉ là một khối văn bản nhàm chán khiến người dùng gặp khó khăn trong việc định hướng tìm đến menu hoặc các nội dung chính mà họ quan tâm. Tiếp theo là SEO, các công cụ tìm kiếm phổ biến như Google sử dụng thuật toán để phân tích cấu trúc trang. Trong đó các thẻ semantic sẽ đóng vai trò như là các chỉ dẫn để giúp Google có thể hiểu được đâu là tiêu đề quan trọng <h1> hay đâu là các nội dung chính <article> hơn là một mê cung toàn các <div>.
Giả sử ta dùng <div class="btn"> để làm nút bấm thay vì <button>. Để nó hoạt động như một nút bấm thực thụ thì ta phải code thêm các chức năng cho nó. Tuy nhiên với <button> thì ta sẽ có sẵn các chức năng như: phản hổi khi nhấn phím Enter hoặc là trạng thái Focus khi nhấn phím Tab mà không cần phải code thêm dòng nào cả.
Mặc dù vậy thì thẻ <div> cũng có những công dụng nhất định như trở thành một khối để gom nhóm các phần tử để áp dụng CSS(Grid, Flexbox,...) mà không ý nghĩa về mặt nội dung nào cả
