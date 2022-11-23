<template>
  <Side_Bar>
    <div class="ml">
      <!-- USER DATA-->
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách quản trị viên</h3>
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
                    <td>Mã quản trị viên</td>
                    <td>Email</td>
                    <td>Đã xác thực</td>
                    <td>Tên đầy đủ</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Trạng thái hoạt động</td>
                  </tr>
                  </thead>
                  <tbody v-for="item of listAdmins" :key="item.id">
                  <tr>
                    <td>
                      <div class="table-data__info">
                        <h6>{{ item.id }}</h6>
                      </div>
                    </td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.isVerify }}</td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td>{{ item.isActive }}</td>
                    <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleAuthority(item.id)">Huỷ quyền</button></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br>
            <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
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
import {API_MANAGE_ADMIN} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "ManageIndex",
  components: {Side_Bar},
  data() {
    return {
      sortBy: 'name',
      sortDesc: false,
      fields: [
        {key: 'id', sortable: true},
        {key: 'email', sortable: true},
        {key: 'isVerify', sortable: false},
        {key: 'fullname', sortable: true},
        {key: 'phone', sortable: false},
        {key: 'addressMain', sortable: false},
        {key: 'isActive', label: 'active'},
        {key: 'delete', label: 'delete'},
      ],
      listAdmins: '',
      search: ''
    }
  },
  created() {
    this.getAdmins()
  },
  methods: {
    getAdmins() {
      apiFactory.callApi(API_MANAGE_ADMIN.LIST_ADMIN, 'GET', {}).then((res) => {
        this.listAdmins = res.data.data
      }).catch(() => {
      });
    },
    HandleAuthority(id) {
      const url = API_MANAGE_ADMIN.REMOVE_ADMIN + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          window.location.reload();
        }
      }).catch(() => {
        alert('Hủy quyền không thành công!')
      });
    },
    HandleSearch() {
      apiFactory.callApi(API_MANAGE_ADMIN.SEARCH_ADMIN, 'POST', {
        search: this.search
      }).then((res) => {
        this.listAdmins = res.data.data
      }).catch(() => {
      });
    }
  }
};
</script>

<style>
@import "../../assets/CSS/tableManage.css";
</style>