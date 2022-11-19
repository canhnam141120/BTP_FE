<template>
  <SideBar>
  <div class="GetExchanges">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Hóa đơn giao dịch đổi</h3>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
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
              </thead>

              <tbody v-for="item of exchangeBills" :key="item.id">
              <tr>
                <td>
                  <label class="au-checkbox">
                    <input type="checkbox">
                    <span class="au-checkmark"></span>
                  </label>
                </td>
                <td>
                  <div class="table-data__info">
                    <h6>{{item.exchangeId}}</h6>
                  </div>
                </td>

                <td>
                  <span>{{item.id}}</span>
                </td>
                <td>
                  <span>
                    <i>{{item.user.fullname}}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{item.totalBook}}
                  </span>
                </td>
                <td>
                  <span>{{item.totalAmount}}</span>
                </td>
                <td>
                  <span>
                    {{item.depositFee}}
                  </span>
                </td>
                <td>
                  <span class="role admin">
                    <i>{{item.isPaid}}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{item.paidDate}}
                  </span>
                </td>
                <td>
                  <span>
                    {{item.payments}}
                  </span>
                </td>

              </tr>

              </tbody>
            </table>
          </div>
          <br>
          <button class="au-btn au-btn-icon au-btn--green au-btn--small">
            <router-link to="/ManageTransaction/exchange" class="zmdi zmdi-plus">Quay lại</router-link>
          </button>
          <br><br>
        </div>

      </div>
    </div>
  </div>
  </SideBar>
</template>

<script>
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import SideBar from "../../components/SideBar";

export default {
  name: "ExchangeBill",
  components: {SideBar},
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

<style >
@import "../../assets/CSS/tableManage.css";
</style>