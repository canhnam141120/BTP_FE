<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
            Đây là trang cá nhân
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";

export default {
  name: "PersonalIndex",
  components:{Layout},
  data(){
    return{

    }
  }
};
</script>

<style>
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
max-width: 1230px;
background: #F0ECE4;
border-radius: 10px;
}
</style>