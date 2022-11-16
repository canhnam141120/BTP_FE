<template>
  <SideBar>
  <div>
    <div class="MyPosts">
      <h1>Danh sách bài đăng của tôi</h1>
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
          <td>{{item.userId}}</td>
          <td>{{item.title}}</td>
          <td>{{item.createdDate}}</td>
          <td>{{item.status}}</td>
          <td><router-link :to="{ name: 'GetComments', query: { id:item.id }}"><button>Xem</button></router-link></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/PersonalIndex">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_PERSONAL} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "MyPosts",
  components: {SideBar},
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
      apiFactory.callApi(API_PERSONAL.LIST_POST, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsApproved() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_APPROVED, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsDenied() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_DENIED, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    },
    getPostsWaiting() {
      apiFactory.callApi(API_PERSONAL.LIST_POST_WAITING, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.listPosts = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

