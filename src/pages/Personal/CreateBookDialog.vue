<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateBookDialog",
  props: ['show', 'cancel', 'save'],
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
  width: 1400px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 50px auto auto auto;
}

.dialogTitle{
  color: #9D6B54;
  font-weight: bold;
  font-size: 22px;
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.top-form{
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin-left: 30px;
  padding-right: 30px;
}

.bottom-form{
  width: 98%;
  margin-left: 30px;
}

.bv-example-row{
  margin-bottom: 30px;
}

.input-label{
  font-weight: bold;
  color: #9D6B54;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 14px;
  padding: 0px;
  width: 85px;
}

.input-div{
  padding: 0px;
}

.input-text{
  border-radius: 8px;
  border: none;
  width: 290px;
  height: 42px;
  padding-left: 10px;
}

.input-text-short{
  border-radius: 8px;
  border: none;
  width: 150px;
  height: 42px;
  padding-left: 10px;
}

.book-content{
  margin-bottom: 20px;
}

.checkB{
  height: 21px;
  width: 21px;
  margin-top: 10px;
}

.grCb{
  font-weight: bold;
  color: #9D6B54;
  font-size: 14px;
  line-height: 32px;
  margin-top: auto;
  width: 340px;
  margin-bottom: auto;
}

.dialogGroupBtn{
  display: flex;
  width: 50%;
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

.dialogBtnDisable{
  border-radius: 10px;
  background-color: grey;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
}
</style>