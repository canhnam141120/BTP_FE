<template>
  <Layout>
    <main style="flex-grow: 1;">
      <div class="body">
        <div class="title">CHÍNH SÁCH VẬN CHUYỂN VÀ DỊCH VỤ</div>
        <div class="container">
          <div class="content">
            <div style="text-align: center;"><strong>Áp dụng cho toàn bộ giao dịch của Quý Khách tại Trạm Sách</strong></div>
            <span>1. Chính Sách Vận Chuyển</span>
            <p><strong>Trạm Sách</strong> cung cấp dịch vụ vận chuyển trong phạm vi địa bàn nội thành TP Hà Nội. Nhận, gửi, thu hồi, hoàn trả sách đến tận nơi đến địa chỉ cung cấp của Quý khách.
              Thời gian giao hàng dự kiến phụ thuộc vào giai đoạn của giao dịch và địa chỉ nhận hàng của Quý khách.</p>
            <span>2. Bảng Giá Phí Vận Chuyển (dựa theo tổng khối lượng sách)</span>
            <ul>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'S1' && item.isActive">Dưới 1kg: {{item.price.toLocaleString()}}đ</li></div>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'S13' && item.isActive">Từ 1kg đến 3kg: {{item.price.toLocaleString()}}đ</li></div>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'S35' && item.isActive">Từ 3kg đến 5kg: {{item.price.toLocaleString()}}đ</li></div>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'S5' && item.isActive">Trên 5kg: {{item.price.toLocaleString()}}đ</li></div>
            </ul>
            <span>3. Bảng Giá Phí Dịch Vụ (dựa vào số lượng sách)</span>
            <ul>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'B1' && item.isActive">Với 1 cuốn: {{item.price.toLocaleString()}}đ</li></div>
              <div v-for="item of listFees" :key="item.id"><li v-if="item.code === 'BM' && item.isActive">Với mỗi cuốn thêm: {{item.price.toLocaleString()}}đ</li></div>
            </ul>
            <span>4. Một Số Lưu Ý Khi Nhận Hàng</span>
            <ul>
              <li>Trước khi nhận, gửi, thu hồi, hoàn trả sách cho Quý khách, nhân viên vận chuyển của <strong>Trạm Sách</strong> sẽ liên hệ qua số điện thoại của Quý khách trước khoảng 3 đến 5 phút để xác nhận làm việc.</li>
              <li>Nếu Quý khách không thể có mặt trong mỗi khâu giao dịch, <strong>Trạm Sách</strong> sẽ cố gắng liên lạc lại thêm ít nhất 1 lần nữa để sắp xếp thời gian làm việc, Quý khách vui lòng để ý điện thoại để liên hệ được với nhân viên vận chuyển.</li>
              <li>Nếu qua 2 lần liên hệ, <strong>Trạm Sách</strong> vẫn không thể liên lạc được với Quý khách để thực hiện giao dịch, <strong>Trạm Sách</strong> sẽ thông báo cho Quý khách về việc hủy giao dịch.
                Quý khách sẽ được nhận lại tiền vào tài khoản trong vòng 2 - 3 ngày làm việc, phụ thuộc vào tiến độ xử lý của nhân viên <strong>Trạm Sách</strong> và ngân hàng.
                Quý khách sẽ chỉ được nhận lại số tiền ở mục đặt cọc nguyên nhân phát sinh từ việc giao hàng nhưng Quý khách không gặp mặt.</li>
              <li>Trong trường hợp Quý khách không có nhu cầu tiếp tục giao dịch, Quý khách có thể hủy giao dịch trước khi giao dịch được bắt đầu.
                Nếu giao dịch đã được bắt đầu nhưng Quý khách vẫn có nhu cầu hủy giao dịch, Quý khách vui lòng liên hệ Hotline CSKH: 0961284654 để thông báo về việc này.
                Quý khách sẽ chỉ nhận được lại số tiền ở mục đặt cọc nguyên nhân phát sinh từ việc hủy giao dịch giữa chừng.
              </li>
              <li>Nếu các tình trạng trên xảy ra liên tục 3 lần đối với Quý khách trong một khoảng thời gian ngắn. <strong>Trạm Sách</strong> sẽ cảnh báo về nguy cơ bị khóa tài khoản của bạn, hy vọng Quý khách
              hợp tác làm việc với <strong>Trạm Sách</strong> để các giao dịch được diễn ra một cách thuận lợi</li>
              <li>Quý khách và nhân viên vận chuyển của <strong>Trạm Sách</strong> sẽ cùng nhau kiểm tra kỹ
                chất lượng sách trước khi nhận hàng và cùng nhau thỏa thuận rồi ký vào phiếu vận đơn giao dịch ở mỗi khâu giao dịch để đảm bảo sự thống nhất thông tin giữa 3 bên.
                </li>
              <li><strong>Trạm Sách</strong> sẽ thông báo ngay đến Quý khách nếu có sự chậm trễ về thời gian giao hàng. Trong phạm vi pháp luật cho phép, chúng tôi sẽ không chịu trách nhiệm cho bất cứ tổn thất nào, các khoản nợ, thiệt hại hoặc chi phí phát sinh từ việc giao hàng trễ.</li>
              <li>Mọi thông tin về việc thay đổi hay hủy giao dịch, đề nghị Quý khách thông báo sớm để <strong>Trạm Sách</strong> có thể điều chỉnh lại giao dịch.
                Quý khách có thể liên hệ với chúng tôi qua số điện thoại Hotline: <strong>0961284654</strong> hoặc qua địa chỉ email <strong>tramsachhn@gmail.com</strong>.</li>
            </ul>
            <span>5. Tra Cứu Thông Tin Của Giao Dịch</span>
            <p>Quý khách hoàn toàn có thể nhận biết và theo dõi các cập nhật mới về giao dịch đang thực hiện thông qua danh sách <strong>Thông Báo</strong>(biểu tượng hình chuông ở phía trên góc phải màn hình) và ở danh mục
              <strong>Giao Dịch</strong> thuộc phần <strong>Quản Lý Cá Nhân</strong></p>
            <br>
            <p>Chính sách sẽ được áp dụng và có hiệu lực từ ngày 01/01/2023</p>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Layout";
import apiFactory from "@/config/apiFactory";
import {API_MANAGE_FEE} from "@/constant/constant-api";

export default {
  name: "Policy-Cencorship",
  components: {Layout},
  data() {
    return {
      listFees: '',
    }
  },
  created() {
    this.getFees()
  },
  methods: {
    getFees() {
      apiFactory.callApi(API_MANAGE_FEE.LIST_FEE, 'GET', {}).then((res) => {
        this.listFees = res.data.data
      }).catch(() => {
      });
    },
  }
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