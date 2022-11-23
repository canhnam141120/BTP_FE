<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="myFVR">
        <div class="containerMF">
          <div class="left-contentMF">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMF">
            <div>DS yêu thích của tôi</div>
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
  name: "MyFavorites",
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

.myFVR {
  background: #F0F0F0;
}

.myFVR .containerMF {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMF {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}
.right-contentMF{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  display: block;
}

</style>