<template>
<Side_Bar>
  <div class="GetExchanges">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả giao dịch đổi</h3>
          &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksAll">
          <router-link to="/ManageTransaction/rent" class="btn-router">Tất cả</router-link>
        </button>
          &nbsp;&nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksApproved">
          <router-link to="/ManageTransaction/rent" class="btn-router">Đã duyệt</router-link>
        </button>
          &nbsp;&nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksDenied">
          <router-link to="/ManageTransaction/rent" class="btn-router">Bị huỷ</router-link>
        </button>
          &nbsp;&nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getBooksWaiting">
          <router-link to="/ManageTransaction/rent" class="btn-router">Đang đợi</router-link>
        </button>
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
                <td>Đánh giá</td>
              </tr>
              </thead>
              <tbody v-for="item of listExchanges" :key="item.id">
              <tr>
                <td>
                  <div class="table-data__info">
                    <h6>{{ item.id }}</h6>
                  </div>
                </td>

                <td>
                  <span>{{ item.user.fullname }}</span>
                </td>
                <td>
                              <span>
                                  <i>{{ item.title }}</i>
                              </span>
                </td>
                <td>
                  <img v-bind:src="item.image" height="90px" width="65px">
                </td>
                <td>
                  <span>{{ item.coverPrice }}</span>
                </td>
                <td>
                              <span>
                                  {{ item.date }}
                              </span>
                </td>
                <td>
                              <span class="role admin">
                                  <i>{{ item.status }}</i>
                              </span>
                </td>

                <td>
                    <span>
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small"
                              :to="{ name: 'DetailExchange', query: { id:item.id }}">
                        Chi tiết
                      </button>
                    </span>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <br>
          &nbsp;<span>
            <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
              <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
            </button>
            </span>
          <br><br>
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
