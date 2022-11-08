<template>
  <div>
    <div class="GetRentBills">
      <h1>Danh sách tất cả hóa đơn thuê</h1>
      <button><router-link to="/ManageBill/exchange-bill">Xem hóa đơn đổi</router-link></button>
      <br><br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã hóa đơn:</td>
          <td>Mã giao dịch</td>
          <td>Tên khách hàng</td>
          <td>Số cuốn sách</td>
          <td>Số tiền</td>
          <td>Phí đặt cọc</td>
          <td>Phí thuê</td>
          <td>Trạng thái thanh toán</td>
          <td>Ngày thanh toán</td>
          <td>Phương thức thanh toán</td>
        </tr>
        <tr v-for="item of listBills" :key="item.id">
          <td><router-link :to="{ name: 'DetailRentBill', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.exchangeId}}</td>
          <td>{{item.user.fullname}}</td>
          <td>{{item.totalBook}}</td>
          <td>{{item.totalAmount}}</td>
          <td>{{item.depositFee}}</td>
          <td>{{item.rentFee}}</td>
          <td>{{item.isPaid}}</td>
          <td>{{item.paidDate}}</td>
          <td>{{item.payments}}</td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button><br><br>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BILL} from "@/constant/constant-api";

export default {
  name: "GetRentBills",
  data() {
    return {
      listBills: ''
    }
  },
  created() {
    this.getRentBills()
  },
  methods: {
    getRentBills() {
      apiFactory.callApi(API_MANAGE_BILL.LIST_BILL_RENT, 'GET', {}).then((res) => {
        this.listBills = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>
