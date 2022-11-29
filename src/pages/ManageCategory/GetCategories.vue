<template>
  <Side_Bar>
    <div class="ml">
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
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ THỂ LOẠI</div>
            <hr>
            <div>
              <button class="addBtn" v-on:click="openDialog()">
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
                  <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="openDialogEdit(item.id)">Sửa</button></td>
                  <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDelete(item.id)">Xoá</button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <LoadingDialog v-show="spinner"></LoadingDialog>
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

export default {
  name: "GetCategories",
  components: {Side_Bar, LoadingDialog, CreateCategoryDialog, Icon, EditCategoryDialog},
  data() {
    return {
      listCategories: '',
      category: '',
      categoryName: '',
      showDialog: false,
      showDialogEdit: false,
      spinner: false,
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_CATEGORY.All_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      apiFactory.callApi(API_MANAGE_CATEGORY.DELETE_CATEGORY + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          alert('Xóa thành công!')
          this.getCategories()
        }
      }).catch(() => {
        alert('Xóa không thành công!')
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
          alert('Sửa thể loại thành công')
          this.showDialogEdit = false
          this.getCategories()
        }
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
          alert('Thêm thể loại mới thành công')
          this.showDialog = false
          this.getCategories()
        }
      }).catch(() => {
      });
      this.showDialog = false
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
.addBtn{
  height: 45px;
  border-radius: 10px;
  background-color: #9D6B54;
  color: #F0ECE4;
  border: 1px solid;
  width: 140px;
  margin-bottom: 10px;
}

.addBtn:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}
</style>