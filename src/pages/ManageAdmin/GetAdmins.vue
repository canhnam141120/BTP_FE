<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
              <div class="titleMB">QUẢN LÝ QUẢN TRỊ VIÊN</div>
              <hr>
            <div class="search-admin">
                <input type="text" v-model="search" placeholder="Nhập tên hoặc số điện thoại">
                <button v-on:click="HandleSearch">Tìm</button>
            </div>
            <div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
                    <td>Mã QTV</td>
                    <td>Ảnh Đại Diện</td>
                    <td>Email</td>
                    <td>Họ và Tên</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Trạng thái hoạt động</td>
                    <td>Hủy Quyền</td>
                  </tr>
                  </thead>
                  <tbody v-for="item of listAdmins" :key="item.id">
                  <tr>
                    <td>{{ item.id }}</td>
                    <td><img v-bind:src="item.avatar" style="height: 70px; width: 70px; object-fit: scale-down"></td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td style="padding-left: 50px">
                      <Icon v-if="item.isActive" icon="fontisto:radio-btn-active" style="color: forestgreen; font-size: 30px;"/>
                      <Icon v-else icon="pajamas:status-active" style="color: #ca0303; font-size: 30px;"/>
                    </td>
                    <td style="padding-left: 23px"><button class="tableBtnAction" v-on:click="HandleAuthority(item.id)"><Icon icon="game-icons:armor-downgrade"/></button></td>
                  </tr>
                  </tbody>
                </table>
              </div>
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
import {API_MANAGE_ADMIN} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import {Icon} from '@iconify/vue2';

export default {
  name: "GetAdmins",
  components: {Side_Bar, LoadingDialog, Icon},
  data() {
    return {
      listAdmins: '',
      search: '',
      spinner: false,
      isSearch: false,
    }
  },
  created() {
    this.getAdmins()
  },
  methods: {
    getAdmins() {
      this.spinner = true
      if(this.search){
        apiFactory.callApi(API_MANAGE_ADMIN.SEARCH_ADMIN, 'POST', {
          search: this.search
        }).then((res) => {
          this.listAdmins = res.data.data
          this.spinner = false
        }).catch(() => {
        });
      }else{
        apiFactory.callApi(API_MANAGE_ADMIN.LIST_ADMIN, 'GET', {}).then((res) => {
          this.listAdmins = res.data.data
          this.spinner = false
        }).catch(() => {
        });
      }
    },
    HandleAuthority(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_ADMIN.REMOVE_ADMIN + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          this.getAdmins()
        }
      }).catch(() => {
        alert('Hủy quyền không thành công!')
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.isSearch = false;
      } else {
        this.isSearch = true;
      }
      return this.getAdmins()
    }
  }
};
</script>

<style>
@import "../../assets/CSS/tableManage.css";
.titleMB{
  font-weight: bold;
  text-align: center;
  color:  #9D6B54;
  font-size: 30px;
}

.search-admin {
  text-align: right;
  margin: 20px 0px 10px 20px;
  width: 95%;
}

.search-admin input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-admin button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-admin button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>