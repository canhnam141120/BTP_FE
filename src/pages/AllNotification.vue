<template>
  <Layout>
    <main style="flex-grow: 1;">
      <LoadingDialog v-show="spinner" style="z-index: 999999;"></LoadingDialog>
      <div class="body-noti">
        <b-alert style="position: absolute; right: 0;" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <b-alert style="position: absolute; right: 0;" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
          {{responseMessage}}
        </b-alert>
        <div class="titleNoti">THÔNG BÁO</div>
        <div class="container">
          <div class="contentNoti">
            <b-card card class="background-tab">
              <b-tabs>
                <div style="text-align: right"><button class="btnReadAll" v-on:click="markReadAll">Đánh dấu tất cả đã đọc</button></div>
                <b-tab title="Tất cả" active>
                  <div v-if="totalNoti != 0"><div class="listNoti" v-for="item of listNoti" :key="item.id">
                    <label v-if="item.isRead == false" class="read"><button class="btnRead" v-on:click="markRead(item.id)"><Icon class="iconRead" icon="mdi:eye-plus"/></button></label>
                    <label v-else class="read"><button disabled style="border: none; background-color: #F0ECE4;"></button></label>
                    <label v-if="item.isRead == false"  class="labelNotiNotRead">
                      <div style="font-weight: 600">{{item.createdDate | formatDate}}</div>
                      <div>{{item.content}}</div>
                    </label>
                    <label v-else class="labelNoti" style="padding-top: 5px">
                      <div style="font-weight: 600">{{item.createdDate | formatDate}}</div>
                      <div>{{item.content}}</div>
                    </label>
                  </div></div>
                  <div v-else class="noBook">Danh sách trống!</div>
                  <div v-if="totalNoti != 0" class="paging">
                    <div class="page">
                      <b-pagination @input="getAllNoti" v-model="pageAll" :total-rows="totalNoti" :per-page="20">
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
                </b-tab>
                <b-tab title="Chưa đọc">
                  <div v-if="totalNotiNotRead != 0"><div class="listNoti" v-for="item of listNotiNotRead" :key="item.id">
                    <label v-if="item.isRead == false" class="read"><button class="btnRead" v-on:click="markRead(item.id)"><Icon class="iconRead" icon="mdi:eye-plus"/></button></label>
                    <label v-else class="read"><button disabled style="border: none; background-color: #F0ECE4;"></button></label>
                    <label v-if="item.isRead == false"  class="labelNotiNotRead">
                      <div style="font-weight: 600">{{item.createdDate | formatDate}}</div>
                      <div>{{item.content}}</div>
                    </label>
                    <label v-else class="labelNoti" style="padding-top: 5px">
                      <div style="font-weight: 600">{{item.createdDate | formatDate}}</div>
                      <div>{{item.content}}</div>
                    </label>
                  </div></div>
                  <div v-else class="noBook">Danh sách trống!</div>
                  <div v-if="totalNotiNotRead != 0" class="paging">
                    <div class="page">
                      <b-pagination @input="getAllNotiNotRead" v-model="pageNotRead" :total-rows="totalNotiNotRead" :per-page="20">
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
import apiFactory from "@/config/apiFactory";
import {API_PERSONAL} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";
import {Icon} from '@iconify/vue2';

export default {
  name: "AllNotification",
  components: {Layout, LoadingDialog, Icon},
  data(){
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,

      userByToken: '',
      spinner: false,
      pageAll: 1,
      listNoti: '',
      totalNoti: '',
      listNotiNotRead: '',
      totalNotiNotRead: '',
      pageNotRead: 1
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getAllNoti(1)
    this.getAllNotiNotRead(1)
  },
  methods: {
    getAllNoti(pageNumber) {
      window.scroll(0 , 0)
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.NOTIFICATION + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listNoti = res.data.data
        this.totalNoti = res.data.numberOfRecords
        this.pageAll = pageNumber
      }).catch(() => {
      });
    },
    getAllNotiNotRead(pageNumber) {
      window.scroll(0 , 0)
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.NOTIFICATION_NOT_READ + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listNotiNotRead = res.data.data
        this.totalNotiNotRead = res.data.numberOfRecords
        this.pageNotRead = pageNumber
      }).catch(() => {
      });
    },
    markReadAll(){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.MARK_READ_NOTIFICATION_ALL, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if(res.data.message == 'SUCCESS'){
          this.getAllNoti(this.pageAll)
          this.getAllNotiNotRead(this.pageNotRead)
          this.responseFlag = true
          this.responseMessage = 'Đánh dấu tất cả thông báo đã đọc - Thành công'
          this.dismissCountDown = this.dismissSecs
        }
      }).catch(() => {
      });
    },
    markRead(id){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.MARK_READ_NOTIFICATION + id, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if(res.data.message == 'SUCCESS'){
          this.getAllNoti(this.pageAll)
          this.getAllNotiNotRead(this.pageNotRead)
          this.responseFlag = true
          this.responseMessage = 'Đánh dấu thông báo đã đọc - Thành công'
          this.dismissCountDown = this.dismissSecs
        }
      }).catch(() => {
      });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  },
  filters: {
    formatDate(value){
      return new Date(value).toLocaleString('en-GB')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}

.body-noti {
  background: #F0F0F0;
}

.body-noti .titleNoti {
  max-width: 1230px;
  border-radius: 10px;
  background-color: #F0ECE4;
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
  margin: 10px auto 10px auto;
  border: 1px solid #9D6B54;
}

.container {
  background: #F0F0F0;
  max-width: 1230px;
  padding: 0px 0px;
  border-radius: 10px;
  margin: 10px auto 0px auto;
  display: block;
}

.background-tab {
  border-radius: 10px;
  background-color: #EFECE3;
  border: none;
  color: #9D6B54;
}

.btnReadAll{
  padding: 10px;
  border-radius: 5px;
  color: #F0ECE4;
  background-color: #9d6b54;
  border: 1px solid #9d6b54;
  margin-top: 10px;
  font-weight: 600;
  margin-bottom: 10px;
}

.btnReadAll:hover{
  background-color: #F0ECE4;
  color: #9d6b54;
  border: 1px solid #9d6b54;
}

.contentNoti {
  background: #F0ECE4;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 5px auto 10px auto;
  border: 1px solid #9D6B54;
}

.labelNoti{
  width: 95%;
  font-size: 14px;
}

.labelNotiNotRead{
  width: 95%;
  font-size: 14px;
  background-color: #f9f6f6;
  padding: 5px;
  border-radius: 10px;
}

.read{
  font-size: 30px;
  width: 5%;
}

.btnRead{
  font-size: 30px;
  border: none;
  background-color: #F0ECE4;
  color: #ba9787;
}

.iconRead{
 margin-bottom: 12px;
}

.btnRead:hover{
  color: #9D6B54;
}

.paging {
  margin-top: 10px;
}

.paging ul {
  justify-content: right;
  margin-right: 15px;
}

.noBook{
  text-align: center;
  padding-top: 50px;
  color: grey;
  font-style: italic;
  font-size: 26px;
  padding-bottom: 30px;
}
</style>