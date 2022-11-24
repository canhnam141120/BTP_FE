<template>
<Layout>
<main style="flex-grow: 1">
  <div class="MT">
    <div class="containerMT">
      <div class="left-contentMT">
        <SideBar_Personal></SideBar_Personal>
      </div>
      <div class="right-contentMT">
        <div class="">Giao dịch của tôi</div>
      </div>
    </div>
  </div>
</main>
</Layout>
</template>

<script>
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";

export default {
  name: "MyTransaction",
  components: {SideBar_Personal, Layout},
}
</script>

<style>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}

.MT {
  background: #F0F0F0;
}

.MT .containerMT {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMT {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMT{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  border: 1px solid #9D6B54;
  display: block;
}

</style>