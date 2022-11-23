<template>
  <div class="menu-sidebarPS">
  <div class="filter">
    <div class="filter-service">
      <h5>Theo dịch vụ</h5>
      <div>
        <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
        >
          Trao đổi
        </b-form-checkbox>
      </div>
      <div>
        <b-form-checkbox
            id="alo"
            v-model="status"
            name="alo"
            value="accepted"
            unchecked-value="not_accepted"
        >
          Thuê
        </b-form-checkbox>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Filter-AllBook',
  data() {
    return {
      status: 'not_accepted'
    }
  }
}
</script>

<style scoped>
.menu-sidebarPS {
  width: 350px;
  height: auto;
  padding-top: 3%;
  background: #F0ECE4;
  /*background: #F0ECE4;*/
  border-radius: 8px;
  padding-bottom: 50px;
}


</style>