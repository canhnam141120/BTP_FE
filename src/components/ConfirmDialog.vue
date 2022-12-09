<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: ['show'],
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
  width: 500px;
  background: #F0ECE4;
  height: 200px;
  border-radius: 10px;
  margin: 15% auto auto auto;
}

.dialogTitle{
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}

.dialogGroupBtn{
  display: flex;
  width: 70%;
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
  margin-top: 20px;
}
.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}
</style>