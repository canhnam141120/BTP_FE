<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">CHÍNH SÁCH ĐỀN BÙ</div>
        <div class="container">
          <div class="content">
            <span>1. Trường hợp sách bị hư hỏng so với trạng thái ban đầu</span>
            <p>
              Giá trị đền bù sẽ được xác định dựa trên các mức độ và yếu tố gây tổn hại về sách, nội dung sách so
              với trạng thái sách ban đầu, sẽ được thỏa thuận trực tiếp trao đổi giữa nhân viên vận chuyển của Trạm và người sử dụng.
              Số tiền đền bù sẽ được trích xuất trừ vào số tiền mà người dùng đã đặt cọc
            </p>
            <p>Cụ thể các mức đền bù và số tiền phải đền bù như sau:</p>

            <ul>
              <li>Sách bị nhàu, gấp quá mức: 10% tiền đặt cọc</li>
              <li>Sách bị vẽ vời, tô màu, viết chữ nhiều quá mức: 5% tiền đặt cọc với 1 lỗi</li>
              <li>Sách bị rách, cháy, ướt (không ảnh hưởng đến nội dung): 5% tiền đặt cọc với 1 lỗi</li>
              <li>Sách bị rách, cháy, ướt (ảnh hưởng đến nội dung): Thỏa thuận với chủ cuốn sách</li>
              <li>Sách không thể sử dụng tiếp: 100% tiền đặt cọc</li>
            </ul>

            <span>2. Trường hợp mất sách hoặc không nhân viên của Trạm không thể liên hệ thu hồi sách (trong vòng 1 tuần kể từ ngày hết hạn)</span>
            <p>Trong trường hợp này, người dùng sẽ phải dùng 100% số tiền cọc mà mình đã đặt để bồi thường cho người còn lại!</p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Policy-Comp",
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