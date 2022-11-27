<template>
<Side_Bar>
  <div class="ml">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả giao dịch thuê</h3>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageTransaction/exchange" class="btn-router">Xem giao dịch đổi</router-link>
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
              <tbody v-for="item of listRents" :key="item.id">
              <tr>
                <td>
                  <div class="table-data__info">
                    <h6>{{ item.id }}</h6>
                  </div>
                </td>
                <td>{{ item.ownerId }}</td>
                <td>{{ item.owner.fullname }}</td>
                <td>{{ item.renterId }}</td>
                <td>{{ item.renter.fullname }}</td>
                <td>{{ item.date }}</td>
                <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td><router-link :to="{ name: 'RentBill', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Hóa đơn</router-link></td>
                <td><router-link :to="{ name: 'DetailRent', query: { id:item.id }}" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Chi tiết</router-link></td>
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
  name: "GetRents",
  components: {Side_Bar, LoadingDialog},
  data() {
    return {
      listRents: '',
      spinner: false,
    }
  },
  created() {
    this.getRents()
  },
  methods: {
    getRents() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_RENT, 'GET', {}).then((res) => {
        this.listRents = res.data.data
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