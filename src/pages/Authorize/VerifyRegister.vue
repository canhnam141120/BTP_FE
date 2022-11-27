<template>
  <Header>
    <main style="flex-grow: 1; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login">
        <div class="container">
          <label></label>
          <div class="title">
            Xác thực tài khoản
          </div>
          <div class="subTitle">Mã xác thực tài khoản đã được gửi qua email đăng ký của bạn</div>
          <div class="main">
            <div class="data">
              <label>Mã xác thực</label>
              <input type="text" maxlength="8" placeholder="Ví dụ: ABCD1234" v-model="verifyCode" required>
              <label class="err" v-if="err.length">{{this.err}}</label>
            </div>
            <div class="btn">
              <button @click="HandleVerifyRegister">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
      <LoadingDialog v-show="spinner"></LoadingDialog>
    </main>
  </Header>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";
import Header from "../../components/Header";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "VerifyRegister",
  components: {Header, LoadingDialog},
  data(){
    return{
      verifyCode: '',
      err:'',
      spinner: false
    }
  },
  methods: {
    HandleVerifyRegister() {
      this.err = '';
      if(!this.verifyCode){
        this.err = 'Vui lòng nhập mã xác thực!'
      }
      if(this.verifyCode){
        this.spinner = true
        apiFactory.callApi(API_USER.VERIFY_EMAIL, 'PUT', {
          verifyCode: this.verifyCode
        }).then((res) => {
          if(res.data.message === 'VERIFY_SUCCESS'){
            this.$router.push({
              name: 'Login'
            })
          }
          if(res.data.message === 'CODE_NOT_MATCH'){
            this.err = 'Mã không hợp lệ!'
          }
          this.spinner = false
        }).catch(() => {this.err = 'Xác thực không thành công!'});
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  height: 100vh;
  width: 100%;
  /*background-image: url("../image/cover.png");*/
  /*background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);*/
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 14px;
  cursor: pointer;
  max-width: 420px;
  height: 250px;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  font-family: 'Roboto', sans-serif;
}

.container .title{
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: #9D6B54;
}

.container .main{
  margin-top: -10px;
  margin-bottom: -30px;
}

.container .main .data{
  height: 45px;
  width: 70%;
  margin: 30px 59px 30px 59px;
  justify-content: center;
}

.container .main .data label{
  font-size: 15px;
  color: #9D6B54;
}

.container .main .data .err{
  margin-top: 2px;
  color: red;
}

.container .main .data input{
  height: 100%;
  width: 100%;
  padding-left: 15px;
  font-size: 15px;
  border: 1px solid silver;
  border-radius: 5px;
  color: #9D6B54;
}

.container .main .data input:focus{
  border-color: #9D6B54;
  border-bottom-width: 2px;
}

.container .main .btn{
  margin: 20px 59px 30px 59px;
  height: 45px;
  width: 70%;
  position: relative;
  overflow: hidden;
  background-color: #9D6B54;
}

.container .main .btn button{
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}

.container .main .btn button:hover{
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.subTitle{
  color: #9D6B54;
  text-align: center;
  font-size: 14px;
  font-style: italic;
}
</style>