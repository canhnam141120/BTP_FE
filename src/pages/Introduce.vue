<template>
  <Layout>
    <main style="flex-grow: 1;">
      <!--    <div class="container">-->
      <div class="layer-1">
        <img src="../image/anhbia1.png">
      </div>
      <!--    </div>-->
      <div class="container">
        <div class="title">
          <h1>Trạm sách</h1>
          <p>Hiện nay xã hội và con người ngày càng phát triển. Việc tiếp nhận và học hỏi kiến thức ngày càng được chú
            trọng hơn. Chúng ta luôn tìm kiếm những nguồn tri thức mới, là hành trang cho cuộc sống để luôn bắt kịp xu
            thế thời đại. Đứng giữa những cách tiếp nhận kiến thức nhiều luồng trên mạng internet thì sách vẫn là một
            cách tiếp nhận và học hỏi kiến thức rất trực quan và dễ dàng. Và thế hệ trẻ hiện nay cũng nắm rất rõ điều đó
            và không ngừng học hỏi thông qua những cuốn sách hay. Vì thế trạm sách được phát triển với mục đích là cầu
            nối giữa những người đam mê sách với nhau, cùng chia sẻ và tiếp nhận những kiến thức mới thông qua việc trao
            đổi những cuốn sách.</p>
        </div>
      </div>
      <div class="layer-3">
        <div class="description">
          <h4>Hãy đến với "Trạm sách"</h4>
          <p>Ai cũng có những câu chuyện, những bài học mình đã trải qua. Ai cũng có những cuốn sách hay giúp mình tích
            luỹ những kiến thức có ích. Ai cũng có những thành công và và những thất bại trong cuộc đời. Kiến thức cũng
            như những bài học hoặc chỉ đơn giản là những câu chuyện hay làm cho cuộc sống chúng ta không bị nhàm chán.
            Hãy trao đi những cuốn sách đã đem lại cho chúng ta những câu chuyện, những bài học hay để nhận lại những
            cuốn sách mới, những nguồn tri thức hay cảm xúc mới, biết đâu điều đó sẽ giúp bạn cảm thấy tự tin hơn, vui
            vẻ hơn với những gì mình đã trao đi và nhận được. Trao đổi sách cũng là một cách giúp vòng đời của những
            cuốn sách dài hơn, đem lại nhiều giá trị đến với những người khác. Và đó cũng là một hành động đẹp đem lại
            thông điệp tích cực đến với môi trường sống của ta.</p>
        </div>
        <div class="inline-image">
          <img src="../image/picture-intro.png">
        </div>
        </div>
      <div class="container">
      <div class="layer-4">
        <div class="text-divider">Thành viên</div>
        <div class="admin-icon">

        </div>
      </div>
      </div>
    </main>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";

export default {
  name: "Introduce",
  components: {Layout}
}
</script>

<style scoped>
.layer-1 {
  width: 100%;
  height: auto;

}

.layer-1 img {
  width: 100%;
  height: auto;
}

.title {
  text-align: center;
  margin: 3%;
}

.layer-3 {
  background-color: #DFD5CB;
  width: 100%;
  height: 400px;
  display: flex;
  margin-top: 15%;
  margin-bottom: 15%;
}
.layer-3 .description{
margin-left: 10%;
  margin-right: 5%;
  width: 518px;
  height: min-content;
  margin-top: 3%;
  text-align: justify;
}
.layer-3 .inline-image img{
  position: relative;
  top: -107px;
  width: 100%;
  height: auto;
}
.text-divider {
  display: flex;
  align-items: center;
  --text-divider-gap: 1rem;
  font-weight: bold;
  font-size: 40px;
}
.text-divider::before,
.text-divider::after {
  content: '';
  height: 5px;
  border-radius: 2px;
  background-color: #DFD5CB;
  flex-grow: 1;
}
.text-divider::before {
  margin-right: var(--text-divider-gap);
}
.text-divider::after {
  margin-left: var(--text-divider-gap);
}
</style>