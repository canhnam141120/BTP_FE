<template>
  <Layout>
    <main class="container">
      <!-- Left Column / Headphones Image -->
      <SideBar_Personal></SideBar_Personal>
      <!-- Right Column -->
      <div class="right-content">
      <div class="left-column">
        <img src="../image/book1.svg" alt="">
      </div>
      <div class="right-column">
        <!-- Product Description -->
        <div class="product-description">
          <h1>Danh sách sách</h1>
          <h5>{{ this.detailBook.title}}</h5>
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
        <div class="edit">
          <button class="btn-edit">
            <Icon icon="uil:pen" style="width: 20px; height: 20px; margin-right: 2%"/>&nbsp;Chỉnh sửa bài viết
          </button>
        </div>
      </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import SideBar_Personal from "../components/SideBar_Personal";
import {Icon} from '@iconify/vue2';
export default {
  name: "BookDetail",
  components: {SideBar_Personal, Layout, Icon},
  data() {
    return {
      detailBook: ''
    }
  },
  created() {
    this.getBookById()
  },
  methods: {
    getBookById() {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  background-color: #EFECE3;
}
.right-content{
  display: flex;
}
/* Columns */
.left-column {
  width: 40%;
  position: relative;
}

.right-column {
  width: 55%;
  margin-top: 60px;
}


/* Left Column */
.left-column img {
  width: 300px;
  height: 354px;
  position: absolute;

  top: 84px;
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
.edit {
  margin-top: 3%;
}

.btn-edit {
  height: 48px;
  width: 240px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #9D6B54;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin-bottom: 11px;
  line-height: 16.4px;
  font-weight: 700;
  line-height: 18.75px;
  justify-content: center;
  text-align: center;
}

.btn-edit:hover {
  background: white;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
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