<template>
  <div class="menu-sidebar">
    <div class="title">
      <h4>Tủ sách của tôi</h4>
    </div>
    <div class="group-btn">
      <button class="btn">
        <button class="btn-icon">
          <Icon icon="material-symbols:menu-book-outline-rounded"/>
        </button>
        <button class="side-btn">Tủ sách của tôi</button>
      </button>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:post-outline"/>
        </button>
        <button class="side-btn">Bài đăng của tôi</button>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:cards-heart-outline"/>
        </button>
        <button class="side-btn">Danh sách yêu thích</button>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="mdi:chat-question-outline"/>
        </button>
        <button class="side-btn">Yêu cầu của tôi</button>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="ic:outline-swap-horizontal-circle"/>
        </button>
        <button class="side-btn">Giao dịch</button>
      </div>
      <div class="btn">
        <button class="btn-icon">
          <Icon icon="iconoir:profile-circled"/>
        </button>
        <button class="side-btn">Thông tin cá nhân</button>
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
.menu-sidebar {
  width: 292px;
  height: 930px;
  padding-top: 3%;
  margin-right: 5%;
  background: #DFD5CB;
  border-radius: 8px;
  margin-top: 83px;
  margin-bottom: auto;
}

.title {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding-left: 5%;
  color: #9D6B54;
}
h4{
  margin-bottom: 24px;
  margin-left: 20px;
}
.group-btn {
  width: min-content;
  margin-left: 15px;
}

.btn {
  display: flex;
}

.btn-icon {
  /*width: 100%;*/
  height: 36px;
  width: 36px;
  border-radius: 12px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: white;
  justify-content: center;
  color: #9D6B54;
  font-size: 14px;
  margin-bottom: 11px;
  margin-right: 11px;
  line-height: 16.4px;
  font-weight: 400;

}

.side-btn {
  height: 36px;
  width: 191px;
  border-radius: 8px;
  border: white;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: white;
  justify-content: center;
  color: #9D6B54;
  font-size: 14px;
  margin-bottom: 11px;
  line-height: 16.4px;
  font-weight: 400;

}
.btn:hover .side-btn{
  background: #9D6B54;
  color: white;
  font-size: 14px;
}
.btn:hover .btn-icon{
  background: #9D6B54;
  color: white;
  font-size: 14px;
}
</style>