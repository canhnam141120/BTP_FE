<template>
  <SideBar>
  <div>
    <div class="DetailBook">
      <h1>Chi tiết sách {{book.title}}</h1>
        <div>
          <div><label>Mã sách: </label><span>{{book.id}}</span></div>
          <div><label>Người đăng: </label><span>{{book.user.fullname}}</span></div>
          <div><label>Tên sách: </label><span>{{book.title}}</span></div>
          <div><label>Ảnh: </label><img v-bind:src="book.image" height="90px" width="65px"></div>
          <div><label>Thể loại: </label><span>{{book.category.name}}</span></div>
          <div><label>Nội dung: </label><span>{{book.description}}</span></div>
          <div><label>Tác giả: </label><span>{{book.author}}</span></div>
          <div><label>Nhà xuất bản: </label><span>{{book.publisher}}</span></div>
          <div><label>Năm xuất bản: </label><span>{{book.year}}</span></div>
          <div><label>Ngôn ngữ: </label><span>{{book.language}}</span></div>
          <div><label>Số trang: </label><span>{{book.numberOfPages}}</span></div>
          <div><label>Khối lượng: </label><span>{{book.weight}}</span></div>
          <div><label>Giá bìa: </label><span>{{book.coverPrice}}</span></div>
          <div><label>Giá cọc: </label><span>{{book.depositPrice}}</span></div>
          <div><label>Tình trạng: </label><span>{{book.statusBook}}</span></div>
          <div><label>Ngày đăng: </label><span>{{book.postedDate}}</span></div>
          <div><label>Cho phép đổi: </label><span>{{book.isExchange}}</span></div>
          <div><label>Cho phép thuê: </label><span>{{book.isRent}}</span></div>
          <div><label>Phí thuê: </label><span>{{book.rentFee}}</span></div>
          <div><label>Số ngày: </label><span>{{book.numberOfDays}}</span></div>
          <div><label>Trạng thái:  </label><span>{{book.status}}</span></div>
          <br>
        </div>
    </div>
    <button><router-link to="/ManageBook">Quay lại</router-link></button>
  </div>
  </SideBar>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import { API_MANAGE_BOOK} from "@/constant/constant-api";
import SideBar from "../../components/SideBar";

export default {
  name: "DetailBook",
  components: {SideBar},
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
