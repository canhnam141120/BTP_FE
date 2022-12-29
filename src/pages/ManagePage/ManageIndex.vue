<template>
    <Side_Bar v-if="userByToken.role == 1">
      <ManageBook></ManageBook>
    </Side_Bar>
    <Side_BarAdmin v-else>
      <ManageBook></ManageBook>
    </Side_BarAdmin>
</template>

<script>
import Side_Bar from "../../components/Side_Bar";
import ManageBook from "../ManageBook/GetBooks";
import Side_BarAdmin from "@/components/Side_BarAdmin";
import VueJwtDecode from "vue-jwt-decode";


export default {
  name: "ManageIndex",
  components: {Side_Bar, ManageBook, Side_BarAdmin},
  data() {
    return {
      userByToken: ''
    }
  },
  created() {
    this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
    if(this.userByToken.role == 3){
      this.$router.push({name: "404Page"})
    }
  },
};
</script>

<style>
@import "../../assets/CSS/tableManage.css";
</style>