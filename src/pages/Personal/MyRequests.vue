<template>
<Layout>
<main style="flex-grow: 1">
  <div class="MR">
    <div class="containerMR">
      <div class="left-contentMR">
        <SideBar_Personal></SideBar_Personal>
      </div>
      <div class="right-contentMR">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <div class="gridMR">
              <div class="itemMR" v-for='i in 4' :key="i">
                <div class="item-bookMR">
                  <b-card no-body img-top style="height: 370px; width: 290px">
                    <b-skeleton-img card-img="top" aspect="3:1" height="270px"></b-skeleton-img>
                    <b-card style="height: 105px">
                      <b-skeleton animation="wave" width="85%"></b-skeleton>
                      <b-skeleton animation="wave" width="55%"></b-skeleton>
                      <b-skeleton animation="wave" width="70%"></b-skeleton>
                    </b-card>
                  </b-card>
                  <b-card no-body img-top style="height: 370px; width: 290px">
                    <b-skeleton-img card-img="top" aspect="3:1" height="270px"></b-skeleton-img>
                    <b-card style="height: 105px">
                      <b-skeleton animation="wave" width="85%"></b-skeleton>
                      <b-skeleton animation="wave" width="55%"></b-skeleton>
                      <b-skeleton animation="wave" width="70%"></b-skeleton>
                    </b-card>
                  </b-card>
                </div>
              </div>
            </div>
          </template>
          <div class="gridMR">
            <div class="itemMR" v-for="item of listRequest" :key="item.id">
              <div class="item-bookMR">
                <div>
                  <router-link :to="{ name: 'BookDetail', query: { id:item.bookOfferId}}">
                    <img class="imgMR" v-bind:src="item.bookOffer.image">
                  </router-link>
                  <div class="infoMR">
                    <div class="book-titleMR">{{ item.bookOffer.title }}</div>
                  </div>
                </div>
                <div>
                  <router-link :to="{ name: 'BookDetail', query: { id:item.bookId }}">
                    <img class="imgMR" v-bind:src="item.book.image">
                  </router-link>
                  <div class="infoMR">
                    <div class="book-titleMR">{{ item.book.title }}</div>
                  </div>
                </div>
              </div>
              <button class="activeMR"  @click="openModal(item.id)">Hủy</button>
              <b-modal v-model="modalShow" @ok="HandleCancel(tmpId)">Xác nhận hủy yêu cầu trao đổi</b-modal>
            </div>
          </div>
        </b-skeleton-wrapper>
        <div class="pagingMR">
          <b-pagination class="page-numberMR" @input="getMyRequest" v-model="page" :total-rows="totalRequest" :per-page="4">
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
</main>
</Layout>
</template>

<script>
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import apiFactory from "@/config/apiFactory";
import {API_REQUEST, API_PERSONAL} from "@/constant/constant-api";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "MyRequests",
  components: {SideBar_Personal, Layout},
  data() {
    return {
      modalShow: false,
      listRequest: '',
      totalRequest: '',
      loading: false,
      userByToken: '',
      userId: '',
      tmpId: ''
    }
  },
  created() {
    this.getMyRequest(1)
  },
  methods: {
    getMyRequest(pageNumber) {
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.LIST_REQUEST_SEND + pageNumber
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listRequest = res.data.data
        this.totalRequest = res.data.numberOfRecords
        this.loading = false;
      }).catch(() => {
      });
    },
    HandleCancel(requestId){
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_REQUEST.CANCEL_REQUEST + requestId
      apiFactory.callApi(url, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getMyRequest(1)
        }
      }).catch(() => {
        alert('Hủy không thành công!')
      });
    },
    openModal(requestId){
      this.modalShow = true
      this.tmpId = requestId
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

.MR {
  background: #F0F0F0;
}

.MR .containerMR {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMR {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}
.right-contentMR{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  display: block;
}


.right-contentMR .gridMR {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 1px;
}

.right-contentMR .gridMR .itemMR  {
  border-radius: 10px;
  width: 420px;
  height: 375px;
  margin: 10px 0px 10px 10px;
  background: white;
}

.right-contentMR .gridMR .itemMR:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentMR .gridMR .itemMR .item-bookMR {
  padding-top: 5px;
  display: flex;
}

.right-contentMR .gridMR .itemMR .imgMR{
  margin-left: 6px;
  height: 270px;
  width: 200px;
  border-radius: 5px;
}

.right-contentMR .gridMR .infoMR {
  height: 60px;
  padding: 5px;
}

.right-contentMR .gridMR .infoMR .book-titleMR {
  width: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #9D6B54;
  text-align: center;
}

.right-contentMR  .gridMR .activeMR {
  border-radius: 5px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 35px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.right-contentMR .gridMR .activeMR:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.right-contentMR .pagingMR {
  margin-top: 10px;
}

.right-contentMR .pagingMR ul {
  justify-content: right;
  margin-right: 15px;
}

.right-contentMR .modalBtn{
  color: white;
  background: #9D6B54;
  border: 1px solid grey;
}

.right-contentMR .modalBtn:hover{
  color: #9D6B54;
  background: #F0ECE4;
  border-color: #9D6B54;
}

</style>