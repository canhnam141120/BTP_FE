<template>
  <div v-show="show" class="dialog">
    <div class="dialogContent">
      <div class="form-book">
        <div class="left-form">
          <b-container class="bv-example-row all-form">
            <b-row class="book-content">
              <b-col cols="3">Tên sách:</b-col>
              <b-col cols="9" ><input type="text" maxlength="50" required placeholder="Nhập tên sách"
                                       v-model="title" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Tác giả:</b-col>
              <b-col cols="9" ><input type="text" class="input-text" maxlength="50" required placeholder="Nhập tên tác giả"
                                       v-model="author"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Thể loại</b-col>
              <b-col cols="9" ><select name="category" class="input-text" v-model="selected">
                <option value="comedy" v-for="item of listCategories" :key="item.id" >{{ item.name }}</option>
              </select></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Mô tả nội dung</b-col>
              <b-col cols="9" ><input type="text" maxlength="50" required placeholder="Nhập mô tả nội dung sách"
                                       v-model="description" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Nhà xuất bản</b-col>
              <b-col cols="9" ><input type="text" maxlength="50" required placeholder="Nhập nhà xuất bản"
                                       v-model="publisher" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Năm xuất bản</b-col>
              <b-col cols="9" ><input type="number" maxlength="50" required placeholder="Nhập năm xuất bản"
                                       v-model="year" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Ngôn ngữ</b-col>
              <b-col cols="9" ><input type="text" maxlength="50" required placeholder="Nhập ngôn ngữ"
                                       v-model="language" class="input-text"></b-col>
            </b-row>
          </b-container>
        </div>
        <div class="right-form">
          <b-container class="bv-example-row all-form">
            <b-row class="book-content">
              <b-col cols="3">Số trang</b-col>
              <b-col cols="9" ><input type="number" maxlength="50" required placeholder="Nhập số trang"
                                       v-model="numberOfPage" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Khối lượng</b-col>
              <b-col cols="9" ><input type="number" maxlength="50" required placeholder="Nhập khối lượng"
                                       v-model="weight" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Giá bìa</b-col>
              <b-col cols="9" ><input type="number" maxlength="50" required placeholder="Nhập giá bìa"
                                       v-model="coverPrice" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Giá đặt cọc</b-col>
              <b-col cols="9" ><input type="number" maxlength="50" required placeholder="Nhập giá đặt cọc"
                                       v-model="depositPrice" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3">Hình ảnh</b-col>
              <b-col cols="9" ><input type="file" class="input-text"></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="4"><input type="checkbox" id="trading" name="trading" value="trading" v-model="isExchange">
                <label for="trading">Trao đổi</label><br></b-col>
              <b-col cols="4"><input type="checkbox" id="rent" name="rent" value="rent" v-model="isRent">
                <label for="rent"> Thuê</label><br></b-col>
            </b-row>
            <b-row class="book-content">
              <b-col cols="3" >Giá thuê:</b-col>
              <b-col cols=3 ><input type="number"  maxlength="50" required placeholder="Giá thuê"
                                      v-model="depositPrice" class="input-text-rent"></b-col>
            </b-row>

            <!--=============button=================-->
            <b-row class="book-content">
              <b-col cols="5"><button class="dialogBtn" v-on:click="cancel">Hủy</button></b-col>
              <b-col cols="5" ><button class="dialogBtn" v-on:click="confirm">Xác nhận</button></b-col>
            </b-row>
          </b-container>
        </div>

      </div>
<!--      <div class="dialogGroupBtn">-->
<!--        <button class="dialogBtn" v-on:click="cancel">Hủy</button>-->
<!--        <button class="dialogBtn" v-on:click="confirm">Xác nhận</button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>


import apiFactory from "../config/apiFactory";
import {API_BOOK, API_MANAGE_CATEGORY} from "../constant/constant-api";
// import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "CreateBook",
  props: ['show', 'cancel', 'confirm'],
  data() {
    return {
      title: '',
      author: '',
      description: '',
      publisher: '',
      year: '',
      language: '',
      numberOfPage: '',
      weight: '',
      coverPrice: '',
      depositPrice: '',
      statusBook: '',
      image: '',
      isExchange: [],
      isRent: [],
      rentFee: '',
      listCategories: '',
      selected:'',
    }
  },
  created() {
    this.getCategories()
    this.createBook()
  },
  methods: {
    getCategories() {
      apiFactory.callApi(API_MANAGE_CATEGORY.LIST_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
      }).catch(() => {
      });
    },
    createBook() {
      const url = API_BOOK.CREATE_BOOK
      apiFactory.callApi(url, 'POST', {}).then((res) => {
        if (res.data.message === 'REQUEST_SUCCESS') {
          console.log(alert('Yêu cầu trao đổi thành công!'))
          this.showDialog = false
        }
      }).catch(() => {
      });
    }
  },
}
</script>

<style scoped>
.dialog {
  position: fixed;
  display: block;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.dialogContent {
  width: 1000px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  margin: 5% auto auto auto;
}

.form-book{
  display: flex;
  justify-content: center;

}
.bv-example-row{
  margin-bottom: 30px;
}
.input-text{
  border-radius: 8px;
  border: none;
  width: 300px;
  height: 40px;
  padding-left: 10px;
}
.input-text-rent{
  border-radius: 8px;
  border: none;
  width: 200px;
  height: 40px;
}
.book-content{
  margin-bottom: 30px;
}
.dialogGroupBtn{
  display: flex;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  margin-bottom: 30px;
}

.dialogBtn{
  border-radius: 10px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid;
  height: 50px;
  width: 140px;
}
.dialogBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}
.all-form{
  margin-top: 40px;
}
</style>