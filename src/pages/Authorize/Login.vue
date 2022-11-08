<template>
  <div id="login">

    <h1><strong>Chào bạn</strong> Hãy đăng nhập nhé!</h1>

    <label for="email"><b>Email</b></label>
    <p><input type="text" placeholder="Username" v-model="email" required></p>

    <label for="password"><b>Password</b></label>
    <p><input type="password" required placeholder="Mật khẩu" v-model="password"></p>

    <button @click="HandleLogin">Đăng nhập</button>
    <hr>
    <br>
    <label for="email"><b>Chưa có tài khoản?</b></label> &nbsp;
    <button><router-link to="/register">Đăng ký</router-link></button>
    <button v-on:click="HandleForgotPassword">Quên mật khẩu?</button>

  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";

export default {
  name: "Login",
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
      if(this.email=== ''){
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
      }).catch(() => {});
    }
  }
}
</script>

<style scoped>
body {
  background: #f4f4f4;
  color: #5a5656;
  display: grid;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  margin: 0;
  min-height: 100vh;
  place-items: center;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 1em;
}

h1, p {
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
}

#login {
  margin: 50px auto;
  width: 300px;
}

form fieldset input[type="text"],
input[type="password"] {
  appearance: none;
  background: #e5e5e5;
  border: none;
  border-radius: 3px;
  color: #5a5656;
  font-family: inherit;
  font-size: 14px;
  height: 50px;
  outline: none;
  padding: 0px 10px;
  width: 280px;
}

form fieldset input[type="text"],
input[type="text"] {
  appearance: none;
  background: #e5e5e5;
  border: none;
  border-radius: 3px;
  color: #5a5656;
  font-family: inherit;
  font-size: 14px;
  height: 50px;
  outline: none;
  padding: 0px 10px;
  width: 280px;
}

form fieldset input[type="submit"] {
  appearance: none;
  background-color: #008dde;
  border: none;
  border-radius: 3px;
  color: #f4f4f4;
  cursor: pointer;
  font-family: inherit;
  height: 50px;
  text-transform: uppercase;
  width: 300px;
}

form fieldset a {
  color: #5a5656;
  font-size: 10px;
}

form fieldset a:hover {
  text-decoration: underline;
}
button {
  background-color: #87C1CD;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  font-size: 1vw;
  border-radius: 5px;
}
</style>