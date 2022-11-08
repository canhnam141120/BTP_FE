<template>
  <div>
    <div class="GetPosts">
      <h1>Danh sách bài đăng</h1>
      <button v-on:click="getPostsAll">Tất cả</button>
      <button v-on:click="getPostsApproved">Đã duyệt</button>
      <button v-on:click="getPostsDenied">Bị hủy</button>
      <button v-on:click="getPostsWaiting">Đang đợi</button>
      <br><br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã bài dăng</td>
          <td>Người đăng</td>
          <td>Tiêu đề</td>
          <td>Thời gian đăng</td>
          <td>Trạng thái</td>
          <td>Bình luận</td>
          <td></td>
        </tr>
        <tr v-for="item of listPosts" :key="item.id">
          <td><router-link :to="{ name: 'DetailPost', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.title}}</td>
          <td>{{item.createdDate}}</td>
          <td>{{item.status}}</td>
          <td><router-link :to="{ name: 'GetComments', query: { id:item.id }}"><button>Xem</button></router-link></td>
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
import {API_MANAGE_POST} from "@/constant/constant-api";

export default {
  name: "GetPosts",
  data() {
    return {
      listPosts: ''
    }
  },
  created() {
    this.getPostsAll()
  },
  methods: {
    getPostsAll() {
      apiFactory.callApi(API_MANAGE_POST.LIST_POST, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsApproved() {
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_APPROVED, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsDenied() {
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_DENIED, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsWaiting() {
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_WAITING, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    HandleApproved(id) {
      const url = API_MANAGE_POST.APPROVED_POST + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.push({name:"GetPosts"}).catch(()=>{});
        }
        console.log(res)
      }).catch(() => {
        alert('Duyệt không thành công!')
      });
    },
    HandleDenied(id) {
      const url = API_MANAGE_POST.DENIED_POST + id
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.$router.push({name:"GetPosts"}).catch(()=>{});
        }
        console.log(res)
      }).catch(() => {
        alert('Hủy không thành công!')
      });
    },
  }
}
</script>
