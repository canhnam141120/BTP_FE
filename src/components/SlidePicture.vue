<template>
  <div>
    <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="3000"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        background="#ababab"
        img-width="1024"
        img-height="510"
    >
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../image/banner.png"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../image/banner1.png"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../image/banner2.png"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../image/banner3.png"
              alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>
    <br>
  </div>
</template>

<script>
export default {
  name: "SlidePicture",
}
</script>

<style scoped>

</style>