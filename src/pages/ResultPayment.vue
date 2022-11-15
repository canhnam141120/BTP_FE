<template>
  <div>
    <div class="Detail_User">
      <h1>Kết quả giao dịch</h1>
      <div>
        <div>{{result}}</div>
        <button><router-link to="/ManageIndex">Quay lại</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>

import apiFactory from "@/config/apiFactory";
import {API_TRANSACTION} from "@/constant/constant-api";

export default {
  name: "ResultPayment",
  data() {
    return {
      result: ''
    }
  },
  created() {
    this.getResultPayment()
  },
  methods: {
    getResultPayment() {
      let uri = window.location.href.split('?');
      const url = API_TRANSACTION.UPDATE_PAY + uri[1]
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.result = 'Thanh toán thành công!'
        }
        else{
          this.result = 'Thanh toán không thành công! Vui lonòng thử lại'
        }
      }).catch(() => {
      });
    },
  }
}
</script>

<style scoped>

</style>