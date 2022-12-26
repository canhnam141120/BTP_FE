<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">PHƯƠNG THỨC THANH TOÁN VÀ HOÀN TIỀN</div>
        <div class="container">
          <div class="content">
            <span>I. Phương Thức Thanh Toán</span>
            <p>Thanh toán dùng thẻ nội địa internet banking thông qua ví điện tử <strong>VNPay</strong></p>
            <p><strong>BƯỚC 1:</strong> Vào phần <strong>Giao Dịch</strong> ở trong <strong>Quản Lý Cá Nhân</strong></p>
            <p></p>
            <p><strong>BƯỚC 2:</strong> Chọn giao dịch mà bạn cần thực hiện rồi nhấn biểu tượng <strong>Xem Hóa Đơn</strong></p>
            <p></p>
            <p><strong>BƯỚC 3:</strong> Nhấn <strong>Thanh Toán</strong></p>
            <p></p>
            <p><strong>BƯỚC 4:</strong> Chọn 1 trong 4 phương thức thanh  của <strong>VNPay</strong></p>
            <p></p>
            <p><strong>BƯỚC 5:</strong> Thực hiện các yêu cầu, điền đầy đủ các thông tin tương ứng, nhập mã xác thực OTP của <strong>VNPay</strong> đã gửi cho bạn</p>
            <p></p>
            <p><strong>BƯỚC 6:</strong> Nhấn <strong>Xác Nhận</strong></p>
            <p></p>
            <span>II. Phương Thức Hoàn Tiền</span>
            <p>Tiền sẽ được hoàn trả lại người dùng theo các phương thức hoàn tiền của ví điện tử <strong>VNPay</strong> vào mỗi tình huống sau</p>
            <ul>
              <li>TH giao dịch không được tạo nếu 1 trong 2 bên không thanh toán hóa đơn: Tiền sẽ được hoàn lại toàn phần cho người dùng đã thanh toán</li>
              <li>TH giao dịch đã được tạo nhưng bị hủy do không đủ điều kiện (ví dụ như sách không giống như mô tả trên website): Tiền sẽ được hoàn lại toàn phần cho cả 2 bên</li>
              <li>TH giao dịch đã được tạo và giao dịch thành công: Đối với giao dịch trao đổi, tiền đặt cọc sẽ được hoàn lại cho cả 2 bên sau khi nhận lại sách của mình (+ tiền đền bù nếu có).<br>
              Còn đối với giao dịch thuê, tiền đặt cọc sẽ được hoàn lại cho người thuê sau khi trả lại sách, người cho thuê cũng có thể nhận được tiền đền bù nếu có.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Guide-Payment",
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