<template>
  <Layout>
    <main style="flex-grow: 1;">
      <!--==============body=============-->
      <div class="body-blog">
        <div class="title">TRẠM ĐỌC</div>
        <div class="container-blog">
          <div v-if="this.$cookies.get('token')" class="top"></div>
          <div class="content">
            <div class="search">
              <input type="text" v-model="search" placeholder="Nhập tiêu đề">
              <button v-on:click="HandleSearch">Tìm</button>
            </div>
            <hr>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid">
                  <div class="item" v-for='i in 10' :key="i">
                    <b-card no-body img-left style="height: 180px;">
                      <b-skeleton-img card-img="left" width="180px"></b-skeleton-img>
                      <b-card style="width: 413px; height: 180px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>

              <div class="grid">
                <div class="item" v-for="item of listPost" :key="item.id">
                  <router-link  :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img class="post-image" v-bind:src="item.image">
                  </router-link>
                  <button class="action">Xem chi tiết</button>
                  <div class="info">
                    <div class="post-title">{{ item.title }}</div>
                    <div><img src="../image/user.png" >{{ item.user.fullname }}</div>
                    <label>Ngày đăng: <strong>{{ item.createdDate}}</strong></label>

                    <label class="post-content">{{ item.content }}</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
              <div class="page">
                <b-pagination @input="ChangePage" v-model="page" :total-rows="totalPost" :per-page="10">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
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
import {API_POST} from "@/constant/constant-api";
import Layout from "@/components/Layout";

export default {
  name: "BlogIndex",
  components: {Layout},
  data() {
    return {
      listPost: '',
      totalPost: '',
      search: '',
      isSearch: false,
      loading: false,
    }
  },
  created() {
    this.isSearch = false
    this.ChangePage(1)
  },
  methods: {
    ChangePage(pageNumber) {
      this.loading = true;
      if (this.isSearch) {
        window.scrollTo(0, 0)
        const url = API_POST.SEARCH_POST + pageNumber
        apiFactory.callApi(url, 'POST', {
          search: this.search
        }).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      } else {
        window.scrollTo(0, 0)
        const url = API_POST.LIST_POST + pageNumber
        apiFactory.callApi(url, 'GET', {}).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      }
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.ChangePage(1)
    },
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

.body-blog {
  background: #F0F0F0;
}

.body-blog .top {
  background: #F0ECE4;
  max-width: 800px;
  height: 200px;
  border-radius: 10px;
  margin: 5px auto 20px auto;
  display: block;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body-blog .container-blog {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: block;
}

.body-blog .title {
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
}

.body-blog .container-blog .content {
  width: 100%;
  background: #F0ECE4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body-blog .container-blog .search {
  margin: 0px 0px 10px 20px;
  padding-top: 20px;
  width: 80%;
}

.body-blog .container-blog .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.body-blog .container-blog .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.body-blog .container-blog .search button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.body-blog .container-blog .content .grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}

.body-blog .container-blog .content .grid .item {
  border-radius: 10px;
  background: white;
  width: 593px;
  height: 180px;
  margin: 10px 0px 10px 15px;
  display: flex;
}

.body-blog .container-blog .content .grid .item:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  background: grey;
  opacity: 0.9;
}

.body-blog .container-blog .content .grid .item .post-image {
  height: 180px;
  width: 180px;
  border-radius: 10px;
  object-fit: cover;
}

.body-blog .container-blog .content .grid .info {
  height: 120px;
  padding: 5px;
}

.body-blog .container-blog .content .grid .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.body-blog .container-blog .content .grid .info label {
  margin-left: 5px;
}

.body-blog .container-blog .content .grid .info .post-title {
  color: #9D6B54;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.body-blog .container-blog .content .grid .info .post-content {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.body-blog .container-blog .content .grid .action{
  position: absolute;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-left: 270px;
  margin-top: 60px;
  background: #9D6B54;
  color: white;
  display: none;
  font-weight: bold;
  font-size: 16px;
}

.body-blog .container-blog .content .grid .action:hover{
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body-blog .container-blog .content .grid .item:hover .action{
  display: block;
}

.body-blog .container-blog .content .paging {
  margin-top: 10px;
  padding-bottom: 10px;
}

.body-blog .container-blog .content .paging .page {
  width: 17%;
  margin-right: auto;
  margin-left: auto;
}
</style>