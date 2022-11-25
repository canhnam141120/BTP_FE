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
              unchecked-value="not_accepted">
            Thuê
          </b-form-checkbox>
        </div>
        <hr>
        <h5>Theo danh mục</h5>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Văn học trong nước
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Chính trị- vấn đề quốc tế
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Kiến thức khoa học
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Kinh tế
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Kiến thức khoa học
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Lịch sử
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Nghệ thuật giải trí
          </b-form-checkbox>
        </div>
        <hr>
        <h5>Theo giá bìa</h5>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Từ 0 - 100.000Đ
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Từ 100.000Đ - 200.000Đ
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="alo"
              v-model="status"
              name="alo"
              value="accepted"
              unchecked-value="not_accepted">
            Từ 200.000Đ - 500.000Đ
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="c-lo"
              v-model="status"
              name="c-lo"
              value="accepted"
              unchecked-value="not_accepted">
            Từ 500.000Đ - 1.000.000Đ
          </b-form-checkbox>
        </div>
        <div>
          <b-form-checkbox
              id="c-lo"
              v-model="status"
              name="c-lo"
              value="accepted"
              unchecked-value="not_accepted">
            Từ 1.000.000Đ trở lên
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