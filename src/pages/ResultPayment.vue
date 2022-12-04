<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="resultPayment">
        <div class="containerRP">
          <div class="result">
            <div class="titleResultPay">Kết quả giao dịch</div>
            <div class="titleResultPay">{{ result }}</div>
            <button>
              <router-link to="/MyTransaction">Quay về trang web</router-link>
            </button>
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
  name: "ResultPayment",
  components: {Layout},
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
        } else {
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
  margin: 5px auto 30px auto;
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
  width: 100%;
  text-align: center;
}

</style>