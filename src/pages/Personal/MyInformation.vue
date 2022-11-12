<template>
  <div>
    <div class="Detail_User">
      <h1>Thông tin cá nhân của tôi</h1>
      <div>
        <div><label>Mã người dùng: </label><span>{{info.id}}</span></div>
        <div><label>Email: </label><span>{{info.email}}</span></div>
        <div><label>Đã xác thực: </label><span>{{info.isVerify}}</span></div>
        <div><label>Tên đầy đủ: </label><span>{{info.fullname}}</span></div>
        <div><label>Số điện thoại: </label><span>{{info.phone}}</span></div>
        <div><label>Địa chỉ: </label><span>{{info.addressMain}}</span></div>
        <div><label>Trạng thái hoạt động: </label><span>{{info.isActive}}</span></div>
        <div><label>Số người thích: </label><span>{{info.likeNumber}}</span></div>
        <div><label>Số giao dịch đã thực hiện:  </label><span>{{info.numberOfTransaction}}</span></div>
        <button><router-link to="/PersonalIndex">Quay lại</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
import {API_PERSONAL} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";

export default {
  name: "MyInformation",
  data() {
    return {
      info: '',
      token: ''
    }
  },
  created() {
    this.getMyInformation()
  },
  methods: {
    getMyInformation() {
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {token: this.$cookies.get('token')}).then((res) => {
        this.info = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>

</style>