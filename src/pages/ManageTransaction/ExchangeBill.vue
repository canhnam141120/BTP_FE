<template>
  <div>
    <div class="ExchangeBill">
      <h1>Hóa đơn giao dịch đổi</h1><br><br>
      <br><br>
      <table border="1px">
        <tr>
          <td>Mã giao dịch</td>
          <td>Mã hóa đơn:</td>
          <td>Tên khách hàng</td>
          <td>Số cuốn sách</td>
          <td>Số tiền</td>
          <td>Phí đặt cọc</td>
          <td>Trạng thái thanh toán</td>
          <td>Ngày thanh toán</td>
          <td>Phương thức thanh toán</td>
        </tr>
        <tr v-for="item of exchangeBills" :key="item.id">
          <td>{{item.exchangeId}}</td>
          <td>{{item.id}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.totalBook}}</td>
          <td>{{item.totalAmount}}</td>
          <td>{{item.depositFee}}</td>
          <td>{{item.isPaid}}</td>
          <td>{{item.paidDate}}</td>
          <td>{{item.payments}}</td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageTransaction/exchange">Quay lại</router-link></button>
  </div>
</template>

<script>
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";

export default {
  name: "ExchangeBill",
  data() {
    return {
      exchangeBills: ''
    }
  },
  created() {
    this.getBillByExchange()
  },
  methods: {
    getBillByExchange() {
      const url = API_MANAGE_TRANSACTION.BILL_EXCHANGE + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.exchangeBills = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>

</style>