<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="topDialog">
        <div class="dialogTitle">CHI TIẾT SÁCH</div>
        <button class="dialogBtn" v-on:click="cancel">X</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookDetailDialog",
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
  width: 600px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 2% auto auto auto;
  display: block;
}


.topDialog{
  display: flex;
  justify-content: space-between;
  padding-left: 250px;
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

.topVRN{
  margin-left: 30px;
  height: auto;
  border-radius: 10px;
  display: flex;
  padding-bottom: 10px;
}

 .topVRN .left{
  width: 240px;
  border-radius: 10px;
}

 .topVRN .left .imgBD{
  width: 200px;
  height: 290px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.topVRN .right{
  width: 635px;
  border-radius: 10px;
}

.topVRN .right .titleBD{
  margin-left: 10px;
  margin-top: 10px;
  font-size: 1.6rem;
  color: #9D6B54;
}

.topVRN .right .contentRight{
  display: flex;
}

.topVRN .right .bookInfoBD{
  width: 70%;
  height: 280px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
  height: auto;
}

.topVRN .right .bookInfoBD span{
  font-weight: 500;
}

.topVRN .right .bookInfoBD .cover{
  font-weight: 700;
  color: red;
  font-style: normal;
}

.topVRN .right .bookInfoBD .deposit{
  font-weight: 700;
  color: #9D6B54;
  font-style: normal;
}

.topVRN .right .bookInfoBD .rent{
  font-weight: 700;
  color: #9D6B54;
  font-style: normal;
}

</style>