<template>
  <Layout>
    <main style="flex-grow: 1;">
      <LoadingDialog v-show="spinner" style="z-index: 999999"></LoadingDialog>
      <CreatePostDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
        <!--        <div class="dialog-title">-->
        <!--          <div class="main-title">Viết lách</div>-->
        <!--        </div>-->
        <div style="height: 0.1px"></div>
        <div class="User-post" v-if="this.$cookies.get('token')" >
          <img class="userImageBI" v-bind:src="info.avatar">
          <div class="infor-right">
            <div class="user-name">
              {{ info.fullname }}
            </div>
            <div class="public">
              <Icon icon="material-symbols:public" color="#9d6b54"/>
              <p>Công khai</p>
            </div>
          </div>
          <div class="main-title">
            Viết bài
          </div>

        </div>

        <div class="content-post">
          <div class="input-left">
            <div class="content-title">
              <input type="text" maxlength="500"
                     required placeholder="Nhập tiêu đề"
                     v-model="title">
            </div>
            <div class="text-area">
              <textarea type="text" maxlength="2000" required
                        placeholder="Nhập nội dung bài đăng"
                        v-model="content">
              </textarea>
            </div>
          </div>
          <div class="input-right">
            <div class="background-import">
              <label>Chọn ảnh:</label>
              <input type="file" title=" " class="input-text-short" name="image"
                     @change="uploadImage">
            </div>
            <div class="display-image">
              <img v-bind:src="imageSrc" style="width: 100%; height: 100%;object-fit: scale-down">
            </div>
          </div>
        </div>
        <div class="dialogGroupBtn">
          <button class="dialogBtn" v-on:click="cancel">Hủy</button>
          <button class="dialogBtn" v-on:click="save">Đăng</button>
        </div>
      </CreatePostDialog>
      <b-alert style="position: absolute; right: 0;" v-if="responseFlag" :show="dismissCountDown" variant="success"
               @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{ responseMessage }}
      </b-alert>
      <b-alert style="position: absolute; right: 0;" v-else :show="dismissCountDown" variant="danger"
               @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        {{ responseMessage }}
      </b-alert>

      <div class="body-blog">
        <div class="title">TRẠM ĐỌC</div>
        <div class="container-blog">
          <div v-if="this.$cookies.get('token')" class="top">
            <img class="userImageBI" v-bind:src="info.avatar">
            <button class="createPost" v-on:click="openDialog">Chia sẻ bài viết của bạn...</button>
            <Icon icon="jam:write-f" class="iconBI"/>
            <Icon icon="ic:baseline-emoji-emotions" class="iconBI"/>
            <Icon icon="material-symbols:image-rounded" class="iconBI"/>
          </div>
          <div class="content">
            <div class="search">
              <input type="text" v-model="search" placeholder="Nhập tiêu đề">
              <button v-on:click="HandleSearch">Tìm</button>
            </div>
            <br>
            <hr>

            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid">
                  <div class="item" v-for='i in 10' :key="i">
                    <b-card no-body img-left style="height: 180px;">
                      <b-skeleton-img card-img="left" width="180px"></b-skeleton-img>
                      <b-card style="width: 413px; height: 180px">
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

              <div v-if="totalPost != 0" class="grid">
                <div class="item" v-for="item of listPost" :key="item.id">
                  <router-link :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img class="post-image" v-bind:src="item.image">
                  </router-link>
                  <div class="info">
                    <div class="post-title">{{ item.title }}</div>
                    <div><img src="../image/user.png"><strong>{{ item.user.fullname }}</strong></div>
                    <div class="createDate">
                      <Icon class="iconTime" icon="ic:twotone-access-time"/>
                      {{ item.createdDate | formatDate }}
                    </div>
                    <label class="post-content">{{ item.content }}</label>
                  </div>
                </div>
              </div>

              <div v-else class="noPost">Không tìm thấy bài viết phù hợp!</div>
            </b-skeleton-wrapper>
            <div v-if="totalPost != 0" class="paging">
              <div class="page">
                <b-pagination @input="getListPost" v-model="page" :total-rows="totalPost" :per-page="10">
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
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_PERSONAL, API_POST} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import {Icon} from '@iconify/vue2';
import VueJwtDecode from "vue-jwt-decode";
import CreatePostDialog from "@/pages/CreatePostDialog";
import LoadingDialog from "@/components/LoadingDialog";
import {generateURLUpload} from "@/S3";

export default {
  name: "BlogIndex",
  components: {Layout, Icon, CreatePostDialog, LoadingDialog},
  data() {
    return {
      spinner: false,
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      listPost: '',
      totalPost: '',
      info: '',
      search: '',
      isSearch: false,
      loading: false,
      showDialog: false,
      page: 1,

      title: '',
      content: '',
      imageSrc: ''
    }
  },
  created() {
    this.isSearch = false
    this.getListPost(1)
    this.getMyInformation()
  },
  methods: {
    getListPost(pageNumber) {
      this.loading = true;
      if (this.isSearch) {
        window.scrollTo(0, 0)
        const url = API_POST.SEARCH_POST + '?page=' + pageNumber
        apiFactory.callApi(url, 'POST', {
          search: this.search
        }).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      } else {
        window.scrollTo(0, 0)
        const url = API_POST.LIST_POST + '?page=' + pageNumber
        apiFactory.callApi(url, 'GET', {}).then((res) => {
          this.listPost = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      }
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.getListPost(1)
    },
    getMyInformation() {
      //this.loading = true
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.info = res.data.data
        //this.loading = false
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
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_POST.CREATE_POST, 'POST', {
        image: this.imageSrc,
        userId: this.userByToken.UserId,
        title: this.title,
        content: this.content
      }).then((res) => {
        if (res.data.message === 'CREATE_SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Bài viết của bạn đã được gửi cho QTV để duyệt!'
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra, vui lòng thử lại!!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showDialog = false
      }).catch(() => {
        this.dismissCountDown = this.dismissSecs
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.showDialog = false
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

    async uploadImage() {
      const image = document.querySelector('input[type=file]').files[0]
      const url = await generateURLUpload(image.name)
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg"
        },
        body: image
      })

      const url_uploaded = url.split("?")[0]
      this.imageSrc = url_uploaded
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
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

.createDate {
  color: #9D6B54;
  font-weight: 600;
}

.iconTime {
  margin-bottom: 5px;
  font-size: 20px;
  margin-right: 5px;
  margin-left: 5px;
}

.body-blog {
  background: #F0F0F0;
}

.body-blog .top {
  background: #F0ECE4;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 5px auto 10px auto;
  display: flex;
  border: 1px solid #9D6B54;
}

.User-post {
  display: flex;
  background-color: white;
  width: 837px;
  height: 72px;
  border-radius: 10px;
  margin-left: 80px;
  margin-top: 5%;
}

.User-post img {
  width: 40px;
  height: 40px;
}

.infor-right {
  margin-top: 10px;
  margin-right: 500px;
}
.main-title{
  color: #9D6B54;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: underline;
}
.dialog-title {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

/*.main-title{*/
/*font-size: 40px;*/
/*  font-weight: bold;*/
/*  color: #9D6B54;*/
/*  */
/*}*/

.public {
  display: flex;
  background-color: #F0ECE4;
  border-radius: 3px;
  width: 80px;
  height: 16px;
  justify-content: center;
  margin-top: 6px;
}

.User-post .public p {
  font-weight: bold;
  font-size: 10px;
  margin-left: 4px;
}

.content-post {
  display: flex;
  margin-left: 80px;
  margin-top: 7px;
}

.input-left {
  margin-right: 7px;
}

.content-title input {
  width: 526px;
  height: 49px;
  margin-bottom: 7px;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
}

.text-area textarea {
  width: 526px;
  height: 307px;
  border: none;
  border-radius: 10px;
  padding: 7px;
  padding-left: 10px;
}

.background-import {
  background-color: white;
  border-radius: 10px;
  width: 304px;
  height: 49px;
  margin-bottom: 7px;
  padding-top: 10px;
  padding-left: 5px;
  font-weight: bold;
}

.display-image {
  width: 304px;
  height: 307px;
  border: none;
  border-radius: 10px;
  background-color: white;
}

.display-image img {
  border: none;
}

.userImageBI {
  margin: 15px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 2px outset #9D6B54;
}

.createPost {
  width: 550px;
  height: 40px;
  border-radius: 15px;
  border: 2px solid #9D6B54;
  margin-top: auto;
  margin-bottom: auto;
  color: grey;
  font-size: 16px;
  padding-right: 300px;
}

.iconBI {
  color: #9D6B54;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 30px;
}

.createPost:hover {
  color: #9D6B54;
  cursor: text;
}

.body-blog .container-blog {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 10px auto;
  display: block;
}

.body-blog .title {
  max-width: 1230px;
  border-radius: 10px;
  background-color: #F0ECE4;
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
  margin: 10px auto 10px auto;
  border: 1px solid #9D6B54;
}

.body-blog .container-blog .content {
  width: 100%;
  background: #F0ECE4;
  border-radius: 10px;
  border: 1px solid #9D6B54;
}

.body-blog .container-blog .search {
  margin: 0px 15px 10px 20px;
  padding-top: 20px;
  float: right;
}

.body-blog .container-blog .search input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.body-blog .container-blog .search button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;

}

.body-blog .container-blog .search button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.body-blog .container-blog .content .grid {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}

.body-blog .container-blog .content .grid .item {
  /*background-color: white;*/
  background-color: #f5f5f5;
  color: #9d6b54;
  border-radius: 10px;
  width: 593px;
  height: auto;
  margin: 10px 0px 10px 15px;
  display: flex;
  padding-bottom: 5px;
  border: 1px solid #9D6B54;
}

.body-blog .container-blog .content .grid .item:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  /*background: grey;
  opacity: 0.9;*/
}

.body-blog .container-blog .content .grid .item .post-image {
  height: 180px;
  width: 180px;
  border-radius: 10px;
  object-fit: scale-down;
}

.body-blog .container-blog .content .grid .info {
  height: 120px;
  padding: 5px;
}

.body-blog .container-blog .content .grid .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.body-blog .container-blog .content .grid .info label {
  margin-left: 5px;
}

.body-blog .container-blog .content .grid .info .post-title {
  color: #9D6B54;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.body-blog .container-blog .content .grid .info .post-content {
  color: grey;
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

/*.body-blog .container-blog .content .grid .action{
  position: absolute;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-left: 270px;
  margin-top: 60px;
  background: #9D6B54;
  color: white;
  display: none;
  font-weight: bold;
  font-size: 16px;
}

.body-blog .container-blog .content .grid .action:hover{
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.body-blog .container-blog .content .grid .item:hover .action{
  display: block;
}*/

.body-blog .container-blog .content .paging {
  margin-top: 10px;
}

.body-blog .container-blog .content .paging ul {
  justify-content: right;
  padding-right: 15px;
}

.noPost {
  height: 50vh;
  text-align: center;
  padding-top: 50px;
  color: grey;
  font-style: italic;
  font-size: 26px;
}
</style>