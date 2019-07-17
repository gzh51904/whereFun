<template>
  <el-container>
    <el-aside width="200px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Hader />
      </el-header>
      <el-main>
          <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Hader from "../components/Hader";
import Main from "../components/Main";
export default {
  components: {
    Sidebar,
    Hader,
    Main
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-aside,
.el-main {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
