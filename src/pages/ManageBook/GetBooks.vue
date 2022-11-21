<template>
  <div class="GetExchanges">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách sách</h3>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksAll">Tất cả</button>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksApproved">Đã duyệt</button>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksDenied">Đã hủy</button>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksWaiting">Đang đợi</button>
          <br>
          <div class="search-book">
            <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
            <button v-on:click="HandleSearch">Tìm</button>
          </div>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã sách</td>
                <td>Người đăng</td>
                <td>Tên sách</td>
                <td>Ảnh</td>
                <td>Giá bìa</td>
                <td>Giá cọc</td>
                <td>Ngày đăng</td>
                <td>Trạng thái</td>
                <td>Duyệt/Hủy</td>
                <td>Chi tiết</td>
                <td>Đánh giá</td>
              </tr>
              </thead>
              <tbody v-for="item of listBooks" :key="item.id">
              <tr>
                <td>
                  <div class="table-data__info">
                    <h6>{{ item.id }}</h6>
                  </div>
                </td>
                <td>{{ item.user.fullname }}</td>
                <td>{{ item.title }}</td>
                <td><img v-bind:src="item.image" height="90px" width="65px"></td>
                <td>{{ item.coverPrice }}</td>
                <td>{{ item.depositPrice }}</td>
                <td>{{ item.postedDate }}</td>
                <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td v-if="item.status == 'Waiting'">
                  <button style="display: block" class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleApproved(item.id)">Duyệt</button>
                  <button style="width: 84px" class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDenied(item.id)">Hủy</button>
                </td>
                <td v-if="item.status == 'Approved'">
                  <button style="width: 84px" class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDenied(item.id)">Huỷ</button>
                </td>
                <td v-if="item.status == 'Denied'">
                  <button  class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleApproved(item.id)">Duyệt</button>
                </td>
                <td><router-link class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router"  :to="{ name: 'DetailBook', query: { id:item.id }}">Chi tiết</router-link></td>
                <td><router-link class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router"  :to="{ name: 'GetFeedbacks', query: { id:item.id }}">Xem đánh giá</router-link></td>
              </tr>
              </tbody>
            </table>
            <div class="paging-book">
              <b-pagination class="page-number" @input="getBooksAll" v-model="page" :total-rows="totalBook" :per-page="9">
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
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BOOK} from "@/constant/constant-api";

export default {
  name: "GetBooks",
  data() {
    return {
      listBooks: '',
      isSearch: false,
      search: '',
      totalBook: ''
    }
  },
  created() {
    this.isSearch = false
    this.getBooksAll(1)
  },
  methods: {
    getBooksApproved() {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_APPROVED, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    getBooksDenied() {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_DENIED, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    getBooksWaiting() {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_WAITING, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    HandleApproved(id) {
      const url = API_MANAGE_BOOK.APPROVED_BOOK + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Duyệt không thành công!')
      });
    },
    HandleDenied(id) {
      const url = API_MANAGE_BOOK.DENIED_BOOK + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Hủy không thành công!')
      });
    },
    getBooksAll(pageNumber) {
      if (this.isSearch) {
        window.scrollTo(0, 0)
        const url = API_MANAGE_BOOK.SEARCH_BOOK + pageNumber
        apiFactory.callApi(url, 'POST', {
          search: this.search
        }).then((res) => {
          this.listBooks = res.data.data
          this.totalBook = res.data.numberOfRecords
        }).catch(() => {
        });
      } else {
        window.scrollTo(0, 0)
        const url = API_MANAGE_BOOK.LIST_BOOK + pageNumber
        apiFactory.callApi(url, 'GET', {}).then((res) => {
          this.listBooks = res.data.data
          this.totalBook = res.data.numberOfRecords
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
      return this.getBooksAll(1)
    },
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";

.paging-book {
  margin-top: 10px;
}

.paging-book ul {
  margin-right: auto;
  margin-left: auto;
  width: 30%;
}

.search-book {
  margin: 20px 0px 10px 20px;
  width: 80%;
}

.search-book input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-book button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-book button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

</style>
