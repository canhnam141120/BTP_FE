<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <ExchangeDetailDialog :show="showDialog"
                      :cancel="cancel"
                      v-if="showDialog" class="modal">
            <table class="table">
              <thead>
              <tr class="header">
                <td>Mã GD</td>
                <td>Mã chi tiết GD</td>
                <td>Mã Sách 1</td>
                <td>TT Sách 1 trước GD</td>
                <td>TT Sách 1 sau GD</td>
                <td>Mã Sách 2</td>
                <td>TT Sách 2 trước GD</td>
                <td>TT Sách 2 sau GD</td>
                <td>Thời gian tạo</td>
                <td>Hạn GD</td>
                <td>Trạng thái</td>
                <td>Hủy</td>
              </tr>
              </thead>
              <tbody v-for="item of listExchangeDetail" :key="item.id">
              <tr>
                <td>{{ item.exchangeId}}</td>
                <td>{{ item.id}}</td>
                <td>{{ item.book1Id}}</td>
                <td v-if="item.beforeStatusBook1==null">Chưa cập nhật</td>
                <td v-else>{{ item.beforeStatusBook1}}</td>
                <td v-if="item.afterStatusBook1==null">Chưa cập nhật</td>
                <td v-else>{{ item.afterStatusBook1}}</td>
                <td>{{ item.book2Id}}</td>
                <td v-if="item.beforeStatusBook2==null">Chưa cập nhật</td>
                <td v-else>{{ item.beforeStatusBook2}}</td>
                <td v-if="item.afterStatusBook2==null">Chưa cập nhật</td>
                <td v-else>{{ item.afterStatusBook2}}</td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role approved">ĐANG GIAO DỊCH</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role approved">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role denied">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router" v-on:click="HandleCancel(item.id)">Hủy</button></td>
              </tr>
              </tbody>
            </table>
          </ExchangeDetailDialog>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ GIAO DỊCH ĐỔI</div>
            <hr>
            <div class="search-transaction">
              <router-link to="/ManageTransaction/rent" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router" style="height: 50px; padding-top: 10px">Xem giao dịch thuê</router-link>
              <select class="selectCss" v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
              </select>
              <div>
                <input type="number" v-model="search" placeholder="Nhập mã giao dịch">
                <button v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
            <div v-if="totalExchanges==0 && filter == ''" class="table-responsive table-data noResult">
              Không tìm thấy giao dịch tương ứng!
            </div>
            <div v-else class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Mã GD</td>
                  <td>Mã - Tên KH1</td>
                  <td>TT Lưu trữ sách - KH1</td>
                  <td>Mã - Tên KH2</td>
                  <td>TT Lưu trữ sách - KH2</td>
                  <td>Ngày tạo</td>
                  <td>Trạng thái</td>
                  <td>Hóa đơn</td>
                  <td>Cập nhật</td>
                  <td>Hủy GD</td>
                </tr>
                </thead>
                <tbody v-for="item of listExchanges" :key="item.id">
                <tr>
                  <td>
                    <button class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router" v-on:click="openDialog(item.id)">XEM</button>
                  </td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.userId1 }} - {{ item.userId1Navigation.fullname }}</td>
                  <td v-if="item.storageStatus1 == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus1 == 'Received'"><span class="role tradingReceived">ĐÃ NHẬN - {{item.receiveDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Sent'" ><span class="role tradingSent">ĐÃ GỬI - {{item.sendDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Recall'" ><span class="role tradingRecall">ĐÃ THU HỒI - {{item.recallDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Refund'" ><span class="role tradingRefund">ĐÃ HOÀN TRẢ - {{item.refundDate1|formatDate}}</span></td>
                  <td>{{ item.userId2 }} - {{ item.userId2Navigation.fullname }}</td>
                  <td v-if="item.storageStatus2 == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus2 == 'Received'" ><span class="role tradingReceived">ĐÃ NHẬN - {{item.receiveDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Sent'" ><span class="role tradingSent">ĐÃ GỬI - {{item.sendDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Recall'" ><span class="role tradingRecall">ĐÃ THU HÔI - {{item.recallDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Refund'" ><span class="role tradingRefund">ĐÃ HOÀN TRẢ - {{item.refunđate2|formatDate}}</span></td>
                  <td>{{ item.date | formatDate}}</td>
                  <td v-if="item.status == 'Trading'"><span class="role approved">ĐANG GD</span></td>
                  <td v-if="item.status == 'Complete'"><span class="role complete">XONG</span></td>
                  <td v-if="item.status == 'Cancel'"><span class="role denied">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'"><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td>
                    <button class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">XEM</button>
                  </td>
                  <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">CẬP NHẬT</button></td>
                  <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Hủy</button></td>
                </tr>
                </tbody>
              </table>
              <div class="paging-transaction">
                <b-pagination v-if="filter==''" class="page-number" @input="getExchanges" v-model="page" :total-rows="totalExchanges"
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
                <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getExchanges" v-model="page" :total-rows="totalExchanges"
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
                <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getExchangeWaiting" v-model="page" :total-rows="totalExchanges"
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
                <b-pagination v-if="filter=='Đang Giao Dịch'" class="page-number" @input="getExchangeTrading" v-model="page" :total-rows="totalExchanges"
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
                <b-pagination v-if="filter=='Đã Hoàn Thành'" class="page-number" @input="getExchangeComplete" v-model="page" :total-rows="totalExchanges"
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
                <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getExchangeCancel" v-model="page" :total-rows="totalExchanges"
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
        <LoadingDialog v-show="spinner"></LoadingDialog>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import ExchangeDetailDialog from "@/components/ExchangeDetailDialog";

export default {
  name: "GetExchanges",
  components: {Side_Bar, LoadingDialog, ExchangeDetailDialog},
  data() {
    return {
      listExchanges: '',
      totalExchanges: '',
      listExchangeDetail: '',
      search: '',
      isSearch: '',
      spinner: false,
      filter: 'Tất Cả',
      listFilter: ['Tất Cả', 'Đang Đợi', 'Đang Giao Dịch', 'Đã Hoàn Thành', 'Đã Hủy'],
      page: '',
      showDialog: false,
    }
  },
  created() {
    this.isSearch = false
    this.getExchanges(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getExchanges(1)
      }
      if(e.target.value=== 'Đang Đợi'){
        this.getExchangeWaiting(1)
      }
      if(e.target.value === 'Đang Giao Dịch'){
        this.getExchangeTrading(1)
      }
      if(e.target.value === 'Đã Hoàn Thành'){
        this.getExchangeComplete(1)
      }
      if(e.target.value === 'Đã Hủy'){
        this.getExchangeCancel(1)
      }
    },
    getExchanges(pageNumber) {
      this.spinner = true
      if(this.isSearch){
        apiFactory.callApi(API_MANAGE_TRANSACTION.SEARCH_EXCHANGE + pageNumber, 'POST', {
          id: this.search
        }).then((res) => {
          this.listExchanges = res.data.data
          this.totalExchanges = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
          this.listExchanges = res.data.data
          this.totalExchanges = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }
    },
    getExchangeWaiting(pageNumber){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.WAITING_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getExchangeTrading(pageNumber){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.TRADING_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getExchangeComplete(pageNumber){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.COMPLETE_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getExchangeCancel(pageNumber){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.CANCEL_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getExchangeDetail(exchangeId){
      this.spinner = true
      apiFactory.callApi(API_MANAGE_TRANSACTION.DETAIL_EXCHANGE + exchangeId, 'GET', {}).then((res) => {
        this.listExchangeDetail = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleSearch(){
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getExchanges(1)
    },
    openDialog(exchangeId){
      this.showDialog = true;
      this.getExchangeDetail(exchangeId)
    },
    cancel(){
      this.showDialog = false;
    },
    HandleCancel(exchangeDetailId){
      alert(exchangeDetailId)
    }
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString('en-GB')
    },
    format(value) {
      return new Date(value).toLocaleString('en-GB')
    },
  }
}
</script>

<style>
@import "../../assets/CSS/tableManage.css";
.paging-transaction {
  margin-top: 10px;
}

.paging-transaction ul {
  justify-content: right;
  margin-right: 15px;
}
.search-transaction {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 20px;
  width: 90%;
}

.titleMB {
  font-weight: bold;
  text-align: center;
  color: #9D6B54;
  font-size: 30px;
}

.selectCss {
  border: 1px solid white;
  border-radius: 10px;
  width: 180px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-transaction input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-transaction button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-transaction button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.noResult{
  font-size: 20px;
  font-style: italic;
  text-align: center;
  color: grey;
  padding-top: 200px;
}

.header{
  font-size: 12px;
  color: #9D6B54;
  font-weight: bold;
}
.row{
  font-size: 12px;
}
</style>