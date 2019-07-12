<template>
  <div class="main_container">
    <div class="main_content">
      <!-- 搜索框 -->
      <Search></Search>
      <!-- 轮播图 -->
      <banner1></banner1>

      <!-- section menu 菜单 -->
      <navMenu></navMenu>

      <!-- line -->
      <allline></allline>

      <!-- 本周特卖 -->
      <temai></temai>

      <!-- line -->
      <allline></allline>

      <!-- 主题玩法 -->
      <zhu-ti></zhu-ti>

      <!-- line -->
      <allline></allline>

      <!-- 必玩景点 -->
      <biwan></biwan>

      <!-- line -->
      <allline></allline>

      <!-- 爆款热销 -->
      <hot></hot>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
import "swiper/dist/css/swiper.css";
import Search from "./home/home_search.vue";
import banner1 from "./home/banner1.vue";
import navMenu from "./home/nav.vue";
import temai from "./home/temai.vue";
import Allline from "./home/line.vue";
import zhuTi from "./home/zhutiwanfa.vue";
import biwan from "./home/biwan.vue";
import hot from "./home/hot.vue";

export default {
  data() {
    return {};
  },
  components: {
    Search,
    banner1,
    navMenu,
    temai,
    Allline,
    zhuTi,
    biwan,
    hot
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
    .section {
      margin: 0;
      padding: 1.5rem 0;
      .title_box {
        padding: 0 1.5rem;

        .title {
          padding: 0;
          font-size: 1.8rem;
          color: #333;
          line-height: 2.6rem;
          font-weight: bold;
          text-align: left;
          margin-bottom: -0.3rem;
          i {
            display: inline-block;
            // float: left;
            margin-right: 0.5rem;
            margin-top: 0.2rem;
            width: 2.2rem;
            height: 2.2rem;
          }
        }
        .subtitle {
          display: block;
          line-height: 2.4rem;
          font-size: 1.3rem;
          color: #777;
          margin: 0 1.5rem 0  0;
          text-align:left;
          font-family: "Helvetica Neue", "Open Sans", "Microsoft YaHei",
            "微软雅黑", "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei",
            SimSun, sans-serif;
        }
      }
    }
  }
}
</style>

