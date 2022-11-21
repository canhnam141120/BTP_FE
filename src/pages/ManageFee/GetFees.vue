<template>
  <Side_Bar>
  <div class="GetRentBills">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách phí</h3>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã phí</td>
                <td>Code</td>
                <td>Tên phí</td>
                <td>Giá</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item of listFees" :key="item.id">
                <td>
                  <div class="table-data__info">
                    <h6>{{item.id}}</h6>
                  </div>
                </td>
                <td>{{item.code}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleCreate(item.code)">Sửa giá</button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Side_Bar>
<!--  <SideBar>-->
<!--  <div>-->
<!--    <div class="GetFees">-->
<!--      <h1>Danh sách phí</h1>-->
<!--      <button><router-link to="/ManageFee/create">Thêm</router-link></button><br><br>-->
<!--      <div >-->
<!--        <table border="1px">-->
<!--          <tr>-->
<!--            <td>Mã phí</td>-->
<!--            <td>Code</td>-->
<!--            <td>Tên phí</td>-->
<!--            <td>Giá</td>-->
<!--          </tr>-->
<!--          <tr v-for="item of listFees" :key="item.id">-->
<!--            <td>{{item.id}}</td>-->
<!--            <td>{{item.code}}</td>-->
<!--            <td>{{item.name}}</td>-->
<!--            <td>{{item.price}}</td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </div>-->
<!--    </div>-->
<!--    <br>-->
<!--    <button><router-link to="/ManageIndex">Quay lại</router-link></button>-->
<!--  </div>-->
<!--  </SideBar>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_FEE} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";


export default {
  name: "GetFees",
  components: {Side_Bar},
  data() {
    return {
      listFees: ''
    }
  },
  created() {
    this.getFees()
  },
  methods: {
    getFees() {
      apiFactory.callApi(API_MANAGE_FEE.LIST_FEE, 'GET', {}).then((res) => {
        this.listFees = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>