<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="MI">
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
                  <div class="nameMI">{{info.fullname}}</div>
                  <div class="divMI"><Icon icon="mdi:email"/><span >Email: {{info.email}}</span></div>
                  <div class="divMI"><Icon icon="material-symbols:call"/><span>Số điện thoại: {{info.phone}}</span></div>
                  <div class="divMI"><Icon icon="material-symbols:location-on"/><span>Địa chỉ: {{info.addressMain}}</span></div>
                  <button class="editMI">
                    <Icon icon="uil:pen" style="width: 20px; height: 20px; margin-right: 2%"/>Thay đổi thông tin
                  </button>
                </div>
                <div>
                  <button class="imgBtn"><Icon icon="material-symbols:flip-camera-ios"/></button>
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

export default {
  name: "MyInformation",
  components: {SideBar_Personal, Layout, Icon},
  data() {
    return {
      info: '',
      infoShip: '',
      userId: '',
      loading: false,
    }
  },
  created() {
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
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
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
          alert('Cập nhật thông tin vận chuyển thành công!')
          this.getMyInfoShipping()
        }
      }).catch(() => {
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

.MI {
  background: #F0F0F0;
}

.MI .containerMI {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMI{
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}
.right-contentMI{
  width: 71%;
  background: #F0F0F0;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  display: block;
}

.topMI{
  background: #F0ECE4;
  width: 100%;
  display: flex;
  border-radius: 10px;
  padding-bottom: 10px;
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
  margin-bottom: 11px;
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
  padding-left: 6px;
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
</style>