<template>
  <div class="cart_box">
    <div class="head">Mei</div>
    <div class="main">
      <div class="backimg"></div>
      <div class="cart">
        <!-- <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="150"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.cart_box {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 5.2rem;
    background: rgb(240, 162, 162);
    line-height: 5.2rem;
    text-align: center;
    font-size: 2rem;
    color: #fff;
  }
  .main {
    height: 100%;
    position: relative;
    .backimg {
      background: url("../assets/img/des_header_logo.png");
      background-position: 0 0;
      min-height: 40rem;
      opacity: 0.1;
    }  .cart{
          position: absolute;
          top: 0;
      }
  }
}
</style>

