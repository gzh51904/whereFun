<template>
  <div id="desselect">
    <el-table v-loading="loading" :data="database" style="width: 100%"></el-table>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item
        v-for="(a,idx) in title"
        :class="titleActive == idx ? 'is-active' : ''"
        @click="tabList(idx)"
        :key="a.name"
        :index="a.name"
      >
        <span slot="title" v-text="a.name">导航二</span>
      </el-menu-item>
    </el-menu>
    <!-- 选项卡 -->
    <hot v-show="'0'==titleActive? true : false" />
    <city v-show="'1'==titleActive? true : false" />
    <usawest v-show="'2'==titleActive? true : false" />
    <usaeast v-show="'3'==titleActive? true : false" />
    <canada v-show="'4'==titleActive? true : false" />
    <europe v-show="'5'==titleActive? true : false" />
    <csa v-show="'6'==titleActive? true : false" />
    <custom v-show="'7'==titleActive? true : false" />
    <team v-show="'8'==titleActive? true : false" />
    <mail v-show="'9'==titleActive? true : false" />
  </div>
</template>

<script>
import axios from "axios";
import { Loading } from "element-ui";
import hot from "./desselect/hot";
import city from "./desselect/city";
import usawest from "./desselect/usawest";
import usaeast from "./desselect/usaeast";
import canada from "./desselect/canada";
import europe from "./desselect/europe";
import csa from "./desselect/csa";
import custom from "./desselect/custom";
import team from "./desselect/team";
import mail from "./desselect/mail";

export default {
  data() {
    return {
      title: [
        { name: "热门", path: "/desselect/hot" },
        { name: "所有城市", path: "/desselect/city" },
        { name: "美国西海岸", path: "/desselect/usawest" },
        { name: "美国东海岸", path: "/desselect/usaeast" },
        { name: "加拿大", path: "/desselect/canada" },
        { name: "欧洲", path: "/desselect/europe" },
        { name: "中南美", path: "/desselect/csa" },
        { name: "定制包车", path: "/desselect/custom" },
        { name: "舒适小团", path: "/desselect/team" },
        { name: "全球邮轮", path: "/desselect/mail" }
      ],
      titleActive: 0, //默认高亮
      database: [],
      loading: true
    };
  },
  methods: {
    tabList(idx) {
      this.titleActive = idx; //点击高亮
    }
  },
  created() {
    axios
      .post("http://localhost:3000/find", [{ DataBaseName: "desList" }, {}])
      .then(res => {
          this.database = res.data;
        this.$store.state.deslistDATA = res.data;
      });
  },
  components: {
    hot,
    city,
    usawest,
    usaeast,
    canada,
    europe,
    csa,
    custom,
    team,
    mail
  }
};
</script>


<style lang="scss" scoped>
#desselect {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 1rem 1rem 6rem 12rem;
  margin-top: 0;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
}
.el-menu {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;
  z-index: 100;
  width: 11rem;
  top: 0;
  left: 0;
  bottom: 5rem;
  background-color: #f7f8f7;
  border: 0;
  .el-menu-item {
    display: block;
    width: 100%;
    height: 5.2rem;
    position: relative;
    font-size: 1.6rem;
    text-align: center;
    color: #778;
    text-align: left;
    padding: 0;
  }
}
.is-active {
  color: #556;
  background-color: #fff;
  font-weight: bold;
}
.el-menu-item.is-active::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 0.4rem;
  height: 2.2rem;
  margin-top: -1.1rem;
  border-radius: 0 0.2rem 0.2rem 0;
  background-color: #ff3573;
}
</style>


