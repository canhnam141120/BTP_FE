<template>
  <Header>
    <main style="flex-grow: 1; padding: 32px 0 45px; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login">
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="title">
            Cài lại mật khẩu
          </div>
          <div class="main">
            <div class="data">
              <label>Email</label>
              <input type="text" required placeholder="Nhập email" v-model="email">
            </div>
            <div class="data">
              <label>Code</label>
              <input type="text" required placeholder="Nhập mã" v-model="forgotPasswordCode">
            </div>
            <div class="data">
              <label>Mật khẩu mới</label>
              <input type="password" required placeholder="Nhập mật khẩu mới" v-model="newPassword">
            </div>
            <div class="btn">
              <button v-on:click="HandleResetPassword">Xác nhận</button>
            </div>
            <div class="under">
                <a href="/register" class="link">Tạo mới tài khoản?</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Header>
<!--  <div id="register">-->

<!--    <h1>Cài lại mật khẩu</h1>-->

<!--    <label for="email"><b>Email</b></label>-->
<!--    <p><input type="text" required placeholder="Nhập email" v-model="email"></p>-->

<!--    <label for="forgotPasswordCode"><b>Code</b></label>-->
<!--    <p><input type="text" required placeholder="Nhập mã" v-model="forgotPasswordCode"></p>-->

<!--    <label for="newPassword"><b>Mật khẩu mới</b></label>-->
<!--    <p><input type="password" required placeholder="Nhập mật khẩu mới" v-model="newPassword"></p>-->

<!--    <button v-on:click="HandleResetPassword">Xác nhận</button>-->
<!--  </div>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";
import Header from "../../components/Header";

export default {
  name: "ResetPassword",
  components: {Header},
  data() {
    return {
      email: '',
      forgotPasswordCode: '',
      newPassword: ''
    }
  },
  methods: {
    HandleResetPassword() {
      if(this.email=== '' || this.forgotPasswordCode === '' || this.newPassword === ''){

        alert('Khong duoc null')
      }
        apiFactory.callApi(API_USER.RESET_PASSWORD, 'PUT', {
          email: this.email,
          forgotPasswordCode: this.forgotPasswordCode,
          newPassword: this.newPassword
        }).then((res) => {
          this.$router.push({
            name: 'Login'
          })
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
  margin-top: 70px;
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

.container .main .under .link{
  color: #9D6B54;
  text-decoration: none;
  width: 130px;
  height: 30px;
  color: #9D6B54;
  text-decoration: none;
}
</style>