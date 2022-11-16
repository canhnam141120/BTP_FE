<template>
  <SideBar>
  <div>
    <div class="GetCategories">
      <h1>Danh sách thể loại</h1>
      <button><router-link to="/ManageCategory/create">Thêm</router-link></button><br><br>
      <table border="1px">
        <tr>
          <td>Mã thể loại</td>
          <td>Tên thể loại</td>
          <td></td>
        </tr>
        <tr v-for="item of listCategories" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td><button v-on:click="HandleDelete(item.id)">Xóa</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_CATEGORY} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "GetCategories",
  components: {SideBar},
  data() {
    return {
      listCategories: ''
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      apiFactory.callApi(API_MANAGE_CATEGORY.LIST_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      const url = API_MANAGE_CATEGORY.DELETE_CATEGORY + id
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          alert('Xóa thành công!')
          this.$router.go();
        }
        console.log(res)
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    }
  }
}
</script>
