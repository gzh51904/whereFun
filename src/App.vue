<template>
  <div id="app">
    <div class="box">
      <main>
        <!-- 主页面内容 -->
        <router-view :class="{maincontent:isActive,maincontent1:closemain}" class="maincon" />
        <!-- 遮罩 -->
        <div
          :class="{contentcover1:isActive}"
          @click.prevent.stop="checkoutMine()"
          v-show="oks"
          class="contentcover"
        ></div>
      </main>
     <!-- 我的界面 -->
      <router-view v-on:show="checkoutMine"  :class="{mineopen:isActive,mineclose:closemine}" class="mine" name="mine" />
    <!-- 订单信息 -->
      <router-view v-on:clofoo="checkoutMine" name="ginf" :class="{sidemenu:gopen,sideopend:gcolse}" />
      <footer :class="{foo:fooclo}" v-if="show">
        <el-row>
          <el-col>
            <el-menu
              :default-active="active"
              @select="handleSelect"
              class="el-menu-demo"
              mode="horizontal"
              router
            >
              <el-menu-item
                v-for="item in pages"
                :key="item.name"
                :index="item.path"
                :routes="item.path"
                router
              >
              <span 
              v-if="item.ok"
              @click.prevent.stop="checkinMine()"
              >
                <span style="display:block;">
                  <i :class="item.icon"></i>
                </span>

                  <span>{{item.title}}</span>
                </span>


              <!-- <span 
              v-if="item.pshow"
              @click.prevent.stop="clomaibar()"
              >
                <span style="display:block;">
                  <i :class="item.icon"></i>
                </span>

                  <span>{{item.title}}</span>
                </span> -->

                <span v-else>
                  <span style="display:block;">
                    <span class="count-shopcart" v-if="item.cart">2</span>
                    <i :class="item.icon"></i>
                  </span>

                  <span>
                    <span>{{item.title}}</span>
                  </span>
                </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </footer>

      <!-- 立即预定 -->
      <Bmenu :class="{foo:fooclo,}" v-on:show="sideopen" @click="sideopen()" gopen v-else></Bmenu>
      <!-- 支付 -->
      <pbutton></pbutton>
    </div>
  </div>
</template>

<script>
// import "../src/assets/css/base.css";
import Vue from "vue";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Bmenu from "./components/bottom_menu.vue";
import pbutton from "./components/cart/zhifu.vue";
import store from './store.js'


Vue.use(ElementUi);

export default {
  data() {
    return {
      pages: [
        {
          title: "首页",
          name: "home",
          path: "/home",
          icon: "el-icon-s-home"
        },
        {
          title: "目的地",
          name: "des",
          path: "/des",
          icon: "el-icon-star-on"
        },
        {
          title: "购物车",
          name: "cart",
          path: "/cart",
          icon: "el-icon-shopping-cart-full",
          cart:true
        },
        {
          title: "我的",
          name: "mine",
          // path: "/mine",
          icon: "el-icon-user-solid",
          ok: true
        }
      ],
      isActive:false,
      oks:false,
      opens:true,
      closemain:false,
      closemine:false,
      fooclo:false,
      gopen:true,
      gcolse:false,
    };
  },
  methods:{
      handleSelect(index){
        this.active = index;
      },
      checkinMine(){
        this.opens=  true;
        if(this.opens == true){
          this.isActive = true;
          this.oks = true;
          this.closemine=false;
          this.closemain=false;
          this.fooclo=true;
        }
      },
      checkoutMine(){
        this.opens=  false;
        if(this.opens == false){
          this.isActive = false;
          this.oks = false;
          this.closemain=true;
          this.fooclo=false;
          this.gopen=true;
        this.gcolse=false;
          
        }
      },
      sideopen(){
         this.opens=  true;
        if(this.opens == true){
          this.isActive = true;
          this.oks = true;
          this.closemain=false;
          this.fooclo=true;
          this.gopen=false;
          this.gcolse=true;
        }
      }
      },
      created(){
        //刷新保持按钮高亮
        let hash = window.location.hash.slice(1);
        this.active = hash;
      },
  components: {
    Bmenu,
    pbutton
  },
  computed:{
    show:function(){
      return  store.state.isShow
    },
    pshow:function(){
      return store.state.ispshow
    }
  }
};
</script>

<style lang="scss">
@import url("./assets/css/base.css");

* {
  margin: 0;
  padding: 0;
}

body,html {
//   background-color: #32425b;
  height: 100%;
  width: 100%;
  font-size: 10px;
  position: relative;
  font-family: "Helvetica Neue", "Open Sans", "Microsoft YaHei", "微软雅黑",
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-content: space-between;
}

.contentcover {
  position: absolute;
  top: 0;
  left: 0rem;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 50000;
  background-color: rgba(0, 0, 0, 0.4);
}

.contentcover1 {
  position: absolute;
  top: 0;
  left: -27.8rem;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 50000;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s;
}

.maincontent {
  transform: translate3d(-90%, 0, 0);
  position: fixed!important;
  margin-top: 0 !important;
  transition: all 0.5s;
}

.maincontent1 {
    transform: translate3d(0, 0, 0);
    margin-top: 0 !important;
    transition:all 0.5s;
}

.mine{
  position: absolute;
  top: 0;
  left: -15%;
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all 0.5s;
  padding: 0;
  display: none;
  opacity: 1;
}

.mineopen{
  display:block;
  left:3rem;
  transition:all 1s;
  position: fixed!important;
  z-index: 9999;
}

.sidemenu {
    position: absolute;
    top: 0;
    left: -15%;
    width: 100%;
    height: 100%;
    z-index: 999;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 0;
    display: none;
    opacity: 1;
}

.sideopend {
  display:block;
  left:-15%;
  transition:all 1s;
   position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    padding: 0;
    opacity: 1;
    position: fixed!important;
}

.clomb{
  display: none;
}

main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.foo{
  bottom: -50px!important;
  box-shadow: none!important;
  display: none!important;
}
footer {
  z-index: 11000;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0 8px #333;
  display: flex;
  justify-content: space-around;
  line-height: 5rem;

  position: fixed;
  bottom: 0;
  left: 0;
}
footer ul {
  height: 0;
  display: flex;
}
.el-row {
  width: 100%;
}
footer li {
  line-height: 0;
  list-style: none;
  width: 25%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* align-content: center;  */
.count-shopcart{
  display: inline;
  top: 7px;
      font-size: 10px;
    padding: 1px 6px;
    background-color: rgba(255, 53, 114, 0.95);
    border-radius: 8px;
    position: absolute;
    color: #fff;
    margin: 0 0 0 1px;
    top: 0;
    left: 50%;
    box-shadow: 1px 1px 3px #777;
    display: block;
    width: 18px;
    height: 16px;
    line-height: 16px;
    font-weight: 300;
}
}
li i {
  text-align: center;
}
.el-menu-item {
  width: 25%;
}
.el-menu-item [class^="el-icon-"] {
  font-size: 2.6rem;
}
.el-menu-item span {
  line-height: 2rem;
}
.el-menu--horizontal > .el-menu-item {
  height: 5rem !important;
}
</style>
