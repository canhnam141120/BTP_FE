<template>
  <Layout>
    <main style="flex-grow: 1">
      <LoadingDialog style="z-index: 999999" v-show="spinner"></LoadingDialog>
      <ConfirmDialog :show="showAcceptDialog" v-if="showAcceptDialog" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận chấp nhận yêu cầu trao đổi sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelAcceptDialog">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleAccept">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận từ chối yêu cầu trao đổi sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogHide" v-if="showConfirmDialogHide" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận ẩn sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogHide">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmHide">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <ConfirmDialog :show="showConfirmDialogShow" v-if="showConfirmDialogShow" class="modal">
        <div>
          <div class="dialogTitle">XÁC NHẬN</div>
          <div style="color: #9d6b54; text-align: center;">Xác nhận hiện sách!</div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancelConfirmDialogShow">Hủy</button>
            <button class="dialogBtn" v-on:click="HandleConfirmShow">Xác nhận</button>
          </div>
        </div>
      </ConfirmDialog>
      <b-alert v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{responseMessage}}
      </b-alert>
      <b-alert v-else :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{responseMessage}}
      </b-alert>

      <div class="VR">
        <CreateBookDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
          <div>
            <div class="dialogTitle">CHỈNH SỬA SÁCH</div>
          </div>
          <div class="top-form">
            <div class="left-form">
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Tiêu đề:</b-col>
                <b-col class="input-div" cols="9"><input type="text" disabled v-model="book.title" class="input-text"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Tác giả:</b-col>
                <b-col class="input-div" cols="9"><input type="text" class="input-text" disabled v-model="book.author"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Thể loại:</b-col>
                <b-col class="input-div" cols="9"><input type="text" class="input-text" disabled v-model="book.category.name"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Ngôn ngữ:</b-col>
                <b-col class="input-div" cols="9"><input type="text" class="input-text" disabled v-model="book.language"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Nhà XB:</b-col>
                <b-col class="input-div" cols="9"><input type="text" disabled v-model="book.publisher" class="input-text"></b-col>
              </b-row>
            </div>
            <div class="mid-form">
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Năm XB:</b-col>
                <b-col cols="6"><input type="number" v-model="book.year" disabled class="input-text-short"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Số trang:</b-col>
                <b-col cols="6"><input type="number" disabled v-model="book.numberOfPages" class="input-text-short"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Khối lượng:</b-col>
                <b-col cols="6"><input type="number" disabled v-model="book.weight" class="input-text-short"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Chọn ảnh:</b-col>
                <b-col class="input-div" cols="6"><input type="file" title=" " class="input-text-short"
                                                         @change="uploadImage"></b-col>
              </b-row>
            </div>
            <div class="right-form">
              <b-row class="book-content">
                <b-col class="grCb" cols="9">
                  <input type="checkbox" value="true" class="checkB" v-model="book.isExchange">&ensp;Trao đổi&emsp;
                  <input type="checkbox" value="true" class="checkB" v-model="book.isRent">&ensp;Thuê
                </b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Giá bìa:</b-col>
                <b-col cols="9"><input type="number" maxlength="50" required placeholder="Nhập giá bìa"
                                       v-model="book.coverPrice" class="input-text-short"></b-col>
              </b-row>
              <b-row class="book-content">
                <b-col class="input-label" cols="2">Giá đặt cọc:</b-col>
                <b-col cols="9"><input type="number" maxlength="50" required placeholder="Nhập giá đặt cọc"
                                       v-model="book.depositPrice" class="input-text-short"></b-col>
              </b-row>
              <b-row v-if="book.isRent" class="book-content">
                <b-col class="input-label" cols="2">Giá thuê:</b-col>
                <b-col cols=3><input type="number" maxlength="7" required placeholder="Giá thuê" v-model="book.rentFee"
                                     class="input-text-short"></b-col>
              </b-row>
            </div>
            <div class="img-form">
              <img v-bind:src="book.image" style="width: 190px; height: 260px; border: 1px solid #9D6B54;">
            </div>
          </div>
          <div class="bottom-form">
            <b-row class="book-content">
              <b-col class="input-label" style="width: 60px" cols="2">Tình trạng:</b-col>
              <b-col class="input-div" cols="9">
              <textarea type="text" style="height: 100px; width: 1200px"
                        maxlength="250" required placeholder="Nhập tình trạng sách"
                        v-model="book.statusBook" class="input-text">
              </textarea></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col class="input-label" style="width: 60px" cols="2">Nội dung:</b-col>
              <b-col class="input-div" cols="9">
              <textarea type="text" disabled style="height: 100px; width: 1200px"
                        v-model="book.description" class="input-text">
            </textarea></b-col>
            </b-row>
          </div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancel">Hủy</button>
            <button class="dialogBtn" v-on:click="save">Lưu</button>
          </div>
        </CreateBookDialog>
        <div class="containerVR">
          <div class="left-contentVR">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentVR">
            <div class="topVR">
              <div class="left">
                <router-link style="position: relative" v-if="book.isReady && book.status == 'Approved'" :to="{ name: 'BookDetail', query: { id:book.id }}">
                  <img class="imgBD" v-bind:src="book.image">
                  <label class="layer1" v-if="book.isTrade">Đang giao dịch</label>
                  <label class="layer2" v-else>Sẵn sàng</label>
                </router-link>
                <div v-else style="position: relative">
                  <img class="imgBD" v-bind:src="book.image">
                  <label v-if="!book.isReady && book.status == 'Approved'" class="hide">Đang ẩn</label>
                  <label v-if="book.isReady && book.status == 'Waiting'" class="status">Đang đợi duyệt</label>
                  <label v-if="book.isReady && book.status == 'Denied'" class="status">Không được duyệt</label>
                </div>
                <div class="extra">
                  <button class="editBtn" v-on:click="openDialog">Chỉnh sửa</button>
                </div>
              </div>
              <div class="right">
                <label class="titleBD"><strong>{{book.title}}</strong></label>
                <button v-if="book.isReady && book.status == 'Approved' && !book.isTrade" class="hideBtn" v-on:click="HandleHide(book.id)">Ẩn</button>
                <button v-if="book.isReady == false && book.status == 'Approved' && !book.isTrade" class="hideBtn" v-on:click="HandleShow(book.id)">Hiện</button>
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
                    <div>Tình trạng: {{ book.statusBook }}</div>
                    <div v-if="book.status == 'Approved'">Trạng thái: <strong style="color: green;">Đã được duyệt</strong></div>
                    <div v-if="book.status == 'Denied'">Trạng thái: <strong style="color: red;">Đã bị hủy</strong></div>
                    <div v-if="book.status == 'Waiting'">Trạng thái: <strong>Đang đợi duyệt</strong></div>
                    <div>Giá bìa: <span class="cover">{{ book.coverPrice.toLocaleString() }}đ</span></div>
                    <div>Phí đặt cọc: <span class="deposit">{{ book.depositPrice.toLocaleString() }}đ</span></div>
                    <div v-if="book.isRent">Phí thuê: <span class="rent">{{ book.rentFee.toLocaleString() }}đ</span></div>
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
import {API_BOOK,API_MANAGE_BOOK, API_PERSONAL, API_REQUEST} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";
import CreateBookDialog from "@/pages/Personal/CreateBookDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import {generateURLUpload} from "@/S3";

export default {
  name: "ViewRequestBook",
  components: {LoadingDialog, SideBar_Personal, Layout, CreateBookDialog, ConfirmDialog},
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      showAcceptDialog: false,
      responseFlag: true,
      responseMessage: '',
      showConfirmDialogHide: false,
      showConfirmDialogShow: false,

      book: '',
      listRequestReceive: '',
      loading: false,
      userId: '',
      userByToken: '',
      spinner: false,
      showDialog: false,
      tmpId: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getBookById()
    this.getRequestReceived()
  },
  methods: {
    getBookById() {
      const url = API_MANAGE_BOOK.DETAIL_BOOK + this.$route.query.id
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

    HandleHide(bookId){
      this.tmpId = bookId
      this.showConfirmDialogHide = true
    },
    cancelConfirmDialogHide(){
      this.showConfirmDialogHide = false
    },
    HandleConfirmHide(){
      const url = API_BOOK.HIDE_BOOK + this.tmpId
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Ẩn sách thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.getBookById()
        this.showConfirmDialogHide = false
      }).catch(() => {
      });
    },
    HandleShow(bookId){
      this.tmpId = bookId
      this.showConfirmDialogShow = true
    },
    cancelConfirmDialogShow(){
      this.showConfirmDialogShow = false
    },
    HandleConfirmShow(){
      const url = API_BOOK.SHOW_BOOK + this.tmpId
      apiFactory.callApi(url, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hiện sách thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.getBookById()
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogShow = false
      }).catch(() => {
      });
    },

    openDialog() {
      this.showDialog = true
    },
    cancel() {
      this.showDialog = false
    },
    save() {
      apiFactory.callApi(API_BOOK.EDIT_BOOK + this.book.id, 'PUT', {
        categoryId: this.book.categoryId,
        title: this.book.title,
        description: this.book.description,
        author: this.book.author,
        publisher: this.book.publisher,
        year: this.book.year,
        language: this.book.language,
        numberOfPages: this.book.numberOfPage,
        weight: this.book.weight,
        coverPrice: this.book.coverPrice,
        image: this.book.image,
        depositPrice: this.book.depositPrice,
        statusBook: this.book.statusBook,
        isExchange: this.book.isExchange,
        isRent: this.book.isRent,
        rentFee: this.book.rentFee
      }).then((res) => {
        this.responseMessage = ''
        if (res.data.message === 'UPDATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Sách của bạn đã được gửi lại QTV để duyệt!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialog = false
      }).catch(() => {
      });
    },
/*    handleFileUpload(e) {
      const file = document.querySelector('input[type=file]').files[0]
      var files = e.target.files
      if (!files[0]) {
        return
      }
      const reader = new FileReader()

      var rawImg;
      reader.onloadend = () => {
        rawImg = reader.result;
        this.book.image = rawImg
      }
      reader.readAsDataURL(file);
    },*/

    async uploadImage(){
      const image = document.querySelector('input[type=file]').files[0]
      const url = await generateURLUpload(image.name)
      await  fetch(url,{
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg"
        },
        body: image
      })

      const  url_uploaded = url.split("?")[0]
      this.book.image  = url_uploaded
    },

    HandleApproved(requestId){
      this.tmpId = requestId
      this.showAcceptDialog = true
    },
    cancelAcceptDialog(){
      this.showAcceptDialog = false
    },
    HandleAccept(){
      this.spinner = true
      window.scroll(0,0)
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_REQUEST.ACCEPT_REQUEST +  this.tmpId, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getRequestReceived()
          this.responseFlag = true
          this.responseMessage = 'Chấp nhận yêu cầu trao đổi sách - Thành công!'
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại!'
        }
        this.dismissCountDown = this.dismissSecs
        this.spinner = false
        this.showAcceptDialog = false
      }).catch(() => {});
    },

    HandleDenied(requestId){
      this.tmpId = requestId
      this.showConfirmDialog = true
    },
    cancelConfirmDialog(){
      this.showConfirmDialog = false
    },
    HandleConfirm(){
      this.spinner = true
      window.scroll(0,0)
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      const url = API_REQUEST.DENIED_REQUEST + this.tmpId
      apiFactory.callApi(url, 'PUT', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getRequestReceived()
          this.responseMessage = 'Từ chối yêu cầu trao đổi sách - Thành công!'
        }
        else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
        this.spinner = false
      }).catch(() => {});
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
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
  margin: 0px auto 10px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentVR {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}

.right-contentVR {
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
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

.hide{
  border-radius: 10px;
  left: 0;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  position: absolute;
  width: 200px;
  height: 290px;
  background-color: #9d6b54;
  opacity: 0.8;
  font-size: 26px;
  text-align: center;
  padding-top: 100px;
}

.status{
  border-radius: 10px;
  left: 0;
  margin-left: 20px;
  margin-top: 20px;
  color: white;
  position: absolute;
  width: 200px;
  height: 290px;
  background-color: grey;
  opacity: 0.8;
  font-size: 26px;
  text-align: center;
  padding-top: 100px;
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
  height: auto;
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

 .extra{
   text-align: center;
  margin-top: 10px;
}

.extra .editBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 40px;
  width: 120px;
}

 .extra .editBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.hideBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 40px;
  width: 50px;
  margin-right: 20px;
  margin-left: 20px;
}

.hideBtn:hover {
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
   border: 1px solid #9D6B54;
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

.layer2{
  margin-top: 20px;
  margin-left: 20px;
  position: absolute;
  left: 0;
  background-color: green;
  font-size: 12px;
  color: #F0ECE4;
  padding: 5px;
}

.layer1{
  margin-top: 20px;
  margin-left: 20px;
  position: absolute;
  left: 0;
  font-size: 12px;
  background-color: #ca0303;
  color: #F0ECE4;
  padding: 5px;
}
</style>