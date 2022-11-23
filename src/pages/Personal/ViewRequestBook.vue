<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="VR">
        <div class="containerVR">
          <div class="left-contentVR">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentVR">
            <div class="topVR">
              <div class="left">
                <img class="imgBD" v-bind:src="book.image">
              </div>
              <div class="right">
                <label class="titleBD"><strong>{{book.title}}</strong></label>
                <div class="contentRight">
                  <div class="bookInfoBD">
                    <div>Thể loại: <span>{{book.category.name}}</span></div>
                    <div>Tác giả: <span>{{book.author}}</span></div>
                    <div>Nhà xuất bản: <span>{{book.publisher}}</span></div>
                    <div>Năm xuất bản: <span>{{book.year}}</span></div>
                    <div>Ngôn ngữ: <span>{{book.language}}</span></div>
                    <div>Số trang: <span>{{book.numberOfPages}}</span></div>
                    <div>Trọng lượng: <span>{{book.weight}}g</span></div>
                    <div>Thời gian giao dịch: <span>{{book.numberOfDays}} ngày</span></div>
                    <div>Giá bìa: <span class="cover">{{ book.coverPrice.toLocaleString() }}đ</span></div>
                    <div>Phí đặt cọc: <span class="deposit">{{ book.depositPrice.toLocaleString() }}đ</span></div>
                    <div v-if="book.isRent">Phí thuê: <span class="rent">{{ book.rentFee.toLocaleString() }}đ</span></div>
                  </div>
                  <div class="extra">
                    <button class="editBtn">Chỉnh sửa</button>
                  </div>
                </div>
              </div>

            </div>
            <hr>
            <div class="bottomVR">
              <div class="title-bottom">Yêu cầu muốn đổi</div>
              <div class="gridMB">
                <div class="itemMB" v-for="item of listRequestReceive" :key="item.id">
                  <router-link :to="{ name: 'BookDetail', query: { id:item.bookOfferId }}">
                    <img v-bind:src="item.bookOffer.image">
                  </router-link>
                  <div class="infoMB">
                    <div class="book-titleMB">{{ item.bookOffer.title }}</div>
                    <div class="book-statusMB"><img :src="require('@/image/user.png')"> {{ item.bookOffer.user.fullname }}</div>
                    <div class="book-statusMB">{{ item.bookOffer.category.name}}</div>
                    <label class="book-statusMB">Giá bìa: <strong>{{ item.bookOffer.coverPrice.toLocaleString() }}đ</strong></label>
                    <label class="book-statusMB">{{ item.bookOffer.statusBook }}</label>
                  </div>
                  <div class="actionVR">
                    <button class="active" v-on:click="HandleApproved(item.id)">Chấp nhận</button>
                    <button class="active" v-on:click="HandleDenied(item.id)">Từ chối</button>
                  </div>
                </div>
              </div>
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
import {API_BOOK, API_PERSONAL, API_REQUEST} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "ViewRequestBook",
  components: {SideBar_Personal, Layout},
  data() {
    return {
      book: '',
      listRequestReceive: '',
      loading: false,
      userId: '',
      userByToken: ''
    }
  },
  created() {
    this.getBookById()
    this.getRequestReceived()
  },
  methods: {
    getBookById() {
      const url = API_BOOK.DETAIL_BOOK + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.book = res.data.data
      }).catch(() => {
      });
    },
    getRequestReceived(){
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.LIST_REQUEST_RECEIVED + this.$route.query.id
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listRequestReceive = res.data.data
      }).catch(() => {
      });
    },
    HandleApproved(requestId){
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_REQUEST.ACCEPT_REQUEST + requestId
      apiFactory.callApi(url, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          console.log(alert('Chấp nhận thành công'))
          this.getRequestReceived()
        }
      }).catch(() => {
        alert('Không thành công!')
      });
    },
    HandleDenied(requestId){
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_REQUEST.DENIED_REQUEST + requestId
      apiFactory.callApi(url, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          console.log(alert('Hủy thành công'))
          this.getRequestReceived()
        }
      }).catch(() => {
        alert('Không thành công!')
      });
    },
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

.VR {
  background: #F0F0F0;
}

.VR .containerVR {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentVR {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentVR {
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  display: block;
}

.right-contentVR .topVR{
  height: auto;
  border-radius: 10px;
  display: flex;
}

.right-contentVR .bottomVR{
  height: 560px;
}

.right-contentVR .topVR .left{
  width: 240px;
  border-radius: 10px;
}

.right-contentVR .topVR .left .imgBD{
  width: 200px;
  height: 290px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentVR .topVR .right{
  width: 635px;
  border-radius: 10px;
}

.right-contentVR .topVR .right .titleBD{
  margin-left: 10px;
  margin-top: 20px;
  font-size: 1.6rem;
}

.right-contentVR .topVR .right .contentRight{
  display: flex;
}

.right-contentVR .topVR .right .bookInfoBD{
  width: 70%;
  height: 280px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
}

.right-contentVR .topVR .right .bookInfoBD span{
  font-weight: 500;
}

.right-contentVR .topVR .right .bookInfoBD .cover{
  font-weight: 700;
  color: red;
  font-style: normal;
}

.right-contentVR .topVR .right .bookInfoBD .deposit{
  font-weight: 700;
  color: green;
  font-style: normal;
}

.right-contentVR .topVR .right .bookInfoBD .rent{
  font-weight: 700;
  color: blue;
  font-style: normal;
}

.right-contentVR .topVR .right .contentRight .extra{
  margin-top: 210px;
}

.right-contentVR .topVR .right .contentRight .extra .editBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 50px;
  width: 160px;
  margin-right: 50px;
}

.right-contentVR .topVR .right .contentRight .extra .editBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.title-bottom{
  color: #9D6B54;
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
}

.gridMB {
  display: flex;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 10px;
  margin-right: 20px;
  overflow: auto;
}

 .gridMB .itemMB {
  display: block;
  border-radius: 10px;
  background: white;
  width: 220px;
  height: 470px;
  margin: 10px 0px 10px 20px;
}

.gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

 .gridMB .itemMB img {
  height: 290px;
  width: 220px;
  border-radius: 10px;
}

 .gridMB .infoMB {
  height: 120px;
  padding: 5px;
}

.gridMB .infoMB img {
  width: 20px;
  height: 20px;
}

.gridMB .infoMB label {
  margin-left: 5px;
}

.gridMB .infoMB .book-titleMB{
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #9D6B54;
}

.gridMB .infoMB .book-statusMB {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.gridMB .actionVR{
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 0px 10px;
  padding-bottom: 5px;
}

.gridMB .active{
  font-size: 14px;
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 40px;
  width: 90px;
}

.gridMB .active:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}
</style>