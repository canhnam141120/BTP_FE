<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="container">
          <h1>Cài lại mật khẩu</h1>
          <label for="email"><b>Email</b></label>
          <p><input type="text" required placeholder="Nhập email" v-model="email"></p>
          <label for="forgotPasswordCode"><b>Code</b></label>
          <p><input type="text" required placeholder="Nhập mã" v-model="forgotPasswordCode"></p>
          <label for="newPassword"><b>Mật khẩu mới</b></label>
          <p><input type="password" required placeholder="Nhập mật khẩu mới" v-model="newPassword"></p>
          <button v-on:click="HandleResetPassword">Xác nhận</button>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_USER} from "@/constant/constant-api";
import Layout from "@/components/Layout";

export default {
  name: "ResetPassword",
  components: {Layout},
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

.body {
  background-color: #F0F0F0;
}

.container {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
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