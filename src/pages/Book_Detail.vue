<template>
  <div>
    <!--==============header=============-->
    <div class="header">
      <router-link to="/ManageBook" class="logo"><img src="/image/logo-tramsach.png"></router-link>
      <div class="header-menu">
        <a class="active" href="#aboutus">Về trạm sách</a>
        <router-link to="/ManageBook">Tủ sách</router-link>
        <a href="#blog">Blog</a>
        <a href="#term">Chính sách & Điều khoản</a>
        <a href="#process">Quy trình</a>
        <RouterLink to="/Admin_Management">Management Admin</RouterLink>
      </div>
      <div class="header-right">
        <router-link to="/register" class="header-button">Dang ky</router-link>
        <router-link to="/login" class="header-button">Dang nhap</router-link>
      </div>
    </div>
    <!--==============header=============-->
    <main class="container">

      <!-- Left Column / Headphones Image -->
      <div class="left-column">
        <img src="../image/cover.png" alt="">
        <img src="../image/cover.png" alt="">
      </div>


      <!-- Right Column -->
      <div class="right-column">

        <!-- Product Description -->
        <div class="product-description">
          <span>Book</span>
          <h1>{{ this.detailBook.title}}</h1>
          <p>{{ this.detailBook.description}}</p>
        </div>

        <!-- Product Configuration -->
        <div class="product-configuration">

          <!-- Cable Configuration -->
          <div class="cable-config">
            <span>Tác giả</span>

            <div class="cable-choose">
              <p>{{ this.detailBook.author}}</p>
            </div>
            <a href="#"></a>
          </div>
        </div>

        <!-- Product Pricing -->
        <div class="product-price">
          <span></span>
          <a href="#" class="cart-btn">Trao đổi</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK} from "@/constant/constant-api";

export default {
  name: "Book_Detail",
  data() {
    return {
      detailBook: ''
      // id: '',
      // author: '',
      // title: '',
    }
  },
  created() {
    this.getDetailBook()
    // this.id = this.$route.params.id
  },
  methods: {
    getDetailBook() {
      const url = API_BOOK.DETAIL_BOOK + this.$route.query.id

      apiFactory.callApi(url,'GET',{}).then((res)=>{
        this.detailBook = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>
/*Header*/
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 24px 8px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo img {
  width: 100%;
  height: auto;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-menu {
  margin-left: 100px;
  padding-right: 10px;

}

.header-menu a {
  margin-left: 30px;
  padding-right: 15px;
  /*justify-content: center;*/
}

.header-right {
  float: right;
  margin-right: 30px;
}

.header-button {
  border: burlywood;
  border-radius: 2px;
  padding-left: 10px;
}

/* Basic Styling */
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}

/* Columns */
.left-column {
  width: 65%;
  position: relative;
}

.right-column {
  width: 35%;
  margin-top: 60px;
}


/* Left Column */
.left-column img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

.left-column img.active {
  opacity: 1;
}


/* Right Column */

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}

.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}

/* Product Configuration */
.product-color span,
.cable-config span {
  font-size: 14px;
  font-weight: 400;
  color: #86939E;
  margin-bottom: 20px;
  display: inline-block;
}

/* Product Color */
.product-color {
  margin-bottom: 30px;
}

.color-choose div {
  display: inline-block;
}

.color-choose input[type="radio"] {
  display: none;
}

.color-choose input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}

.color-choose input[type="radio"] + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
}

.color-choose input[type="radio"]#red + label span {
  background-color: #C91524;
}

.color-choose input[type="radio"]#blue + label span {
  background-color: #314780;
}

.color-choose input[type="radio"]#black + label span {
  background-color: #323232;
}

.color-choose input[type="radio"]:checked + label span {
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
}

/* Cable Configuration */
.cable-choose {
  margin-bottom: 20px;
}

.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5E6977;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}

.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}

.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.cable-config a {
  color: #358ED7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}

.cable-config a:before {
  content: "?";
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid rgba(53, 142, 215, 0.5);
  display: inline-block;
  text-align: center;
  line-height: 16px;
  opacity: 0.5;
  margin-right: 5px;
}

/* Product Price */
.product-price {
  display: flex;
  align-items: center;
}

.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}

.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}

.cart-btn:hover {
  background-color: #64af3d;
}

/* Responsive */
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}

</style>