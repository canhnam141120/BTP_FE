<template>
  <Layout>
    <main style="flex-grow: 1;">
      <!--==============body=============-->
      <div class="body">
        <div class="title">TỦ SÁCH</div>
        <div class="container-book">
          <FilterAllBook></FilterAllBook>
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
                    <div class="book-title">{{ item.title }}</div>
                    <div><img src="../image/user.png"> {{ item.user.fullname }}</div>
                    <label>Giá bìa: <strong>{{ item.coverPrice.toLocaleString() }}đ</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                  </div>
                  <div class="action">
                    <button v-if="item.isExchange" class="active">Trao đổi</button>
                    <button v-else class="disable">Trao đổi</button>
                    <button v-if="item.isRent" class="active">Thuê</button>
                    <button v-else class="disable">Thuê</button>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
                <b-pagination class="page-number" @input="ChangePage" v-model="page" :total-rows="totalBook" :per-page="9">
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
import {API_BOOK} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import FilterAllBook from "../components/Filter-AllBook";

export default {
  name: "AllBooks",
  components: {FilterAllBook, Layout},
  data() {
    return {
      listBook: '',
      totalBook: '',
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
        const url = API_BOOK.SEARCH_BOOK + pageNumber
        apiFactory.callApi(url, 'POST', {
          search: this.search
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      } else {
        window.scrollTo(0, 0)
        const url = API_BOOK.LIST_BOOK + pageNumber
        apiFactory.callApi(url, 'GET', {}).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
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

.body .container-book .sidebar-book {
  width: 25%;
  height: 1000px;
  background: #F0ECE4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body .container-book .content {
  width: 73%;
  background: #F0ECE4;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body .container-book .search {
  margin: 20px 0px 10px 20px;
  width: 80%;
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
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.body .container-book .search button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.body .container-book .content .grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.body .container-book .content .grid .item {
  border-radius: 10px;
  background: white;
  width: 260px;
  height: 450px;
  margin: 10px 0px 10px 20px;
}

.body .container-book .content .grid .item:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body .container-book .content .grid .item img {
  margin-left: 20px;
  height: 290px;
  width: 220px;
}

.body .container-book .content .grid .info {
  height: 120px;
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

.body .container-book .content .grid .action {
  margin-bottom: 10px;
}

.body .container-book .content .grid .action .active {
  border-radius: 5px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 30px;
  width: 80px;
  margin-left: 34px;
}

.body .container-book .content .grid .action .active:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.body .container-book .content .grid .action .disable {
  border-radius: 5px;
  background-color: grey;
  color: white;
  border: 1px solid grey;
  height: 30px;
  width: 80px;
  margin-left: 32px;
  cursor: not-allowed;
}

.body .container-book .content .paging {
  margin-top: 10px;
}

.body .container-book .content .paging ul {
  margin-right: auto;
  margin-left: auto;
  width: 30%;
}

</style>