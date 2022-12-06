<template>
  <Layout>
    <main style="flex-grow: 1;">
      <LoadingDialog v-show="spinner"></LoadingDialog>
      <ExchangeDialog :show="showDialog"
                      :cancel="cancel"
                      :confirm="confirm"
                      v-if="showDialog" class="modal">
        <div>
          <div class="dialogTitle">CHỌN SÁCH DÙNG ĐỂ TRAO ĐỔI</div>
        </div>
        <div class="dialogBook">
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <div class="gridMB">
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
                  <div class="book-titleMB"><strong>{{ item.title }}</strong></div>
                  <div class="book-statusMB">Thể loại: <strong>{{ item.category?.name }}</strong></div>
                  <label class="book-statusMB">Giá cọc: <strong>{{
                      item.depositPrice?.toLocaleString()
                    }}đ</strong></label>
                  <label class="book-statusMB">{{ item.statusBook }}</label>
                </div>
                <input type="checkbox" class="checkboxes" v-bind:value="item.id" v-model="listIdBook">
              </div>
            </div>
          </b-skeleton-wrapper>
        </div>
        <div v-if="err!=''" style="text-align: center; color: #ca0303; margin-top: 5px;">{{err}}</div>
        <div class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="cancel">Hủy</button>
          <button class="dialogBtn" v-on:click="confirm">Xác nhận</button>
        </div>
      </ExchangeDialog>
      <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận gửi yêu cẩu trao đổi sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showRentDialog" v-if="showRentDialog" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận thuê sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmRentDialog">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmRent">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <b-alert style="position: absolute; right: 0;" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{responseMessage}}
      </b-alert>
      <b-alert style="position: absolute; right: 0;" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{responseMessage}}
      </b-alert>
      <div class="bookDetail">
        <div class="container">
          <div class="bookdetail-top">
            <div class="left">
              <img class="imgBD" v-bind:src="book.image">
              <div style="text-align: center; margin-bottom: 10px">
                <label v-if="book.isTrade" class="layerRed">Đang giao dịch</label>
                <label v-else class="layerGreen">Sẵn sàng</label>
                <div style="text-align: center">
                  <button v-if="userByToken != '' && !checkLike" class="btnLike" v-on:click="HandleLike">
                    <Icon icon="ant-design:like-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                  </button>
                  <button v-if="userByToken != '' && checkLike" class="btnLike" v-on:click="HandleUnLike">
                    <Icon icon="ant-design:dislike-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                  </button>
                </div>
              </div>
            </div>
            <div class="right">
              <label class="titleBD"><strong>{{ book.title }}</strong></label>
              <div class="infoBD">
                <div class="bookInfoBD">
                  <div>Thể loại: <span>{{ book.category?.name }}</span></div>
                  <div>Tác giả: <span>{{ book.author }}</span></div>
                  <div>Nhà xuất bản: <span>{{ book.publisher }}</span></div>
                  <div>Năm xuất bản: <span>{{ book.year }}</span></div>
                  <div>Ngôn ngữ: <span>{{ book.language }}</span></div>
                  <div>Số trang: <span>{{ book.numberOfPages }}</span></div>
                  <div>Trọng lượng: <span>{{ book.weight }}g</span></div>
                  <div>Thời gian giao dịch: <span>{{ book.numberOfDays }} ngày</span></div>
                  <div class="priceBD">
                    <div class="itemPrice">Giá bìa <span class="cover">{{ book.coverPrice?.toLocaleString() }}đ</span>
                    </div>
                    <div class="itemPrice">Phí đặt cọc <span class="deposit">{{
                        book.depositPrice?.toLocaleString()
                      }}đ</span></div>
                    <div v-if="book.isRent" class="itemPrice">Phí thuê <span
                        class="rent">{{ book.rentFee?.toLocaleString() }}đ</span></div>
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
                    <router-link v-if="userByToken.UserId != book.user?.id" class="btn" :to="{ name: 'OtherPerson', query: {id:book.user?.id}}">Ghé xem</router-link>
                    <router-link v-else class="btn" to="/MyBooks">Trang cá nhân</router-link>
                  </div>
                </div>
              </div>
              <div v-if="userByToken && userByToken.UserId != book.user?.id">
                <div v-if="!book.isTrade" class="btn-tran">
                  <button v-if="book.isExchange" class="active" v-on:click="openDialog">Trao đổi</button>
                  <button v-else class="disable">Trao đổi</button>
                  <button v-if="book.isRent" class="active" v-on:click="HandleRent">Thuê</button>
                  <button v-else class="disable">Thuê</button>
                </div>
                <div v-else class="btn-tran">
                  <button class="disable">Trao đổi</button>
                  <button class="disable">Thuê</button>
                </div>
              </div>
              <router-link  v-if="userByToken == ''" class="notLogin" to="/Login">Đăng nhập để có thể giao dịch!</router-link>
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
                <div>{{ book.title }}</div>
                <div>{{ book.user?.fullname }}</div>
                <div>{{ book.coverPrice?.toLocaleString() }}đ</div>
                <div>{{ book.depositPrice?.toLocaleString() }}đ</div>
                <div v-if="book.isRent">{{ book.rentFee?.toLocaleString() }}đ</div>
                <div>{{ book.numberOfDays }} ngày</div>
                <div>{{ book.postedDate }}</div>
                <div>{{ book.category?.name }}</div>
                <div>{{ book.author }}</div>
                <div>{{ book.publisher }}</div>
                <div>{{ book.year }}</div>
                <div>{{ book.language }}</div>
                <div>{{ book.numberOfPages }}</div>
                <div>{{ book.weight }}g</div>
                <div>{{ book.statusBook }}</div>
              </div>

            </div>
            <hr>
            <div class="mid-des">
              <div class="title-content"><strong>Nội dung</strong></div>
              <div v-show="!showFlag">
                <div class="mid-content">{{ book.description | shorttext(610) }}...</div>
                <button class="showMore" v-on:click="showFlag=true;">Đọc thêm</button>
              </div>
              <div v-show="showFlag">
                <div class="mid-content">{{ book.description }}</div>
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
                <div class="name">{{ item.user?.fullname }}</div>
                <div class="date">{{ item.createdDate | formatDate }}</div>
                <div class="content">{{ item.content }}</div>
              </div>
            </div>
            <div v-if="countFeedback != 0" class="paging">
              <b-pagination class="page-number" @input="getBookById" v-model="page" :total-rows="countFeedback"
                            :per-page="5">
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
                <div class="grid-book">
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
                  <router-link style="position: relative" @click.native="loadPage" :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                    <label class="lay1" v-if="item.isTrade">Đang giao dịch</label>
                    <label class="lay2" v-else>Sẵn sàng</label>
                  </router-link>
                  <div class="info">
                    <div class="book-title"><strong>{{ item.title }}</strong></div>
                    <label class="book-status">Thể loại: <strong>{{ item.category?.name }}</strong></label>
                    <label class="book-status">Giá cọc: <strong>{{
                        item.depositPrice?.toLocaleString()
                      }}đ</strong></label>
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
                <div class="grid-book">
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
                  <router-link style="position: relative" @click.native="loadPage" :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                    <label class="lay1" v-if="item.isTrade">Đang giao dịch</label>
                    <label class="lay2" v-else>Sẵn sàng</label>
                  </router-link>
                  <div class="info">
                    <div class="book-title"><strong>{{ item.title }}</strong></div>
                    <div class="book-status">Đăng bởi: <strong>{{ item.user?.fullname }}</strong></div>
                    <label class="book-status">Giá cọc: <strong>{{
                        item.depositPrice?.toLocaleString()
                      }}đ</strong></label>
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
import ExchangeDialog from "@/components/ExchangeDialog";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import {Icon} from '@iconify/vue2';

export default {
  name: "BookDetail",
  components: {Layout, ExchangeDialog, LoadingDialog, ConfirmDialog, Icon},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,

      err: '',
      userByToken: '',
      book: '',
      book6user: '',
      book6category: '',
      feedbacks: '',
      countFeedback: '',
      showDialog: false,
      showFlag: false,
      showConfirmDialog: false,
      showArlertSucess: false,
      showRentDialog: false,
      bookCanTrade: '',
      spinner: false,
      loading: false,
      listIdBook: [],
      page: 1,
      checkLike: false
    }
  },
  created() {
    if(this.$cookies.get('token')){
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
    }
    this.getBookById(1)
  },
  methods: {
    getBookById(pageNumber) {
      const url = API_BOOK.DETAIL_BOOK + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        if(res.data.data){
          this.book = res.data.data
          this.get6BookUser(this.book.userId)
          this.get6BookCategory(this.book.categoryId)
          this.getFeedback(this.$route.query.id, pageNumber)
          this.CheckLike()
        }else{
          this.$router.push({name: "404Page"})
        }
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
    getFeedback(bookId, page) {
      //this.loading = true;
      if (page) {
        apiFactory.callApi(API_BOOK.GET_FEEDBACK_BOOK + bookId + '?page=' + page, 'GET', {}).then((res) => {
          this.feedbacks = res.data.data
          this.countFeedback = res.data.numberOfRecords
          //this.loading = false
        }).catch(() => {
        });
      } else {
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
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.BOOK_CAN_TRADE
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.bookCanTrade = res.data.data
        this.loading = false;
      }).catch(() => {
      });
    },
    loadPage() {
      this.getBookById()
    },
    openDialog() {
      this.getBookCanTrade()
      this.showDialog = true
    },
    cancel() {
      this.showDialog = false
    },
    confirm() {
      const bookOffer = [...this.listIdBook]
      if(bookOffer == ''){
        this.err = 'Vui lòng chọn ít nhất 1 cuốn sách!'
      }else{
        this.err = ''
        this.showConfirmDialog = true
      }
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      window.scroll(0,0)
      const bookOffer = [...this.listIdBook]
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      const url = API_REQUEST.REQUEST + this.$route.query.id
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId,
        bookOffer
      }).then((res) => {
        if (res.data.message === 'REQUEST_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Yêu cầu trao đổi sách của bạn đã được gửi!'
        }
        else{
          this.responseFlag = false
          if(res.data.message == 'SHIP_INFO_EMPTY'){
            this.responseMessage = 'Vui lòng cập nhật thông tin vận chuyển của bạn trước khi gửi yêu cầu!'
          }else{
            this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
          }
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
        this.showDialog = false
        this.getBookById()
      }).catch(() => {
        this.getBookById()
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.dismissCountDown = this.dismissSecs
        this.showDialog = false
      });
    },
    HandleRent(){
      this.showRentDialog = true
    },
    cancelConfirmRentDialog(){
      this.showRentDialog = false
    },
    HandleConfirmRent(){
      window.scroll(0,0)
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_REQUEST.RENT + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Giao dịch thuê của bạn đã được tạo! Vui lòng thanh toán trong ngày hôm nay để giao dịch được bắt đầu!'
        }
        else{
          this.responseFlag = false
          if(res.data.message == 'SHIP_INFO_EMPTY'){
            this.responseMessage = 'Vui lòng cập nhật thông tin vận chuyển của bạn trước khi dùng dịch vụ!'
          }else {
            this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
          }
        }
        this.dismissCountDown = this.dismissSecs
        this.getBookById()
        this.showRentDialog = false
      }).catch(() => {
        this.dismissCountDown = this.dismissSecs
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.getBookById()
        this.showRentDialog = false
      });
    },
    HandleLike() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.ADD_BOOK_FAVORITE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'ADD_SUCCESS') {
          this.getBookById(1)
          this.checkLike = true
        }
      }).catch(() => {
      });
    },
    HandleUnLike() {
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_BOOK_FAVORITE + this.$route.query.id, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'DELETE_SUCCESS') {
          this.getBookById(1)
          this.checkLike = false
        }
      }).catch(() => {
      });
    },
    CheckLike(){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.CHECK_BOOK_LIKE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'TRUE') {
          this.checkLike = true
        }else{
          this.checkLike = false
        }
      }).catch(() => {
      });
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  },
  filters: {
    shorttext(value, limit) {
      if (value) {
        return value.substring(0, limit);
      }
    },
    formatDate(value) {
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
  font-weight: 600;
}

.dialogBook {
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
  color: #9D6B54;
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

.layerGreen{
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 80px;
  margin-top: 30px;
  background-color: green;
  color: #F0ECE4;
  padding: 5px;
}

.layerRed{
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 80px;
  margin-top: 30px;
  background-color: #ca0303;
  color: #F0ECE4;
  padding: 5px;
}

.lay2{
  position: absolute;
  left: 0;
  background-color: green;
  font-size: 12px;
  color: #F0ECE4;
  padding: 5px;
}

.lay1{
  position: absolute;
  left: 0;
  font-size: 12px;
  background-color: #ca0303;
  color: #F0ECE4;
  padding: 5px;
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

.dialogBook .gridMB .infoMB .book-titleMB {
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

.checkboxes {
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

.bookdetail-top {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
}

.bookdetail-top .left {
  position: relative;
  width: 420px;
  border-radius: 10px;
}

.bookdetail-top .left .imgBD {
  width: 250px;
  height: 371px;
  margin-left: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
}

.bookdetail-top .right {
  width: 726px;
}

.btnLike{
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 30px;
  margin-right: 90px;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  background: #9D6B54;
  color: #F0ECE4;
  font-size: 16px;
  font-weight: 700;
}

.btnLike:hover {
  background: #F0ECE4;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

.bookdetail-top .right .titleBD {
  margin-top: 30px;
  font-size: 1.8rem;
}

.bookdetail-top .right .infoBD {
  color: grey;
  display: flex;
  justify-content: space-between;
}

.bookdetail-top .right .bookInfoBD {
  height: 280px;
  margin-left: 20px;
  margin-top: 10px;
  display: block;
}

.bookdetail-top .right .bookInfoBD span {
  font-weight: 600;
}

.bookdetail-top .right .bookInfoBD .priceBD {
  display: flex;
  height: 50px;
  width: 420px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 18px;
  justify-content: space-between;
}

.bookdetail-top .right .bookInfoBD .priceBD .itemPrice {
  width: 33.33%;
}

.bookdetail-top .right .bookInfoBD .priceBD .cover {
  font-weight: 700;
  font-size: 24px;
  color: #ca0303;
  font-style: normal;
}

.bookdetail-top .right .bookInfoBD .priceBD .deposit {
  font-weight: 700;
  font-size: 24px;
  color: #9D6B54;
  font-style: normal;
}

.bookdetail-top .right .bookInfoBD .priceBD .rent {
  font-weight: 700;
  font-size: 24px;
  color: grey;
  font-style: normal;
}

.bookdetail-top .right .infoBD .userBD {
  border-radius: 10px;
  border: 1px solid #9D6B54;
  height: 260px;
  width: 200px;
}

.bookdetail-top .right .infoBD .userBD .avatarBD {
  margin-top: 10px;
  margin-left: 48px;
  width: 100px;
  height: 100px;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD {
  display: block;
  text-align: center;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD .btn {
  border-radius: 5px;
  background-color: #9D6B54;
  color: #F0ECE4;
  margin-top: 10px;
  width: fit-content;
  padding: 5px;
}

.bookdetail-top .right .infoBD .userBD .userInfoBD .btn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.bookdetail-top .right .btn-tran {
  height: 60px;
  width: 65%;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.bookdetail-top .right .btn-tran .active {
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

.bookdetail-mid {
  border: 1px solid #9D6B54;
  max-width: 1230px;
  height: auto;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.bookdetail-mid .mid-info {
  margin-top: 20px;
  margin-left: 20px;
  line-height: 30px;
  display: flex;
}

.bookdetail-mid .mid-info .mid-info-left {
  color: grey;
  line-height: 30px;
}

.bookdetail-mid .mid-info .mid-info-right {
  color: #9D6B54;
  margin-left: 150px;
  line-height: 30px;
}

.bookdetail-mid .mid-des .mid-content {
  color: grey;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-indent: 5%;
  text-align: justify;
}

.bookdetail-bottom1 {
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
  color: #9D6B54;
  border-radius: 10px;
  width: 191px;
  height: auto;
  margin: 5px;
}

.item-book:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-book img {
  border-radius: 10px;
  height: 250px;
  width: 189px;
}

.grid-book .info {
  height: auto;
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


.bookdetail-bottom2 {
  border: 1px solid #9D6B54;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.title {
  color: #9D6B54;
  font-size: 20px;
  margin-left: 20px;
  padding-top: 20px;
}

.title-content {
  color: #9D6B54;
  font-size: 20px;
  margin-left: 20px;
}

.title1 {
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 420px;
}

.title2 {
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  margin-left: 440px;
}

.showMore {
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

.bookdetail-feedback {
  border: 1px solid #9D6B54;
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 2px;
  margin-bottom: 10px;
}

.feedbacks {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  background: #f4f4f4;
  width: 93%;
  margin-left: 50px;
  border-radius: 20px;
  padding: 10px;
}

.avatar-feedbacker {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-left: 10px;
}

.feedbackItem {
  margin-left: 10px;
}

.feedbackItem .name {
  font-weight: bold;
  color: #9D6B54;
}

.feedbackItem .date {
  font-size: 12px;
  color: grey;
}

.feedbackItem .content {
  font-size: 14px;
}

.bookdetail-feedback .paging {
  margin-top: 20px;
}

.bookdetail-feedback .paging ul {
  justify-content: right;
  margin-right: 40px;
}

.no-feedback {
  color: grey;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
}

.notLogin{
  text-decoration: none;
  border-radius: 10px;
  height: 50px;
  background-color: #9d6b54;
  color: #F0ECE4;
  text-align: center;
  font-size: 18px;
  padding: 10px 10px;
  border: 1px solid #9d6b54;
  font-weight: 600;
}

.notLogin:hover{
  background-color: #F0ECE4;
  color: #9d6b54;
  border: 1px solid #9d6b54;
}
</style>