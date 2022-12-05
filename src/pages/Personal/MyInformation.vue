<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="MI">
        <LoadingDialog v-show="spinner" style="z-index: 999999"></LoadingDialog>
        <ChangePassDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
          <div class="dialogBody">
            <label class="labelPass">Mật khẩu cũ: </label>
            <input class="inputPass" maxlength="50" type="password" required placeholder="Nhập mật khẩu cũ" v-model="oldPassword">
            <label class="labelPass">Mật khẩu mới: </label>
            <input class="inputPass" maxlength="50" type="password" required placeholder="Nhập mật khẩu mới" v-model="newPassword">
            <label class="labelPass">Nhập lại mật khẩu mới: </label>
            <input class="inputPass" maxlength="50" type="password" required placeholder="Nhập mật khẩu cũ" v-model="copyNewPassword">
            <div style="color: #ca0303; padding-top: 5px; padding-left: 150px">{{err}}</div>
          </div>
        </ChangePassDialog>
        <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận đổi mật khẩu!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <ConfirmDialog :show="showConfirmDialogShip" v-if="showConfirmDialogShip" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận cập nhật thông tin vận chuyển!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialogShip">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirmShip">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <b-alert v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <b-alert v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <div class="containerMI">
          <div class="left-contentMI">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMI">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="topMI">
                  <b-card no-body img-right style="width: 100%; height: 290px;">
                    <b-skeleton-img class="imgMI" card-img="right" style="border: none"></b-skeleton-img>
                    <b-card-body style="height: 290px;">
                      <br><br><br>
                      <b-skeleton animation="wave" width="80%" height="30px"></b-skeleton>
                      <b-skeleton animation="wave" width="90%" height="30px">></b-skeleton>
                      <b-skeleton animation="wave" width="90%" height="30px">></b-skeleton>
                      <b-skeleton animation="wave" width="60%" height="30px">></b-skeleton>
                    </b-card-body>
                  </b-card>
                </div>
              </template>
              <div class="topMI">
                <div class="infoMI">
                  <div v-if="!edit" class="nameMI">{{info.fullname}}</div>
                  <div v-else class="nameMI"><input class="inputName" type="text" maxlength="50" v-model="info.fullname"></div>
                  <div class="divMI"><Icon icon="mdi:email"/><span >Email: {{info.email}}</span></div>
                  <div v-if="!edit" class="divMI" ><Icon icon="material-symbols:call"/><span>Số điện thoại: {{info.phone}}</span></div>
                  <div v-else class="divInput" ><Icon icon="material-symbols:call"/><input class="inputInfo" type="text" maxlength="10" placeholder="Nhập SĐT" v-model="info.phone"></div>
                  <div v-if="!edit" class="divMI"><Icon icon="material-symbols:location-on"/><span>Địa chỉ: {{info.addressMain}}</span></div>
                  <div v-else class="divInput"><Icon icon="material-symbols:location-on"/><input class="inputInfo"  type="text" maxlength="50" placeholder="Nhập địa chỉ giao hàng" v-model="info.addressMain"></div>
                  <button v-if="!edit" class="editMI" v-on:click="edit = true">
                    <Icon icon="uil:pen" style="width: 20px; height: 20px; margin-right: 2%"/>Thay đổi thông tin
                  </button>
                  <button v-else class="editMI" v-on:click="HandleEdit">
                    <Icon icon="dashicons:saved" style="width: 20px; height: 20px; margin-right: 2%"/>Lưu thay đổi
                  </button>
                  <button class="editMI" v-on:click="showDialogChangePass">
                    <Icon icon="mdi:password-reset" style="width: 20px; height: 20px; margin-right: 5%"/>Đổi mật khẩu</button>
                </div>
                <div>
                  <input type="file" hidden accept="image/*" ref="file" @change="handleFileUpload"/>
                  <button v-if="!showUpload" class="imgBtn" v-on:click="browse"><Icon icon="material-symbols:flip-camera-ios"/></button>
                  <button v-else class="imgBtn" v-on:click="HandleEdit"><Icon icon="dashicons:saved"/></button>
                  <img class="imgMI" v-bind:src="info.avatar">
                  <div class="numberMI">
                    <div class="">{{info.likeNumber}} người thích</div>
                    <div class="">{{info.numberOfTransaction}} lượt giao dịch</div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="bottomMI">
              <div class="titleBottom">Thông tin vận chuyển</div>
              <div class="infoBottom">
                <div class="info2">
                  <label class="lbInfoShip">Gửi sách vào thứ 2 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsMonday">
                  <label class="lbInfoShip">Nhận sách vào thứ 2 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsMonday">
                  <label class="lbInfoShip">Hoàn trả sách vào thứ 2 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsMonday">
                  <label class="lbInfoShip">Thu hồi sách vào thứ 2 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsMonday">
                </div>
                <div class="info4">
                  <label class="lbInfoShip">Gửi sách vào thứ 4 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsWednesday">
                  <label class="lbInfoShip">Nhận sách vào thứ 4 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsWednesday">
                  <label class="lbInfoShip">Hoàn trả sách vào thứ 4 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsWednesday">
                  <label class="lbInfoShip">Thu hồi sách vào thứ 4 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsWednesday">
                </div>
                <div class="info6">
                  <label class="lbInfoShip">Gửi sách vào thứ 6 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.sendIsFriday">
                  <label class="lbInfoShip">Nhận sách vào thứ 6 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.receiveIsFriday">
                  <label class="lbInfoShip">Hoàn trả sách vào thứ 6 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.recallIsFriday">
                  <label class="lbInfoShip">Thu hồi sách vào thứ 6 </label><input class="cbInfoShip" type="checkbox" v-model="infoShip.refundIsFriday">
                </div>
              </div>
              <div class="divUpdate"><button class="btnUpdate" v-on:click="HandleUpdateInfoShip">CẬP NHẬT THÔNG TIN VẬN CHUYỂN</button></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>
<script>
import {API_PERSONAL} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";
import {Icon} from '@iconify/vue2';
import ChangePassDialog from "@/pages/Personal/ChangePassDialog";
import LoadingDialog from "@/components/LoadingDialog";
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "MyInformation",
  components: {SideBar_Personal, Layout, Icon, ChangePassDialog, LoadingDialog, ConfirmDialog},
  data() {
    return {
      spinner: false,
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      showConfirmDialogShip: false,

      err: '',
      info: '',
      infoShip: '',
      userId: '',
      loading: false,
      edit: false,
      showUpload: false,
      showDialog: false,
      oldPassword: '',
      newPassword: '',
      copyNewPassword: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getMyInformation()
    this.getMyInfoShipping()
  },
  methods: {
    getMyInformation() {
      this.loading = true
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.info = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    getMyInfoShipping() {
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.INFO_SHIP, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.infoShip = res.data.data
      }).catch(() => {
      });
    },
    HandleUpdateInfoShip(){
      this.showConfirmDialogShip = true
    },
    cancelConfirmDialogShip(){
      this.showConfirmDialogShip = false
    },
    HandleConfirmShip(){
      this.spinner = true
      window.scroll(0,0)
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.EDIT_SHIP_INFO, 'PUT', {
        userId: this.userByToken.UserId,
        sendIsMonday: this.infoShip.sendIsMonday,
        receiveIsMonday: this.infoShip.receiveIsMonday,
        recallIsMonday: this.infoShip.recallIsMonday,
        refundIsMonday: this.infoShip.refundIsMonday,
        sendIsWednesday: this.infoShip.sendIsWednesday,
        receiveIsWednesday: this.infoShip.receiveIsWednesday,
        recallIsWednesday: this.infoShip.recallIsWednesday,
        refundIsWednesday: this.infoShip.refundIsWednesday,
        sendIsFriday: this.infoShip.sendIsFriday,
        receiveIsFriday: this.infoShip.receiveIsFriday,
        recallIsFriday: this.infoShip.recallIsFriday,
        refundIsFriday: this.infoShip.refundIsFriday,
      }).then((res) => {
        if(res.data.message == 'UPDATE_SUCCESS'){
          this.responseFlag = true
          this.responseMessage = 'Cập nhật thông tin vận chuyển thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra, vui lòng thử lại!!'
        }
        this.dismissCountDown = this.dismissSecs
        this.spinner = false
        this.showConfirmDialogShip = false
      }).catch(() => {
      });
    },
    HandleEdit(){
      this.spinner = true
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.EDIT_INFORMATION, 'PUT', {
        userId: this.userByToken.UserId,
        fullname: this.info.fullname,
        phone: this.info.phone,
        addressMain: this.info.addressMain,
        avatar: this.info.avatar
      }).then((res) => {
        if(res.data.message == 'UPDATE_SUCCESS'){
          this.responseFlag = true
          this.responseMessage = 'Cập nhật thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra, vui lòng thử lại!!'
        }
        this.dismissCountDown = this.dismissSecs
        this.edit = false
        this.showUpload = false
        this.spinner = false
      }).catch(() => {
      });
    },
    handleFileUpload(e) {
      const file = document.querySelector('input[type=file]').files[0]
      var files = e.target.files
      if (!files[0]) {
        return
      }
      const reader = new FileReader()

      var rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.info.avatar = rawImg
      }
      reader.readAsDataURL(file);
    },
    browse(){
      this.$refs.file.click();
      this.showUpload = true
    },
    showDialogChangePass(){
      this.showDialog = true
    },
    cancel(){
      this.showDialog = false
    },
    save(){
      this.showConfirmDialog = true
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      this.spinner = true
      this.err = ''
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.CHANGE_PASSWORD, 'PUT', {
        userId: this.userByToken.UserId,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      }).then((res) => {
        if(res.data.message == 'UPDATE_SUCCESS'){
          this.responseFlag = true
          this.responseMessage = 'Đổi mật khẩu thành công!'
          this.dismissCountDown = this.dismissSecs
          this.showConfirmDialog = false
          this.showDialog = false
        }else{
          if(res.data.message == 'OLD_PASSWORD_INCORRECT'){
            this.err = 'Mật khẩu cũ không chính xác!'
            this.showConfirmDialog = false
          }
          else{
            this.responseFlag = true
            this.responseMessage = 'Đổi mật khẩu thành công!'
            this.dismissCountDown = this.dismissSecs
            this.showConfirmDialog = false
            this.showDialog = false
          }
        }
        this.spinner = false
      }).catch(() => {
      });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}

.MI {
  background: #F0F0F0;
}

.MI .containerMI {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMI{
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMI{
  width: 71%;
  background: #F0F0F0;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  display: block;
}

.topMI{
  background: #F0ECE4;
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-bottom: 15px;
  border: 1px solid #9D6B54;
}

.infoMI{
  width: 70%;
}

.nameMI{
  font-size: 36px;
  color: #9D6B54;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 30px;
  padding-left: 200px;
  margin-bottom: 30px;
}

.divMI{
  line-height: 30px;
  font-size: 20px;
  padding-left: 50px;
  color: #9D6B54;
}

.divMI span{
  line-height: 30px;
  font-size: 18px;
  padding-left: 30px;
  color: grey;
}

.editMI{
  height: 48px;
  width: 200px;
  border-radius: 8px;
  border: white;
  align-items: center;
  transition: all 0.4s ease;
  background: #9D6B54;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 50px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: center;
}

.editMI:hover {
  background: #F0ECE4;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

.imgMI{
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 5px groove #9D6B54;
  margin-top: 40px;
  margin-right: 50px;
}

.imgBtn{
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  color: white;
  background: #9D6B54;
  border: 1px hidden;
  margin-top: 200px;
  margin-left: 120px;
  font-size: 26px;
  padding-bottom: 8px;
}

.imgBtn:hover{
  border: 1px solid #9D6B54;
  color: #9D6B54;
  background: #F0ECE4;
}

.numberMI{
  margin-top: 7px;
  margin-right: 50px;
  text-align: center;
  color: #9D6B54;
}

.bottomMI{
  background: #F0ECE4;
  height: 400px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
}

.titleBottom{
  padding-top: 10px;
  padding-left: 20px;
  color: #9D6B54;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
}

.infoBottom{
  color: grey;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 70px;
  padding-right: 30px;
}

.lbInfoShip{
  height: 30px;
  width: 180px;
  margin-top: 20px;
}

.cbInfoShip{
  width: 20px;
  height: 20px;
}

.divUpdate{
  text-align: center;
}

.btnUpdate{
  background-color: #9D6B54;
  color: #F0ECE4;
  border-radius: 10px;
  height: 50px;
  width: 350px;
  border: 1px solid #9D6B54;
  margin-top: 40px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.btnUpdate:hover{
  background-color: #F0ECE4;
  color: #9D6B54;
}

.divInput{
  line-height: 30px;
  font-size: 20px;
  padding-left: 50px;
  color: #9D6B54;
}

.inputInfo {
  padding-left: 10px;
  height: 30px;
  margin-left: 30px;
  width: 300px;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
  color: #9D6B54;
}

.inputName{
  width: 300px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  color: #9D6B54;
  text-align: center;
}
</style>