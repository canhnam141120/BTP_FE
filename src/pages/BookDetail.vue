<template>
  <Layout>
    <main style="flex-grow: 1;">
      <LoadingDialog v-show="spinner"></LoadingDialog>
      <ExchangeDialog :show="showDialog"
                      :cancel="cancel"
                      :confirm="confirm"
                      v-if="showDialog" class="modal">
          <div class="dialogBook">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="gridMB" >
                  <div class="itemMB" v-for='i in 4' :key="i">
                    <b-card no-body img-top style="height: 100%">
                      <b-skeleton-img card-img="top" aspect="3:1" height="290px"></b-skeleton-img>
                      <b-card style="height: 160px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="gridMB">
                <div class="itemMB" v-for="item of bookCanTrade" :key="item.id">
                  <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="infoMB">
                    <div class="book-titleMB">{{ item.title }}</div>
                    <div class="book-statusMB">Thể loại: {{ item.category?.name}}</div>
                    <label>Giá bìa: <strong>{{ item.coverPrice?.toLocaleString() }}đ</strong></label>
                    <label class="book-statusMB">{{ item.statusBook }}</label>
                  </div>
                  <input type="checkbox" class="checkboxes" v-bind:value="item.id" v-model="listIdBook">
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
      </ExchangeDialog>
      <div class="bookDetail">
        <div class="container">
          <div class="bookdetail-top">
            <div class="left">
              <img class="imgBD" v-bind:src="book.image">
            </div>
            <div class="right">
              <label class="titleBD"><strong>{{book.title}}</strong></label>
              <div class="infoBD">
                <div class="bookInfoBD">
                  <div>Thể loại: <span>{{book.category?.name}}</span></div>
                  <div>Tác giả: <span>{{book.author}}</span></div>
                  <div>Nhà xuất bản: <span>{{book.publisher}}</span></div>
                  <div>Năm xuất bản: <span>{{book.year}}</span></div>
                  <div>Ngôn ngữ: <span>{{book.language}}</span></div>
                  <div>Số trang: <span>{{book.numberOfPages}}</span></div>
                  <div>Trọng lượng: <span>{{book.weight}}g</span></div>
                  <div>Thời gian giao dịch: <span>{{book.numberOfDays}} ngày</span></div>
                  <div class="priceBD">
                    <div class="itemPrice">Giá bìa    <span class="cover">{{ book.coverPrice?.toLocaleString() }}đ</span></div>
                    <div class="itemPrice">Phí đặt cọc <span class="deposit">{{ book.depositPrice?.toLocaleString() }}đ</span></div>
                    <div v-if="book.isRent" class="itemPrice">Phí thuê      <span class="rent">{{ book.rentFee?.toLocaleString() }}đ</span></div>
                    <div v-else class="itemPrice"></div>
                  </div>
                </div>
                <div class="userBD">
                  <router-link :to="{ name: 'OtherPerson', query: { id:book.user?.id }}">
                    <img class="avatarBD" v-bind:src="book.user?.avatar">
                  </router-link>
                  <div class="userInfoBD">
                    <div>Đăng bởi</div>
                    <div><strong>{{ book.user?.fullname }}</strong></div>
                    <div>{{ book.user?.likeNumber }} người thích</div>
                    <div>{{ book.user?.numberOfTransaction }} lần giao dịch</div>
                    <router-link class="btn" :to="{ name: 'OtherPerson', query: {id:book.user?.id}}">Xem</router-link>
                  </div>
                </div>
              </div>
              <div class="btn-tran">
                <button v-if="book.isExchange" class="active" v-on:click="openDialog">Trao đổi</button>
                <button v-else class="disable">Trao đổi</button>
                <button v-if="book.isRent" class="active">Thuê</button>
                <button v-else class="disable">Thuê</button>
              </div>
            </div>
          </div>
          <div class="bookdetail-mid">
            <div class="title"><strong>Thông tin sản phẩm</strong></div>
            <div class="mid-info">
              <div class="mid-info-left">
                <div>Tên sản phẩm</div>
                <div>Người đăng</div>
                <div>Giá bìa</div>
                <div>Phí đặt cọc</div>
                <div v-if="book.isRent">Phí thuê</div>
                <div>Thời gian giao dịch</div>
                <div>Ngày đăng</div>
                <div>Thể loại</div>
                <div>Tác giả</div>
                <div>Nhà xuất bản</div>
                <div>Năm xuất bản</div>
                <div>Ngôn ngữ</div>
                <div>Số trang</div>
                <div>Trọng lượng</div>
                <div>Trạng thái</div>
              </div>
              <div class="mid-info-right">
                <div>{{book.title}}</div>
                <div>{{book.user?.fullname}}</div>
                <div>{{book.coverPrice?.toLocaleString()}}đ</div>
                <div>{{book.depositPrice?.toLocaleString()}}đ</div>
                <div v-if="book.isRent">{{book.rentFee?.toLocaleString()}}đ</div>
                <div>{{book.numberOfDays}} ngày</div>
                <div>{{book.postedDate}}</div>
                <div>{{book.category?.name}}</div>
                <div>{{book.author}}</div>
                <div>{{book.publisher}}</div>
                <div>{{book.year}}</div>
                <div>{{book.language}}</div>
                <div>{{book.numberOfPages}}</div>
                <div>{{book.weight}}g</div>
                <div>{{book.statusBook}}</div>
              </div>

            </div>
            <hr>
            <div class="mid-des">
              <div class="title-content"><strong>Nội dung</strong></div>
              <div v-show="!showFlag">
                <div class="mid-content">{{book.description | shorttext(610)}}...</div>
                <button class="showMore" v-on:click="showFlag=true;">Đọc thêm</button>
              </div>
              <div v-show="showFlag">
                <div class="mid-content">{{book.description}}</div>
                <button class="showMore" v-on:click="showFlag=false;">Rút gọn</button>
              </div>
            </div>
          </div>
          <div v-if="countFeedback!=0" class="bookdetail-feedback">
            <div class="title"><strong>Đánh giá/Bình luận</strong></div>
            <div class="feedbacks" v-for="item of feedbacks" :key="item.id">
              <router-link :to="{ name: 'OtherPerson', query: { id:item.userId}}">
                <img class="avatar-feedbacker" v-bind:src="item.user?.avatar">
              </router-link>
              <div class="feedbackItem">
                <div class="name">{{item.user?.fullname}}</div>
                <div class="date">{{item.createdDate | formatDate}}</div>
                <div class="content">{{item.content}}</div>
              </div>
            </div>
            <div v-if="countFeedback != 0" class="paging">
              <b-pagination class="page-number" @input="getBookById" v-model="page" :total-rows="countFeedback" :per-page="5">
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
          <div v-else class="bookdetail-feedback">
            <div class="title"><strong>Đánh giá/Bình luận</strong></div>
            <div class="no-feedback">Chưa có đánh giá, bình luận!</div>
          </div>
          <div class="bookdetail-bottom1">
            <div class="title1">SÁCH TỪ NGƯỜI ĐĂNG</div>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-book" >
                  <div class="item-book" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 332px">
                      <b-skeleton-img card-img="top" aspect="3:1" height="250px"></b-skeleton-img>
                      <b-card style="height: 120px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="grid-book">
                <div class="item-book" v-for="item of book6user" :key="item.id">
                  <router-link @click.native="loadPage" :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="book-title">{{ item.title }}</div>
                    <label class="book-status">Thể loại: {{ item.category?.name }}</label>
                    <label class="book-status">Giá bìa: <strong>{{ item.coverPrice?.toLocaleString() }}đ</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="bookdetail-bottom2">
            <div class="title2">SÁCH CÙNG THỂ LOẠI</div>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-book" >
                  <div class="item-book" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 332px">
                      <b-skeleton-img card-img="top" aspect="3:1" height="250px"></b-skeleton-img>
                      <b-card style="height: 120px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="grid-book">
                <div class="item-book" v-for="item of book6category" :key="item.id">
                  <router-link @click.native="loadPage" :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="book-title">{{ item.title }}</div>
                    <div class="book-status"><img src="../image/user.png"> {{ item.user?.fullname }}</div>
                    <label class="book-status">Giá bìa: <strong>{{ item.coverPrice?.toLocaleString() }}đ</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_PERSONAL, API_REQUEST} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import ExchangeDialog from "@/pages/ManageTransaction/ExchangeDialog";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "BookDetail",
  components: {Layout, ExchangeDialog, LoadingDialog},
  data() {
    return {
      book: '',
      book6user: '',
      book6category: '',
      feedbacks: '',
      countFeedback: '',
      showDialog: false,
      showFlag: false,
      bookCanTrade: '',
      spinner: false,
      loading: false,
      listIdBook: [],
      page: 1
    }
  },
  created() {

    this.getBookById(1)
  },
  methods: {
    getBookById(pageNumber) {
      this.spinner = true
      const url = API_BOOK.DETAIL_BOOK + this.$route.query.id
      apiFactory.callApi(url,'GET',{}).then((res)=>{
        this.book = res.data.data
        this.get6BookUser(this.book.userId)
        this.get6BookCategory(this.book.categoryId)
        this.getFeedback(this.$route.query.id, pageNumber)
        this.spinner = false
      }).catch(() => {
      });
    },
    get6BookUser(userId) {
      this.loading = true;
      const url = API_BOOK.USER_BOOK6 + userId
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.book6user = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    get6BookCategory(categoryId) {
      this.loading = true;
      const url = API_BOOK.CATEGORY_6BOOK + categoryId
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.book6category = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    getFeedback(bookId, page){
      //this.loading = true;
      if(page){
        apiFactory.callApi(API_BOOK.GET_FEEDBACK_BOOK + bookId + '?page=' + page, 'GET', {}).then((res) => {
          this.feedbacks = res.data.data
          this.countFeedback = res.data.numberOfRecords
          //this.loading = false
        }).catch(() => {
        });
      }
      else{
        apiFactory.callApi(API_BOOK.GET_FEEDBACK_BOOK + bookId, 'GET', {}).then((res) => {
          this.feedbacks = res.data.data
          this.countFeedback = res.data.numberOfRecords
          //this.loading = false
        }).catch(() => {
        });
      }
    },
    getBookCanTrade() {
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.BOOK_CAN_TRADE
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.bookCanTrade = res.data.data
        this.loading = false;
      }).catch(() => {
      });
    },
    loadPage(){
      this.getBookById()
    },
    openDialog(){
      this.getBookCanTrade()
      this.showDialog = true
    },
    cancel(){
      this.showDialog = false
    },
    confirm(){
      const bookOffer = [...this.listIdBook]
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      const url = API_REQUEST.REQUEST + this.$route.query.id
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId,
        bookOffer
      }).then((res) => {
        if(res.data.message === 'REQUEST_SUCCESS'){
          console.log(alert('Yêu cầu trao đổi thành công!'))
          this.showDialog = false
        }
      }).catch(() => {
      });
    }
  },
  filters:{
    shorttext(value, limit){
      if(value){
        return value.substring(0, limit);
      }
    },
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

.dialogBook{
  height: 75%;
}

.dialogBook .gridMB {
  display: flex;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 10px;
  margin-right: 20px;
  overflow: auto;
}

.dialogBook .gridMB .itemMB {
  display: block;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: 220px;
  height: 450px;
  margin: 10px 0px 10px 20px;
}

.dialogBook .gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.dialogBook .gridMB .itemMB img {
  height: 290px;
  width: 218px;
  border-radius: 10px;
}

.dialogBook .gridMB .infoMB {
  height: 120px;
  padding: 5px;
}

.dialogBook .gridMB .infoMB img {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.dialogBook .gridMB .infoMB label {
  margin-left: 5px;
}

.dialogBook .gridMB .infoMB .book-titleMB{
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dialogBook .gridMB .infoMB .book-statusMB {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.checkboxes{
  width: 30px;
  height: 30px;
  border-radius: 15px;
  float: right;
  margin-right: 10px;
  background: grey;
}

.bookDetail {
  background: #F0F0F0;
}

.bookDetail .container {
  max-width: 1250px;
  background: #F0F0F0;
  border-radius: 10px;
  display: block;
}

.bookdetail-top{
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  border: 1px solid #9D6B54;
}

.bookdetail-top .left{
  width: 420px;
  border-radius: 10px;
}

.bookdetail-top .left .imgBD{
  width: 270px;
  height: 391px;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
}


.bookdetail-top .right{
  width: 726px;
}

.bookdetail-top .right .titleBD{
  margin-top: 30px;
  font-size: 1.8rem;
}

.bookdetail-top .right .infoBD{
  display: flex;
  justify-content: space-between;
}

.bookdetail-top .right .bookInfoBD{
  height: 280px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
}

.bookdetail-top .right .bookInfoBD span{
  font-weight: 500;
}

.bookdetail-top .right .bookInfoBD .priceBD{
  display: flex;
  height: 50px;
  width: 420px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  justify-content: space-between;
}

.bookdetail-top .right .bookInfoBD .priceBD .itemPrice{
  width: 33.33%;
}

.bookdetail-top .right .bookInfoBD .priceBD .cover{
  font-weight: 700;
  font-size: 24px;
  color: red;
  font-style: normal;
}

.bookdetail-top .right .bookInfoBD .priceBD .deposit{
  font-weight: 700;
  font-size: 24px;
  color: #9D6B54;
  font-style: normal;
}

.bookdetail-top .right .bookInfoBD .priceBD .rent{
  font-weight: 700;
  font-size: 24px;
  color: grey;
  font-style: normal;
}

.bookdetail-top .right .infoBD .userBD{
  border-radius: 10px;
  border: 1px solid #9D6B54;
  height: 260px;
  width: 200px;
}

.bookdetail-top .right .infoBD .userBD .avatarBD{
  margin-top: 10px;
  margin-left: 48px;
  width: 100px;
  height: 100px;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD{
  display: block;
  text-align: center;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD .btn{
  border-radius: 5px;
  background-color: #9D6B54;
  color: white;
  margin-top: 10px;
  height: 30px;
  width: 100px;
  padding: 1px;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD .btn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.bookdetail-top .right .btn-tran{
  height: 60px;
  width: 65%;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.bookdetail-top .right .btn-tran .active{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 50px;
  width: 150px;
  margin-left: 32px;
}

.bookdetail-top .right .btn-tran .active:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.bookdetail-top .right .btn-tran .disable {
  border-radius: 10px;
  background-color: grey;
  color: white;
  border: 1px solid grey;
  height: 50px;
  width: 150px;
  margin-left: 32px;
  cursor: not-allowed;
}

.bookdetail-mid{
  border: 1px solid #9D6B54;
  max-width: 1230px;
  height: auto;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.bookdetail-mid .mid-info{
  margin-top: 20px;
  margin-left: 20px;
  line-height: 30px;
  display: flex;
}

.bookdetail-mid .mid-info .mid-info-left {
  line-height: 30px;
}

.bookdetail-mid .mid-info .mid-info-right {
  color: #9D6B54;
  margin-left: 150px;
  line-height: 30px;
}

.bookdetail-mid .mid-des .mid-content{
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-indent: 5%;
  text-align: justify;
}

.bookdetail-bottom1{
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border: 1px solid #9D6B54;
}

.grid-book {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 1206px;
  margin-left: 10px;
}

.item-book {
  border-radius: 10px;
  width: 191px;
  height: 380px;
  margin: 5px;
}

.item-book:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-book img{
  border-radius: 10px;
  height: 250px;
  width: 189px;
}

.grid-book .info {
  height: 120px;
  padding: 5px;
}

.grid-book .info img {
  width: 20px;
  height: 20px;
  margin-left: 0px;
}

.grid-book .info label {
  margin-left: 5px;
}

.grid-book .info .book-title {
  color: #9D6B54;
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.grid-book .info .book-status {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}


.bookdetail-bottom2{
  border: 1px solid #9D6B54;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.title{
  color: #9D6B54;
  font-size: 20px;
  margin-left: 20px;
  padding-top: 20px;
}

.title-content{
  color: #9D6B54;
  font-size: 20px;
  margin-left: 20px;
}

.title1{
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 420px;
}

.title2{
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 440px;
}

.showMore{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 40px;
  width: 150px;
  margin-top: 20px;
  margin-left: 530px;
  margin-bottom: 10px;
}

.showMore:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.bookdetail-feedback{
  border: 1px solid #9D6B54;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 2px;
  margin-bottom: 10px;
}

.feedbacks{
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  background: #f4f4f4;
  width: 93%;
  margin-left: 50px;
  border-radius: 20px;
  padding: 10px;
}

.avatar-feedbacker{
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-left: 10px;
}

.feedbackItem{
  margin-left: 10px;
}

.feedbackItem .name{
  font-weight: bold;
  color: #9D6B54;
}

.feedbackItem .date{
  font-size: 12px;
  color: grey;
}

.feedbackItem .content{
  font-size: 14px;
}

.bookdetail-feedback .paging {
  margin-top: 20px;
}

.bookdetail-feedback .paging ul {
  justify-content: right;
  margin-right: 40px;
}

.no-feedback{
  color: grey;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

</style>