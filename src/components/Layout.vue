<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh">
    <header class="Main__header">
      <div class="Main__header__container">
        <div class="Main__logo">
          <a href="/">
            <img src="../image/logo.png" alt="Logo Trạm Sách"/>
          </a>
        </div>
        <div>
          <nav style="padding-left: 50px" class="Main__nav">
            <router-link
                to="/"
                class="Main__list__item home"
                active-color="#9D6B54"
            >Trang Chủ
            </router-link>
            <router-link to="/AllBooks" class="Main__list__item course-management btnCategory" active-color="#9D6B54">Tủ sách</router-link>
            <router-link
                to="/BlogIndex"
                class="Main__list__item class-management"
                active-color="#9D6B54"
            >Trạm đọc
            </router-link>
            <router-link
                to="/Policy&Terms"
                class="Main__list__item musers-management"
                active-color="#9D6B54"
            >Chính sách & điều khoản
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#9D6B54"
            >Quy trình
            </router-link>
            <router-link
                to="/users-management"
                class="Main__list__item musers-management"
                active-color="#9D6B54"
            >Giới thiệu
            </router-link>
          </nav>
        </div>
        <ul class="Main__account">
          <nav v-if="!this.$cookies.get('token')">
            <router-link to="/login" class="Main__list__item musers-management">Đăng nhập</router-link>
            <router-link to="/register" class="Main__list__item musers-management">Đăng ký</router-link>
          </nav>
          <nav v-else>
            <li>
              <b-dropdown variant="black" no-caret>
                <template v-slot:button-content>
                  <Icon class="icon" icon="tabler:bell-ringing-2"/><div class="countNoti">{{count}}</div>
                </template>
                <div class="titleNoti">Thông Báo</div>
                <div v-for="item of noti" :key="item.id" class="notification">
                  <div v-if="!item.isRead" style="background-color: #F0ECE4; height: 25px; padding-left: 10px; padding-top: 5px">"{{item.content}}"</div>
                  <div v-else style="padding-left: 10px;height: 25px;padding-top: 5px;">"{{item.content}}"</div>
                  <hr style="margin-top: 0px; margin-bottom: 0px">
                </div>
                <div class="allNoti"><router-link class="linkAllNoti" to="AllNotification">Xem tất cả</router-link></div>
              </b-dropdown>
            </li>
            <li>
              <b-dropdown right text="Right align" variant="black" no-caret>
                <template v-slot:button-content>
                    <img class="icon" v-bind:src="user.avatar">
                </template>
                <div class="dropdown-item-top">
                  <img class="icon" v-bind:src="user.avatar">
                  <div>{{user.fullname}}</div>
                  <div style="color: grey">{{user.email}}</div>
                </div>
                <hr style="margin: 5px" />
                <router-link to="/MyBooks" class="dropdown-item">
                  <Icon class="iconPerson" icon="ic:round-person-pin"/> Trang cá nhân
                </router-link>
                <hr style="margin: 5px" />
                <div v-if="user.roleId == 1 || user.roleId == 2">
                  <router-link  to="/ManageIndex" class="dropdown-item">
                    <Icon class="iconPerson" icon="bi:list-task"/> Quản trị
                  </router-link>
                  <hr style="margin: 5px" />
                </div>
                <button v-on:click="HandleLogout" class="dropdown-item">
                  <Icon class="iconPerson" icon="uil:signout"/> Đăng xuất
                </button>
            </b-dropdown>
          </li>
          </nav>
        </ul>
      </div>
    </header>
    <slot/>
    <footer >
      <div class="Main__subfooter">
          <div class="Main__subfooter__container">
            <div class="contact">
              <span >ĐĂNG KÝ NHẬN TIN:</span>
              <input class="input1" type="text" placeholder="Nhập tên của bạn">
              <input class="input2" type="text" placeholder="Nhập email của bạn">
              <button>ĐĂNG KÝ</button>
            </div>
          </div>
      </div>
      <div class="Main__footer">
        <div class="Main__footer__container">
          <div class="grid">
            <div class="grid-row">
              <div class="grid-column">
                <a href="/">
                  <img src="../image/logo.png" alt="Logo Trạm Sách"/>
                </a><br>
                <span>Tất cả các giao dịch ở Trạm Sách được</span><br>
                <span>chúng tôi đảm bảo kiểm duyệt qua </span><br>
                <span>hình thức và giao hàng tận nơi trong </span><br>
                 <span> địa bàn nội thành TP Hà Nội. Không</span><br>
                <span>hỗ trợ giao dịch trực tiếp tại Trạm.</span>
              </div>
              <div class="grid-column">
                <h3 class="heading">TÀI KHOẢN</h3>
                <ul class="list">
                  <li class="item">
                    <a v-if="this.$cookies.get('token')" v-on:click="HandleLogout" class="item-link" style="cursor: pointer">Đăng xuất</a>
                    <a v-else href="/login" class="item-link">Đăng nhập/Đăng ký</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Thay đổi thông tin cá nhân</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Thay đổi thông tin giao hàng</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Tủ sách</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Trang cá nhân</a>
                  </li>
                  <li class="item">
                    <span class="contact_info">tramsachhn@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div class="grid-column">
                <h3 class="heading">HỖ TRỢ</h3>
                <ul class="list">
                  <li class="item">
                    <a href="" class="item-link">Chính sách kiểm duyệt</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Chính sách cọc - hoàn tiền</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Chính sách bảo mật thanh toán</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Quy trình giao dịch</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Trung tâm hỗ trợ</a>
                  </li>
                  <li class="item">
                    <span class="contact_info">Hotline: 0961284654</span>
                  </li>
                </ul>
              </div>
              <div class="grid-column">
                <h3 class="heading">DỊCH VỤ</h3>
                <ul class="list">
                  <li class="item">
                    <a href="" class="item-link">Điều khoản sử dụng</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Chính sách bảo mật thông tin cá nhân</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Chính sách bảo mật thanh toán</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Phương thức thanh toán</a>
                  </li>
                  <li class="item">
                    <a href="" class="item-link">Giới thiệu Trạm Sách</a>
                  </li>
                  <li class="item">
                    <span class="contact_info">Số 1 Đào Duy Anh, Đống Đa, Hà Nội</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
import {API_PERSONAL} from "@/constant/constant-api";
import apiFactory from "@/config/apiFactory";
import {Icon} from '@iconify/vue2';

export default {
  name: "Layout",
  components: {Icon},
  data(){
    return{
      userByToken: '',
      user:'',
      noti: '',
      userId: '',
      count: ''
    }
  },
  created() {
    this.getUserInfoByToken()
    this.getNotifications()
    this.getNotificationsNotRead()
  },
  methods:{
    getUserInfoByToken(){
        let token = this.$cookies.get('token');
        this.userByToken= VueJwtDecode.decode(token, 'utf-8');
        apiFactory.callApi(API_PERSONAL.INFORMATION, 'POST', {
          userId: this.userByToken.UserId
        }).then((res) => {
          this.user = res.data.data
        }).catch(() => {
        });
    },
    getNotifications() {
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.NOTIFICATION_10, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.noti = res.data.data
      }).catch(() => {
      });
    },
    getNotificationsNotRead() {
      let token = this.$cookies.get('token');
      this.userByToken= VueJwtDecode.decode(token, 'utf-8');
      apiFactory.callApi(API_PERSONAL.NOTIFICATION_NOT_READ, 'POST', {
        userId: this.userByToken.UserId
      }).then((res) => {
        this.count = res.data.numberOfRecords
      }).catch(() => {
      });
    },
    HandleLogout(){
      this.$cookies.remove('token')
      window.location.replace('/');
    },
  }
}
</script>

<style lang="scss">
.Main {
  &__site {
    width: 100%;
    height: auto;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
    @media (min-width: 1500px) {
      max-width: 1440px;
    }
    @media (min-width: 1600px) {
      max-width: 1560px;
    }
  }

  &__header {
    padding: 10px 0;
    z-index: 10;
    border-bottom: 1px solid #D9D9D9;
    position: sticky;
    top: 0;
    background: white;
    height: 75px;
    &__container {
      //max-width: 1230px;
      margin-left: auto;
      margin-right: auto;
      padding-right: 15px;
      padding-left: 15px;
      //width: 100%;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__logo {
    padding-right: 20px;
    height: 55px;
  }

  &__logo img {
    width: 160px;
    height: auto;
    position: unset;
    padding-bottom: 10px;
  }

  &__nav {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0 20px 0 0;
    position: relative;
    height: auto;
    width: auto;
    background: inherit;
    max-width: 100%;
    transform: none;
    transition: none;
  }

  &__list {
    list-style: none;
    padding-left: 32px;
    margin: 0;
    position: relative;

    &__item {
      display: inline-block;
      color: #111111;
      margin-right: 24px;
      width: auto;
      position: relative;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      line-height: 20px;
    }

    &__item:before {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #9D6B54;
      opacity: 0;
      transition: 0.3s;
    }

    &__item:not(.is_active):hover:before {
      opacity: 1;
      bottom: -20px;
    }

    &__item:not(.is_active):hover {
      color: #9D6B54;
      text-decoration: none;
    }
  }

  &__account {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li {
      font-size: 1rem;
      display: inline-flex;
      margin-bottom: 0;
      margin-left: 12px;
    }

    &__item h3 {
      font-weight: 400;
      transition: all 300ms;
      margin-bottom: 0;
      margin-top: 0;
      font-size: 16px;
      cursor: pointer;
    }

    &__item a {
      font-weight: 400;
      transition: all 300ms;
      margin-bottom: 0;
      margin-top: 0;
      text-decoration: none;
      color: black;
    }
  }

  &__chat {
    background: #E4E6EB;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5px;
    transition: all 300ms;
    padding: 4px 8px;
  }

  &__notify {
    text-align: center;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: #E4E6EB;
  }

  &__avatar {
    cursor: pointer;
    height: 32px;
    min-width: 32px;
    width: 32px;
    border-radius: 50%;
    text-transform: uppercase;
    color: white;
    font-weight: 500;
    font-size: 14px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__indicator {
    position: absolute;
    left: 0;
    bottom: -20px;
    transition: 0.4s;
    height: 3px;
    z-index: 1;
  }

  &__subfooter {
    font-size: 16px;
    line-height: 1.38;
    color: #111111;
    bottom: 0;
    left: 0;
    right: 0;
    background: #F0F0F0;
    &__container{
      height: 75px;
      max-width: 1230px;
      background-color: #9D6B54;
      border-radius: 10px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__footer {
    font-size: 16px;
    line-height: 1.38;
    color: #111111;
    bottom: 0;
    left: 0;
    right: 0;
    background: #F0F0F0;
    &__container{
      border-radius: 10px;
      height: auto;
      max-width: 1230px;
      background-color: #DFD5CB;
      width: 100%;
      padding: 45px 15px 25px;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__logo {
    margin-bottom: 10px;
    height: 24px;
    width: 153px;
  }

  &__name {
    color: #9D6B54;
    margin: 0;
    font-size: 14px;
    font-weight: 550;
    white-space: nowrap;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden
  }
  &__name:hover {
    color: #9D6B54;
    margin: 0;
    font-size: 14px;
    font-weight: 550;
    white-space: nowrap;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden
  }
}

.btn-group > .btn {
  padding: 0;
}

.dropdown-menu {
  padding-left: 10px;
  padding-right: 10px;
  min-width: 220px;
  max-width: 300px;
  right: 0 !important;
  left: auto !important;
  height: auto;
  transform: unset !important;
  top: 50px !important;
}

.dropdown-item{
  color: #9d6b54;
}

.dropdown-item:hover{
  background-color: #9D6B54;
  color: white;
  border-radius: 5px;
}

.dropdown-item-top{
  width: auto;
  color: #9d6b54;
  text-align: center;
  border-radius: 5px;
  height: auto;
  padding-top: 3px;
}

.iconPerson{
  font-size: 26px;
  margin-right: 15px;
}

.contact{
  height: 50px;
  max-width: 1050px;
  background-color: #9D6B54;
  border-radius: 10px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact span{
  color: white;
  font-size: 22px;
}

.contact input{
  border: 1px solid silver;
  border-radius: 10px;
  color: #9D6B54;
  height: 45px;
  color: #9D6B54;
  padding: 12px 10px;
}

.contact input:focus{
  border-color: #9D6B54;
}

.contact .input1{
  width: 250px;
}

.contact .input2{
  width: 400px;
}

.contact button{
  height: 45px;
  border: none;
  border-radius: 10px;
  width: 100px;
  font-weight: bold;
  color: #9D6B54;
  background-color: white;

}

.contact button:hover{
  background-color: #DFD5CB;
  color: white;
  border-color: white;
}

.grid{
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

.grid-row{
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
  justify-content: space-between;
}

.grid-column{
  padding-left: 15px;
  padding-right: 15px;
  width: 25%;
}

.heading{
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #9D6B54;
}

.list{
  padding-left: 0;
  list-style: none;
}

.item-link{
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  color: #737373;
  padding: 3px 0;
  align-items: center;
  list-style: none;
  transition: 300ms;
}

.item-link:hover{
  color: #9D6B54;
  transform: translateX(0.25rem);
}

.contact_info{
  font-weight: bold;
  display: flex;
  text-decoration: none;
  font-size: 1rem;
  color: #9D6B54;
  padding: 3px 0;
  align-items: center;
}

.icon{
  color: #9d6b54;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 14px;
  margin-right: 14px;
  padding: 5px;
  background-color: #F0ECE4;
}

.icon:hover{
  background-color: #c4a698;
  color: #F0ECE4;
}

.dropdown-menu{
  max-width: 600px;
}

.notification{
  width: 550px;
  margin-right: 10px;
  margin-left: 10px;
  color: #9d6b54;
  font-size: 12px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.countNoti{
  position: absolute;
  top: 0;
  margin-left: 35px;
  background-color: red;
  width: 20px;
  height: 20px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding-top: 1px;
  vertical-align: middle;
  border-radius: 10px;
}

.allNoti{
  text-align: center;
}

.linkAllNoti{
  padding: 5px;
  border-radius: 5px;
   color: #9d6b54;
  font-weight: 600;
}

.linkAllNoti:hover{
  background-color: #F0ECE4;
  color: #9d6b54;
}

.titleNoti{
  color: #9d6b54;
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 16px;
  border-radius: 10px;
}
</style>