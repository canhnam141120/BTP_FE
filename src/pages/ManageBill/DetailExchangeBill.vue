<template>
  <Side_Bar>
    <div class="GetAdmins">
      <!-- USER DATA-->
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Chi tiết hoá đơn đổi</h3>
            <div class="filters m-b-45">
              <br>
              <input class="au-input au-input--xl" type="text"
                     placeholder="Nhập email hoặc số điện thoại" v-model="search" required/>
              <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleSearch">
                Tìm kiếm
              </button>
            </div>
            <div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
                    <!--                    <td>Mã người dùng</td>-->
                    <td>Mã hóa đơn:</td>
                    <td>Mã giao dịch:</td>
                    <td>Khách hàng:</td>
                    <td>Số cuốn sách:</td>
                    <td>Số tiền:</td>
                    <td>Phí đặt cọc:</td>
                    <td>Trạng thái thanh toán:</td>
                    <td>Ngày thanh toán:</td>
                    <td>Phương thức thanh toán:</td>
                  </tr>
                  </thead>

                  <tbody v-for="bill of bill" :key="bill.id">
                  <tr>
                    <td>
                      <div class="table-data__info">
                        <h6>{{bill.id}}</h6>
                      </div>
                    </td>

                    <td>
                      <span>{{bill.exchangeId}}</span>
                    </td>
                    <td>
                      <span><i>{{bill.user.fullname}}</i></span>
                    </td>
                    <td>
                      <span>{{bill.totalBook}}</span>
                    </td>
                    <td>
                      <span class="role admin">{{bill.totalAmount}}</span>
                    </td>
                    <td>
                      <span>{{bill.depositFee}}</span>
                    </td>
                    <td>
                      <span><i>{{bill.isPaid}}</i></span>
                    </td>
                    <td>
                      <span><i>{{bill.paidDate}}</i></span>
                    </td>
                    <td>
                      <span><i>{{bill.payments}}</i></span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br>
            <button class="au-btn au-btn-icon au-btn--green au-btn--small">
              <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
            </button>
            <br><br>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
<!--  <Side_Bar>-->
<!--  <div>-->
<!--    <div class="DetailExchangeBill">-->
<!--      <h1>Chi tiết hoá đơn đổi</h1>-->
<!--      <div>-->
<!--        <div><label>Mã hóa đơn: </label><span>{{bill.id}}</span></div>-->
<!--        <div><label>Mã giao dịch: </label><span>{{bill.exchangeId}}</span></div>-->
<!--        <div><label>Khách hàng: </label><span>{{bill.user.fullname}}</span></div>-->
<!--        <div><label>Số cuốn sách: </label><span>{{bill.totalBook}}</span></div>-->
<!--        <div><label>Số tiền: </label><span>{{bill.totalAmount}}</span></div>-->
<!--        <div><label>Phí đặt cọc: </label><span>{{bill.depositFee}}</span></div>-->
<!--        <div><label>Trạng thái thanh toán: </label><span>{{bill.isPaid}}</span></div>-->
<!--        <div><label>Ngày thanh toán: </label><span>{{bill.paidDate}}</span></div>-->
<!--        <div><label>Phương thức thanh toán:  </label><span>{{bill.payments}}</span></div>-->
<!--        <button><router-link to="/ManageBill/exchange-bill">Quay lại</router-link></button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--    </Side_Bar>-->
</template>
<script>

import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BILL} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";


export default {
  name: "DetailExchangeBill",
  components: {Side_Bar},
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

<style >
@import "../../assets/CSS/tableManage.css";
</style>