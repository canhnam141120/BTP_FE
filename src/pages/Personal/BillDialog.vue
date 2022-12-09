<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillDialog",
  props: ['show', 'cancel', 'pay'],
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
  padding-left: 30px;
  width: 500px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 20vh auto auto auto;
}

.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-top: 10px;
  padding-right: 10px;
}

.dialogTitle {
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-left: 50px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.dialogExit{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  width: 30px;
  height: 30px;
}

.dialogExit:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.dialogGroupBtn {
  text-align: center;
}

.dialogBtn {
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}
</style>