<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div>
        <div class="dialogTitle">HÓA ĐƠN</div>
      </div>
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
  margin: 5% auto auto auto;
}

.dialogTitle {
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.dialogGroupBtn {
  display: flex;
  width: 80%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: 30px;
  padding-bottom: 20px;
  justify-content: space-between;
}

.dialogBtn {
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
</style>