<template>
  <div>
    <div class="GetExchanges">
      <h1>Danh sách tất cả giao dịch đổi</h1>
      <button><router-link to="/ManageTransaction/rent">Xem giao dịch thuê</router-link></button>
      <br><br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã giao dịch</td>
          <td>Mã khách hàng 1</td>
          <td>Tên khách hàng 1</td>
          <td>Mã khách hàng 2</td>
          <td>Tên khách hàng 2</td>
          <td>Ngày tạo</td>
          <td>Trạng thái</td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="item of listExchanges" :key="item.id">
          <td><router-link :to="{ name: 'DetailExchange', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.userId1}}</td>
          <td>{{item.userId1Navigation.fullname}}</td>
          <td>{{item.userId2}}</td>
          <td>{{item.userId2Navigation.fullname}}</td>
          <td>{{item.date}}</td>
          <td>{{item.status}}</td>
          <td><router-link :to="{ name: 'ExchangeBill', query: { id:item.id }}"><button>Hóa đơn</button></router-link></td>
          <td><button>Hủy</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button><br><br>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";

export default {
  name: "GetExchanges",
  data() {
    return {
      listExchanges: ''
    }
  },
  created() {
    this.getExchanges()
  },
  methods: {
    getExchanges() {
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_EXCHANGE, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>
