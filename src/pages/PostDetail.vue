<template>
  <Layout>
    <main style="flex-grow: 1;">
      <LoadingDialog v-show="spinner"></LoadingDialog>
      <div class="postDetail">
        <div class="container">
          <div class="leftPD">
            <div class="bottom">
              <div class="leftTop">
                <div class="authorPD">
                  <div style="margin-left: auto; margin-right: auto; width: 80px"><img class="authorAvatar" v-bind:src="post.user?.avatar" alt="Ảnh đại diện"></div>
                  <div class="authorName">{{post.user?.fullname}}</div>
                  <div class="authorNumber">{{post.user?.likeNumber}} người thích</div>
                  <div style="margin-left: auto; margin-right: auto; width: fit-content">
                    <router-link v-if="userByToken.UserId != post.userId" class="authorBtn" :to="{ name: 'OtherPerson', query: {id:post.userId}}">Xem</router-link>
                    <router-link v-else class="authorBtn" to="/MyBooks">Trang cá nhân</router-link>
                  </div>
                  <hr>
                </div>
                <div class="contentPD">
                  <div class="titlePD">{{post.title}}</div>
                  <hr>
                  <div class="imgPD"><img class="displayPD" v-bind:src="post.image" alt="Ảnh minh họa"></div>
                </div>
              </div>
              <div class="leftBottom">
                <div class="mainPD">{{post.content}}</div>
                <div class="endPD">
                  <div class="createDate"><Icon class="iconTime" icon="ic:twotone-access-time"/>{{post.createdDate | formatDate}}</div>
                  <button v-if="userByToken != '' && !checkLike" class="btnLike" v-on:click="HandleLike">
                    <Icon icon="ant-design:like-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                    Thích
                  </button>
                  <button v-if="userByToken != '' && checkLike" class="btnLike" v-on:click="HandleUnLike">
                    <Icon icon="ant-design:dislike-filled" style="width: 20px; height: 20px; margin-right: 2%"/>
                    Bỏ Thích
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="rightPD">
            <div class="userPost">
              <div class="subTitle">Cùng tác giả</div><hr class="hrPD">
              <div v-for="item of listUserPost" :key="item.id">
                <router-link class="postTitlePD" @click.native="loadPage" :to="{ name: 'PostDetail', query: { id:item.id }}">{{ item.title }}</router-link>
                <hr class="hrPD2">
              </div>
            </div>
            <div class="topPost">
              <div class="subTitle">Bài viết mới nhất</div><hr class="hrPD">
              <div v-for="item of list6Post" :key="item.id">
                <router-link class="postTitlePD" @click.native="loadPage" :to="{ name: 'PostDetail', query: { id:item.id }}">{{ item.title }}</router-link>
                <hr class="hrPD2">
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
import LoadingDialog from "@/components/LoadingDialog";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "BookDetail",
  components: {Layout, Icon, LoadingDialog},
  data() {
    return {
      userByToken: '',
      info: '',
      post: '',
      list6Post: '',
      listUserPost: '',
      spinner: false,
      checkLike: false
    }
  },
  created() {
    if(this.$cookies.get('token')){
      this.userByToken= VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8')
    }
    this.getPostById()
    this.get6Post()
    this.getMyInformation()
    this.CheckLike()
  },
  methods: {
    getPostById() {
      this.spinner = true
      const url = API_POST.DETAIL_POST+ this.$route.query.id
      apiFactory.callApi(url,'GET',{}).then((res)=>{
        if(res.data.data){
          this.post = res.data.data
          this.getPostUser(this.post.userId)
        }else{
          this.$router.push({name: "404Page"})
        }
        this.spinner = false
      }).catch(() => {
      });
    },
    get6Post(){
      apiFactory.callApi(API_POST.POST6,'GET',{}).then((res)=>{
        this.list6Post = res.data.data
      }).catch(() => {
      });
    },
    getPostUser(userId){
      const url = API_POST.USER_POST + userId
      apiFactory.callApi(url, 'GET', {
      }).then((res) => {
        this.listUserPost = res.data.data
      }).catch(() => {
      });
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
    loadPage(){
      this.loading = true
      this.CheckLike()
      this.getPostById()
    },
    HandleLike() {
      this.spinner = true
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.ADD_POST_FAVORITE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'ADD_SUCCESS') {
          this.getPostById()
          this.checkLike = true
        }
        this.spinner = false;
      }).catch(() => {
      });
    },
    HandleUnLike() {
      this.spinner = true
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.DELETE_POST_FAVORITE + this.$route.query.id, 'DELETE', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'DELETE_SUCCESS') {
          this.getPostById()
          this.checkLike = false
        }
        this.spinner = false
      }).catch(() => {
      });
    },
    CheckLike(){
      this.userByToken = VueJwtDecode.decode(this.$cookies.get('token'), 'utf-8');
      apiFactory.callApi(API_PERSONAL.CHECK_POST_LIKE + this.$route.query.id, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        if (res.data.message == 'TRUE') {
          this.checkLike = true
        }else{
          this.checkLike = false
        }
      }).catch(() => {
      });
    }
  },
  filters:{
    formatDate(value){
      return new Date(value).toLocaleString('en-GB')
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}

.hrPD{
  padding: 0px;
  margin: 0px;
}

.hrPD2{
  margin-top: 0px;
}

.postDetail {
  background: #F0F0F0;
}

.top {
  border-radius: 10px;
  background: #F0ECE4;
  width: 100%;
  height: 100px;
  margin: 5px auto 15px auto;
  display: flex;
  border: 1px solid #9D6B54;
}

.userImageBI{
  margin: 20px 60px 20px 55px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  border: 2px outset #9D6B54;
}

.createPost{
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

.iconBI{
  color: #9D6B54;
  margin-left: 15px;
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 30px;
}

.postDetail .container {
  max-width: 1250px;
  background: #F0F0F0;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.leftPD{
  width: 880px;
  background: #F0F0F0;
  height: auto;
  border-radius: 10px;
  display: block;
  margin-bottom: 20px;
  margin-top: 10px;
}

.leftTop{
  width: 100%;
  display: flex;
}

.bottom{
  border-radius: 10px;
  border: 1px solid #9D6B54;
}

.authorPD{
  background: #F0ECE4;
  border-radius: 10px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 200px;
  display: block;
  height: auto;
}

.authorAvatar{
  border: 2px outset #9D6B54;
  width: 80px;
  height: 80px;
  border-radius: 40px;
}

.authorName{
  text-align: center;
  color: #9D6B54;
  font-weight: 600;
}

.authorNumber{
  text-align: center;
  color: #9D6B54;
  margin-bottom: 25px;
}

.authorBtn{
  border-radius: 5px;
  background-color: #9D6B54;
  color: white;
  padding: 5px 10px 7px 10px;
  text-decoration: none;
  border: 1px solid #9D6B54;
}

.authorBtn:hover {
  border-color: #9D6B54;
  background: #F0ECE4;
  color: #9D6B54;
}

.contentPD{
  border-radius: 10px;
  width: 100%;
  background: #F0ECE4;
}

.titlePD{
  color: #9D6B54;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 26px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: center;
}

.imgPD{
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: auto;
  border: 1px solid grey;
}

.displayPD{
  width: 100%;
}

.mainPD{
  padding: 15px 5% 20px 5%;
  text-indent: 5%;
  min-height: 320px;
  text-align: justify;
  background: #F0ECE4;
}

.endPD{
  border-radius: 10px;
  background: #F0ECE4;
  display: flex;
  justify-content: space-between;
}

.iconTime{
  margin-bottom: 5px;
  font-size: 24px;
  margin-right: 5px;
}

.createDate{
  color: #9D6B54;
  font-weight: 600;
  margin-left: 5%;
  padding-top: 15px;
  padding-bottom: 10px;
}

.btnLike{
  height: 48px;
  width: 187px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #9D6B54;
  justify-content: center;
  float: right;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  margin-right: 40px;
  font-weight: 700;
}

.btnLike:hover {
  background: #F0ECE4;
  color: #9D6B54;
  font-size: 16px;
  border: 1px solid #9D6B54;
}

.rightPD{
  width: 330px;
  background: #F0ECE4;
  height: auto;
  border-radius: 10px;
  display: block;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #9D6B54;
}

.subTitle{
  color: white;
  width: 230px;
  border-radius: 10px 10px 0px 0px;
  margin-right: auto;
  height: 45px;
  font-size: 20px;
  margin-top: 20px;
  padding-left: 20px;
  padding-top: 7px;
  background: #9D6B54;
}

.postTitlePD{
  margin-top: 5px;
  color: grey;
  font-size: 14px;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-decoration: none;
}

.postTitlePD:hover{
  color: #9D6B54;
}
</style>