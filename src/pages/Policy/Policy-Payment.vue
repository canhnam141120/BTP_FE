<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">CHÍNH SÁCH BẢO MẬT THANH TOÁN</div>
        <div class="container">
          <div class="content">
            <span>1. Cam Kết Bảo Mật</span>
            <p>
              - Hệ thống thanh toán thẻ được cung cấp bởi các đối tác thanh toán (<strong>“Đối tác cổng thanh toán”</strong>) đã được
                cấp
                phép hoạt động hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại <strong>Trạm Sách</strong> đảm
                bảo tuân thủ
                theo các tiêu chuẩn bảo mật ngành
            </p>
            <!--    ==============================================-->
            <span> 2. Quy Định Bảo Mật</span>
            <p>- Chính sách giao dịch thanh toán bằng thẻ nội địa (internet banking) đảm bảo tuân thủ các
              tiêu chuẩn của các Đối tác cổng thanh toán gồm:</p>
            <ul>
              <li>Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL (Secure Sockets Layer) bằng cách mã hóa tất cả các thông tin Khách hàng nhập vào.</li>
              <li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
              <li>Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.</li>
              <li>Tiêu chuản mã hóa MD5 12 bit.</li>
              <li>Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng Nhà nước Việt Nam.</li>
            </ul>
            <p>- Chính sách bảo mật giao dịch trong thanh toán của <strong>Trạm Sách</strong> áp dụng với Khách hàng:</p>
            <ul>
              <li><strong>Trạm Sách</strong> cung cấp tiện ích lưu giữ Token – chỉ lưu giữ chuối đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho <strong>Trạm Sách</strong>. <strong>Trạm Sách</strong> không trực tiếp lưu giữ thông tin thẻ Khách hàng. Việc bảo mật thông tin thẻ thanh toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.</li>
              <li>Đối với thẻ nội địa (internet banking), <strong>Trạm Sách</strong> chỉ lưu trữ mã đơn hàng, mã giao dịch và tên Ngân hàng.</li>
              <li>Trong trường hợp nếu Khách hàng thông báo/khiếu nại tình trạng thông tin thanh toán của Khách hàng khi mua hàng qua website <strong>Trạm Sách</strong> bị thay đổi, xóa, hủy, sao chép, tiết lộ, di chuyển trái phép hoặc bị chiếm đoạt gây thiệt hại cho Khách hàng thì <strong>Trạm Sách</strong> sẽ nỗ lực phối hợp với Đối Tác Cổng Thanh Toán để tìm hiểu vấn đề và hỗ trợ xử lý cho đến hoàn tất vấn đề Khách hàng đang đang gặp phải.</li>
            </ul>
            <p><strong>Trạm Sách</strong> cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện qua website <strong>Trạm Sách</strong>.
            </p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Policy-Payment",
  components: {Layout}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

strong{
  color: #9d6b54;
}

main {
  background: #F0F0F0;
}

.body {
  background: #F0F0F0;
}

.body .container {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 10px auto 10px auto;
  display: block;
  padding: 0px 0px;
}

.body .title {
  max-width: 1230px;
  border-radius: 10px;
  background-color: #F0ECE4;
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
  margin: 10px auto 10px auto;
  border: 1px solid #9D6B54;
}

.subtitle{
  font-weight: 600;
  color: #9D6B54;
  text-align: center;
  font-size: 16px;
}

.content{
  color: grey;
  padding: 15px;
  background: #F0ECE4;
  max-width: 1230px;
  height: auto;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  font-size: 14px;
}
.content span{
  font-weight: bold;
  color: #9D6B54;
}
</style>