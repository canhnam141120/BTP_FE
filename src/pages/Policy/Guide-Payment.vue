<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">PHƯƠNG THỨC THANH TOÁN VÀ HOÀN TIỀN</div>
        <div class="container">
          <div class="content">
            <span>I. Phương Thức Thanh Toán</span>
            <p>Thanh toán dùng thẻ nội địa internet banking thông qua ví điện tử <strong>VNPay</strong></p>
            <span>BƯỚC 1:</span>
            <p></p>
            <span>BƯỚC 2:</span>
            <p></p>
            <span>BƯỚC 3:</span>
            <p></p>
            <span>II. Phương Thức Hoàn Tiền Đặt Cọc</span>
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