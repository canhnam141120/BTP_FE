<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả giao dịch đổi</h3>
            &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" >
            <router-link to="/ManageTransaction/rent" class="btn-router">Xem giao dịch thuê</router-link>
            </button>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Mã giao dịch</td>
                  <td>Mã khách hàng 1</td>
                  <td>Tên khách hàng 1</td>
                  <td>Mã khách hàng 2</td>
                  <td>Tên khách hàng 2</td>
                  <td>Ngày tạo</td>
                  <td>Trạng thái</td>
                  <td>Xem hóa đơn</td>
                  <td>Xem chi tiết</td>
                </tr>
                </thead>
                <tbody v-for="item of listExchanges" :key="item.id">
                <tr>
                  <td>
                    <div class="table-data__info">
                      <h6>{{ item.id }}</h6>
                    </div>
                  </td>
                  <td>{{ item.userId1 }}</td>
                  <td>{{ item.userId1Navigation.fullname }}</td>
                  <td>{{ item.userId2 }}</td>
                  <td>{{ item.userId2Navigation.fullname }}</td>
                  <td>{{ item.date }}</td>
                  <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                  <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td><router-link :to="{ name: 'ExchangeBill', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Hóa đơn</router-link></td>
                  <td><router-link :to="{ name: 'DetailExchange', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Chi tiết</router-link></td>
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
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "GetExchanges",
  components: {Side_Bar, LoadingDialog},
  data() {
    return {
      listExchanges: '',
      spinner: false,
    }
  },
  created() {
    this.getExchanges()
  },
  methods: {
    getExchanges() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_EXCHANGE, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>