<template>
  <Side_Bar>
    <ManageBook></ManageBook>
  </Side_Bar>
</template>

<script>
import Side_Bar from "../../components/Side_Bar";
import ManageBook from "../ManageBook/GetBooks";


export default {
  name: "ManageIndex",
  components: {Side_Bar, ManageBook},
};
</script>

<style>
@import "../../assets/CSS/tableManage.css";
</style>