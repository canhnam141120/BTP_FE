<template>
  <Header>
    <main style="flex-grow: 1; padding: 32px 0 45px; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login">
      <div class="container">
        <label for="show" class="close-btn fas fa-times" title="close"></label>
        <div class="title">
          Đăng nhập hệ thống
        </div>
        <div class="main">
          <div class="data">
            <label>Email</label>
            <input type="text" placeholder="Email" v-model="email" required>
          </div>
          <div class="data">
            <label>Mật khẩu</label>
            <input type="password" required placeholder="Mật khẩu" v-model="password">
          </div>
          <div class="btn">
            <button v-on:click="HandleLogin">Đăng nhập</button>
          </div>
          <div class="under">
              <a v-on:click="HandleForgotPassword" class="forgot-pass">Quên mật khẩu?</a>
              <router-link to="/register" class="link">Đăng ký</router-link>
          </div>
        </div>
      </div>
      </div>
    </main>
  </Header>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";
import Header from "../../components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: "Login",
  components: {Header},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    HandleLogin() {
      apiFactory.callApi(API_USER.USER_LOGIN, 'POST', {
        email: this.email, password: this.password
      }).then((res) => {
        if (res.data.message === 'LOGIN_SUCCESS') {
          this.$cookies.set("token", res.data.data.accessToken);
          this.$router.push({
            name: 'HomePage'
          })
        }
        console.log(res)
      }).catch(() => {
        alert('Sai tai khoan')
      });
    },
    HandleForgotPassword() {
      if (this.email === '') {
        alert('Vui lòng nhập email của bạn!')
      }
      apiFactory.callApi(API_USER.FORGOT_PASSWORD, 'POST', {
        email: this.email
      }).then((res) => {
        if (res.data.message.includes('SUCCESS')) {
          this.$router.push({
            name: 'ResetPassword'
          })
        }
        console.log(res)
      }).catch(() => {
      });
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
  font-family: 'Roboto', sans-serif;
}

body{
  height: 100vh;
  width: 100%;
  /*background-image: url("../image/cover.png");*/
  /*background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);*/
}

.container {
  margin-top: 120px;
  position: relative;
  left: 800px;
  top: 10%;
  font-size: 14px;
  cursor: pointer;
  max-width: 390px;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
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