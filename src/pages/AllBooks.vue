<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">TỦ SÁCH</div>
        <div class="container-book">
          <div class="menu-sidebarPS">
            <div class="filter">
              <div class="filter-service">
                <div class="titleFT">BỘ LỌC</div>
                <div class="itemFilter">
                  <div class="titleFilter">Theo dịch vụ</div>
                  <div class="groupFilter">
                    <div><input name="type" type="radio" value="All" checked v-model="filter1" @change="HandleFilter">
                      Tất cả
                    </div>
                    <div><input name="type" type="radio" value="Exchange" v-model="filter1" @change="HandleFilter"> Trao
                      đổi
                    </div>
                    <div><input name="type" type="radio" value="Rent" v-model="filter1" @change="HandleFilter"> Thuê
                    </div>
                  </div>
                  <hr>
                  <div class="titleFilter">Theo danh mục</div>
                  <div class="groupFilter">
                    <div><input type="radio" name="category" value="0" v-model="filter2" @change="HandleFilter"> Tất cả
                    </div>
                    <div v-for="item in listCategory" :key="item.id">
                      <div><input type="radio" name="category" v-bind:value="item.id" v-model="filter2"
                                  @change="HandleFilter"> {{ item.name }}
                      </div>
                    </div>
                  </div>
                  <hr>
                  <div class="titleFilter">Theo giá cọc</div>
                  <div class="groupFilter">
                    <div><input name="price" type="radio" value="All" v-model="filter3" @change="HandleFilter"> Tất cả
                    </div>
                    <div><input name="price" type="radio" value="0-100000" v-model="filter3" @change="HandleFilter"> 0đ
                      - 100,000đ
                    </div>
                    <div><input name="price" type="radio" value="100000-250000" v-model="filter3"
                                @change="HandleFilter"> 100,000đ - 250,000đ
                    </div>
                    <div><input name="price" type="radio" value="250000-500000" v-model="filter3"
                                @change="HandleFilter"> 250,000đ - 500,000đ
                    </div>
                    <div><input name="price" type="radio" value="500000-10000000" v-model="filter3"
                                @change="HandleFilter"> Trên 500,000đ
                    </div>
                  </div>

                  <div class="titleFilter">Theo ngôn ngữ</div>
                  <div class="groupFilter">
                    <div><input type="radio" name="language" value="All" v-model="filter4" @change="HandleFilter"> Tất
                      cả
                    </div>
                    <div v-for="item in listLanguage" :key="item">
                      <div><input type="radio" name="language" v-bind:value="item" v-model="filter4"
                                  @change="HandleFilter"> {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="search">
              <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
              <button v-on:click="HandleSearch">Tìm</button>
            </div>
            <hr>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid">
                  <div class="item" v-for='i in 9' :key="i">
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

              <div class="grid">
                <div class="item" v-for="item of listBook" :key="item.id">
                  <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="book-title"><strong>{{ item.title }}</strong></div>
                    <div class="book-status">Thể loại: <strong>{{ item.category.name }}</strong></div>
                    <div class="book-status">Đăng bởi: <strong>{{ item.user.fullname }}</strong></div>
                    <label class="book-status">Giá cọc: <strong>{{ item.depositPrice.toLocaleString() }}đ</strong></label>
                    <label class="book-status">Dịch vụ:
                      <strong>
                        <span v-if="item.isExchange && item.isRent">Trao đổi & Thuê</span>
                        <span v-if="!item.isRent && item.isExchange">Trao đổi</span>
                        <span v-if="item.isRent && !item.isExchange">Thuê</span>
                      </strong>
                    </label>
                    <label class="book-status">{{ item.statusBook }}</label>
                    <label class="book-status" style="color: red; font-weight: bold" v-if="item.isTrade">Đang giao
                      dịch</label>
                    <label class="book-status" style="color: green; font-weight: bold" v-else>Sẵn sàng</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
              <b-pagination v-if="isSearch && !fromUser" class="page-number" @input="searchBook" v-model="page" :total-rows="totalBook"
                            :per-page="9">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="!isSearch && !fromUser" class="page-number" @input="getAllBookByFilter" v-model="page" :total-rows="totalBook"
                            :per-page="9">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="fromUser" class="page-number" @input="getAllBookFromLikeUser" v-model="page" :total-rows="totalBook"
                            :per-page="9">
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
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_MANAGE_CATEGORY} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "AllBooks",
  components: {Layout},
  data() {
    return {
      filter1: 'All',
      filter2: 0,
      filter3: 'All',
      filter4: 'All',

      userByToken: '',
      listCategory: '',
      listLanguage: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Hán', 'Tiếng Hàn', 'Tiếng Nhật',
        'Tiếng Tây Ban Nha', 'Tiếng Pháp', 'Tiếng Đức', 'Tiếng Nga', 'Tiếng Bồ Đào Nha',
        'Tiếng Hindi', 'Khác'],

      listBook: '',
      totalBook: '',
      search: '',
      isSearch: false,
      loading: false,
      fromUser: false,
      page: 1
    }
  },
  created() {
    this.isSearch = false
    this.HandleFilter(1)
    this.getListCategories()
  },
  methods: {
    searchBook(pageNumber) {
        this.loading = true;
        const url = API_BOOK.SEARCH_BOOK + pageNumber
        apiFactory.callApi(url, 'POST', {
          search: this.search
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.loading = false
          this.page = pageNumber
        }).catch(() => {
        });
    },
    /*getAllBookExchange(pageNumber) {
      this.loading = true;
      window.scrollTo(0, 0)
      const url = API_BOOK.LIST_BOOK_EXCHANGE + '?page=' + pageNumber
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getAllBookRent(pageNumber) {
      this.loading = true;
      window.scrollTo(0, 0)
      const url = API_BOOK.LIST_BOOK_RENT + '?page=' + pageNumber
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false
        this.page = pageNumber
      }).catch(() => {
      });

    },*/
    getAllBookFromLikeUser(pageNumber) {
      this.fromUser = true
      this.loading = true
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      window.scrollTo(0, 0)
      const url = API_BOOK.LIST_BOOK_FOLLOW + '?page=' + pageNumber
      apiFactory.callApi(url, 'POST', {userId: this.userByToken.UserId,}).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false
        this.page = pageNumber
      }).catch(() => {
      });
    },

    getAllBookByFilter(pageNumber) {
      this.loading = true;
      window.scrollTo(0, 0)
      const url = API_BOOK.FILTER_BOOK + '?page=' + pageNumber
      apiFactory.callApi(url, 'POST', {
        filter1: this.filter1, filter2: this.filter2, filter3: this.filter3, filter4: this.filter4
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false
        this.page = pageNumber
      }).catch(() => {
      });
    },
    HandleFilter() {
      this.fromUser = false
      this.search = ''
      this.getAllBookByFilter(1)
    },

    HandleSearch() {
      this.fromUser = false
      if (!this.search) {
        this.filter1 = 'All'
        this.filter2 = 0
        this.filter3 = 'All'
        this.filter4 = 'All'
        this.isSearch = false
        return this.getAllBookByFilter(1)
      } else {
        this.isSearch = true;
        return this.searchBook(1)
      }
    },
    getListCategories() {
      apiFactory.callApi(API_MANAGE_CATEGORY.All_CATEGORY, 'GET', {}).then((res) => {
        this.listCategory = res.data.data
      }).catch(() => {
      });
    }
  },
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
  font-weight: 600;
}

.body {
  background: #F0F0F0;
}

.body .container-book {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.body .title {
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
}


.titleFT {
  font-weight: bold;
  color: #9D6B54;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
}

.menu-sidebarPS {
  width: 320px;
  height: auto;
  background: #F0ECE4;
  /*background: #F0ECE4;*/
  border-radius: 8px;
  padding-bottom: 50px;
}

.itemFilter {
  margin-top: 20px;
  margin-left: 40px;
}

.titleFilter {
  font-size: 20px;
  font-weight: 600;
  color: #9D6B54;
}

.groupFilter {
  color: #9d6b54;
  padding-top: 5px;
  padding-left: 30px;
  padding-bottom: 5px;
}

.body .container-book .content {
  width: 73%;
  background: #F0ECE4;
  border-radius: 10px;
  border: 1px solid #9D6B54;
}

.body .container-book .search {
  text-align: right;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.body .container-book .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.body .container-book .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: #F0ECE4;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.body .container-book .search button:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.body .container-book .content .grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.body .container-book .content .grid .item {
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: 260px;
  height: auto;
  margin: 10px 0px 10px 20px;
}

.body .container-book .content .grid .item:hover {
  box-shadow: 0px 4px 6px 0 rgba(0, 0, 0, 0.2)
}

.body .container-book .content .grid .item img {
  margin-left: 20px;
  height: 290px;
  width: 220px;
}

.body .container-book .content .grid .info {
  color: #9d6b54;
  height: auto;
  padding: 5px;
}

.body .container-book .content .grid .info img {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.body .container-book .content .grid .info label {
  margin-left: 15px;
}

.body .container-book .content .grid .info .book-title {
  margin-left: 15px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #9D6B54;
}

.body .container-book .content .grid .info .book-status {
  margin-left: 15px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.body .container-book .content .grid .actionAB {
  margin-bottom: 10px;
  margin-top: 5px;
}

.activeAll {
  border-radius: 5px;
  background-color: #9D6B54;
  color: #F0ECE4;
  border: 1px solid grey;
  padding: 5px;
  width: 80px;
  margin-left: 40px;
  text-decoration: none;
  text-align: center;
}

.activeAllR {
  border-radius: 5px;
  background-color: #9D6B54;
  color: #F0ECE4;
  border: 1px solid grey;
  padding: 5px 15px 5px 15px;
  margin-left: 35px;
  text-decoration: none;
  text-align: center;
}

.activeAll:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.activeAllR:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.disableAll {
  border-radius: 5px;
  background-color: grey;
  color: #F0ECE4;
  border: 1px solid grey;
  padding: 5px;
  width: 80px;
  margin-left: 35px;
  cursor: not-allowed;
  text-align: center;
  text-decoration: none;
}

.disableAllR {
  border-radius: 5px;
  background-color: grey;
  color: #F0ECE4;
  border: 1px solid grey;
  padding: 5px 15px 5px 15px;
  margin-left: 40px;
  cursor: not-allowed;
  text-align: center;
  text-decoration: none;
}

.disableAllR:hover {
  color: #F0ECE4;
}

.body .container-book .content .paging {
  margin-top: 10px;
}

.body .container-book .content .paging ul {
  justify-content: right;
  padding-right: 15px;
}

</style>