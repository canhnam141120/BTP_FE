<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="topDialog">
        <div class="dialogTitle">ĐÁNH GIÁ</div>
        <button class="dialogBtn" v-on:click="cancel">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackDialog",
  props: ['show', 'cancel'],
}
</script>

<style scoped>
.bookdetail-feedback{
}

.no-feedback{
  color: grey;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

.dialog {
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.dialogContent {
  padding-left: 30px;
  padding-right: 20px;
  padding-bottom: 10px;
  overflow: auto;
  width: 1200px;
  background: #F0ECE4;
  height: auto;
  max-height: 600px;
  border-radius: 10px;
  margin: 10vh auto auto auto;
}

.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 500px;
  padding-top: 10px;
  padding-right: 10px;
}

.dialogTitle {
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
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