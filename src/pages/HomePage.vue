<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div>
        <b-carousel
            id="carousel-fade"
            v-model="slidex"
            :interval="4000"
            style="text-shadow: 0px 0px 2px #000"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            fade
            indicators
            background="#ababab"
            img-width="1024"
            img-height="510"
        >
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/ts.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/tree.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/co2.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/money.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/zone.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/limit.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  src="../image/commu.png"
                  alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
        <br>
      </div>
      <!--==============body=============-->
      <div class="homepage">
        <div class="container">
          <div class="listBook">
            <div class="home-title">
              <Icon style="padding-bottom: 5px" icon="mingcute:book-4-line"/>
              S??CH M???I NH???T
              <Icon style="padding-bottom: 5px" icon="mingcute:book-4-line"/>
              <router-link to="/AllBooks" class="moreBook">[Xem t???t c???]</router-link>
            </div>
            <hr style="margin-top: 0px">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-book">
                  <div class="item-book" v-for='i in 6' :key="i">
                    <b-card no-body img-top>
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
                <div class="item-book" v-for="item of listBook" :key="item.id">
                  <router-link v-b-popover.hover.bottom="item.title" :to="{ name: 'BookDetail', query: { id:item.id }}"
                               style="position: relative">
                    <img class="imgBook" v-bind:src="item.image">
                    <label v-if="item.isTrade" class="layer">??ang giao d???ch</label>
                    <label v-else class="layer1">S???n s??ng</label>
                  </router-link>
                  <div class="info">
                    <div class="book-title"><strong>{{ item.title }}</strong></div>
                    <div class="book-status">Th??? lo???i: <strong>{{ item.category.name }}</strong></div>
                    <div class="book-status">????ng b???i: <strong>{{ item.user.fullname }}</strong></div>
                    <label class="book-status">Gi?? c???c: <strong>{{
                        item.depositPrice.toLocaleString()
                      }}??</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                    <!--                    <label class="book-status" style="color: #ca0303; font-weight: bold" v-if="item.isTrade">??ang giao d???ch</label>
                                        <label class="book-status" style="color: green; font-weight: bold" v-else>S???n s??ng</label>-->
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="listPost">
            <div class="home-title2">
              <Icon style="padding-bottom: 5px" icon="bi:file-earmark-post-fill"/>
              B??I VI???T M???I NH???T
              <Icon style="padding-bottom: 5px" icon="bi:file-earmark-post-fill"/>
              <router-link to="/BlogIndex" class="moreBook">[Xem t???t c???]</router-link>
            </div>
            <hr style="margin-top: 0px">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid-post">
                  <div class="item-post" v-for='i in 3' :key="i">
                    <b-card no-body img-left>
                      <b-skeleton-img card-img="left" width="191px"></b-skeleton-img>
                      <b-card style="width: 201px; height: 191px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="grid-post">
                <div class="item-post" v-for="item of listPost" :key="item.id">
                  <router-link v-b-popover.hover.bottom="item.title" :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img class="imgPost" v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="post-title"><strong>{{ item.title }}</strong></div>
                    <div class="post-content" style="color: #9d6b54">T??c gi???: <strong>{{ item.user.fullname }}</strong>
                    </div>
                    <div class="createDate">
                      <Icon class="iconTime" icon="ic:twotone-access-time"/>
                      {{ item.createdDate | formatDate }}
                    </div>
                    <div class="post-content">{{ item.content }}</div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="listUserHP">
            <div class="home-title3">
              <Icon style="padding-bottom: 5px" icon="mdi:user-heart-outline"/>TOP NG?????I D??NG ???????C Y??U TH??CH
              <Icon style="padding-bottom: 5px" icon="mdi:user-heart-outline"/></div>
            <hr style="margin-top: 0px">
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="gridUserHP">
                  <div class="itemUserHP" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 250px">
                      <b-skeleton type="avatar" height="140px" width="140px" style="margin-left: 20px"></b-skeleton>
                      <b-card style="height: 110px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="gridUserHP">
                <div class="itemUserHP" v-for="item of listUser" :key="item.id">
                  <router-link class="active" :to="{ name: 'OtherPerson', query: { id:item.id}}">
                    <img v-bind:src="item.avatar">
                  </router-link>
                  <div class="itemUserInfo">
                    <div class="username"><strong>{{ item.fullname }}</strong></div>
                    <div class="username">{{ item.likeNumber }} ng?????i th??ch</div>
                    <div class="username">{{ item.numberOfTransaction }} l???n giao d???ch</div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="solution">
            <div class="atitle">T???i Sao N??n Giao D???ch Qua Tr???m S??ch?</div>
            <hr>
            <div class="grid-so">
              <div class="item-so">
                <Icon class="icon-so" icon="ph:mouse-simple-bold"/>
                <div class="head-so">????n gi???n & An to??n</div>
                <div class="des-so"><strong>Tr???m S??ch</strong>  l?? n???n t???ng ????n gi???n, d??? d??ng s??? d???ng cho nh???ng ng?????i y??u s??ch ??? m???i l???a
                  tu???i. H??y s??? d???ng m???t cu???n s??ch c???a b???n ????? c?? th??? ?????c th??m ???????c m???t cu???n s??ch kh??c b???ng c??ch th??ng qua <strong>Tr???m S??ch</strong> v?? s??? ???????c ?????m b???o an to??n tuy???t ?????i.
                </div>
                <div class="des-so">"Trao ?????i v???i quy tr??nh r???t ????n gi???n v?? an to??n!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="tabler:pig-money"/>
                <div class="head-so">Ti???t ki???m</div>
                <div class="des-so">Tr???m S??ch l?? m???t doanh nghi???p th????ng m???i x?? h???i trung gian, n??i nh???ng ng?????i y??u s??ch
                  s??? chia
                  s??? kho b??u c???a h???. T???i Tr???m S??ch, b???n ch??? ph???i tr?? ph?? d???ch v??? - gi???m chi ph?? ????? ?????c th??m 1 cu???n s??ch
                  xu???ng r???t nhi???u.
                </div>
                <div class="des-so">"Ti???t ki???m ti???n khi b???n trao ?????i!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="fluent:people-community-28-regular"/>
                <div class="head-so">X?? h???i h??a</div>
                <div class="des-so">Kh??m ph?? ni???m vui c???a vi???c chia s???, giao l??u s??ch v???i c???ng ?????ng nh???ng ng?????i y??u
                  s??ch. B???t k??? cu???n
                  s??ch n??o n???m trong t??? s??ch c???a b???n ?????u c?? th??? ???????c ?????c b???i nhi???u ng?????i kh??c.
                </div>
                <div class="des-so">"Chia s??? kho b??u c???a b???n!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-checkbox-marked-circle-outline"/>
                <div class="head-so">Ti???n l???i</div>
                <div class="des-so">Kh??ng c??n ph???i b?????c ra ngo??i ????? t??m ki???m v?? mua s??ch. Ch??ng t??i nh???n v?? giao s??ch
                  ngay ?????a ch???
                  b???n cung c???p cho ch??ng t??i.
                </div>
                <div class="des-so">"T???i ??u s??? thu???n ti???n cho ?????c gi???!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-earth"/>
                <div class="head-so">Gi???m kh?? th???i C02</div>
                <div class="des-so">
                  Ch??ng ta c??ng t??i ch??? v?? trao ?????i l?? c?? th??? gi??p gi???m b???t l?????ng kh?? th???i C02 ra m??i tr?????ng m???t c??ch
                  ????ng k???.
                </div>
                <div class="des-so">"????? l???i s??? trong l??nh khi b???n trao ?????i!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="material-symbols:menu-book-outline-rounded"/>
                <div class="head-so">Hi???m nh??ng ch???t</div>
                <div class="des-so">C??c t??c ph???m kinh ??i???n, s??ch b???n ch???y, th???m ch?? l?? m???t s??? cu???n s??ch qu?? hi???m c?? gi??
                  tr??? r???t cao
                  c?? th??? xu???t hi???n tr??n Tr???m S??ch. Ch??? c???n t??m ki???m ch??ng l?? b???n ???? c?? th??? ?????c n?? th??ng qua Tr???m S??ch
                  r???i.
                </div>
                <div class="des-so">"Thu th???p kho t??ng ki???n th???c qu?? gi?? t??? ng?????i kh??c!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-library-books"/>
                <div class="head-so">L??u tr???</div>
                <div class="des-so">Kh??ng gian l???u tr??? s??ch c???a b???n h???n ch???. V???i vi???c ch??? ?????ng trao ?????i s??ch, b???n c?? th???
                  v???n duy tr?? vi???c ?????c s??ch
                  th?????ng xuy??n m???c d?? k??? s??ch c???a b???n v???n r???t g???n g??ng.
                </div>
                <div class="des-so">"Ng?????i t???i gi???n - d???n d???p ch??? ??? c???a b???n khi trao ?????i!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-pine-tree"/>
                <div class="head-so">??t gi???y - Nhi???u c??y</div>
                <div class="des-so">C??ch t???t nh???t ????? b???o v??? m??i tr?????ng l?? tr???ng c??y - c??ch t???t nh???t ti???p theo l?? h???n ch???
                  s??? l?????ng c??y b??? ch???t. Nghi??n c???u cho r???ng, v???i 65 cu???n s??ch ???????c t??i ch??? ch??ng t??i ???? c???u s???ng m???t
                  c??y.
                </div>
                <div class="des-so">"C???i thi???n h??? sinh th??i khi b???n trao ?????i!"</div>
              </div>
            </div>
          </div>
          <div class="listAdd">
            <div class="addLeft">
              <b-carousel
                  v-model="slidex"
                  :interval="4000"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
              >
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/cnam1.jpg">
                    <div style="font-size: 18px; font-weight: 600">C???nh Nam</div>
                    <label style="color: grey">K??? s?? ph???n m???m</label>
                    <label style="padding-left: 50px; padding-right: 50px">N???u t??i c?? 100.000?? v?? b???n c??ng c?? 100.000??, ch??ng ta kh??ng ai gi??u h??n ai. Nh??ng n???u b???n c?? 1 cu???n s??ch hay, t??i c??ng
                    c?? m???t cu???n s??ch hay v?? ch??ng ta trao ?????i, th??? l?? c??? 2 ch??ng ta ???? "gi??u" l??n r???i. V?? <strong>Tr???m S??ch</strong> c?? th??? gi??p ch??ng ta l??m ???????c ??i???u ???? d??? h??n!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/NL.jpg">
                    <div style="font-size: 18px; font-weight: 600">Ng???c Lan</div>
                    <label style="color: grey">Sinh vi??n ??H FPT</label>
                    <label style="padding-left: 50px; padding-right: 50px">Ng?????i ta n??i khi 65 cu???n s??ch ???????c trao ?????i v???i m???i ng?????i t????ng t??? nh?? v???i vi???c b???n s??? c???u ???????c m???t c??i c??y.
                    Nh??? c?? <strong>Tr???m S??ch</strong> t??i r???t vui khi g??p ph???n b???o v??? c??y xanh v?? t??i v???n c?? th??? ?????c s??ch ch??? v???i ph?? d???ch v???!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/TD.jpg">
                    <div style="font-size: 18px; font-weight: 600">Ti???n ?????t</div>
                    <label style="color: grey">Chuy??n vi??n ph??n t??ch nghi???p v???</label>
                    <label style="padding-left: 50px; padding-right: 50px">Th??ng tr?????c t??i ???? ?????c h??n 8 cu???n s??ch m???i, ch??? v???i chi ph?? d???ch v??? th??ng qua <strong>Tr???m S??ch</strong>.
                      M???i quy tr??nh di???n ra r???t d??? d??ng, b???n ch??? c???n g???i s??ch c???a b???n v?? nh???n v??? cu???n s??ch m?? b???n ??ang trao ?????i, m???i th??? t??i ch??? c???n l??m l?? ?????i v?? ?????c! R???t tuy???t v???i!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/TL.jpg">
                    <div style="font-size: 18px; font-weight: 600">Tr???ng L???ch</div>
                    <label style="color: grey">L???p tr??nh vi??n giao di???n</label>
                    <label style="padding-left: 50px; padding-right: 50px">T??i s??? d???ng d???ch v??? c???a <strong>Tr???m S??ch</strong> v?? t??i c?? r???t nhi???u cu???n s??ch
                    n???m y??n tr??n gi?? r???t l??u r???i sau khi t??i ?????c ch??ng l???n ?????u ti??n, v?? t??i s??? d???ng <strong>Tr???m S??ch</strong> ????? m???t ph???n t??i c??ng c?? th??? ?????c th??m ???????c nhi???u cu???n s??ch v??
                    ?????ng th???i, t??i c??ng mu???n nh???ng cu???n s??ch c???a t??i s??? ???????c ?????c b???i ai ???? ??? ????u ????. T??i r???t vui khi l??m nh?? v???y!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/AT.jpg">
                    <div style="font-size: 18px; font-weight: 600">An Th???ng</div>
                    <label style="color: grey">L???p tr??nh vi??n ???ng d???ng</label>
                    <label style="padding-left: 50px; padding-right: 50px">H???u h???t c??c cu???n s??ch t??i ???? ?????c nhi???u l???n r???i v?? t??i c??ng kh??ng c??
                    kinh t??? v???ng ????? ti???p t???c mua th??m nhi???u cu???n s??ch n???a. Nh??? c?? <strong>Tr???m S??ch</strong> m?? vi???c ?????c s??ch c???a t??i v???n c?? th??? ti???p t???c di???n ra th?????ng xuy??n
                    v?? quan tr???ng l?? t??i kh??ng c???n chi th??m s??? ti???n ????ng k???!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/DH.jpg">
                    <div style="font-size: 18px; font-weight: 600">?????c H??ng</div>
                    <label style="color: grey">K??? s?? ki???m th??? ph???n m???m</label>
                    <label style="padding-left: 50px; padding-right: 50px">T??i ???? t???ng trao ?????i s??ch th??ng qua topic ??? c??c c???ng ?????ng y??u s??ch tr??n facebook v?? b??? l???a ?????o. ??i???u ???? l??m t??i
                    m???t r???t nhi???u th???i gian v?? ti???n b???c. V?? r???i nh??? c?? <strong>Tr???m S??ch</strong> m?? t??i c?? th??? trao ?????i s??ch th?????ng xuy??n h??n!</label>
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="addRight">
              <div class="pay-title">H??? tr??? thanh to??n qua v?? ??i???n t??? VNPay</div>
              <div style="display: flex">
                <div style="padding-left: 50px;">
                  <div style="font-weight: 600">T???i v?? VNPay</div>
                  <div style="margin-bottom: 20px">
                    <a href="https://play.google.com/store/apps/details?id=vnpay.smartacccount">
                    <img style="width: 100px;" src="../image/google.png" alt="Logo GG Play"/>
                  </a>
                  </div>
                  <div>
                    <a href="https://apps.apple.com/us/app/v%C3%AD-vnpay-v%C3%AD-c%E1%BB%A7a-gia-%C4%91%C3%ACnh/id1470378562">
                      <img style="width: 100px;" src="../image/apple.png" alt="Logo GG Play"/>
                    </a>
                  </div>
                </div>
                <div style="text-align: center; margin-left: 50px">
                  <img style="width: 300px;" src="../image/vnpay.png" alt="Logo VNPay"/>
                </div>
              </div>
              <div style="margin-top: 20px; text-align: center">
                <Icon style="margin-right: 30px; font-size: 40px" icon="simple-line-icons:social-facebook"/>
                <Icon style="margin-right: 30px; font-size: 40px" icon="simple-line-icons:social-twitter"/>
                <Icon style="margin-right: 30px; font-size: 40px" icon="simple-line-icons:social-instagram"/>
                <Icon style="margin-right: 30px; font-size: 40px" icon="simple-line-icons:social-linkedin"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_BOOK, API_POST, API_MANAGE_USER} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {Icon} from '@iconify/vue2';

export default {
  name: "HomePage",
  components: {Layout, Icon},
  data() {
    return {
      slide: '',
      slidex: 0,
      sliding: null,
      loading: false,
      listBook: '',
      listPost: '',
      listUser: '',
    }
  },
  created() {
    this.getListBook()
    this.getListPost()
    this.getListUser()
  },
  methods: {
    getListBook() {
      this.loading = true;
      apiFactory.callApi(API_BOOK.TOP_BOOK, 'GET', {}).then((res) => {
        this.listBook = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    getListPost() {
      this.loading = true;
      apiFactory.callApi(API_POST.TOP_POST, 'GET', {}).then((res) => {
        this.listPost = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    getListUser() {
      this.loading = true;
      apiFactory.callApi(API_MANAGE_USER.TOP, 'GET', {}).then((res) => {
        this.listUser = res.data.data
        this.loading = false
      }).catch(() => {
      });
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleString('en-GB')
    }
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

.banner {
  margin: 10px;
  justify-content: center;
  padding-left: 100px;
}

.homepage {
  background: #F0F0F0;
}

.atitle {
  padding-top: 15px;
  color: #9D6B54;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
}

.home-title {
  padding-left: 100px;
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
}

.pay-title {
  padding-left: 50px;
  padding-top: 20px;
  color: #9D6B54;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.home-title2 {
  padding-left: 100px;
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
}

.home-title3 {
  color: #9D6B54;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
}

.homepage .container {
  max-width: 1250px;
  background: #F0F0F0;
  border-radius: 10px;
  display: block;
}

.listBook {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  border: 1px solid #9D6B54;
}

.solution {
  max-width: 1230px;
  margin-top: 10px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  padding-bottom: 20px;
  border: 1px solid #9D6B54;
}

.listPost {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  margin-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border: 1px solid #9D6B54;
}

.listUserHP {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: block;
  margin-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border: 1px solid #9D6B54;
}

.listAdd {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border: 1px solid #9D6B54;
  height: 300px;
}

.addLeft{
  width: 55%;
}

.addRight{
  color: #9d6b54;
  width: 45%;
}

.grid-so {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1206px;
  margin-left: 10px;
}

.moreBook {
  float: right;
  color: #9d6b54;
  padding-top: 15px;
  padding-right: 10px;
  font-size: 18px;
}

.item-so {
  color: #9D6B54;
  border-radius: 10px;
  width: 285px;
  height: auto;
  margin: 5px;
  text-align: center;
}

.icon-so {
  font-size: 40px;
}

.head-so {
  font-weight: 600;
  font-size: 18px;
}

.des-so {
  font-size: 12px;
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
  border: 1px solid #9D6B54;
}

.item-book:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.layer {
  position: absolute;
  left: 0;
  background-color: #ca0303;
  color: #F0ECE4;
  font-size: 12px;
  padding: 5px;
}

.layer1 {
  position: absolute;
  left: 0;
  background-color: green;
  color: #F0ECE4;
  font-size: 12px;
  padding: 5px;
}

.item-book .imgBook {
  border-radius: 10px;
  height: 250px;
  width: 100%;
}

.grid-book .info {
  height: auto;
  padding: 5px;
}

.grid-book .info label {
  margin-left: 5px;
}

.grid-book .info .book-title {
  color: #9D6B54;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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

.grid-post {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  width: 1206px;
  margin-left: 10px;
}

.item-post {
  color: #9D6B54;
  border-radius: 10px;
  display: flex;
  width: 392px;
  margin: 5px;
  height: auto;
  border: 1px solid #9D6B54;
}

.item-post:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.item-post .imgPost {
  border-radius: 10px;
  height: 191px;
  width: 191px;
}

.grid-post .info {
  width: 201px;
  height: 120px;
  padding: 5px;
}

.grid-post .info label {
  margin-left: 2px;
}

.grid-post .info .post-title {
  color: #9D6B54;
  margin-left: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.createDate {
  margin-top: 4px;

  font-size: 14px;
}

.iconTime {
  color: #9D6B54;
  margin-bottom: 5px;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 3.5px;
}


.grid-post .info .post-content {
  color: grey;
  font-size: 14px;
  margin-left: 2px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}


.gridUserHP {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.gridUserHP .itemUserHP {
  border-radius: 10px;
  width: 185px;
  height: auto;
  margin: 10px 2px 10px 15px;
  border: 1px solid #9D6B54;
  /*padding-top: 10px;*/
  text-align: center;
}

.gridUserHP .itemUserHP:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.gridUserHP .itemUserHP img {
  margin-top: 10px;
  height: 140px;
  width: 140px;
  border-radius: 70px;
  border: 2px outset #9D6B54;
}

.gridUserHP .itemUserInfo {
  text-align: center;
  height: auto;
  padding: 5px;
}

.gridUserHP .itemUserInfo .username {
  color: #9D6B54;
}

.slick-initialized .slick-slide {
  display: flex !important;
  justify-content: center;
  padding: 20px;
  background-color: #F0F0F0;
}
</style>