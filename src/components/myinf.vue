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
      <infMain></infMain>
    </div>
</template>
<script>
import search from './search.vue'
import infMain from './myinf/inf_main.vue'
export default {
    data() {
        return{

        }
    },
    components:{
        search,
        infMain
    }
}
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
