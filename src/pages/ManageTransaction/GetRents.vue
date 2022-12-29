<template>
  <Side_Bar v-if="userByToken.role == 1">
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <div class="col-lg-6">
          <ExchangeDetailDialog :show="showDialogRD"
                                :cancel="cancelDialogDetail"
                                v-if="showDialogRD" class="modal">
            <table class="table">
              <thead>
              <tr class="header">
                <td>Mã</td>
                <td>Sách</td>
                <td>TT Sách trước GD</td>
                <td>TT Sách sau GD</td>
                <td>Thời gian tạo</td>
                <td>Hạn GD</td>
                <td>Trạng thái</td>
                <td v-if="!showEditRD">Hủy</td>
                <td v-if="showEditRD">Lưu</td>
              </tr>
              </thead>
              <tbody v-for="item of listRentDetail" :key="item.id">
              <tr v-if="!showEditRD">
                <td>{{ item.id}}</td>
                <td style="display: flex; width: 150px;">
                  <img class="imageBook" v-bind:src="item.book.image">
                  <div style="margin-left: 5px;">{{ item.book.title}}</div>
                </td>
                <td v-if="item.beforeStatusBook==null">Chưa cập nhật</td>
                <td v-else>{{ item.beforeStatusBook}}</td>
                <td v-if="item.afterStatusBook==null">Chưa cập nhật</td>
                <td v-else>{{ item.afterStatusBook}}</td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td v-if="item.status == 'Waiting'"><button class="tableBtnAction" v-on:click="HandleCancelRentDetail(item.id, item.rentId)"><Icon icon="mdi:cancel-box"/></button></td>
                <td v-else><button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button></td>

              </tr>
              <tr v-if="showEditRD && item.status != 'Cancel' && item.status != 'Waiting'" >
                <td>{{ item.id}}</td>
                <td style="display: flex; width: 150px;">
                  <img class="imageBook" v-bind:src="item.book.image">
                  <div style="margin-left: 5px;">{{ item.book.title}}</div>
                </td>
                <td><textarea type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" style="width: 200px" v-model="item.beforeStatusBook"></textarea></td>
                <td><textarea type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" style="width: 200px" v-model="item.afterStatusBook"></textarea></td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td><button class="tableBtnAction" v-on:click="editRentDetail(item.id, item.rentId)"><Icon icon="dashicons:cloud-saved"/></button></td>
              </tr>
              </tbody>
            </table>
            <div class="divBtn">
              <button v-if="!showEditRD" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditRD = true">Cập nhật</button>
              <button v-if="showEditRD" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditRD = false">Xong</button>
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
                <td>Hoàn Tiền</td>
              </tr>
              </thead>
              <tbody v-for="item of listRentBills" :key="item.id">
              <tr>
                <td>20{{ item.id}}</td>
                <td>{{item.userId}}/{{item.user.fullname}}</td>
                <td>{{item.totalBook}}</td>
                <td>{{item.depositFee.toLocaleString()}}đ</td>
                <td>{{item.feeId1Navigation.price.toLocaleString()}}đ</td>
                <td v-if="item.feeId3Navigation">{{item.feeId2Navigation.price.toLocaleString()}}đ + {{item.totalBook-1}}x{{item.feeId3Navigation.price}}đ</td>
                <td v-else>{{item.feeId2Navigation.price.toLocaleString()}}đ</td>
                <td>{{item.totalAmount.toLocaleString()}}đ</td>
                <td v-if="item.isPaid"><span class="role paid">ĐÃ THANH TOÁN</span></td>
                <td v-else><span class="role notPaid">CHƯA THANH TOÁN</span></td>
                <td v-if="item.paidDate">{{item.paidDate}}</td>
                <td v-else>Chưa thanh toán</td>
                <td>{{item.payment}}</td>
                <td v-if="item.isRefund"><span class="role paid">ĐÃ HOÀN TIỀN</span></td>
                <td v-else><span class="role notPaid">CHƯA HOÀN TIỀN</span></td>
                <td v-if="item.refundDate">{{item.refundDate}}</td>
                <td v-else>Chưa hoàn tiền</td>
                <td v-if="item.isPaid && !item.isRefund">
                  <button class="tableBtnAction" v-on:click="HandleRefund(item.id, item.rentId)">
                    <Icon icon="ri:refund-2-line"/>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </ExchangeBillDialog>
          <UpdateExchangeDialog :show="showDialogUR" v-if="showDialogUR" class="modal">
            <div class="topDialog">
              <div class="dialogTitle">CẬP NHẬT GIAO DỊCH THUÊ SỐ {{rent.id}}</div>
              <button class="dialogExit" v-on:click="cancelDialogUE">X</button>
            </div>
            <div class="updateBodyRent">
              <label class="labelFee">TT Vận Chuyển: </label>
              <select class="sl" v-model="rent.storageStatus">
                <option v-bind:value="item.id" v-for="item of listStatus" :key="item.id">{{ item.name }}</option>
              </select><br>
              <br>
              <label class="labelFee">Ngày nhận: </label>
              <input v-if="rent.storageStatus == 'Received'" type="date" class="sl" required v-model="rent.receiveDate">
              <input v-else type="date" disabled class="sl" required v-model="rent.receiveDate"><br>
              <br>
              <label class="labelFee">Ngày gửi: </label>
              <input v-if="rent.storageStatus == 'Sent'" type="date" class="sl" required v-model="rent.sendDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.sendDate"><br>
              <br>
              <label class="labelFee">Ngày thu hồi: </label>
              <input v-if="rent.storageStatus == 'Recall'" type="date" class="sl" required v-model="rent.recallDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.recallDate"><br>
              <br>
              <label class="labelFee">Ngày hoàn trả: </label>
              <input v-if="rent.storageStatus == 'Refund'"  type="date" class="sl" required v-model="rent.refundDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.refundDate"><br>
            </div>
            <div  class="divBtn">
              <button v-if="rent.storageStatus == 'Refund'" class="dialogBtn" v-on:click="HandleComplete(rent.id)">Hoàn Thành</button>
              <button v-else  class="dialogBtn" v-on:click="saveUR">Cập Nhật</button>
            </div>
          </UpdateExchangeDialog>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ GIAO DỊCH THUÊ</div>
            <div class="search-transaction">
              <button class="autoTrading" v-on:click="autoTrading">Duyệt GD hợp lệ</button>
              <select class="selectCss" v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
              </select>
              <div>
                <input type="number" v-model="search" placeholder="Nhập mã giao dịch (phần số)">
                <button class="btnSearch" v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
            <div v-if="totalRents==0 && filter == ''" class="table-responsive table-data noResult">
              Không tìm thấy giao dịch tương ứng!
            </div>
            <div v-else class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Mã GD</td>
                  <td>Chủ sách</td>
                  <td>Người mượn</td>
                  <td>Vận đơn</td>
                  <td>Ngày tạo</td>
                  <td>Trạng thái</td>
                  <td>Hóa đơn</td>
                  <td>Cập nhật</td>
                </tr>
                </thead>
                <tbody v-for="item of listRents" :key="item.id">
                <tr>
                  <td style="padding-left: 12px"><button class="tableBtnAction" v-on:click="openDialogDetail(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button></td>
                  <td>T{{ item.id }}</td>
                  <td>{{ item.ownerId }} - {{ item.owner.fullname }}</td>
                  <td>{{ item.renterId }} - {{ item.renter.fullname }}</td>
                  <td v-if="item.storageStatus == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus == 'Received'" ><span class="role tradingStatus">ĐÃ NHẬN - {{item.receiveDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Sent'" ><span class="role tradingStatus">ĐÃ GỬI - {{item.sendDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Recall'" ><span class="role tradingStatus">ĐÃ THU HÔI - {{item.recallDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Refund'" ><span class="role tradingStatus">ĐÃ HOÀN TRẢ - {{item.refundDate|formatDate}}</span></td>
                  <td>{{ item.date | formatDate}}</td>
                  <td v-if="item.status == 'Trading'"><span class="role trading">ĐANG GD</span></td>
                  <td v-if="item.status == 'Complete'"><span class="role complete">HOÀN THÀNH</span></td>
                  <td v-if="item.status == 'Cancel'"><span class="role cancel">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'"><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td>
                    <button class="tableBtnAction" v-on:click="openDialogBill(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button>
                  </td>
                  <td v-if="item.status == 'Waiting'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelRent(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Complete' || item.status == 'Cancel'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Trading'">
                    <button class="tableBtnAction" v-on:click="openDialogUR(item.id)"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelRent(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="paging-transaction">
                <b-pagination v-if="filter==''" class="page-number" @input="getRents" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getRents" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getRentWaiting" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đang Giao Dịch'" class="page-number" @input="getRentTrading" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đã Hoàn Thành'" class="page-number" @input="getRentComplete" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getRentCancel" v-model="page" :total-rows="totalRents"
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
  <Side_BarAdmin v-else>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <div class="col-lg-6">
          <ExchangeDetailDialog :show="showDialogRD"
                                :cancel="cancelDialogDetail"
                                v-if="showDialogRD" class="modal">
            <table class="table">
              <thead>
              <tr class="header">
                <td>Mã</td>
                <td>Sách</td>
                <td>TT Sách trước GD</td>
                <td>TT Sách sau GD</td>
                <td>Thời gian tạo</td>
                <td>Hạn GD</td>
                <td>Trạng thái</td>
                <td v-if="!showEditRD">Hủy</td>
                <td v-if="showEditRD">Lưu</td>
              </tr>
              </thead>
              <tbody v-for="item of listRentDetail" :key="item.id">
              <tr v-if="!showEditRD">
                <td>{{ item.id}}</td>
                <td style="display: flex; width: 150px;">
                  <img class="imageBook" v-bind:src="item.book.image">
                  <div style="margin-left: 5px;">{{ item.book.title}}</div>
                </td>
                <td v-if="item.beforeStatusBook==null">Chưa cập nhật</td>
                <td v-else>{{ item.beforeStatusBook}}</td>
                <td v-if="item.afterStatusBook==null">Chưa cập nhật</td>
                <td v-else>{{ item.afterStatusBook}}</td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td v-if="item.status == 'Waiting'"><button class="tableBtnAction" v-on:click="HandleCancelRentDetail(item.id, item.rentId)"><Icon icon="mdi:cancel-box"/></button></td>
                <td v-else><button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button></td>

              </tr>
              <tr v-if="showEditRD && item.status != 'Cancel' && item.status != 'Waiting'" >
                <td>{{ item.id}}</td>
                <td style="display: flex; width: 150px;">
                  <img class="imageBook" v-bind:src="item.book.image">
                  <div style="margin-left: 5px;">{{ item.book.title}}</div>
                </td>
                <td><textarea type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" style="width: 200px" v-model="item.beforeStatusBook"></textarea></td>
                <td><textarea type="text" maxlength="50" placeholder="Nhập tình trạng sách" class="editInput" style="width: 200px" v-model="item.afterStatusBook"></textarea></td>
                <td>{{ item.requestTime |  format}}</td>
                <td>{{ item.expiredDate |  formatDate}}</td>
                <td v-if="item.status == 'Trading'" ><span class="role trading">ĐANG GD</span></td>
                <td v-if="item.status == 'Complete'" ><span class="role complete">HOÀN THÀNH</span></td>
                <td v-if="item.status == 'Cancel'" ><span class="role cancel">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                <td><button class="tableBtnAction" v-on:click="editRentDetail(item.id, item.rentId)"><Icon icon="dashicons:cloud-saved"/></button></td>
              </tr>
              </tbody>
            </table>
            <div class="divBtn">
              <button v-if="!showEditRD" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditRD = true">Cập nhật</button>
              <button v-if="showEditRD" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router btnUpdate" v-on:click="showEditRD = false">Xong</button>
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
                <td>Hoàn Tiền</td>
              </tr>
              </thead>
              <tbody v-for="item of listRentBills" :key="item.id">
              <tr>
                <td>20{{ item.id}}</td>
                <td>{{item.userId}}/{{item.user.fullname}}</td>
                <td>{{item.totalBook}}</td>
                <td>{{item.depositFee.toLocaleString()}}đ</td>
                <td>{{item.feeId1Navigation.price.toLocaleString()}}đ</td>
                <td v-if="item.feeId3Navigation">{{item.feeId2Navigation.price.toLocaleString()}}đ + {{item.totalBook-1}}x{{item.feeId3Navigation.price}}đ</td>
                <td v-else>{{item.feeId2Navigation.price.toLocaleString()}}đ</td>
                <td>{{item.totalAmount.toLocaleString()}}đ</td>
                <td v-if="item.isPaid"><span class="role paid">ĐÃ THANH TOÁN</span></td>
                <td v-else><span class="role notPaid">CHƯA THANH TOÁN</span></td>
                <td v-if="item.paidDate">{{item.paidDate}}</td>
                <td v-else>Chưa thanh toán</td>
                <td>{{item.payment}}</td>
                <td v-if="item.isRefund"><span class="role paid">ĐÃ HOÀN TIỀN</span></td>
                <td v-else><span class="role notPaid">CHƯA HOÀN TIỀN</span></td>
                <td v-if="item.refundDate">{{item.refundDate}}</td>
                <td v-else>Chưa hoàn tiền</td>
                <td v-if="item.isPaid && !item.isRefund">
                  <button class="tableBtnAction" v-on:click="HandleRefund(item.id, item.rentId)">
                    <Icon icon="ri:refund-2-line"/>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </ExchangeBillDialog>
          <UpdateExchangeDialog :show="showDialogUR" v-if="showDialogUR" class="modal">
            <div class="topDialog">
              <div class="dialogTitle">CẬP NHẬT GIAO DỊCH THUÊ SỐ {{rent.id}}</div>
              <button class="dialogExit" v-on:click="cancelDialogUE">X</button>
            </div>
            <div class="updateBodyRent">
              <label class="labelFee">TT Vận Chuyển: </label>
              <select class="sl" v-model="rent.storageStatus">
                <option v-bind:value="item.id" v-for="item of listStatus" :key="item.id">{{ item.name }}</option>
              </select><br>
              <br>
              <label class="labelFee">Ngày nhận: </label>
              <input v-if="rent.storageStatus == 'Received'" type="date" class="sl" required v-model="rent.receiveDate">
              <input v-else type="date" disabled class="sl" required v-model="rent.receiveDate"><br>
              <br>
              <label class="labelFee">Ngày gửi: </label>
              <input v-if="rent.storageStatus == 'Sent'" type="date" class="sl" required v-model="rent.sendDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.sendDate"><br>
              <br>
              <label class="labelFee">Ngày thu hồi: </label>
              <input v-if="rent.storageStatus == 'Recall'" type="date" class="sl" required v-model="rent.recallDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.recallDate"><br>
              <br>
              <label class="labelFee">Ngày hoàn trả: </label>
              <input v-if="rent.storageStatus == 'Refund'"  type="date" class="sl" required v-model="rent.refundDate">
              <input v-else type="date" class="sl" disabled required v-model="rent.refundDate"><br>
            </div>
            <div  class="divBtn">
              <button v-if="rent.storageStatus == 'Refund'" class="dialogBtn" v-on:click="HandleComplete(rent.id)">Hoàn Thành</button>
              <button v-else  class="dialogBtn" v-on:click="saveUR">Cập Nhật</button>
            </div>
          </UpdateExchangeDialog>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ GIAO DỊCH THUÊ</div>
            <div class="search-transaction">
              <button class="autoTrading" v-on:click="autoTrading">Duyệt GD hợp lệ</button>
              <select class="selectCss" v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
              </select>
              <div>
                <input type="number" v-model="search" placeholder="Nhập mã giao dịch (phần số)">
                <button class="btnSearch" v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
            <div v-if="totalRents==0 && filter == ''" class="table-responsive table-data noResult">
              Không tìm thấy giao dịch tương ứng!
            </div>
            <div v-else class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Mã GD</td>
                  <td>Chủ sách</td>
                  <td>Người mượn</td>
                  <td>Vận đơn</td>
                  <td>Ngày tạo</td>
                  <td>Trạng thái</td>
                  <td>Hóa đơn</td>
                  <td>Cập nhật</td>
                </tr>
                </thead>
                <tbody v-for="item of listRents" :key="item.id">
                <tr>
                  <td style="padding-left: 12px"><button class="tableBtnAction" v-on:click="openDialogDetail(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button></td>
                  <td>T{{ item.id }}</td>
                  <td>{{ item.ownerId }} - {{ item.owner.fullname }}</td>
                  <td>{{ item.renterId }} - {{ item.renter.fullname }}</td>
                  <td v-if="item.storageStatus == 'Waiting'" ><span class="role tradingWaiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.storageStatus == 'Received'" ><span class="role tradingStatus">ĐÃ NHẬN - {{item.receiveDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Sent'" ><span class="role tradingStatus">ĐÃ GỬI - {{item.sendDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Recall'" ><span class="role tradingStatus">ĐÃ THU HÔI - {{item.recallDate|formatDate}}</span></td>
                  <td v-if="item.storageStatus == 'Refund'" ><span class="role tradingStatus">ĐÃ HOÀN TRẢ - {{item.refundDate|formatDate}}</span></td>
                  <td>{{ item.date | formatDate}}</td>
                  <td v-if="item.status == 'Trading'"><span class="role trading">ĐANG GD</span></td>
                  <td v-if="item.status == 'Complete'"><span class="role complete">HOÀN THÀNH</span></td>
                  <td v-if="item.status == 'Cancel'"><span class="role cancel">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'"><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td>
                    <button class="tableBtnAction" v-on:click="openDialogBill(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button>
                  </td>
                  <td v-if="item.status == 'Waiting'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelRent(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Complete' || item.status == 'Cancel'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Trading'">
                    <button class="tableBtnAction" v-on:click="openDialogUR(item.id)"><Icon icon="material-symbols:edit-document-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleCanCelRent(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="paging-transaction">
                <b-pagination v-if="filter==''" class="page-number" @input="getRents" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getRents" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getRentWaiting" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đang Giao Dịch'" class="page-number" @input="getRentTrading" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đã Hoàn Thành'" class="page-number" @input="getRentComplete" v-model="page" :total-rows="totalRents"
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
                <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getRentCancel" v-model="page" :total-rows="totalRents"
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
  </Side_BarAdmin>
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
import Side_BarAdmin from "@/components/Side_BarAdmin";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "GetExchanges",
  components: {Side_Bar,Dashboard, LoadingDialog, ExchangeDetailDialog, Side_BarAdmin, ExchangeBillDialog, UpdateExchangeDialog, Icon},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,

      listRents: '',
      totalRents: '',
      listRentDetail: '',
      listRentBills: '',
      rent: '',
      search: '',
      isSearch: '',
      spinner: false,
      filter: 'Tất Cả',
      listFilter: ['Tất Cả', 'Đang Đợi', 'Đang Giao Dịch', 'Đã Hoàn Thành', 'Đã Hủy'],
      listStatus: [{id: 'Waiting', name: 'Đang Đợi'},{id: 'Received', name: 'Đã Nhận'},{id: 'Sent', name: 'Đã Gửi'},{id: 'Recall', name: 'Đã Thu Hồi'},{id: 'Refund', name: 'Đã Hoàn Trả'}],
      page: '',
      showDialogRD: false,
      showDialogBD: false,
      showDialogUR: false,
      showEditRD: false,
      beforeStatusBook: '',
      afterStatusBook: '',
      userByToken: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    let token = this.$cookies.get('token');
    this.userByToken = VueJwtDecode.decode(token, 'utf-8');
    if(this.userByToken.role == 3){
      this.$router.push({name: "404Page"})
    }
    this.isSearch = false
    this.getRents(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getRents(1)
      }
      if(e.target.value=== 'Đang Đợi'){
        this.getRentWaiting(1)
      }
      if(e.target.value === 'Đang Giao Dịch'){
        this.getRentTrading(1)
      }
      if(e.target.value === 'Đã Hoàn Thành'){
        this.getRentComplete(1)
      }
      if(e.target.value === 'Đã Hủy'){
        this.getRentCancel(1)
      }
    },
    getRents(pageNumber) {
      if(this.isSearch){
        apiFactory.callApi(API_MANAGE_TRANSACTION.SEARCH_RENT + pageNumber, 'POST', {
          id: this.search
        }).then((res) => {
          this.listRents = res.data.data
          this.totalRents = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_RENT + pageNumber, 'GET', {}).then((res) => {
          this.listRents = res.data.data
          this.totalRents = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }
    },
    getRentWaiting(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.WAITING_RENT + pageNumber, 'GET', {}).then((res) => {
        this.listRents = res.data.data
        this.totalRents = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getRentTrading(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.TRADING_RENT + pageNumber, 'GET', {}).then((res) => {
        this.listRents = res.data.data
        this.totalRents = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getRentComplete(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.COMPLETE_RENT + pageNumber, 'GET', {}).then((res) => {
        this.listRents = res.data.data
        this.totalRents = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getRentCancel(pageNumber){
      apiFactory.callApi(API_MANAGE_TRANSACTION.CANCEL_RENT + pageNumber, 'GET', {}).then((res) => {
        this.listRents = res.data.data
        this.totalRents = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getRentDetail(rentId){
      this.listRentDetail = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.DETAIL_RENT + rentId, 'GET', {}).then((res) => {
        this.listRentDetail = res.data.data
      }).catch(() => {
      });
    },
    getRentBill(rentId){
      this.listRentBills = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.BILL_RENT + rentId, 'GET', {}).then((res) => {
        this.listRentBills = res.data.data
      }).catch(() => {
      });
    },
    getRentById(rentId){
      this.rent = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.RENT_BYID + rentId, 'GET', {}).then((res) => {
        this.rent = res.data.data
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
      return this.getRents(1)
    },
    HandleTrading(rentId){
      apiFactory.callApi(API_MANAGE_TRANSACTION.HANDLE_TRADE_RENT + rentId, 'PUT', {}).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          if(this.filter === ''){
            this.getRents(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getRents(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getRentWaiting(this.page)
          }
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleComplete(rentId){
      apiFactory.callApi(API_MANAGE_TRANSACTION.HANDLE_COMPLETE_RENT + rentId, 'PUT', {}).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          this.saveUR()
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    openDialogDetail(rentId){
      this.showDialogRD = true;
      this.getRentDetail(rentId)
    },
    cancelDialogDetail(){
      this.showDialogRD = false;
    },
    openDialogBill(rentId){
      this.showDialogBD = true;
      this.getRentBill(rentId)
    },
    cancelDialogBill(){
      this.showDialogBD = false;
    },
    openDialogUR(rentId){
      this.getRentById(rentId)
      this.showDialogUR = true;
    },
    cancelDialogUE(){
      this.showDialogUR = false;
    },
    saveUR(){
      apiFactory.callApi(API_MANAGE_TRANSACTION.UPDATE_STATUS_RENT + this.rent.id, 'PUT', {
        storageStatus: this.rent.storageStatus,
        sendDate: this.rent.sendDate,
        receiveDate: this.rent.receiveDate,
        recallDate: this.rent.recallDate,
        refundDate: this.rent.refundDate
      }).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật giao dịch thành công!'
          if(this.filter === ''){
            this.getRents(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getRents(this.page)
          }
          if(this.filter === 'Đang Giao Dịch'){
            this.getRentTrading(this.page)
          }
          this.showDialogUR = false
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
      this.showDialogUE = false;
    },
    editRentDetail(rentDetailId, rentId){
      const item = this.listRentDetail.filter(list => list.id == rentDetailId)
      apiFactory.callApi(API_MANAGE_TRANSACTION.UPDATE_DETAIL_RENT + rentDetailId, 'PUT', {
        beforeStatusBook: item[0].beforeStatusBook,
        afterStatusBook:  item[0].afterStatusBook,
      }).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật chi tiết giao dịch thành công!'
          this.getRentDetail(rentId)
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleCancelRentDetail(rentDetailId, rentId){
      apiFactory.callApi(API_TRANSACTION.CANCEL_RENT_DETAIL + rentDetailId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getRentDetail(rentId)
        }
      }).catch(() => {
      });
    },
    HandleRefund(billId, rentId){
      apiFactory.callApi(API_MANAGE_TRANSACTION.UPDATE_REFUND_RENT + billId, 'PUT', {}).then((res) => {
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Cập nhật trạng thái hoàn tiền thành công!'
          this.getRentBill(rentId)
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleCanCelRent(rentId){
      apiFactory.callApi(API_TRANSACTION.CANCEL_RENT + rentId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hủy giao dịch thành công!'
          if(this.filter === ''){
            this.getRents(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getRents(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getRentWaiting(this.page)
          }
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
        alert('Không thành công!')
      });
    },
    autoTrading(){
      apiFactory.callApi(API_MANAGE_TRANSACTION.AUTO_TRADING_RENT, 'PUT', {
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Tụ động duyệt giao dịch thành công!'
          if(this.filter === ''){
            this.getRents(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getRents(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getRentWaiting(this.page)
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

.search-transaction .btnSearch {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-transaction .btnSearch:hover {
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

.autoTrading{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 150px;
}

.autoTrading:hover{
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}


</style>