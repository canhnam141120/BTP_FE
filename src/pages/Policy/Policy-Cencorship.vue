<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">CHÍNH SÁCH BẢO MẬT THANH TOÁN</div>
        <div class="container">
          <div class="content">
            <span>1. Cam kết bảo mật</span>
            <p>
              - Hệ thống thanh toán thẻ được cung cấp bởi các đối tác thanh toán (“Đối tác cổng thanh toán”) đã được
              cấp
              phép hoạt động hợp pháp tại Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại Trạm sách đảm
              bảo tuân thủ
              theo các tiêu chuẩn bảo mật ngành
              <!--                <li>Các bài đăng phải ghi rõ tên sách, tình trạng của sách và mong muốn của người đăng bài.</li>-->
              <!--                <li>Thành viên chỉ comment ý kiến không vi phạm chính sách của nền tảng, nếu vi phạm comment sẽ bị xóa</li>-->
            </p>
            <!--    ==============================================-->
            <span> 2. Quy định bảo mật:</span>

            <p>- Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ các
              tiêu chuẩn của các Đối tác cổng thanh toán gồm:

              Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL
              (Secure
              Sockets Layer) bằng cách mã hóa tất cả các thông tin Khách hàng nhập vào.
              Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.
              Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.
              Tiêu chuản mã hóa MD5 12 bit.
              Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân hàng
              Nhà
              nước Việt Nam.
              - Chính sách bảo mật giao dịch trong thanh toán của Trạm sách áp dụng với Khách hàng:

              Trạm sách cung cấp tiện ích lưu giữ Token – chỉ lưu giữ chuối đã được mã hóa bởi Đối Tác Cổng Thanh Toán
              cung cấp cho Trạm sách. Trạm sách không trực tiếp lưu giữ thông tin thẻ Khách hàng. Việc bảo mật thông tin
              thẻ thanh
              toán Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.
              Đối với thẻ quốc tế: thông tin thẻ thanh toán của Khách hàng mà có khả năng sử dụng để xác lập giao dịch
              không được lưu trên hệ thống của Trạm sách. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.
              Đối với thẻ nội địa (internet banking), FAHASA chỉ lưu trữ mã đơn hàng, mã giao dịch và tên Ngân hàng.
              Trong trường hợp nếu Khách hàng thông báo/khiếu nại tình trạng thông tin thanh toán của Khách hàng khi mua
              hàng qua website/ứng dụng của Trạm sách bị thay đổi, xóa, hủy, sao chép, tiết lộ, di chuyển trái phép hoặc
              bị
              chiếm đoạt gây thiệt hại cho Khách hàng thì Trạm sách sẽ nỗ lực phối hợp với Đối Tác Cổng Thanh Toán để
              tìm hiểu vấn đề
              và hỗ trợ xử lý cho đến hoàn tất vấn đề Khách hàng đang đang gặp phải.

              Trạm sách cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động thanh
              toán
              thực hiện qua website/ứng dụng của Trạm sách.</p>
            <!--    ==============================================-->
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Policy-Cencorship",
  components: {Layout}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
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