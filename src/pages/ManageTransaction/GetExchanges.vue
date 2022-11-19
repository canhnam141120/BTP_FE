<template>
  <Side_Bar>
    <div class="GetExchanges">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Danh sách tất cả giao dịch đổi</h3>
            &nbsp;<button class="au-btn au-btn-icon au-btn--brown au-btn--small" >
            <router-link to="/ManageTransaction/rent" class="btn-router">Xem giao dịch thuê</router-link>
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

                <tbody v-for="item of listExchanges" :key="item.id">
                <tr>
                  <td>
                    <div class="table-data__info">
                      <h6>{{ item.id }}</h6>
                    </div>
                  </td>

                  <td>
                    <span>{{ item.userId1 }}</span>
                  </td>
                  <td>
                    <span>
                      <i>{{ item.userId1Navigation.fullname }}</i>
                    </span>
                  </td>
                  <td>
                    <span>
                      {{ item.userId2 }}
                    </span>
                  </td>
                  <td>
                    <span>{{ item.userId2Navigation.fullname }}</span>
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
                      <button class="au-btn au-btn-icon au-btn--brown au-btn--small" :to="{ name: 'DetailExchange', query: { id:item.id }}">
                        Chi tiết
                      </button>
                    </span>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
            <br>
            &nbsp;<span>
            <button class="au-btn au-btn-icon au-btn--brown au-btn--small">
              <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
            </button>
            </span>
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
  name: "GetExchanges",
  components: {Side_Bar},
  data() {
    return {
      listExchanges: ''
    }
  },
  created() {
    this.getExchanges()
  },
  methods: {
    getExchanges() {
      apiFactory.callApi(API_MANAGE_TRANSACTION.LIST_EXCHANGE, 'GET', {}).then((res) => {
        this.listExchanges = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>