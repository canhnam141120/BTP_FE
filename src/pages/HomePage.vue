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
      <RouterLink to="/ManageIndex">Quản trị</RouterLink>
    </div>
    <div class="header-right">
        <router-link v-if="!this.$cookies.get('token')" to="/register" class="header-button">Đăng ký</router-link>
        <router-link v-if="!this.$cookies.get('token')" to="/login" class="header-button">Đăng nhập</router-link>
        <button v-else v-on:click="HandleLogout">Đăng xuất</button>
    </div>
  </div>
<!--==============header=============-->
    <!--==============banner=============-->
    <div class="banner">
      <img src="../image/banner.png">
    </div>
    <!--==============banner=============-->
    <div class="listbook">
      <h1>Sách mới đăng</h1>
      <div class="grid-container" v-for="item of listBook" :key="item.id">
        <div class="grid-item">
<!--          <router-link :to="/Book_Detail"><img src="../image/book.jpg"></router-link>-->
          <router-link :to="{ name: 'Book_Detail', query: { id:item.id }}"><img v-bind:src="item.image" height="340px" width="250px"></router-link>
<!--          v-bind:to="'/Book_Detail/'+item.id"   { name: 'Book_Detail', query: { id:item.id }}-->
          <p></p>
          <div><label>Tac gia: </label> &nbsp;<a>{{item.author}}</a></div> <hr>
          <div><label>Tac pham: </label>&nbsp;<p>{{item.title}}</p></div><hr>
          <div><label>Mo ta: </label>&nbsp;<p>{{item.description}}</p></div><hr>
          <div><label>Nha xuat ban: </label>&nbsp;<p>{{item.publisher}}</p></div><hr>
          <div><label>Nam phat hanh: </label>&nbsp;<p>{{item.year}}</p></div><hr>
          <div><label>Tinh trang sach: </label>&nbsp;<p>{{item.statusBook}}</p></div>

        </div>

      </div>
    </div>

    <div class="listbook">
      <h1>Bài đăng mới</h1>
      <div class="grid-container" v-for="item of listPost" :key="item.id">
        <div class="grid-item">
          <router-link to="/postdetail"><img src="../image/cover.png"></router-link>
          <p></p>
          <div><label>Người đăng </label> &nbsp;<a>LichBich</a></div> <hr>
          <div><label>Nội dung: </label>&nbsp;<p>{{item.content}}</p></div><hr>
          <div><label>Tiêu đề </label>&nbsp;<p>{{item.title}}</p></div><hr>
          <div><label>Hashtag </label>&nbsp;<p>#{{item.hashtag}}</p></div><hr>
          <div><label>Ngày đăng </label>&nbsp;<p>{{item.createdDate}}</p></div><hr>
        </div>

      </div>
    </div>

<!--    <transition-group tag="main" name="card">-->
<!--      <article v-for="(album, index) in albums" :key="index" class="card" >-->
<!--        <a :href="album.url" target="_blank">-->
<!--          <div class="image" v-for="image in album.image" v-if="image.size == 'extralarge'">-->
<!--            <img v-if="image['#text'] !== ''" :src="image['#text']" :alt="album.name" v-on:load="isLoaded()" v-bind:class="{ active: isActive }">-->
<!--            <img v-else src="https://source.unsplash.com/random/300x300" :alt="album.name" v-on:load="isLoaded()" v-bind:class="{ active: isActive }">-->
<!--          </div>-->
<!--          <div class="description">-->
<!--                    <span class="playcount">-->
<!--                        <span v-bind:style="{width: m_percentage(album.playcount) + '%'}"></span>-->
<!--                    </span>-->
<!--            <h3 class="title" :data-mbid="album.mbid">{{ album.name }}</h3>-->
<!--            <p class="artist">{{ album.artist.name }}</p>-->
<!--          </div>-->
<!--        </a>-->
<!--      </article>-->
<!--    </transition-group>-->
  </div>

</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_POST} from "@/constant/constant-api";

export default {
  name: "HomePage",
  data(){
    return{
      listBook:'',
      listPost:''
    }
  },
  created() {
    this.getListBook(),
        this.getListPost()
  },
  methods:{
    getListBook(){
      apiFactory.callApi(API_BOOK.LIST_BOOK,'GET',{}).then((res)=>{
        this.listBook = res.data.data
      }).catch(() => {
      });
    },
    getListPost(){
      apiFactory.callApi(API_POST.LIST_POST,'GET',{}).then((res)=>{
        this.listPost = res.data.data
      }).catch(() => {
      });
    },
    HandleLogout(){
          this.$cookies.remove('token')
          alert('Đăng xuất thành công!')
          this.$router.go();
    }
  }
}
</script>

<style>
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