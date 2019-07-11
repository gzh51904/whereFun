<template>
  <div class="main_container">
    <div class="main_content">
      <!-- 搜索框 -->
      <div class="index_search_bar">
        <input type="search" />
        <button>
          <span>
            <i class="el-icon-search"></i>
          </span>
        </button>
      </div>
      <!-- 轮播图 -->
      <div id="banners1">
        <el-carousel
          :interval="5000"
          arrow="always"
          indicator-position="string"
          style="height:17rem;"
        >
          <el-carousel-item v-for="item in banner1Photo" :key="item.name">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- section menu 菜单 -->
      <div class="section menu">
        <h3>玩哪儿！最有趣的欧美自由行</h3>
        <ul>
          <a href="###">
            <li>
              <span class="duoriyou"></span>
              <h5>多日游</h5>
            </li>
          </a>
          <a href="###">
            <li>
              <span class="yiriyou"></span>
              <h5>一日游</h5>
            </li>
          </a>
          <a href="###">
            <li>
              <span class="wanle"></span>
              <h5>玩乐</h5>
            </li>
          </a>
          <a href="###">
            <li>
              <span class="jiudian"></span>
              <h5>酒店</h5>
            </li>
          </a>
          <a href="###">
            <li>
              <span class="baoche"></span>
              <h5>包车</h5>
            </li>
          </a>
        </ul>
        <div class="divided-line"></div>
      </div>
    </div>

    <div class="section">
      <h3 class="title">
        <span></span>
        本周特卖
      </h3>
      <span class="subtitle">每周四准时更新，必看的特价精选</span>

      <!-- 轮播图2 -->
      <div id="banners2">
        <swiper ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in banner2Photo" :key="item.name" class="produce">
            <img :src="item.img" alt />
            <h5 v-text="item.msg"></h5>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import "swiper/dist/css/swiper.css";

//swiper
import swiper from "swiper"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


export default {
  name: "carrousel",
  data() {
    return {
      banner1Photo: [
        {
          img: require("../assets/img/banner_1.jpg"),
          name: 1,
         
        },
        {
          img: require("../assets/img/banner_2.jpg"),
          name: 2
        }
      ],
      banner2Photo: [
        {
          img: require("../assets/img/banner2_1.jpg"),
          name: 3,
           msg:
            "『房车出行.限时特惠』黄石国家公园内入住+国家公园内露营+黄石公园深度游+火锅/烧烤/鹿肉/野牛肉当地特色餐+大盐湖奇观 5日游"
        },
        {
          img: require("../assets/img/banner2_2.jpg"),
          name: 4
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.main_container {
  width: 100%;
}
.main_container {
  margin-top: 0;
  width: 100%;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
  .main_content {
    min-height: 100%;
    .index_search_bar {
      position: absolute;
      top: 0;
      left: 5rem;
      right: 5rem;
      height: 5rem;
      padding: 0;
      z-index: 20000;
      text-shadow: 1px 1px 2px #333;
      input {
        height: 2.6rem;
        line-height: 2.8rem;
        margin-top: 1rem;
        padding: 0 3.2rem 0 1.4rem;
        box-sizing: border-box;
        width: 100%;
        border-radius: 3rem;
        font-size: 1.5rem;
        background-color: rgba(255, 255, 255, 0.4);
        // color:#fff;
        text-shadow: 0.1rem 0.1rem 0.2rem #333;
      }
      button {
        height: 2.8rem;
        font-size: 1.8rem;
        position: absolute;
        top: 0.9rem;
        right: 0.3rem;
        display: block;
        width: 3rem;
        line-height: 2.8rem;
        text-align: center;
        border: none;
        background: none;
        text-shadow: 0.1rem 0.1rem 0.1rem #777;
        padding: 0;
      }
    }
    #banners1 {
      height: 17rem;
      img {
        width: 100%;
        height: 17rem;
      }
    }
    .section {
      margin: 0;
      padding: 1.5rem 0;
      h3 {
        margin: 0 0 1.8rem;
        text-align: center;
        width: 100%;
        line-height: 2rem;
        font-weight: normal;
        font-size: 1.6rem;
        color: #333;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        li {
          display: inline-block;
          float: left;
          width: 20%;
          text-align: center;
          span {
            display: block;
            width: 100%;
            height: 4rem;
            height: 3.6rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
          }
        }
        h5 {
          margin: 1rem 0 0;
          font-weight: normal;
          color: #555;
          font-size: 1.4rem;
          line-height: 2rem;
          margin-top: 0.8rem;
          display: inline-block;
        }
      }
      .divided-line {
        margin: 0 1.5rem;
        height: 0.2rem;
        border-bottom: 1px solid #ccc;
        clear: both;
      }
    }
  }
}

//section menu
.duoriyou {
  background-image: url("../assets/img/menuicon-tour.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.yiriyou {
  background-image: url("../assets/img/menuicon-one-day-tour.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.wanle {
  background-image: url("../assets/img/menuicon-activity.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.jiudian {
  background-image: url("../assets/img/menuicon-hotel.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}
.baoche {
  background-image: url("../assets/img/menuicon-car-rental.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 36px;
}

.section {
  margin: 0;
  padding: 1.5rem 0;
  .title {
    margin: 0 1.5rem;
    padding: 0;
    font-size: 1.8rem;
    color: #333;
    line-height: 2.6rem;
    font-weight: bold;
    span {
      display: inline-block;
      float: left;
      margin-right: 0.5rem;
      margin-top: 0.2rem;
      width: 2.2rem;
      height: 2.2rem;
      background-image: url("../assets/img/icon-weekly-promotion.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
  .subtitle {
    display: block;
    line-height: 24px;
    font-size: 13px;
    color: #777;
    margin: 0 15px;
  }
  #banners2 {
    padding: 0 1rem 1rem;
    margin-top: 1rem;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
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
        padding: 0 0 4rem;
        border: 0.1rem solid #ccc;
        box-shadow: 0 0 1rem #999;
        margin-left: 0.5rem;
        margin-right: 1.5rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        flex-shrink: 0;
        height: 100%;
      }
    }
  }
}
</style>

