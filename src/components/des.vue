<template>
  <div id="des">
    <search />
    <div id="main">
      <desnav />
      <!-- 滚动条下拉出现模块 -->
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
      <div class="menu" :class="menuTop? 'menufixed' : ''">
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
      <deslist />
    </div>
  </div>
</template>
<script>
import search from "./search";
import deslist from "./des/deslist";
import desnav from "./des/desnav";
export default {
  data() {
    return {
      menuTop: false
    };
  },
  mounted() {
    let main = document.querySelector("main");
    main.addEventListener("scroll", this.scrollFn, true);
  },
  methods: {
    gotodesSelect() {
      this.$router.push({ name: "desselect" });
    },
    scrollFn() {
      let main = document.querySelector("main");
      if (main.scrollTop - 12 > 336) {
        this.menuTop = true;
      } else {
        this.menuTop = false;
      }
    }
  },
  destroyed() {
    let main = document.querySelector("main");
    main.removeEventListener("scroll", this.scrollFn, true);
  },
  components: {
    search,
    deslist,
    desnav
  }
};
</script>


<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#main {
  margin-top: 3.5rem;
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
  .menufixed {
    padding: 0;
    top: 3.4rem !important;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999998;
    box-shadow: 0 0 1rem #222;
    ul {
      height: 4rem;
      padding: 0;
      background: #fff;
      li {
        height: 4rem;
        flex: auto;
        line-height: 4rem;
        padding: 0 0 0 0.5rem;
        a {
          font-size: 1.2rem;
          height: 100%;
          flex-flow: row;
          img {
            width: 2.4rem;
          }
          span {
            line-height: 4rem;
            font-size: 1.2rem;
            padding: 0 0 0 0.5rem;
          }
        }
      }
    }
    .des_rebate {
      margin: 0;
      padding: 0 1rem;
      height: 3.2rem;
      background-color: #f7f8f7;
      overflow-y: hidden;
      overflow-x: auto;
      flex-flow: row nowrap;
      a {
        width: auto;
        flex: 1 0 auto;
        margin-right: 0.8rem;
        height: 2rem;
        background-color: transparent;
        padding: 0 0.8rem;
        border-radius: 2rem;
        h5 {
          font-size: 1.2rem;
          color: #334;
          font-weight: normal;
          line-height: 2rem;
        }
        span {
          display: none;
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
</style>


