<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="myPost">
        <LoadingDialog v-show="spinner" style="z-index: 999999"></LoadingDialog>
        <CreatePostDialog :show="showDialog" :cancel="cancel" :save="save" v-if="showDialog" class="modal">
          <div>
            <div class="dialogTitle">SỬA BÀI VIẾT</div>
          </div>
          <div class="dialogBody">
            <b-row class="post-content">
              <b-col class="input-label" cols="2">Tiêu đề:</b-col>
              <b-col class="input-div" cols="9">
                <input type="text" maxlength="500"
                       required placeholder="Nhập tiêu đề"
                       v-model="post.title" class="input-text">
              </b-col>
            </b-row>
            <div class="bottom-post">
              <b-row class="post-content">
                <b-col class="input-label" cols="2">Nội dung:</b-col>
                <b-col class="input-div" cols="9">
              <textarea type="text" maxlength="2000" required style="height: 400px; width: 550px;"
                        placeholder="Nhập nội dung bài đăng"
                        v-model="post.content"
                        class="input-text">
            </textarea></b-col>
              </b-row>
              <div>
                <b-row class="post-content">
                  <b-col class="input-label" cols="2">Chọn ảnh:</b-col>
                  <b-col class="input-div" cols="6"><input type="file" title=" " class="input-text-short" name="image"
                                                           @change="handleFileUpload"></b-col>
                </b-row>
                <img v-bind:src="post.image" style="width: 300px; height: 300px; object-fit: scale-down">
              </div>
            </div>
          </div>
          <div class="dialogGroupBtn">
            <button class="dialogBtn" v-on:click="cancel">Hủy</button>
            <button class="dialogBtn" v-on:click="save">Lưu</button>
          </div>
        </CreatePostDialog>
        <ConfirmDialog :show="showConfirmDialog" v-if="showConfirmDialog" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận ẩn bài viết!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialog">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirm">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <ConfirmDialog :show="showConfirmDialogShow" v-if="showConfirmDialogShow" class="modal">
          <div>
            <div class="dialogTitle">XÁC NHẬN</div>
            <div style="color: #9d6b54; text-align: center;">Xác nhận hiện bài viết!</div>
            <div class="dialogGroupBtn">
              <button class="dialogBtn" v-on:click="cancelConfirmDialogShow">Hủy</button>
              <button class="dialogBtn" v-on:click="HandleConfirmShow">Xác nhận</button>
            </div>
          </div>
        </ConfirmDialog>
        <b-alert v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
          {{ responseMessage }}
        </b-alert>
        <b-alert v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
          {{ responseMessage }}
        </b-alert>
        <div class="containerMP">
          <div class="left-contentMP">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMP">
            <div class="titleMP">Bài viết của tôi</div>
            <hr>
            <div class="searchMP">
              <input class="inputMP" type="text" v-model="search" placeholder="Nhập tiêu đề bài viết">
              <button class="btnMP" v-on:click="HandleSearch">Tìm</button>
              <select class="selectCss" v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{ item }}</option>
              </select>
            </div>

            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="grid">
                  <div class="item" v-for='i in 5' :key="i">
                    <b-card no-body img-left style="height: 140px;">
                      <b-skeleton-img card-img="left" width="140px"></b-skeleton-img>
                      <b-card style="width: 850px; height: 140px">
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

              <div class="grid">
                <div class="item" v-for="item of listPosts" :key="item.id">
                  <router-link v-if="!item.isHide && item.status == 'Approved'"
                               :to="{ name: 'PostDetail', query: { id:item.id }}">
                    <img class="post-image" v-bind:src="item.image">
                  </router-link>
                  <div v-else style="position: relative"><img class="post-image-hide" v-bind:src="item.image">
                    <label v-if="item.isHide && item.status == 'Approved'" class="labelHide">Đang ẩn</label>
                    <label v-if="!item.isHide && item.status == 'Waiting'" class="labelStatus">Đang đợi duyệt</label>
                    <label v-if="!item.isHide && item.status == 'Denied'" class="labelStatus">Không được duyệt</label>
                  </div>
                  <div class="info">
                    <div class="post-title">{{ item.title }}</div>
                    <label class="post-content">Ngày đăng: <strong>{{ item.createdDate | formatDate }}</strong></label>
                    <label v-if="item.status == 'Approved'" class="post-content">Trạng thái: <strong>Đã được
                      duyệt</strong></label>
                    <label v-if="item.status == 'Denied'" class="post-content">Trạng thái: <strong>Đã bị
                      hủy</strong></label>
                    <label v-if="item.status == 'Waiting'" class="post-content">Trạng thái: <strong>Đang đợi
                      duyệt</strong></label>
                    <label class="post-content">{{ item.content }}</label>
                  </div>
                  <div class="gr-btn">
                    <button class="item-btn" v-on:click="openEditPostDialog(item.id)">Sửa</button>
                    <div v-if="item.status == 'Approved'">
                      <button v-if="!item.isHide" class="item-btn" v-on:click="HandleHide(item.id)">Ẩn</button>
                      <button v-else class="item-btn" v-on:click="HandleShow(item.id)">Hiện</button>
                    </div>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="paging">
              <div class="page">
                <b-pagination v-if="filter==''" @input="getMyPosts" v-model="page" :total-rows="totalPost"
                              :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Tất Cả'" @input="getMyPosts" v-model="page" :total-rows="totalPost"
                              :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đã Duyệt'" @input="getMyPostsApproved" v-model="page"
                              :total-rows="totalPost" :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đã Hủy'" @input="getMyPostsDenied" v-model="page" :total-rows="totalPost"
                              :per-page="5">
                  <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                  <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                  <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                  <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                  <template #page="{ page, active }">
                    <b v-if="active" style="color: white;">{{ page }} </b>
                    <b v-else style="color: #9D6B54;">{{ page }}</b>
                  </template>
                </b-pagination>
                <b-pagination v-if="filter=='Đang Đợi'" @input="getMyPostsWaiting" v-model="page"
                              :total-rows="totalPost" :per-page="5">
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
import {API_POST, API_PERSONAL, API_MANAGE_POST} from "@/constant/constant-api";
import SideBar_Personal from "@/components/SideBar_Personal";
import Layout from "@/components/Layout";
import VueJwtDecode from "vue-jwt-decode";
import LoadingDialog from "@/components/LoadingDialog";
import CreatePostDialog from "@/pages/CreatePostDialog";
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "MyPosts",
  components: {SideBar_Personal, Layout, LoadingDialog, CreatePostDialog, ConfirmDialog},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      showConfirmDialogShow: false,
      tmpId: '',

      loading: false,
      listPosts: '',
      totalPost: '',
      post: '',
      userId: '',
      listFilter: ['Tất Cả', 'Đã Duyệt', 'Đã Hủy', 'Đang Đợi'],
      filter: 'Tất Cả',
      page: 1,
      search: '',
      isSearch: false,
      spinner: false,
      showDialog: false
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.getMyPosts(1)
  },
  methods: {
    onchange(e) {
      this.isSearch = false
      this.search = ''
      if (e.target.value === 'Tất Cả') {
        this.getMyPosts(1)
      }
      if (e.target.value === 'Đã Duyệt') {
        this.getMyPostsApproved(1)
      }
      if (e.target.value === 'Đã Hủy') {
        this.getMyPostsDenied(1)
      }
      if (e.target.value === 'Đang Đợi') {
        this.getMyPostsWaiting(1)
      }
    },
    getMyPosts(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      if (this.isSearch) {
        apiFactory.callApi(API_PERSONAL.SEARCH_MY_POST + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId,
          search: this.search
        }).then((res) => {
          this.listPosts = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.page = pageNumber
          this.loading = false;
        }).catch(() => {
        });
      } else {
        apiFactory.callApi(API_PERSONAL.LIST_POST + '?page=' + pageNumber, 'POST', {
          userId: this.userByToken.UserId
        }).then((res) => {
          this.listPosts = res.data.data
          this.totalPost = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
      }
    },
    getMyPostsApproved(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_APPROVED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyPostsDenied(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_DENIED + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },
    getMyPostsWaiting(pageNumber) {
      window.scroll(0, 0)
      this.loading = true;
      this.isSearch = false;
      let token = this.$cookies.get('token');
      this.userByToken = VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.LIST_POST_WAITING + '?page=' + pageNumber, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.listPosts = res.data.data
        this.totalPost = res.data.numberOfRecords
        this.page = pageNumber
        this.loading = false;
      }).catch(() => {
      });
    },

    HandleHide(postId) {
      this.tmpId = postId
      this.showConfirmDialog = true
    },
    cancelConfirmDialog() {
      this.showConfirmDialog = false
    },
    HandleConfirm() {
      window.scroll(0, 0)
      this.spinner = true
      apiFactory.callApi(API_POST.HIDE_POST + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Ẩn bài viết thành công!'
          if (this.filter === '') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Tất Cả') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Đã Duyệt') {
            this.getMyPostsApproved(this.page)
          }
          if (this.filter === 'Đã Hủy') {
            this.getPostsDenied(this.page)
          }
          if (this.filter === 'Đang Đợi') {
            this.getMyPostsWaiting(this.page)
          }
        } else {
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
        this.spinner = false
      }).catch(() => {
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialog = false
        this.spinner = false
      });
    },

    HandleShow(postId) {
      this.tmpId = postId
      this.showConfirmDialogShow = true
    },
    cancelConfirmDialogShow() {
      this.showConfirmDialogShow = false
    },
    HandleConfirmShow() {
      window.scroll(0, 0)
      this.spinner = true
      apiFactory.callApi(API_POST.SHOW_POST + this.tmpId, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hiện bài viết thành công!'
          if (this.filter === '') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Tất Cả') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Đã Duyệt') {
            this.getMyPostsApproved(this.page)
          }
          if (this.filter === 'Đã Hủy') {
            this.getPostsDenied(this.page)
          }
          if (this.filter === 'Đang Đợi') {
            this.getMyPostsWaiting(this.page)
          }
          this.dismissCountDown = this.dismissSecs
          this.showConfirmDialogShow = false
          this.spinner = false
        }
      }).catch(() => {
        this.responseFlag = false
        this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        this.dismissCountDown = this.dismissSecs
        this.showConfirmDialogShow = false
        this.spinner = false
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.filter = 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter = ''
        this.isSearch = true;
      }
      return this.getMyPosts(1)
    },
    getPostById(postId) {
      this.spinner = true
      const url = API_MANAGE_POST.DETAIL_POST + postId
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.post = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    openEditPostDialog(postId) {
      this.getPostById(postId)
      this.showDialog = true
    },
    cancel() {
      this.showDialog = false
    },
    save() {
      window.scroll(0,0)
      this.spinner = true
      const url = API_POST.UPDATE_POST + this.post.id
      apiFactory.callApi(url, 'PUT', {
        title: this.post.title,
        content: this.post.content,
        image: this.post.image
      }).then((res) => {
        if (res.data.message == 'UPDATE_SUCCESS') {
          this.responseMessage = ''
          this.responseFlag = true
          this.responseMessage = 'Bài viết của bạn đã được gửi lại QTV để duyệt!'
          if (this.filter === '') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Tất Cả') {
            this.getMyPosts(this.page)
          }
          if (this.filter === 'Đã Duyệt') {
            this.getMyPostsApproved(this.page)
          }
          if (this.filter === 'Đã Hủy') {
            this.getPostsDenied(this.page)
          }
          if (this.filter === 'Đang Đợi') {
            this.getMyPostsWaiting(this.page)
          }
        }else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại!'
        }
        this.showDialog = false
        this.dismissCountDown = this.dismissSecs
        this.spinner = false
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
        this.post.image = rawImg
      }
      console.log(this.imageSrc)
      reader.readAsDataURL(file);
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
}

.myPost {
  background: #F0F0F0;
}

.myPost .containerMP {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 0px auto 10px auto;
  display: flex;
  justify-content: space-between;
}

.right-contentMP .titleMP {
  text-transform: uppercase;
  color: #9D6B54;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  padding-top: 20px;
}

.left-contentMP {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
  padding-bottom: 100px;
  border: 1px solid #9D6B54;
}

.right-contentMP {
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #9D6B54;
  display: block;
}

.right-contentMP .searchMP {
  margin: 10px 0px 10px 20px;
  width: 95%;
  display: flex;
  justify-content: right;
}

.right-contentMP .searchMP .inputMP {
  border-radius: 7px;
  border: 1px solid grey;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.right-contentMP .searchMP .btnMP {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 40px;
  width: 80px;
  margin-left: 10px;
}

.right-contentMP .searchMP .btnMP:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.right-contentMP .grid {
  display: inline-grid;
  grid-template-columns: 1fr;
}

.right-contentMP .grid .item {
  color: #9D6B54;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  width: 840px;
  height: auto;
  margin: 10px 0px 10px 15px;
  display: flex;
}

.right-contentMP .grid .item:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentMP .grid .item .post-image {
  height: 140px;
  width: 140px;
  border-radius: 10px;
  object-fit: scale-down;
}

.right-contentMP .grid .item .post-image-hide {
  position: relative;
  height: 140px;
  width: 140px;
  border-radius: 10px;
  object-fit: scale-down;
}

.labelHide {
  object-fit: scale-down;
  border-radius: 10px;
  left: 0;
  color: white;
  position: absolute;
  width: 140px;
  height: 140px;
  background-color: #9d6b54;
  opacity: 0.8;
  font-size: 26px;
  text-align: center;
  padding-top: 50px;
}

.labelStatus{
  object-fit: scale-down;
  border-radius: 10px;
  left: 0;
  color: white;
  position: absolute;
  width: 140px;
  height: 140px;
  background-color: grey;
  opacity: 0.8;
  font-size: 26px;
  text-align: center;
  padding-top: 30px;
}

.right-contentMP .grid .info {
  height: auto;
  padding: 5px;
}

.right-contentMP .grid .info img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.right-contentMP .grid .info label {
  margin-left: 5px;
}

.right-contentMP .grid .info .post-title {
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

.right-contentMP .grid .info .post-content {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.right-contentMP .grid .gr-btn {
  display: block;
  padding-top: 30px;
  padding-right: 10px;
}

.right-contentMP .grid .gr-btn .item-btn {
  border-radius: 5px;
  background-color: #9D6B54;
  border: 1px solid;
  color: white;
  height: 30px;
  width: 60px;
  margin-left: 34px;
  margin-bottom: 20px;
}

.right-contentMP .grid .gr-btn .item-btn:hover {
  border-color: #9D6B54;
  background-color: #F0ECE4;
  color: #9D6B54;
}

.right-contentMP .paging {
  margin-top: 10px;
}

.right-contentMP .paging ul {
  justify-content: right;
  margin-right: 15px;
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
</style>

