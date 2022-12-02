<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">

      <slot></slot>

    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePostDialog",
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
  width: 1100px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 90px auto auto auto;
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

.post-content{
  margin-bottom: 20px;
}

.bottom-post{
  padding-right: 50px;
}

.input-label{
  width: 100px;
  font-weight: bold;
  color: #9D6B54;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 14px;
}

.input-text{
  border-radius: 8px;
  border: none;
  width: 900px;
  height: 42px;
  padding-left: 10px;
}

.input-text-short{
  border-radius: 8px;
  border: none;
  width: 215px;
  height: 42px;
  padding-left: 10px;
}

.bottom-post{
  display: flex;
  justify-content: space-between;
}

</style>