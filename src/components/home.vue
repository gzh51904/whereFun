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
      <temai :weekSell="weekSell"></temai>

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

      <hot :hotlist="hotlist"></hot>

      <div class="jiewei">这里是个十分严谨的结尾</div>
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
import axios from "axios";
export default {
  data() {
    return {
      hotlist: [
        // {
        //   HomeHotGps: "拉斯维加斯出发 5日游",
        //   HomeHotPrice: "¥1132.0",
        //   HomeHotSale: "6.5折",
        //   HomeHotTitle:
        //     "『热门推荐』马蹄湾、羚羊峡谷、布莱斯峡谷、锡安国家公园、鲍威尔湖、西大峡谷 5日游",
        //   HomeHotTitleImg:
        //     "https://us-website.wannar.com/scenics_images/503/503-4_640x480.jpg?x-oss-process=image/resize,w_188",
        //   id: 3
        // },
        // {
        //   img: require("../assets/img/36-1544510440102_1016x597.jpg"),
        //   place: "纽约出发 6日游",
        //   msg:
        //     "『1美元体验曼哈顿早游』美东4大名城：纽约+费城+华盛顿+波士顿、2大名校：哈佛+麻省、七彩大瀑布 6日游（可升级酒店）",
        //   discount: "6.4折",
        //   price: "$143.36",
        //   icon: "el-icon-map-location"
        // },
        // {
        //   HomeHotGps: "拉斯维加斯出发 5日游",
        //   HomeHotPrice: "¥1132.0",
        //   HomeHotSale: "6.5折",
        //   HomeHotTitle:
        //     "『热门推荐』马蹄湾、羚羊峡谷、布莱斯峡谷、锡安国家公园、鲍威尔湖、西大峡谷 5日游",
        //   HomeHotTitleImg:
        //     "https://us-website.wannar.com/scenics_images/503/503-4_640x480.jpg?x-oss-process=image/resize,w_188",
        //   id: 3
        // }
      ],
      weekSell: [
        {
          tour_main_picture: require("../assets/img/banner2_1.jpg"),
          tour_id: 3,
          tour_discount_percent: "8.6折",
          tour_departure: "盐湖城出发",
          jiezhi: "截止至：2019-07-12",
          tour_display_price: "$786.2",
          tour_title:
            "『房车出行.限时特惠』黄石国家公园内入住+国家公园内露营+黄石公园深度游+火锅/烧烤/鹿肉/野牛肉当地特色餐+大盐湖奇观 5日游"
        },
        {
          tour_main_picture: require("../assets/img/banner2_2.jpg"),
          tour_id: 5,
          tour_discount_percent: "7.5折",
          tour_departure: "芝加哥出发",
          jiezhi: "截止至：2019-07-12",
          tour_display_price: "$382.5",
          tour_title:
            "『口碑担当.畅销精品』芝加哥东南部：底特律+匹兹堡+克利夫兰+纽约+费城+华盛顿 、尼亚加拉大瀑布、沃特金斯峡谷 6日游"
        },
        {
          tour_main_picture: require("../assets/img/80-1_640x480.jpg"),
          tour_id: 4,
          tour_discount_percent: "7.5折",
          tour_departure: "芝加哥出发",
          jiezhi: "截止至：2019-07-12",
          tour_display_price: "$382.5",
          tour_title:
            "『口碑担当.畅销精品』芝加哥东南部：底特律+匹兹堡+克利夫兰+纽约+费城+华盛顿 、尼亚加拉大瀑布、沃特金斯峡谷 6日游"
        },
      ]
    };
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
  },
 

  async mounted() {
    //热销数据
    let { data } = await axios.post("/home", [
      { DataBaseName: "homeHot" }
    ]);
    // console.log(data);
    //用map映射的方法在每一项加上icon:"el-icon-map-location"图标
    let newdata = data.map(item => {
      return {
        ...item,
        icon: "el-icon-map-location"
      };
    });
    this.hotlist = newdata;
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
          margin: 0 1.5rem 0 0;
          text-align: left;
          font-family: "Helvetica Neue", "Open Sans", "Microsoft YaHei",
            "微软雅黑", "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei",
            SimSun, sans-serif;
        }
      }
    }
  }
}

.jiewei{
  width: 100%;
  height: 15rem;
  line-height: 15rem;
  text-align: center;
  font-size:2rem;
}
</style>

