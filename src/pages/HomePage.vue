<template>
  <Layout>
    <main style="flex-grow: 1;">
      <SlidePicture></SlidePicture>
      <!--==============body=============-->
      <div class="homepage">
        <div class="container">
          <div class="listBook">
            <div class="home-title">SÁCH MỚI NHẤT
              <router-link to="/AllBooks" class="moreBook">[Xem tất cả]</router-link>
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
                    <label v-if="item.isTrade" class="layer">Đang giao dịch</label>
                    <label v-else class="layer1">Sẵn sàng</label>
                  </router-link>
                  <div class="info">
                    <div class="book-title"><strong>{{ item.title }}</strong></div>
                    <div class="book-status">Thể loại: <strong>{{ item.category.name }}</strong></div>
                    <div class="book-status">Đăng bởi: <strong>{{ item.user.fullname }}</strong></div>
                    <label class="book-status">Giá cọc: <strong>{{
                        item.depositPrice.toLocaleString()
                      }}đ</strong></label>
                    <label class="book-status">{{ item.statusBook }}</label>
                    <!--                    <label class="book-status" style="color: #ca0303; font-weight: bold" v-if="item.isTrade">Đang giao dịch</label>
                                        <label class="book-status" style="color: green; font-weight: bold" v-else>Sẵn sàng</label>-->
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="listPost">
            <div class="home-title2">BÀI VIẾT MỚI NHẤT
              <router-link to="/BlogIndex" class="moreBook">[Xem tất cả]</router-link>
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
                    <div class="post-content" style="color: #9d6b54">Tác giả: <strong>{{ item.user.fullname }}</strong>
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
            <div class="home-title3">TOP NGƯỜI DÙNG ĐƯỢC YÊU THÍCH</div>
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
                    <div class="username">{{ item.likeNumber }} người thích</div>
                    <div class="username">{{ item.numberOfTransaction }} lần giao dịch</div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
          </div>
          <div class="solution">
            <div class="atitle">Tại Sao Nên Giao Dịch Qua Trạm Sách?</div>
            <hr>
            <div class="grid-so">
              <div class="item-so">
                <Icon class="icon-so" icon="ph:mouse-simple-bold"/>
                <div class="head-so">Đơn giản & An toàn</div>
                <div class="des-so"><strong>Trạm Sách</strong>  là nền tảng đơn giản, dễ dàng sử dụng cho những người yêu sách ở mọi lứa
                  tuổi. Hãy sử dụng một cuốn sách của bạn để có thể đọc thêm được một cuốn sách khác bằng cách thông qua <strong>Trạm Sách</strong> và sẽ được đảm bảo an toàn tuyệt đối.
                </div>
                <div class="des-so">"Trao đổi với quy trình rất đơn giản và an toàn!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="tabler:pig-money"/>
                <div class="head-so">Tiết kiệm</div>
                <div class="des-so">Trạm Sách là một doanh nghiệp thương mại xã hội trung gian, nơi những người yêu sách
                  sẽ chia
                  sẻ kho báu của họ. Tại Trạm Sách, bạn chỉ phải trá phí dịch vụ - giảm chi phí để đọc thêm 1 cuốn sách
                  xuống rất nhiều.
                </div>
                <div class="des-so">"Tiết kiệm tiền khi bạn trao đổi!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="fluent:people-community-28-regular"/>
                <div class="head-so">Xã hội hóa</div>
                <div class="des-so">Khám phá niềm vui của việc chia sẻ, giao lưu sách với cộng đồng những người yêu
                  sách. Bất kỳ cuốn
                  sách nào nằm trong tủ sách của bạn đều có thể được đọc bởi nhiều người khác.
                </div>
                <div class="des-so">"Chia sẻ kho báu của bạn!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-checkbox-marked-circle-outline"/>
                <div class="head-so">Tiện lợi</div>
                <div class="des-so">Không còn phải bước ra ngoài để tìm kiếm và mua sách. Chúng tôi nhận và giao sách
                  ngay địa chỉ
                  bạn cung cấp cho chúng tôi.
                </div>
                <div class="des-so">"Tối ưu sự thuận tiện cho độc giả!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-earth"/>
                <div class="head-so">Giảm khí thải C02</div>
                <div class="des-so">
                  Chúng ta càng tái chế và trao đổi là có thể giúp giảm bớt lượng khí thải C02 ra môi trường một cách
                  đáng kể.
                </div>
                <div class="des-so">"Để lại sự trong lành khi bạn trao đổi!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="material-symbols:menu-book-outline-rounded"/>
                <div class="head-so">Hiếm nhưng chất</div>
                <div class="des-so">Các tác phẩm kinh điển, sách bạn chạy, thậm chí là một số cuốn sách quý hiếm có giá
                  trị rất cao
                  có thể xuất hiện trên Trạm Sách. Chỉ cần tìm kiếm chúng là bạn đã có thể đọc nó thông qua Trạm Sách
                  rồi.
                </div>
                <div class="des-so">"Thu thập kho tàng kiến thức quý giá từ người khác!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-library-books"/>
                <div class="head-so">Lưu trữ</div>
                <div class="des-so">Không gian lữu trữ sách của bạn hạn chế. Với việc chủ động trao đổi sách, bạn có thể
                  vẫn duy trì việc đọc sách
                  thường xuyên mặc dù kệ sách của bạn vẫn rất gọn gàng.
                </div>
                <div class="des-so">"Người tối giản - dọn dẹp chỗ ở của bạn khi trao đổi!"</div>
              </div>
              <div class="item-so">
                <Icon class="icon-so" icon="mdi-pine-tree"/>
                <div class="head-so">Ít giấy - Nhiều cây</div>
                <div class="des-so">Cách tốt nhất để bảo vệ môi trường là trồng cây - cách tốt nhất tiếp theo là hạn chế
                  số lượng cây bị chặt. Nghiên cứu cho rằng, với 65 cuốn sách được tái chế chúng tôi đã cứu sống một
                  cây.
                </div>
                <div class="des-so">"Cải thiện hệ sinh thái khi bạn trao đổi!"</div>
              </div>
            </div>
          </div>
          <div class="listAdd">
            <div class="addLeft">
              <b-carousel
                  v-model="slidex"
                  :interval="3000"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
              >
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/cnam1.jpg">
                    <div style="font-size: 18px; font-weight: 600">Cảnh Nam</div>
                    <label style="color: grey">Kỹ sư phần mềm</label>
                    <label style="padding-left: 50px; padding-right: 50px">Nếu tôi có 100.000đ và bạn cũng có 100.000đ, chúng ta không ai giàu hơn ai. Nhưng nếu bạn có 1 cuốn sách hay, tôi cũng
                    có một cuốn sách hay và chúng ta trao đổi, thế là cả 2 chúng ta đã "giàu" lên rồi. Và <strong>Trạm Sách</strong> có thể giúp chúng ta làm được điều đó dễ hơn!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/NL.jpg">
                    <div style="font-size: 18px; font-weight: 600">Ngọc Lan</div>
                    <label style="color: grey">Sinh viên ĐH FPT</label>
                    <label style="padding-left: 50px; padding-right: 50px">Người ta nói khi 65 cuốn sách được trao đổi với mọi người tương tự như với việc bạn sẽ cứu được một cái cây.
                    Nhờ có <strong>Trạm Sách</strong> tôi rất vui khi góp phần bảo vệ cây xanh và tôi vẫn có thể đọc sách chỉ với phí dịch vụ!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/TD.jpg">
                    <div style="font-size: 18px; font-weight: 600">Tiến Đạt</div>
                    <label style="color: grey">Chuyên viên phân tích nghiệp vụ</label>
                    <label style="padding-left: 50px; padding-right: 50px">Tháng trước tôi đã đọc hơn 8 cuốn sách mới, chỉ với chi phí dịch vụ thông qua <strong>Trạm Sách</strong>.
                      Mọi quy trình diễn ra rất dễ dàng, bạn chỉ cần gửi sách của bạn và nhận về cuốn sách mà bạn đang trao đổi, mọi thứ tôi chỉ cần làm là đợi và đọc! Rất tuyệt vời!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/TL.jpg">
                    <div style="font-size: 18px; font-weight: 600">Trọng Lịch</div>
                    <label style="color: grey">Lập trình viên giao diện</label>
                    <label style="padding-left: 50px; padding-right: 50px">Tôi sử dụng dịch vụ của <strong>Trạm Sách</strong> vì tôi có rất nhiều cuốn sách
                    nằm yên trên giá rất lâu rồi sau khi tôi đọc chúng lần đầu tiên, và tôi sử dụng <strong>Trạm Sách</strong> để một phần tôi cũng có thể đọc thêm được nhiều cuốn sách và
                    đồng thời, tôi cũng muốn những cuốn sách của tôi sẽ được đọc bởi ai đó ở đâu đó. Tôi rất vui khi làm như vậy!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/AT.jpg">
                    <div style="font-size: 18px; font-weight: 600">An Thắng</div>
                    <label style="color: grey">Lập trình viên ứng dụng</label>
                    <label style="padding-left: 50px; padding-right: 50px">Hầu hết các cuốn sách tôi đã đọc nhiều lần rồi và tôi cũng không có
                    kinh tế vững để tiếp tục mua thêm nhiều cuốn sách nữa. Nhờ có <strong>Trạm Sách</strong> mà việc đọc sách của tôi vẫn có thể tiếp tục diễn ra thường xuyên
                    và quan trọng là tôi không cần chi thêm số tiền đáng kể!</label>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide style="text-align: center; padding-top: 20px; color: #9d6b54;">
                  <template #img>
                    <img style="width: 100px; height: 100px; border-radius: 50px"
                         src="https://book-trading-platform.s3.ap-northeast-1.amazonaws.com/DH.jpg">
                    <div style="font-size: 18px; font-weight: 600">Đức Hùng</div>
                    <label style="color: grey">Kỹ sư kiểm thử phần mềm</label>
                    <label style="padding-left: 50px; padding-right: 50px">Tôi đã từng trao đổi sách thông qua topic ở các cộng đồng yêu sách trên facebook và bị lừa đảo. Điều đó làm tôi
                    mất rất nhiều thời gian và tiền bạc. Và rồi nhờ có <strong>Trạm Sách</strong> mà tôi có thể trao đổi sách thường xuyên hơn!</label>
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="addRight">
              <div class="pay-title">Hỗ trợ thanh toán qua ví điện tử VNPay</div>
              <div style="display: flex">
                <div style="padding-left: 50px;">
                  <div style="font-weight: 600">Tải ví VNPay</div>
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
// import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SlidePicture from "../components/SlidePicture";
import {Icon} from '@iconify/vue2';

export default {
  name: "HomePage",
  components: {SlidePicture, Layout, Icon},
  data() {
    return {
      slidex: 0,
      sliding: null,
      loading: false,
      listBook: '',
      listPost: '',
      listUser: '',
      slide: 'false',
      settings: {
        "dots": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "pauseOnDotsHover": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "pauseOnFocus": true,
        "pauseOnHover": true,
        "centerMode": true,
        "variableWidth": true
      }
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
    onSlideStart(slide) {
      console.log(slide)
      this.sliding = true
    },
    onSlideEnd(slide) {
      console.log(slide)
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