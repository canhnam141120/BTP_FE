<template>
  <Side_Bar>
  <div>
    <div class="Detail_User">
      <h1>Chi tiết người dùng</h1>
      <div>
        <div><label>Mã người dùng: </label><span>{{user.id}}</span></div>
        <div><label>Email: </label><span>{{user.email}}</span></div>
        <div><label>Đã xác thực: </label><span>{{user.isVerify}}</span></div>
        <div><label>Tên đầy đủ: </label><span>{{user.fullname}}</span></div>
        <div><label>Số điện thoại: </label><span>{{user.phone}}</span></div>
        <div><label>Địa chỉ: </label><span>{{user.addressMain}}</span></div>
        <div><label>Trạng thái hoạt động: </label><span>{{user.isActive}}</span></div>
        <div><label>Số người thích: </label><span>{{user.likeNumber}}</span></div>
        <div><label>Số giao dịch đã thực hiện:  </label><span>{{user.numberOfTransaction}}</span></div>
        <button>Khóa</button>
        <button><router-link to="/ManageUser">Quay lại</router-link></button>
      </div>
    </div>
  </div>
  </Side_Bar>
</template>

<script>
import {API_MANAGE_USER} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "DetailUser",
  components: {Side_Bar},
  data() {
    return {
      user: ''
    }
  },
  created() {
    this.getUserById()
  },
  methods: {
    getUserById() {
      const url = API_MANAGE_USER.DETAIL_USER + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.user = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>