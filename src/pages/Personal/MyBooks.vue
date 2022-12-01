<template>
  <Layout>
    <main style="flex-grow: 1">
      <CreateBookDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
        <div>
          <div class="dialogTitle">ĐĂNG SÁCH</div>
        </div>
        <div class="top-form">
          <div class="left-form">
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Tiêu đề:</b-col>
              <b-col class="input-div" cols="9"><input type="text" maxlength="50" required placeholder="Nhập tên sách"
                                                       v-model="title" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Tác giả:</b-col>
              <b-col class="input-div" cols="9"><input type="text" class="input-text" maxlength="50" required
                                                       placeholder="Nhập tên tác giả" v-model="author"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Thể loại:</b-col>
              <b-col class="input-div" cols="9">
                <select name="category" class="input-text" v-model="categoryId">
                  <option v-bind:value="item.id" v-for="item of listCategories" :key="item.id">{{ item.name }}</option>
                </select></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Ngôn ngữ:</b-col>
              <b-col class="input-div" cols="9">
                <select name="category" class="input-text" v-model="language">
                  <option v-bind:value="language" v-for="language of listLanguage" :key="language">{{ language }}
                  </option>
                </select>
              </b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Nhà XB:</b-col>
              <b-col class="input-div" cols="9"><input type="text" maxlength="50" required
                                                       placeholder="Nhập nhà xuất bản"
                                                       v-model="publisher" class="input-text"></b-col>
            </b-row>
          </div>
          <div class="mid-form">
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Năm XB:</b-col>
              <b-col cols="6"><input type="number" maxlength="4" required placeholder="Nhập năm xuất bản"
                                     v-model="year" class="input-text-short"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Số trang:</b-col>
              <b-col cols="6"><input type="number" maxlength="50" required placeholder="Nhập số trang"
                                     v-model="numberOfPage" class="input-text-short"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Khối lượng:</b-col>
              <b-col cols="6"><input type="number" maxlength="50" required placeholder="Nhập khối lượng"
                                     v-model="weight" class="input-text-short"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Chọn ảnh:</b-col>
              <b-col class="input-div" cols="6"><input type="file" title=" " class="input-text-short" name="image"
                                                       @change="handleFileUpload"></b-col>
            </b-row>
          </div>
          <div class="right-form">
            <b-row class="book-content">
              <b-col class="grCb" cols="9">
                <input type="checkbox" value="true" class="checkB" v-model="isExchange">&ensp;Trao đổi&emsp;
                <input type="checkbox" value="true" class="checkB" v-model="isRent">&ensp;Thuê
              </b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Giá bìa:</b-col>
              <b-col cols="9"><input type="number" maxlength="50" required placeholder="Nhập giá bìa"
                                     v-model="coverPrice" class="input-text-short"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" cols="2">Giá đặt cọc:</b-col>
              <b-col cols="9"><input type="number" maxlength="50" required placeholder="Nhập giá đặt cọc"
                                     v-model="depositPrice" class="input-text-short"></b-col>
            </b-row>
            <b-row v-if="isRent" class="book-content">
              <b-col class="input-label" cols="2">Giá thuê:</b-col>
              <b-col cols=3><input type="number" maxlength="7" required placeholder="Giá thuê" v-model="rentFee"
                                   class="input-text-short"></b-col>
            </b-row>
          </div>
          <div class="img-form">
            <img v-bind:src="imageSrc" style="width: 190px; height: 260px; border: 1px solid #9D6B54;">
          </div>
        </div>
        <div class="bottom-form">
          <b-row class="book-content">
            <b-col class="input-label" style="width: 60px" cols="2">Trạng thái:</b-col>
            <b-col class="input-div" cols="9">
              <textarea type="text" style="height: 100px; width: 1200px"
                        maxlength="50" required placeholder="Nhập trạng thái"
                        v-model="statusBook" class="input-text">
              </textarea></b-col>
          </b-row>
          <b-row class="book-content">
            <b-col class="input-label" style="width: 60px" cols="2">Nội dung:</b-col>
            <b-col class="input-div" cols="9">
              <textarea type="text" maxlength="500" required style="height: 100px; width: 1200px"
                        placeholder="Nhập mô tả nội dung sách"
                        v-model="description" class="input-text">
            </textarea></b-col>
          </b-row>
        </div>
        <div class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="cancel">Hủy</button>
          <button class="dialogBtn" v-on:click="save">Xác nhận</button>
        </div>
      </CreateBookDialog>
      <div class="MB">
        <div class="containerMB">
          <div class="left-contentMB">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMB">
            <div class="titleMB">Tủ sách của tôi</div>
            <hr>
            <div class="searchMB">
              <div>
                <button class="create-book" v-on:click="openDialog">
                  <Icon icon="material-symbols:add-circle-outline-rounded"/>
                  <label>Đăng sách</label>
                </button>
              </div>
              <div>
                <input class="inputMB" type="text" placeholder="Nhập tiêu đề sách" v-model="search">
                <button class="btnMB" v-on:click="HandleSearch">Tìm</button>
                <select class="selectCss" v-model="filter" @change="onchange($event)">
                  <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="gridMB">
                  <div class="itemMB" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 450px">
                      <b-skeleton-img card-img="top" aspect="3:1" height="290px"></b-skeleton-img>
                      <b-card style="height: 170px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="gridMB">
                <div class="itemMB" v-for="item of listBook" :key="item.id">
                  <router-link class="active" :to="{ name: 'ViewRequestBook', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="infoMB">
                    <div class="book-titleMB"><strong>{{ item.title }}</strong></div>
                    <div class="book-statusMB">Thể loại: <strong>{{ item.category.name }}</strong></div>
                    <label class="book-statusMB">Giá bìa: <strong>{{
                        item.coverPrice.toLocaleString()
                      }}đ</strong></label>
                    <label class="book-statusMB">{{ item.statusBook }}</label>
                    <label v-if="item.status == 'Approved'" class="book-statusMB">Trạng thái: <strong style="color: green">Đã được
                      duyệt</strong></label>
                    <label v-if="item.status == 'Denied'" class="book-statusMB">Trạng thái: <strong  style="color: #ca0303;">Đã bị
                      hủy</strong></label>
                    <label v-if="item.status == 'Waiting'" class="book-statusMB">Trạng thái: <strong>Đang đợi
                      duyệt</strong></label>
                    <label class="book-statusMB" style="color: red; font-weight: bold" v-if="item.isTrade">Đang giao dịch</label>
                    <label class="book-statusMB" style="color: green; font-weight: bold" v-else>Sẵn sàng</label>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="pagingMB">
              <b-pagination v-if="filter==''" class="page-numberMB" @input="getMyBooks" v-model="page"
                            :total-rows="totalBook"
                            :per-page="6">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="filter=='Tất Cả'" class="page-numberMB" @input="getMyBooks" v-model="page"
                            :total-rows="totalBook"
                            :per-page="6">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="filter=='Đã Duyệt'" class="page-numberMB" @input="getMyBooksApproved" v-model="page"
                            :total-rows="totalBook"
                            :per-page="6">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="filter=='Đã Hủy'" class="page-numberMB" @input="getMyBooksDenied" v-model="page"
                            :total-rows="totalBook"
                            :per-page="6">
                <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                <template #page="{ page, active }">
                  <b v-if="active" style="color: white;">{{ page }} </b>
                  <b v-else style="color: #9D6B54;">{{ page }}</b>
                </template>
              </b-pagination>
              <b-pagination v-if="filter=='Đang Đợi'" class="page-numberMB" @input="getMyBooksWaiting" v-model="page"
                            :total-rows="totalBook"
                            :per-page="6">
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
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_CATEGORY, API_PERSONAL, API_BOOK} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import SideBar_Personal from "../../components/SideBar_Personal";
import VueJwtDecode from "vue-jwt-decode";
import {Icon} from '@iconify/vue2';
import CreateBookDialog from "@/pages/Personal/CreateBookDialog";

export default {
  name: "MyBooks",
  components: {SideBar_Personal, Layout, Icon, CreateBookDialog},
  data() {
    return {
      imageSrc: '',
      listBook: '',
      totalBook: '',
      loading: false,
      userByToken: '',
      userId: '',
      showDialog: false,
      listCategories: '',
      listLanguage: ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Hán', 'Tiếng Hàn', 'Tiếng Nhật',
        'Tiếng Tây Ban Nha', 'Tiếng Pháp', 'Tiếng Đức', 'Tiếng Nga', 'Tiếng Bồ Đào Nha',
        'Tiếng Hindi', 'Khác'],
      listFilter: ['Tất Cả', 'Đã Duyệt', 'Đã Hủy', 'Đang Đợi'],
      filter: 'Tất Cả',
      search: '',
      isSearch: false,
      page: 1,

      title: '',
      categoryId: '',
      description: '',
      author: '',
      publisher: '',
      year: '',
      language: '',
      numberOfPage: '',
      weight: '',
      coverPrice: '',
      depositPrice: '',
      statusBook: '',
      isExchange: false,
      isRent: false,
      rentFee: '',
      image: ''
    }
  },
  created() {
    this.getMyBooks(1)
  },
  methods: {
    onchange(e) {
      this.isSearch = false
      this.search = ''
      if (e.target.value === 'Tất Cả') {
        this.getMyBooks(1)
      }
      if (e.target.value === 'Đã Duyệt') {
        this.getMyBooksApproved(1)
      }
      if (e.target.value === 'Đã Hủy') {
        this.getMyBooksDenied(1)
      }
      if (e.target.value === 'Đang Đợi') {
        this.getMyBooksWaiting(1)
      }
    },
    getMyBooks(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      if (this.isSearch) {
        apiFactory.callApi(API_PERSONAL.SEARCH_MY_BOOK + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId,
          search: this.search
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      } else {
        apiFactory.callApi(API_PERSONAL.LIST_BOOK + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      }
    },
    getMyBooksApproved(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_BOOK_APPROVED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyBooksDenied(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_BOOK_DENIED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyBooksWaiting(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_BOOK_WAITING + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
        this.loading = false;
      }).catch(() => {
      });
    },
    getCategories() {
      apiFactory.callApi(API_MANAGE_CATEGORY.All_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
      }).catch(() => {
      });
    },
    openDialog() {
      this.getCategories()
      this.showDialog = true
    },
    cancel() {
      this.showDialog = false
    },
    save() {
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_BOOK.CREATE_BOOK, 'POST', {
        image: this.imageSrc,
        userId: this.userByToken.UserId,
        title: this.title,
        description: this.description,
        categoryId: this.categoryId,
        author: this.author,
        publisher: this.publisher,
        year: this.year,
        language: this.language,
        numberOfPages: this.numberOfPage,
        weight: this.weight,
        coverPrice: this.coverPrice,
        depositPrice: this.depositPrice,
        statusBook: this.statusBook,
        isExchange: this.isExchange,
        isRent: this.isRent,
        rentFee: this.rentFee
      }).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          this.showDialog = false
        }
      }).catch(() => {
      });
    },
    handleFileUpload(e) {
      const file = document.querySelector('input[type=file]').files[0]
      var files = e.target.files
      if (!files[0]) {
        return
      }
      const reader = new FileReader()

      var rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.imageSrc = rawImg
      }
      console.log(this.imageSrc)
      reader.readAsDataURL(file);
    },
    HandleSearch() {
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getMyBooks(1)
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
  font-weight: 600;
}

.MB {
  background: #F0F0F0;
}

.MB .containerMB {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 0px auto 20px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMB {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}

.right-contentMB {
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  margin-top: 30px;
  display: block;
  border: 1px solid #9D6B54;
}

.selectCss {
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
  padding-left: 10px;
  padding-right: 20px;
  margin-left: 20px;
  height: 40px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.right-contentMB .searchMB {
  margin: 10px 0px 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
}

.right-contentMB .titleMB {
  text-transform: uppercase;
  color: #9D6B54;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  padding-top: 20px;
}

.right-contentMB .searchMB .inputMB {
  border-radius: 7px;
  border: 1px solid grey;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.right-contentMB .searchMB .btnMB {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 40px;
  width: 80px;
  margin-left: 10px;
}

.right-contentMB .searchMB .btnMB:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.right-contentMB .gridMB {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 8px;
}

.right-contentMB .gridMB .itemMB {
  color: #9D6B54;
  border-radius: 10px;
  width: 260px;
  height: auto;
  margin: 10px 0px 10px 20px;
  border: 1px solid #9D6B54;
}

.right-contentMB .gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentMB .gridMB .itemMB img {
  margin-left: 20px;
  height: 290px;
  width: 220px;
}

.right-contentMB .gridMB .infoMB {
  height: auto;
  padding: 5px;
  margin-bottom: 10px;
}

.right-contentMB .gridMB .infoMB img {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.right-contentMB .gridMB .infoMB label {
  margin-left: 15px;
}

.right-contentMB .gridMB .infoMB .book-titleMB {
  color: #9D6B54;
  margin-left: 15px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.right-contentMB .gridMB .infoMB .book-categoryMB {
  margin-left: 15px;
  margin-right: 10px;
}

.right-contentMB .gridMB .infoMB .book-statusMB {
  margin-left: 15px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.right-contentMB .pagingMB {
  margin-top: 10px;
}

.right-contentMB .pagingMB ul {
  justify-content: right;
  margin-right: 15px;
}

.create-book {
  border: none;
  border: none;
  border-radius: 8px;
  background: #DFD5CB;
  width: 118px;
  height: 45px;
  margin-left: 35%;
  color: #9D6B54;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

.create-book label {
  margin-left: 5px;
}

.create-book:hover {
  background: #9D6B54;
  color: white;

}
</style>