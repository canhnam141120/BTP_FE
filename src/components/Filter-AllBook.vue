<template>
  <div class="menu-sidebarPS">
  <div class="filter">
    <div class="filter-service">
      <div class="titleFT">BỘ LỌC</div>
      <div class="itemFilter">
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

.titleFT{
  font-weight: bold;
  color: #9D6B54;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
}

.menu-sidebarPS {
  width: 320px;
  height: auto;
  background: #F0ECE4;
  /*background: #F0ECE4;*/
  border-radius: 8px;
  padding-bottom: 50px;
}

.itemFilter{
  margin-top: 20px;
  margin-left: 40px;
}
</style>