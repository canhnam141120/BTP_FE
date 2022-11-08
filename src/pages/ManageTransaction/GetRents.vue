<template>
  <div>
    <div class="GetRents">
      <h1>Danh sách tất cả giao dịch thuê</h1>
      <button><router-link to="/ManageTransaction/exchange">Xem giao dịch đổi</router-link></button>
      <br><br>
      <table border="1px">
        <tr>
          <td></td>
          <td>Mã giao dịch</td>
          <td>Mã khách hàng 1</td>
          <td>Tên khách hàng 1</td>
          <td>Mã khách hàng 2</td>
          <td>Tên khách hàng 2</td>
          <td>Ngày tạo</td>
          <td>Trạng thái</td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="item of listRents" :key="item.id">
          <td><router-link :to="{ name: 'DetailRent', query: { id:item.id }}"><button>Chi tiết</button></router-link></td>
          <td>{{item.id}}</td>
          <td>{{item.ownerId}}</td>
          <td>{{item.owner.fullname}}</td>
          <td>{{item.renterId}}</td>
          <td>{{item.renter.fullname}}</td>
          <td>{{item.date}}</td>
          <td>{{item.status}}</td>
          <td><router-link :to="{ name: 'RentBill', query: { id:item.id }}"><button>Hóa đơn</button></router-link></td>
          <td><button>Hủy</button></td>
        </tr>
      </table>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button><br><br>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";

export default {
  name: "GetRents",
  data() {
    return {
      listRents: ''
    }
  },
  created() {
    this.getRents()
  },
  methods: {
    getRents() {
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_RENT, 'GET', {}).then((res) => {
        this.listRents = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>
