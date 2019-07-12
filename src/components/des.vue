<template>
  <div class="desPart">
    <search />
    <div id="main">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>目的地</el-breadcrumb-item>
        <el-breadcrumb-item>洛杉矶</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="cityBJ">
        <a href="javascript:;" class="titleCity">
          <p>洛杉矶</p>
          <p>Los Angeles</p>
        </a>
        <a @click="gotodesSelect()" href="javascript:;" class="tabCity">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianchongxing-" />
          </svg>
          切换目的地
        </a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a href="javascript:;">
              <img src="../assets/img/des_days.png" alt />
              多日游
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../assets/img/des_oneDay.png" alt />
              一日游
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../assets/img/des_play.png" alt />
              玩乐
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../assets/img/des_cart.png" alt />
              定制包车
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../assets/img/des_tejia.png" alt />
              特价
            </a>
          </li>
        </ul>
        <div class="des_rebate">
          <a href="javascript:;">
            <h5>
              洛杉矶去黄石
              <span class="rebateLogo">折</span>
            </h5>
            <span class="des_rebate_text">经典线路 全网最低</span>
          </a>
          <a href="javascript:;">
            <h5>
              西南巨环
              <span class="rebateLogo">折</span>
            </h5>
            <span class="des_rebate_text">西部风光 经典环线</span>
          </a>
          <a href="javascript:;">
            <h5>
              洛杉矶周边
              <span class="rebateLogo">折</span>
            </h5>
            <span class="des_rebate_text">网红景点 灵活自由</span>
          </a>
          <a href="javascript:;">
            <h5>Amtrak观景车</h5>
            <span class="des_rebate_text">海岸星光号 神奇海岸</span>
          </a>
          <a href="javascript:;">
            <h5>去旧金山</h5>
            <span class="des_rebate_text">西海岸双城经典打卡</span>
          </a>
          <a href="javascript:;">
            <h5>圣地亚哥</h5>
            <span class="des_rebate_text">历史古城 加州诞生地</span>
          </a>
        </div>
      </div>
    </div>
    <div id="content">
      <h1>洛杉矶旅游</h1>
      <a class="content_a" href="javascript:;">
        <div class="content_list">
          <figure>
            <div class="content_list_imgBox">
              <img src="../assets/img/LosAngeles_b.jpg" />
              <div class="start_city">
                <span>洛杉矶出发</span>
              </div>
              <div class="dayANDnumber">
                <span class="day">8日游</span>
                <span class="number">LA8-120</span>
              </div>
            </div>
            <figcaption>
              <h3 class="item_title">『主题项目任选1+峡谷自选』西峡/南峡/羚羊谷、拉斯维加斯、优胜美地、旧金山3天 8日游</h3>
              <div class="item_logo">
                <div class="tuijian">推荐</div>
                <div class="tag">接机</div>
                <div class="tag">可配房</div>
                <div class="tag">买2送1</div>
                <div class="tag">APP优惠</div>
              </div>
              <p>
                <span class="item_newPrice">$305.87</span>
                <span class="item_unit">/人起</span>
                <span class="item_rebate">7.3折</span>
                <del class="item_oldPrice">$419.00</del>
              </p>
              <span class="content_timer">每天都发团</span>
            </figcaption>
          </figure>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import search from "./search";
export default {
  methods: {
    gotodesSelect() {
      this.$router.push({ name: "desselect" });
    }
  },
  components: {
    search
  }
};
</script>


<style lang="scss" scoped>
.desPart{
    margin-top: 0;
  width: 100%;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#main {
  margin-top: 3.5rem;
  .el-breadcrumb {
    padding-left: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #ccc;
  }
  .cityBJ {
    // width: 37.5rem;
    height: 14.2rem;
    position: relative;
    background: url("../assets/img/LosAngeles_b.jpg") no-repeat;
    background-size: cover;
    a {
      position: absolute;
    }
    .tabCity {
      width: 9rem;
      height: 2rem;
      right: 1rem;
      top: 1rem;
      background: #ff3573;
      color: #fff;
      border-radius: 1rem;
      line-height: 2rem;
      text-align: center;
      font-size: 1.1rem;
    }
    .titleCity {
      font-size: 1.8rem;
      color: #ffe;
      top: 1.5rem;
      left: 1.5rem;
    }
  }
  .menu {
    width: 100%;
    height: 19rem;
    padding-top: 1.5rem;
    ul {
      height: 6rem;
      display: flex;
      padding-bottom: 0.4rem;
      li {
        float: left;
        flex: 1;
        a {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          text-decoration: none;
          color: #555;
          font-size: 1.4rem;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          img {
            width: 3.2rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
  .des_rebate {
    height: 11.6rem;
    display: flex;
    padding: 0 0.8rem;
    overflow: hidden;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    align-content: space-around;
    box-sizing: border-box;
    a {
      width: 32%;
      cursor: pointer;
      height: 5rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      background-color: #f7f8f7;
      border-radius: 0.4rem;
      display: flex;
      align-items: center;
      flex-flow: column wrap;
      justify-content: center;
      h5 {
        margin: 0;
        font-size: 1.4rem;
        color: #556;
        line-height: 1.8rem;
      }
      .des_rebate_text {
        font-size: 1.2rem;
        color: #778;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .rebateLogo {
        display: inline-block;
        margin-left: 0.3rem;
        border-radius: 50%;
        font-size: 1.2rem;
        background-color: #ff3573;
        color: #fff;
        width: 1.8rem;
        height: 1.8rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.8rem;
        margin-top: -0.1rem;
        float: right;
      }
    }
  }
}
#content {
  padding: 1.5rem 0 5rem 0.8rem;
  h1 {
    color: #556;
    line-height: 3rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .content_a {
    display: block;
    margin-bottom:2rem; 
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
}
}
</style>


