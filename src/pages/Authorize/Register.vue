<template>
  <Header>
    <main style="flex-grow: 1; padding: 32px 0 45px; background-image: url('https://f5-zpcloud.zdn.vn/2258788996442817451/dd48482006abc0f599ba.jpg'); background-size: cover">
      <div id="login" >
        <div class="container">
          <label for="show" class="close-btn fas fa-times" title="close"></label>
          <div class="title">
            Đăng ký hệ thống
          </div>
          <div class="main">
            <div class="data">
              <label>Email</label>
              <input type="text" required placeholder="Email" v-model="username">
            </div>
            <div class="data">
              <label>Mật khẩu</label>
              <input type="password" required placeholder="Mật khẩu" v-model="password">
            </div>
            <div class="data">
              <label>Họ và tên</label>
              <input type="text" required placeholder="Tên đầy đủ" v-model="fullName">
            </div>
            <div class="data">
              <label>Số điện thoại</label>
              <input type="text" required placeholder="Số điện thoại" v-model="phone">
            </div>
            <div class="data">
              <label>Địa chỉ</label>
              <input type="text" required placeholder="Địa chỉ" v-model="address">
            </div>
            <div class="btn">
              <button @click="HandleRegister">Đăng ký</button>
            </div>
            <div class="term">
              <label>Bằng việc đăng ký, bạn đồng ý với <strong>Trạm Sách</strong> về</label>
              <label><a href="">Điều khoản dịch vụ</a> & <a href=""> Các chính sách</a></label>
            </div>
            <div class="under">
              <a href="/login" class="link">Đã có tài khoản?</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Header>
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
import Header from "../../components/Header";

export default {
  name: "Register",
  components: {Header},
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
          if(res.data.message === 'REGISTER_SUCCESS - PLEASE GET CODE VERIFY FROM YOUR MAIL BOX!'){
            this.$router.push({name: 'VerifyRegister'})
          }
        }).catch(() => {});
      }
    },

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
  margin: 30px 59px 20px 59px;
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

.container .main .term{
  width: 100%;
  /*margin: 30px 0;*/
  /*margin-left: 30px;*/
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