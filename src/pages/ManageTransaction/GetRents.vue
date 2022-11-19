<template>
<Side_Bar>
  <div class="GetExchanges">
    <div class="row">
      <div class="col-lg-6">
        <div class="user-data m-b-30">
          <h3 class="title-3 m-b-30">
            <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả giao dịch thuê</h3>
                      <div class="filters m-b-45">
                        <br>
                        <form class="form-header" action="" method="POST">
                          <input class="au-input au-input--xl" type="text"
                                 placeholder="Nhập giao dịch" v-model="search" required/>
                          <button class="au-btn--submit" v-on:click="HandleSearch">
                            Tìm kiếm
                          </button>
                        </form>
                      </div>
          <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
            <router-link to="/ManageTransaction/exchange" class="btn-router">Xem giao dịch đổi</router-link>
          </button>
          <div class="table-responsive table-data">
            <table class="table">
              <thead>
              <tr>
                <td>Mã giao dịch</td>
                <td>Mã khách hàng 1</td>
                <td>Tên khách hàng 1</td>
                <td>Mã khách hàng 2</td>
                <td>Tên khách hàng 2</td>
                <td>Ngày tạo</td>
                <td>Trạng thái hoạt động</td>
              </tr>
              </thead>
              <tbody v-for="item of listRents" :key="item.id">
              <tr>
                <td>
                  <div class="table-data__info">
                    <h6>{{ item.id }}</h6>
                  </div>
                </td>

                <td>
                  <span>{{ item.ownerId }}</span>
                </td>
                <td>
                  <span>
                    <i>{{ item.owner.fullname }}</i>
                  </span>
                </td>
                <td>
                  <span>
                    {{ item.renterId }}
                  </span>
                </td>
                <td>
                  <span>{{ item.renter.fullname }}</span>
                </td>
                <td>
                  <span>
                    {{ item.date }}
                  </span>
                </td>
                <td>
                  <span class="role admin">
                    <i>{{ item.status }}</i>
                  </span>
                </td>

                <td>
                    <span>
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
                        <router-link :to="{ name: 'RentBill', query: { id:item.id }}" class="btn-router">Hóa đơn</router-link>
                      </button>
                              </span>
                </td>
                <td>
                  <span>
                    <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
                        <router-link :to="{ name: 'DetailRent', query: { id:item.id }}" class="btn-router">
                            Chi tiết
                        </router-link>
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
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_TRANSACTION} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";

export default {
  name: "GetRents",
  components: {Side_Bar},
  data() {
    return {
      listRents: ''
    }
  },
  created() {
    this.getRents()
  },
  methods: {
    getRents() {
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_RENT, 'GET', {}).then((res) => {
        this.listRents = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>