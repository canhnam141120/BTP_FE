<template>
  <Side_Bar>
    <div class="GetRentBills">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách bài đăng
            </h3>
            &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getPostsAll">Tất cả</button>
            &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getPostsApproved">Đã duyệt</button>
            &nbsp;&nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getPostsDenied">Đã hủy</button>
            &nbsp;&nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="getPostsWaiting">Đang đợi</button>
            <br><br>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Mã bài dăng</td>
                  <td>Người đăng</td>
                  <td>Tiêu đề</td>
                  <td>Thời gian đăng</td>
                  <td>Trạng thái</td>
                  <td>Duyệt/Hủy</td>
                  <td>Bình luận</td>
                </tr>
                </thead>
                <tbody v-for="item of listPosts" :key="item.id">
                <tr>
                  <td><router-link :to="{ name: 'DetailPost', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Chi tiết</router-link>
                  </td>
                  <td>
                    <div class="table-data__info">
                      <h6>{{ item.id }}</h6>
                    </div>
                  </td>
                  <td>{{ item.user.fullname }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.createdDate}}</td>
                  <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                  <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.status == 'Waiting'">
                    <button style="display: block" class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleApproved(item.id)">Duyệt</button>
                    <button style="width: 84px" class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDenied(item.id)">Hủy</button>
                  </td>
                  <td v-else></td>
<!--                  <td v-if="item.status == 'Approved'">
                    <button style="width: 84px" class="au-btn au-btn-icon au-btn&#45;&#45;brown au-btn&#45;&#45;small" v-on:click="HandleDenied(item.id)">Huỷ</button>
                  </td>
                  <td v-if="item.status == 'Denied'">
                    <button  class="au-btn au-btn-icon au-btn&#45;&#45;brown au-btn&#45;&#45;small" v-on:click="HandleApproved(item.id)">Duyệt</button>
                  </td>-->
                  <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small">Xem</button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
  <!--  <SideBar>-->
  <!--  <div>-->
  <!--    <div class="GetPosts">-->
  <!--      <h1>Danh sách bài đăng</h1>-->
  <!--      <button v-on:click="getPostsAll">Tất cả</button>-->
  <!--      <button v-on:click="getPostsApproved">Đã duyệt</button>-->
  <!--      <button v-on:click="getPostsDenied">Bị hủy</button>-->
  <!--      <button v-on:click="getPostsWaiting">Đang đợi</button>-->
  <!--      <br><br>-->
  <!--      <table border="1px">-->
  <!--        <tr>-->
  <!--          <td></td>-->
  <!--          <td>Mã bài dăng</td>-->
  <!--          <td>Người đăng</td>-->
  <!--          <td>Tiêu đề</td>-->
  <!--          <td>Thời gian đăng</td>-->
  <!--          <td>Trạng thái</td>-->
  <!--          <td>Bình luận</td>-->
  <!--          <td></td>-->
  <!--        </tr>-->
  <!--        <tr v-for="item of listPosts" :key="item.id">-->
  <!--          <td><router-link :to="{ name: 'DetailPost', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>-->
  <!--          <td>{{item.id}}</td>-->
  <!--          <td>{{item.user.fullname}}</td>-->
  <!--          <td>{{item.title}}</td>-->
  <!--          <td>{{item.createdDate}}</td>-->
  <!--          <td>{{item.status}}</td>-->
  <!--          <td><router-link :to="{ name: 'GetComments', query: { id:item.id }}"><button>Xem</button></router-link></td>-->
  <!--          <td v-if="item.status == 'Waiting'">-->
  <!--            <button v-on:click="HandleApproved(item.id)">Duyệt</button>-->
  <!--            <button v-on:click="HandleDenied(item.id)">Hủy</button>-->
  <!--          </td>-->
  <!--        </tr>-->
  <!--      </table>-->
  <!--    </div>-->
  <!--    <br>-->
  <!--    <button><router-link to="/ManageIndex">Quay lại</router-link></button>-->
  <!--  </div>-->
  <!--  </SideBar>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "GetPosts",
  components: {Side_Bar},
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
          this.$router.go();
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

<style>
@import "../../assets/CSS/tableManage.css";
</style>