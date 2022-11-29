<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div>
        <div class="dialogTitle">SỬA THỂ LOẠI</div>
      </div>
      <slot></slot>
      <div class="dialogGroupBtn">
        <button class="dialogBtn" v-on:click="cancelEdit">Hủy</button>
        <button class="dialogBtn" v-on:click="confirm">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditCategoryDialog",
  props: ['show', 'cancelEdit', 'confirm'],
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

  width: 500px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 50px auto auto auto;
}

.dialogBody{
  padding: 20px;
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
  display: flex;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 20px;
  justify-content: space-between;
}

.dialogBtn{
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

.labelFee{
  width: 100px;
  margin-top: 10px;
}

.inputFee{
  width: 350px;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  color: #9D6B54;
}
</style>