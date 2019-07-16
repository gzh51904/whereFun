<template>
  <div id="hader">
    <h1>后台管理系统</h1>
    <el-dropdown>
      <span class="el-dropdown-link">
        用户名
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu placement="bottom" slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<style lang="scss" scoped>
#hader {
  width: 100%;
  position: relative;
  line-height: 60px;
  h1{
      display: inline;
      text-align: center;
      font-size: 26px;
      font-weight: 900;
  }
  .el-dropdown {
    position: absolute;
    right: 0;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>

