<template>
  <div id="deslist">
    <el-table v-loading="loading" :data="database" style="width: 100%"></el-table>
    <a v-for="(a,index) in database" :key="index" class="content_a" href="javascript:;">
      <div class="content_list">
        <figure>
          <div class="content_list_imgBox">
            <img :src="require(`../../assets/img/${a.tour_main_picture}`)" />
            <div class="start_city">
              <span>{{a.tour_departure}}出发</span>
            </div>
            <div class="dayANDnumber">
              <span class="day">{{a.tour_day}}日游</span>
              <span class="number" v-text="a.tour_code">LA8-120</span>
            </div>
          </div>
          <figcaption>
            <h3
              class="item_title"
              v-text="a.tour_title"
            >『主题项目任选1+峡谷自选』西峡/南峡/羚羊谷、拉斯维加斯、优胜美地、旧金山3天 8日游</h3>
            <div class="item_logo">
              <div class="tuijian">推荐</div>
              <div class="tag">接机</div>
              <div class="tag">可配房</div>
              <div class="tag">买2送1</div>
              <div class="tag">APP优惠</div>
            </div>
            <p>
              <span
                class="item_newPrice"
              >${{(a.tour_display_price*(a.tour_discount_percent/100)).toFixed(2)}}</span>
              <span class="item_unit">/人起</span>
              <span class="item_rebate">{{a.tour_discount_percent/10}}折</span>
              <del class="item_oldPrice">${{a.tour_display_price}}</del>
            </p>
            <span class="content_timer">每天都发团</span>
          </figcaption>
        </figure>
      </div>
    </a>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["db"],
  data() {
    return {
      database: [],
      loading: true
    };
  },
  created() {
    //创建后拿vuex数据渲染
    this.ShowDeslist = false;
    axios
      .post("http://localhost:3000/find", [
        { DataBaseName: "desSelect" },
        { title: this.db }
      ])
      .then(res => {
        this.ShowDeslist = true;
        this.database = res.data[0].total;
      });
  },
};
</script>

<style lang="scss" scoped>
#deslist {
  overflow: hidden;
  background: #fff;
  padding: 1.5rem 0 5rem 0.8rem;
}
.content_a {
  display: block;
  margin-bottom: 2rem;
}
.content_list {
  width: 100%;
  figure {
    display: flex;
    //   width: 10%;
    overflow: hidden;
    position: relative;
  }
  .content_list_imgBox {
    flex: 1;
    height: 15rem;
    float: left;
    position: relative;
    margin-right: 0.7rem;
    img {
      width: 12rem;
      height: 15rem;
      border-radius: 1rem;
    }

    .start_city {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      span {
        display: block;
        z-index: 10;
        position: absolute;
        line-height: 2rem;
        font-size: 1.2rem;
        color: #fff;
        border-radius: 0 0 0.6rem 0.6rem;
        padding: 0 0.6rem;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    .dayANDnumber {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 2rem;
      text-align: right;
      padding-right: 0.4rem;
      font-size: 1.2rem;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      .day {
        float: left;
      }
      .number {
        float: right;
      }
    }
  }
  figcaption {
    //   width: 23rem;
    flex: 2;
    float: left;

    h3 {
      font-size: 1.4rem;
      font-weight: normal;
      line-height: 1.9rem;
      max-height: 3.8rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin: 0 0 0.8rem;
      color: #222;
      word-break: break-all;
    }
    .item_logo {
      width: 100%;
      height: 4.3rem;
      display: flex;
      flex-flow: row wrap;
      div {
        height: 1.5rem;
      }
      .tuijian {
        background-color: #fff;
        color: #ff3573;
        border: 0.1rem solid #ff3573;
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding: 0 0.4rem;
        margin-right: 0.6rem;
        margin-bottom: 0.6rem;
      }
      .tag {
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding: 0 0.4rem;
        border: 0.1rem solid transparent;
        border-radius: 0.3rem;
        color: #777;
        flex: 0 0 auto;
        display: block;
        margin-right: 0.6rem;
        margin-bottom: 0.6rem;
        background-color: #f7f8f7;
      }
    }
    p {
      position: absolute;
      left: 12.5rem;
      bottom: 1.8rem;
      display: flex;
      align-items: baseline;
      .item_newPrice {
        font-size: 1.8rem;
        color: #ff3573;
      }
      .item_unit {
        margin-right: 0.5rem;
        color: #999;
        text-decoration: line-through;
        line-height: 1.6rem;
        padding-left: 0.6rem;
      }
      .item_oldPrice {
        color: #999;
        text-decoration: line-through;
        line-height: 1.6rem;
        padding-left: 0.6rem;
      }
      .item_rebate {
        padding: 0 0.5rem;
        border-radius: 0.3rem;
        background-color: #ff3573;
        color: #fff;
        line-height: 1.6rem;
        margin-right: 0.5rem;
      }
    }
  }
}
.content_timer {
  position: absolute;
  left: 12.5rem;
  bottom: -0.1rem;
  font-size: 1.2rem;
  color: #556;
  padding-left: 0.1rem;
  display: flex;
  align-items: center;
}
</style>
