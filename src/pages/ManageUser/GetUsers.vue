<template>
  <Side_Bar>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <ShipInfoDialog :show="showDialog" :cancel="cancelDialogShip" v-if="showDialog" class="modal">
          <div class="bottomMI">
            <div class="infoBottom">
              <div class="info2">
                <label class="lbInfoShip">Gửi sách vào thứ 2 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsMonday">
                <label class="lbInfoShip">Nhận sách vào thứ 2 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsMonday">
                <label class="lbInfoShip">Hoàn trả sách vào thứ 2 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsMonday">
                <label class="lbInfoShip">Thu hồi sách vào thứ 2 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsMonday">
              </div>
              <div class="info4">
                <label class="lbInfoShip">Gửi sách vào thứ 4 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsWednesday">
                <label class="lbInfoShip">Nhận sách vào thứ 4 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsWednesday">
                <label class="lbInfoShip">Hoàn trả sách vào thứ 4 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsWednesday">
                <label class="lbInfoShip">Thu hồi sách vào thứ 4 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsWednesday">
              </div>
              <div class="info6">
                <label class="lbInfoShip">Gửi sách vào thứ 6 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsFriday">
                <label class="lbInfoShip">Nhận sách vào thứ 6 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsFriday">
                <label class="lbInfoShip">Hoàn trả sách vào thứ 6 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsFriday">
                <label class="lbInfoShip">Thu hồi sách vào thứ 6 </label><input disabled class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsFriday">
              </div>
            </div>
          </div>
        </ShipInfoDialog>
        <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận ủy quyền QTV cho người dùng!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <ConfirmDialog :show="showConfirmDialogBan" v-if="showConfirmDialogBan" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận khóa tài khoản!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialogBan">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirmBan">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <ConfirmDialog :show="showConfirmDialogActive" v-if="showConfirmDialogActive" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận mở khóa tài khoản!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialogActive">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirmActive">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <div class="col-lg-6">
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ NGƯỜI DÙNG</div>
            <div class="search-user">
              <select class="selectCss"  v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
              </select>
              <div>
                <input type="text" v-model="search" placeholder="Nhập email hoặc SĐT">
                <button v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
                    <td>TT Vận Chuyển</td>
                    <td>Mã</td>
                    <td>Ảnh đại diện</td>
                    <td>Tên đầy đủ</td>
                    <td>Email</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Số người thích</td>
                    <td>Số lần giao dịch</td>
                    <td>Trạng thái hoạt động</td>
                    <td>Kích hoạt/Khóa</td>
                    <td>Ủy quyền</td>
                  </tr>
                  </thead>

                  <tbody v-for="item of listUsers" :key="item.id">
                  <tr>
                    <td style="padding-left: 30px"><button v-on:click="openDialogShip(item.id)" class="tableBtnAction"><Icon icon="fa-solid:shipping-fast"/></button></td>
                    <td>{{item.id}}</td>
                    <td><img v-bind:src="item.avatar" style="height: 60px; width: 60px; object-fit: scale-down"></td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td>{{ item.likeNumber }}</td>
                    <td>{{ item.numberOfTransaction }}</td>
                    <td style="padding-left: 50px">
                      <Icon v-if="item.isActive" icon="fontisto:radio-btn-active" style="color: forestgreen; font-size: 30px;"/>
                      <Icon v-else icon="pajamas:status-active" style="color: #ca0303; font-size: 30px;"/>
                    </td>
                    <td style="padding-left: 35px">
                      <button v-if="item.isActive" class="tableBtnAction" v-on:click="HandleBan(item.id)"><Icon icon="material-symbols:lock"/></button>
                      <button v-else class="tableBtnAction" v-on:click="HandleActive(item.id)"><Icon icon="material-symbols:lock-open-rounded"/></button>
                    </td>
                    <td style="padding-left: 18px"><button class="tableBtnAction" v-on:click="HandleAuthority(item.id)"><Icon icon="game-icons:armor-upgrade"/></button></td>
                  </tr>
                  </tbody>
                </table>
                <div class="paging-user">
                  <b-pagination v-if="filter==''" class="page-number" @input="getUsersAll" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getUsersAll" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Đang Hoạt Động'" class="page-number" @input="getUsersActive" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Đang Khóa'" class="page-number" @input="getUsersBan" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
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
import {API_MANAGE_USER, API_PERSONAL} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";
import ShipInfoDialog from "@/pages/ManageUser/ShipInfoDialog";
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "GetUsers",
  components: {Side_Bar,Dashboard, LoadingDialog, Icon, ShipInfoDialog, ConfirmDialog},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      showConfirmDialogBan: false,
      showConfirmDialogActive: false,
      tmpId: '',

      listUsers: '',
      totalUsers: '',
      search: '',
      isSearch: false,
      spinner: false,
      page: '',
      filter: 'Tất Cả',
      listFilter: ['Tất Cả', 'Đang Hoạt Động', 'Đang Khóa'],
      showDialog: false,
      infoShip: '',
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.isSearch = false
    this.getUsersAll(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getUsersAll(1)
      }
      if(e.target.value=== 'Đang Hoạt Động'){
        this.getUsersActive(1)
      }
      if(e.target.value === 'Đang Khóa'){
        this.getUsersBan(1)
      }
    },
    getUsersAll(pageNumber) {
      if(this.search){
        apiFactory.callApi(API_MANAGE_USER.SEARCH_USER + pageNumber, 'POST', {
          search: this.search
        }).then((res) => {
          this.listUsers = res.data.data
          this.totalUsers = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }
      else{
        apiFactory.callApi(API_MANAGE_USER.LIST_USER + pageNumber, 'GET', {}).then((res) => {
          this.listUsers = res.data.data
          this.totalUsers = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }
    },
    getUsersBan(pageNumber) {
      apiFactory.callApi(API_MANAGE_USER.LIST_BAN_USER + pageNumber, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
        this.totalUsers = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getUsersActive(pageNumber) {
      apiFactory.callApi(API_MANAGE_USER.LIST_ACTIVE_USER + pageNumber, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
        this.totalUsers = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    HandleBan(id) {
      this.tmpId = id
      this.showConfirmDialogBan = true
    },
    cancelConfirmDialogBan(){
      this.showConfirmDialogBan = false
    },
    HandleConfirmBan(){
      apiFactory.callApi(API_MANAGE_USER.BAN_USER + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Khóa tài khoản thành công!'
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogBan = false
      }).catch(() => {
      });
    },
    HandleActive(id) {
      this.tmpId = id
      this.showConfirmDialogActive = true
    },
    cancelConfirmDialogActive(){
      this.showConfirmDialogActive = false
    },
    HandleConfirmActive(){
      apiFactory.callApi(API_MANAGE_USER.ACTIVE_USER + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Mở khóa tài khoản thành công!'
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogActive = false
      }).catch(() => {
      });
    },
    HandleAuthority(id) {
      this.tmpId = id
      this.showConfirmDialog = true
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      window.scroll(0,0)
      apiFactory.callApi(API_MANAGE_USER.AUTHORITY_USER + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Ủy quyền QTV thành công!'
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
      }).catch(() => {
      });
    },

    HandleSearch() {
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getUsersAll(1)
    },
    openDialogShip(userId){
      this.infoShip = ''
      apiFactory.callApi(API_PERSONAL.INFO_SHIP, 'POST', {
        userId: userId
      }).then((res) => {
        this.infoShip = res.data.data
      }).catch(() => {
      });
      this.showDialog = true
    },
    cancelDialogShip(){
      this.showDialog = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";

.paging-user {
  margin-top: 10px;
}

.paging-user ul {
  justify-content: right;
  margin-right: 15px;
}

.search-user {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}

.selectCss{
  border: 1px solid white;
  border-radius: 10px;
  width: 180px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-user input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-user button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-user button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>