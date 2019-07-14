<template>
  <div>
    <div class="tour_display" v-for="item in inf" :key="item.id">
      <!-- 图 -->
      <div class="layer">
        <img :src="item.img" alt />
        <div class="hot_sale"></div>
      </div>

      <!-- 详情 -->
      <div class="basic_info">
        <span class="dicount_num" v-text="item.discount"></span>
        <h1 class="title" v-text="item.title"></h1>
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <ul class="tags">
          <!-- 服务类型 -->
          <li class="service">
            <span class="service_airport" v-text="item.servise"></span>
          </li>
          <!-- 是否返点 -->
          <li class="discount">
            <span class="discount_getpoints" v-text="item.discount_getpoints"></span>
          </li>
          <!-- 是否兑换 -->
          <li class="discount">
            <span class="discount_usepoints" v-text="item.discount_usepoints"></span>
          </li>
          <!-- 导游语言 -->
          <li class="guide">
            <span v-text="item.guide"></span>
          </li>
        </ul>
        <div class="depart_date_wrapper clearfix">
          <span class="date">
            <i class="el-icon-date"></i>
            <span class="date" v-text="item.date"></span>
          </span>
          <span class="tour_code" v-text="item.tour_code"></span>
        </div>

        <!-- 出发地点与结束地点 -->
        <citys></citys>

        <!-- 图片展示 -->
        <img src="../../assets/img/10787-1562136326921_669x447.jpg"    alt  class="zhanshi" />
        <img src="../../assets/img/10787-1562136338281_623x472.jpg"    alt  class="zhanshi" />
      </div>
    </div>
  </div>
</template>
<script>
import citys from "./citys.vue";
export default {
  props:['inf'],
  data() {
    return {
     
    };
  },
  components: {
    citys
  },
  created(){
  }
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/base.css");
/*清除浮动（不管）*/
.clearfix:before,
.clearfix:after {
  /*清楚浮动*/
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1; /*IE/7/6*/
}
.tour_display {
  display: block;
  .layer {
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    border-bottom: 0.2rem solid #ff3573;
    position: relative;
    overflow: hidden;
    .hot_sale {
      width: 4.5rem;
      height: 4.5rem;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url("../../assets/img/hot-sale-v2.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  .basic_info {
    background: #fff;
    padding: 0.8rem 1.2rem 0.5rem;
    .dicount_num {
      padding: 0.1rem 0.6rem;
      border-radius: 0.4rem;
      font-size: 1.5rem;
      color: #fff;
      background-color: #ff3573;
      float: letf;
      margin-top: 0.1rem;
      margin-right: 0.4rem;
    }
    .title {
      font-size: 1.8rem;
      padding: 0;
      margin: 0 0 0.5rem;
      color: #333;
      display: inline;
      line-height: 1.4;
      text-indent: 3.5rem;
    }
    .tags {
      margin: 1rem 0 0.5rem;
      padding: 0;
      list-style: none;
      overflow: auto;
      display: block;
      float: left;
      width: 100%;
      clear: both;
      li {
        font-size: 1.3rem;
        color: #fff;
        padding: 0 0.8rem;
        margin: 0 0.3rem 0.5rem;
        float: left;
        height: 2.4rem;
        line-height: 2.4rem;
        border-radius: 1.5rem;
      }
    }
  }
}

//chufa
.depart_date_wrapper {
  margin: 1rem 0;
  // overflow: auto;
  border-bottom: 0.1rem dotted #999;
  padding-bottom: 1rem;
  .date {
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
    color: #777;
    line-height: 1;
    float: left;
    i {
      float: left;
    }
    .date {
      font-size: 1.4rem;
      padding: 0;
      margin: 0;
      color: #777;
      line-height: 1;
      float: left;
    }
  }
  .tour_code {
    float: right;
    font-size: 1.4rem;
    line-height: 1;
    color: #777;
  }
}

.service {
  background-color: #a462ff;
}
.discount {
  background-color: #ffac62;
}
.guide {
  background-color: #778;
}


//图片展示
.zhanshi{
  width: 28.1rem;
}
</style>
