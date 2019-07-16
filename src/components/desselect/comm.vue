<template>
  <div id="comm">
    <search />
    <div class="comm_layer">
      <ul>
        <li
          v-for="(a,index) in dressing"
          :key="index"
          :class="a.title == '出发'?'comm_layer_one' : ''"
          @click="show(index)"
        >
          <span v-text="a.title">出发</span>
          <i class="el-icon-arrow-down"></i>
        </li>
      </ul>
      <desnav :name="commData" />
      <deslist :db="commData"/>
    </div>
    <transition name="go">
      <div class="go" v-show="dressing[0].open">
        <div class="content">
          <div class="content-wrapper">
            <div class="cities-list">
              <div v-for="(item,index) in go" :key="index" class="slide">
                <span class="letter" v-text="item.English">D</span>
                <span class="last" v-for="(b,idx) in item.title" :key="idx">
                  <a href="javascript:;" @click="detal(b)" v-text="b
                ">丹佛</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="day">
      <div class="day" v-show="dressing[1].open">
        <ul class="daylist">
          <li v-for="(c,index) in day" :key="index" class="days">
            <div @click="act(index)" :class="dayactive==index?'dayactive' : ''">{{c}}天</div>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="dres">
      <div class="dres" v-show="dressing[2].open">dres</div>
    </transition>
    <transition name="sort">
      <div class="sort" v-show="dressing[3].open">sort</div>
    </transition>
  </div>
</template>
<script>
import search from "../search";
import desnav from "../des/desnav";
import deslist from "../des/deslist";
// import axios from "axios";
export default {
  data() {
    return {
      commData: this.$store.state.commState,
      dressing: [
        {
          title: "出发",
          className: "go",
          open: false //控制是否打开
        },
        {
          title: "天数",
          className: "day",
          open: false
        },
        {
          title: "筛选",
          className: "dres",
          open: false
        },
        {
          title: "排序",
          className: "sort",
          open: false
        }
      ],
      go: [
        {
          English: "D",
          title: ["丹佛"]
        },
        {
          English: "J",
          title: ["旧金山"]
        },
        {
          English: "L",
          title: ["洛杉矶", "拉斯维加斯"]
        },
        {
          English: "S",
          title: ["萨克拉门托"]
        },
        {
          English: "W",
          title: ["温哥华"]
        },
        {
          English: "X",
          title: ["西雅图"]
        },
        {
          English: "Y",
          title: ["盐城"]
        },
        {
          English: "Z",
          title: ["芝加哥"]
        }
      ],
      day: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      dayactive: "",
    };
  },
  components: {
    search,
    deslist,
    desnav
  },
  methods: {
    show(idx) {
      //拿到需要显示的下标
      this.dressing.map((item, index) => {
        if (index !== idx) {
          item.open = false;
        }
      }); //排他
      this.dressing[idx].open = !this.dressing[idx].open; //取反
    },
    act(index) {//天数高亮
      this.dayactive = index;
    },
    detal(val){//出发筛选
        this.dressing[0].open = false;//隐藏
        this.commData = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#comm {
  margin-top: 0;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
  padding-top: 3.4rem;
  width: 100%;
  height: auto;
  .comm_layer {
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #ccc;
    z-index: 99999;
    background-color: #fff;
    width: 100%;
    position: relative;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-flow: row;
      height: 100%;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        margin: 0;
        border-right: 1px solid #ccc;
        line-height: 22px;
        font-size: 14px;
        color: #555;
        span {
          line-height: 22px;
          font-size: 14px;
          color: #555;
          text-align: center;
        }
        .el-icon-arrow-down:before {
          font-weight: 900;
          font-size: 15px;
          margin-left: 3px;
        }
      }
      .comm_layer_one {
        flex: 0 0 33%;
      }
    }
  }
}

.go,
.day,
.dres,
.sort {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 70px;
  bottom: 0px;
  transition: all 1s;
  background: #fff;
  z-index: 999999;
}
// .top {
//    !important;
//   transition: all s;
// }
.go-enter-active,
.day-enter-active,
.dres-enter-active,
.sort-enter-active {
  transition: all 0.3s;
}
.go-leave-active,
.day-leave-active,
.dres-leave-active,
.sort-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.go-enter,
.go-leave-to,
.day-enter,
.day-leave-to,
.dres-enter,
.dres-leave-to,
.sort-enter,
.sort-leave-to {
  transform: translateY(100%);
  //   top: 70px;
  opacity: 0;
}
//出发样式
.go {
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
    .content-wrapper {
      height: 101%;
      overflow: auto;
      .cities-list {
        margin: 0;
        padding: 0 0 80px;
        width: 100%;
        .slide {
          .letter {
            color: #555;
            font-size: 17px;
            font-weight: bold;
            background-color: #eee;
            display: block;
            line-height: 40px;
            padding: 0 12px;
            box-sizing: border-box;
            width: 100%;
          }
          .last {
            border: none;
            color: #555;
            font-size: 14px;
            font-weight: 300;
            position: relative;
            height: 40px;
            display: block;
            line-height: 40px;
            padding: 0 12px;
            box-sizing: border-box;
            width: 100%;
            a {
              display: block;
              line-height: 40px;
              outline: none;
              text-decoration: none;
              color: inherit;
              width: 100%;
              height: 100%;
              font-size: 14px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
}
//天数样式
.day {
  .daylist {
    margin: 0;
    padding: 15px 10px;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    li {
      line-height: 40px;
      margin-bottom: 10px;
      flex: 0 0 33%;
      padding: 0 4px;
      box-sizing: border-box;
      div {
        height: 100%;
        text-align: center;
        font-size: 14px;
        color: #556;
        border-radius: 4px;
        background-color: #f7f8f7;
      }
    }
    .dayactive {
      background-color: #ff3573;
      color: #fff;
    }
  }
}
</style>


