<template>
  <Side_Bar>
  <div class="ml">
    <div class="row">
      <CreateFeeDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
        <div class="dialogBody">
          <label class="labelFee">Code Phí: </label><span>{{fee.code}}</span><br>
          <label class="labelFee">Tên Phí: </label><span>{{fee.name}}</span><br>
          <label class="labelFee">Giá: </label><input class="inputFee" maxlength="6" type="number" required placeholder="Nhập giá mới" v-model="fee.price">đ
        </div>
      </CreateFeeDialog>
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <div class="titleMB">QUẢN LÝ PHÍ</div>
          <hr>
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
                <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="openDialog(item.id)">Sửa giá</button></td>
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
import {API_MANAGE_FEE} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import CreateFeeDialog from "@/pages/ManageFee/CreateFeeDialog";

export default {
  name: "GetFees",
  components: {Side_Bar, LoadingDialog, CreateFeeDialog},
  data() {
    return {
      listFees: '',
      fee: '',
      showDialog: false,
      spinner: false,
    }
  },
  created() {
    this.getFees()
  },
  methods: {
    getFees() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_FEE.LIST_FEE, 'GET', {}).then((res) => {
        this.listFees = res.data.data
        this.spinner = false
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
          console.log(alert('Chỉnh sửa phí thành công'))
          this.showDialog = false
          this.getFees()
        }
      }).catch(() => {
      });
      this.showDialog = false
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