<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <b-button class="spinner" disabled>
        <b-spinner ></b-spinner>
      </b-button>
    </div>
  </div>
</template>

<script>


export default {
  name: "LoadingDialog",
  props: ['show', 'cancel', 'confirm'],
}
</script>

<style scoped>
.dialog{
  width: 100%;
  height: 100%;
  position: fixed;
  padding-top: 250px;
  padding-left: 700px;
  display: block;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.spinner{
  background: #F0ECE4;
  color: #9D6B54;
  font-size: 26px;
  height: 60px;
  width: 60px;
}
</style>