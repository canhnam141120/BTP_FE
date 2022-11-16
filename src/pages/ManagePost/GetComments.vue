<template>
  <SideBar>
  <div>
    <div class="GetComments">
      <h1>Danh sách bình luận</h1>
      <table border="1px">
        <tr>
          <td>Mã đánh giá</td>
          <td>Mã sách</td>
          <td>Người đánh giá</td>
          <td>Nội dung</td>
          <td>Ngày đánh giá</td>
          <td></td>
        </tr>
        <tr v-for="item of listComments" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.postId}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.content}}</td>
          <td>{{item.createdDate}}</td>
          <td><button v-on:click="HandleDelete(item.id)">Xóa</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManagePost">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "GetComments",
  components: {SideBar},
  data() {
    return {
      listComments: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      const url = API_MANAGE_POST.COMMENT_OF_POST + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listComments = res.data.data
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      const url = API_MANAGE_POST.DELETE_COMMENT + id
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          this.$router.push({name:"GetComments"}).catch(()=>{});
        }
        console.log(res)
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    }
  }
}
</script>
