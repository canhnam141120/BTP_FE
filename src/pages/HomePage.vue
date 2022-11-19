<template>
  <Layout>
    <main style="flex-grow: 1;">
      <!--==============banner=============-->
<!--      <div class="banner">-->
<!--      </div>-->
<!--      <VueSlickCarousel v-bind="settings" :arrows="true">-->
<!--        <img src="../image/banner.png">-->
<!--        <img src="../image/banner1.png">-->
<!--        <img src="../image/banner2.png">-->
<!--        <img src="../image/banner3.png">-->
<!--      </VueSlickCarousel>-->

          <SlidePicture></SlidePicture>
      <!--==============body=============-->
      <div class="body">
        <div class="container">
          <div class="listbook">
            <h1>Sách mới đăng</h1>
            <div class="grid-container-book" >
              <div class="grid-item-book" v-for="item of listBook" :key="item.id">
                <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">
                  <img v-bind:src="item.image">
                </router-link>
                <div class="grid-item-book-info">
                  <span>{{ item.title }}</span><br>
                  <span>Người đăng: {{ item.user.fullname}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="listbook">
            <h1>Bài đăng mới</h1>
            <div class="grid-container-post" >
              <div class="grid-item-post" v-for="item of listPost" :key="item.id">
                <router-link to="/postdetail"><img src="../image/cover.png"></router-link>
                <div class="grid-item-post-info">
                  <span>{{ item.title }}</span><br>
                  <span>Người đăng: {{ item.user.fullname}}</span>
                  <span>{{ item.user.createdDate}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_POST} from "@/constant/constant-api";
import Layout from "@/components/Layout";
// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SlidePicture from "../components/SlidePicture";

export default {
  name: "HomePage",
  components: {SlidePicture, Layout},
  data() {
    return {
      listBook: '',
      listPost: '',
      settings: {
        "dots": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "pauseOnDotsHover": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "pauseOnFocus": true,
        "pauseOnHover": true,
        "centerMode": true,
        "variableWidth": true
      }
    }
  },
  created() {
    this.getListBook(),
        this.getListPost()
  },
  methods: {
    getListBook() {
      apiFactory.callApi(API_BOOK.TOP_BOOK, 'GET', {}).then((res) => {
        this.listBook = res.data.data
      }).catch(() => {
      });
    },
    getListPost() {
      apiFactory.callApi(API_POST.TOP_POST, 'GET', {}).then((res) => {
        this.listPost = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

.banner {
  margin: 24px;
  justify-content: center;
  padding-left: 100px;
}

.body {
  background: #F0F0F0;
}

.body .container {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 30px;
}

.grid-container-book {
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto auto;
  width: 1206px;
}

.grid-container-book label {
  background-color: #87C1CD;
}

.grid-item-book {
  border-radius: 10px;
  background: white;
  width: 191px;
  margin: 5px;
}

.grid-item-book img{
  border-radius: 10px;
  height: 250px;
  width: 191px;
}

.grid-item-book-info{
  padding: 5px;
}

.grid-container-post {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  width: 1206px;
}

.grid-item-post {
  border-radius: 10px;
  background: white;
  width: 392px;
  margin: 5px;
}

.grid-item-post-info{
  padding: 5px;
}

.slick-initialized .slick-slide {
  display: flex !important;
  justify-content: center;
  padding: 20px;
  background-color: #F0F0F0;
}
</style>