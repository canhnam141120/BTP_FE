<template>
  <SideBar>
  <div>
    <div class="GetFeedbacks">
      <h1>Danh sách đánh giá</h1>
      <table border="1px">
        <tr>
          <td>Mã đánh giá</td>
          <td>Mã sách</td>
          <td>Người đánh giá</td>
          <td>Nội dung</td>
          <td>Ngày đánh giá</td>
          <td></td>
        </tr>
        <tr v-for="item of listFeedbacks" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.bookId}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.content}}</td>
          <td>{{item.createdDate}}</td>
          <td><button v-on:click="HandleDelete(item.id)">Xóa</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageBook">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BOOK} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "GetFeedbacks",
  components: {SideBar},
  data() {
    return {
      listFeedbacks: ''
    }
  },
  created() {
    this.getFeedbacks()
  },
  methods: {
    getFeedbacks() {
      const url = API_MANAGE_BOOK.FEEDBACK_BOOK + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listFeedbacks = res.data.data
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      const url = API_MANAGE_BOOK.DELETE_FEEDBACK + id
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          this.$router.push({name:"GetFeedbacks"}).catch(()=>{});
        }
        console.log(res)
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    }
  }
}
</script>
