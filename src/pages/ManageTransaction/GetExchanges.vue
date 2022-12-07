<template>
  <Side_Bar>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <div class="col-lg-6">
          <ExchangeDetailDialog :show="showDialogED"
                      :cancel="cancelDialogDetail"
                      v-if="showDialogED" class="modal">
            <table class="table">
              <thead>
              <tr class="header">
                <td>Mã</td>
                <td>Mã Sách 1</td>
                <td>TT Sách 1 trước GD</td>
                <td>TT Sách 1 sau GD</td>
                <td>Mã Sách 2</td>
                <td>TT Sách 2 trước GD</td>
                <td>TT Sách 2 sau GD</td>
                <td>Thời gian tạo</td>
                <td>Hạn GD</td>
                <td>Trạng thái</td>
                <td v-if="!showEditED">Hủy</td>
                <td v-if="showEditED">Lưu</td>
              </tr>
              </thead>
              <tbody v-for="item of listExchangeDetail" :key="item.id">
              <tr v-if="!showEditED">
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
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td v-if="item.status == 'Waiting'"><button class="tableBtnAction" v-on:click="HandleCancelExchangeDetail(item.id, item.exchangeId)"><Icon icon="mdi:cancel-box"/></button></td>
                <td v-else><button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button></td>

              </tr>
              <tr v-if="showEditED && item.status != 'Cancel' && item.status != 'Waiting'" >
                <td>{{ item.id}}</td>
                <td>{{ item.book1Id}}</td>
                <td><input type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" v-model="item.beforeStatusBook1"></td>
                <td><input type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" v-model="item.afterStatusBook1"></td>
                <td>{{ item.book2Id}}</td>
                <td><input type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" v-model="item.beforeStatusBook2"></td>
                <td><input type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" v-model="item.afterStatusBook2"></td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td><button class="tableBtnAction" v-on:click="editExchangeDetail(item.id, item.exchangeId)"><Icon icon="dashicons:cloud-saved"/></button></td>
              </tr>
              </tbody>
            </table>
            <div class="divBtn">
              <button v-if="!showEditED" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditED = true">Cập nhật</button>
              <button v-if="showEditED" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditED = false">Xong</button>
            </div>
          </ExchangeDetailDialog>
          <ExchangeBillDialog :show="showDialogBD"
                                :cancel="cancelDialogBill"
                                v-if="showDialogBD" class="modal">
            <table class="table">
              <thead>
              <tr class="header">
                <td>Mã hóa đơn</td>
                <td>Mã/Tên KH</td>
                <td>Tổng sách</td>
                <td>Phí cọc</td>
                <td>Phí ship</td>
                <td>Phí dịch vụ</td>
                <td>Tổng tiền</td>
                <td>TT Thanh toán</td>
                <td>Ngày thanh toán</td>
                <td>Phương thức thanh toán</td>
                <td>TT Hoàn Tiền</td>
                <td>Ngày Hoàn Tiền</td>
              </tr>
              </thead>
              <tbody v-for="item of listExchangeBills" :key="item.id">
              <tr>
                <td>{{ item.id}}</td>
                <td>{{item.userId}}/{{item.user.fullname}}</td>
                <td>{{item.totalBook}}</td>
                <td>{{item.depositFee.toLocaleString()}}đ</td>
                <td>{{item.feeId1Navigation.price.toLocaleString()}}đ</td>
                <td v-if="item.feeId3Navigation">{{item.feeId2Navigation.price.toLocaleString()}}đ + {{item.totalBook-1}}x{{item.feeId3Navigation.price}}đ</td>
                <td v-else>{{item.feeId2Navigation.price.toLocaleString()}}đ</td>
                <td>{{item.totalAmount}}</td>
                <td v-if="item.isPaid"><span class="role paid">ĐÃ THANH TOÁN</span></td>
                <td v-else><span class="role notPaid">CHƯA THANH TOÁN</span></td>
                <td v-if="item.paidDate">{{item.paidDate}}</td>
                <td v-else>Chưa thanh toán</td>
                <td>{{item.payments}}</td>
                <td v-if="item.isRefund"><span class="role paid">ĐÃ HOÀN TIỀN</span></td>
                <td v-else><span class="role notPaid">CHƯA HOÀN TIỀN</span></td>
                <td v-if="item.refundDate">{{item.refundDate}}</td>
                <td v-else>Chưa hoàn tiền</td>
              </tr>
              </tbody>
            </table>
          </ExchangeBillDialog>
          <UpdateExchangeDialog :show="showDialogUE" v-if="showDialogUE" class="modal">
            <div class="topDialog">
              <div class="dialogTitle">CẬP NHẬT GIAO DỊCH SỐ {{exchange.id}}</div>
              <button class="dialogExit" v-on:click="cancelDialogUE">X</button>
            </div>
            <div class="updateBody">
              <div class="updateLeft">
                <div class="customer">KHÁCH HÀNG 1</div>
                <label class="labelFee">TT Vận Chuyển: </label>
                <select class="sl" v-model="exchange.storageStatus1">
                  <option v-bind:value="item.id" v-for="item of listStatus" :key="item.id">{{ item.name }}</option>
                </select><br>
                <br>
                <label class="labelFee">Ngày nhận: </label>
                <input v-if="exchange.storageStatus1 == 'Received'" type="date" class="sl" required v-model="exchange.receiveDate1">
                <input v-else type="date" disabled class="sl" required v-model="exchange.receiveDate1"><br>
                <br>
                <label class="labelFee">Ngày gửi: </label>
                <input v-if="exchange.storageStatus1 == 'Sent'" type="date" class="sl" required v-model="exchange.sendDate1">
                <input v-else type="date" class="sl" disabled required v-model="exchange.sendDate1"><br>
                <br>
                <label class="labelFee">Ngày thu hồi: </label>
                <input v-if="exchange.storageStatus1 == 'Recall'" type="date" class="sl" required v-model="exchange.recallDate1">
                <input v-else type="date" class="sl" disabled required v-model="exchange.recallDate1"><br>
                <br>
                <label class="labelFee">Ngày hoàn trả: </label>
                <input v-if="exchange.storageStatus1 == 'Refund'"  type="date" class="sl" required v-model="exchange.refundDate1">
                <input v-else type="date" class="sl" disabled required v-model="exchange.refundDate1"><br>
              </div>
              <div class="updateRight">
                <div class="customer">KHÁCH HÀNG 2</div>
                <label class="labelFee">TT Vận Chuyển: </label>
                <select class="sl" v-model="exchange.storageStatus2">
                  <option v-bind:value="item.id" v-for="item of listStatus" :key="item.id">{{ item.name }}</option>
                </select><br>
                <br>
                <label class="labelFee">Ngày nhận: </label>
                <input v-if="exchange.storageStatus2 == 'Received'" type="date" class="sl" required v-model="exchange.receiveDate2">
                <input v-else type="date" disabled class="sl" required v-model="exchange.receiveDate2"><br>
                <br>
                <label class="labelFee">Ngày gửi: </label>
                <input v-if="exchange.storageStatus2 == 'Sent'" type="date" class="sl" required v-model="exchange.sendDate2">
                <input v-else type="date" class="sl" disabled required v-model="exchange.sendDate2"><br>
                <br>
                <label class="labelFee">Ngày thu hồi: </label>
                <input v-if="exchange.storageStatus2 == 'Recall'" type="date" class="sl" required v-model="exchange.recallDate2">
                <input v-else type="date" class="sl" disabled required v-model="exchange.recallDate2"><br>
                <br>
                <label class="labelFee">Ngày hoàn trả: </label>
                <input v-if="exchange.storageStatus2 == 'Refund'"  type="date" class="sl" required v-model="exchange.refundDate2">
                <input v-else type="date" class="sl" disabled required v-model="exchange.refundDate2"><br>
              </div>
            </div>
            <div  class="divBtn">
              <button v-if="exchange.storageStatus1 == 'Refund' && exchange.storageStatus2 == 'Refund'" class="dialogBtn" v-on:click="HandleComplete(exchange.id)">Hoàn Thành</button>
              <button v-else  class="dialogBtn" v-on:click="saveUE">Cập Nhật</button>
            </div>
          </UpdateExchangeDialog>
          <b-alert style="position: absolute; right: 0; margin-top: 10px" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ GIAO DỊCH ĐỔI</div>
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
                  <td>Khách hàng 1</td>
                  <td>Vận đơn KH1</td>
                  <td>Khách hàng 2</td>
                  <td>Vận đơn KH2</td>
                  <td>Ngày tạo</td>
                  <td>Trạng thái</td>
                  <td>Hóa đơn</td>
                  <td>Cập nhật</td>
                </tr>
                </thead>
                <tbody v-for="item of listExchanges" :key="item.id">
                <tr>
                  <td style="padding-left: 12px"><button class="tableBtnAction" v-on:click="openDialogDetail(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button></td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.userId1 }} - {{ item.userId1Navigation.fullname }}</td>
                  <td v-if="item.storageStatus1 == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus1 == 'Received'"><span class="role tradingStatus">ĐÃ NHẬN - {{item.receiveDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Sent'" ><span class="role tradingStatus">ĐÃ GỬI - {{item.sendDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Recall'" ><span class="role tradingStatus">ĐÃ THU HỒI - {{item.recallDate1|formatDate}}</span></td>
                  <td v-if="item.storageStatus1 == 'Refund'" ><span class="role tradingStatus">ĐÃ HOÀN TRẢ - {{item.refundDate1|formatDate}}</span></td>
                  <td>{{ item.userId2 }} - {{ item.userId2Navigation.fullname }}</td>
                  <td v-if="item.storageStatus2 == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus2 == 'Received'" ><span class="role tradingStatus">ĐÃ NHẬN - {{item.receiveDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Sent'" ><span class="role tradingStatus">ĐÃ GỬI - {{item.sendDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Recall'" ><span class="role tradingStatus">ĐÃ THU HÔI - {{item.recallDate2|formatDate}}</span></td>
                  <td v-if="item.storageStatus2 == 'Refund'" ><span class="role tradingStatus">ĐÃ HOÀN TRẢ - {{item.refundDate2|formatDate}}</span></td>
                  <td>{{ item.date | formatDate}}</td>
                  <td v-if="item.status == 'Trading'"><span class="role trading">ĐANG GD</span></td>
                  <td v-if="item.status == 'Complete'"><span class="role complete">HOÀN THÀNH</span></td>
                  <td v-if="item.status == 'Cancel'"><span class="role cancel">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'"><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td>
                    <button class="tableBtnAction" v-on:click="openDialogBill(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button>
                  </td>
                  <td v-if="item.status == 'Waiting'">
                    <button class="tableBtnAction" v-on:click="HandleTrading(item.id)"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelExchange(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Complete' || item.status == 'Cancel'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Trading'">
                    <button class="tableBtnAction" v-on:click="openDialogUE(item.id)"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelExchange(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
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
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_TRANSACTION, API_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import ExchangeDetailDialog from "@/pages/ManageTransaction/ExchangeDetailDialog";
import ExchangeBillDialog from "@/pages/ManageTransaction/ExchangeBillDialog";
import UpdateExchangeDialog from "@/pages/ManageTransaction/UpdateExchangeDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";

export default {
  name: "GetExchanges",
  components: {Side_Bar, LoadingDialog,Dashboard, ExchangeDetailDialog, ExchangeBillDialog, UpdateExchangeDialog, Icon},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,

      listExchanges: '',
      totalExchanges: '',
      listExchangeDetail: '',
      listExchangeBills: '',
      exchange: '',
      search: '',
      isSearch: '',
      spinner: false,
      filter: 'Tất Cả',
      listFilter: ['Tất Cả', 'Đang Đợi', 'Đang Giao Dịch', 'Đã Hoàn Thành', 'Đã Hủy'],
      listStatus: [{id: 'Waiting', name: 'Đang Đợi'},{id: 'Received', name: 'Đã Nhận'},{id: 'Sent', name: 'Đã Gửi'},{id: 'Recall', name: 'Đã Thu Hồi'},{id: 'Refund', name: 'Đã Hoàn Trả'}],
      page: '',
      showDialogED: false,
      showDialogBD: false,
      showDialogUE: false,
      showEditED: false,
      beforeStatusBook1: '',
      afterStatusBook1: '',
      beforeStatusBook2: '',
      afterStatusBook2: '',
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
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
      if(this.isSearch){
        apiFactory.callApi(API_MANAGE_TRANSACTION.SEARCH_EXCHANGE + pageNumber, 'POST', {
          id: this.search
        }).then((res) => {
          this.listExchanges = res.data.data
          this.totalExchanges = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
          this.listExchanges = res.data.data
          this.totalExchanges = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }
    },
    getExchangeWaiting(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.WAITING_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getExchangeTrading(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.TRADING_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getExchangeComplete(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.COMPLETE_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getExchangeCancel(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.CANCEL_EXCHANGE + pageNumber, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
        this.totalExchanges = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getExchangeDetail(exchangeId){
      this.listExchangeDetail = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.DETAIL_EXCHANGE + exchangeId, 'GET', {}).then((res) => {
        this.listExchangeDetail = res.data.data
      }).catch(() => {
      });
    },
    getExchangeBill(exchangeId){
      this.listExchangeBills = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.BILL_EXCHANGE + exchangeId, 'GET', {}).then((res) => {
        this.listExchangeBills = res.data.data
      }).catch(() => {
      });
    },
    getExchangeById(exchangeId){
      this.exchange = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.EXCHANGE_BYID + exchangeId, 'GET', {}).then((res) => {
        this.exchange = res.data.data
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
    HandleTrading(exchangeId){
      apiFactory.callApi(API_MANAGE_TRANSACTION.HANDLE_TRADE_EXCHANGE + exchangeId, 'PUT', {}).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          if(this.filter === ''){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getExchangeWaiting(this.page)
          }
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleComplete(exchangeId){
      apiFactory.callApi(API_MANAGE_TRANSACTION.HANDLE_COMPLETE_EXCHANGE + exchangeId, 'PUT', {}).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          this.saveUE()
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    openDialogDetail(exchangeId){
      this.showDialogED = true;
      this.getExchangeDetail(exchangeId)
    },
    cancelDialogDetail(){
      this.showDialogED = false;
    },
    openDialogBill(exchangeId){
      this.showDialogBD = true;
      this.getExchangeBill(exchangeId)
    },
    cancelDialogBill(){
      this.showDialogBD = false;
    },
    openDialogUE(exchangeId){
      this.getExchangeById(exchangeId)
      this.showDialogUE = true;
    },
    cancelDialogUE(){
      this.showDialogUE = false;
    },
    saveUE(){
      apiFactory.callApi(API_MANAGE_TRANSACTION.UPDATE_STATUS_EXCHANGE + this.exchange.id, 'PUT', {
        storageStatus1: this.exchange.storageStatus1,
        storageStatus2: this.exchange.storageStatus2,
        sendDate1: this.exchange.sendDate1,
        receiveDate1: this.exchange.receiveDate1,
        recallDate1: this.exchange.recallDate1,
        refundDate1: this.exchange.refundDate1,
        sendDate2: this.exchange.sendDate2,
        receiveDate2: this.exchange.receiveDate2,
        recallDate2: this.exchange.recallDate2,
        refundDate2: this.exchange.refundDate2,
      }).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          if(this.filter === ''){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Đang Giao Dịch'){
            this.getExchangeTrading(this.page)
          }
          this.showDialogUE = false
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
      this.showDialogUE = false;
    },
    editExchangeDetail(exchangeDetailId, exchangeId){
      const item = this.listExchangeDetail.filter(list => list.id == exchangeDetailId)
      apiFactory.callApi(API_MANAGE_TRANSACTION.UPDATE_DETAIL_EXCHANGE + exchangeDetailId, 'PUT', {
        beforeStatusBook1: item[0].beforeStatusBook1,
        beforeStatusBook2: item[0].beforeStatusBook2,
        afterStatusBook1:  item[0].afterStatusBook1,
        afterStatusBook2:  item[0].afterStatusBook2,
      }).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật chi tiết giao dịch thành công!'
          this.getExchangeDetail(exchangeId)
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleCancelExchangeDetail(exchangeDetailId, exchangeId){
      apiFactory.callApi(API_TRANSACTION.CANCEL_EXCHANGE_DETAIL + exchangeDetailId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getExchangeDetail(exchangeId)
        }
      }).catch(() => {
      });
    },
    HandleCanCelExchange(exchangeId){
      apiFactory.callApi(API_TRANSACTION.CANCEL_EXCHANGE + exchangeId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hủy giao dịch thành công!'
          if(this.filter === ''){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getExchanges(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getExchangeWaiting(this.page)
          }
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
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