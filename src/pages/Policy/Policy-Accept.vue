<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">CHÍNH SÁCH KIỂM DUYỆT</div>
        <div class="container">
          <div class="content">
            <p>Để hạn chế tối đa số lượng thông tin hiển thị trên nền tảng không chính xác, chính sách kiểm duyệt là quy trình tất yếu để bắt buộc người dùng phải có
            trách nhiệm trong quá trình sử dụng, phải thật thà sử dụng những thông tin thực tế, không giả mạo. Ngoài ra, sẽ có một số trường hợp mặc dù thông tin người
            dùng đăng tải có thể chính xác, nhưng nó vi phạm điều khoản cộng đồng nên không thể dược phê duyệt!</p>
            <span>1. Quy Trình Kiểm Duyệt</span>
            <ul>
              <li>B1: Người dùng chuẩn bị sẵn ảnh, thông tin cần thiết để có thể đăng tải nội dung lên nền tảng</li>
              <li>B2: Sau khi hoàn tất thủ tục nhập liệu, người dùng xác nhận và sẽ được chuyển sang trạng thái phê duyệt</li>
              <li>B3: Trong lúc chờ dợi, Quản trị viên sẽ xem xét thông tin và tính hợp lệ để có thể duyệt hay không</li>
              <li>B4: Với mỗi thông tin được chỉnh sửa, đồng nghĩa với việc bạn sẽ cần phải đợi duyệt lại</li>
            </ul>
            <span>2. Các thể loại sách không thể đăng tải</span>
            <p>Một số thể loại sách cấm đăng tải lên nền tảng như: Sách giả, sách xuyên tạc, các đầu sách không được lưu hành trên thị trường. Sách, báo, tạp chí 18+,...
            </p>
            <span>3. Các bài dăng không thể đăng tải</span>
            <p>Chỉ được phép đăng các bài đăng liên quan về sách, các đầu sách không nằm trong danh mục sách bị cấm. Sử dụng những từ ngữ dựa theo chuẩn thuần phong đạo đức.
            Không xuyên tạc, đề cập một cách tiêu cực đến cụ thể một tổ chức nào hết...</p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";

export default {
  name: "Policy-Accept",
  components: {Layout}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

strong{
  color: #9d6b54;
}

main {
  background: #F0F0F0;
}

.body {
  background: #F0F0F0;
}

.body .container {
  background: #F0F0F0;
  max-width: 1230px;
  border-radius: 10px;
  margin: 10px auto 10px auto;
  display: block;
  padding: 0px 0px;
}

.body .title {
  max-width: 1230px;
  border-radius: 10px;
  background-color: #F0ECE4;
  font-weight: bold;
  color: #9D6B54;
  font-size: 2rem;
  text-align: center;
  margin: 10px auto 10px auto;
  border: 1px solid #9D6B54;
}

.subtitle{
  font-weight: 600;
  color: #9D6B54;
  text-align: center;
  font-size: 16px;
}

.content{
  color: grey;
  padding: 15px;
  background: #F0ECE4;
  max-width: 1230px;
  height: auto;
  border-radius: 10px;
  border: 1px solid #9D6B54;
  font-size: 14px;
}
.content span{
  font-weight: bold;
  color: #9D6B54;
}
</style>