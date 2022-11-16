<template>
  <SideBar>
  <div>
    <div class="DetailExchangeBill">
      <h1>Chi tiết hoá đơn đổi</h1>
      <div>
        <div><label>Mã hóa đơn: </label><span>{{bill.id}}</span></div>
        <div><label>Mã giao dịch: </label><span>{{bill.exchangeId}}</span></div>
        <div><label>Khách hàng: </label><span>{{bill.user.fullname}}</span></div>
        <div><label>Số cuốn sách: </label><span>{{bill.totalBook}}</span></div>
        <div><label>Số tiền: </label><span>{{bill.totalAmount}}</span></div>
        <div><label>Phí đặt cọc: </label><span>{{bill.depositFee}}</span></div>
        <div><label>Trạng thái thanh toán: </label><span>{{bill.isPaid}}</span></div>
        <div><label>Ngày thanh toán: </label><span>{{bill.paidDate}}</span></div>
        <div><label>Phương thức thanh toán:  </label><span>{{bill.payments}}</span></div>
        <button><router-link to="/ManageBill/exchange-bill">Quay lại</router-link></button>
      </div>
    </div>
  </div>
  </SideBar>
</template>
<script>

import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BILL} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "DetailExchangeBill",
  components: {SideBar},
  data() {
    return {
      bill: ''
    }
  },
  created() {
    this.getBillById()
  },
  methods: {
    getBillById() {
      const url = API_MANAGE_BILL.DETAIL_BILL_EXCHANGE + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.bill = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>

</style>