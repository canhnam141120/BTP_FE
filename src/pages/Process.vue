<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">QUY TRÌNH GIAO DỊCH</div>
        <div class="container">
          <div class="content">
            <img v-bind:src="imgProcess">
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";

export default {
  name: "Process",
  components: {Layout},
  data() {
    return {
      imgProcess: 'https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/process.gif'
    }
  }
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