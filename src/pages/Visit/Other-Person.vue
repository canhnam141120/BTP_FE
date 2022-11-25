<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
          <div class="profile">
            <div>
              <b-avatar badge badge-left class="avatar-personal"><img style="width: 190px; height: 190px;" v-bind:src="info.avatar"></b-avatar>
            </div>
            <div class="infor">
              <p class="name-other-person">{{ info.fullname }}</p>
              <div>
                <div class="description">
                  <Icon icon="mdi:email"/>
                  <span>{{ info.email }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:call"/>
                  <span>{{ info.phone }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:location-on"/>
                  <span>{{ info.addressMain }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:location-on"/>
                  <span>{{ info.likeNumber }} người thích</span><br>
                </div>
              </div>
            </div>
            <div class="edit">
              <button class="btn-edit">
                <Icon icon="ant-design:like-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                Thích
              </button>
            </div>
          </div>
          <div class="content-bottom">
            <b-card card class="background-tab">
              <b-tabs>
                <b-tab title="Tủ sách" active>
                  <div class="search">
                    <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearch">Tìm</button>
                  </div>
                  <b-skeleton-wrapper :loading="loading">
                    <template #loading>
                      <div class="grid-bookOP" >
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
                    <div class="grid-bookOP">
                      <div class="item-bookOP" v-for="item of listBook" :key="item.id">
                        <router-link  :to="{ name: 'BookDetail', query: { id:item.id }}">
                          <img v-bind:src="item.image">
                        </router-link>
                        <div class="infoOP">
                          <div class="book-titleOP">{{ item.title }}</div>
                          <label class="book-statusOP">Thể loại: {{ item.category.name}}</label>
                          <label class="book-statusOP">Giá bìa: <strong>{{ item.coverPrice.toLocaleString() }}đ</strong></label>
                          <label class="book-statusOP">{{ item.statusBook }}</label>
                        </div>
                      </div>
                    </div>
                  </b-skeleton-wrapper>
                  <div class="pagingBook">
                    <b-pagination class="page-number" @input="getBooks" v-model="page" :total-rows="totalBook" :per-page="10">
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
                    <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearch">Tìm</button>
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
                    <div class="gridPost">
                      <div class="itemPost" v-for="item of listPost" :key="item.id">
                        <router-link  :to="{ name: 'PostDetail', query: { id:item.id }}">
                          <img class="imagePost" v-bind:src="item.image">
                        </router-link>
                        <button class="actionPost">Xem chi tiết</button>
                        <div class="infoPost">
                          <div class="titlePost">{{ item.title }}</div>
                          <div class="createDate"><Icon class="iconTime" icon="ic:twotone-access-time"/>{{item.createdDate | formatDate}}</div>
                          <label class="contentPost">{{ item.content }}</label>
                        </div>
                      </div>
                    </div>
                  </b-skeleton-wrapper>
                  <div class="pagingPost">
                    <div class="pagePost">
                      <b-pagination @input="getPost" v-model="page" :total-rows="totalPost" :per-page="6">
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

export default {
  name: "Other-Person",
  components: {Layout, Icon},
  data() {
    return {
      info: '',
      userId: '',
      listBook: '',
      totalBook: '',
      listPost: '',
      totalPost: '',
      loading: false
    }
  },
  created() {
    this.getInformation()
    this.getBooks(1)
    this.getPost(1)
    this.isSearch = false
  },
  methods: {
    getInformation() {
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
        userId: this.$route.query.id
      }).then((res) => {
        this.info = res.data.data
      }).catch(() => {
      });
    },
    getBooks(pageNumber) {
      this.loading = true;
      const url = API_BOOK.USER_BOOK + this.$route.query.id + '?page=' + pageNumber
      apiFactory.callApi(url, 'GET', {
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false
      }).catch(() => {
      });
    },
    getPost(pageNumber) {
      this.loading = true;
      const url = API_POST.USER_POST + this.$route.query.id + '?page=' + pageNumber
      apiFactory.callApi(url, 'GET', {
      }).then((res) => {
        this.listPost = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.loading = false
      }).catch(() => {
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.getBooks(1)
    },
  },
  filters: {
    formatDate(value){
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

.body {
  background: #F0F0F0;
}

.body .container {
  max-width: 1230px;
  background: #F0F0F0;
  border-radius: 10px;
  margin-top: 20px;
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
  color: #9D6B54;
  margin-left: 3%;
  margin-top: 5%;
}

.infor h3 {
  color: #9D6B54;
  font-weight: bold;
}

.infor span {
  color: grey;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.name-other-person {
  font-size: 30px;
  font-weight: 700;
  line-height: 35.16px;
}

.description {
  display: flex;
  margin-left: 10px;
}

.description span {
  margin-left: 14px;
}

.edit {
  margin-top: 13%;
  margin-left: 15%;
  justify-content: center;

}

.btn-edit {
  height: 48px;
  width: 187px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
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
  border: none;
  color: black;
}

.grid-bookOP {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 1206px;
}

.item-bookOP {
  border-radius: 10px;
  width: 210px;
  height: 380px;
  margin: 5px;
}

.item-bookOP:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-bookOP img{
  border-radius: 10px;
  height: 260px;
  width: 210px;
}

.grid-bookOP .infoOP {
  height: 120px;
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
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: auto;
  height: 180px;
  margin: 10px 0px 10px 10px;
  display: flex;
}

.gridPost .itemPost:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  background: grey;
  opacity: 0.9;
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

.gridPost .actionPost{
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

.gridPost .actionPost:hover{
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.pagingPost {
  margin-top: 10px;
  padding-bottom: 10px;
}

.gridPost .actionPost{
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

.gridPost .actionPost:hover{
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.gridPost .itemPost:hover .actionPost{
  display: block;
}

</style>