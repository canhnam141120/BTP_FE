<template>
  <div>
    <div class="GetBooks">
      <h1>Danh sách sách</h1>
      <button v-on:click="getBooksAll">Tất cả</button>
      <button v-on:click="getBooksApproved">Đã duyệt</button>
      <button v-on:click="getBooksDenied">Bị hủy</button>
      <button v-on:click="getBooksWaiting">Đang đợi</button>
      <br><br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã sách</td>
          <td>Người đăng</td>
          <td>Tên sách</td>
          <td>Ảnh</td>
          <td>Giá bìa</td>
          <td>Giá cọc</td>
          <td>Ngày đăng</td>
          <td>Trạng thái</td>
          <td>Đánh giá</td>
          <td></td>
        </tr>
        <tr v-for="item of listBooks" :key="item.id">
          <td><router-link :to="{ name: 'DetailBook', query: { id:item.id }}"><button>Chi tiết</button> </router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.title}}</td>
          <td><img v-bind:src="item.image" height="90px" width="65px"></td>
          <td>{{item.coverPrice}}</td>
          <td>{{item.depositPrice}}</td>
          <td>{{item.postedDate}}</td>
          <td>{{item.status}}</td>
          <td><router-link :to="{ name: 'GetFeedbacks', query: { id:item.id }}"><button>Xem</button> </router-link></td>
          <td v-if="item.status == 'Waiting'">
            <button v-on:click="HandleApproved(item.id)">Duyệt</button>
            <button v-on:click="HandleDenied(item.id)">Hủy</button>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BOOK} from "@/constant/constant-api";

export default {
  name: "GetBooks",
  data() {
    return {
      listBooks: ''
    }
  },
  created() {
    this.getBooksAll()
  },
  methods: {
    getBooksAll() {
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    getBooksApproved() {
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_APPROVED, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    getBooksDenied() {
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_DENIED, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
      }).catch(() => {
      });
    },
    getBooksWaiting() {
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
  }
}
</script>
