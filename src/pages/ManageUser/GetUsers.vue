<template>
  <div>
    <div class="GetUsers">
      <h1>Danh sách người dùng</h1>
      <button v-on:click="getUsersAll">Tất cả</button>
      <button v-on:click="getUsersActive">Đang hoạt động</button>
      <button v-on:click="getUsersBan">Đang khóa</button>
      <br><br>
      <p><input type="text" placeholder="Nhập email hoặc số điện thoại" v-model="search" required>
        <button v-on:click="HandleSearch">Tìm kiếm</button>
      </p>
      <br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã người dùng</td>
          <td>Email</td>
          <td>Đã xác thực</td>
          <td>Tên đầy đủ</td>
          <td>Số điện thoại</td>
          <td>Địa chỉ</td>
          <td>Số người thích</td>
          <td>Số lần giao dịch</td>
          <td>Trạng thái hoạt động</td>
          <td>Kích hoạt/Khóa</td>
          <td></td>
        </tr>
        <tr v-for="item of listUsers" :key="item.id">
          <td><router-link :to="{ name: 'DetailUser', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.email}}</td>
          <td>{{item.isVerify}}</td>
          <td>{{item.fullname}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.addressMain}}</td>
          <td>{{item.likeNumber}}</td>
          <td>{{item.numberOfTransaction}}</td>
          <td>{{item.isActive}}</td>
          <td v-if="item.isActive"><button v-on:click="HandleBan(item.id)">Khóa</button></td>
          <td v-else><button v-on:click="HandleActive(item.id)">Kích hoạt</button></td>
          <td><button v-on:click="HandleAuthority(item.id)">Ủy quyền</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button><br><br>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_USER} from "@/constant/constant-api";

export default {
  name: "GetUsers",
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
          this.$router.push({name:"GetUsers"}).catch(()=>{});
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
          this.$router.push({name:"GetUsers"}).catch(()=>{});
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
          this.$router.push({name:"GetUsers"}).catch(()=>{});
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
