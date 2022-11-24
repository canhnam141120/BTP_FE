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
      <div class="homepage">
        <div class="container">
          <div class="listBook">
            <div class="home-title">SÁCH MỚI ĐĂNG</div>
            <hr style="margin-top: 0px">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-book" >
                  <div class="item-book" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 332px">
                      <b-skeleton-img card-img="top" aspect="3:1" height="250px"></b-skeleton-img>
                      <b-card style="height: 120px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="grid-book">
                <div class="item-book" v-for="item of listBook" :key="item.id">
                  <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="book-title">{{ item.title }}</div>
                    <div><img src="../image/user.png"> {{ item.user.fullname }}</div>
                    <label>Giá bìa: <strong>{{ item.coverPrice.toLocaleString() }}đ</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="listPost">
            <div class="home-title2">BÀI VIẾT MỚI</div>
            <hr style="margin-top: 0px">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-post" >
                  <div class="item-post" v-for='i in 3' :key="i">
                    <b-card no-body img-left style="height: 191px">
                      <b-skeleton-img card-img="left" width="191px"></b-skeleton-img>
                      <b-card style="width: 201px; height: 191px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="grid-post">
                <div class="item-post" v-for="item of listPost" :key="item.id">
                  <router-link :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="post-title">{{ item.title }}</div>
                    <div><img src="../image/user.png"> {{ item.user.fullname }}</div>
                    <div class="createDate"><Icon class="iconTime" icon="ic:twotone-access-time"/>{{item.createdDate | formatDate}}</div>
                    <div class="post-content">{{ item.content }}</div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
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
import {Icon} from '@iconify/vue2';

export default {
  name: "HomePage",
  components: {SlidePicture, Layout, Icon},
  data() {
    return {
      loading: false,
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
    this.getListBook()
    this.getListPost()
  },
  methods: {
    getListBook() {
      this.loading = true;
      apiFactory.callApi(API_BOOK.TOP_BOOK, 'GET', {}).then((res) => {
        this.listBook = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    getListPost() {
      this.loading = true;
      apiFactory.callApi(API_POST.TOP_POST, 'GET', {}).then((res) => {
        this.listPost = res.data.data
        this.loading = false
      }).catch(() => {
      });
    }
  },
  filters:{
    formatDate(value){
      return new Date(value).toLocaleString('en-GB')
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

strong {
  color: #9D6B54;
}

.banner {
  margin: 24px;
  justify-content: center;
  padding-left: 100px;
}

.homepage {
  background: #F0F0F0;
}

.home-title{
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 470px;
}

.home-title2{
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 490px;
}

.homepage .container {
  max-width: 1250px;
  background: #F0F0F0;
  border-radius: 10px;
  display: block;
}

.listBook {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  border: 1px solid #9D6B54;
}

.listPost {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  margin-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border: 1px solid #9D6B54;
}

.grid-book {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 1206px;
  margin-left: 10px;
}

.item-book {
  border: 1px solid #9D6B54;
  border-radius: 10px;
  width: 191px;
  height: auto;
  margin: 5px;
}

.item-book:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-book img{
  border-radius: 10px;
  height: 250px;
  width: 190px;
}

.grid-book .info {
  height: 120px;
  padding: 5px;
}

.grid-book .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

.grid-book .info label {
  margin-left: 5px;
}

.grid-book .info .book-title {
  color: #9D6B54;
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.grid-book .info .book-status {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.grid-post {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  width: 1206px;
  margin-left: 10px;
}

.item-post {
  border-radius: 10px;
  border: 1px solid #9D6B54;
  display: flex;
  width: 392px;
  margin: 5px;
  height: auto;
}

.item-post:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-post img{
  border-radius: 10px;
  height: 191px;
  width: 191px;
}

.grid-post .info {
  width: 201px;
  height: 120px;
  padding: 5px;
}

.grid-post .info img {
  width: 18px;
  height: 18px;
  margin-left: 4px;
  margin-bottom: 4px;
}

.grid-post .info label {
  margin-left: 2px;
}

.grid-post .info .post-title {
  color: #9D6B54;
  margin-left: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.createDate{
  margin-top: 4px;

  font-size: 14px;
}

.iconTime{
  color: #9D6B54;
  margin-bottom: 5px;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 3.5px;
}


.grid-post .info .post-content {
  font-size: 14px;
  margin-left: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.slick-initialized .slick-slide {
  display: flex !important;
  justify-content: center;
  padding: 20px;
  background-color: #F0F0F0;
}
</style>