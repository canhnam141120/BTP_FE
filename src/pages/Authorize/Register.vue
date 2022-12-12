<template>
  <Header>
    <main style="flex-grow: 1; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login" >
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="title">
            Đăng ký hệ thống
          </div>
          <div class="main">
            <div class="row">
              <div class="column">
                <div class="data">
                  <label>Email</label>
                  <label v-if="!this.regxMail.test(this.email)" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="text" maxlength="30" required placeholder="Ví dụ: acb@gmail.com" v-model="email">
                </div>
                <div class="data">
                  <label>Mật khẩu</label>
                  <label v-if="this.password.length < 8 || this.password.length > 30" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="password" maxlength="50" required placeholder="Nhập mật khẩu" v-model="password">
                </div>
                <div class="data">
                  <label>Xác nhận mật khẩu</label>
                  <label v-if="!this.passwordCheck || this.password !== this.passwordCheck" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="password" maxlength="50" required placeholder="Xác nhận mật khẩu" v-model="passwordCheck">
                </div>
              </div>
              <div class="column">
                <div class="data">
                  <label>Họ và tên</label>
                  <label v-if="this.fullname.length < 5 || this.fullname.length > 30" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="text" maxlength="30" required placeholder="Ví dụ: Nguyễn Văn A" v-model="fullname">
                </div>
                <div class="data">
                  <label>Số điện thoại</label>
                  <label v-if="!this.regxPhone.test(this.phone)" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="text" maxlength="10" required placeholder="Ví dụ: 0123456789" v-model="phone">
                </div>
                <div class="data">
                  <label>Địa chỉ</label>
                  <label v-if="this.address.length < 10 || this.address.length > 100" style="color: #ca0303;">&nbsp;*</label>
                  <label v-else style="color: green;">
                    <Icon icon="material-symbols:check-small-rounded"/>
                  </label>
                  <input type="text" maxlength="100" required placeholder="Ví dụ: Số 1, Đào Duy Anh, Đống Đa, Hà Nội" v-model="address">
                </div>
              </div>
            </div>
            <div>
              <button class="btn" v-if="this.regxMail.test(this.email) && (this.password.length >= 8 && this.password.length <= 30) && (this.fullname.length >= 5 && this.fullname.length <= 30)
                && this.password === this.passwordCheck && this.regxPhone.test(this.phone) && (this.address.length >= 10 || this.address.length <= 100)"
                  @click="HandleRegister">Đăng ký</button>
              <button v-else class="btnDisable" disabled>Đăng ký</button>
            </div>
            <label class="result" v-if="err.length">{{this.err}}</label>
            <div class="term">
              <label>Bằng việc đăng ký, bạn đồng ý với <strong>Trạm Sách</strong> về </label>
              <label><label> </label> <router-link to="/Policy&Terms"> Điều khoản dịch vụ</router-link> & <router-link to="/Policy&Terms"> Các chính sách</router-link></label>
            </div>
            <div class="under">
              <router-link to="/login" class="link">Đã có tài khoản?</router-link>
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
  name: "Register",
  components: {Header, LoadingDialog, Icon},
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: '',
      phone: '',
      fullname: '',
      address: '',
      err: '',
      spinner: false,
      regxMail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      regxPhone: /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/
    }
  },
  methods: {
    HandleRegister() {
        this.spinner = true
        apiFactory.callApi(API_USER.USER_REGISTER, 'POST', {
          email: this.email,
          phone: this.phone,
          fullname: this.fullname,
          password: this.password,
          addressMain: this.address
        }).then((res) => {
          if(res.data.message === 'REGISTER_SUCCESS'){
            this.$router.push({name: 'VerifyRegister'})
          }
          if(res.data.message === 'EMAIL_IS_EXIST'){
            this.err = 'Email đăng ký đã được sử dụng!'
          }
          this.spinner = false
        }).catch(() => {this.err = 'Đăng ký không thành công!'});
      }
    },
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
  max-width: 800px;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 20px;
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

.container .main .row{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container .main .column{
  width: 50%;
}

.container .main .data{
  height: 65px;
  width: 80%;
  margin: 30px 10px 30px 40px;
  justify-content: center;
}

.container .main .data label{
  font-size: 15px;
  color: #9D6B54;
}

.container .main .data .err{
  margin-top: 2px;
  color: #ca0303;
}

.container .main .data input{
  height: 70%;
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
  margin: 20px 59px 5px 200px;
  height: 45px;
  width: 50%;
  position: relative;
  overflow: hidden;
  background: #9d6b54;
  color: #F0ECE4;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 10px;
}

.container .main .btnDisable{
  border-radius: 10px;
  margin: 20px 59px 5px 200px;
  height: 45px;
  width: 50%;
  position: relative;
  overflow: hidden;
  background: grey;
  color: white;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.container .main .btn:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.container .main .result{
  justify-content: center;
  margin-left: 320px;
  color: red;
}

.container .main .term{
  width: 100%;
  /*margin: 30px 0;*/
  /*margin-left: 30px;*/
  margin-top: 10px;
  justify-content: center;
  text-align: center;
  color: #9D6B54;
}

.container .main .term strong{
  color: #9D6B54;
}

.container .main .term a{
  color: #9D6B54;
  font-style: italic;
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
  padding-top: 5px;
  color: #9D6B54;
  text-decoration: none;
}

</style>