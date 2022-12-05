<template>
  <div class="mlBook">
    <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
    <Dashboard></Dashboard>
    <div class="row">
      <BookDetailDialog :show="showDialogBD" :cancel="cancel" v-if="showDialogBD" class="modal">
        <div class="topVRN">
          <div class="left">
            <img class="imgBD" v-bind:src="book.image">
          </div>
          <div class="right">
            <label class="titleBD"><strong>{{ book.title }}</strong></label>
            <div class="contentRight">
              <div class="bookInfoBD">
                <div>Người đăng: <span>{{ book.user.fullname }}</span></div>
                <div>Ngày đăng: <span>{{ book.postedDate | formatDate }}</span></div>
                <div>Thể loại: <span>{{ book.category.name }}</span></div>
                <div>Tác giả: <span>{{ book.author }}</span></div>
                <div>Nhà xuất bản: <span>{{ book.publisher }}</span></div>
                <div>Năm xuất bản: <span>{{ book.year }}</span></div>
                <div>Ngôn ngữ: <span>{{ book.language }}</span></div>
                <div>Số trang: <span>{{ book.numberOfPages }}</span></div>
                <div>Trọng lượng: <span>{{ book.weight }}g</span></div>
                <div>Thời gian giao dịch: <span>{{ book.numberOfDays }} ngày</span></div>
                <div>Giá bìa: <span class="cover">{{ book.coverPrice.toLocaleString() }}đ</span></div>
                <div>Phí đặt cọc: <span class="deposit">{{ book.depositPrice.toLocaleString() }}đ</span></div>
                <div v-if="book.isRent">Phí thuê: <span class="rent">{{ book.rentFee.toLocaleString() }}đ</span></div>
                <div>Tình trạng: {{ book.statusBook }}</div>
              </div>
            </div>
          </div>
        </div>
      </BookDetailDialog>
      <FeedbackDialog :show="showDialogFB" :cancel="cancel" v-if="showDialogFB" class="modal">
        <div v-if="totalFeedbacks!=0" class="bookdetail-feedback">
          <table class="table">
            <thead>
            <tr>
              <td>Mã đánh giá</td>
              <td>Mã người đánh giá</td>
              <td>Nội dung</td>
              <td>Ngày</td>
              <td></td>
            </tr>
            </thead>
            <tbody v-for="item of listFeedbacks" :key="item.id">
            <tr>
              <td>{{ item.id }}</td>
              <td>{{item.userId}}</td>
              <td>{{item.content}}</td>
              <td>{{ item.createdDate | format }}</td>
              <td><button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDelete(item.id, item.bookId)">Xoá</button></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="bookdetail-feedback">
          <div class="no-feedback">Chưa có đánh giá, bình luận!</div>
        </div>
      </FeedbackDialog>
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <div class="titleMB">QUẢN LÝ SÁCH</div>
          <div class="search-book">
            <select class="selectCss"  v-model="filter" @change="onchange($event)">
              <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
            </select>
            <div>
              <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
              <button v-on:click="HandleSearch">Tìm</button>
            </div>
          </div>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Chi tiết</td>
                <td>Ảnh</td>
                <td>Mã</td>
                <td>Người đăng</td>
                <td>Tên sách</td>
                <td>Giá bìa</td>
                <td>Giá cọc</td>
                <td>Ngày đăng</td>
                <td>Trạng thái</td>
                <td>Duyệt/Hủy</td>
                <td>Đánh giá</td>
              </tr>
              </thead>
              <tbody v-for="item of listBooks" :key="item.id">
              <tr>
                <td style="padding-left: 12px">
                  <button class="tableBtnAction" v-on:click="openDialogBD(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button>
                </td>
                <td><img v-bind:src="item.image" height="90px" width="65px"></td>
                <td>{{ item.id }}</td>
                <td>{{ item.user.fullname }}</td>
                <td style="max-width: 300px">{{ item.title }}</td>
                <td>{{ item.coverPrice.toLocaleString() }}đ</td>
                <td>{{ item.depositPrice.toLocaleString() }}đ</td>
                <td>{{ item.postedDate |formatDate }}</td>
                <td v-if="item.status == 'Approved'"><span class="role approved">ĐÃ DUYỆT</span></td>
                <td v-if="item.status == 'Denied'"><span class="role denied">ĐÃ HỦY</span></td>
                <td v-if="item.status == 'Waiting'"><span class="role waiting">ĐANG ĐỢI</span></td>
                <td v-if="item.status == 'Waiting'">
                  <button class="tableBtnAction"
                          v-on:click="HandleApproved(item.id)"><Icon icon="material-symbols:check-box-rounded"/>
                  </button>
                  <button class="tableBtnAction"
                          v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/>
                  </button>
                </td>
                <td v-if="item.status == 'Approved'">
                  <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:check-box-rounded"/>
                  </button>
                  <button class="tableBtnAction"
                          v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/>
                  </button>
                </td>
                <td v-if="item.status == 'Denied'">
                  <button class="tableBtnAction" v-on:click="HandleApproved(item.id)">
                    <Icon icon="material-symbols:check-box-rounded"/>
                  </button>
                  <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/>
                  </button>
                </td>
                <td style="padding-left: 18px">
                  <button class="tableBtnAction" v-on:click="openDialogFB(item.id)"><Icon icon="ic:baseline-remove-red-eye"/></button>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="paging-book">
              <b-pagination v-if="filter==''" class="page-number" @input="getBooksAll" v-model="page" :total-rows="totalBook"
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
              <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getBooksAll" v-model="page" :total-rows="totalBook"
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
              <b-pagination v-if="filter=='Đã Duyệt'" class="page-number" @input="getBooksApproved" v-model="page" :total-rows="totalBook"
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
              <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getBooksDenied" v-model="page" :total-rows="totalBook"
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
              <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getBooksWaiting" v-model="page" :total-rows="totalBook"
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
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_BOOK} from "@/constant/constant-api";
import LoadingDialog from "@/components/LoadingDialog";
import BookDetailDialog from "@/pages/ManageBook/BookDetailDialog";
import FeedbackDialog from "@/pages/ManageBook/FeedbackDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";

export default {
  name: "GetBooks",
  components: {BookDetailDialog, LoadingDialog, FeedbackDialog, Icon, Dashboard},
  data() {
    return {
      book: '',
      listBooks: '',
      totalBook: '',
      listFeedbacks: '',
      totalFeedbacks: '',
      search: '',
      isSearch: false,
      spinner: false,
      showDialogFB: false,
      showDialogBD: false,
      listFilter: ['Tất Cả', 'Đã Duyệt', 'Đã Hủy', 'Đang Đợi'],
      filter: 'Tất Cả',
      page: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.isSearch = false
    this.getBooksAll(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getBooksAll(1)
      }
      if(e.target.value=== 'Đã Duyệt'){
        this.getBooksApproved(1)
      }
      if(e.target.value === 'Đã Hủy'){
        this.getBooksDenied(1)
      }
      if(e.target.value === 'Đang Đợi'){
        this.getBooksWaiting(1)
      }
    },
    getBooksAll(pageNumber) {
      this.spinner = true
      if (this.isSearch) {
        apiFactory.callApi(API_MANAGE_BOOK.SEARCH_BOOK + pageNumber, 'POST', {
          search: this.search
        }).then((res) => {
          this.listBooks = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }
      else {
        apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK + pageNumber, 'GET', {}).then((res) => {
          this.listBooks = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }
    },
    getBooksApproved(pageNumber) {
      this.spinner = true
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_APPROVED + pageNumber, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getBooksDenied(pageNumber) {
      this.spinner = true
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_DENIED + pageNumber, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getBooksWaiting(pageNumber) {
      this.spinner = true
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_BOOK.LIST_BOOK_WAITING + pageNumber, 'GET', {}).then((res) => {
        this.listBooks = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleApproved(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_BOOK.APPROVED_BOOK + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getBooksAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getBooksAll(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getBooksApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getBooksDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getBooksWaiting(this.page)
          }
        }
      }).catch(() => {
        alert('Duyệt không thành công!')
      });
    },
    HandleDenied(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_BOOK.DENIED_BOOK + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getBooksAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getBooksAll(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getBooksApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getBooksDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getBooksWaiting(this.page)
          }
        }
      }).catch(() => {
        alert('Hủy không thành công!')
      });
    },
    getBookById(bookId) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_BOOK.DETAIL_BOOK + bookId, 'GET', {}).then((res) => {
        this.book = res.data.data
        this.spinner = false
        this.showDialogBD = true
      }).catch(() => {
      });
    },
    getFeedback(bookId) {
      this.spinner = true
      const url = API_MANAGE_BOOK.FEEDBACK_BOOK + bookId
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listFeedbacks = res.data.data
        this.totalFeedbacks = res.data.numberOfRecords
        this.spinner = false
        this.showDialogFB = true
      }).catch(() => {
      });
    },
    HandleDelete(feedbackId, bookId){
      const url = API_MANAGE_BOOK.DELETE_FEEDBACK + feedbackId
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          this.getFeedback(bookId)
          console.log(alert('Xóa thành công!'))
        }
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getBooksAll(1)
    },
    openDialogBD(bookId) {
      this.getBookById(bookId)
    },
    openDialogFB(bookId) {
      this.getFeedback(bookId)
    },
    cancel() {
      this.showDialogBD = false
      this.showDialogFB = false
    },
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString('en-GB')
    },
    format(value) {
      return new Date(value).toLocaleString('en-GB')
    }
  }
}
</script>

<style>
@import "../../assets/CSS/tableManage.css";

.paging-book {
  margin-top: 10px;
}

.paging-book ul {
  justify-content: right;
  margin-right: 15px;
}

.search-book {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}

.selectCss{
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-book input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-book button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-book button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>
