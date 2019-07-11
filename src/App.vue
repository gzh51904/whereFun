<template>
  <div id="app">
    <div class="box">
      
      <main>
    <router-view :class="{mineopen:isActive}" class="mine" name="mine"/>
    <div v-show="oks" class="content-cover"></div> 
      </main>
    <router-view :class="{maincontent:isActive}" class="maincon"/>
      <footer>
        <el-row>
          <el-col>
            <el-menu 
              :default-active="active"
              @select="handleSelect" 
              class="el-menu-demo" 
              mode="horizontal" 
              router>

     

              <el-menu-item
                v-for="item in pages"
                :key="item.name"
                :index="item.path"
                :routes="item.path"
                router
              >
              <span 
              v-if="item.ok"
              isActive
              oks
              opens
              @click.prevent.stop="checkoutMine()"
              >
                <span style="display:block;">
                  <i :class="item.icon"></i>
                </span>

                <span>{{item.title}}</span>
                </span>

                 <span v-else>
                <span style="display:block;">
                  <i :class="item.icon"></i>
                </span>

                <span>{{item.title}}</span>
                </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </footer>
    </div>
  </div>
</template>

<script>
// import "../src/assets/css/base.css";
import Vue from "vue";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


Vue.use(ElementUi)

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
          icon: "el-icon-shopping-cart-full"
        },
        {
          title: "我的",
          name: "mine",
          // path: "/mine",
          icon: "el-icon-user-solid",
          ok:true
        },
        
      ],
      isActive:false,
      oks:false,
      opens:true
    };
  },
  methods:{
      handleSelect(index){
        this.active = index;
      },
      checkoutMine(){
        //  this.$router.addClassName="mineopen";
        //  let aas = this.$router.className;
        //  console.log('类名是：',this.$router);
        this.opens=  true;
        if(this.opens == true){

          this.isActive = true;
          this.oks = true;
          
        }

      }
      },
      created(){
        let hash = window.location.hash.slice(1);
        this.active = hash;
      }
};
</script>

<style lang="scss">

@import url('./assets/css/base.css');

* {
  margin: 0;
  padding: 0;
}

body,html {
  height: 100%;
  width: 100%;
  font-size: 10px;
  position: relative;
  height: 100%;
  font-family: "Helvetica Neue", "Open Sans", "Microsoft YaHei", "微软雅黑",
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
}
main{
    // transform: translate3d(-90%, 0, 0);
    // position: fixed;
    // margin-top: 0 !important;
    }
#app {
  height: 100%;
}
.box {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-content: space-between;
}

.content-cover {
    position: absolute;
    top: 0;
    left: -27.8rem;
    bottom: 0;
    width: 100%;
    height:100%;
    z-index: 50000;
    background-color: rgba(0, 0, 0, .4);
    transition:all 0.5s;
}

.maincontent {
    // -webkit-transform: translate3d(-90%, 0, 0);
    transform: translate3d(-90%, 0, 0);
    position:fixed;
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
  transition:all 0.5s;
}

main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
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
.el-menu--horizontal>.el-menu-item {
  height:5rem !important;
}
</style>
