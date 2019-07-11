<template>
  <div id="app">
    <div class="box">
      <main>
        <router-view />
      </main>
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
                <span>
                  <i :class="item.icon"></i>
                </span>

                <span>{{item.title}}</span>
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
          name: "mime",
          path: "/mime",
          icon: "el-icon-user-solid"
        },
      ]
    };
  },
  methods:{
      handleSelect(index){
        this.active = index;
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
body{background: #32425b !important;}
body,html {
  height: 100%;
  width: 100%;
  font-size: 10px;
  position: relative;
  height: 100%;
  font-family: "Helvetica Neue", "Open Sans", "Microsoft YaHei", "微软雅黑",
    "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
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
