<template>
  <Header>
    <main style="flex-grow: 1; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login">
        <div class="container">
        <label for="show"></label>
        <div class="title">
          Đăng nhập hệ thống
        </div>
        <div class="main">
          <div class="data">
            <label>Email</label>
            <label v-if="!this.regxMail.test(this.email)" style="color: #ca0303;">&nbsp;*</label>
            <label v-else style="color: green;">
              <Icon icon="material-symbols:check-small-rounded"/>
            </label>
            <input type="text" maxlength="50" placeholder="Email" v-model="email" required>
            <label class="err" v-if="!this.errMail || errMail.length">{{this.errMail}}</label>
          </div>
          <div class="data">
            <label>Mật khẩu</label>
            <label v-if="!this.password" style="color: #ca0303;">&nbsp;*</label>
            <label v-else style="color: green;">
              <Icon icon="material-symbols:check-small-rounded"/>
            </label>
            <input type="password" maxlength="50"  required placeholder="Mật khẩu" v-model="password">
          </div>
          <div v-if="this.regxMail.test(this.email) && this.password" class="btn">
            <button class="enable" v-on:click="HandleLogin">Đăng nhập</button>
          </div>
          <div v-else class="btn" style="background-color: grey">
            <button class="btnDisable" disabled>Đăng nhập</button>
          </div>
          <div class="result" v-if="err.length">{{this.err}}</div>
          <div class="under">
              <a v-on:click="HandleForgotPassword" class="forgot-pass">Quên mật khẩu?</a>
              <router-link to="/register" class="link">Đăng ký</router-link>
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
import {Icon} from '@iconify/vue2';

export default {
  name: "Login",
  components: {Header, LoadingDialog,Icon},
  data() {
    return {
      email: '',
      password: '',
      errMail: '',
      err: '',
      spinner: false,
      regxMail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    }
  },
  methods: {
    HandleLogin() {
      this.err = ''
      this.errMail = '';
        this.spinner = true
        apiFactory.callApi(API_USER.USER_LOGIN, 'POST', {
          email: this.email, password: this.password
        }).then((res) => {
          if (res.data.message === 'LOGIN_SUCCESS') {
            this.$cookies.set("token", res.data.data.accessToken);
            this.$router.push({
              name: 'HomePage'
            })
          }
          if(res.data.message === 'PASSWORD_INCORRECT'){
            this.err = 'Mật khẩu không chính xác!'
          }
          if(res.data.message === 'ACCOUNT_NOT_EXIST'){
            this.err = 'Tài khoản không tồn tại!'
          }
          if(res.data.message === 'ACCOUNT_NOT_VERIFY'){
            this.err = 'Tài khoản chưa được xác thực!'
          }
          if(res.data.message === 'ACCOUNT_IS_BAN'){
            this.err = 'Tài khoản đã bị khóa!'
          }
          this.spinner = false
        }).catch(() => {this.err = 'Có lỗi xảy ra, vui loòng thử lại!'});
    },
    HandleForgotPassword() {
      let regxMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      this.errMail = '';
      this.err = ''
      if(!this.email){
        this.errMail = 'Vui lòng nhập email!'
      }
      else {
        if(!regxMail.test(this.email)){
          this.errMail = 'Email không đúng định dạng!'
        }
      }
      if(this.errMail === ''){
        this.spinner = true
        apiFactory.callApi(API_USER.FORGOT_PASSWORD, 'POST', {
          email: this.email
        }).then((res) => {
          if (res.data.message.includes('SUCCESS')) {
            this.$router.push({
              name: 'ResetPassword'
            })
          }
          if(res.data.message === 'EMAIL_NOT_EXIST'){
            this.err = 'Tài khoản không tồn tại!'
          }
          this.spinner = false
        }).catch(() => {this.err = 'Email chưa đăng ký!'});
      }
    }
  },
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
  max-width: 390px;
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
  margin: 30px 59px 45px 59px;
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
  margin: 10px 59px 10px 59px;
  height: 45px;
  width: 70%;
  position: relative;
  overflow: hidden;
  background-color: #9D6B54;
}

.container .main .btn .enable{
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

.container .main .btn .enable:hover{
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.btnDisable{
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.container .main .result{
  text-align: center;
  color: red;
}

.container .main .under{
  display: flex;
  width: 100%;
  /*margin: 30px 0;*/
  /*margin-left: 30px;*/
  justify-content: center;
  text-align: center;
  padding: 3px;
  margin-bottom: 20px;
}

.container .main .under .forgot-pass{
  color: #9D6B54;
  margin-top: 0px;
  margin-right: 30px;
  text-decoration: none;
  width: 105px;
  height: 30px;
  padding-top: 5px;
  color: #9D6B54;
  text-decoration: none;
}

.container .main .under .link{
  padding-top: 5px;
  color: white;
  text-decoration: none;
  background-color: #9D6B54;
  border-radius: 7px;
  width: 100px;
  height: 30px;
  margin-bottom: 15px;
}
</style>