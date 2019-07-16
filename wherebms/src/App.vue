<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Vue from 'vue';
import "heyui/themes/index.less";
import Home from "./components/Home.vue";
import { install, Circle ,Table,TableItem} from "heyui";
Vue.use(install, {
  components: { Circle ,Table,TableItem}
});
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
@import url(./assets/css/base.css);
body,
html {
  font-size: 16px;
  background: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
