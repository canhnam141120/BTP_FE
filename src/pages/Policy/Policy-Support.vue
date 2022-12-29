<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">TRUNG TÂM HỖ TRỢ & LIÊN HỆ</div>
        <div class="container">
          <div class="content">
            <span>Mọi thắc mắc và vấn đề bạn gặp phải trong quá trình sử dụng nền tảng xin vui lòng liên hệ với chúng tôi qua các phương thức sau:</span>
            <ul>
              <li>Hòm thư điện tử: tramsachhn@gmail.com</li>
              <li>Hotline: 0961284654</li>
              <li>Địa chỉ: Số 1, Đào Duy Anh, Đống Đa, Hà Nội</li>
            </ul>
            <p>Chúng tôi sẽ xin phép chỉ tiếp nhận yêu cầu trong giờ hành chính, ngoài ra, vào các ngày nghỉ lễ, chúng tôi sẽ sớm phản hồi cho các bạn sau khi quay trở lại làm việc.</p>
            <p>TRẠM SÁCH XIN CẢM ƠN!</p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Policy-Support",
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