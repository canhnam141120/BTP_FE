<template>
  <div class="header">
    <a href="/" class="logo"><img src="@/image/logo-tramsach.png" alt="Logo Trạm Sách"></a>
    <div class="header-menu">
      <a class="active" href="/">Về trạm sách</a>
      <a href="#booklist">Tủ sách</a>
      <a href="#blog">Blog</a>
      <a href="#term">Chính sách & Điều khoản</a>
      <a href="#process">Quy trình</a>
      <RouterLink v-if="user.role == 1 || user.role == 2" to="/ManageIndex">Quản trị</RouterLink>
    </div>
    <div class="header-right">
      <button v-if="!this.$cookies.get('token')"><router-link  to="/register" class="header-button">Đăng ký</router-link></button>
      <button v-else v-on:click="HandleLogout" >Đăng xuất</button>
      <button v-if="!this.$cookies.get('token')"><router-link to="/login" class="header-button">Đăng nhập</router-link></button>
      <button v-else><router-link to="/PersonalIndex" class="header-button">Xin chào {{user.name}}</router-link></button>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';

export default {
  name: "Header",
  data(){
    return{
      user: ''
    }
  },
  created() {
        this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      let token = this.$cookies.get('token');
      try{
        this.user= VueJwtDecode.decode(token, 'utf-8');
      }
      catch(err){
        console.log('Not yet Login: ',err);
      }
    },
    HandleLogout(){
      this.$cookies.remove('token')
      alert('Đăng xuất thành công!')
      this.$router.go();
    }
  }
}
</script>

<style>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 24px 8px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo{
  padding: 0px;
}

.header a.logo img{
  width: 90%;
  height: auto;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-menu {
  margin-left: 100px;
  padding-right: 10px;

}
.header-menu a{
  margin-left: 30px;
  padding-right: 15px;
  /*justify-content: center;*/
}
.header-right {
  float: right;
  margin-right: 30px;
}
.header-button{
  border: burlywood;
  border-radius: 2px;
  padding-left: 10px;
}
</style>