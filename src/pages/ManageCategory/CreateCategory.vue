<template>
  <SideBar>
  <div id="CreateCategory">
    <h3>Thêm thể loại!</h3>
    <label for="name"><b>Tên</b></label>
    <p><input type="text" required placeholder="Nhập thể loại" v-model="name"></p>
    <button v-on:click="HandleCreate">Thêm</button>
    <br>
    <br>
    <button><router-link to="/ManageCategory">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_CATEGORY} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "CreateCategory",
  components: {SideBar},
  data() {
    return {
      name: '',
      flag: true
    }
  },
  methods: {
    HandleCreate() {
      if(this.name=== ''){
        this.flag= false
        alert('Vui lòng nhập')
      }
      if(this.flag){
        apiFactory.callApi(API_MANAGE_CATEGORY.CREATE_CATEGORY, 'POST', {
          name: this.name
        }).then((res) => {
          this.$router.push({name:"GetCategories"}).catch(()=>{});
          console.log(res)
        }).catch(() => {
        });
      }
    }
  }
}
</script>
