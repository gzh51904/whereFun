<template>
  <div class="hot">
    <h3 class="title">
      <i class="icon_hot"></i>
      爆款热销
    </h3>
    <span class="hot_title">畅销的线路，尖叫的低价</span>
    <ul>
      <li v-for="item in listmsg" :key="item.place">
        <div class="img_box">
          <img :src="item.img" alt />
        </div>
        <div class="depart_box">
          <i :class="item.icon"></i>
          <span class="depart" v-text="item.place"></span>
        </div>

        <h5 v-text="item.msg"></h5>
        <div class="price">
          <span class="discount" v-text="item.discount"></span>
          <span class="current currency-convert" v-text="item.price"></span>
          <small>/人起</small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUi);
export default {
  data() {
    return {
      listmsg: [
        {
          img: require("../../assets/img/LA8-507.jpg"),
          place: "洛杉矶出发 8日游",
          msg:
            "『黄石12-15景』东南双峡、羚羊谷、蒙特利、17哩、太浩湖、大提顿 8日游（1晚黄石小木屋）",
          discount: "6.3折",
          price: "$340.83",
          icon: "el-icon-map-location"
        },
        {
          img: require("../../assets/img/36-1544510440102_1016x597.jpg"),
          place: "纽约出发 6日游",
          msg:
            "『1美元体验曼哈顿早游』美东4大名城：纽约+费城+华盛顿+波士顿、2大名校：哈佛+麻省、七彩大瀑布 6日游（可升级酒店）",
          discount: "6.4折",
          price: "$143.36",
          icon: "el-icon-map-location"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.icon_hot {
  background-image: url("../../assets/img/icon-hot-promotion.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: inline-block;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  width: 2.2rem;
  height: 2.2rem;
}
.hot {
  margin: 0;
  padding: 1.5rem 0;
  .title {
    margin: 0 1.5rem;
    padding: 0;
    font-size: 1.8rem;
    color: #333;
    line-height: 2.6rem;
    font-weight: bold;
  }
  .hot_title {
    display: block;
    line-height: 2.4rem;
    font-size: 1.3rem;
    color: #777;
    margin: 0 1.5rem;
  }
  ul {
    margin: 0.5rem 0 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    li {
      height: 23rem;
      display: block;
      float: left;
      width: 50%;
      padding-left: 1.5rem;
      padding-right: 0.5rem;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      .img_box {
        height: 11rem;
        img {
          height: 11rem;
          width: 100%;
          box-sizing: border-box;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      }
      .depart_box {
        font-size: 1.3rem;
        line-height: 2.2rem;
        color: #999;
        display: block;
        clear: both;
        i {
          font-size: 1.5rem;
          padding-right: 0.3rem;
          display: block;
          float: left;
          line-height: 2.2rem;
          color: #777;
        }
      }
      h5 {
        font-size: 1.4rem;
        margin: 0.5rem;
        color: #000;
        font-weight: normal;
        width: 100%;
        overflow: hidden;
        height: 3.2rem;
        word-break: break-all;
        line-height: 1.3;
      }
      .price {
        position: absolute;
        left: 1.5rem;
        right: 0.5rem;
        bottom: 3.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 0.1rem solid #ddd;
        height: 2rem;
        line-height: 2rem;
        .discount{
          font-size:1.3rem;
          margin-left:0.5rem;
          float:left;
          color:#fff;
          background-color:#ff3573;
          border-radius:0.2rem;
          padding: 0.2rem 0.4rem;
          line-height: 1.6rem;
          margin-right: 0.6rem;
        }.current{
          font-size:1.6rem;
          float:left;
          color:#ff3573;
          margin-right:0.4rem;
          font-weight: 300;
          margin-top: 0;
          line-height: 2rem;
        }small{
          font-size:1.4rem;
          padding-top:0.4rem ;
          float:left;
          color:#999;
          line-height: 1.6rem;
        }
      }
    }
  }
}
</style>
