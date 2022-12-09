<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="topDialog">
        <div class="dialogTitle">THÔNG TIN VẬN CHUYỂN</div>
        <button class="dialogBtn" v-on:click="cancel">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShipInfoDialog",
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
  width: 800px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 20vh auto auto auto;
  display: block;
}


.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 270px;
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

.bottomMI{
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  padding-bottom: 20px;
}

.infoBottom{
  color: grey;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 30px;
}

.lbInfoShip{
  height: 30px;
  width: 180px;
  margin-top: 20px;
}

.cbInfoShip{
  width: 20px;
  height: 20px;
}
</style>