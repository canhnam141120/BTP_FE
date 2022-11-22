<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
          <SideBar_Personal></SideBar_Personal>
          <div class="right-content">
<!--            ===========edit ni here-->

          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import SideBar_Personal from "../../components/SideBar_Personal";

export default {
  name: "MyBook",
  components: {SideBar_Personal, Layout},
  data() {
    return {}
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
  display: flex;
}


.profile {
  margin-top: 3%;
  display: flex;

}

.avatar {
  background-color: #6C757D;
  width: 186px;
  height: 186px;
  margin-top: 45px;
}

.infor {
  width: 100%;
  margin-left: 79px;
  margin-top: 19px;
  margin-right: 70px;
}

.infor h3 {
  color: #9D6B54;
  font-weight: bold;
}

.infor span {

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.description {
  display: flex;

}

.description span {
  margin-left: 14px;
}

.table-content {
  margin-top: 10%;
  border: white;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  height: 200px;
}

.edit {
  margin-top: 3%;
}

.btn-edit {
  height: 48px;
  width: 240px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #9D6B54;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-bottom: 11px;
  line-height: 16.4px;
  font-weight: 700;
  line-height: 18.75px;
  justify-content: center;
  text-align: center;
}

.btn-edit:hover {
  background: white;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

</style>