<template>
  <Side_Bar v-if="userByToken.role == 1">
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <PostDetailDialog :show="showDialogPD" :cancel="cancel" v-if="showDialogPD" class="modal">
          <div class="topDialog">
            <div class="dialogTitle">{{post.title}}</div>
            <button class="dialogBtn" v-on:click="cancel">X</button>
          </div>
          <div class="bottomDialog">
            <img class="imgPD" v-bind:src="post.image">
            <div>{{post.content}}</div>
          </div>
          <div class="date">Đăng lúc: {{post.createdDate | format}}</div>
        </PostDetailDialog>
        <div class="col-lg-6">
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ BÀI ĐĂNG</div>
            <div class="search-post">
              <select class="selectCss"  v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
              </select>
              <div>
                <input type="text" v-model="search" placeholder="Nhập tiêu đề bài đăng">
                <button v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Ảnh</td>
                  <td>Mã</td>
                  <td>Người đăng</td>
                  <td>Tiêu đề</td>
                  <td>Thời gian đăng</td>
                  <td>Trạng thái</td>
                  <td>Duyệt/Hủy</td>
                </tr>
                </thead>
                <tbody v-for="item of listPosts" :key="item.id">
                <tr>
                  <td style="padding-left: 13px"><button v-on:click="openDialogPD(item.id)" class="tableBtnAction"><Icon icon="ic:baseline-remove-red-eye"/></button></td>
                  <td><img v-bind:src="item.image" style="height: 85px; width: 85px; object-fit: scale-down"></td>
                  <td>{{ item.id}}</td>
                  <td>{{ item.user.fullname }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.createdDate | format}}</td>
                  <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                  <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.status == 'Waiting'">
                    <button class="tableBtnAction" v-on:click="HandleApproved(item.id)"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Approved'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Denied'">
                    <button  class="tableBtnAction" v-on:click="HandleApproved(item.id)"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="paging-post">
                <b-pagination v-if="filter==''" class="page-number" @input="getPostsAll" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getPostsAll" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đã Duyệt'" class="page-number" @input="getPostsApproved" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getPostsDenied" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getPostsWaiting" v-model="page" :total-rows="totalPosts"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_Bar>
  <Side_BarAdmin v-else>
    <div class="ml">
      <LoadingDialog v-show="spinner" style="z-index: 1;"></LoadingDialog>
      <Dashboard></Dashboard>
      <div class="row">
        <PostDetailDialog :show="showDialogPD" :cancel="cancel" v-if="showDialogPD" class="modal">
          <div class="topDialog">
            <div class="dialogTitle">{{post.title}}</div>
            <button class="dialogBtn" v-on:click="cancel">X</button>
          </div>
          <div class="bottomDialog">
            <img class="imgPD" v-bind:src="post.image">
            <div>{{post.content}}</div>
          </div>
          <div class="date">Đăng lúc: {{post.createdDate | format}}</div>
        </PostDetailDialog>
        <div class="col-lg-6">
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-if="responseFlag" :show="dismissCountDown" variant="success" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <b-alert style="position: absolute; right: 0; margin-top: 10px; z-index: 999999" v-else :show="dismissCountDown" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
            {{responseMessage}}
          </b-alert>
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ BÀI ĐĂNG</div>
            <div class="search-post">
              <select class="selectCss"  v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
              </select>
              <div>
                <input type="text" v-model="search" placeholder="Nhập tiêu đề bài đăng">
                <button v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Chi tiết</td>
                  <td>Ảnh</td>
                  <td>Mã</td>
                  <td>Người đăng</td>
                  <td>Tiêu đề</td>
                  <td>Thời gian đăng</td>
                  <td>Trạng thái</td>
                  <td>Duyệt/Hủy</td>
                </tr>
                </thead>
                <tbody v-for="item of listPosts" :key="item.id">
                <tr>
                  <td style="padding-left: 13px"><button v-on:click="openDialogPD(item.id)" class="tableBtnAction"><Icon icon="ic:baseline-remove-red-eye"/></button></td>
                  <td><img v-bind:src="item.image" style="height: 85px; width: 85px; object-fit: scale-down"></td>
                  <td>{{ item.id}}</td>
                  <td>{{ item.user.fullname }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.createdDate | format}}</td>
                  <td v-if="item.status == 'Approved'" ><span class="role approved">ĐÃ DUYỆT</span></td>
                  <td v-if="item.status == 'Denied'" ><span class="role denied">ĐÃ HỦY</span></td>
                  <td v-if="item.status == 'Waiting'" ><span class="role waiting">ĐANG ĐỢI</span></td>
                  <td v-if="item.status == 'Waiting'">
                    <button class="tableBtnAction" v-on:click="HandleApproved(item.id)"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Approved'">
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button class="tableBtnAction" v-on:click="HandleDenied(item.id)"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                  <td v-if="item.status == 'Denied'">
                    <button  class="tableBtnAction" v-on:click="HandleApproved(item.id)"><Icon icon="material-symbols:check-box-rounded"/></button>
                    <button disabled style="font-size: 30px; cursor: not-allowed"><Icon icon="mdi:cancel-box"/></button>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="paging-post">
                <b-pagination v-if="filter==''" class="page-number" @input="getPostsAll" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getPostsAll" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đã Duyệt'" class="page-number" @input="getPostsApproved" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đã Hủy'" class="page-number" @input="getPostsDenied" v-model="page" :total-rows="totalPosts"
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
                <b-pagination v-if="filter=='Đang Đợi'" class="page-number" @input="getPostsWaiting" v-model="page" :total-rows="totalPosts"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Side_BarAdmin>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import PostDetailDialog from "@/pages/ManagePost/PostDetailDialog";
import {Icon} from '@iconify/vue2';
import Dashboard from "@/components/Dashboard";
import Side_BarAdmin from "@/components/Side_BarAdmin";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "GetPosts",
  components: {Side_Bar, LoadingDialog, PostDetailDialog, Icon, Dashboard, Side_BarAdmin},
  data() {
    return {
      responseFlag: true,
      responseMessage: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showConfirmDialog: false,
      userByToken: '',

      post: '',
      listPosts: '',
      totalPosts: '',
      search: '',
      showDialogPD: false,
      isSearch: false,
      spinner: false,
      listFilter: ['Tất Cả', 'Đã Duyệt', 'Đã Hủy', 'Đang Đợi'],
      filter: 'Tất Cả',
      page: ''
    }
  },
  created() {
    if(!this.$cookies.get('token')){
      this.$router.push({name: "404Page"})
    }
    this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
    if(this.userByToken.role == 3){
      this.$router.push({name: "404Page"})
    }
    this.isSearch = false
    this.getPostsAll(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getPostsAll(1)
      }
      if(e.target.value=== 'Đã Duyệt'){
        this.getPostsApproved(1)
      }
      if(e.target.value === 'Đã Hủy'){
        this.getPostsDenied(1)
      }
      if(e.target.value === 'Đang Đợi'){
        this.getPostsWaiting(1)
      }
    },
    getPostsAll(pageNumber) {
      if(this.search){
        apiFactory.callApi(API_MANAGE_POST.SEARCH_POST + pageNumber, 'POST', {
          search: this.search
        }).then((res) => {
          this.listPosts = res.data.data
          this.totalPosts = res.data.numberOfRecords
          this.page = pageNumber
        }).catch(() => {
        });
      }
      else{
        apiFactory.callApi(API_MANAGE_POST.LIST_POST + pageNumber, 'GET', {}).then((res) => {
          this.listPosts = res.data.data
          this.totalPosts = res.data.numberOfRecords
          this.page = pageNumber
      }).catch(() => {
      });
      }
    },
    getPostsApproved(pageNumber) {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_APPROVED + pageNumber, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
        this.totalPosts = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getPostsDenied(pageNumber) {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_DENIED + pageNumber, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
        this.totalPosts = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    getPostsWaiting(pageNumber) {
      this.isSearch = false;
      apiFactory.callApi(API_MANAGE_POST.LIST_POST_WAITING + pageNumber, 'GET', {}).then((res) => {
        this.listPosts = res.data.data
        this.totalPosts = res.data.numberOfRecords
        this.page = pageNumber
      }).catch(() => {
      });
    },
    HandleApproved(id) {
      apiFactory.callApi(API_MANAGE_POST.APPROVED_POST + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Duyệt bài đăng thành công!'
          if(this.filter === ''){
            this.getPostsAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getPostsAll(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getPostsApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getPostsDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getPostsWaiting(this.page)
          }
        }
        else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
        alert('Duyệt không thành công!')
      });
    },
    HandleDenied(id) {
      apiFactory.callApi(API_MANAGE_POST.DENIED_POST + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.responseFlag = true
          this.responseMessage = 'Hủy bài đăng thành công!'
          if(this.filter === ''){
            this.getPostsAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getPostsAll(this.page)
          }
          if(this.filter === 'Đã Duyệt'){
            this.getPostsApproved(this.page)
          }
          if(this.filter  === 'Đã Hủy'){
            this.getPostsDenied(this.page)
          }
          if(this.filter === 'Đang Đợi'){
            this.getPostsWaiting(this.page)
          }
        }
        else{
          this.responseFlag = false
          this.responseMessage = 'Có lỗi xảy ra! Vui lòng thử lại sau!'
        }
        this.dismissCountDown = this.dismissSecs
      }).catch(() => {
      });
    },
    HandleSearch(){
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getPostsAll(1)
    },
    getPostById(postId){
      apiFactory.callApi(API_MANAGE_POST.DETAIL_POST + postId, 'GET', {}).then((res) => {
        this.post = res.data.data
        this.showDialogPD = true
      }).catch(() => {
      });
    },
    openDialogPD(postId) {
      this.getPostById(postId)
    },
    cancel() {
      this.showDialogPD = false
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  },
  filters: {
    formatDate(value) {
      return new Date(value).toLocaleDateString('en-GB')
    },
    format(value) {
      return new Date(value).toLocaleString('en-GB')
    }
  }
}
</script>

<style>
@import "../../assets/CSS/tableManage.css";
.paging-post {
  margin-top: 10px;
}

.paging-post ul {
  justify-content: right;
  margin-right: 15px;
}

.search-post {
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}

.selectCss{
  border: 1px solid white;
  border-radius: 10px;
  width: 150px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-post input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-post button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-post button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>