<template>
<Side_Bar>
    <div class="GetAdmins">
      <div class="row">
        <div class="col-lg-6">
          <div class="user-data m-b-30">
            <h3 class="title-3 m-b-30">
              <i class="zmdi zmdi-account-calendar"></i>Chi tiết sách {{book.title}}</h3>
            <div class="filters m-b-45">
              <br>
              <input class="au-input au-input--xl" type="text"
                     placeholder="Nhập email hoặc số điện thoại" v-model="search" required/>
              <button class="au-btn au-btn-icon au-btn--brown au-btn--small" v-on:click="HandleSearch">
                Tìm kiếm
              </button>
            </div>
            <div>
              <div class="table-responsive table-data">
                <b-table>
                  <thead>
                  <tr>
                    <td>Mã sách:</td>
                    <td>Người đăng:</td>
                    <td>Tên sách:</td>
                    <td>Ảnh:</td>
                    <td>Thể loại:</td>
                    <td>Nội dung:</td>
                    <td>Tác giả:</td>
                    <td>Nhà xuất bản:</td>
                    <td>Năm xuất bản:</td>
                    <td>Ngôn ngữ:</td>
                    <td>Số trang:</td>
                    <td>Khối lượng:</td>
                    <td>Giá bìa:</td>
                    <td>Giá bìa:</td>
                    <td>Giá cọc:</td>
                    <td>Tình trạng:</td>
                    <td>Ngày đăng:</td>
                    <td>Cho phép đổi:</td>
                    <td>Cho phép thuê:</td>
                    <td>Phí thuê:</td>
                    <td>Số ngày:</td>
                    <td>Trạng thái:</td>
                  </tr>
                  </thead>

                  <tbody v-for="bill of bill" :key="bill.id">
                  <tr>
                    <td>
                      <div class="table-data__info">
                        <h6>{{bill.id}}</h6>
                      </div>
                    </td>

                    <td>
                      <span>{{bill.exchangeId}}</span>
                    </td>
                    <td>
                      <span><i>{{bill.user.fullname}}</i></span>
                    </td>
                    <td>
                      <span>{{bill.totalBook}}</span>
                    </td>
                    <td>
                      <span class="role admin">{{bill.totalAmount}}</span>
                    </td>
                    <td>
                      <span>{{bill.depositFee}}</span>
                    </td>
                    <td>
                      <span class="role admin">{{bill.rentFee}}</span>
                    </td>
                    <td>
                      <span><i>{{bill.isPaid}}</i></span>
                    </td>
                    <td>
                      <span><i>{{bill.paidDate}}</i></span>
                    </td>
                    <td>
                      <span><i>{{bill.payments}}</i></span>
                    </td>
                  </tr>
                  </tbody>
                </b-table>
              </div>
            </div>
            <br>
            <button class="au-btn au-btn-icon au-btn--green au-btn--small">
              <router-link to="/ManageIndex" class="btn-router">Quay lại</router-link>
            </button>
            <br><br>
          </div>
        </div>
      </div>
    </div>
</Side_Bar>

<!--  <Side_Bar>-->
<!--  <div>-->
<!--    <div class="DetailBook">-->
<!--      <h1>Chi tiết sách {{book.title}}</h1>-->
<!--        <div>-->
<!--          <div><label>Mã sách: </label><span>{{book.id}}</span></div>-->
<!--          <div><label>Người đăng: </label><span>{{book.user.fullname}}</span></div>-->
<!--          <div><label>Tên sách: </label><span>{{book.title}}</span></div>-->
<!--          <div><label>Ảnh: </label><img v-bind:src="book.image" height="90px" width="65px"></div>-->
<!--          <div><label>Thể loại: </label><span>{{book.category.name}}</span></div>-->
<!--          <div><label>Nội dung: </label><span>{{book.description}}</span></div>-->
<!--          <div><label>Tác giả: </label><span>{{book.author}}</span></div>-->
<!--          <div><label>Nhà xuất bản: </label><span>{{book.publisher}}</span></div>-->
<!--          <div><label>Năm xuất bản: </label><span>{{book.year}}</span></div>-->
<!--          <div><label>Ngôn ngữ: </label><span>{{book.language}}</span></div>-->
<!--          <div><label>Số trang: </label><span>{{book.numberOfPages}}</span></div>-->
<!--          <div><label>Khối lượng: </label><span>{{book.weight}}</span></div>-->
<!--          <div><label>Giá bìa: </label><span>{{book.coverPrice}}</span></div>-->
<!--          <div><label>Giá cọc: </label><span>{{book.depositPrice}}</span></div>-->
<!--          <div><label>Tình trạng: </label><span>{{book.statusBook}}</span></div>-->
<!--          <div><label>Ngày đăng: </label><span>{{book.postedDate}}</span></div>-->
<!--          <div><label>Cho phép đổi: </label><span>{{book.isExchange}}</span></div>-->
<!--          <div><label>Cho phép thuê: </label><span>{{book.isRent}}</span></div>-->
<!--          <div><label>Phí thuê: </label><span>{{book.rentFee}}</span></div>-->
<!--          <div><label>Số ngày: </label><span>{{book.numberOfDays}}</span></div>-->
<!--          <div><label>Trạng thái:  </label><span>{{book.status}}</span></div>-->
<!--          <br>-->
<!--        </div>-->
<!--    </div>-->
<!--    <button><router-link to="/ManageBook">Quay lại</router-link></button>-->
<!--  </div>-->
<!--  </Side_Bar>-->

</template>

<script>
import apiFactory from "@/config/apiFactory";
import { API_MANAGE_BOOK} from "@/constant/constant-api";
import Side_Bar from "../../components/Side_Bar";


export default {
  name: "DetailBook",
  components: {Side_Bar},
  data() {
    return {
      book: ''
    }
  },
  created() {
    this.getBookById()
  },
  methods: {
    getBookById() {
      const url = API_MANAGE_BOOK.DETAIL_BOOK + this.$route.query.id
      apiFactory.callApi(url,'GET',{}).then((res)=>{
        this.book = res.data.data
      }).catch(() => {
      });
    }
  }
}
</script>

<style >
@import "../../assets/CSS/tableManage.css";
</style>