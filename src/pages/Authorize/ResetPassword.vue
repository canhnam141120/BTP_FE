<template>
  <Header>
    <main style="flex-grow: 1; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login">
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="title">
            Cài lại mật khẩu
          </div>
          <div class="subTitle">Mã đổi mật khẩu đã được gửi qua email của bạn</div>
          <div class="main">
            <div class="data">
              <label>Email</label>
              <input type="text" maxlength="50" required placeholder="Ví dụ: abc@gmail.com" v-model="email">
              <label class="err" v-if="errMail.length">{{this.errMail}}</label>
            </div>
            <div class="data">
              <label>Mã đổi mật khẩu</label>
              <input type="text" maxlength="8" required placeholder="Ví dụ: ABCD1234" v-model="forgotPasswordCode">
              <label class="err" v-if="errCode.length">{{this.errCode}}</label>
            </div>
            <div class="data">
              <label>Mật khẩu mới</label>
              <input type="password" required placeholder="Nhập mật khẩu mới" v-model="newPassword">
              <label class="err" v-if="errPass.length">{{this.errPass}}</label>
            </div>
            <div class="data">
              <label>Xác nhận mật khẩu mới</label>
              <input type="password" required placeholder="Xác nhận mật khẩu mới" v-model="passwordCheck">
              <label class="err" v-if="errPassCheck.length">{{this.errPassCheck}}</label>
            </div>
            <div class="btn">
              <button v-on:click="HandleResetPassword">Xác nhận</button>
            </div>
            <label class="result" v-if="err.length">{{this.err}}</label>
            <div class="under">
                <router-link to="/register" class="link">Tạo mới tài khoản?</router-link>
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
  name: "ResetPassword",
  components: {Header, LoadingDialog},
  data() {
    return {
      email: '',
      forgotPasswordCode: '',
      newPassword: '',
      passwordCheck: '',
      errMail: '',
      errCode: '',
      errPass: '',
      errPassCheck: '',
      err: '',
      spinner: false
    }
  },
  methods: {
    HandleResetPassword() {
      let regxMail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      this.errMail = '';
      this.errCode = '';
      this.errPass = '';
      this.errPassCheck = '';
      this.err = '';
      if(!this.email){
        this.errMail = 'Vui lòng nhập email!'
      }
      else {
        if(!regxMail.test(this.email)){
          this.errMail = 'Email không đúng định dạng!'
        }
      }
      if(!this.forgotPasswordCode){
        this.errCode = 'Vui lòng nhập mã code reset!'
      }
      if(!this.newPassword){
        this.errPass = 'Vui lòng nhập mật khẩu!'
      }else{
        if(this.newPassword.length <= 8 || this.newPassword >= 30){
          this.errPass = 'Mật khẩu phải có độ dài từ 8 - 30 ký tự!'
        }
      }
      if(!this.passwordCheck){
        this.errPassCheck = 'Vui lòng xác nhận mật khẩu!'
      }else{
        if(this.newPassword !== this.passwordCheck){
          this.errPassCheck = 'Không khớp với mật khẩu!'
        }
      }
      if(this.errMail === '' && this.errCode=== '' && this.errPass=== '' && this.errPassCheck=== ''){
        this.spinner = true
        apiFactory.callApi(API_USER.RESET_PASSWORD, 'PUT', {
          email: this.email,
          forgotPasswordCode: this.forgotPasswordCode,
          newPassword: this.newPassword
        }).then((res) => {
          if(res.data.message === 'CHANGE_PASSWORD_SUCCESS'){
            this.$router.push({name: 'Login'})
          }
          if(res.data.message === 'ACCOUNT_NOT_EXIST'){
            this.err = 'Tài khoản không tồn tại!'
          }
          if(res.data.message === 'CODE_INCORRECT'){
            this.err = 'Mã không hợp lệ!'
          }
          this.spinner = false
        }).catch(() => {this.err = 'Có lỗi xảy ra, vui loòng thử lại!'});
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
  max-width: 400px;
  border-radius: 20px;
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

.container .main .result{
  justify-content: center;
  margin-left: 90px;
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

.container .main .under .link{
  color: #9D6B54;
  text-decoration: none;
  width: 130px;
  height: 30px;
  color: #9D6B54;
  text-decoration: none;
}

.subTitle{
  color: #9D6B54;
  text-align: center;
  font-size: 14px;
  font-style: italic;
}
</style>