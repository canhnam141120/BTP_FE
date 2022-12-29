<template>
  <Layout>
    <main style="flex-grow: 1">
      <LoadingDialog v-show="spinner" style="z-index: 999999"></LoadingDialog>
      <ExchangeDetailDialog :show="showDialogED"
                            :cancel="cancelDialogExchangeDetail"
                            v-if="showDialogED" class="modal">
        <table class="table">
          <thead>
          <tr>
            <td>Sách 1</td>
            <td>Sách 1 trước GD</td>
            <td>Sách 1 sau GD</td>
            <td>Sách 2</td>
            <td>Sách 2 trước GD</td>
            <td>Sách 2 sau GD</td>
            <td>Thời gian tạo</td>
            <td>Hạn GD</td>
            <td>Trạng thái</td>
            <td></td>
          </tr>
          </thead>
          <tbody v-for="item of listExchangeDetail" :key="item.id">
          <tr class="rowData">
            <td style="display: flex; width: 150px;">
              <img class="imageBook" v-bind:src="item.book1.image">
              <div style="margin-left: 5px;">{{ item.book1.title }}</div>
            </td>
            <td v-if="item.beforeStatusBook1==null">Chưa cập nhật</td>
            <td v-else>{{ item.beforeStatusBook1 }}</td>
            <td v-if="item.afterStatusBook1==null">Chưa cập nhật</td>
            <td v-else>{{ item.afterStatusBook1 }}</td>
            <td style="display: flex; width: 150px;">
              <img class="imageBook" v-bind:src="item.book2.image">
              <div style="margin-left: 5px;">{{ item.book2.title }}</div>
            </td>
            <td v-if="item.beforeStatusBook2==null">Chưa cập nhật</td>
            <td v-else>{{ item.beforeStatusBook2 }}</td>
            <td v-if="item.afterStatusBook2==null">Chưa cập nhật</td>
            <td v-else>{{ item.afterStatusBook2 }}</td>
            <td>{{ item.requestTime |  format }}</td>
            <td>{{ item.expiredDate |  formatDate }}</td>
            <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
            <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
            <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
            <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
            <td v-if="item.status == 'Waiting'">
              <button class="tableBtn" v-on:click="CancelExchangeDetail(item.id, item.exchangeId)">
                <Icon icon="material-symbols:cancel-presentation"/>
              </button>
            </td>
            <td v-if="item.status == 'Complete'">
              <button v-if="userByToken.UserId == tmpUserId" class="tableBtn" v-on:click="FeedbackBook(item.book2Id)">
                <Icon icon="mdi:feedback"/>
              </button>
              <button v-else class="tableBtn" v-on:click="FeedbackBook(item.book1Id)">
                <Icon icon="mdi:feedback"/>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </ExchangeDetailDialog>
      <BillDialog :show="showDialogEB"
                  :cancel="cancelDialogExchangeBill"
                  :pay="payExchange"
                  v-if="showDialogEB" class="modal">
        <div class="topDialog">
          <div class="dialogTitle">HÓA ĐƠN GIAO DỊCH</div>
          <button class="dialogExit" v-on:click="cancelDialogExchangeBill">X</button>
        </div>
        <div style="padding-bottom: 10px">
          <table style="border-spacing: 0;border-collapse: collapse; margin-right: auto">
            <tr style="height: 50px">
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;
                  vertical-align: middle; text-align: center; width: 60px;">
                <div style="font-weight: bold; font-size: 13px">Mã GD</div>
                <div style="font-size: 11px; margin-bottom: 5px">10{{ billExchange.exchangeId }}</div>
              </td>
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 380px;">
                <div style="font-weight: bold; font-size: 17px; text-align: center">HÓA ĐƠN GIAO DỊCH
                </div>
                <div style="font-size: 13px; text-align: center">Mã hóa đơn: {{ billExchange.id }}
                </div>
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Tổng số lượng sách GD (cuốn)</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billExchange.totalBook }}
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí đặt cọc</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billExchange.depositFee.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí ship</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billExchange.feeId1Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí dịch vụ</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 50px;">
                {{ billExchange.feeId2Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí dịch vụ với mỗi cuốn sách thêm</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billExchange.totalBook - 1 }} x {{ billExchange.feeId3Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Tổng tiền</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billExchange.totalAmount.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="6" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div v-if="billExchange.isPaid">
                  <div style="font-size: 13px;">Trạng thái Thanh toán: Đã thanh toán</div>
                  <div style="font-size: 13px;">Thanh toán lúc: {{ billExchange.paidDate | format }}</div>
                  <div style="font-size: 13px;">Phương thức: {{ billExchange.payments }}</div>
                </div>
                <div v-else>
                  <div style="font-size: 13px;">Trạng thái thanh toán: Chưa thanh toán</div>
                </div>

                <div v-if="billExchange.isRefund">
                  <div style="font-size: 13px;">Trạng thái Hoàn tiền: Đã hoàn tiền</div>
                  <div style="font-size: 13px;">Ngày hoàn tiền: {{ billExchange.refundDate | formatDate }}</div>
                </div>
                <div v-else style="font-size: 13px;">Trạng thái hoàn tiền: Chưa hoàn tiền</div>
              </td>
            </tr>
          </table>
        </div>
        <div v-if="!billExchange.isPaid" class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="payExchange(billExchange.id)">Thanh toán</button>
        </div>
      </BillDialog>
      <ExchangeDetailDialog :show="showDialogRD"
                            :cancel="cancelDialogRentDetail"
                            v-if="showDialogRD" class="modal">
        <table class="table">
          <thead>
          <tr>
            <td>Sách</td>
            <td>Sách trước GD</td>
            <td>Sách sau GD</td>
            <td>Thời gian tạo</td>
            <td>Hạn GD</td>
            <td>Trạng thái</td>
            <td></td>
          </tr>
          </thead>
          <tbody v-for="item of listRentDetail" :key="item.id">
          <tr class="rowData">
            <td style="display: flex; width: 150px;">
              <img class="imageBook" v-bind:src="item.book.image">
              <div style="margin-left: 5px;">{{ item.book.title }}</div>
            </td>
            <td v-if="item.beforeStatusBook==null">Chưa cập nhật</td>
            <td v-else>{{ item.beforeStatusBook }}</td>
            <td v-if="item.afterStatusBook==null">Chưa cập nhật</td>
            <td v-else>{{ item.afterStatusBook }}</td>
            <td>{{ item.requestTime |  format }}</td>
            <td>{{ item.expiredDate |  formatDate }}</td>
            <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
            <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
            <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
            <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
            <td v-if="item.status == 'Waiting'">
              <button class="tableBtn" v-on:click="CancelRentDetail(item.id, item.rentId)">
                <Icon icon="material-symbols:cancel-presentation"/>
              </button>
            </td>
            <td v-if="item.status == 'Complete'">
              <button v-if="userByToken.UserId == tmpUserId" class="tableBtn" v-on:click="FeedbackBook(item.bookId)">
                <Icon icon="mdi:feedback"/>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </ExchangeDetailDialog>
      <FeedbackDialog :show="showDialogFeedback"
                      :cancel="cancelDialogFeedback"
                      :feedback="feedback"
                      v-if="showDialogFeedback" class="modal">
        <div class="topDialog">
          <div class="dialogTitle">ĐÁNH GIÁ SÁCH</div>
          <button class="dialogExit" v-on:click="cancelDialogFeedback">X</button>
        </div>
        <div>
          <textarea class="inputFB" type="text" required placeholder="Nhập đánh giá của bạn"
                    v-model="feedbackContent"></textarea>
        </div>
        <div class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="feedback">Đánh giá</button>
        </div>
      </FeedbackDialog>
      <BillDialog :show="showDialogRB"
                  :cancel="cancelDialogRentBill"
                  :pay="payRent"
                  v-if="showDialogRB" class="modal">
        <div class="topDialog">
          <div class="dialogTitle">HÓA ĐƠN GIAO DỊCH</div>
          <button class="dialogExit" v-on:click="cancelDialogRentBill">X</button>
        </div>
        <div style="padding-bottom: 10px">
<!--          <div>Hóa đơn số: </div>
          <div>Giao dịch: {{ billRent.rentId }}</div>
          <div>Số lượng sách giao dịch: {{ billRent.totalBook }}</div>
          <div>Phí đặt cọc: {{ billRent.depositFee.toLocaleString() }}đ</div>
          <div>Phí thuê:</div>
          <div>Phí ship: {{ billRent.feeId1Navigation.price.toLocaleString() }}đ</div>
          <div v-if="billRent.feeId3 != 0">Phí dịch vụ: {{ billRent.feeId2Navigation.price.toLocaleString() }}đ +
            {{ billRent.totalBook - 1 }} x {{ billRent.feeId3Navigation.price.toLocaleString() }}đ
          </div>
          <div v-else>Phí dịch vụ: {{ billRent.feeId2Navigation.price.toLocaleString() }}đ</div>
          <div>Tổng chi phí: {{ billRent.totalAmount.toLocaleString() }}đ</div>
          <div v-if="billRent.isPaid">
            <div>TT Thanh toán: Đã thanh toán</div>
            <div>Thanh toán lúc: {{ billRent.paidDate | format }}</div>
            <div>Phương thức: {{ billRent.payment }}</div>
          </div>
          <div v-else>Trạng thái thanh toán: Chưa thanh toán</div>
          <div v-if="billRent.isRefund">
            <div>TT Hoàn tiền: Đã hoàn tiền</div>
            <div>Ngày hoàn tiền: {{ billRent.refundDate | formatDate }}</div>
          </div>-->
          <table style="border-spacing: 0;border-collapse: collapse; margin-right: auto">
            <tr style="height: 50px">
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;
                  vertical-align: middle; text-align: center; width: 60px;">
                <div style="font-weight: bold; font-size: 13px">Mã GD</div>
                <div style="font-size: 11px; margin-bottom: 5px">20{{ billRent.rentId }}</div>
              </td>
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 380px;">
                <div style="font-weight: bold; font-size: 17px; text-align: center">HÓA ĐƠN GIAO DỊCH
                </div>
                <div style="font-size: 13px; text-align: center">Mã hóa đơn: {{ billRent.id }}
                </div>
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Tổng số lượng sách GD</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.totalBook }} cuốn
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí đặt cọc</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.depositFee.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí thuê</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.rentFee.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí ship</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.feeId1Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí dịch vụ</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 50px;">
                {{ billRent.feeId2Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Phí dịch vụ với mỗi cuốn sách thêm</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.totalBook - 1 }} x {{ billRent.feeId3Navigation.price.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="5" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div style="font-size: 13px;">Tổng tiền</div>
              </td>
              <td colspan="1" rowspan="1"
                  style="padding: 4px;border: 1px solid black;font-size: 13px;vertical-align: middle;width: 150px;">
                {{ billRent.totalAmount.toLocaleString() }}đ
              </td>
            </tr>
            <tr style="height: 20px">
              <td colspan="6" rowspan="1"
                  style="padding: 4px;border: 1px solid black;vertical-align: middle;width: 50px;">
                <div v-if="billRent.isPaid">
                  <div style="font-size: 13px;">Trạng thái Thanh toán: Đã thanh toán</div>
                  <div style="font-size: 13px;">Thanh toán lúc: {{ billRent.paidDate | format }}</div>
                  <div style="font-size: 13px;">Phương thức: {{ billRent.payments }}</div>
                </div>
                <div v-else>
                  <div style="font-size: 13px;">Trạng thái thanh toán: Chưa thanh toán</div>
                </div>
                <div v-if="billRent.isRefund">
                  <div style="font-size: 13px;">Trạng thái hoàn tiền: Đã hoàn tiền</div>
                  <div style="font-size: 13px;">Ngày hoàn tiền: {{ billRent.refundDate | formatDate }}</div>
                </div>
                <div v-else style="font-size: 13px;">Trạng thái hoàn tiền: Chưa hoàn tiền</div>
              </td>
            </tr>
          </table>
        </div>

        <div v-if="!billRent.isPaid" class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="payRent(billRent.id)">Thanh toán</button>
        </div>
      </BillDialog>
      <ConfirmDialog :show="showConfirmDialogCancelExchange" v-if="showConfirmDialogCancelExchange" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận hủy giao dịch đổi này?</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogCancelExchange">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmCancelExchange">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogCancelRent" v-if="showConfirmDialogCancelRent" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận hủy giao dịch thuê này?</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogCancelRent">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmCancelRent">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogCancelExchangeDetail" v-if="showConfirmDialogCancelExchangeDetail"
                     class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận hủy chi tiết giao dịch đổi này?</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogCancelExchangeDetail">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmCancelExchangeDetail">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogCancelRentDetail" v-if="showConfirmDialogCancelRentDetail" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận hủy chi tiết giao dịch thuê này?</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogCancelRentDetail">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmCancelRentDetail">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogPayExchange" v-if="showConfirmDialogPayExchange" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận thanh xoán giao dịch trao đổi!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogPayExchange">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmPayExchange">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogPayRent" v-if="showConfirmDialogPayRent" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận thanh toán giao dịch thuê!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogPayRent">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmPayRent">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <b-alert style="position: absolute; right: 0; z-index: 999999" v-if="responseFlag" :show="dismissCountDown"
               variant="success" @dismissed="dismissCountDown=0"
               @dismiss-count-down="countDownChanged">
        {{ responseMessage }}
      </b-alert>
      <b-alert style="position: absolute; right: 0; z-index: 999999" v-else :show="dismissCountDown" variant="danger"
               @dismissed="dismissCountDown=0"
               @dismiss-count-down="countDownChanged">
        {{ responseMessage }}
      </b-alert>
      <div class="MT">
        <div class="containerMT">
          <div class="left-contentMT">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMT">
            <div class="titleMT">DANH SÁCH GIAO DỊCH</div>
            <hr>
            <b-card card class="background-tab">
              <b-tabs active-nav-item-class="font-weight-bold"
                      active-tab-class="font-weight-bold"
                      content-class="mt-3">
                <b-tab title="Trao đổi" active>
                  <div class="searchMP">
                    <select class="selectCss" v-model="filterExchange" @change="onchangeExchange($event)">
                      <option v-bind:value="item" v-for="item of listFilterExchange" :key="item">{{ item }}</option>
                    </select>
                    <div>
                      <input class="inputMP" type="text" v-model="searchExchange" placeholder="Nhập mã giao dịch">
                      <button class="btnMP" v-on:click="SearchExchange">Tìm</button>
                    </div>
                  </div>
                  <div v-if="listExchanges != ''" class="listTrans">
                    <table class="table">
                      <thead>
                      <tr>
                        <td>Chi tiết</td>
                        <td>Mã GD</td>
                        <td>TT Vận đơn</td>
                        <td>Đối tác</td>
                        <td>TT Vận đơn đối tác</td>
                        <td>Ngày tạo</td>
                        <td>Trạng thái</td>
                        <td>Hóa đơn</td>
                        <td>Hủy</td>
                      </tr>
                      </thead>
                      <tbody v-for="item of listExchanges" :key="item.id">
                      <tr v-if="filterDataExchange && item.status == filterDataExchange" class="rowData">
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeDetail(item.id, item.userId1 )">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>

                        <td v-if="userByToken.UserId == item.userId1">
                          {{ item.userId2 }}/{{ item.userId2Navigation.fullname }}
                        </td>
                        <td v-else>{{ item.userId1 }}/{{ item.userId1Navigation.fullname }}</td>

                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>

                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status === 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status === 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status === 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status === 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td class="tdBtn">
                          <button v-if="item.status === 'Waiting'" class="tableBtn"
                                  v-on:click="CancelExchange(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="!filterDataExchange" class="rowData">
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeDetail(item.id, item.userId1 )">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>

                        <td v-if="userByToken.UserId == item.userId1">
                          {{ item.userId2 }}/{{ item.userId2Navigation.fullname }}
                        </td>
                        <td v-else>{{ item.userId1 }}/{{ item.userId1Navigation.fullname }}</td>

                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>

                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td class="tdBtn">
                          <button v-if="item.status == 'Waiting'" class="tableBtn" v-on:click="CancelExchange(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="filterDataExchange == 'Search' && item.id == searchExchange" class="rowData">
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeDetail(item.id, item.userId1 )">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>

                        <td v-if="userByToken.UserId == item.userId1">
                          {{ item.userId2 }}/{{ item.userId2Navigation.fullname }}
                        </td>
                        <td v-else>{{ item.userId1 }}/{{ item.userId1Navigation.fullname }}</td>

                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Sent'">ĐÃ GỬI -
                          {{ item.sendDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Received'">ĐÃ NHẬN -
                          {{ item.receiveDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Recall'">ĐÃ THU HỒI -
                          {{ item.recallDate1 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId1 && item.storageStatus2 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate2 | formatDate }}
                        </td>
                        <td v-if="userByToken.UserId == item.userId2 && item.storageStatus1 == 'Refund'">ĐÃ HOÀN TRẢ -
                          {{ item.refundDate1 | formatDate }}
                        </td>

                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td class="tdBtn">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogExchangeBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td class="tdBtn">
                          <button v-if="item.status == 'Waiting'" class="tableBtn" v-on:click="CancelExchange(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else class="noBook">Danh sách trống!</div>
                </b-tab>
                <b-tab title="Thuê">
                  <div class="searchMP">
                    <select class="selectCss" v-model="filterRent" @change="onchangeRent($event)">
                      <option v-bind:value="item" v-for="item of listFilterRent" :key="item">{{ item }}</option>
                    </select>
                    <div>
                      <input class="inputMP" type="text" v-model="searchRent" placeholder="Nhập mã giao dịch">
                      <button class="btnMP" v-on:click="SearchRent">Tìm</button>
                    </div>
                  </div>
                  <div v-if="listRents != ''" class="listTrans">
                    <table class="table">
                      <thead>
                      <tr>
                        <td>Chi tiết</td>
                        <td>Mã GD</td>
                        <td>Đối tác</td>
                        <td>TT Vận đơn</td>
                        <td>Ngày tạo</td>
                        <td>Trạng thái</td>
                        <td>Hóa đơn</td>
                        <td>Hủy</td>
                      </tr>
                      </thead>
                      <tbody v-for="item of listRents" :key="item.id">
                      <tr v-if="filterDataRent && item.status == filterDataRent" class="rowData">
                        <td style="padding-left: 10px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentDetail(item.id, item.renterId)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.renterId">{{ item.ownerId }}/{{ item.owner.fullname }}</td>
                        <td v-else>{{ item.renterId }}/{{ item.renter.fullname }}</td>

                        <td v-if="item.storageStatus == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="item.storageStatus == 'Sent'">ĐÃ GỬI - {{ item.sendDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Received'">ĐÃ NHẬN - {{ item.receiveDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Recall'">ĐÃ THU HỒI - {{ item.recallDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Refund'">ĐÃ HOÀN TRẢ - {{ item.refundDate | formatDate }}</td>
                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td style="padding-left: 16px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td style="padding-left: 3px">
                          <button v-if="item.status == 'Waiting'" class="tableBtn" v-on:click="CancelRent(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="!filterDataRent" class="rowData">
                        <td style="padding-left: 10px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentDetail(item.id, item.renterId)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.renterId">{{ item.ownerId }}/{{ item.owner.fullname }}</td>
                        <td v-else>{{ item.renterId }}/{{ item.renter.fullname }}</td>

                        <td v-if="item.storageStatus == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="item.storageStatus == 'Sent'">ĐÃ GỬI - {{ item.sendDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Received'">ĐÃ NHẬN - {{ item.receiveDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Recall'">ĐÃ THU HỒI - {{ item.recallDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Refund'">ĐÃ HOÀN TRẢ - {{ item.refundDate | formatDate }}</td>
                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td style="padding-left: 16px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td style="padding-left: 3px">
                          <button v-if="item.status == 'Waiting'" class="tableBtn" v-on:click="CancelRent(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      <tr v-if="filterDataRent == 'Search' && item.id == searchRent" class="rowData">
                        <td style="padding-left: 10px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentDetail(item.id, item.renterId)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td>{{ item.id }}</td>
                        <td v-if="userByToken.UserId == item.renterId">{{ item.ownerId }}/{{ item.owner.fullname }}</td>
                        <td v-else>{{ item.renterId }}/{{ item.renter.fullname }}</td>

                        <td v-if="item.storageStatus == 'Waiting'">ĐANG ĐỢI</td>
                        <td v-if="item.storageStatus == 'Sent'">ĐÃ GỬI - {{ item.sendDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Received'">ĐÃ NHẬN - {{ item.receiveDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Recall'">ĐÃ THU HỒI - {{ item.recallDate | formatDate }}</td>
                        <td v-if="item.storageStatus == 'Refund'">ĐÃ HOÀN TRẢ - {{ item.refundDate | formatDate }}</td>
                        <td>{{ item.date | formatDate }}</td>
                        <td v-if="item.status == 'Trading'"><label class="trading">ĐANG GD</label></td>
                        <td v-if="item.status == 'Complete'"><label class="complete">HOÀN THÀNH</label></td>
                        <td v-if="item.status == 'Cancel'"><label class="cancel">ĐÃ HỦY</label></td>
                        <td v-if="item.status == 'Waiting'"><label class="waiting">ĐANG ĐỢI</label></td>
                        <td style="padding-left: 16px">
                          <button class="tableBtn" v-if="item.status !== 'Cancel'"
                                  v-on:click="openDialogRentBill(item.id)">
                            <Icon icon="ic:baseline-remove-red-eye"/>
                          </button>
                        </td>
                        <td style="padding-left: 3px">
                          <button v-if="item.status === 'Waiting'" class="tableBtn" v-on:click="CancelRent(item.id)">
                            <Icon icon="material-symbols:cancel-presentation"/>
                          </button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else class="noBook">Danh sách trống!</div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_MANAGE_TRANSACTION, API_PERSONAL, API_TRANSACTION} from "@/constant/constant-api";
import VueJwtDecode from "vue-jwt-decode";
import BillDialog from "@/pages/Personal/BillDialog";
import {Icon} from '@iconify/vue2';
import LoadingDialog from "@/components/LoadingDialog";
import ExchangeDetailDialog from "@/pages/ManageTransaction/ExchangeDetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import FeedbackDialog from "@/pages/Personal/FeedbackDialog";

export default {
  name: "MyTransaction",
  components: {
    SideBar_Personal,
    Layout,
    BillDialog,
    Icon,
    FeedbackDialog,
    LoadingDialog,
    ExchangeDetailDialog,
    ConfirmDialog
  },
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      userByToken: '',
      spinner: false,
      showConfirmDialogCancelExchange: false,
      showConfirmDialogCancelRent: false,
      showConfirmDialogCancelExchangeDetail: false,
      showConfirmDialogCancelRentDetail: false,
      showConfirmDialogPayExchange: false,
      showConfirmDialogPayRent: false,
      showDialogFeedback: false,
      feedbackContent: '',
      tmpId: '',
      tmpId2: '',

      listExchanges: '',
      totalExchanges: '',
      listExchangeDetail: '',
      billExchange: '',
      filterExchange: 'Tất Cả',
      listFilterExchange: ['Tất Cả', 'Đang Đợi', 'Đang Giao Dịch', 'Đã Hoàn Thành', 'Đã Hủy'],
      filterDataExchange: '',
      searchExchange: '',
      pageExchange: 1,
      showDialogEB: false,
      showDialogED: false,
      tmpUserId: '',

      listRents: '',
      totalRents: '',
      listRentDetail: '',
      billRent: '',
      filterRent: 'Tất Cả',
      listFilterRent: ['Tất Cả', 'Đang Đợi', 'Đang Giao Dịch', 'Đã Hoàn Thành', 'Đã Hủy'],
      filterDataRent: '',
      searchRent: '',
      pageRent: 1,
      showDialogRB: false,
      showDialogRD: false,
    }
  },
  created() {
    if (!this.$cookies.get('token')) {
      this.$router.push({name: "404Page"})
    }
    this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
    this.getExchanges()
    this.getRents()
  },
  methods: {
    onchangeExchange(e) {
      if (e.target.value === 'Tất Cả') {
        this.filterDataExchange = ''
      }
      if (e.target.value === 'Đang Đợi') {
        this.filterDataExchange = 'Waiting'
      }
      if (e.target.value === 'Đang Giao Dịch') {
        this.filterDataExchange = 'Trading'
      }
      if (e.target.value === 'Đã Hoàn Thành') {
        this.filterDataExchange = 'Complete'
      }
      if (e.target.value === 'Đã Hủy') {
        this.filterDataExchange = 'Cancel'
      }
    },
    getExchanges() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_EXCHANGE, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listExchanges = res.data.data

      }).catch(() => {
      });
    },
    getExchangeDetail(exchangeId) {
      this.listExchangeDetail = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.DETAIL_EXCHANGE + exchangeId, 'GET', {}).then((res) => {
        this.listExchangeDetail = res.data.data
      }).catch(() => {
      });
    },
    openDialogExchangeDetail(exchangeId, user1Id) {
      this.tmpUserId = user1Id
      this.showDialogED = true
      this.getExchangeDetail(exchangeId)
    },
    cancelDialogExchangeDetail() {
      this.showDialogED = false;
    },
    CancelExchangeDetail(exchangeDetailId, exchangeId) {
      this.tmpId = exchangeDetailId
      this.tmpId2 = exchangeId
      this.showConfirmDialogCancelExchangeDetail = true
    },
    cancelConfirmDialogCancelExchangeDetail() {
      this.showConfirmDialogCancelExchangeDetail = false
    },
    HandleConfirmCancelExchangeDetail() {
      this.responseMessage = ''
      this.spinner = true
      apiFactory.callApi(API_TRANSACTION.CANCEL_EXCHANGE_DETAIL + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getExchangeDetail(this.tmpId2)
        }
        this.showConfirmDialogCancelExchangeDetail = false
        this.spinner = false
      }).catch(() => {
      });
    },


    CancelExchange(exchangeId) {
      this.tmpId = exchangeId
      this.showConfirmDialogCancelExchange = true
    },
    cancelConfirmDialogCancelExchange() {
      this.showConfirmDialogCancelExchange = false
    },
    HandleConfirmCancelExchange() {
      this.responseMessage = ''
      this.spinner = true
      apiFactory.callApi(API_TRANSACTION.CANCEL_EXCHANGE + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hủy giao dịch đổi thành công!'
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.getExchanges()
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogCancelExchange = false
        this.spinner = false
      }).catch(() => {
      });
    },
    SearchExchange() {
      if (this.searchExchange) {
        this.filterExchange = ''
        this.filterDataExchange = 'Search'
      } else {
        this.filterExchange = 'Tất Cả'
        this.filterDataExchange = ''
      }
      this.getExchanges()
    },
    getExchangeBill(billId) {
      this.billExchange = ''
      const url = API_PERSONAL.BILL_EXCHANGE + billId
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.billExchange = res.data.data
      }).catch(() => {
      });
    },
    openDialogExchangeBill(billId) {
      this.getExchangeBill(billId)
      this.showDialogEB = true
    },
    cancelDialogExchangeBill() {
      this.showDialogEB = false
    },
    payExchange(billId) {
      this.tmpId = billId
      this.showConfirmDialogPayExchange = true
    },
    cancelConfirmDialogPayExchange() {
      this.showConfirmDialogPayExchange = false
    },
    HandleConfirmPayExchange() {
      this.responseFlag = ''
      apiFactory.callApi(API_TRANSACTION.CREATE_URL_PAY + this.tmpId, 'POST', {}).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          let url = res.data.data
          window.location.href = url;
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogPayExchange = false
      }).catch(() => {
      });
    },

    onchangeRent(e) {
      if (e.target.value === 'Tất Cả') {
        this.filterDataRent = ''
      }
      if (e.target.value === 'Đang Đợi') {
        this.filterDataRent = 'Waiting'
      }
      if (e.target.value === 'Đang Giao Dịch') {
        this.filterDataRent = 'Trading'
      }
      if (e.target.value === 'Đã Hoàn Thành') {
        this.filterDataRent = 'Complete'
      }
      if (e.target.value === 'Đã Hủy') {
        this.filterDataRent = 'Cancel'
      }
    },
    getRents() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_RENT, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listRents = res.data.data
      }).catch(() => {
      });
    },
    getRentDetail(rentId) {
      this.listExchangeDetail = ''
      apiFactory.callApi(API_MANAGE_TRANSACTION.DETAIL_RENT + rentId, 'GET', {}).then((res) => {
        this.listRentDetail = res.data.data
      }).catch(() => {
      });
    },
    openDialogRentDetail(rentId) {
      this.tmpUserId =
          this.showDialogRD = true;
      this.getRentDetail(rentId)
    },
    cancelDialogRentDetail() {
      this.showDialogRD = false;
    },
    CancelRentDetail(rentDetailId, rentId) {
      this.tmpId = rentDetailId
      this.tmpId2 = rentId
      this.showConfirmDialogCancelRentDetail = true
    },
    cancelConfirmDialogCancelRentDetail() {
      this.showConfirmDialogCancelRentDetail = false
    },
    HandleConfirmCancelRentDetail() {
      this.responseMessage = ''
      this.spinner = true
      apiFactory.callApi(API_TRANSACTION.CANCEL_RENT_DETAIL + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getRentDetail(this.tmpId2)
        }
        this.showConfirmDialogCancelRentDetail = false
        this.spinner = false
      }).catch(() => {
      });
    },

    CancelRent(rentId) {
      this.tmpId = rentId
      this.showConfirmDialogCancelRent = true
    },
    cancelConfirmDialogCancelRent() {
      this.showConfirmDialogCancelRent = false
    },
    HandleConfirmCancelRent() {
      this.responseMessage = ''
      this.spinner = true
      apiFactory.callApi(API_TRANSACTION.CANCEL_RENT + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hủy giao dịch thuê thành công!'
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.getRents()
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogCancelRent = false
        this.spinner = false
      }).catch(() => {
      });
    },

    SearchRent() {
      if (this.searchRent) {
        this.filterRent = ''
        this.filterDataRent = 'Search'
      } else {
        this.filterRent = 'Tất Cả'
        this.filterDataRent = ''
      }
      this.getRents()
    },
    getRentBill(billId) {
      this.billRent = ''
      const url = API_PERSONAL.BILL_RENT + billId
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.billRent = res.data.data
      }).catch(() => {
      });
    },
    openDialogRentBill(billId) {
      this.getRentBill(billId)
      this.showDialogRB = true
    },
    cancelDialogRentBill() {
      this.showDialogRB = false
    },
    payRent(billId) {
      this.tmpId = billId
      this.showConfirmDialogPayRent = true
    },
    cancelConfirmDialogPayRent() {
      this.showConfirmDialogPayRent = false
    },
    HandleConfirmPayRent() {
      this.responseFlag = ''
      apiFactory.callApi(API_TRANSACTION.CREATE_URL_PAY_RENT + this.tmpId, 'POST', {}).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          let url = res.data.data
          window.location.href = url;
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogPayRent = false
      }).catch(() => {
      });
    },
    FeedbackBook(bookId) {
      this.tmpId = bookId
      this.showDialogFeedback = true
    },
    cancelDialogFeedback() {
      this.showDialogFeedback = false
    },
    feedback() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_BOOK.FEEDBACK_BOOK + this.tmpId, 'POST', {
        userId: this.userByToken.UserId,
        content: this.feedbackContent,
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Đánh giá sách thành công!'
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra, vui lòng thử lại!!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialogFeedback = false
      }).catch(() => {
        this.dismissCountDown = this.dismissSecs
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.showDialogFeedback = false
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
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}

.MT {
  background: #F0F0F0;
}

.MT .containerMT {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 0px auto 0px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMT {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}

.right-contentMT {
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
  display: block;
}

.right-contentMT .titleMT {
  color: #9D6B54;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  padding-top: 20px;
}

.background-tab {
  background-color: #F0ECE4;
  border: none;
  color: #9D6B54;
}

.selectCss {
  border: 1px solid white;
  border-radius: 10px;
  width: 170px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.searchMP {
  margin: 10px 0px 10px 20px;
  width: 95%;
  display: flex;
  justify-content: space-between;
}

.searchMP .inputMP {
  border-radius: 7px;
  border: 1px solid grey;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.searchMP .btnMP {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 40px;
  width: 80px;
  margin-left: 10px;
}

.searchMP .btnMP:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.table thead {
  color: #9D6B54;
  font-weight: 600;
  font-size: 12px;
}

.table .rowData {
  vertical-align: middle;
  font-size: 12px;
  color: #9D6B54;
}

.tdBtn {
  text-align: center;
}

.tableBtn {
  text-align: center;
  font-size: 20px;
  border: none;
  background-color: #F0ECE4;
  color: #ba9787;
}

.tableBtn:hover {
  color: #9D6B54;
}

.waiting {
  padding-top: 6px;
  text-align: center;
  width: 90px;
  height: 30px;
  background-color: #c4a698;
  color: white;
  border-radius: 5px;
}

.cancel {
  padding-top: 6px;
  text-align: center;
  width: 90px;
  height: 30px;
  background-color: #ca0303;
  color: white;
  border-radius: 5px;
}

.trading {
  padding-top: 6px;
  text-align: center;
  width: 90px;
  height: 30px;
  background-color: #9d6b54;
  color: white;
  border-radius: 5px;
}

.complete {
  padding-top: 6px;
  text-align: center;
  width: 90px;
  height: 30px;
  background-color: #6e4b3b;
  color: white;
  border-radius: 5px;
}

.noBook {
  text-align: center;
  padding-top: 50px;
  color: grey;
  font-style: italic;
  font-size: 26px;
}

.imageBook {
  width: 50px;
  height: auto;
}
</style>