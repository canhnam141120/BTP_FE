<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="myPost">
        <LoadingDialog v-show="spinner"></LoadingDialog>
        <div class="containerMP">
          <div class="left-contentMP">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMP">
            <div class="titleMP">Bài viết của tôi</div>
            <div class="searchMP">
              <input class="inputMP" type="text" v-model="search" placeholder="Nhập tiêu đề">
              <button class="btnMP">Tìm</button>
              <select class="selectCss" v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
              </select>
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
                    <label class="post-content">Ngày đăng: <strong>{{ item.createdDate | formatDate}}</strong></label>
                    <label v-if="item.status == 'Approved'" class="post-content">Trạng thái: <strong>Đã được duyệt</strong></label>
                    <label v-if="item.status == 'Denied'" class="post-content">Trạng thái: <strong>Đã bị hủy</strong></label>
                    <label v-if="item.status == 'Waiting'" class="post-content">Trạng thái: <strong>Đang đợi duyệt</strong></label>
                    <label class="post-content">{{ item.content }}</label>
                  </div>
                  <div class="gr-btn">
                    <button class="item-btn">Sửa</button>
                    <div v-if="item.status == 'Approved'">
                      <button v-if="!item.isHide" class="item-btn" v-on:click="HandleHide(item.id)">Ẩn</button>
                      <button v-else class="item-btn" v-on:click="HandleShow(item.id)">Hiện</button>
                    </div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
              <div class="page">
                <b-pagination v-if="filter==''" @input="getMyPosts" v-model="page" :total-rows="totalPost" :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Tất Cả'" @input="getMyPosts" v-model="page" :total-rows="totalPost" :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đã Duyệt'" @input="getMyPostsApproved" v-model="page" :total-rows="totalPost" :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đã Hủy'" @input="getMyPostsDenied" v-model="page" :total-rows="totalPost" :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đang Đợi'"  @input="getMyPostsWaiting" v-model="page" :total-rows="totalPost" :per-page="5">
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
import {API_POST, API_PERSONAL} from "@/constant/constant-api";
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "MyPosts",
  components: {SideBar_Personal, Layout, LoadingDialog},
  data() {
    return {
      loading: false,
      listPosts: '',
      totalPost: '',
      userId: '',
      listFilter: ['Tất Cả', 'Đã Duyệt', 'Đã Hủy', 'Đang Đợi'],
      filter: 'Tất Cả',
      page: 1,
      search: '',
      isSearch: false,
      spinner: false
    }
  },
  created() {
    this.getMyPosts(1)
  },
  methods: {
    onchange(e) {
      this.isSearch = false
      this.search = ''
      if (e.target.value === 'Tất Cả') {
        this.getMyPosts(1)
      }
      if (e.target.value === 'Đã Duyệt') {
        this.getMyPostsApproved(1)
      }
      if (e.target.value === 'Đã Hủy') {
        this.getMyPostsDenied(1)
      }
      if (e.target.value === 'Đang Đợi') {
        this.getMyPostsWaiting(1)
      }
    },
    getMyPosts(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      if(this.isSearch){
        apiFactory.callApi(API_PERSONAL.LIST_POST + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId,
          search: this.search
        }).then((res) => {
          this.listPosts = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.page = pageNumber
          this.loading = false;
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_PERSONAL.LIST_POST + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId
        }).then((res) => {
          this.listPosts = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      }
    },
    getMyPostsApproved(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_APPROVED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyPostsDenied(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_DENIED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyPostsWaiting(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_WAITING + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    HandleHide(postId){
      this.spinner = true
      apiFactory.callApi(API_POST.HIDE_POST + postId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getMyPosts(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getMyPosts(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getMyPostsApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getPostsDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getMyPostsWaiting(this.page)
          }
          this.spinner = false
        }
      }).catch(() => {
        alert('Ẩn không thành công!')
      });

    },
    HandleShow(postId){
      this.spinner = true
      apiFactory.callApi(API_POST.SHOW_POST + postId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getMyPosts(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getMyPosts(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getMyPostsApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getPostsDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getMyPostsWaiting(this.page)
          }
          this.spinner = false
        }
      }).catch(() => {
        alert('Ẩn không thành công!')
      });

    }
  },
  filters: {
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

.right-contentMP .titleMP{
  text-transform: uppercase;
  color: #9D6B54;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
}

.left-contentMP {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMP{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  border: 1px solid #9D6B54;
  display: block;
}

.right-contentMP .searchMP {
  margin: 10px 0px 10px 20px;
  width: 95%;
  display: flex;
  justify-content: right;
}

.right-contentMP .searchMP .inputMP {
  border-radius: 7px;
  border: 1px solid grey;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.right-contentMP .searchMP .btnMP {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 40px;
  width: 80px;
  margin-left: 10px;
}

.right-contentMP .searchMP .btnMP:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.right-contentMP .grid {
  display: inline-grid;
  grid-template-columns: 1fr;
}

.right-contentMP .grid .item {
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: 840px;
  height: auto;
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
  object-fit: scale-down;
}

.right-contentMP .grid .info {
  height: auto;
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
  background-color: #F0ECE4;
  color: #9D6B54;
}

.right-contentMP .paging {
  margin-top: 10px;
}

.right-contentMP .paging ul {
  justify-content: right;
  margin-right: 15px;
}

.selectCss {
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
  padding-left: 10px;
  padding-right: 20px;
  margin-left: 20px;
  height: 40px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}
</style>

