<template>
  <SideBar>
  <div>
    <div class="DetailExchange">
      <h1>Chi tiết giao dịch đổi</h1><br><br>

      <table border="1px">
        <tr>
          <td>Mã giao dịch</td>
          <td>Mã chi tiết giao dịch</td>
          <td>Mã sách 1</td>
          <td>TT sách 1 trước giao dịch</td>
          <td>TT sách 1 sau giao dịch</td>
          <td>TT lưu trữ sách 1</td>
          <td>Mã sách 2</td>
          <td>TT sách 2 trước giao dịch</td>
          <td>TT sách 2 sau giao dịch</td>
          <td>TT lưu trữ sách 2</td>
          <td>Thời gian tạo</td>
          <td>Ngày hết hạn</td>
          <td>Trạng thái</td>
        </tr>
        <tr v-for="item of exchange" :key="item.id">
          <td>{{item.exchangeId}}</td>
          <td>{{item.id}}</td>
          <td>{{item.book1Id}}</td>
          <td>{{item.beforeStatusBook1}}</td>
          <td>{{item.afterStatusBook1}}</td>
          <td>{{item.storageStatusBook1}}</td>
          <td>{{item.book2Id}}</td>
          <td>{{item.beforeStatusBook2}}</td>
          <td>{{item.afterStatusBook2}}</td>
          <td>{{item.storageStatusBook2}}</td>
          <td>{{item.requestTime}}</td>
          <td>{{item.expiredDate}}</td>
          <td>{{item.status}}</td>
          <td><button>Hủy</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageTransaction/exchange">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import SideBar from "../../components/SideBar";

export default {
  name: "DetailExchange",
  components: {SideBar},
  data() {
    return {
      exchange: ''
    }
  },
  created() {
    this.getExchangeById()
  },
  methods: {
    getExchangeById() {
      const url = API_MANAGE_TRANSACTION.DETAIL_EXCHANGE + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.exchange = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>