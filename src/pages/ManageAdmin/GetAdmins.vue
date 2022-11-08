<template>
  <div>
    <div class="GetAdmins">
      <h1>Danh sách quản trị viên</h1>
      <p><input type="text" placeholder="Nhập email hoặc số điện thoại" v-model="search" required>
        <button v-on:click="HandleSearch">Tìm kiếm</button>
      </p>
      <br>
      <table border="1px">
        <tr>
          <td>Mã quản trị viên</td>
          <td>Email</td>
          <td>Đã xác thực</td>
          <td>Tên đầy đủ</td>
          <td>Số điện thoại</td>
          <td>Địa chỉ</td>
          <td>Trạng thái hoạt động</td>
          <td></td>
        </tr>
        <tr v-for="item of listAdmins" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.email}}</td>
          <td>{{item.isVerify}}</td>
          <td>{{item.fullname}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.addressMain}}</td>
          <td>{{item.isActive}}</td>
          <td><button v-on:click="HandleAuthority(item.id)">Hủy Quyền</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button><br><br>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_ADMIN} from "@/constant/constant-api";

export default {
  name: "GetAdmins",
  data() {
    return {
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
          this.$router.push({name:"GetAdmins"}).catch(()=>{});
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
}
</script>
