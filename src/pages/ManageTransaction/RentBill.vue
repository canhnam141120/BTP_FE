<template>
  <Side_Bar>
  <div class="GetExchanges">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Hóa đơn giao dịch thuê</h3>
          <div class="filters m-b-45">
            <br>
          </div>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageTransaction/exchange" class="btn-router">Xem giao dịch đổi</router-link>
          </button>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã giao dịch</td>
                <td>Mã hóa đơn:</td>
                <td>Tên khách hàng</td>
                <td>Số cuốn sách</td>
                <td>Số tiền</td>
                <td>Phí đặt cọc</td>
                <td>Phí thuê</td>
                <td>Trạng thái thanh toán</td>
                <td>Ngày thanh toán</td>
                <td>Phương thức thanh toán</td>
              </tr>
              </thead>
              <tbody v-for="item of rentBills" :key="item.id">
              <tr>
                <td>{{ item.rentId }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.user.fullname }}</td>
                <td>{{ item.totalBook }}</td>
                <td>{{ item.totalAmount }}</td>
                <td>{{ item.depositFee }}</td>
                <td>{{ item.rentFee }}</td>
                <td>{{ item.isPaid }}</td>
                <td>{{ item.paidDate }}</td>
                <td>{{ item.payments }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <br>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageTransaction/rent" class="btn-router">Quay lại</router-link>
          </button>
          <br><br>
        </div>

      </div>
    </div>
  </div>
  </Side_Bar>
<!--  <SideBar>-->
<!--  <div>-->
<!--    <div class="RentBill">-->
<!--      <h1>Hóa đơn giao dịch thuê</h1><br><br>-->
<!--      <br><br>-->
<!--      <table border="1px">-->
<!--        <tr>-->
<!--          <td>Mã giao dịch</td>-->
<!--          <td>Mã hóa đơn:</td>-->
<!--          <td>Tên khách hàng</td>-->
<!--          <td>Số cuốn sách</td>-->
<!--          <td>Số tiền</td>-->
<!--          <td>Phí đặt cọc</td>-->
<!--          <td>Phí thuê</td>-->
<!--          <td>Trạng thái thanh toán</td>-->
<!--          <td>Ngày thanh toán</td>-->
<!--          <td>Phương thức thanh toán</td>-->
<!--        </tr>-->
<!--        <tr v-for="item of rentBills" :key="item.id">-->
<!--          <td>{{item.rentId}}</td>-->
<!--          <td>{{item.id}}</td>-->
<!--          <td>{{item.user.fullname}}</td>-->
<!--          <td>{{item.totalBook}}</td>-->
<!--          <td>{{item.totalAmount}}</td>-->
<!--          <td>{{item.depositFee}}</td>-->
<!--          <td>{{item.rentFee}}</td>-->
<!--          <td>{{item.isPaid}}</td>-->
<!--          <td>{{item.paidDate}}</td>-->
<!--          <td>{{item.payments}}</td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
<!--    <br>-->
<!--    <button><router-link to="/ManageTransaction/rent">Quay lại</router-link></button>-->
<!--  </div>-->
<!--  </SideBar>-->
</template>

<script>
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "RentBill",
  components: {Side_Bar},
  data() {
    return {
      rentBills: ''
    }
  },
  created() {
    this.getBillByRent()
  },
  methods: {
    getBillByRent() {
      const url = API_MANAGE_TRANSACTION.BILL_RENT + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.rentBills = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>