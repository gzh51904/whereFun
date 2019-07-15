<template>
  <div class="section">
    <div class="title_box">
      <h3 class="title">
        <i class="icon_temai"></i>
        本周特卖
      </h3>
      <span class="subtitle">每周四准时更新，必看的特价精选</span>
    </div>

    <!-- 轮播图2 -->
    <div id="banners2">
      <swiper ref="mySwiper" class="clearfix" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in weekSell" :key="item.tour_id" class="produce">
          <a href="javascript:;" @click="inf">
            <img :src="item.tour_main_picture" alt />
            <h5 v-text="item.tour_title"></h5>
            <div class="box">
              <p>
                <big v-text="item.tour_discount_percent"></big>
                <small v-text="item.tour_departure"></small>
                <span v-text="item.jiezhi"></span>
              </p>
              <span class="price">
                <span v-text="item.tour_display_price" class="price_num"></span>
                <small>/人起</small>
              </span>
            </div>
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
  props:['weekSell'],
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1.5
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    inf() {
      // console.log(this)
      this.$router.push({ path: "/nothing" });
    }
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.section {
  margin: 0;
  // padding: 1.5rem 0;

  #banners2 {
    padding: 0 1rem 1rem;
    margin-top: 1rem;
    // transform: translate3d(0px, 0px, 0px);
    // transition-duration: 0ms;
    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      box-sizing: content-box;
      .produce {
        width: 61% !important;
        overflow: hidden;
        position: relative;
        padding: 0 0 8rem;
        border: 0.1rem solid #ccc;
        box-shadow: 0 0 1rem #999;
        margin-left: 0.5rem;
        margin-right: 1.5rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        flex-shrink: 0;
        height: 100%;
        img {
          width: 100% !important;
        }
        h5 {
          font-size: 1.3rem;
          height: 3.1rem;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 8.4rem;
          padding: 0.3rem 0.8rem;
          color: #fff;
          line-height: 1.3;
          background-color: rgba(0, 0, 0, 0.7);
          display: block;
          justify-content: center;
          margin: 0;
          font-weight: normal;
          text-align: justify;
          overflow: hidden;
        }
        .box {
          display: block;
          height: 4rem;
          position: absolute;
          bottom: 4.4rem;
          p {
            margin: 0.5rem 1rem 0;
            padding: 0;
            display: block;
            overflow: visible;
            float: left;
            big {
              display: inline-block;
              float: left;
              font-size: 2rem;
              color: #000;
              font-weight: bold;
              margin-right: 0.6rem;
              line-height: 2.6rem;
            }
            small {
              display: inline-block;
              float: left;
              line-height: 2rem;
              font-size: 1.4rem;
              color: #777;
              padding-top: 0.7rem;
            }
            span {
              display: block;
              width: 100%;
              margin-top: 0.4rem;
              font-size: 1.3rem;
              color: #999;
              line-height: 1;
              clear: both;
              float: left;
            }
          }
          .price {
            display: block;
            position: absolute;
            left: 1rem;
            right: 1rem;
            bottom: -4rem;
            height: 3rem;
            line-height: 3rem;
            .price_num {
              color: #ff3573;
              padding-right: 0.2rem;
              font-size: 2rem;
            }
            small {
              font-size: 1.2rem;
              color: #999;
            }
          }
        }
      }
    }
  }
}
.icon_temai {
  background-image: url("../../assets/img/icon-weekly-promotion.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
</style>


