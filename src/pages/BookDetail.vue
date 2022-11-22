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
          <div>
            <p>Tác giả: <b>{{ this.detailBook.author}}</b></p>
            <p>Thể loại: {{ this.detailBook.category}}</p>
            <p>Nhà xuất bản: {{ this.detailBook.title}}</p>
          </div>
          <hr>
          <!--          ============================-->
          <div>
            <v-layout column justify-center align-center>
              <v-flex xs12 sm8 md6>
                <v-card>
                  <v-card-text>
                    <vue-show-more-text
                        :text="txtString"
                        :lines="4"
                        additional-container-css="margin:14px;"
                        additional-content-css="font-size:16px;"
                        additional-content-expanded-css="font-size:16px;"
                        additional-anchor-css="font-size: 16px;"
                        @click="change"
                    />
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
<!--          ============================-->
          <p>{{ this.detailBook.description}}</p>
        </div>
        <!-- Product Configuration -->
        <div class="product-configuration">
          <!-- Cable Configuration -->

        </div>
<!--        -Tac gia-->
<!--        -The loai-->
<!--        - Nha xuat ban-->
<!--        -Noi dung-->
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
import vueShowMoreText from 'vue-show-more-text'
export default {
  name: "BookDetail",
  components: {SideBar_Personal, Layout, Icon, vueShowMoreText},
  data() {
    return {
      detailBook: '',
      txtString: '{{ this.detailBook.description}}',
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
    },
    change(showAll) {
      console.log(showAll)
    },
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
  color: black;
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
  color: black;
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


</style>