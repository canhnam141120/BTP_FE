<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateExchangeDialog",
  props: ['show'],
}
</script>

<style scoped>
.dialog {
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.updateBodyRent{
  text-align: center;
  margin-right: 30px;
}

.labelFee{
  width: 90px;
  margin-top: 10px;
}

.sl{
  height: 30px;
  width: 130px;
  border: 1px solid white;
  border-radius: 10px;
  color: #9D6B54;
}

.customer{
  color: #9D6B54;
  font-weight: bold;
  font-size: 14px;
}

.dialogContent {
  padding-left: 30px;
  width: 500px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 5% auto auto auto;
}

.topDialog {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
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

.divBtn{
  text-align: center;
}

.dialogBtn {
  margin: 20px auto 20px auto;
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
}

.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.dialogExit{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  width: 30px;
  height: 30px;
}

.dialogExit:hover{
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

</style>