<template>
  <Layout>
    <main style="flex-grow: 1; padding: 32px 0 45px; background-image: url('https://lh3.googleusercontent.com/sXC0un20rHcGgJJxnnZGjcD5d-MLiDE4OpJYrluyoHpJdPvJg3lfbgxUCHLQHxag50e7nAOW6AjtONQhL8GFndit_T2-mXhYdTCDrcM0Bv2bHmr3u89VWF-UhvD9B4Y3kB_LrE5zaWv2EH-JMfQfiXYqq3IQG3C3jX3McRmD6I6KIHJz6pbzEc6vNdiFiMg6EA6pV9NXeoMVx3jWYJaB0FaC5ckajjuwbCCe51b41dkCXicw19W4oFayVrbyV2Ntyr0YuIflzrsJbIGe8OlwX63kFD1yx2Qod1boVq8ON0tkuHqueV1dHKlnSONl4_dIFc05aJiuz7IuQk-UOZNt1hbCitJogKDOwFEJXcj_Fz0YMlVwKESHiko7DVARjzKtn_Vg45wrUYGy1mU01_D0VRqUSNqstXauprSGqqAYpIJX5CS7uiylx_BUNlL1G36MvtZGfhJAMeqY3tB01l01XtvdevWIStyQsrgDoKBeIDZM1vaRdjLnbyytFDLNabJZxO5hFsYg-kRUN6bN9l0-3VMia44aBmCH7VhF90iKa03qjmwK_oGgYEHscEFWyjZKFygAKmuZmw2Uf5-Cgv4PrPNVxlFI1EAEe_q2OsVsn7_GmqXBRTC3chJCb4xC5QR-BkiA6IZnag4xmYi7tjrnteUOqhFchcLR0gRA9iN2ElTiRPPa-M1jAksEkuwWT88Oxf3aFIou_FkuQTNW1jy25B_slTZbsUI6lwSzL3vn6tweN8StXlpck0LapS9d_G-Oepw3EA5T54XVE-q36_sEagL2LZTTmlz-6q860N8Tgm5XWTrIIQ40htcD2cUAx1REG06A4VtNF0S_AkIjC6Uv2z-7WTMwOQxfpc2P4CBdw1KyBc4zR-jRDEF4JoRq1i8CXuiRlzkBTKQyUCDeLGSHiklQwRwMVx8avaqD0Avsh-yAnQ5qXDUfJkynZxi916HPIWBwQF9kqzj1oBOP-t1QzA=w1264-h667-no?authuser=0'); background-size: cover">
      <div id="login" >
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="text">
            Đăng ký hệ thống
          </div>
          <form action="#">
            <div class="data">
              <label>Email</label>
              <input type="text" required placeholder="Username" v-model="username">
            </div>
            <div class="data">
              <label>Mật khẩu</label>
              <input type="password" required placeholder="Mật khẩu" v-model="password">
            </div>
            <div class="data">
              <label>Mật khẩu</label>
              <input type="password" required placeholder="Mật khẩu" v-model="password">
            </div>

            <div class="data">
              <label>Họ và tên</label>
              <input type="text" required placeholder="FullName" v-model="fullName">
            </div>
            <div class="data">
              <label>Số điện thoại</label>
              <input type="text" required placeholder="Phone" v-model="phone">
            </div>
            <div class="data">
              <label>Địa chỉ</label>
              <input type="text" required placeholder="Address" v-model="address">
            </div>
            <div class="btn">
              <div class="inner"></div>
              <button @click="HandleRegister">Đăng ký</button>
            </div>
            <div class="term">
              <label>Bằng cách tiếp tục, bạn đồng ý với Tramsach</label>
              <label>Điều khoản dịch vụ và xác nhận bạn đã đọc chính sách bảo mật</label>
            </div>
            <div class="under">
              <div class="forgot-pass">
                <a v-on:click="HandleForgotPassword">Quên mật khẩu</a>
              </div>
              <div class="signup-link">
                <a href="#"><router-link to="/login">Đăng nhập</router-link></a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </Layout>
<!--  <div id="register">-->

<!--    <h1><strong>Chào bạn</strong> Hãy đăng ký nhé!</h1>-->

<!--    <label for="email"><b>Email</b></label>-->
<!--    <p><input type="text" required placeholder="Username" v-model="username"></p>-->

<!--    <label for="password"><b>Password</b></label>-->
<!--    <p><input type="password" required placeholder="Mật khẩu" v-model="password"></p>-->

<!--    <label for="email"><b>Phone Number</b></label>-->
<!--    <p><input type="text" required placeholder="Phone" v-model="phone"></p>-->

<!--    <label for="email"><b>Full Name</b></label>-->
<!--    <p><input type="text" required placeholder="FullName" v-model="fullName"></p>-->

<!--    <label for="email"><b>Address</b></label>-->
<!--    <p><input type="text" required placeholder="Address" v-model="address"></p>-->

<!--    <button @click="HandleRegister">Đăng ký</button>-->
<!--    <hr>-->
<!--    <br>-->
<!--    <label for="email"><b>Đã có tài khoản?</b></label> &nbsp;-->
<!--    <button><router-link to="/login">Đăng nhập</router-link></button>-->
<!--  </div>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";
import Layout from "../../components/Layout";

export default {
  name: "Register",
  components: {Layout},
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      fullName: '',
      address: '',
      flag: true,
    }
  },
  methods: {
    HandleRegister() {
      if(this.username=== ''){
        this.flag= false
        alert('Khong duoc null')
      }
      if(this.flag){
        apiFactory.callApi(API_USER.USER_REGISTER, 'POST', {
          email: this.username,
          phone: this.phone,
          fullname: this.fullName,
          password: this.password,
          addressMain: this.address
        }).then((res) => {
            this.$router.push({
              name: 'ManageBook'
                })
          console.log(res)
        }).catch(() => {
        });
      }
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
/*#login{*/
/*  background-image: url("../image/background.png");*/
/*}*/
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
form .btn{
  margin: 30px 0;
  height: 45px;
  width: 70%;
  position: relative;
  margin-left: 65px;
  overflow: hidden;
  background-color: #9D6B54;
}
form .btn button{
  height: 100%;
  width: 70%;
  background: none;
  border: none;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;

}
form .btn:hover .inner{
  left: 0;
}
/*form .btn .inner{*/
/*  height: 100%;*/
/*  width: 300%;*/
/*  position: absolute;*/
/*  left: -100%;*/
/*  z-index: -1;*/
/*  background-color: #9D6B54;*/
/*  !*background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);*!*/
/*  transition: all 0.4s;*/
/*}*/
form .data label{
  font-size: 14px;
}
form .data input{
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-size: 10px;
  border: 1px solid silver;
  border-radius: 5px;
}
form .data input:focus{
  border-color: #9D6B54;
  border-bottom-width: 2px;
}
form .forgot-pass{
  margin-top: -8px;
}
form .forgot-pass a{
  color: #9D6B54;
  text-decoration: none;
}
.container {
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
.container .text{
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.container form{
  margin-top: -20px;
}
.container form .data{
  height: 45px;
  width: 70%;
  margin: 30px 0;
  margin-left: 65px;
  justify-content: center;
}
.container form .term{
  width: 100%;
  /*margin: 30px 0;*/
  /*margin-left: 30px;*/
  justify-content: center;
  text-align: center;
}
.container form .under{
  display: flex;
  width: 100%;
  /*margin: 30px 0;*/
  /*margin-left: 30px;*/
  justify-content: center;
  text-align: center;
  padding: 3px;
  margin-bottom: 20px;
}
form .forgot-pass{
  margin-top: 0px;
  margin-right: 30px;
}
</style>