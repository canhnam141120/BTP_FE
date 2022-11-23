<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="myPost">
        <div class="containerMP">
          <div class="left-contentMP">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMP">
            <div class="search">
              <input class="input" type="text" v-model="search" placeholder="Nhập tên sản phẩm">
              <button class="btn">Tìm</button>
            </div>
            <hr>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid">
                  <div class="item" v-for='i in 5' :key="i">
                    <b-card no-body img-left style="height: 140px;">
                      <b-skeleton-img card-img="left" width="140px"></b-skeleton-img>
                      <b-card style="width: 850px; height: 140px">
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
                <div class="item" v-for="item of listPosts" :key="item.id">
                  <router-link  :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img class="post-image" v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="post-title">{{ item.title }}</div>
                    <label>Ngày đăng: <strong>{{ item.createdDate}}</strong></label>
                    <label class="post-content">{{ item.content }}</label>
                  </div>
                  <div class="gr-btn">
                    <button class="item-btn">Sửa</button>
                    <button class="item-btn">Xóa</button>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
              <div class="page">
                <b-pagination @input="getMyPosts" v-model="page" :total-rows="totalPost" :per-page="5">
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
import {API_PERSONAL} from "@/constant/constant-api";
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "MyPosts",
  components: {SideBar_Personal, Layout},
  data() {
    return {
      loading: false,
      listPosts: '',
      totalPost: '',
      userId: ''
    }
  },
  created() {
    this.getMyPosts(1)
  },
  methods: {
    getMyPosts(pageNumber) {
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.LIST_POST + pageNumber
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.loading = false;
      }).catch(() => {
      });
    },
    getPostsApproved() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_APPROVED, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsDenied() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_DENIED, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsWaiting() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_WAITING, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
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

strong {
  color: #9D6B54;
}

.myPost {
  background: #F0F0F0;
}

.myPost .containerMP {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMP {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}
.right-contentMP{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  display: block;
}

.right-contentMP .search {
  margin: 0px 0px 10px 20px;
  padding-top: 20px;
  width: 80%;
}

.right-contentMP .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.right-contentMP .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
  margin-bottom: 5px;
}

.right-contentMP .search button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.right-contentMP .grid {
  display: inline-grid;
  grid-template-columns: 1fr;
}

.right-contentMP .grid .item {
  border-radius: 10px;
  background: white;
  width: 840px;
  height: 140px;
  margin: 10px 0px 10px 15px;
  display: flex;
}

.right-contentMP .grid .item:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentMP .grid .item .post-image {
  height: 140px;
  width: 140px;
  border-radius: 10px;
  object-fit: cover;
}

.right-contentMP .grid .info {
  height: 120px;
  padding: 5px;
}

.right-contentMP .grid .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.right-contentMP .grid .info label {
  margin-left: 5px;
}

.right-contentMP .grid .info .post-title {
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

.right-contentMP .grid .info .post-content {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.right-contentMP .grid .gr-btn{
  display: block;
  padding-top: 30px;
  padding-right: 10px;
}

.right-contentMP .grid .gr-btn .item-btn{
  border-radius: 5px;
  background-color: #9D6B54;
  border: 1px solid;
  color: white;
  height: 30px;
  width: 60px;
  margin-left: 34px;
  margin-bottom: 20px;

}

.right-contentMP .grid .gr-btn .item-btn:hover{
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.right-contentMP .paging {
  margin-top: 10px;
}

.right-contentMP .paging ul {
  justify-content: right;
  margin-right: 15px;
}

</style>

