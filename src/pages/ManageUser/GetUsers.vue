<template>
  <Side_Bar>
    <div class="GetAdmins">
      <!-- USER DATA-->
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
                    <td>Trạng thái hoạt động</td>
                    <td>Kích hoạt/Khóa</td>
                  </tr>
                  </thead>

                  <tbody v-for="item of listUsers" :key="item.id">
                  <tr>
<!--                    <td>-->
<!--                      <div class="table-data__info">-->
<!--                        <h6>{{ item.id }}</h6>-->
<!--                      </div>-->
<!--                    </td>-->

                    <td>
                      <span>{{ item.email }}</span>
                    </td>
                    <td>
                      <span><i>{{ item.isVerify }}</i></span>
                    </td>
                    <td>
                      <span>{{ item.fullname }}</span>
                    </td>
                    <td>
                      <span class="role admin">{{ item.phone }}</span>
                    </td>
                    <td>
                      <span>{{ item.addressMain }}</span>
                    </td>
                    <td>
                      <span><i>{{ item.likeNumber }}</i></span>
                    </td>
                    <td>
                      <span><i>{{ item.numberOfTransaction }}</i></span>
                    </td>
                    <td>
                      <span><i>{{ item.isActive }}</i></span>
                    </td>
                    <td v-if="item.isActive">
                      <button v-on:click="HandleBan(item.id)">Khóa</button>
                    </td>
                    <td v-else>
                      <button v-on:click="HandleActive(item.id)">Kích hoạt</button>
                    </td>
                    <td>
                      <span>
                        <button class="au-btn au-btn-icon au-btn--brown au-btn--small"
                                v-on:click="HandleBan(item.id)">
                          Khóa
                        </button>
                      </span>
                    </td>
                    <td>
                      <span>
                        <button class="au-btn au-btn-icon au-btn--brown au-btn--small"
                                v-on:click="HandleActive(item.id)">
                          Kích hoạt
                        </button>
                      </span>
                    </td>
                    <td>
                      <span>
                        <button class="au-btn au-btn-icon au-btn--brown au-btn--small"
                                v-on:click="HandleAuthority(item.id)">
                          Uỷ quyền
                        </button>
                      </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br>
            <button class="au-btn au-btn-icon au-btn--green au-btn--small">
              <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
            </button>
            <br><br>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_USER} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
export default {
  name: "GetUsers",
  components: {Side_Bar},
  data() {
    return {
      listUsers: '',
      search: ''
    }
  },
  created() {
    this.getUsersAll()
  },
  methods: {
    getUsersAll() {
      apiFactory.callApi(API_MANAGE_USER.LIST_USER, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
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