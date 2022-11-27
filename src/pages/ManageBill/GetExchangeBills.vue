<template>
  <Side_Bar>
  <div class="ml">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả hóa đơn đổi</h3>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageBill/rent-bill" class="btn-router">Xem hóa đơn thuê</router-link>
          </button>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã hóa đơn</td>
                <td>Mã giao dịch</td>
                <td>Tên khách hàng</td>
                <td>Số cuốn sách</td>
                <td>Số tiền</td>
                <td>Phí đặt cọc</td>
                <td>Trạng thái thanh toán</td>
                <td>Ngày thanh toán</td>
                <td>Phương thức thanh toán</td>
                <td></td>
              </tr>
              </thead>
              <tbody v-for="item of listBills" :key="item.id">
              <tr>
                <td>
                  <div class="table-data__info">
                    <h6>{{ item.id }}</h6>
                  </div>
                </td>
                <td>{{ item.exchangeId }}</td>
                <td>{{ item.user.fullname }}</td>
                <td>{{ item.totalBook }}</td>
                <td>{{ item.totalAmount }}</td>
                <td>{{ item.depositFee }}</td>
                <td v-if="item.isPaid" ><span class="role approved">{{item.isPaid}}</span></td>
                <td v-else ><span class="role denied">{{item.isPaid}}</span></td>
                <td>{{ item.paidDate }}</td>
                <td>{{ item.payments }}</td>
                <td>
                  <router-link :to="{ name: 'DetailExchangeBill', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Chi tiết</router-link>
                </td>
                <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandlePayment(item.id)">Thanh toán</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <LoadingDialog v-show="spinner"></LoadingDialog>
    </div>
  </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BILL, API_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "GetExchangeBills",
  components: {Side_Bar, LoadingDialog},
  data() {
    return {
      listBills: '',
      spinner: false,
    }
  },
  created() {
    this.getExchangeBills()
  },
  methods: {
    getExchangeBills() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_BILL.LIST_BILL_EXCHANGE, 'GET', {}).then((res) => {
        this.listBills = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    HandlePayment(id) {
      const url = API_TRANSACTION.CREATE_URL_PAY + id
      apiFactory.callApi(url, 'POST', {}).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          let url = res.data.data
          window.location.href = url;
        }
        console.log(res)
      }).catch(() => {
        alert('CREATE_FAILED!')
      });
    },
  }
}
</script>


<style >
@import "../../assets/CSS/tableManage.css";
</style>