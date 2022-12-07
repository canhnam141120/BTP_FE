<template>
  <Layout>
    <main style="flex-grow: 1">
      <LoadingDialog v-show="spinner" style="z-index: 999"></LoadingDialog>
      <div class="body">
        <div class="container">
          <div class="profile">
            <div>
              <b-avatar badge badge-left class="avatar-personal"><img style="width: 190px; height: 190px;"
                                                                      v-bind:src="info.avatar"></b-avatar>
            </div>
            <div>
              <div class="infor">
                <p class="name-other-person">{{ info.fullname }}</p>
                <div class="infoDes">
                  <div class="description">
                    <Icon class="iconSmall" icon="mdi:email"/>
                    <label style="font-weight: 600">{{ info.email }}</label>
                  </div>
                  <div class="description">
                    <Icon class="iconSmall" icon="material-symbols:call"/>
                    <label style="font-weight: 600">{{ info.phone }}</label>
                  </div>
                  <div class="description">
                    <Icon class="iconSmall" icon="material-symbols:location-on"/>
                    <label style="font-weight: 600">{{ info.addressMain }}</label>
                  </div>
                </div>
              </div>
              <div class="edit">
                <button v-if="userByToken != '' && !checkLike" class="btn-edit" v-on:click="HandleLike">
                  <Icon icon="ant-design:like-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                  Thích
                </button>
                <button v-if="userByToken != '' && checkLike" class="btn-edit" v-on:click="HandleUnLike">
                  <Icon icon="ant-design:dislike-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                  Bỏ Thích
                </button>
                <div class="likeNumber">
                  <Icon class="iconSmall" icon="mdi:like"/>
                  <label style="font-weight: 600">{{ info.likeNumber }} người thích</label>
                </div>
              </div>
            </div>
          </div>
          <div class="content-bottom">
            <b-card card class="background-tab">
              <b-tabs>
                <b-tab title="Tủ sách" active>
                  <div class="search">
                    <input type="text" v-model="searchBook" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearchBook">Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="grid-bookOP">
                        <div class="item-bookOP" v-for='i in 10' :key="i">
                          <b-card no-body img-top style="height: 380px">
                            <b-skeleton-img card-img="top" aspect="3:1" height="250px"></b-skeleton-img>
                            <b-card style="height: 130px">
                              <b-skeleton animation="wave" width="85%"></b-skeleton>
                              <b-skeleton animation="wave" width="55%"></b-skeleton>
                              <b-skeleton animation="wave" width="70%"></b-skeleton>
                            </b-card>
                          </b-card>
                        </div>
                      </div>
                    </template>
                    <div v-if="totalBook != 0" class="grid-bookOP">
                      <div class="item-bookOP" v-for="item of listBook" :key="item.id">
                        <router-link style="position: relative" :to="{ name: 'BookDetail', query: { id:item.id }}">
                          <img v-bind:src="item.image">
                          <label class="layer1OP" v-if="item.isTrade">Đang giao dịch</label>
                          <label class="layer2OP"  v-else>Sẵn sàng</label>
                        </router-link>
                        <div class="infoOP">
                          <div class="book-titleOP"><strong>{{ item.title }}</strong></div>
                          <label class="book-statusOP">Thể loại: <strong>{{ item.category?.name }}</strong></label>
                          <label class="book-statusOP">Giá cọc: <strong>{{ item.depositPrice.toLocaleString() }}đ</strong></label>
                          <label class="book-statusOP">{{ item.statusBook }}</label>
                        </div>
                      </div>
                    </div>
                    <div v-else class="noBook">Danh sách trống!</div>
                  </b-skeleton-wrapper>
                  <div v-if="totalBook != 0" class="pagingBook">
                    <b-pagination class="page-number" @input="getBooks" v-model="pageBook" :total-rows="totalBook"
                                  :per-page="10">
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
                <b-tab title="Bài đăng">
                  <div class="search">
                    <input type="text" v-model="searchPost" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearchPost">Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="gridPost">
                        <div class="itemPost" v-for='i in 6' :key="i">
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
                    <div v-if="totalPost != 0" class="gridPost">
                      <div class="itemPost" v-for="item of listPost" :key="item.id">
                        <router-link :to="{ name: 'PostDetail', query: { id:item.id }}">
                          <img class="imagePost" v-bind:src="item.image">
                        </router-link>
                        <button class="actionPost">Xem chi tiết</button>
                        <div class="infoPost">
                          <div class="titlePost"><strong>{{ item.title }}</strong></div>
                          <div class="contentPost">Đăng lúc: <strong>{{ item.createdDate | formatDate }}</strong></div>
                          <label class="contentPost">{{ item.content }}</label>
                        </div>
                      </div>
                    </div>
                    <div v-else class="noBook">Danh sách trống!</div>
                  </b-skeleton-wrapper>
                  <div v-if="totalPost != 0" class="pagingPost">
                    <div class="pagePost">
                      <b-pagination @input="getPost" v-model="pagePost" :total-rows="totalPost" :per-page="6">
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
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import {Icon} from '@iconify/vue2';
import {API_PERSONAL, API_BOOK, API_POST} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "OtherPerson",
  components: {Layout, Icon, LoadingDialog},
  data() {
    return {
      userByToken: '',
      info: '',
      listBook: '',
      totalBook: '',
      listPost: '',
      totalPost: '',
      loading: false,
      searchBook: '',
      isSearchBook: false,
      searchPost: '',
      isSearchPost: false,
      pageBook: 1,
      pagePost: 1,
      spinner: false,
      checkLike: false
    }
  },
  created() {
    if (this.$cookies.get('token')) {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8')
    }
    this.getInformation()
    this.getBooks(1)
    this.getPost(1)
  },
  methods: {
    getInformation() {
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
        userId: this.$route.query.id
      }).then((res) => {
        if (res.data.data) {
          this.info = res.data.data
          if (this.$cookies.get('token')) {
            this.CheckLike()
          }
        } else {
          this.$router.push({name: "404Page"})
        }
      }).catch(() => {
      });
    },
    getBooks(pageNumber) {
      this.loading = true;
      if (this.isSearchBook) {
        apiFactory.callApi(API_BOOK.SEARCH_BOOK_USER + this.$route.query.id + '?page=' + pageNumber, 'POST', {
          search: this.searchBook
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.pageBook = pageNumber
          this.loading = false
        }).catch(() => {
        });
      } else {
        apiFactory.callApi(API_BOOK.USER_BOOK + this.$route.query.id + '?page=' + pageNumber, 'GET', {}).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.pageBook = pageNumber
          this.loading = false
        }).catch(() => {
        });
      }
    },
    getPost(pageNumber) {
      this.loading = true;
      if (this.isSearchPost) {
        apiFactory.callApi(API_POST.SEARCH_POST_USER + this.$route.query.id + '?page=' + pageNumber, 'POST', {
          search: this.searchPost
        }).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.pagePost = pageNumber
          this.loading = false
        }).catch(() => {
        });
      } else {
        apiFactory.callApi(API_POST.USER_POST + this.$route.query.id + '?page=' + pageNumber, 'GET', {}).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.pagePost = pageNumber
          this.loading = false
        }).catch(() => {
        });
      }
    },
    HandleSearchBook() {
      if (!this.searchBook) {
        this.isSearchBook = false;
      } else {
        this.isSearchBook = true;
      }
      return this.getBooks(1)
    },
    HandleSearchPost() {
      if (!this.searchPost) {
        this.isSearchPost = false;
      } else {
        this.isSearchPost = true;
      }
      return this.getPost(1)
    },
    HandleLike() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.ADD_USER_FAVORITE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'ADD_SUCCESS') {
          this.getInformation()
          this.checkLike = true
        }
      }).catch(() => {
      });
    },
    HandleUnLike() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_USER_FAVORITE + this.$route.query.id, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'DELETE_SUCCESS') {
          this.getInformation()
          this.checkLike = false
        }
      }).catch(() => {
      });
    },
    CheckLike(){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.CHECK_USER_LIKE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'TRUE') {
          this.checkLike = true
        }else{
          this.checkLike = false
        }
      }).catch(() => {
      });
    }
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleString('en-GB')
    }
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

strong {
  color: #9D6B54;
  font-weight: 600;
}

.body {
  background: #F0F0F0;
}

.body .container {
  max-width: 1230px;
  background: #F0F0F0;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

strong {
  color: #9D6B54;
}

.profile {
  max-width: 1230px;
  border-radius: 10px;
  border: 1px solid #9D6B54;;
  display: flex;
  margin-bottom: 10px;
  background: #F0ECE4;
  padding-bottom: 30px;
}

.content-bottom {
  max-width: 1230px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  display: flex;
  background: #F0ECE4;
}

.avatar-personal {
  border: 2px outset #9D6B54;
  background-color: #6C757D;
  width: 186px;
  height: 186px;
  margin-top: 29px;
  margin-left: 100px;
}

.infor {
  width: 1000px;
  display: block;
  color: #9D6B54;
  margin-top: 5%;
  margin-left: 20px;
}

.infor label {
  color: grey;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-left: 10px;
}

.name-other-person {
  text-transform: uppercase;
  font-size: 30px;
  margin-left: 10px;
  font-weight: 700;
  line-height: 35.16px;
}

.infoDes {
  width: 75%;
  justify-content: space-between;
  display: flex;
}

.description {
  display: flex;
  margin-left: 10px;
}

.iconSmall {
  font-size: 24px;
}

.description span {
  margin-left: 14px;
}

.edit {
  margin-left: 20px;
  margin-top: 10px;
  justify-content: center;
}

.likeNumber {
  display: flex;
  margin-left: 10px;
  color: #9D6B54;
}

.likeNumber label {
  font-weight: bold;
  color: grey;
  margin-left: 5px;
}

.btn-edit {
  height: 48px;
  margin-left: 10px;
  width: 170px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  background: #9D6B54;
  justify-content: center;
  color: #F0ECE4;
  font-size: 16px;
  margin-bottom: 11px;
  font-weight: 700;
}

.btn-edit:hover {
  background: #F0ECE4;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

.body .container .search {
  margin: 20px 0px 10px 20px;
  display: flex;
  justify-content: right;
}

.body .container .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.body .container .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: #F0ECE4;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.body .container .search button:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.background-tab {
  background-color: #EFECE3;
  width: 100%;
  border-radius: 10px;
  border: none;
  color: black;
}

.grid-bookOP {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 1206px;
}

.item-bookOP {
  color: #9D6B54;
  border-radius: 10px;
  width: 210px;
  height: auto;
  margin: 5px;
}

.item-bookOP:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.layer2OP{
  position: absolute;
  left: 0;
  background-color: green;
  font-size: 12px;
  color: #F0ECE4;
  padding: 5px;
}

.layer1OP{
  position: absolute;
  left: 0;
  font-size: 12px;
  background-color: #ca0303;
  color: #F0ECE4;
  padding: 5px;
}

.item-bookOP img {
  border-radius: 10px;
  height: 260px;
  width: 210px;
}

.grid-bookOP .infoOP {
  height: auto;
  padding: 5px;
}

.grid-bookOP .infoOP img {
  width: 20px;
  height: 20px;
  margin-left: 0px;
}

.grid-bookOP .infoOP label {
  margin-left: 5px;
}

.grid-bookOP .infoOP .book-titleOP {
  color: #9D6B54;
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.grid-bookOP .infoOP .book-statusOP {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.pagingBook {
  margin-top: 10px;
}

.gridPost {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}

.gridPost .itemPost {
  color: #9D6B54;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: auto;
  height: 180px;
  margin: 10px 0px 10px 10px;
  display: flex;
}

.gridPost .itemPost:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  border: 1px solid #9D6B54;
}

.gridPost .itemPost .imagePost {
  height: 180px;
  width: 180px;
  border-radius: 10px;
  object-fit: cover;
}

.gridPost .infoPost {
  height: 120px;
  padding: 5px;
}

.gridPost .infoPost img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.gridPost .infoPost label {
  margin-left: 5px;
}

.gridPost .infoPost .titlePost {
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

.gridPost .infoPost .contentPost {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.gridPost .actionPost {
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

.gridPost .actionPost:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.pagingPost {
  margin-top: 10px;
  padding-bottom: 10px;
}

.gridPost .actionPost {
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

/*.gridPost .actionPost:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.gridPost .itemPost:hover .actionPost {
  display: block;
}*/

.noBook{
  text-align: center;
  padding-top: 50px;
  color: grey;
  font-style: italic;
  font-size: 26px;
  padding-bottom: 30px;
}
</style>