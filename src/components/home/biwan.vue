<template>
  <div class="section">
    <div class="title_box">
      <h3 class="title">
        <i class="icon_biwan"></i>
        必玩景点
      </h3>
        <span class="subtitle">永恒玩法，此生必去</span>

    </div>

    <div id="banner4">
      <swiper ref="mySwiper" class="clearfix" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in banner4Photo" :key="item.name" class="banner4_item">
          <a href="javascript:;" @click="inf">
          <img :src="item.img" alt />
          <h5 v-text="item.name"></h5>
          </a>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView : 2,
        autopaly:true
      },
      banner4Photo: [
        {
          name: "尼亚加拉大瀑布",
          img: require("../../assets/img/theme-niagara.jpg")
        },
        {
          name: "羚羊峡谷",
          img: require("../../assets/img/theme-antelope-canyon.jpg")
        },
        {
          name: "大峡谷",
          img: require("../../assets/img/theme-grand-canyon.jpg")
        },
        {
          name: "黄石公园",
          img: require("../../assets/img/theme-yellowstone.jpg")
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{
    inf() {
      this.$router.push({path:'/nothing'})
      // console.log(this)
    }
  }
};
</script>
<style lang="scss" scoped>
#banner4 {
  padding: 0 2rem;
  .banner4_item {
    width: 13.5rem !important;
    h5 {
      margin: 0;
      line-height: 30px;
      font-weight: normal;
      color: #333;
      font-size: 14px;
    }
  }
}
.icon_biwan {
  background-image: url("../../assets/img/icon-scenic.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>
