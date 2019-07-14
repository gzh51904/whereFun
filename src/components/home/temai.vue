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
        
        <swiper-slide v-for="item in banner2Photo" :key="item.name" class="produce" >
          <a href="javascript:;" @click="inf">
          <img :src="item.img" alt />
          <h5 v-text="item.msg"></h5>
          <div class="box">
            <p>
              <big v-text="item.dazhe"></big>
              <small v-text="item.chufa"></small>
              <span v-text="item.jiezhi"></span>
            </p>
            <span class="price">
              <span v-text="item.price" class="price_num"></span>
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
  name: "carrousel",
  data() {
    return {
      swiperOption:{
      slidesPerView : 1.5,

      },
      banner2Photo: [
        {
          img: require("../../assets/img/banner2_1.jpg"),
          name: 3,
          dazhe: "8.6折",
          chufa: "盐湖城出发",
          jiezhi: "截止至：2019-07-12",
          price: "$786.2",
          msg:
            "『房车出行.限时特惠』黄石国家公园内入住+国家公园内露营+黄石公园深度游+火锅/烧烤/鹿肉/野牛肉当地特色餐+大盐湖奇观 5日游"
        },
        {
          img: require("../../assets/img/banner2_2.jpg"),
          name: 4,
          dazhe: "7.5折",
          chufa: "芝加哥出发",
          jiezhi: "截止至：2019-07-12",
          price: "$382.5",
          msg:
            "『口碑担当.畅销精品』芝加哥东南部：底特律+匹兹堡+克利夫兰+纽约+费城+华盛顿 、尼亚加拉大瀑布、沃特金斯峡谷 6日游"
        },
        {
          img: require("../../assets/img/banner2_2.jpg"),
          name: 6,
          dazhe: "7.5折",
          chufa: "芝加哥出发",
          jiezhi: "截止至：2019-07-12",
          price: "$382.5",
          msg:
            "『口碑担当.畅销精品』芝加哥东南部：底特律+匹兹堡+克利夫兰+纽约+费城+华盛顿 、尼亚加拉大瀑布、沃特金斯峡谷 6日游"
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
      // console.log(this)
      this.$router.push({path:"/inf"})
    }
  }
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


