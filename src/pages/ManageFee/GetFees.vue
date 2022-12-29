<template>
  <Side_Bar v-if="userByToken.role == 1">
  <div class="ml">
    <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
    <Dashboard></Dashboard>
    <div class="row">
      <CreateFeeDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
        <div class="dialogBody">
          <label class="labelFee">Code Phí: </label><span>{{fee.code}}</span><br>
          <label class="labelFee">Tên Phí: </label><span>{{fee.name}}</span><br>
          <label class="labelFee">Giá: </label><input class="inputFee" @input="checkNegative" maxlength="7" type="number" required placeholder="Ví dụ: 99000" v-model="fee.price">đ
        </div>
      </CreateFeeDialog>
     <div class="col-lg-6">
       <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
         {{responseMessage}}
       </b-alert>
       <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
         {{responseMessage}}
       </b-alert>
       <div class="user-data m-b-30">
          <div class="titleMB">QUẢN LÝ PHÍ</div>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã phí</td>
                <td>Code</td>
                <td>Tên phí</td>
                <td>Giá</td>
                <td>Chỉnh sửa</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item of listFees" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.code}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price.toLocaleString()}}đ</td>
                <td><button style="padding-left: 13px" class="tableBtnAction" v-on:click="openDialog(item.id)"><Icon icon="uiw:setting"/></button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Side_Bar>
  <Side_BarAdmin v-else>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <CreateFeeDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
          <div class="dialogBody">
            <label class="labelFee">Code Phí: </label><span>{{fee.code}}</span><br>
            <label class="labelFee">Tên Phí: </label><span>{{fee.name}}</span><br>
            <label class="labelFee">Giá: </label><input class="inputFee" @input="checkNegative" maxlength="7" type="number" required placeholder="Ví dụ: 99000" v-model="fee.price">đ
          </div>
        </CreateFeeDialog>
        <div class="col-lg-6">
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ PHÍ</div>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Mã phí</td>
                  <td>Code</td>
                  <td>Tên phí</td>
                  <td>Giá</td>
                  <td>Chỉnh sửa</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of listFees" :key="item.id">
                  <td>{{item.id}}</td>
                  <td>{{item.code}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.price.toLocaleString()}}đ</td>
                  <td><button style="padding-left: 13px" class="tableBtnAction" v-on:click="openDialog(item.id)"><Icon icon="uiw:setting"/></button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_BarAdmin>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_FEE} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import Side_BarAdmin from "@/components/Side_BarAdmin";
import LoadingDialog from "@/components/LoadingDialog";
import CreateFeeDialog from "@/pages/ManageFee/CreateFeeDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "GetFees",
  components: {Side_Bar,Dashboard, LoadingDialog, CreateFeeDialog, Icon, Side_BarAdmin},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      listFees: '',
      fee: '',
      showDialog: false,
      spinner: false,
      userByToken: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    let token = this.$cookies.get('token');
    this.userByToken= VueJwtDecode.decode(token, 'utf-8');
    if(this.userByToken.role == 3){
      this.$router.push({name: "404Page"})
    }
    this.getFees()
  },
  methods: {
    getFees() {
      apiFactory.callApi(API_MANAGE_FEE.LIST_FEE, 'GET', {}).then((res) => {
        this.listFees = res.data.data
      }).catch(() => {
      });
    },
    getFeeById(id){
      apiFactory.callApi(API_MANAGE_FEE.DETAIL_FEE + id, 'GET', {}).then((res) => {
        this.fee = res.data.data
      }).catch(() => {
      });
    },
    openDialog(id) {
      this.getFeeById(id)
      this.showDialog = true
    },
    cancel() {
      this.fee=''
      this.showDialog = false
    },
    save(){
      apiFactory.callApi(API_MANAGE_FEE.CREATE_FEE, 'POST', {
        code: this.fee.code,
        name: this.fee.name,
        price: this.fee.price
      }).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          this.getFees()
          this.responseFlag = true
          this.responseMessage = 'Sửa phí thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialog = false
      }).catch(() => {
      });
      this.showDialog = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    checkNegative(e){
      if(e.target.value <= 1 || e.target.value >9999){
        e.target.value = ''
      }
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}
</style>