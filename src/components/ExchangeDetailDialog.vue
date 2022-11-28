<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="topDialog">
        <div class="dialogTitle">CHI TIẾT GIAO DỊCH</div>
        <button class="dialogBtn" v-on:click="cancel">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeDetailDialog",
  props: ['show', 'cancel'],
}
</script>

<style scoped>

.dialog {
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.dialogContent {
  width: 1450px;
  padding-right: 10px;
  padding-left: 10px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 2% auto auto auto;
  display: block;
}


.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 600px;
  padding-top: 10px;
  padding-right: 10px;
}

.dialogTitle {
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
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
</style>