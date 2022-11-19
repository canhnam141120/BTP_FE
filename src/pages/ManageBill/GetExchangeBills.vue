<template>
  <Side_Bar>
  <div class="GetRentBills">
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

                <td>Mã hóa đơn:</td>
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

                <td>
                  <span>{{ item.exchangeId }}</span>
                </td>
                <td>
                  <span>
                    <i>{{ item.user.fullname }}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{ item.totalBook }}
                  </span>
                </td>
                <td>
                  <span>{{ item.totalAmount }}</span>
                </td>
                <td>
                  <span>
                    {{ item.depositFee }}
                  </span>
                </td>
                <td>
                  <span class="role admin">
                    <i>{{ item.isPaid }}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{ item.paidDate }}
                  </span>
                </td>
                <td>
                  <span>
                    {{ item.payments }}
                  </span>
                </td>
                <td>
                    <span>
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
                        <router-link :to="{ name: 'DetailExchangeBill', query: { id:item.id }}" class="btn-router">Chi tiết</router-link>
                      </button>
                              </span>
                </td>
                <td>
                    <span>
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandlePayment(item.id)">
                        Thanh toán
                      </button>
                              </span>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <br>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
          </button>
          <br><br>
        </div>

      </div>
    </div>
  </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BILL, API_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "GetExchangeBills",
  components: {Side_Bar},
  data() {
    return {
      listBills: ''
    }
  },
  created() {
    this.getExchangeBills()
  },
  methods: {
    getExchangeBills() {
      apiFactory.callApi(API_MANAGE_BILL.LIST_BILL_EXCHANGE, 'GET', {}).then((res) => {
        this.listBills = res.data.data
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