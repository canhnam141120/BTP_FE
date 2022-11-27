<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách thể loại</h3>
            <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
              <router-link to="/ManageCategory/create" class="btn-router">Thêm</router-link>
            </button>
            <div class="table-responsive table-data">
              <table class="table">
                <thead>
                <tr>
                  <td>Mã thể loại</td>
                  <td>Tên thể loại</td>
                  <td></td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of listCategories" :key="item.id">
                  <td>
                    <div class="table-data__info">
                      <h6>{{ item.id }}</h6>
                    </div>
                  </td>
                  <td>
                    <span>{{ item.name }}</span>
                  </td>
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
          </div>
        </div>
        <LoadingDialog v-show="spinner"></LoadingDialog>
      </div>
    </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_CATEGORY} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";

export default {
  name: "GetCategories",
  components: {Side_Bar, LoadingDialog},
  data() {
    return {
      listCategories: '',
      spinner: false,
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_CATEGORY.LIST_CATEGORY, 'GET', {}).then((res) => {
        this.listCategories = res.data.data
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleDelete(id) {
      const url = API_MANAGE_CATEGORY.DELETE_CATEGORY + id
      apiFactory.callApi(url, 'DELETE', {}).then((res) => {
        if (res.data.message === 'DELETE_SUCCESS') {
          alert('Xóa thành công!')
          window.location.reload();
        }
        console.log(res)
      }).catch(() => {
        alert('Xóa không thành công!')
      });
    }
  }
}
</script>

<style>
@import "../../assets/CSS/tableManage.css";
</style>