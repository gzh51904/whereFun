<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>目的地</el-breadcrumb-item>
    <el-breadcrumb-item v-text="title">洛杉矶</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
    props : ['name'],
    data(){
        return {
            title : this.name
        }
    }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
    padding-left: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #ccc;
  }
</style>
