<template>
  <Side_Bar>
    <div class="ml">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <div class="titleMB">QUẢN LÝ NGƯỜI DÙNG</div>
            <hr>
            <div class="search-user">
              <select class="selectCss"  v-model="filter" @change="onchange($event)">
                <option v-bind:value="item" v-for="item of listFilter" :key="item">{{item}}</option>
              </select>
              <div>
                <input type="text" v-model="search" placeholder="Nhập email hoặc SĐT">
                <button v-on:click="HandleSearch">Tìm</button>
              </div>
            </div>
              <div class="table-responsive table-data">
                <table class="table">
                  <thead>
                  <tr>
                    <td>Mã</td>
                    <td>Ảnh đại diện</td>
                    <td>Tên đầy đủ</td>
                    <td>Email</td>
                    <td>Số điện thoại</td>
                    <td>Địa chỉ</td>
                    <td>Số người thích</td>
                    <td>Số lần giao dịch</td>
                    <td>Trạng thái hoạt động</td>
                    <td>Kích hoạt/Khóa</td>
                    <td>Ủy quyền</td>
                  </tr>
                  </thead>

                  <tbody v-for="item of listUsers" :key="item.id">
                  <tr>
                    <td>{{item.id}}</td>
                    <td><img v-bind:src="item.avatar" style="height: 60px; width: 60px; object-fit: scale-down"></td>
                    <td>{{ item.fullname }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.addressMain }}</td>
                    <td>{{ item.likeNumber }}</td>
                    <td>{{ item.numberOfTransaction }}</td>
                    <td style="padding-left: 50px">
                      <Icon v-if="item.isActive" icon="fontisto:radio-btn-active" style="color: forestgreen; font-size: 30px;"/>
                      <Icon v-else icon="pajamas:status-active" style="color: #ca0303; font-size: 30px;"/>
                    </td>
                    <td style="padding-left: 35px">
                      <button v-if="item.isActive" class="tableBtnAction" v-on:click="HandleBan(item.id)"><Icon icon="material-symbols:lock"/></button>
                      <button v-else class="tableBtnAction" v-on:click="HandleActive(item.id)"><Icon icon="material-symbols:lock-open-rounded"/></button>
                    </td>
                    <td style="padding-left: 18px"><button class="tableBtnAction" v-on:click="HandleAuthority(item.id)"><Icon icon="game-icons:armor-upgrade"/></button></td>
                  </tr>
                  </tbody>
                </table>
                <div class="paging-user">
                  <b-pagination v-if="filter==''" class="page-number" @input="getUsersAll" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Tất Cả'" class="page-number" @input="getUsersAll" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Đang Hoạt Động'" class="page-number" @input="getUsersActive" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
                    <template #first-text><span style="color: #9D6B54;">&lsaquo;&lsaquo;</span></template>
                    <template #prev-text><span style="color: #9D6B54;">&lsaquo;</span></template>
                    <template #next-text><span style="color: #9D6B54;">&rsaquo;</span></template>
                    <template #last-text><span style="color: #9D6B54;">&rsaquo;&rsaquo;</span></template>
                    <template #page="{ page, active }">
                      <b v-if="active" style="color: white;">{{ page }} </b>
                      <b v-else style="color: #9D6B54;">{{ page }}</b>
                    </template>
                  </b-pagination>
                  <b-pagination v-if="filter=='Đang Khóa'" class="page-number" @input="getUsersBan" v-model="page" :total-rows="totalUsers"
                                :per-page="10">
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
        <LoadingDialog v-show="spinner"></LoadingDialog>
        </div>
      </div>
  </Side_Bar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_USER} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";
import LoadingDialog from "@/components/LoadingDialog";
import {Icon} from '@iconify/vue2';

export default {
  name: "GetUsers",
  components: {Side_Bar, LoadingDialog, Icon},
  data() {
    return {
      listUsers: '',
      totalUsers: '',
      search: '',
      isSearch: false,
      spinner: false,
      page: '',
      filter: 'Tất Cả',
      listFilter: ['Tất Cả', 'Đang Hoạt Động', 'Đang Khóa']
    }
  },
  created() {
    this.isSearch = false
    this.getUsersAll(1)
  },
  methods: {
    onchange(e){
      this.isSearch = false
      this.search = ''
      if(e.target.value === 'Tất Cả'){
        this.getUsersAll(1)
      }
      if(e.target.value=== 'Đang Hoạt Động'){
        this.getUsersActive(1)
      }
      if(e.target.value === 'Đang Khóa'){
        this.getUsersBan(1)
      }
    },
    getUsersAll(pageNumber) {
      this.spinner = true
      if(this.search){
        apiFactory.callApi(API_MANAGE_USER.SEARCH_USER + pageNumber, 'POST', {
          search: this.search
        }).then((res) => {
          this.listUsers = res.data.data
          this.totalUsers = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }
      else{
        apiFactory.callApi(API_MANAGE_USER.LIST_USER + pageNumber, 'GET', {}).then((res) => {
          this.listUsers = res.data.data
          this.totalUsers = res.data.numberOfRecords
          this.page = pageNumber
          this.spinner = false
        }).catch(() => {
        });
      }
    },
    getUsersBan(pageNumber) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.LIST_BAN_USER + pageNumber, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
        this.totalUsers = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    getUsersActive(pageNumber) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.LIST_ACTIVE_USER + pageNumber, 'GET', {}).then((res) => {
        this.listUsers = res.data.data
        this.totalUsers = res.data.numberOfRecords
        this.page = pageNumber
        this.spinner = false
      }).catch(() => {
      });
    },
    HandleBan(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.BAN_USER + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }
      }).catch(() => {
        alert('Khóa tài khoản không thành công!')
      });
    },
    HandleActive(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.ACTIVE_USER + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }
      }).catch(() => {
        alert('Kích hoạt tài khoản không thành công!')
      });
    },
    HandleAuthority(id) {
      this.spinner = true
      apiFactory.callApi(API_MANAGE_USER.AUTHORITY_USER + id, 'PUT', {}).then((res) => {
        if (res.data.message === 'SUCCESS') {
          if(this.filter === ''){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Tất Cả'){
            this.getUsersAll(this.page)
          }
          if(this.filter === 'Đang Hoạt Động'){
            this.getUsersActive(this.page)
          }
          if(this.filter  === 'Đang Khóa'){
            this.getUsersBan(this.page)
          }
        }
      }).catch(() => {
        alert('Ủy quyền không thành công!')
      });
    },
    HandleSearch() {
      if (!this.search) {
        this.filter= 'Tất Cả'
        this.isSearch = false;
      } else {
        this.filter= ''
        this.isSearch = true;
      }
      return this.getUsersAll(1)
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";

.paging-user {
  margin-top: 10px;
}

.paging-user ul {
  justify-content: right;
  margin-right: 15px;
}

.search-user {
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
  width: 180px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  font-weight: bold;
  background: #9D6B54;
}

.search-user input {
  border-radius: 7px;
  border: 1px solid grey;
  height: 45px;
  width: 400px;
  padding-left: 15px;
  color: #9D6B54;
}

.search-user button {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 45px;
  width: 80px;
  margin-left: 10px;
}

.search-user button:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}
</style>