<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
          <div class="content">
            <Icon class="iconErr" icon="tabler:error-404-off"/>
            <div class="textErr">Có lỗi xảy ra! Vui lòng quay về trang chủ!</div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import {Icon} from '@iconify/vue2';

export default {
  name: "404Page",
  components: {Layout, Icon},
  created() {

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

.body{
  background: #F0F0F0;
}

.container{
  max-width: 1250px;
  background: #F0F0F0;
  border-radius: 10px;
  display: block;
}

.content {
  text-align: center;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
  padding-bottom: 20px;
}

.iconErr{
  font-weight: bold;
  font-size: 300px;
  color: #9D6B54;
}

.textErr{
  font-weight: bold;
  font-size: 30px;
  color: #9D6B54;
}
</style>