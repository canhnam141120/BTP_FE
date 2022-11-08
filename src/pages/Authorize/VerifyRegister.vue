<template>
<div>
  <h1>Vui lòng xác thực tài khoản nhé!</h1>
  <label for="email"><b>Mã xác thực</b></label>
  <p><input type="text" placeholder="code" v-model="verifyCode" required></p>
  <button @click="HandleVerifyRegister">Xac nhan</button>
</div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";

export default {
  name: "VerifyRegister",
  data(){
    return{
      verifyCode: ''
    }
  },
  methods: {
    HandleVerifyRegister() {
      apiFactory.callApi(API_USER.VERIFY_EMAIL, 'PUT', {
        verifyCode: this.verifyCode
      }).then((res) => {
        if(res.data.message === 'VERIFY_SUCCESS'){
          this.$router.push({
            name: 'Login'
          })
        }
      }).catch(() => {
        alert('Xac thực không thành công!')
      });
    }
  }
}
</script>

<style scoped>

</style>