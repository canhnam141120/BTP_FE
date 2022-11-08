<template>
  <div id="register">

    <h1><strong>Chào bạn</strong> Hãy đăng ký nhé!</h1>

    <label for="email"><b>Email</b></label>
    <p><input type="text" required placeholder="Username" v-model="username"></p>

    <label for="password"><b>Password</b></label>
    <p><input type="password" required placeholder="Mật khẩu" v-model="password"></p>

    <label for="email"><b>Phone Number</b></label>
    <p><input type="text" required placeholder="Phone" v-model="phone"></p>

    <label for="email"><b>Full Name</b></label>
    <p><input type="text" required placeholder="FullName" v-model="fullName"></p>

    <label for="email"><b>Address</b></label>
    <p><input type="text" required placeholder="Address" v-model="address"></p>

    <button @click="HandleRegister">Đăng ký</button>
    <hr>
    <br>
    <label for="email"><b>Đã có tài khoản?</b></label> &nbsp;
    <button><router-link to="/login">Đăng nhập</router-link></button>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";

export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      fullName: '',
      address: '',
      flag: true
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