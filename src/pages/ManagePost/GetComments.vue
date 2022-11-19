<template>
  <Side_Bar>
  <div class="GetRentBills">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách bình luận
          </h3>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã đánh giá</td>
                <td>Mã sách</td>
                <td>Người đánh giá</td>
                <td>Nội dung</td>
                <td>Ngày đánh giá</td>
              </tr>
              </thead>

              <tbody v-for="item of listComments" :key="item.id">
              <tr>

                <td>
                  <div class="table-data__info">
                    <h6>{{item.id}}</h6>
                  </div>
                </td>

                <td>
                  <span>{{item.postId}}</span>
                </td>
                <td>
                  <span>
                    <i>{{item.user.fullname}}</i>
                  </span>
                </td>
                <td>
                  <span>
                    <i>{{item.content}}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{item.createdDate}}
                  </span>
                <td>
                    <span>
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleDelete(item.id)">
                        Xoá
                      </button>
                              </span>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <br>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
          </button>
          <br><br>
        </div>

      </div>
    </div>
  </div>
  </Side_Bar>
<!--  <SideBar>-->
<!--  <div>-->
<!--    <div class="GetComments">-->
<!--      <h1>Danh sách bình luận</h1>-->
<!--      <table border="1px">-->
<!--        <tr>-->
<!--          <td>Mã đánh giá</td>-->
<!--          <td>Mã sách</td>-->
<!--          <td>Người đánh giá</td>-->
<!--          <td>Nội dung</td>-->
<!--          <td>Ngày đánh giá</td>-->
<!--          <td></td>-->
<!--        </tr>-->
<!--        <tr v-for="item of listComments" :key="item.id">-->
<!--          <td>{{item.id}}</td>-->
<!--          <td>{{item.postId}}</td>-->
<!--          <td>{{item.user.fullname}}</td>-->
<!--          <td>{{item.content}}</td>-->
<!--          <td>{{item.createdDate}}</td>-->
<!--          <td><button v-on:click="HandleDelete(item.id)">Xóa</button></td>-->
<!--        </tr>-->
<!--      </table>-->
<!--    </div>-->
<!--    <br>-->
<!--    <button><router-link to="/ManagePost">Quay lại</router-link></button>-->
<!--  </div>-->
<!--  </SideBar>-->
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "GetComments",
  components: {Side_Bar},
  data() {
    return {
      listComments: ''
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      const url = API_MANAGE_POST.COMMENT_OF_POST + this.$route.query.id
      apiFactory.callApi(url, 'GET', {}).then((res) => {
        this.listComments = res.data.data
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      const url = API_MANAGE_POST.DELETE_COMMENT + id
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          this.$router.push({name:"GetComments"}).catch(()=>{});
        }
        console.log(res)
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>