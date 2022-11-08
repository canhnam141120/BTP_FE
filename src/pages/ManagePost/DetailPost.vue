<template>
  <div>
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
          <button><router-link to="/ManagePost">Quay lại</router-link></button>
        </div>
    </div>
  </div>
</template>

<script>
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_POST} from "@/constant/constant-api";

export default {
  name: "DetailPost",
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

