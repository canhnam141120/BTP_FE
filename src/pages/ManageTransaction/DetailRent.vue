<template>
  <div>
    <div class="DetailRent">
      <h1>Chi tiết giao dịch thuê</h1><br>
    <table border="1px">
      <tr>
        <td>Mã giao dịch</td>
        <td>Mã chi tiết giao dịch</td>
        <td>Mã sách</td>
        <td>TT sách trước giao dịch</td>
        <td>TT sách sau giao dịch</td>
        <td>TT lưu trữ sách</td>
        <td>Thời gian tạo</td>
        <td>Ngày hết hạn</td>
        <td>Trạng thái</td>
      </tr>
      <tr v-for="item of rent" :key="item.id">
        <td>{{item.rentId}}</td>
        <td>{{item.id}}</td>
        <td>{{item.bookId}}</td>
        <td>{{item.beforeStatusBook}}</td>
        <td>{{item.afterStatusBook}}</td>
        <td>{{item.storageStatusBook}}</td>
        <td>{{item.requestTime}}</td>
        <td>{{item.expiredDate}}</td>
        <td>{{item.status}}</td>
        <td><button>Hủy</button></td>
      </tr>
    </table>
    </div>
    <br>
    <button><router-link to="/ManageTransaction/rent">Quay lại</router-link></button>
  </div>
</template>

<script>
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";

export default {
  name: "DetailRent",
  data() {
    return {
      rent: ''
    }
  },
  created() {
    this.getRentById()
  },
  methods: {
    getRentById() {
      const url = API_MANAGE_TRANSACTION.DETAIL_RENT + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.rent = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>

</style>