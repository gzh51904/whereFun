<template>
  <div class="myinf">
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
    <infMain :id="id"></infMain>
  </div>
</template>
<script>
import search from "./search.vue";
import infMain from "./myinf/inf_main.vue";

export default {
  data() {
    return {
        id:[]
    };
  },
  components: {
    search,
    infMain
  },
   created() {
    let { id } = this.$route.params;
    this.id = id;
  }
};
</script>
<style lang="scss" >
.myinf {
  margin-top: 0;
  width: 100%;
  position: absolute;
  z-index: 10000;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 6rem;
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
}
</style>
