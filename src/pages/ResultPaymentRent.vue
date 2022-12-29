<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="resultPayment">
        <div class="containerRP">
          <div class="result">
            <div class="titleResultPay">KẾT QUẢ GIAO DỊCH</div>
            <div class="resultPay" v-if="flag">{{ result }}</div>
            <div class="resultPay" v-else style="color: #ca0303;">{{ result }}</div>
            <router-link class="backToMyTrans" to="/MyTransaction">Quay về giao dịch</router-link>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>

import apiFactory from "@/config/apiFactory";
import {API_TRANSACTION} from "@/constant/constant-api";
import Layout from "@/components/Layout";

export default {
  name: "ResultPaymentRent",
  components: {Layout},
  data() {
    return {
      result: '',
      flag: ''
    }
  },
  created() {
    this.getResultPaymentRent()
  },
  methods: {
    getResultPaymentRent() {
      let uri = window.location.href.split('?');
      const url = API_TRANSACTION.UPDATE_PAY_RENT + uri[1]
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.flag = true
          this.result = 'Thanh toán thành công!'
        }
        else{
          this.flag = false
          this.result = 'Thanh toán không thành công! Vui lòng thử lại'
        }
      }).catch(() => {
      });
    },
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

.containerRP {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 10px auto;
  display: block;
}

.result{
  height: 300px;
  text-align: center;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
}

.titleResultPay {
  color: #9d6b54;
  font-weight: 600;
  padding-top: 50px;
  font-size: 30px;
  text-align: center;
}

.resultPay{
  padding-top: 30px;
  padding-bottom: 30px;
  height: 150px;
  font-size: 24px;
  color: green;
}

.backToMyTrans{
  background-color: #9d6b54;
  text-decoration: none;
  color: #F0ECE4;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid  #9d6b54;
}

.backToMyTrans:hover{
  background-color: #F0ECE4;
  color: #9d6b54;
  border: 1px solid  #9d6b54;
}
</style>