<template>
  <Side_Bar>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <CreateCategoryDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
          <div class="dialogBody">
            <label class="labelFee">Tên thể loại: </label><input class="inputFee" maxlength="50" type="text" required placeholder="Nhập thể loại mới" v-model="categoryName">
          </div>
        </CreateCategoryDialog>
        <EditCategoryDialog :show="showDialogEdit" :cancelEdit="cancelEdit" :confirm="confirm" v-if="showDialogEdit" class="modal">
          <div class="dialogBody">
            <input type="hidden" v-model="category.id">
            <label class="labelFee">Tên thể loại: </label><input class="inputFee" maxlength="50" type="text" required placeholder="Nhập thể loại" v-model="category.name">
          </div>
        </EditCategoryDialog>
        <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận xóa thể loại!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
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
            <div class="titleMB">QUẢN LÝ THỂ LOẠI</div>
            <div>
              <button class="addBtnCate" v-on:click="openDialog()">
                <Icon style="margin-bottom: 5px; margin-right: 10px" icon="material-symbols:add-circle-outline-rounded"/>Thêm mới
              </button>
            </div>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Mã thể loại</td>
                  <td>Tên thể loại</td>
                  <td>Chỉnh sửa</td>
                  <td>Xóa</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of listCategories" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td style="padding-left: 20px"><button class="tableBtnAction" v-on:click="openDialogEdit(item.id)"><Icon icon="uiw:setting"/></button></td>
                  <td><button class="tableBtnAction" v-on:click="HandleDelete(item.id)"><Icon icon="ion:trash-bin"/></button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_CATEGORY} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import CreateCategoryDialog from "@/pages/ManageCategory/CreateCategoryDialog";
import EditCategoryDialog from "@/pages/ManageCategory/EditCategoryDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "GetCategories",
  components: {Side_Bar,Dashboard, LoadingDialog, CreateCategoryDialog, Icon, EditCategoryDialog, ConfirmDialog},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      tmpId: '',

      listCategories: '',
      category: '',
      categoryName: '',
      showDialog: false,
      showDialogEdit: false,
      spinner: false,
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getCategories()
  },
  methods: {
    getCategories() {
      apiFactory.callApi(API_MANAGE_CATEGORY.All_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      this.tmpId = id
      this.showConfirmDialog = true
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      apiFactory.callApi(API_MANAGE_CATEGORY.DELETE_CATEGORY + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          this.getCategories()
          this.responseFlag = true
          this.responseMessage = 'Xóa thể loại thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
      }).catch(() => {
      });
    },

    getCategoryById(categoryId){
      apiFactory.callApi(API_MANAGE_CATEGORY.DETAIL_CATEGORY + categoryId, 'GET', {}).then((res) => {
        this.category = res.data.data
      }).catch(() => {
      });
    },
    openDialogEdit(categoryId){
      this.category=''
      this.getCategoryById(categoryId)
      this.showDialogEdit = true
    },
    cancelEdit(){
      this.showDialogEdit = false
    },
    confirm() {
      apiFactory.callApi(API_MANAGE_CATEGORY.EDIT_CATEGORY + this.category.id, 'PUT', {
        name: this.category.name
      }).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.getCategories()
          this.responseFlag = true
          this.responseMessage = 'Sửa thể loại thành công!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialogEdit = false
      }).catch(() => {
      });
      this.showDialogEdit = false
    },
    openDialog(){
      this.showDialog = true
    },
    cancel(){
      this.showDialog = false
    },
    save(){
      apiFactory.callApi(API_MANAGE_CATEGORY.CREATE_CATEGORY, 'POST', {
        name: this.categoryName
      }).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          this.getCategories()
          this.responseFlag = true
          this.responseMessage = 'Thêm thể loại thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialog = false
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
@import "../../assets/CSS/tableManage.css";

.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}
.addBtnCate{
  height: 45px;
  border-radius: 10px;
  background-color: #9D6B54;
  color: #F0ECE4;
  border: 1px solid;
  width: 140px;
  margin-bottom: 10px;
  font-weight: bold;
}

.addBtnCate:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}
</style>