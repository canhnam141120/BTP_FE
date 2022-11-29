<template>
<Side_Bar>
  <div class="ml">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <div class="titleMB">QUẢN LÝ GIAO DỊCH THUÊ</div>
          <hr>
          <div class="search-transaction">
              <router-link to="/ManageTransaction/exchange" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router" style="height: 50px; padding-top: 10px">Xem giao dịch đổi</router-link>
            <select class="selectCss" v-model="filter" @change="onchange($event)">
              <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
            </select>
            <div>
              <input type="text" v-model="search" placeholder="Nhập mã giao dịch">
              <button v-on:click="HandleSearch">Tìm</button>
            </div>
          </div>
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
.paging-transaction {
  margin-top: 10px;
}

.paging-transaction ul {
  justify-content: right;
  margin-right: 15px;
}
.search-transaction {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 20px;
  width: 90%;
}

.titleMB {
  font-weight: bold;
  text-align: center;
  color: #9D6B54;
  font-size: 30px;
}

.selectCss {
  border: 1px solid white;
  border-radius: 10px;
  width: 180px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-transaction input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-transaction button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-transaction button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>