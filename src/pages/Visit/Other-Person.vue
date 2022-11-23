<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
          <div class="profile">
            <div>
              <b-avatar badge badge-left class="avatar-personal"><img v-bind:src="info.avatar"></b-avatar>
            </div>
            <div class="infor">
              <p class="name-other-person">{{ info.fullname }}</p>
              <div>
                <div class="description">
                  <Icon icon="mdi:email"/>
                  <span>{{ info.email }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:call"/>
                  <span>{{ info.phone }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:location-on"/>
                  <span>{{ info.addressMain }}</span><br>
                </div>
                <div class="description">
                  <Icon icon="material-symbols:location-on"/>
                  <span>{{ info.likeNumber }} người thích</span><br>
                </div>
              </div>
            </div>
            <div class="edit">
              <button class="btn-edit">
                <Icon icon="ant-design:like-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                Thích
              </button>
            </div>
          </div>
          <div class="content-bottom">
            <b-card card class="background-tab">
              <b-tabs>
                <b-tab title="Tủ sách" active>
                  <div class="search">
                    <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearch">Tìm</button>
                  </div>
                  <div class="grid-content">
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới <label>
                          <Icon icon="ic:baseline-bookmark-border"/>
                        </label></div>

                        <div class="description-book-categoryMB">Thể loại: Lịch sử
                          <br>Tình trạng 99%
                        </div>
                        <div class="description-book-price"><label>Giá bìa:</label> 120.000VNĐ</div>
                      </div>
                      <div class="btn-action">
                        <button>Trao đổi</button>
                        <button>Thuê</button>
                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>
                        <label>Giá bìa: </label>
                        <p>120.000VND</p>
                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>
                        <label>Giá bìa: </label>
                        <p>120.000VND</p>
                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>
                        <label>Giá bìa: </label>
                        <p>120.000VND</p>
                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>
                        <label>Giá bìa: </label>
                        <p>120.000VND</p>
                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>

                      </div>
                    </div>
                    <div class="background-content">
                      <img :src="require('@/image/book1.svg')">
                      <!--                      <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">-->
                      <!--                        <img v-bind:src="item.image">-->
                      <!--                      </router-link>-->
                      <div class="description-book">
                        <div class="description-book-titleMB">Lịch sử thế giới</div>
                        <div class="description-book-categoryMB">Thể loại: Lịch sử</div>
                        <div class="description-book-categoryMB">Tình trạng 99%</div>
                        <label>Giá bìa: </label>
                        <p>120.000VND</p>
                      </div>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Bài đăng">
                  <div class="search">
                    <input type="text" v-model="search" placeholder="Nhập tên sản phẩm">
                    <button v-on:click="HandleSearch">Tìm</button>
                  </div>
                  <div class="post">
                    <div class="post-content">
                      <div class="post-image">
                        <img :src="require('@/image/book1.svg')">
                      </div>
                      <div class="post-ct">
                        <div class="person">
                          <div class="person-infor">
                            <div class="avatar-post">
                              <img v-bind:src="info.avatar">
                            </div>
                            <div class="name-person">{{ info.fullname }} <Icon icon="ic:baseline-bookmark-border" style="margin-left: 886px"/></div>
                          </div>
                          <div class="date-post">
                            <label>15/10 lúc 19:00</label>
                            <Icon icon="ri:earth-line"/>
                          </div>
                        </div>
                        <div class="content-post">
                          Câu trả lời nằm ở cuốn sách này – Hẹn nhau phía sau tan vỡ - một cuốn tản văn man mác buồn khiến những ai đã từng rung động phải thổn thức như đối diện với chính câu chuyện của mình. Nhưng cuốn sách này tuyệt đối không chỉ chất chứa những điều bi lụy, chua xót. Sau mỗi câu chữ, tác giả luôn biết cách nhen nhóm lên một ngọn lửa lòng, để lấp đầy những khoảng trống trong tâm hồn tan vỡ
                        </div>
                      </div>
                    </div>
                    <div class="post-content">
                      <div class="post-image">
                        <img :src="require('@/image/book1.svg')">
                      </div>
                      <div class="post-ct">
                        <div class="person">
                          <div class="person-infor">
                            <div class="avatar-post">
                              <img v-bind:src="info.avatar">
                            </div>
                            <div class="name-person">{{ info.fullname }} <Icon icon="ic:baseline-bookmark-border" style="margin-left: 886px"/></div>
                          </div>
                          <div class="date-post">
                            <label>15/10 lúc 19:00</label>
                            <Icon icon="ri:earth-line"/>
                          </div>
                        </div>
                        <div class="content-post">
                          Câu trả lời nằm ở cuốn sách này – Hẹn nhau phía sau tan vỡ - một cuốn tản văn man mác buồn khiến những ai đã từng rung động phải thổn thức như đối diện với chính câu chuyện của mình. Nhưng cuốn sách này tuyệt đối không chỉ chất chứa những điều bi lụy, chua xót. Sau mỗi câu chữ, tác giả luôn biết cách nhen nhóm lên một ngọn lửa lòng, để lấp đầy những khoảng trống trong tâm hồn tan vỡ
                        </div>
                      </div>
                    </div>
                    <div class="post-content">
                      <div class="post-image">
                        <img :src="require('@/image/book1.svg')">
                      </div>
                      <div class="post-ct">
                        <div class="person">
                          <div class="person-infor">
                            <div class="avatar-post">
                              <img v-bind:src="info.avatar">
                            </div>
                            <div class="name-person">{{ info.fullname }} <Icon icon="ic:baseline-bookmark-border" style="margin-left: 886px"/></div>
                          </div>
                          <div class="date-post">
                            <label>15/10 lúc 19:00</label>
                            <Icon icon="ri:earth-line"/>
                          </div>
                        </div>
                        <div class="content-post">
                          Câu trả lời nằm ở cuốn sách này – Hẹn nhau phía sau tan vỡ - một cuốn tản văn man mác buồn khiến những ai đã từng rung động phải thổn thức như đối diện với chính câu chuyện của mình. Nhưng cuốn sách này tuyệt đối không chỉ chất chứa những điều bi lụy, chua xót. Sau mỗi câu chữ, tác giả luôn biết cách nhen nhóm lên một ngọn lửa lòng, để lấp đầy những khoảng trống trong tâm hồn tan vỡ
                        </div>
                      </div>
                    </div>
                    <div class="post-content">
                      <div class="post-image">
                        <img :src="require('@/image/book1.svg')">
                      </div>
                      <div class="post-ct">
                        <div class="person">
                          <div class="person-infor">
                            <div class="avatar-post">
                              <img v-bind:src="info.avatar">
                            </div>
                            <div class="name-person">{{ info.fullname }} <Icon icon="ic:baseline-bookmark-border" style="margin-left: 886px"/></div>
                          </div>
                          <div class="date-post">
                            <label>15/10 lúc 19:00</label>
                            <Icon icon="ri:earth-line"/>
                          </div>
                        </div>
                        <div class="content-post">
                          Câu trả lời nằm ở cuốn sách này – Hẹn nhau phía sau tan vỡ - một cuốn tản văn man mác buồn khiến những ai đã từng rung động phải thổn thức như đối diện với chính câu chuyện của mình. Nhưng cuốn sách này tuyệt đối không chỉ chất chứa những điều bi lụy, chua xót. Sau mỗi câu chữ, tác giả luôn biết cách nhen nhóm lên một ngọn lửa lòng, để lấp đầy những khoảng trống trong tâm hồn tan vỡ
                        </div>
                      </div>
                    </div>
                    <div class="post-content">
                      <div class="post-image">
                        <img :src="require('@/image/book1.svg')">
                      </div>
                      <div class="post-ct">
                        <div class="person">
                          <div class="person-infor">
                            <div class="avatar-post">
                              <img v-bind:src="info.avatar">
                            </div>
                            <div class="name-person">{{ info.fullname }} <Icon icon="ic:baseline-bookmark-border" style="margin-left: 886px"/></div>
                          </div>
                          <div class="date-post">
                            <label>15/10 lúc 19:00</label>
                            <Icon icon="ri:earth-line"/>
                          </div>
                        </div>
                        <div class="content-post">
                          Câu trả lời nằm ở cuốn sách này – Hẹn nhau phía sau tan vỡ - một cuốn tản văn man mác buồn khiến những ai đã từng rung động phải thổn thức như đối diện với chính câu chuyện của mình. Nhưng cuốn sách này tuyệt đối không chỉ chất chứa những điều bi lụy, chua xót. Sau mỗi câu chữ, tác giả luôn biết cách nhen nhóm lên một ngọn lửa lòng, để lấp đầy những khoảng trống trong tâm hồn tan vỡ
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
          <div>

          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import {Icon} from '@iconify/vue2';
import {API_PERSONAL} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Other-Person",
  components: {Layout, Icon},
  data() {
    return {
      info: '',
      userId: '',
      listBook: '',
      totalBook: '',
    }
  },
  created() {
    this.getMyInformation()
    this.getMyBooks()
    this.isSearch = false
  },
  methods: {
    getMyInformation() {
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.info = res.data.data
      }).catch(() => {
      });
    },
    getMyBooks() {
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      const url = API_PERSONAL.LIST_BOOK
      apiFactory.callApi(url, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listBook = res.data.data
        this.totalBook = res.data.numberOfRecords
      }).catch(() => {
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.ChangePage(1)
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

.body {
  background: #F0F0F0;
}

.body .container {
  max-width: 1230px;
  background: #F0ECE4;
  border-radius: 10px;
}


.profile {
  display: flex;
  margin-bottom: 3%;
}

.avatar-personal {
  background-color: #6C757D;
  width: 186px;
  height: 186px;
  margin-top: 29px;
}

.infor {
  margin-left: 3%;
  margin-top: 5%;
}

.infor h3 {
  color: #9D6B54;
  font-weight: bold;
}

.infor span {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}

.name-other-person {
  font-size: 30px;
  font-weight: 700;
  line-height: 35.16px;
}

.description {
  display: flex;
  margin-left: 10px;
}

.description span {
  margin-left: 14px;
}

.edit {
  margin-top: 13%;
  margin-left: 15%;
  justify-content: center;

}

.btn-edit {
  height: 48px;
  width: 187px;
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
  font-weight: 700;
}

.btn-edit:hover {
  background: white;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

.body .container .search {
  margin: 20px 0px 10px 20px;
  width: 80%;
}

.body .container .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.body .container .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.body .container .search button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.background-tab {
  background-color: #EFECE3;
  border: none;
  color: black;
}

.grid-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.grid-content > .background-content {
  background-color: white;
  /*border: 2px solid black;*/
  border-radius: 20px;
  width: 189px;
  height: auto;
  margin: 1%;
}

.background-content:hover {
  /*box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);*/
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  -webkit-transition: -webkit-transform 1s;
}

.background-content img {
  width: 100%;
  height: auto;
  margin-top: 1%;
  border-radius: 20px;
}

.description-book {
  margin-top: 0.2%;
  margin-left: 9px;
  text-decoration: none;
}

.description-book-titleMB {
  color: #9D6B54;
  font-weight: 700;
}

.description-book-titleMB label {
  margin-left: 10%;
}

.description-book .description-book-price label {
  font-weight: 700;
  color: #9D6B54;
}

.description-book-categoryMB {
  font-size: 12px;
  margin-top: 8px;
}

.description-book-price {
  color: red;
  font-weight: 700;
  font-size: 12px;
}

.btn-action {
  margin-left: 9px;
  display: flex;
  margin-top: 8px;
  margin-bottom: 10px;
}

.btn-action button {
  border: none;
  border-radius: 5px;
  width: 79px;
  height: 26px;
  background: #9D6B54;
  color: white;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
}

.btn-action button:hover {
  background: white;
  color: #9D6B54;
  border: 2px solid #9D6B54;
}

.post {
  margin-top: 16px;
}

.post-content {
  border: none;
  border-radius: 8px;
  background: white;
  display: flex;
margin-bottom: 2%;
}

.person {
  margin-top: 9px;
}

.post-image img {
  width: 123px;
  height: 127px;
  border-radius: 8px;
}

.person-infor {
  display: flex;
}

.avatar-post img {
  vertical-align: middle;
  width: 26px;
  height: 26px;
  border-radius: 50%;
}

.name-person {
  font-size: 14px;
  font-weight: bold;
  margin-left: 0.5%;
}

.date-post {
  margin-left: 33px;
  margin-top: -8px;
  font-size: 10px;
  opacity: 50%;
}

.date-post label {
  margin-right: 2px;
  margin-top: 2px;
}
.content-post{
  width: 1000px;
  height: auto;
  margin-left: 14px;
}
</style>