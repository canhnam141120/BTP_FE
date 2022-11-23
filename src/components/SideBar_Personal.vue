<template>
  <div class="menu-sidebarPS">
    <div class="title">TRANG CÁ NHÂN</div>
    <div class="group-btn">
      <button class="btn">
        <button class="btn-icon">
          <Icon icon="material-symbols:menu-book-outline-rounded"/>
        </button>
        <router-link  class="side-btn" to="/MyBooks">Tủ sách</router-link>
      </button>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:post-outline"/>
        </button>
        <router-link class="side-btn" to="/MyPosts">Bài đăng</router-link>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:cards-heart-outline"/>
        </button>
        <router-link class="side-btn" to="/MyFavorites">Danh sách yêu thích</router-link>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:chat-question-outline"/>
        </button>
        <router-link class="side-btn" to="/MyRequests">Yêu cầu đã gửi</router-link>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="ic:outline-swap-horizontal-circle"/>
        </button>
        <router-link class="side-btn" to="/MyTransaction">Giao dịch</router-link>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="iconoir:profile-circled"/>
        </button>
        <router-link class="side-btn" to="/MyInformation">Thông tin cá nhân</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {Icon} from '@iconify/vue2';
export default {
  name: 'SideBar_Personal',
  components: {Icon},
}
</script>

<style scoped>
.menu-sidebarPS {
  width: 350px;
  height: auto;
  padding-top: 3%;
  background: #F0ECE4;
  /*background: #F0ECE4;*/
  border-radius: 8px;
  padding-bottom: 50px;
}

.title {
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  line-height: 30px;
  padding-left: 5%;
  color: #9D6B54;
  margin-bottom: 30px;
  margin-top: 30px;
}
h4{
  margin-bottom: 24px;
  margin-left: 20px;
}
.group-btn {
 margin-left: 20px;
}

.btn {
  display: flex;
}

.btn-icon {
  /*width: 100%;*/
  height: 50px;
  width: 50px;
  border-radius: 12px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: white;
  justify-content: center;
  color: #9D6B54;
  font-size: 26px;
  margin-bottom: 11px;
  margin-right: 11px;
  line-height: 16.4px;
  font-weight: 600;
}

.side-btn {
  height: 50px;
  width: 210px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: white;
  justify-content: center;
  color: #9D6B54;
  font-size: 18px;
  margin-bottom: 11px;
  line-height: 16.4px;
  font-weight: 400;
  padding-top: 15px;
}
.btn:hover .side-btn{
  background: #9D6B54;
  color: white;
  font-size: 18px;
}
.btn:hover .btn-icon{
  background: #9D6B54;
  color: white;
  font-size: 26px;
}
</style>