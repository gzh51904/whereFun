<template>
  <div id="banner1">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banner1Photo" :key="item.name">
        <img :src="item.img" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        effect: "coverflow"
      },
      banner1Photo: [
        {
          img: require("../../assets/img/banner_1.jpg"),
          name: 1
        },
        {
          img: require("../../assets/img/banner_2.jpg"),
          name: 2
        },
        {
          img: require("../../assets/img/banner_1.jpg"),
          name: 3
        },
        {
          img: require("../../assets/img/banner_2.jpg"),
          name: 4
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
#banner1 {
  height: 17rem;
  img {
    width: 100%;
    height: 17rem;
  }
}
.el-carousel__container {
  height: 17rem;
}
.swiper-pagination {
  margin: 0;
  .swiper-pagination-bullet-active{
    background: #ff3573 !important;
  }
}
</style>

