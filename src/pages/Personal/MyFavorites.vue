<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="myFVR">
        <b-alert style="position: absolute; right: 0; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <b-alert style="position: absolute; right: 0; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <div class="containerMF">
          <div class="left-contentMF">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMF">
            <div class="titleMT">DANH SÁCH YÊU THÍCH</div><hr>
            <b-card card class="background-tab">
              <b-tabs  active-nav-item-class="font-weight-bold"
                       active-tab-class="font-weight-bold"
                       content-class="mt-3">
                <b-tab title="Sách" active>
                  <div class="search">
                    <input type="text" v-model="searchBook" placeholder="Nhập tiêu đề sách">
                    <button>Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="gridMB">
                        <div class="itemMB" v-for='i in 6' :key="i">
                          <b-card no-body img-top style="height: 450px">
                            <b-skeleton-img card-img="top" aspect="3:1" height="290px"></b-skeleton-img>
                            <b-card style="height: 170px">
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
                    <div v-if="totalBook != 0" class="gridMB">
                      <div class="itemMB" v-for="item of listBook" :key="item.id">
                        <router-link class="active" :to="{ name: 'BookDetail', query: { id:item.bookId }}">
                          <img v-bind:src="item.book.image">
                        </router-link>
                        <button class="dislikeBook" v-on:click="HandleUnlikeBook(item.bookId)"><Icon icon="ant-design:dislike-filled"/></button>
                        <div class="infoMB">
                          <div class="book-titleMB"><strong>{{ item.book.title }}</strong></div>
                          <div class="book-statusMB">Người đăng: <strong>{{ item.book.user.fullname }}</strong></div>
                          <div class="book-statusMB">Thể loại: <strong>{{ item.book.category.name }}</strong></div>
                          <label class="book-statusMB">Giá bìa: <strong>{{
                              item.book.coverPrice.toLocaleString()
                            }}đ</strong></label>
                          <label class="book-statusMB">{{ item.book.statusBook }}</label>
                          <label v-if="item.status == 'Approved'" class="book-statusMB">Trạng thái: <strong style="color: green">Đã được
                            duyệt</strong></label>
                          <label v-if="item.status == 'Denied'" class="book-statusMB">Trạng thái: <strong  style="color: red">Đã bị
                            hủy</strong></label>
                          <label v-if="item.status == 'Waiting'" class="book-statusMB">Trạng thái: <strong>Đang đợi
                            duyệt</strong></label>
                          <label class="book-statusMB" style="color: red; font-weight: bold" v-if="item.isTrade">Đang giao dịch</label>
                          <label class="book-statusMB" style="color: green; font-weight: bold" v-else>Sẵn sàng</label>
                        </div>
                      </div>
                    </div>
                    <div v-else class="noBook">Danh sách trống!</div>
                  </b-skeleton-wrapper>
                  <div v-if="totalBook != 0"  class="pagingMB">
                    <b-pagination class="page-numberMB" @input="getBookFavorite" v-model="pageBook"
                                  :total-rows="totalBook"
                                  :per-page="6">
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
                </b-tab>
                <b-tab title="Bài Đăng">
                  <div class="search">
                    <input type="text" v-model="searchPost" placeholder="Nhập tiêu đề bài đăng">
                    <button>Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="gridPostLike">
                        <div class="itemPostLike" v-for='i in 5' :key="i">
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
                    <div v-if="totalPost != 0" class="gridPostLike">
                      <div class="itemPostLike" v-for="item of listPost" :key="item.id">
                        <router-link  :to="{ name: 'PostDetail', query: { id:item.postId }}">
                          <img class="post-image" v-bind:src="item.post.image">
                        </router-link>
                        <div class="info">
                          <div class="post-title">{{ item.post.title }}</div>
                          <label class="post-content">Tác giả: <strong>{{ item.post.user.fullname}}</strong></label>
                          <label class="post-content">Ngày đăng: <strong>{{ item.post.createdDate | formatDate}}</strong></label>
                          <label v-if="item.status == 'Approved'" class="post-content">Trạng thái: <strong>Đã được duyệt</strong></label>
                          <label v-if="item.status == 'Denied'" class="post-content">Trạng thái: <strong>Đã bị hủy</strong></label>
                          <label v-if="item.status == 'Waiting'" class="post-content">Trạng thái: <strong>Đang đợi duyệt</strong></label>
                          <label class="post-content">{{ item.post.content }}</label>
                        </div>
                        <div class="gr-btn">
                          <button class="item-btn" v-on:click="HandleUnlikePost(item.postId)"><Icon icon="ant-design:dislike-filled"/></button>
                        </div>
                      </div>
                    </div>
                    <div v-else class="noBook">Danh sách trống!</div>
                  </b-skeleton-wrapper>
                  <div v-if="totalPost != 0" class="pagingMB">
                    <b-pagination class="page-numberMB" @input="getPostFavorite" v-model="pagePost"
                                  :total-rows="totalPost"
                                  :per-page="5">
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
                </b-tab>
                <b-tab title="Người Dùng">
                  <div class="search">
                    <input type="text" v-model="searchUser" placeholder="Nhập tên hoặc SĐT">
                    <button>Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="gridUser">
                        <div class="itemUser" v-for='i in 8' :key="i">
                          <b-card no-body img-top style="height: 250px">
                            <b-skeleton type="avatar" height="140px" width="140px" style="margin-left: 20px"></b-skeleton>
                            <b-card style="height: 110px">
                              <b-skeleton animation="wave" width="85%"></b-skeleton>
                              <b-skeleton animation="wave" width="55%"></b-skeleton>
                              <b-skeleton animation="wave" width="70%"></b-skeleton>
                            </b-card>
                          </b-card>
                        </div>
                      </div>
                    </template>
                    <div v-if="totalUser != 0"  class="gridUser">
                      <div class="itemUser" v-for="item of listUser" :key="item.id">
                        <router-link class="active" :to="{ name: 'OtherPerson', query: { id:item.favoriteUserId}}">
                          <img v-bind:src="item.favoriteUser.avatar">
                        </router-link>
                        <div class="itemUserInfo">
                          <div class="username"><strong>{{item.favoriteUser.fullname}}</strong></div>
                          <div class="username">{{ item.favoriteUser.likeNumber }} người thích</div>
                          <div class="username">{{ item.favoriteUser.numberOfTransaction}} lần giao dịch</div>
                          <button class="dislikeUser" v-on:click="HandleUnlikeUser(item.favoriteUserId)"><Icon icon="ant-design:dislike-filled"/></button>
                        </div>
                      </div>
                    </div>
                    <div v-else class="noBook">Danh sách trống!</div>
                  </b-skeleton-wrapper>
                  <div v-if="totalUser != 0" class="pagingMB">
                    <b-pagination class="page-numberMB" @input="getUserFavorite" v-model="pageUser"
                                  :total-rows="totalUser"
                                  :per-page="8">
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
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import apiFactory from "@/config/apiFactory";
import {API_PERSONAL} from "@/constant/constant-api";
import VueJwtDecode from "vue-jwt-decode";
import {Icon} from '@iconify/vue2';

export default {
  name: "MyFavorites",
  components: {SideBar_Personal, Layout, Icon},
  data(){
    return{
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,

      loading: false,
      searchBook: '',
      isSearchBook: false,
      pageBook: 1,
      listBook: '',
      totalBook: '',
      searchPost: '',
      isSearchPost: false,
      pagePost: 1,
      listPost: '',
      totalPost: '',
      searchUser: '',
      isSearchUser: false,
      pageUser: 1,
      listUser: '',
      totalUser: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getBookFavorite(1)
    this.getPostFavorite(1)
    this.getUserFavorite(1)
  },
  methods: {
    getBookFavorite(pageNumber){
      this.loading = true;
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_BOOK_FAVORITE + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.pageBook = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    getPostFavorite(pageNumber){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_FAVORITE + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPost = res.data.data
        this.totalPost  = res.data.numberOfRecords
        this.pagePost = pageNumber
      }).catch(() => {
      });
    },
    getUserFavorite(pageNumber){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_USER_FAVORITE + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listUser = res.data.data
        this.totalUser = res.data.numberOfRecords
        this.pageUser = pageNumber
      }).catch(() => {
      });
    },
    HandleUnlikeBook(bookId){
      window.scroll(0,0)
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_BOOK_FAVORITE + bookId, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if(res.data.message == 'DELETE_SUCCESS'){
          this.getBookFavorite(this.pageBook)
          this.responseFlag = true
          this.responseMessage = 'Hủy yêu thích sách - Thành công'
          this.dismissCountDown = this.dismissSecs
        }
      }).catch(() => {
      });
    },
    HandleUnlikePost(postId){
      window.scroll(0,0)
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_POST_FAVORITE + postId, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if(res.data.message == 'DELETE_SUCCESS'){
          this.getPostFavorite(this.pagePost)
          this.responseFlag = true
          this.responseMessage = 'Hủy yêu thích bài đăng - Thành công'
          this.dismissCountDown = this.dismissSecs
        }
      }).catch(() => {
      });
    },
    HandleUnlikeUser(userId){
      window.scroll(0,0)
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_USER_FAVORITE + userId, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if(res.data.message == 'DELETE_SUCCESS'){
          this.getUserFavorite(this.pageUser)
          this.responseFlag = true
          this.responseMessage = 'Hủy yêu thích người dùng - Thành công'
          this.dismissCountDown = this.dismissSecs
        }
      }).catch(() => {
      });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
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

.myFVR {
  background: #F0F0F0;
}

.myFVR .containerMF {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMF {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMF{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
  display: block;
}

.right-contentMF .titleMT {
  color: #9D6B54;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  padding-top: 20px;
}

.background-tab {
  background-color: #F0ECE4;
  border: none;
  color: #9D6B54;
}

 .search {
  margin: 0px 0px 10px 20px;
  display: flex;
  justify-content: right;
}

 .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: #F0ECE4;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

 .search button:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

 .gridMB {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
}

 .gridMB .itemMB {
  position: relative;
  border-radius: 10px;
  width: 260px;
  height: auto;
  margin: 10px 0px 10px 20px;
  border: 1px solid #9D6B54;
}

.gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

 .gridMB .itemMB img {
  margin-left: 20px;
  height: 290px;
  width: 220px;
}

 .gridMB .infoMB {
  height: auto;
  padding: 5px;
  margin-bottom: 10px;
}

 .gridMB .infoMB label {
  margin-left: 15px;
}

.gridMB .infoMB .book-titleMB {
  color: #9D6B54;
  margin-left: 15px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

 .gridMB .infoMB .book-statusMB {
  margin-left: 15px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

 .pagingMB {
  margin-top: 10px;
}

 .pagingMB ul {
  justify-content: right;
  margin-right: 15px;
}

 .gridPostLike {
  display: inline-grid;
  grid-template-columns: 1fr;
}

 .gridPostLike .itemPostLike {
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: 840px;
  height: auto;
  margin: 10px 0px 10px 0px;
  display: flex;
}

.gridPostLike .itemPostLike:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.gridPostLike .itemPostLike .post-image {
  height: 140px;
  width: 140px;
  border-radius: 10px;
  object-fit: scale-down;
}

 .gridPostLike .info {
  height: auto;
  padding: 5px;
}

 .gridPostLike .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

 .gridPostLike .info label {
  margin-left: 5px;
}

 .gridPostLike .info .post-title {
  color: #9D6B54;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

 .gridPostLike .info .post-content {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

 .gridPostLike .gr-btn{
  display: block;
  padding-top: 10px;
  padding-right: 10px;
}

 .gridPostLike .gr-btn .item-btn{
  border-radius: 5px;
  background-color: #9D6B54;
  border: 1px solid;
  color: white;
  height: 30px;
  width: 30px;
  margin-left: 34px;
   padding-bottom: 3px;
   padding-left: 6px;
}

.gridPostLike .gr-btn .item-btn:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}



.gridUser {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.gridUser .itemUser {
  border-radius: 10px;
  width: 185px;
  height: auto;
  margin: 10px 0px 10px 20px;
  border: 1px solid #9D6B54;
  /*padding-top: 10px;*/
  text-align: center;
}

.gridUser .itemUser:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.gridUser .itemUser img {
  margin-top: 10px;
  height: 140px;
  width: 140px;
  border-radius: 70px;
  border: 2px outset #9D6B54;
}

.gridUser .itemUserInfo {
  text-align: center;
  height: auto;
  padding: 5px;
}

.gridUser .itemUserInfo .username {
  color: #9D6B54;
}

.dislikeUser{
  margin-top: 5px;
  border-radius: 5px;
  background-color: #9D6B54;
  border: 1px solid;
  color: white;
  height: 30px;
  width: 30px;
}

.dislikeUser:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.dislikeBook{
  position: absolute;
  right: 18px;
  border-radius: 5px;
  background-color: #9D6B54;
  border: 1px solid #9D6B54;
  color: white;
  height: 30px;
  width: 30px;
}

.dislikeBook:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.noBook{
  text-align: center;
  padding-top: 50px;
  color: grey;
  font-style: italic;
  font-size: 26px;
}
</style>