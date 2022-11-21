<template>
  <Layout>
    <main style="flex-grow: 1">
      <div class="body">
        <div class="container">
          <div class="menu-sidebar">
            <div class="title">
              <h2>Tủ sách của tôi</h2>
            </div>
            <div class="group-btn">
              <div class="btn">
                <button class="btn-icon">
                  <Icon icon="material-symbols:menu-book-outline-rounded"/>
                </button>
                <button class="side-btn">Tủ sách của tôi</button>
              </div>
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
          <div class="profile">
            <div>
              <b-avatar badge badge-left class="avatar"></b-avatar>
            </div>
            <div class="infor">
              <h3>Thông tin cá nhân</h3>
              <div>
                <span>Trạm sách</span><br>
                <span>tramsachhn@gmail.com</span><br>
                <span>0943568972</span><br>
                <span>Hà Nội, Việt Nam</span><br>
              </div>
            </div>
            <div>
              <h4>1M lượt theo dõi</h4>
              <b-avatar-group size="60px">
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
                <b-avatar style="background-color: #6C757D"></b-avatar>
              </b-avatar-group>
              <p>100 lượt giao dịch</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import {Icon} from '@iconify/vue2';

export default {
  name: "PersonalIndex",
  components: {Layout, Icon},
  data() {
    return {}
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
  display: flex;
}

.menu-sidebar {
  width: auto;
  padding-top: 3%;
  margin-right: 5%;
  background: #DFD5CB;
  border-radius: 8px;
  margin-top: 83px;
}

.title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding-left: 5%;
  color: #9D6B54;
}

.group-btn {
  width: min-content;
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
  font-family: Roboto;
}

.side-btn {
  height: 36px;
  width: 191px;
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
  line-height: 16.4px;
  font-weight: 400;
  font-family: Roboto;
}

.side-btn:hover {
  background: #9D6B54;
  color: white;
  font-size: 14px;
}

.profile {
  margin-top: 3%;
  display: flex;

}

.avatar {
  background-color: #6C757D;
  width: 186px;
  height: 186px;
  margin-top: 45px;
}
.infor{
  width: 100%;
  margin-left: 79px;
  margin-top: 19px;
  margin-right: 70px;
}
</style>