<template>
  <div class="hot">
    <h3 class="title">
      <i class="icon_hot"></i>
      爆款热销
    </h3>
    <span class="hot_title">畅销的线路，尖叫的低价</span>
    <ul v-loading="loading" element-loading-text="拼命加载中">
      <li v-for="item in hotlist" :key="item._id">
        <a
          href="javascript:;"
          @click="gotoInf(item.tour_id)"
        >
          <div class="img_box">
            <img :src="require(`../../assets/img/${item.tour_main_picture}`)" alt />
          </div>
          <div class="depart_box">
            <i :class="item.icon"></i>
            <!-- 拉斯维加斯出发 5日游 -->
            <span class="depart" v-text="item.tour_departure"></span>
          </div>
          <!-- 『热门推荐』马蹄湾、羚羊峡谷、布莱斯峡谷、锡安国家公园、鲍威尔湖、西大峡谷 5日游 -->
          <h5 v-text="item.tour_title"></h5>
          <div class="price">
            <!-- 6.5折 -->
            <span class="discount" v-text="item.tour_discount_percent+'折'"></span>
            <span class="current currency-convert" v-text="item.tour_display_price"></span>
            <small>/人起</small>
          </div>
        </a>
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
  props: ["hotlist"],
  data() {
    return {
      loading: true
    };
  },
  methods: {
    gotoInf(id) {
      this.$router.push({
        name: "myinf",
        params: {id: id,router:'home',DataBaseName : 'homeHot'}
      });
      // console.log(this.$router.history.current.params)
    }
  },
  created() {
    if (this.hotlist) {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  }
};
</script>
<style lang="scss" scoped>
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
    min-height: 15rem;
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
        .discount {
          font-size: 1.3rem;
          margin-left: 0.5rem;
          float: left;
          color: #fff;
          background-color: #ff3573;
          border-radius: 0.2rem;
          padding: 0.2rem 0.4rem;
          line-height: 1.6rem;
          margin-right: 0.6rem;
        }
        .current {
          font-size: 1.6rem;
          float: left;
          color: #ff3573;
          margin-right: 0.4rem;
          font-weight: 300;
          margin-top: 0;
          line-height: 2rem;
        }
        small {
          font-size: 1.4rem;
          padding-top: 0.4rem;
          float: left;
          color: #999;
          line-height: 1.6rem;
        }
      }
    }
  }
}
</style>
