<template>
  <div>
    <!-- 搜索框 -->
    <search></search>
    <div id="nnav">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>目的地</el-breadcrumb-item>
        <el-breadcrumb-item>洛杉矶</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- main区域 -->
    <infMain :inf="inf"></infMain>
  </div>
</template>
<script>
import search from "./search.vue";
import infMain from "./myinf/inf_main.vue";
import Axios from 'axios';
export default {
  data() {
    return {
      inf: [
        {
          img: require("../assets/img/10787-1541988234403_640x483.jpg"),
          id: 123,
          discount: "9.5折",
          title:
            "『星球小屋预售』1晚星球小屋、4次极光观测机会、探秘北极圈、征服道顿公路、北方极地博物馆、冰雕博物馆 5日游",
          servise: "接机参团",
          discount_getpoints: "返点",
          discount_usepoints: "兑换",
          guide: "导游语言: 国语 | 英语",
          date: "每天发团",
          tour_code: "编号: FA5-10787"
        }
      ]
    };
  },
  components: {
    search,
    infMain
  },
  created() {
    // console.log(this.$router.app._route.query.id)
    let {id} = this.$router.app._route.query
    axios.get()
  }
};
</script>
<style lang="scss" >
#nnav {
  margin-top: 3.5rem;
  .el-breadcrumb {
    padding-left: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #ccc;
  }
}
</style>
