<template>
<Side_Bar>
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
          <br><br>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BOOK} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "GetBooks",
  components: {Side_Bar},
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

<style >
@import "../../assets/CSS/tableManage.css";
</style>
