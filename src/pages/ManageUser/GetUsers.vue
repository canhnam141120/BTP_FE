<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách người dùng</h3>
            <div class="filters m-b-45">
              <br>
              <input class="au-input au-input--xl" type="text"
                     placeholder="Nhập email hoặc số điện thoại" v-model="search" required/>
              <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleSearch">
                Tìm kiếm
              </button>
              <br><br>
              &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getUsersAll">Tất cả</button>
              &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getUsersActive">Đang hoạt động</button>
              &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getUsersBan">Đang khóa</button>
            </div>
            <div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
<!--                    <td>Mã người dùng</td>-->
                    <td>Email</td>
                    <td>Đã xác thực</td>
                    <td>Tên đầy đủ</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Số người thích</td>
                    <td>Số lần giao dịch</td>
                    <td>Kích hoạt/Khóa</td>
                    <td>Ủy quyền</td>
                  </tr>
                  </thead>

                  <tbody v-for="item of listUsers" :key="item.id">
                  <tr>
<!--                    <td>-->
<!--                      <div class="table-data__info">-->
<!--                        <h6>{{ item.id }}</h6>-->
<!--                      </div>-->
<!--                    </td>-->
                    <td>{{ item.email }}</td>
                    <td>{{ item.isVerify }}</td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td>{{ item.likeNumber }}</td>
                    <td>{{ item.numberOfTransaction }}</td>
                    <td >
                      <button v-if="item.isActive" class="au-btn au-btn-icon au-btn--brown au-btn--small" style="width: 76px;" v-on:click="HandleBan(item.id)">Khóa</button>
                      <button v-else class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleActive(item.id)">Kích hoạt</button>
                    </td>
                    <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleAuthority(item.id)">Uỷ quyền</button></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <LoadingDialog v-show="spinner"></LoadingDialog>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_USER} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "GetUsers",
  components: {Side_Bar, LoadingDialog},
  data() {
    return {
      listUsers: '',
      search: '',
      spinner: false,
    }
  },
  created() {
    this.getUsersAll()
  },
  methods: {
    getUsersAll() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.LIST_USER, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    getUsersBan() {
      apiFactory.callApi(API_MANAGE_USER.LIST_BAN_USER, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
      }).catch(() => {
      });
    },
    getUsersActive() {
      apiFactory.callApi(API_MANAGE_USER.LIST_ACTIVE_USER, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
      }).catch(() => {
      });
    },
    HandleBan(id) {
      const url = API_MANAGE_USER.BAN_USER + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Khóa tài khoản không thành công!')
      });
    },
    HandleActive(id) {
      const url = API_MANAGE_USER.ACTIVE_USER + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Kích hoạt tài khoản không thành công!')
      });
    },
    HandleAuthority(id) {
      const url = API_MANAGE_USER.AUTHORITY_USER + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Ủy quyền không thành công!')
      });
    },
    HandleSearch() {
      apiFactory.callApi(API_MANAGE_USER.SEARCH_USER, 'POST', {
        search: this.search
      }).then((res) => {
        this.listUsers = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>