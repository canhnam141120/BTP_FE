<template>
  <Side_Bar>
        <div class="DetailPost">
          <h1>Chi tiết bài đăng</h1>
            <div>
              <div><label>Mã bài dăng: </label><span>{{post.id}}</span></div>
              <div><label>Người đăng: </label><span>{{post.user.fullname}}</span></div>
              <div><label>Tiêu đề: </label><span>{{post.title}}</span></div>
              <div><label>Nội dung: </label><span>{{post.content}}</span></div>
              <div><label>Ảnh: </label><span>{{post.image}}</span></div>
              <div><label>Hashtag: </label><span>{{post.hashtag}}</span></div>
              <div><label>Thời gian đăng: </label><span>{{post.createdDate}}</span></div>
              <div><label>Trạng thái: </label><span>{{post.status}}</span></div>
              <button><router-link to="/ManagePost" class="au-btn au-btn-icon au-btn--brown au-btn--small btn-router">Quay lại</router-link></button>
            </div>
        </div>
  </Side_Bar>
<!--  <SideBar>-->
<!--  <div class="GetRentBills">-->
<!--    <div class="row">-->
<!--      <div class="col-lg-6">-->
<!--        <div class="user-data m-b-30">-->
<!--          <h3 class="title-3 m-b-30">-->
<!--            <i class="zmdi zmdi-account-calendar"></i>Chi tiết bài đăng</h3>-->
<!--          <button class="au-btn au-btn-icon au-btn&#45;&#45;brown au-btn&#45;&#45;small">-->
<!--            <router-link to="/ManageCategory/create" class="btn-router">Thêm</router-link>-->
<!--          </button>-->
<!--          <div class="table-responsive table-data">-->
<!--            <table class="table">-->
<!--              <thead>-->
<!--              <tr>-->
<!--                <td>Chi tiết bài đăng</td>-->
<!--                <td>Mã bài dăng</td>-->
<!--                <td>Người đăng</td>-->
<!--                <td>Tiêu đề</td>-->
<!--                <td>Nội dung</td>-->
<!--                <td>Ảnh</td>-->
<!--                <td>Hashtag</td>-->
<!--                <td>Thời gian đăng</td>-->
<!--                <td>Trạng thái</td>-->
<!--              </tr>-->
<!--              </thead>-->

<!--              <tbody>-->
<!--              <tr >-->
<!--                <td>-->
<!--                  <div class="table-data__info">-->
<!--                    <h6>{{ item.id }}</h6>-->
<!--                  </div>-->
<!--                </td>-->

<!--                <td>-->
<!--                  <span>{{ item.name }}</span>-->
<!--                </td>-->
<!--                <td>-->
<!--                    <span>-->
<!--                      <button class="au-btn au-btn-icon au-btn&#45;&#45;brown au-btn&#45;&#45;small" v-on:click="HandleDelete(item.id)">-->
<!--                        Xoá-->
<!--                      </button>-->
<!--                    </span>-->
<!--                </td>-->
<!--              </tr>-->

<!--              </tbody>-->
<!--            </table>-->
<!--          </div>-->
<!--          <br>-->
<!--          <button class="au-btn au-btn-icon au-btn&#45;&#45;brown au-btn&#45;&#45;small">-->
<!--            <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>-->
<!--          </button>-->
<!--          <br><br>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div>-->

<!--  </div>-->
<!--  </SideBar>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";


export default {
  name: "DetailPost",
  components: {Side_Bar},
  data() {
    return {
      post: ''
    }
  },
  created() {
    this.getPostById()
  },
  methods: {
    getPostById() {
      const url = API_MANAGE_POST.DETAIL_POST + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.post = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>