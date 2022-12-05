<template>
  <Side_Bar>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận hủy quyền QTV người dùng!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <b-alert style="padding-left: 60px" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <b-alert style="padding-left: 60px" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <div class="col-lg-6">
          <div class="user-data m-b-30">
              <div class="titleMB">QUẢN LÝ QUẢN TRỊ VIÊN</div>
            <div class="search-admin">
                <input type="text" v-model="search" placeholder="Nhập tên hoặc số điện thoại">
                <button v-on:click="HandleSearch">Tìm</button>
            </div>
            <div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
                    <td>Mã QTV</td>
                    <td>Ảnh Đại Diện</td>
                    <td>Email</td>
                    <td>Họ và Tên</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Trạng thái hoạt động</td>
                    <td>Hủy Quyền</td>
                  </tr>
                  </thead>
                  <tbody v-for="item of listAdmins" :key="item.id">
                  <tr>
                    <td>{{ item.id }}</td>
                    <td><img v-bind:src="item.avatar" style="height: 70px; width: 70px; object-fit: scale-down"></td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td style="padding-left: 50px">
                      <Icon v-if="item.isActive" icon="fontisto:radio-btn-active" style="color: forestgreen; font-size: 30px;"/>
                      <Icon v-else icon="pajamas:status-active" style="color: #ca0303; font-size: 30px;"/>
                    </td>
                    <td style="padding-left: 23px"><button class="tableBtnAction" v-on:click="HandleAuthority(item.id)"><Icon icon="game-icons:armor-downgrade"/></button></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_ADMIN} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "GetAdmins",
  components: {Side_Bar,Dashboard, LoadingDialog, Icon, ConfirmDialog},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      tmpId: '',

      listAdmins: '',
      search: '',
      spinner: false,
      isSearch: false,
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getAdmins()
  },
  methods: {
    getAdmins() {
      this.spinner = true
      if(this.search){
        apiFactory.callApi(API_MANAGE_ADMIN.SEARCH_ADMIN, 'POST', {
          search: this.search
        }).then((res) => {
          this.listAdmins = res.data.data
          this.spinner = false
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_MANAGE_ADMIN.LIST_ADMIN, 'GET', {}).then((res) => {
          this.listAdmins = res.data.data
          this.spinner = false
        }).catch(() => {
        });
      }
    },
    HandleAuthority(id) {
      this.tmpId = id
      this.showConfirmDialog = true
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_ADMIN.REMOVE_ADMIN + this.tmpId , 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getAdmins()
          this.responseFlag = true
          this.responseMessage = 'Hủy quyền QTV thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.getAdmins()
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  }
};
</script>

<style>
@import "../../assets/CSS/tableManage.css";
.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}

.search-admin {
  text-align: right;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.search-admin input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-admin button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-admin button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>