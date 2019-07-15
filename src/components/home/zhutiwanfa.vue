<template>
  <div class="section">
    <div class="title_box">
      <h3 class="title">
        <i class="icon_zhuti"></i>
        主题玩法
      </h3>
      <span class="subtitle">想怎么玩，就怎么玩；想玩哪儿，就玩哪儿！</span>
    </div>

    <div id="banner3">
      <swiper ref="mySwiper" class="clearfix" :options="swiperOption">
        <!-- slides -->

        <swiper-slide v-for="item in bannerPhoto3" :key="item.name" class="zhutiproduce">
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
        slidesPerView: 2
      },
      bannerPhoto3: [
        {
          img: require("../../assets/img/mini-tour.jpg"),
          name: "舒适小团"
        },
        {
          img: require("../../assets/img/short-tour.jpg"),
          name: "一日游"
        },
        {
          img: require("../../assets/img/ticket.jpg"),
          name: "景点门票"
        },
        {
          img: require("../../assets/img/private.jpg"),
          name: "包车自由行"
        }
      ]
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    inf() {
      // console.log(this)
      this.$router.push({ path: "/inf" });
    }
  }
};
</script>
<style lang="scss" scoped>
.title_box {
  padding: 0 1.5rem;
}
.icon_zhuti {
  background-image: url("../../assets/img/icon-activity.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
#banner3 {
  padding: 1rem 2rem;
  .zhutiproduce {
    width: 13.5rem !important;
    height: 9rem;
    position: relative;
    h5 {
      width: 11.5rem;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      text-align: center;
      line-height: 4rem;
      margin-top: -2rem;
      font-size: 1.7rem;
      font-weight: normal;
      color: #fff;
    }
  }
}
</style>
