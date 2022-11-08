<template>
  <div>
    <!--==============header=============-->
    <div class="header">
      <a href="#default" class="logo"><img src="/image/logo-tramsach.png"></a>
      <div class="header-menu">
        <a class="active" href="#aboutus">Về trạm sách</a>
        <a href="#booklist">Tủ sách</a>
        <a href="#blog">Blog</a>
        <a href="#term">Chính sách & Điều khoản</a>
        <a href="#process">Quy trình</a>
        <RouterLink to="/ManageIndex">Management Admin</RouterLink>
      </div>
      <div class="header-right">
        <router-link to="/register" class="header-button">Dang ky</router-link>
        <router-link to="/login" class="header-button">Dang nhap</router-link>
      </div>
    </div>
    <!--==============header=============-->
    <!--==============banner=============-->
    <div class="banner">
      <img src="../image/banner.png">
    </div>
    <!--==============banner=============-->
    <div class="listbook">
      <h1>Bài đăng mới</h1>
      <div class="grid-container" v-for="item of listPost" :key="item.id">
        <div class="grid-item">
          <router-link to="/postdetail"><img src="../image/cover.png"></router-link>
          <p></p>
          <div><label>Người đăng </label> &nbsp;<a>{{item.}}</a></div> <hr>
          <div><label>Nội dung: </label>&nbsp;<p>{{item.content}}</p></div><hr>
          <div><label>Tiêu đề </label>&nbsp;<p>{{item.title}}</p></div><hr>
          <div><label>Hashtag </label>&nbsp;<p>#{{item.hashtag}}</p></div><hr>
          <div><label>Ngày đăng </label>&nbsp;<p>{{item.createdDate}}</p></div><hr>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_POST} from "@/constant/constant-api";

export default {
  name: "Blog",
  data() {
    return {
      listPost: ''
    }
  },
  created() {
    this.getPostAll()
  },
  methods: {
    getPostAll() {
      apiFactory.callApi(API_POST.LIST_POST, 'GET', {}).then((res) => {
        this.listPost = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 24px 8px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo img{
  width: 100%;
  height: auto;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-menu {
  margin-left: 100px;
  padding-right: 10px;

}
.header-menu a{
  margin-left: 30px;
  padding-right: 15px;
  /*justify-content: center;*/
}
.header-right {
  float: right;
  margin-right: 30px;
}
.header-button{
  border: burlywood;
  border-radius: 2px;
  padding-left: 10px;
}
.banner{
  margin: 24px;
  justify-content: center;
  padding-left: 100px;
}
.listbook{
  margin: 24px;
  justify-content: center;
  padding-left: 100px;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  width: 400px;
}
.grid-container label{
  background-color: #87C1CD;
}
</style>