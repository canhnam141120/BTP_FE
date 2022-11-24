<template>
  <Layout>
    <main style="flex-grow: 1">
      <CreateBook :show="showDialog"
                      :cancel="cancel"
                      :confirm="save"
                      v-if="showDialog" class="modal">
        <div class="dialogBook">
          <div class="gridMB">
            <div class="itemMB" >
            </div>
          </div>
        </div>
      </CreateBook>
      <div class="MB">
        <div class="containerMB">
          <div class="left-contentMB">
            <SideBar_Personal></SideBar_Personal>
          </div>
          <div class="right-contentMB">
            <div class="titleMB">Tủ sách của tôi</div>
            <div class="searchMB">
              <input class="inputMB" type="text" v-model="search" placeholder="Nhập tên sản phẩm">
              <button class="btnMB">Tìm</button>
              <button class="create-book" v-on:click="openDialog">
                <Icon icon="material-symbols:add-circle-outline-rounded" />
                <label>Đăng sách</label>
              </button>
            </div>

            <hr>
            <b-skeleton-wrapper :loading="loading">
              <template #loading>
                <div class="gridMB">
                  <div class="itemMB" v-for='i in 6' :key="i">
                    <b-card no-body img-top style="height: 450px">
                      <b-skeleton-img card-img="top" aspect="3:1" height="290px"></b-skeleton-img>
                      <b-card style="height: 170px">
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                        <b-skeleton animation="wave" width="85%"></b-skeleton>
                        <b-skeleton animation="wave" width="55%"></b-skeleton>
                        <b-skeleton animation="wave" width="70%"></b-skeleton>
                      </b-card>
                    </b-card>
                  </div>
                </div>
              </template>
              <div class="gridMB">
                <div class="itemMB" v-for="item of listBook" :key="item.id">
                  <router-link :to="{ name: 'BookDetail', query: { id:item.id }}">
                    <img v-bind:src="item.image">
                  </router-link>
                  <div class="infoMB">
                    <div class="book-titleMB">{{ item.title }}</div>
                    <div class="book-statusMB">Thể loại: {{ item.categoryId}}</div>
                    <label class="book-statusMB">Giá bìa: <strong>{{ item.coverPrice.toLocaleString() }}đ</strong></label>
                    <label class="book-statusMB">{{ item.statusBook }}</label>
                  </div>
                  <div class="action">
                    <router-link class="active" :to="{ name: 'ViewRequestBook', query: { id:item.id }}">Xem yêu cầu</router-link>
                  </div>
                </div>
              </div>
            </b-skeleton-wrapper>
            <div class="pagingMB">
              <b-pagination class="page-numberMB" @input="getMyBooks" v-model="page" :total-rows="totalBook" :per-page="6">
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
    </main>
  </Layout>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_PERSONAL} from "@/constant/constant-api";
import Layout from "@/components/Layout";
import SideBar_Personal from "../../components/SideBar_Personal";
import VueJwtDecode from "vue-jwt-decode";
import {Icon} from '@iconify/vue2';
import CreateBook from "@/components/CreateBook";
export default {
  name: "MyBooks",
  components: {SideBar_Personal, Layout, Icon, CreateBook},
  data() {
    return {
      listBook: '',
      totalBook: '',
      loading: false,
      userByToken: '',
      userId: '',
      showDialog: false,
    }
  },
  created() {
    this.getMyBooks(1)
  },
  methods: {
    getMyBooks(pageNumber) {
        this.loading = true;
        let token = this.$cookies.get('token');
        this.userByToken= VueJwtDecode.decode(token, 'utf-8');
        const url = API_PERSONAL.LIST_BOOK + pageNumber
        apiFactory.callApi(url, 'POST', {
          userId: this.userByToken.UserId
        }).then((res) => {
          this.listBook = res.data.data
          this.totalBook = res.data.numberOfRecords
          this.loading = false;
        }).catch(() => {
        });
    },
    openDialog(){
      this.showDialog = true
    },
    cancel(){
      this.showDialog = false
    },
    save(){
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

main {
  background: #F0F0F0;
}

strong {
  color: #9D6B54;
}
.dialogBook{
  height: 75%;
}

.dialogBook .gridMB {
  display: flex;
  grid-template-columns: 25% 25% 25% 25%;
  margin-left: 10px;
  margin-right: 20px;
  overflow: auto;
}

.dialogBook .gridMB .itemMB {
  display: block;
  border-radius: 10px;
  background: white;
  width: 220px;
  height: 450px;
  margin: 10px 0px 10px 20px;
}

.dialogBook .gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.dialogBook .gridMB .itemMB img {
  height: 290px;
  width: 220px;
  border-radius: 10px;
}

.dialogBook .gridMB .infoMB {
  height: 120px;
  padding: 5px;
}

.dialogBook .gridMB .infoMB img {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.dialogBook .gridMB .infoMB label {
  margin-left: 5px;
}

.dialogBook .gridMB .infoMB .book-titleMB{
  margin-left: 5px;
  margin-right: 5px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dialogBook .gridMB .infoMB .book-categoryMB{
  margin-left: 5px;
  margin-right: 10px;
}

.dialogBook .gridMB .infoMB .book-statusMB {
  margin-left: 5px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.MB {
  background: #F0F0F0;
}

.MB .containerMB {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 5px auto 30px auto;
  display: flex;
  justify-content: space-between;
}

.left-contentMB {
  width: 28%;
  background: #F0ECE4;
  border-radius: 10px;
  display: flex;
  margin-top: 30px;
  padding-bottom: 100px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}
.right-contentMB{
  width: 71%;
  background: #F0ECE4;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
  display: block;
}

.right-contentMB .searchMB {
  margin: 10px 0px 10px 20px;
  width: 100%;
  display: flex;
}

.right-contentMB .titleMB{
  text-transform: uppercase;
  color: #9D6B54;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 5px;
}

.right-contentMB .searchMB .inputMB {
  border-radius: 7px;
  border: 1px solid grey;
  height: 40px;
  width: 300px;
  padding-left: 15px;
  color: #9D6B54;
}

.right-contentMB .searchMB .btnMB {
  border-radius: 7px;
  background-color: #9D6B54;
  color: white;
  font-weight: bold;
  border: 1px solid grey;
  height: 40px;
  width: 80px;
  margin-left: 10px;
}

.right-contentMB .searchMB .btnMB:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.right-contentMB .gridMB {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 8px;
}

.right-contentMB .gridMB .itemMB {
  border-radius: 10px;
  background: white;
  width: 260px;
  height: 460px;
  margin: 10px 0px 10px 20px;
}

.right-contentMB .gridMB .itemMB:hover {
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 1px rgba(0, 0, 0, 0.19);
}

.right-contentMB .gridMB .itemMB img {
  margin-left: 20px;
  height: 290px;
  width: 220px;
}

.right-contentMB .gridMB .infoMB {
  height: 120px;
  padding: 5px;
}

.right-contentMB .gridMB .infoMB img {
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.right-contentMB .gridMB .infoMB label {
  margin-left: 15px;
}

.right-contentMB .gridMB .infoMB .book-titleMB{
  color: #9D6B54;
  margin-left: 15px;
  margin-right: 10px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.right-contentMB .gridMB .infoMB .book-categoryMB{
  margin-left: 15px;
  margin-right: 10px;
}

.right-contentMB .gridMB .infoMB .book-statusMB {
  margin-left: 15px;
  margin-right: 10px;
  font-size: 0.8rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.right-contentMB  .gridMB .action {
  display: flex;
  justify-content: center;
}

.right-contentMB  .gridMB .action .active {
  border-radius: 5px;
  background-color: #9D6B54;
  color: white;
  border: 1px solid grey;
  height: 40px;
  width: 120px;
  text-decoration: none;
  padding-left: 15px;
  padding-top: 5px;
}

.right-contentMB .gridMB .action .active:hover {
  border-color: #9D6B54;
  background-color: white;
  color: #9D6B54;
}

.right-contentMB .pagingMB {
  margin-top: 10px;
}

.right-contentMB .pagingMB ul {
  justify-content: right;
  margin-right: 15px;
}
.create-book{
border: none;
  border: none;
  border-radius: 8px;
  background: #DFD5CB;
  width: 118px;
  height: 45px;
  margin-left: 35%;
  color: #9D6B54;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}
.create-book label{
  margin-left: 5px;
}
.create-book:hover{
  background: #9D6B54;
  color: white;

}
</style>