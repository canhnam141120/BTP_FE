<template>
  <div>
    <div class="GetFees">
      <h1>Danh sách phí</h1>
      <button><router-link to="/ManageFee/create">Thêm</router-link></button><br><br>
      <div >
        <table border="1px">
          <tr>
            <td>Mã phí</td>
            <td>Code</td>
            <td>Tên phí</td>
            <td>Giá</td>
          </tr>
          <tr v-for="item of listFees" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
          </tr>
        </table>
      </div>
    </div>
    <br>
    <button><router-link to="/ManageIndex">Quay lại</router-link></button>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_FEE} from "@/constant/constant-api";

export default {
  name: "GetFees",
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
