<template>
    <!--==============header=============-->
    <Layout>
      <main style="flex-grow: 1; padding: 32px 0 45px">
    <!--==============banner=============-->
    <div class="banner">
    </div>

        <VueSlickCarousel v-bind="settings" :arrows="true">
          <img src="../image/banner.png">
          <img src="../image/banner.png">
          <img src="../image/banner.png">
          <img src="../image/banner.png">
        </VueSlickCarousel>
    <!--==============body=============-->
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
    <!--==============footer=============-->
      </main>
    </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_POST} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "HomePage",
  components: { Layout, VueSlickCarousel },
  data(){
    return{
      listBook:'',
      listPost:'',
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
.slick-initialized .slick-slide {
  display: flex !important;
  justify-content: center;
  padding: 20px;
}
</style>