<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="topDialog">
        <div class="dialogTitle">ĐỔI MẬT KHẨU</div>
        <button class="dialogBtn" v-on:click="cancel">X</button>
      </div>
      <slot></slot>
      <div class="dialogGroupBtn">
        <button class="btnSave" v-on:click="save">Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassDialog",
  props: ['show', 'cancel', 'save'],
}
</script>

<style scoped>
.dialog {
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 200px;
  padding-top: 10px;
  padding-right: 10px;
}

.dialogContent {
  width: 600px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 100px auto auto auto;
}

.dialogTitle{
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.dialogGroupBtn{
  text-align: center;
}

.dialogBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  width: 30px;
  height: 30px;
}
.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.btnSave{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
  margin-bottom: 10px;
}

.dialogBody{
  padding-left: 50px;
  padding-bottom: 20px;
}

.labelPass{
  width: 180px;
  margin-top: 20px;
  color: #9D6B54;
}

.inputPass{
  width: 300px;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  color: #9D6B54;
  border: 1px solid #9D6B54;
}

</style>