<template>
  <div id="sidebar">
    <div class="logo"></div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
         <el-menu-item route="/" index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">系统首页</span>
          </el-menu-item>
          <el-menu-item route="/stat" index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item route="/goodsinster" index="1-1">修改商品</el-menu-item>
              <el-menu-item route="/goodsremove" index="1-2">删除商品</el-menu-item>
              <el-menu-item route="/goodsupdata" index="1-3">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>投放广告</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">广告项目一</el-menu-item>
              <el-menu-item index="2-2">广告项目二</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
  }
};
</script>
<style lang="scss" scoped>
.el-col {
  width: 100%;
}
.logo{
    height: 60px;
    width: 100%;
    background: url('../assets/img/logo.png') no-repeat center;
    background-size:contain;
    margin-bottom:20px; 
}
.tac{
    height: 650px;
    background-color: rgb(84, 92, 100);
}
</style>


