<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div>
        <div class="dialogTitle">CHỌN SÁCH DÙNG ĐỂ TRAO ĐỔI</div>
      </div>
      <slot></slot>
      <div class="dialogGroupBtn">
        <button class="dialogBtn" v-on:click="cancel">Hủy</button>
        <button class="dialogBtn" v-on:click="confirm">Xác nhận</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ExchangeDialog",
  props: ['show', 'cancel', 'confirm'],
}
</script>

<style scoped>
.dialog{
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.dialogContent{
  width: 1000px;
  background: #F0ECE4;
  height: 610px;
  border-radius: 10px;
  margin: 5% auto auto auto;
}

.dialogTitle{
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 20px;
  text-align: center;
}

.dialogGroupBtn{
  display: flex;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
}

.dialogBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
  margin-top: 40px;
}
.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}
</style>