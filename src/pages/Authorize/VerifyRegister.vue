<template>
  <Layout>
    <main style="flex-grow: 1; padding: 32px 0 45px; background-image: url('https://lh3.googleusercontent.com/sXC0un20rHcGgJJxnnZGjcD5d-MLiDE4OpJYrluyoHpJdPvJg3lfbgxUCHLQHxag50e7nAOW6AjtONQhL8GFndit_T2-mXhYdTCDrcM0Bv2bHmr3u89VWF-UhvD9B4Y3kB_LrE5zaWv2EH-JMfQfiXYqq3IQG3C3jX3McRmD6I6KIHJz6pbzEc6vNdiFiMg6EA6pV9NXeoMVx3jWYJaB0FaC5ckajjuwbCCe51b41dkCXicw19W4oFayVrbyV2Ntyr0YuIflzrsJbIGe8OlwX63kFD1yx2Qod1boVq8ON0tkuHqueV1dHKlnSONl4_dIFc05aJiuz7IuQk-UOZNt1hbCitJogKDOwFEJXcj_Fz0YMlVwKESHiko7DVARjzKtn_Vg45wrUYGy1mU01_D0VRqUSNqstXauprSGqqAYpIJX5CS7uiylx_BUNlL1G36MvtZGfhJAMeqY3tB01l01XtvdevWIStyQsrgDoKBeIDZM1vaRdjLnbyytFDLNabJZxO5hFsYg-kRUN6bN9l0-3VMia44aBmCH7VhF90iKa03qjmwK_oGgYEHscEFWyjZKFygAKmuZmw2Uf5-Cgv4PrPNVxlFI1EAEe_q2OsVsn7_GmqXBRTC3chJCb4xC5QR-BkiA6IZnag4xmYi7tjrnteUOqhFchcLR0gRA9iN2ElTiRPPa-M1jAksEkuwWT88Oxf3aFIou_FkuQTNW1jy25B_slTZbsUI6lwSzL3vn6tweN8StXlpck0LapS9d_G-Oepw3EA5T54XVE-q36_sEagL2LZTTmlz-6q860N8Tgm5XWTrIIQ40htcD2cUAx1REG06A4VtNF0S_AkIjC6Uv2z-7WTMwOQxfpc2P4CBdw1KyBc4zR-jRDEF4JoRq1i8CXuiRlzkBTKQyUCDeLGSHiklQwRwMVx8avaqD0Avsh-yAnQ5qXDUfJkynZxi916HPIWBwQF9kqzj1oBOP-t1QzA=w1264-h667-no?authuser=0');">
      <div id="login">
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="text">
            Vui lòng xác thực tài khoản nhé!
          </div>
          <form action="#">
            <div class="data">
              <label for="email"><b>Mã xác thực</b></label>
              <input type="text" placeholder="code" v-model="verifyCode" required>
            <div class="btn">
              <div class="inner"></div>
              <button @click="HandleVerifyRegister">Xác nhận</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </Layout>
<!--<div>-->
<!--  <h1>Vui lòng xác thực tài khoản nhé!</h1>-->
<!--  <label for="email"><b>Mã xác thực</b></label>-->
<!--  <p><input type="text" placeholder="code" v-model="verifyCode" required></p>-->
<!--  <button @click="HandleVerifyRegister">Xac nhan</button>-->
<!--</div>-->
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
form .btn .inner{
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  z-index: -1;
  background-color: #9D6B54;
  /*background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);*/
  transition: all 0.4s;
}
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
  position: absolute;
  right: 150px;
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