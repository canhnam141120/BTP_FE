<template>
  <div class="dashboard">
    <div class="countUser">
      <Icon class="iconDB" icon="mdi:user-group"/>
      <div>
        <div class="quarter"> Tổng người dùng</div>
        <label class="numberDB">{{countUser}} tài khoản</label>
      </div>
    </div>
    <div class="countBook">
      <Icon class="iconDB" icon="raphael:books"/>
      <div>
        <div class="quarter">Tổng số sách trên sàn</div>
        <label class="numberDB">{{countBook}} cuốn</label>
      </div>
    </div>
    <div class="countTrans">
      <Icon class="iconDB" icon="game-icons:card-exchange"/>
      <div>
        <div class="quarter">Tổng số GD trong quý</div>
        <label class="numberDB">{{countTrans}} giao dịch</label>
      </div>
    </div>
    <div class="totalMoney">
      <Icon class="iconDB" icon="ri:money-dollar-circle-fill"/>
      <div>
        <div class="quarter">Doanh thu theo quý</div>
        <label class="numberDB">{{countMoney.toLocaleString()}}đ</label>
      </div>
    </div>
    <div style="padding-top: 30px">
      <select style="background-color: #9d6b54; color: white; padding: 5px; font-weight: 600; border-radius: 10px" v-model="filter" @change="onchange($event)">
      <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
    </select>
    </div>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {Icon} from '@iconify/vue2';
import {API_MANAGE_BOOK, API_MANAGE_TRANSACTION} from "@/constant/constant-api";

export default {
  name: "Dashboard",
  components: {Icon},
  data() {
    return {
      countBook: 0,
      countUser: 0,
      countMoney: 0,
      countTrans: 0,
      listFilter: ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'],
      filter: '',
    }
  },
  created() {
    this.countBookAndUser()
    this.countDashboard()
  },
  methods: {
    onchange(e){
      if(e.target.value === 'Quý 1'){
        apiFactory.callApi(API_MANAGE_TRANSACTION.DASHBOARD, 'POST', {
          id: 1
        }).then((res) => {
          this.countMoney = res.data.data
          this.countTrans = res.data.numberOfRecords
        }).catch(() => {
        });
      }
      if(e.target.value=== 'Quý 2'){
        apiFactory.callApi(API_MANAGE_TRANSACTION.DASHBOARD, 'POST', {
          id: 2
        }).then((res) => {
          this.countMoney = res.data.data
          this.countTrans = res.data.numberOfRecords
        }).catch(() => {
        });
      }
      if(e.target.value === 'Quý 3'){
        apiFactory.callApi(API_MANAGE_TRANSACTION.DASHBOARD, 'POST', {
          id: 3
        }).then((res) => {
          this.countMoney = res.data.data
          this.countTrans = res.data.numberOfRecords
        }).catch(() => {
        });
      }
      if(e.target.value === 'Quý 4'){
        apiFactory.callApi(API_MANAGE_TRANSACTION.DASHBOARD, 'POST', {
          id: 4
        }).then((res) => {
          this.countMoney = res.data.data
          this.countTrans = res.data.numberOfRecords
        }).catch(() => {
        });
      }
    },
    countBookAndUser(){
      apiFactory.callApi(API_MANAGE_BOOK.DASHBOARD, 'GET', {}).then((res) => {
        this.countBook = res.data.data
        this.countUser = res.data.numberOfRecords
      }).catch(() => {
      });
    },
    countDashboard(){
      var today = new Date();
      var quarter = Math.floor((today.getMonth() + 3) / 3);
      this.filter = 'Quý ' + quarter
      apiFactory.callApi(API_MANAGE_TRANSACTION.DASHBOARD, 'POST', {
        id: quarter
      }).then((res) => {
        this.countMoney = res.data.data
        this.countTrans = res.data.numberOfRecords
      }).catch(() => {
      });
    },
  }
}
</script>

<style scoped>
.dashboard{
  display: flex;
  justify-content: space-between;
  height: 150px;
  padding-left: 30px;
  background: #F0ECE4;
  border-bottom: 1px solid #9D6B54;
  padding-right: 20px;
}

.countUser{
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  width: 22%;
  border-radius: 10px;
  background-color: #DFD5CB;
}

.countBook{
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  width: 24%;
  border-radius: 10px;
  background-color: #DFD5CB;
}

.countTrans{
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  width: 24%;
  border-radius: 10px;
  background-color: #DFD5CB;
}

.totalMoney{
  display: flex;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  width: 23%;
  border-radius: 10px;
  background-color: #DFD5CB;
}

.quarter{
  color: #9d6b54;
  font-weight: 600;
  font-size: 16px;
  margin-top: 5px;
}

.iconDB{
  color: #9d6b54;
  font-size: 75px;
  margin-right: 10px;
  padding-bottom: 10px;
}

.numberDB{
  color: #9d6b54;
  font-size: 22px;
  font-weight: bold;
}

</style>