<template>
  <div id="app">
    <div class="box">
      <main>
        <router-view />
      </main>
      <footer>
        <el-row>
          <el-col>
            <el-menu class="el-menu-demo" mode="horizontal"  router>
              <el-menu-item
                v-for="item in pages"
                :key="item.name"
                :index="item.name"
                :routes="item.path"
                router
              >
              <i :class="item.icon"></i>
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
 
import Vue from "vue";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUi);

export default {
  data() {
    return {
      pages: [
        {
          title: "首页",
          name: "home",
          path: "/home",
          icon:'el-icon-s-home'
        },
        {
          title: "目的地",
          name: "des",
          path: "/des",
          icon:'el-icon-star-on'
        },
        {
          title: "购物车",
          name: "cart",
          path: "/cart",
          icon:'el-icon-shopping-cart-full'
        },
        {
          title: "我的",
          name: "mime",
          path: "/mime",
          icon:'el-icon-user-solid'
        }
      ]
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
  width: 100%;
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
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 8px #333;
  display: block;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
}
footer ul {
  height: 0px;
  display: flex;
}
footer li {
  line-height: 0;
  list-style: none;
  display: flex; 
   flex-direction: column;
   justify-content: center;
   /* align-content: center;  */
}

.el-menu-item [class^=el-icon-]{
  font-size: 26px;
}
.el-menu-item span{
  line-height: 30px;
}
</style>
