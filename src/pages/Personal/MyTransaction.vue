<template>
<Layout>
<main style="flex-grow: 1">
  <BillDialog :show="showDialog"
              :cancel="cancel"
              :pay="pay"
              v-if="showDialog" class="modal">
    <div>
      <div>Hóa đơn số: {{bill.id}}</div>
      <div>Giao dịch: {{bill.exchangeId}}</div>
      <div>Số lượng sách giao dịch: {{bill.totalBook}}</div>
      <div>Phí đặt cọc: {{bill.depositFee}}</div>
      <div>Phí ship: {{bill.feeId1Navigation.price}}</div>
      <div>Phí dịch vụ: {{bill.feeId2Navigation.price}}</div>
      <div v-if="bill.feeId3">Phí dịch vụ với mỗi cuốn thêm: {{bill.feeId3Navigation.price}}</div>
      <div>Tổng chi phí: {{bill.totalAmount}}</div>
      <div v-if="bill.isPaid">
        <div>Trạng thái thanh toán: Đã thanh toán thanh toán</div>
        <div>Thanh toán vào ngày: {{bill.paidDate}}</div>
        <div>Phương thức thanh toán: {{bill.payments}}</div>
      </div>
      <div v-else>Trạng thái thanh toán: Chưa thanh toán</div>
    </div>
    <div class="dialogGroupBtn">
      <button class="dialogBtn" v-on:click="cancel">Đóng</button>
      <button class="dialogBtn" v-on:click="pay(bill.id)">Thanh toán</button>
    </div>
  </BillDialog>
  <div class="MT">
    <div class="containerMT">
      <div class="left-contentMT">
        <SideBar_Personal></SideBar_Personal>
      </div>
      <div class="right-contentMT">
        <div class="titleMT">DANH SÁCH GIAO DỊCH</div>
        <div class="listTrans">
          <table class="table">
            <thead>
            <tr>
              <td>Mã giao dịch</td>
              <td>Đối tác</td>
              <td>Ngày tạo</td>
              <td>Trạng thái</td>
              <td>Chi tiết</td>
              <td>Hóa đơn</td>
            </tr>
            </thead>
            <tbody v-for="item of listExchanges" :key="item.id">
            <tr>
              <td>
                {{ item.id }}
              </td>
              <td v-if="userByToken.UserId == item.userId1">{{ item.userId2Navigation.fullname }}</td>
              <td v-else>{{ item.userId1Navigation.fullname }}</td>
              <td>{{ item.date }}</td>
              <td v-if="item.status == 'Trading'" ><span class="role approved">ĐANG GIAO DỊCH</span></td>
              <td v-if="item.status == 'Complete'" ><span class="role approved">HOÀN THÀNH</span></td>
              <td v-if="item.status == 'Cancel'" ><span class="role denied">ĐÃ HỦY</span></td>
              <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
              <td><button>Xem</button></td>
              <td><button v-on:click="openDialog(item.id)">Xem</button></td>
            </tr>
            </tbody>
          </table>
        </div>
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
import {API_PERSONAL, API_TRANSACTION} from "@/constant/constant-api";
import VueJwtDecode from "vue-jwt-decode";
import BillDialog from "@/pages/Personal/BillDialog";

export default {
  name: "MyTransaction",
  components: {SideBar_Personal, Layout, BillDialog},
  data() {
    return {
      listExchanges: '',
      userByToken: '',
      bill: '',
      showDialog: false,
    }
  },
  created() {
    this.getExchanges()
  },
  methods: {
    getExchanges() {
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_EXCHANGE, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listExchanges = res.data.data
      }).catch(() => {
      });
    },
    getBill(billId){
      const url = API_PERSONAL.BILL_EXCHANGE + billId
      apiFactory.callApi(url , 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.bill = res.data.data
      }).catch(() => {
      });
    },
    openDialog(billId) {
      this.getBill(billId)
      this.showDialog = true
    },
    cancel() {
      this.showDialog = false
    },
    pay(billId){
      const url = API_TRANSACTION.CREATE_URL_PAY + billId
      apiFactory.callApi(url, 'POST', {}).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          let url = res.data.data
          window.location.href = url;
        }
      }).catch(() => {
        alert('CREATE_FAILED!')
      });
    }
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
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMT {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMT{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  border: 1px solid #9D6B54;
  display: block;
}

.right-contentMT .titleMT {
  color: #9D6B54;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
}

</style>