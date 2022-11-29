<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetailDialog",
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
  width: 1200px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 2% auto auto auto;
  display: block;
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
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.bottomDialog{
  display: flex;
  padding: 20px;
  text-align: justify;
}

.imgPD{
  height: 250px;
  width: 250px;
  object-fit: scale-down;
  margin: 20px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.date{
  color: #9D6B54;
  font-weight: bold;
  margin: 0px 0px 0px 40px;
  padding-bottom: 20px;
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